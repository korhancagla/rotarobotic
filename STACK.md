# Rota Robotik Teknik Yapı

## Teknolojiler

- Astro 7 ve TypeScript
- Yerel SVG ikon bileşeni
- Leaflet (iletişim haritası için gecikmeli yüklenir)
- PHP iletişim formu uç noktası

## Aktif rotalar

| Rota | Kaynak | Açıklama |
|---|---|---|
| `/` | `src/pages/index.astro` | Türkçe ana sayfa |
| `/en/` | `src/pages/en/index.astro` | İngilizce ana sayfa |
| `/referanslar/` | `src/pages/referanslar/index.astro` | Referanslar |

## Mimari kurallar

- Sayfalar `RotaLayout.astro` kullanır.
- Ortak font ve tasarım kuralları `src/styles/` altında tutulur.
- Kullanılmayan üçüncü taraf paket eklenmez.
- Büyük tarayıcı bağımlılıkları mümkünse görünür olana kadar dinamik yüklenir.
- Kaynak görseller `public/media/` altında tutulur; üretimde yalnız kullanılan formatlar bırakılır.
- Form işleyişi `public/contact.php` üzerinden devam eder.
- Üretim öncesinde `npm run build` hatasız tamamlanmalıdır.

## Dokunurken dikkat

- `public/contact.php` canlı sunucuda PHP ve e-posta yapılandırmasına bağlıdır.
- Hero videosu ilk ekran deneyiminin parçasıdır; yeniden sıkıştırma görsel kalite kontrolüyle yapılmalıdır.
- `dist/`, `.astro/` ve `node_modules/` üretilen klasörlerdir ve sürüm kontrolüne alınmaz.
