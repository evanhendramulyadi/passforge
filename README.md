<p align="center">
  <img src="img/logo-passforge.png" alt="PassForge Logo" width="100">
</p>

<h1 align="center">PassForge</h1>

<p align="center">
  <strong>Generator password modern bergaya cybersecurity untuk menghasilkan kata sandi acak yang kuat, aman, dan instan langsung di browser.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Language-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue?style=flat-square" alt="Tech Stack">
  <img src="https://img.shields.io/badge/Security-Web%20Crypto%20API-00b4d8?style=flat-square" alt="Security CSPRNG">
  <img src="https://img.shields.io/badge/License-MIT%20%2F%20Custom-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/Dependencies-Zero-success?style=flat-square" alt="Zero Dependencies">
</p>

---

## 📌 Tentang PassForge

**PassForge** adalah aplikasi web berbasis *client-side* untuk membuat kata sandi (password) yang aman dan acak dengan cepat. Mengusung antarmuka bergaya *cybersecurity / dark minimalist SaaS*, PassForge dirancang tidak hanya untuk estetika, tetapi juga memprioritaskan keamanan kriptografi tingkat tinggi dan kenyamanan pengguna (*user experience*).

Seluruh proses pembuatan kata sandi berjalan 100% di browser pengguna tanpa melibatkan server atau transmisi jaringan, sehingga bebas dari pelacakan dan aman dari kebocoran data.

---

## ✨ Fitur Unggulan

### 🔐 Keamanan Kriptografi (Cryptographic Security)
- **CSPRNG (Cryptographically Secure Pseudo-Random Number Generator)**: Menggunakan `window.crypto.getRandomValues()` alih-alih `Math.random()` standar untuk menjamin keacakan tingkat kriptografi sejati.
- **Bebas Modulo Bias (*Rejection Sampling*)**: Implementasi teknik *rejection sampling* pada fungsi acak untuk mengeliminasi bias distribusi statistik karakter.
- **Secure Fisher-Yates Shuffle**: Pengacakan urutan karakter akhir menggunakan algoritma Fisher-Yates yang ditenagai oleh CSPRNG.
- **Jaminan Komposisi Karakter**: Memastikan minimal 1 karakter dari setiap kategori yang dicentang (huruf besar, huruf kecil, angka, simbol) pasti dimasukkan ke dalam kata sandi yang dihasilkan.
- **100% Sisi Klien (*Client-Side*)**: Kata sandi dibuat secara lokal pada memori browser dan tidak pernah disimpan atau dikirim melalui jaringan internet.

### ⚙️ Fleksibilitas & Kontrol Pengguna
- **Kustomisasi Panjang Kata Sandi**: Slider interaktif dengan rentang panjang mulai dari **4** hingga **64** karakter (default: 16 karakter).
- **Pemilihan Karakter Fleksibel**:
  - **Uppercase**: Huruf besar (`A–Z`)
  - **Lowercase**: Huruf kecil (`a–z`)
  - **Numbers**: Angka (`0–9`)
  - **Symbols**: Karakter simbol khusus (`!@#$%^&*()_+-=[]{}|;:,.<>?/~```)
- **Validasi Cerdas**: Menolak pemilihan kosong dan memastikan setidaknya satu jenis karakter tetap aktif untuk mencegah kegagalan pembuatan kata sandi.

### 🎨 Antarmuka & Aksesibilitas Modern
- **Indikator Kekuatan Kata Sandi (*Real-Time Strength Meter*)**: Penilaian kekuatan kata sandi secara instan dengan 4 tingkat evaluasi (*Weak*, *Medium*, *Strong*, *Very Strong*) disertai progress bar dinamis berwarna.
- **Salin Cepat Sekali Klik (*One-Click Copy*)**: Fitur salin ke papan klip (*clipboard*) dengan indikator toast notifikasi dan ikon centang visual. Dilengkapi sistem *fallback* untuk kompatibilitas di berbagai lingkungan browser.
- **Dukungan Pintasan Keyboard**: Tekan tombol `Enter` pada kolom kata sandi untuk membuat kata sandi baru dengan cepat.
- **Desain Responsif & Gelap (*Dark Mode Cyberpunk/SaaS Theme*)**: Tata letak yang proporsional, nyaman dipandang, dan optimal diakses dari perangkat mobile, tablet, maupun desktop.
- **Aksesibilitas (*A11y*)**: Dilengkapi atribut ARIA (`aria-live`, `aria-label`, `aria-valuenow`, dan semantic HTML) untuk mendukung pembaca layar (*screen reader*).

---

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur semantik yang ramah aksesibilitas (*A11y compliant*).
- **CSS3**: Sistem pewarnaan *custom properties*, layout modern (*Flexbox* & *CSS Grid*), efek glow cybersecurity, serta animasi transisi halus.
- **JavaScript (ES6+)**: Vanilla JS modular berorientasi IIFE (*Immediately Invoked Function Expression*), tanpa dependensi eksternal (*zero external libraries/frameworks*).
- **Web Crypto API**: Modul bawaan browser untuk operasi kriptografi acak yang aman.

---

## 📁 Struktur Berkas

```
passforge/
├── img/
│   └── logo-passforge.png    # Aset logo aplikasi
├── index.html                # Struktur utama web & elemen UI
├── script.js                 # Logika generator CSPRNG & interaktivitas
├── style.css                 # Desain tema gelap cybersecurity & responsivitas
└── README.md                 # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan Proyek

PassForge dibuat murni dengan *vanilla web technologies*, sehingga tidak memerlukan instalasi Node.js, `npm`, atau kompilasi build tools apa pun.

### 1. Kloning Repositori
```bash
git clone https://github.com/evanhendramulyadi/passforge.git
cd passforge
```

### 2. Buka di Browser
Anda dapat langsung membuka berkas `index.html`:
- **Langsung**: Klik dua kali berkas `index.html` pada pengelola berkas (File Explorer / Finder).
- **Menggunakan Live Server (VS Code)**: Buka folder proyek di VS Code, klik kanan pada `index.html` lalu pilih **Open with Live Server**.
- **Menggunakan Python HTTP Server**:
  ```bash
  python -m http.server 3000
  ```
  Kemudian buka browser di `http://localhost:3000`.

---

## 📖 Cara Penggunaan

1. Buka aplikasi PassForge pada peramban Anda.
2. Tentukan panjang kata sandi yang diinginkan dengan menggeser slider **Password Length**.
3. Pilih kombinasi karakter yang ingin disertakan (*Uppercase*, *Lowercase*, *Numbers*, *Symbols*).
4. Klik tombol **Generate Password** (atau tekan `Enter`).
5. Periksa indikator **Password Strength** untuk memastikan kekuatan kata sandi.
6. Klik tombol **Copy** (ikon dokumen) di samping kolom kata sandi untuk menyalinnya ke *clipboard*.

---

## 🛡️ Analisis Algoritma Keamanan

### Mengapa Bukan `Math.random()`?
Fungsi bawaan `Math.random()` pada JavaScript menggunakan algoritma PRNG deterministik (seperti xorshift128+) yang dirancang untuk kecepatan, bukan untuk keamanan (*cryptographically insecure*). Urutan outputnya dapat diprediksi jika penyerang mengamati beberapa nilai acak sebelumnya.

### Solusi PassForge:
1. **`crypto.getRandomValues()`**: Menghasilkan deret *entropy* acak sejati yang bersumber dari sistem operasi perangkat.
2. **Eliminasi Modulo Bias**: Ketika memetakan bilangan acak `[0, 255]` ke rentang karakter `[0, N-1]`, pembagian modulus langsung dapat menyebabkan karakter tertentu lebih sering terpilih. PassForge menggunakan *rejection sampling* (`while (randomByte >= maxUsable)`) untuk memastikan probabilitas setiap karakter sama rata (*uniform distribution*).

---

## 📄 Lisensi & Hak Cipta

© 2026–Sekarang **Evan Hendra Mulyadi**. Seluruh Hak Cipta Dilindungi.

