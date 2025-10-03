# 🌐 Faruk Albayrak - Kişisel Portfolyo

Merhaba! Bu proje, **Vite + React + Tailwind CSS** teknolojileriyle geliştirilmiş, benim kişisel portfolyo sitemdir.  
Amacım hem yazılım becerilerimi sergilemek hem de freelance / iş başvurularında modern bir vitrin oluşturmaktır.

---

## 🚀 Kullanılan Teknolojiler

- ⚛️ React 18
- ⚡ Vite – ultra hızlı geliştirme ortamı
- 💨 Tailwind CSS
- 🌙 Dark Mode desteği
- 📱 Responsive Tasarım
- 📡 GitHub Pages veya Netlify ile ücretsiz hosting

---

## 📁 Proje Yapısı

```bash
my-portfolio/
├── public/                # Statik dosyalar
├── src/
│   ├── assets/            # Görseller ve medya
│   ├── components/        # Tekrar kullanılabilir bileşenler
│   ├── data/              # Veri dosyaları (projeler, hizmetler)
│   ├── pages/             # Sayfalar (Home, About, Projects, Contact)
│   ├── App.jsx            # Ana uygulama bileşeni
│   └── main.jsx           # Uygulama giriş noktası
├── tailwind.config.js     # Tailwind yapılandırması
├── vite.config.js         # Vite yapılandırması
├── package.json           # Bağımlılıklar ve script'ler
└── README.md              # Bu dosya
```

## 💻 Projeyi Başlatmak ve Yayınlamak

```bash
git clone https://github.com/frk101/my-portfolio.git
cd my-portfolio
npm install
```

2. Geliştirme sunucusunu başlat.

```bash
npm run dev
```

Tarayıcıda aç:
http://localhost:5173

3. Üretim için build al.

```bash
npm run build
```

4. GitHub Pages ile yayınla

```bash
npm run deploy
```

Bu işlem dist/ klasörünü gh-pages branch'ine gönderir ve siteni GitHub Pages’de yayına alır.

5. GitHub Pages ayarları
   GitHub’da Settings > Pages bölümüne git

Source olarak gh-pages branch'ini seç

Folder olarak / (root) seçili olmalı

Kaydet ve bekle (birkaç dakika sürebilir)

6. vite.config.js dosyasına ekle

```bash
// vite.config.js
export default defineConfig({
  // ... diğer ayarlar
  base: "/my-portfolio/", // repo adınla aynı olmalı
});
```

## 🌍 Canlı Yayın Linki

https://frk101.github.io/

## 📬 İletişim

Email: frkalbayrak101@gmail.com

LinkedIn: https://linkedin.com/in/farukalbayrak

GitHub: https://github.com/frk101

Medium: https://medium.com/@frkalbayrak

## ⭐ Teşekkürler

Bu proje kendimi ifade etmek ve yazılım becerilerimi göstermek için hazırlandı.
Beğendiysen repoya ⭐ bırakmayı unutma!

---
