# Rencana Implementasi: Portofolio Multi-Halaman Night Blue

Memperbarui website portofolio menjadi sistem multi-halaman dengan tema warna *Night Blue* (iOS style) dan navigasi kapsul interaktif untuk **Said@taufiq**.

## User Review Required

> [!NOTE]
> Karena setiap menu sekarang memiliki halaman terpisah (`.html`), efek "kapsul berpindah" akan terlihat saat halaman baru dimuat. Saya akan memastikan transisinya terasa halus dan posisi kapsul tepat sesuai halaman yang aktif.

## Proposed Changes

### [Web Frontend]

#### [MODIFY] [style.css](file:///D:/Project App/site/style.css)
*   Mengubah variabel warna dari ungu ke *Night Blue* (iOS Dark Mode).
*   Menambahkan styling untuk "Active State" pada navigasi yang berbentuk kapsul melayang.
*   Memperbarui footer sesuai permintaan.

#### [MODIFY] [index.html](file:///D:/Project App/site/index.html)
*   Mengubah nama menjadi **Said@taufiq**.
*   Menyesuaikan tautan navigasi ke file `.html` masing-masing.
*   Menyederhanakan konten agar fokus sebagai halaman Beranda.

#### [NEW] [karya.html](file:///D:/Project App/site/karya.html)
*   Halaman khusus untuk menampilkan proyek.

#### [NEW] [tentang.html](file:///D:/Project App/site/tentang.html)
*   Halaman khusus tentang profil dan filosofi.

#### [NEW] [kontak.html](file:///D:/Project App/site/kontak.html)
*   Halaman khusus dengan formulir atau tautan kontak.

#### [MODIFY] [script.js](file:///D:/Project App/site/script.js)
*   Menambahkan logika untuk mendeteksi halaman aktif agar kapsul navigasi berada di posisi yang benar secara otomatis.

## Branding & Footer
*   Nama: `Said@taufiq`
*   Footer: `© 2024 Said@taufiq`

## Verification Plan

### Manual Verification
*   Klik setiap menu navigasi dan pastikan berpindah ke halaman yang benar.
*   Pastikan kapsul navigasi menyorot menu yang sesuai dengan halaman saat ini.
*   Cek apakah skema warna biru sudah serasi (tidak ada sisa warna ungu).
