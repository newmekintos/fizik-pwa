# Fizik Premium - PWA

Modern, offline çalışabilen fizik sınavı hazırlık uygulaması.

## Canlı Demo

**[https://newmekintos.github.io/fizik-pwa/](https://newmekintos.github.io/fizik-pwa/)**

## Konular

1. **Düzgün Çembersel Hareket**
   - Periyot ve Frekans
   - Çizgisel Hız
   - Açısal Hız
   - Merkezcil İvme ve Kuvvet

2. **Viraj Dönüş Şartları**
   - Yatay Virajda Dönme
   - Eğimli Virajda Dönme
   - Düşey Düzlemde Çembersel Hareket
   - Silindir İçinde Dönen Cisimler
   - Konik Sarkaç

3. **Dönme Kinetik Enerjisi**
   - Dönerek Öteleme Hareketi
   - Eylemsizlik Momenti
   - Dönme Kinetik Enerjisi Formülü

4. **Açısal Momentum**
   - Açısal Momentum Tanımı
   - Açısal Momentum Korunumu
   - Döner Sandalye Örneği

5. **Kütle Çekim Potansiyel Enerjisi**
   - Evrensel Çekim Kuvveti
   - Kütle Çekim Alanı
   - Yer Çekim İvmesi

6. **Kepler Kanunları**
   - Yörüngeler Kanunu
   - Alanlar Kanunu
   - Periyotlar Kanunu

## Özellikler

- **Progressive Web App** - Offline çalışma desteği
- **Dark/Light Tema** - Göz dostu tasarım
- **Responsive** - Mobil, tablet, desktop uyumlu
- **Quiz Sistemi** - Her konu için test soruları (randomize şıklar)
- **Modern UI/UX** - Temiz ve kullanıcı dostu arayüz
- **İlerleme Takibi** - localStorage ile kayıt
- **PWA Install** - Ana ekrana ekleme desteği
- **Kapsamlı İçerik** - Tüm formüller ve açıklamalar
- **Sembol Açıklamaları** - Her matematiksel sembol açıklanmış

## Kurulum

### Yerel Geliştirme

```bash
# Projeyi klonla
git clone https://github.com/newmekintos/fizik-pwa.git
cd fizik-pwa

# Basit HTTP sunucusu başlat
python3 -m http.server 8080

# Tarayıcıda aç
# http://localhost:8080
```

### PWA Olarak Kullanım

1. [Canlı siteyi](https://newmekintos.github.io/fizik-pwa/) ziyaret et
2. Sağ alttaki " Yükle" butonuna tıkla
3. Uygulamayı ana ekrana ekle
4. Offline kullan

## Dosya Yapısı

```
fizik-pwa/
├── index.html          # Ana sayfa
├── styles.css          # CSS stilleri (kırmızı tema)
├── script.js           # JavaScript mantığı
├── content.js          # Konu içerikleri (470+ satır)
├── sw.js              # Service Worker (v1.0)
├── manifest.json      # PWA manifest
├── .gitignore         # Git ignore
└── README.md          # Bu dosya
```

## Teknolojiler

- **HTML5** - Semantic markup
- **CSS3** - Modern styling, CSS Grid, Flexbox, CSS Variables
- **JavaScript (ES6+)** - Vanilla JS, no dependencies
- **Service Worker** - Offline support, cache-first strategy
- **LocalStorage** - Veri saklama
- **PWA** - Progressive Web App özellikleri

## Tema Renkleri

**Light Tema:**
- Primary: #e63946 (kırmızı)
- Secondary: #457b9d (mavi)
- Accent: #f77f00 (turuncu)

**Dark Tema:**
- Background: #0d1117 (koyu)
- Text: #f0f6fc (açık)

## Tarayıcı Desteği

- **Chrome/Edge (Önerilen)**
- **Firefox**
- **Safari**
- **Opera**
- **Samsung Internet**

## 📊 İstatistikler

- **6** Ana Konu
- **24** Quiz Sorusu
- **470+** Satır İçerik
- **0** Dependency
- **Offline** Çalışma Desteği

## 📄 Lisans

MIT License - Eğitim amaçlı kullanım için tasarlanmıştır.

## 👤 Geliştirici

**newmekintos**
- GitHub: [@newmekintos](https://github.com/newmekintos)

## 🔗 İlgili Projeler

- [İnkılap Tarihi PWA](https://github.com/newmekintos/inkilap-tarihi-pwa) - 12. Sınıf İnkılap Tarihi

---

⭐ **Beğendiyseniz yıldız vermeyi unutmayın!**

📱 **[Şimdi Deneyin →](https://newmekintos.github.io/fizik-pwa/)**
