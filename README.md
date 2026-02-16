# müziğim.net

**Profesyonel Online Müzik Akademisi** – Modern, animasyonlu ve çok sayfalı müzik eğitim sitesi.

## Proje Yapısı

- **index.html** – Ana sayfa: fullscreen gradient hero, özellik kartları, CTA butonları. Butonlar akademi sayfasını yeni sekmede açar.
- **academy.html** – Akademi: sidebar menü (Türler, Enstrümanlar, Teknikler, Ünlü Müzisyenler, Ders Programı), bölümler ve kartlar. Türler → Rock, rock.html’e yeni sekmede gider.
- **rock.html** – Rock sayfası: 5 grup sırayla (1. Nirvana, 2. Tame Impala, 3. Led Zeppelin, 4. Queen, 5. Arctic Monkeys). Her biri kısa açıklama + responsive YouTube iframe.
- **style.css** – Ortak stil: animasyonlu gradient, glassmorphism, 3 nokta menü, sidebar, responsive video sarmalayıcı. Metin seçimi yalnızca `.content-area` içinde kapatıldı; buton/link tıklanabilir.
- **script.js** – 3 nokta menü (aç/kapa, dışarı tıklayınca kapanır), `.content-area` içinde sağ tık ve Ctrl+C / Ctrl+U / Ctrl+A engelleme, sidebar toggle, anchor link smooth scroll. Tüm kod `DOMContentLoaded` içinde, güvenli element kontrolü.

## Davranış Kuralları

1. İçerik bölümlerindeki metin seçilemez (`.content-area { user-select: none }`).
2. Butonlar, linkler ve menüler tıklanabilir kalır; `pointer-events` global kapatılmaz.
3. Ana sayfa CTA’ları ve menü linkleri `target="_blank"` ile yeni sekmede açılır.
4. Sayfa içi geçişler gerçek anchor linkleri ve smooth scroll ile yapılır.
5. 3 nokta menü: tıklanınca dropdown açılır/kapanır, dışarı tıklanınca kapanır, animasyonlu, layout kaydırmaz.

## Çalıştırma

`index.html` dosyasını tarayıcıda açın veya yerel sunucu kullanın:

```bash
python -m http.server 8000
# http://localhost:8000
```

## Teknik

- Sadece HTML, CSS ve JS; harici kütüphane yok.
- JS tamamı `DOMContentLoaded` içinde; null kontrolleri ile konsol hatası hedeflenmez.
- Her sayfa kendi başına yüklenebilir; linkler ve videolar çalışır.
- YouTube iframe’ler 16:9 responsive (`.video-wrap` + padding-bottom tekniği).

## Lisans

Eğitim ve portfolyo amaçlıdır.
