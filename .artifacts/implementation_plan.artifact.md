# Implementasi Fitur Pencarian Global (Global Search)

Rencana ini akan menambahkan fitur pencarian ke seluruh website. Pengunjung dapat mencari karya, artikel jurnal, atau informasi lainnya melalui satu kolom pencarian yang muncul dari navigasi.

## User Review Required

> [!IMPORTANT]
> **Cakupan Pencarian:** Pencarian akan mencakup Judul/Kategori Galeri, Judul/Tag/Kategori Jurnal, serta isi konten Jurnal (Markdown).
> **Penempatan:** Tombol pencarian akan diletakkan di sebelah kanan menu navigasi pada semua halaman.
> **Interaksi:** Mengetuk ikon pencarian akan memunculkan "kapsul" input di bawah navigasi. Hasil pencarian akan ditampilkan dalam modal overlay agar tidak mengganggu tata letak halaman yang ada.

## Proposed Changes

### [UI & Navigation]

#### [MODIFY] [index.html](file:///D:/Project App/site/index.html), [jurnal.html](file:///D:/Project App/site/jurnal.html), [karya.html](file:///D:/Project App/site/karya.html), [tentang.html](file:///D:/Project App/site/tentang.html), [kontak.html](file:///D:/Project App/site/kontak.html)
- Menambahkan tombol ikon pencarian (`magnifying-glass-bold.svg`) di dalam `nav-content`.
- Menambahkan struktur HTML untuk `search-capsule` (input) dan `search-results-overlay`.

### [Styling]

#### [MODIFY] [style.css](file:///D:/Project App/site/style.css)
- Menambahkan styling untuk tombol pencarian (ikon transparan dengan efek hover).
- Menambahkan styling untuk **Search Capsule**: Input bar yang muncul dengan animasi slide-down dan gaya glassmorphism.
- Menambahkan styling untuk **Search Results Overlay**: Tampilan fullscreen transparan untuk menampilkan daftar hasil pencarian.

### [Logic & Search Engine]

#### [MODIFY] [script.js](file:///D:/Project App/site/script.js)
- **Search Controller:** Logika untuk membuka/menutup kapsul pencarian.
- **Global Indexer:** Fungsi untuk mengumpulkan data dari `galleryData` dan memuat metadata dari `jurnal-manifest.json` ke dalam index pencarian saat pertama kali dicari.
- **Search Logic:** Algoritma pencarian berbasis teks yang mencocokkan kata kunci dengan judul, kategori, hashtag, dan konten.
- **Result Renderer:** Menampilkan hasil pencarian yang dikelompokkan berdasarkan tipe (Karya atau Jurnal).

## Verification Plan

### Manual Verification
1. Klik ikon pencarian di navigasi halaman mana pun.
2. Pastikan kolom input muncul di bawah navigasi.
3. Ketik kata kunci (misal: "puisi", "logo", atau hashtag tertentu).
4. Verifikasi hasil pencarian muncul secara real-time atau setelah menekan Enter.
5. Klik pada hasil pencarian untuk diarahkan ke konten yang sesuai.
6. Uji responsivitas kolom pencarian di layar mobile.
