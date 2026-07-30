# Rencana Implementasi: Refinement Animasi & Navigasi Galeri

Meningkatkan kualitas animasi navigasi utama, menambahkan kontrol horizontal pada galeri karya, dan memperbaiki sinkronisasi konten.

## User Review Required

> [!IMPORTANT]
> Efek "squishy" pada menu kiri atas akan diimplementasikan sebagai indikator halaman aktif yang muncul dengan animasi elastis saat berpindah.
>
> Navigasi horizontal di halaman Karya akan menggunakan tombol panah melayang dan indikator titik di bagian bawah.

## Proposed Changes

### [Web Frontend]

#### [MODIFY] [style.css](file:///D:/Project App/site/style.css)
*   **Elastic Capsule**: Mengubah easing transisi navigasi menjadi `cubic-bezier(0.68, -0.6, 0.32, 1.6)` untuk efek membal/elastis.
*   **Squishy Menu**: Menambahkan elemen penanda di pojok kiri atas navbar yang menunjukkan menu aktif dengan animasi "squishy".
*   **Gallery Controls**:
    *   Menambahkan tombol `caret-left` dan `caret-right` yang melayang di sisi galeri.
    *   Indikator titik (dots) di bawah galeri, dengan titik tengah yang lebih besar secara dinamis.
*   **Lightbox Navigation**: Menambahkan tombol navigasi kiri/kanan di dalam modal pratinjau.

#### [MODIFY] [script.js](file:///D:/Project App/site/script.js)
*   **Carousel Logic**: Menambahkan fungsi untuk scroll galeri secara programatik saat panah diketuk.
*   **Dots Sync**: Menambahkan *scroll listener* untuk memperbarui titik indikator berdasarkan posisi scroll galeri.
*   **Preview Gallery**: Mengubah logika pratinjau agar bisa berpindah antar item dalam kategori yang sama menggunakan panah keyboard atau tombol UI.
*   **Fix Content**: Memastikan penanganan nama file dengan karakter khusus (spasi, kurung) ditangani dengan benar untuk kategori Vector dan T-Shirt.

## Verification Plan

### Manual Verification
*   Buka menu bar, berpindah antar halaman: pastikan kapsul bergerak elastis tanpa kedipan.
*   Halaman Karya:
    *   Klik panah kiri/kanan pada kategori: galeri harus bergeser.
    *   Perhatikan titik indikator: pastikan titik yang aktif membesar.
*   Mode Preview:
    *   Klik satu gambar, lalu klik panah di dalam modal: pastikan berpindah ke karya selanjutnya dalam kategori yang sama.
*   Cek kategori Vector & T-Shirt: Pastikan gambar muncul semua.
