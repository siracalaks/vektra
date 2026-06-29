# Vektra İstihbarat — yerel başlangıç (kurulum yok)

İnternetteki dev/araç bilgisini canlı toplayan motorun **küçük, çalışan** versiyonu.
Tam motor (n8n + Qdrant + Ollama vision + Supabase) `../00-meta/engine-setup-guide.md`
içinde; burası VPS/kurulum gerektirmeden bugün kullanabileceğin başlangıç.

## En kolay yol — tarayıcıda (önerilen, kurulum yok)
1. **`intel.html`** dosyasına çift tıkla (tarayıcıda açılır).
2. **"Topla"** butonuna bas.
3. GitHub + Hacker News + **Dev.to**'dan canlı sonuçlar gelir; otomatik aşamaya/alana
   göre etiketlenir ve **194 aracınla eşleşenler** mor etiketle işaretlenir.
4. Üstteki kutu + filtrelerle ara; karta tıkla → kaynağa git.

### Akıllı özellikler
- **⭐ Kaydet** — bir kartın yıldızına bas → tarayıcında **kalıcı** saklanır
  (sayfayı kapatıp açsan da durur). "Sadece kayıtlılar" ile koleksiyonunu gör.
- **YENİ etiketi** — bulgu senin 194 araçlık kütüphanende yoksa yeşil **YENİ**
  yer; "Sadece YENİ" ile sadece keşfedilmemiş şeylere bak.
- **Senin alanların** — kelimeler e-ticaret / UI-UX / n8n / video gibi alanlara
  göre hazır; metin kutusunu istediğin gibi değiştir.

> İnternet gerekir (canlı API çağrısı yapar). GitHub kutusu boş kalabilir;
> token sadece çok sık kullanırsan limiti artırmak için.

## Alternatif — komut satırı (Node 18+ kuruluysa)
```bash
node harvest.mjs        # intel-data.js üretir
```
*(Not: makinende `npm`/`node` bellekten çöküyorsa bu yolu atla, tarayıcı yolunu kullan.)*

## Nasıl çalışıyor (kısaca)
- **Kaynak:** Hacker News (Algolia API, auth yok) + GitHub Search (auth opsiyonel).
- **Sınıflandırma:** basit anahtar-kelime kuralları → stage + domain. (Tam motorda
  bunun yerine Ollama embedding + semantic sınıflandırma var.)
- **Eşleştirme:** başlık metni `registry.json`'daki 194 araç adıyla karşılaştırılır.
- CORS doğrulandı: her iki API de `Access-Control-Allow-Origin: *` döndürür,
  yani `file://`'den (çift tıkla) çalışır.

## Sonraki adım (ölçekleme)
Bu yerel başlangıç işini görünce, `../00-meta/engine-setup-guide.md` Adım 1 ile
aynı mantığı n8n'de kurup Qdrant'a yazarsın; sonuçlar tam dashboard'da görünür.
