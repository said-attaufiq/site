# Rencana Implementasi: Refinement Beranda & Navigasi Liquid

Memperbaiki tata letak beranda, memperbarui konten teks sesuai branding baru, dan mengimplementasikan animasi navigasi yang bersifat "fluid/gooey" saat berpindah halaman.

## User Review Required

> [!IMPORTANT]
> Untuk mencapai efek navigasi yang berpindah secara smooth antar halaman ("seperti butiran air"), saya akan menggunakan **View Transitions API**. Efek ini bekerja paling baik di browser berbasis Chromium (Chrome, Edge). Untuk browser lain, saya akan menyediakan *fallback* animasi yang tetap elegan.

## Proposed Changes

### [Web Frontend]

#### [MODIFY] [style.css](file:///D:/Project App/site/style.css)
*   **Tata Letak**: Menambahkan `padding-top` pada `.hero-section` agar tidak tertimpa oleh navigation bar yang bersifat *fixed*.
*   **Navigasi Fluid**:
    *   Mengimplementasikan SVG filter "gooey" untuk memberikan efek seperti butiran air pada kapsul navigasi.
    *   Mengatur `view-transition-name` pada elemen navigasi agar browser dapat menganimasikan perpindahannya secara otomatis saat berganti halaman.
    *   Menambahkan animasi "menipis" dan "melebar" pada transisi navigasi.
*   **Typography**: Menambahkan gaya khusus untuk sub-judul "creator, artist, writer, developer".

#### [MODIFY] [index.html](file:///D:/Project App/site/index.html)
*   Mengubah struktur Hero:
    *   `Said@taufiq` (dengan @taufiq berwarna gradien).
    *   Menambahkan baris "creator, artist, writer, developer".
    *   Memperbarui teks filosofi sesuai permintaan.

#### [MODIFY] [karya.html](file:///D:/Project App/site/karya.html), [tentang.html](file:///D:/Project App/site/tentang.html), [kontak.html](file:///D:/Project App/site/kontak.html)
*   Menyesuaikan struktur navigasi agar mendukung animasi fluid yang baru.

#### [MODIFY] [script.js](file:///D:/Project App/site/script.js)
*   Menambahkan logika sederhana untuk mendukung View Transitions (opsional, karena CSS sudah menangani sebagian besar transisi antar dokumen).

## Content Update (Beranda)
*   **Title**: `Said@taufiq`
*   **Sub-title**: `creator, artist, writer, developer`
*   **Description**: `Sebuah karya tidak berhenti pada apa yang terlihat, tetapi hidup melalui ide, cerita, dan pengalaman dibaliknya.`

## Verification Plan

### Manual Verification
*   Buka Beranda dan pastikan tidak ada tumpang tindih dengan menu bar.
*   Klik antar menu dan perhatikan gerakan kapsul navigasi: harus terlihat mengecil/menipis saat berpindah dan melebar kembali di posisi tujuan.
*   Pastikan warna `@taufiq` sesuai dengan gradien yang diinginkan.
