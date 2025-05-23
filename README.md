# Subscription Tracker API

Aplikasi backend untuk mengelola dan melacak langganan pengguna, dibangun dengan **Node.js**, **Express.js**, dan **MongoDB**. Proyek ini dirancang sebagai sarana pembelajaran bagi pemula yang ingin memahami pengembangan API dengan Node.js dan integrasi database NoSQL.

## Fitur

- **Manajemen Pengguna**: Registrasi, login, dan logout menggunakan JWT untuk otentikasi.
- **Manajemen Langganan**: Tambah, lihat, dan hapus langganan pengguna.
- **Pengingat Otomatis**: Sistem pengingat otomatis untuk tanggal perpanjangan langganan.
- **Keamanan**: Middleware untuk perlindungan terhadap permintaan yang tidak sah.
- **Logging**: Pencatatan aktivitas untuk debugging dan monitoring.

## Teknologi yang Digunakan

- **Backend**: Node.js dengan Express.js
- **Database**: MongoDB dengan Mongoose ODM
- **Otentikasi**: JSON Web Tokens (JWT)
- **Email Service**: Nodemailer
- **Keamanan**: Middleware untuk perlindungan permintaan
- **Pengelolaan Workflow**: Upstash untuk penjadwalan tugas pengingat

## Persyaratan

Pastikan Anda memiliki:
- Node.js versi terbaru [Download Node.js](https://nodejs.org/)
- MongoDB berjalan di lokal atau URI Atlas [MongoDB Community](https://www.mongodb.com/try/download/community)
- Git (opsional)

## Instalasi & Menjalankan Proyek

### 1. Clone repository

```bash
git clone https://github.com/ahmadrezapahlevi/subscription-tracker-api.git
cd subscription-tracker-api

2. Instalasi Dependensi

npm install

3. Konfigurasi Environment Variables

Buat file .env di root proyek dan tambahkan variabel berikut:

PORT=5500
SERVER_URL=http://localhost:5500
NODE_ENV=development
DB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
EMAIL_PASSWORD=your_email_password

Gantilah your_mongodb_uri, your_jwt_secret, dan your_email_password dengan nilai yang sesuai.

4. Jalankan Proyek

npm run dev

Akses aplikasi di http://localhost:5500

Struktur Proyek

subscription-tracker-api/
│
├── app.js               # Entry point aplikasi
├── config/              # Konfigurasi aplikasi
├── controllers/         # Logika bisnis
├── database/            # Koneksi dan konfigurasi database
├── middlewares/         # Middleware untuk otentikasi dan lainnya
├── models/              # Skema Mongoose
├── routes/              # Definisi rute API
├── utils/               # Fungsi utilitas
├── .env                 # Variabel lingkungan
├── package.json         # Informasi proyek dan dependensi
└── README.md            # Dokumentasi proyek

Lisensi

Proyek ini bersifat open-source dan bebas digunakan untuk keperluan belajar.


---

Dibuat dengan semangat belajar Node.js dan pengembangan API oleh Ahmad Reza Pahlevi.

Silakan sesuaikan bagian `DB_URI`, `JWT_SECRET`, dan `EMAIL_PASSWORD` di file `.env` dengan konfigurasi Anda. Jika Anda memerlukan bantuan lebih lanjut atau ingin menambahkan fitur tambahan, jangan ragu untuk bertanya!0

￼Enter
