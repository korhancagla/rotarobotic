# Rota Robotik Web Sitesi

Astro ile üretilen, Türkçe ve İngilizce statik kurumsal site.

## Çalıştırma

```bash
npm install
npm run dev
```

macOS üzerinde `SITEYI_AC.command` dosyası da yerel geliştirme sunucusunu başlatır.

## Kontrol ve üretim

```bash
npm run check
npm run build
npm run preview
```

Üretim çıktısı `dist/` klasöründe oluşur.

## Sayfalar

- Türkçe ana sayfa: `/`
- İngilizce ana sayfa: `/en/`
- Referanslar: `/referanslar/`
- Eski galeri adresleri ilgili teknoloji bölümüne kalıcı olarak yönlendirilir.

## Proje yapısı

- `src/components/HomePage.astro`: ana sayfa içeriği ve etkileşimleri
- `src/components/ReferencesPage.astro`: referans sayfası
- `src/layouts/RotaLayout.astro`: ortak HTML, SEO ve global stiller
- `src/styles/rota.css`: görsel sistem ve responsive kurallar
- `public/media/`: kullanılan görsel ve video dosyaları
- `public/contact.php`: iletişim formu sunucu uç noktası

Harita kütüphanesi, ziyaretçi iletişim bölümüne yaklaştığında yüklenir; ilk açılış paketine dahil edilmez.
