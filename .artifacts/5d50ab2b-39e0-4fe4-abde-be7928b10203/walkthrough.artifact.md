# Walkthrough: Portofolio Liquid Glass

Saya telah berhasil membuat UI portofolio dengan tema gelap yang elegan, menggunakan teknik *Glassmorphism* dan latar belakang *Liquid* yang dinamis.

## Perubahan yang Dilakukan

### 1. [index.html](file:///D:/Project App/site/index.html)
Menyusun kerangka website yang bersih dengan bagian:
- **Navigation Bar**: Melayang dengan efek blur.
- **Hero Section**: Judul besar dengan gradien teks.
- **Projects Grid**: Kartu interaktif untuk memamerkan karya.
- **About & Contact**: Informasi tambahan dan ajakan bertindak (CTA).

### 2. [style.css](file:///D:/Project App/site/style.css)
- **Liquid Background**: Menggunakan 3 blob warna-warni di belakang layar dengan filter blur tinggi (80px) untuk menciptakan kedalaman.
- **Glassmorphism**: Menggunakan `backdrop-filter: blur(20px)` dan border semi-transparan untuk efek kaca premium.
- **Animasi**: Animasi *fade-in* saat halaman dimuat dan transisi *hover* yang halus.

### 3. [script.js](file:///D:/Project App/site/script.js)
- **Scroll Reveal**: Elemen akan muncul perlahan saat pengguna menggulir ke bawah.
- **Parallax Mouse**: Blob di latar belakang akan bergerak sedikit mengikuti kursor mouse untuk memberikan kesan interaktif.

## Cara Melihat Hasilnya
1. Klik kanan pada file [index.html](file:///D:/Project App/site/index.html).
2. Pilih **Open in Browser** (Chrome atau Safari direkomendasikan untuk performa blur terbaik).

> [!TIP]
> Desain ini sangat minimalis. Anda dapat mengganti warna di `--gradient-1` dan `--gradient-2` dalam file `style.css` untuk menyesuaikan nuansa warna favorit Anda.
