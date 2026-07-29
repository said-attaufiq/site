# Rencana Implementasi: Sinkronisasi Seluruh Konten Galeri Karya

Memperbaiki masalah di mana tidak semua gambar dan video muncul di halaman **Karya** dengan memperbarui data galeri agar mencakup seluruh file yang ada di folder aset.

## User Review Required

> [!NOTE]
> Karena jumlah file yang akan ditampilkan sangat banyak (terutama di kategori Logos dan Digital Illustrations), saya telah mengaktifkan *lazy loading* agar performa browser tetap terjaga saat memuat ratusan aset.

## Proposed Changes

### [Web Frontend]

#### [MODIFY] [script.js](file:///D:/Project App/site/script.js)
*   Memperbarui objek `galleryData` dengan daftar lengkap file untuk ke-13 kategori.
*   Memastikan ekstensi file (seperti `.webp`, `.jpg`, `.mp4`) sesuai dengan file fisik yang ada di direktori `assets/`.
*   Menghapus pembatasan manual pada jumlah file yang ditampilkan.

## Kategori yang Diperbarui:
1.  **Apps**: 3 video.
2.  **Logos**: ~48 gambar (termasuk mockups dan ikon).
3.  **Videos Opening**: 6 video.
4.  **Animation**: 6 video.
5.  **Speed Paint**: 13 video.
6.  **Painting**: 16 gambar.
7.  **Wood Art**: 6 gambar/webp.
8.  **Pencil Art**: 13 gambar.
9.  **Smudge Art**: 7 gambar.
10. **Vector Art**: 9 gambar/webp.
11. **Glitter Art**: 4 gambar.
12. **T-Shirt Design**: 9 gambar/webp.
13. **Digital Illustrations**: ~34 gambar.

## Verification Plan

### Manual Verification
*   Buka halaman **Karya**.
*   Buka kategori **Logos** dan **Digital Illustrations**: Pastikan jumlah item yang muncul jauh lebih banyak dari sebelumnya.
*   Cek kategori **Wood Art** dan **T-Shirt Design**: Pastikan file dengan ekstensi `.webp` muncul dengan benar.
*   Pastikan fitur pratinjau (lightbox) tetap berfungsi untuk file-file baru ini.
