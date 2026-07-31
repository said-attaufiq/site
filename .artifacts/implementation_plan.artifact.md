# Perbaikan Menyeluruh Bug & UI (Stabilitas & Estetika)

Rencana ini bertujuan untuk menyelesaikan masalah teks jurnal yang hilang, kerusakan tata letak (layar putih/bertumpuk), serta memperbaiki tampilan pencarian dan filter kategori agar benar-benar berfungsi dan estetik.

## User Review Required

> [!IMPORTANT]
> **Pencarian:** Navigasi (Menu) dan Bar Pencarian akan tetap terlihat di atas hasil pencarian. Hasil pencarian muncul di bawahnya dengan latar belakang transparan yang elegan.
> **Jurnal:** Teks artikel dipastikan berwarna putih solid agar terbaca jelas. Library `marked.js` akan ditambahkan ke seluruh halaman untuk memastikan sistem baca berfungsi di mana saja.
> **Stabilitas:** Logika klik luar akan diperketat agar tidak menyebabkan kerusakan visual pada halaman (masalah layar putih).

## Proposed Changes

### [Library & Script Support]

#### [MODIFY] Semua Halaman HTML
- Menambahkan library `marked.js` di `index.html`, `karya.html`, `tentang.html`, dan `kontak.html`.
- Memastikan struktur `search-overlay` dan `jurnal-modal` ada di semua halaman yang membutuhkannya (terutama Beranda untuk fitur "Baca Selengkapnya").

### [Logic Fixes]

#### [MODIFY] [script.js](file:///D:/Project App/site/script.js)
- **Frontmatter Parser:** Menggunakan regex yang lebih kuat untuk menangani spasi dan karakter baris baru (`\r\n` atau `\n`). Ini memastikan kategori dan tag terdeteksi.
- **Search Toggle Logic:** Memisahkan fungsi animasi buka/tutup agar tidak ada tabrakan state.
- **Click-Outside Guard:** Memastikan deteksi klik luar hanya berlaku untuk elemen pencarian, bukan elemen lain yang bisa merusak layout.
- **Global `openJournalEntry`:** Memindahkan fungsi ini ke area global agar bisa dipanggil dari hasil pencarian maupun kartu di beranda.

### [UI & Styling Refinement]

#### [MODIFY] [style.css](file:///D:/Project App/site/style.css)
- **Search Button Clean-up:** Menghapus background putih/kotak pada ikon pencarian.
- **Search Overlay Position:** Mengatur `top` dan `z-index` agar overlay hasil pencarian berada di bawah bar navigasi.
- **Filter Capsule Style:** Mengubah tombol kategori menjadi bentuk kapsul (border-radius besar) yang identik dengan menu utama.
- **Force White Text:** Menambahkan aturan CSS `!important` pada warna teks di dalam modal jurnal agar tidak tertutup latar belakang.

## Verification Plan

### Manual Verification
1. **Uji Jurnal (Beranda & Halaman Jurnal):** Klik "Baca Selengkapnya" dan pastikan tulisan muncul dengan warna putih yang jelas.
2. **Uji Stabilitas Klik:** Klik di sembarang area luar dan pastikan halaman tidak berubah menjadi putih atau berantakan.
3. **Uji Filter:** Pastikan kategori "Puisi" (dan kategori lain nantinya) muncul sebagai kapsul di samping "Semua".
4. **Uji Pencarian:** Masukkan kata kunci, tekan Enter, dan pastikan Menu Utama tetap terlihat di atas hasil pencarian.
