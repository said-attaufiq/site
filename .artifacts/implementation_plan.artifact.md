# Perbaikan Bug Jurnal & Pemurnian UI Pencarian

Rencana ini bertujuan untuk memperbaiki masalah teks jurnal yang tidak muncul, memperbaiki kerusakan tata letak saat klik area sembarang, serta menyempurnakan tampilan filter jurnal dan overlay pencarian.

## User Review Required

> [!IMPORTANT]
> **Pencarian:** Overlay hasil pencarian sekarang akan muncul di bawah navigasi, sehingga menu dan bar pencarian tetap terlihat dan dapat diakses.
> **Filter Jurnal:** Tombol kategori akan dibuat lebih konsisten dengan gaya navigasi utama (kapsul).
> **Stabilitas Layout:** Memperbaiki konflik script yang menyebabkan tampilan rusak atau menjadi putih saat mengklik area sembarang.

## Proposed Changes

### [Bug Fixes]

#### [MODIFY] [script.js](file:///D:/Project App/site/script.js)
- **Fix Jurnal Content:** Memastikan konten Markdown dimuat dengan benar sebelum ditampilkan di modal. Menambahkan pengecekan jika konten kosong.
- **Fix Layout Crash:** Memperbaiki logika "Click Outside" agar tidak mengganggu elemen global lainnya dan mencegah perilaku tidak terduga pada `body` atau `main`.
- **Fix Search Interaction:** Menyesuaikan z-index dan posisi tampilan hasil pencarian.

#### [MODIFY] [style.css](file:///D:/Project App/site/style.css)
- **Fix Text Visibility:** Memastikan warna teks di dalam `.markdown-body` kontras dengan latar belakang modal.
- **Fix Overlapping Nav:** Menghapus atau menyesuaikan properti CSS yang menyebabkan teks menu bertumpuk saat modal aktif.

### [UI Enhancements]

#### [MODIFY] [style.css](file:///D:/Project App/site/style.css)
- **Search Overlay:** Mengubah `top: 15vh` menjadi posisi yang dinamis tepat di bawah navigasi kapsul. Mengatur latar belakang agar lebih transparan (blur) tanpa menutupi navigasi.
- **Journal Filters:** Mendesain ulang `.filter-btn` agar memiliki bentuk kapsul yang identik dengan menu utama.

#### [MODIFY] [jurnal.html](file:///D:/Project App/site/jurnal.html)
- Penyesuaian struktur jika diperlukan untuk mendukung filter yang lebih rapi.

## Verification Plan

### Manual Verification
1. **Uji Jurnal:** Klik "Baca Selengkapnya" dan pastikan teks Markdown muncul dengan jelas dan terbaca.
2. **Uji Klik Global:** Klik di luar area modal/search berkali-kali dan pastikan layout website tetap stabil (tidak menjadi putih atau bertumpuk).
3. **Uji Pencarian:** Lakukan pencarian dan pastikan navigasi atas (Menu & Search Bar) tetap terlihat di atas hasil pencarian.
4. **Uji Filter:** Pastikan semua kategori muncul sebagai tombol kapsul tersendiri.
