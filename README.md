# ⚛️ Fizik Premium - Çembersel Hareket ve Dönme Dinamiği PWA

Modern, offline çalışabilen Fizik sınavı hazırlık Progressive Web App'i.

## 🎯 Özellikler

### 📚 6 Ana Konu
1. **Düzgün Çembersel Hareket** - Periyot, frekans, çizgisel hız, açısal hız, merkezcil ivme ve kuvvet
2. **Viraj Dönüş Şartları** - Yatay, eğimli, düşey düzlemde dönme, silindir içi, konik sarkaç
3. **Dönme Kinetik Enerjisi** - Eylemsizlik momenti, dönme ve öteleme enerjisi
4. **Açısal Momentum** - Açısal momentum korunumu, döner sandalye örneği
5. **Kütle Çekim Potansiyel Enerjisi** - Evrensel çekim kuvveti, çekim alanı
6. **Kepler Kanunları** - 3 temel kanun (Yörüngeler, Alanlar, Periyotlar)

### ✨ Quiz Sistemi
- Her konu için 4 soru
- Toplam 24 quiz sorusu
- Anında feedback ve açıklamalar
- Skor takibi (%80+ Mükemmel)

### 🎨 Tema Desteği
- **Light Mode** - Mavi vurgular, beyaz arkaplan
- **Dark Mode** - Koyu tema, göz dostu
- Otomatik tema kaydetme

### 📱 PWA Özellikleri
- ✅ Offline çalışma (Service Worker)
- ✅ Ana ekrana eklenebilir
- ✅ Responsive tasarım (Mobile/Tablet/Desktop)
- ✅ İlerleme takibi
- ✅ LocalStorage ile kayıt

## 🚀 Kurulum ve Çalıştırma

### Yerel Sunucu ile Test

```bash
# Python 3 ile
python3 -m http.server 8000

# Node.js ile (npx)
npx http-server -p 8000

# PHP ile
php -S localhost:8000
```

Tarayıcıda: `http://localhost:8000`

## 📂 Dosya Yapısı

```
fizik-pwa/
├── index.html          # Ana sayfa
├── manifest.json       # PWA metadata
├── sw.js              # Service Worker
├── styles.css         # Stiller (responsive + tema)
├── script.js          # JavaScript logic
├── content.js         # 6 konu içeriği
├── .gitignore         # Git ignore
└── README.md          # Bu dosya
```

## 🛠️ Teknolojiler

- **HTML5** - Semantic markup
- **CSS3** - Variables, Grid, Flexbox, Responsive
- **Vanilla JavaScript** - ES6+, 0 dependency
- **Service Worker** - Offline support
- **LocalStorage** - Progress tracking

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (Hamburger menü)
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 💾 LocalStorage Kullanımı

- `theme` - Tema tercihi (light/dark)
- `currentSection` - Son görüntülenen bölüm
- `visitedSections` - Tamamlanan konular (array)

## 🎓 Kullanım

1. İstediğin konuya sidebar'dan tıkla
2. Konu içeriğini oku
3. "Bu Konuyu Test Et" butonuna tıkla
4. Quiz sorularını çöz
5. İlerleme çubuğunu takip et

## 🌙 Tema Değiştirme

Sağ üst köşedeki güneş/ay ikonuna tıklayarak tema değiştirilebilir.

## 📊 İlerleme Takibi

- Her ziyaret edilen konu otomatik kaydedilir
- Sol sidebar'da ilerleme çubuğu gösterilir
- 6 konudan kaçını tamamladığını görebilirsin

## 🏆 Quiz Puanlama

- Her doğru cevap: +1 puan
- %80 ve üzeri: Mükemmel 🌟
- %60-79: İyi çalışma ✨
- %40-59: Fena değil 📚
- %0-39: Daha çok çalış 💡

## 📜 Lisans

MIT License - Eğitim amaçlı kullanım için serbesttir.

## 💪 Başarılar!

Fizik sınavında başarılar dileriz! 🎯
