-- Internet Intelligence Engine — Supabase (Postgres) schema
-- Relational mirror of harvested items. Vectors live in Qdrant collection "intel"
-- (768-dim, nomic-embed-text); pgvector column is OPTIONAL if you prefer one store.
-- Run on your self-hosted Supabase. See ingestion-workflow.md (Pipeline B).

-- Optional: keep vectors in Postgres too (skip if using Qdrant only).
create extension if not exists vector;

-- Where an item came from (mirrors sources.yaml harvest_*).
create table if not exists intel_sources (
  id          text primary key,              -- e.g. 'github-harvest', 'instagram-harvest'
  name        text not null,
  weight      real not null default 0.5,      -- source signal weight (0..1)
  enabled     boolean not null default true
);

-- The taxonomy labels (kept in sync with classification-taxonomy.md).
create table if not exists intel_categories (
  id          bigserial primary key,
  axis        text not null check (axis in ('stage','type','domain')),
  label       text not null,
  unique (axis, label)
);

-- One row per harvested item.
create table if not exists intel_items (
  id            bigserial primary key,
  source_id     text references intel_sources(id),
  external_url  text not null,
  author        text,
  text          text,                         -- caption/title/body
  extracted_text text,                        -- vision/OCR output from images
  combined_text text,                         -- what gets embedded
  tool_mentions text[] default '{}',
  -- routing (from the classifier)
  stage         text,                         -- 01-ideation .. 09-learning-reference
  type          text,                         -- agent|skill|mcp|mvp|library|app|reference
  domain        text,                         -- presentations|voice|... (nullable)
  confidence    real,
  for_review    boolean not null default false,
  -- brain v2 (see brain-prompts.md)
  summary        text,                        -- plain 1-2 sentence summary
  why_it_matters text,                        -- one line tying it to your work
  relevance_score int,                        -- 0-100 (broad usefulness)
  is_new         boolean default true,        -- not found in registry.csv
  saved          boolean default false,       -- user starred it (dashboard)
  tags           text[] default '{}',         -- free-form, additive
  -- signal
  engagement    jsonb default '{}'::jsonb,    -- {likes, comments, upvotes, ...}
  embedding     vector(768),                  -- optional; Qdrant is source of truth
  embedding_model text default 'nomic-embed-text',
  content_hash  text,                         -- dedup key (sha256 of combined_text/image)
  created_at    timestamptz not null default now(),
  unique (content_hash)
);

-- Images attached to an item.
create table if not exists intel_images (
  id            bigserial primary key,
  item_id       bigint references intel_items(id) on delete cascade,
  storage_url   text not null,                -- Supabase Storage / MinIO
  content_hash  text,
  unique (content_hash)
);

-- User bookmarks (dashboard).
create table if not exists intel_bookmarks (
  user_id       uuid not null,                -- Supabase Auth user
  item_id       bigint references intel_items(id) on delete cascade,
  created_at    timestamptz not null default now(),
  primary key (user_id, item_id)
);

-- Helpful indexes for the dashboard filters.
create index if not exists idx_intel_items_routing on intel_items (stage, type, domain);
create index if not exists idx_intel_items_review  on intel_items (for_review);
create index if not exists idx_intel_items_created on intel_items (created_at desc);
create index if not exists idx_intel_items_tools   on intel_items using gin (tool_mentions);
-- Optional pgvector ANN index (only if you store vectors here):
-- create index on intel_items using hnsw (embedding vector_cosine_ops);

-- ---------------------------------------------------------------------------
-- Qdrant side (reference, not SQL): collection "intel", size 768, distance Cosine.
-- payload mirrors intel_items routing + source + tool_mentions + external_url.
-- Dedup: search top-1; if score > 0.95 treat as duplicate and skip insert.
-- ---------------------------------------------------------------------------

-- ---------------------------------------------------------------------------
-- Row Level Security — safe defaults for the zero-install dashboard.
-- The dashboard reads with the ANON key (browser); n8n writes with the
-- SERVICE_ROLE key (bypasses RLS). So: anon may SELECT, and may UPDATE only the
-- `saved` column (star/unstar). No anon insert/delete.
-- ---------------------------------------------------------------------------
alter table intel_items enable row level security;

revoke all on intel_items from anon;
grant select on intel_items to anon;
grant update (saved) on intel_items to anon;     -- column-level: only `saved`

create policy intel_anon_read on intel_items
  for select to anon using (true);

create policy intel_anon_save on intel_items
  for update to anon using (true) with check (true);

-- Helpful index for the dashboard's default sort (best, newest first).
create index if not exists idx_intel_items_rank on intel_items (relevance_score desc, created_at desc);
create index if not exists idx_intel_items_saved on intel_items (saved);
