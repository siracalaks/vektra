---
name: TanStack Query
stage: 03-frontend
type: library
cost: free
conn_type: npm
status: active
added: 2026-06-27
source_url: https://github.com/TanStack/query
---

# TanStack Query

**What it does:** Server-state management and data-fetching library with caching, background refetching and mutations.

**Stage / workflow:** Data layer — fetching, caching and syncing remote data in client components.

**Cost model:** Free and open source.

**Connection to Claude/n8n:** npm package.

**Connection recipe:**
```bash
npm install @tanstack/react-query
```

**When to use it:** When client-side data needs caching, deduplication, retries or background updates beyond a plain fetch.

**Why it's useful:** Complements Next.js 15 client components and works cleanly against Supabase or n8n REST/API endpoints.

**Notable alternatives:** SWR, RTK Query, Apollo Client.
