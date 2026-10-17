<p align="center">
  <img src="img/logo-passforge.png" alt="PassForge Logo" width="100">
</p>

<h1 align="center">PassForge</h1>

<p align="center">
  <strong>Generator kata sandi modern bergaya cybersecurity untuk menghasilkan kata sandi acak yang kuat, aman, dan instan langsung di peramban.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Language-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue?style=flat-square" alt="Tech Stack">
  <img src="https://img.shields.io/badge/Security-Web%20Crypto%20API-00b4d8?style=flat-square" alt="Security CSPRNG">
  <img src="https://img.shields.io/badge/Dependencies-Zero-success?style=flat-square" alt="Zero Dependencies">
  <img src="https://img.shields.io/badge/Copyright-All%20Rights%20Reserved-red?style=flat-square" alt="All Rights Reserved">
</p>

---

## 📌 Tentang PassForge

**PassForge** adalah aplikasi web berbasis *client-side* murni yang dirancang untuk membuat kata sandi (*password*) dengan tingkat keacakan kriptografis tinggi secara cepat dan andal. Mengusung antarmuka visual bertema *cybersecurity / dark minimalist SaaS*, PassForge menggabungkan estetika profesional dengan standar keamanan informasi modern.

Seluruh proses pembuatan kata sandi berjalan 100% pada memori lokal di peramban (*browser*) pengguna tanpa melibatkan server latar belakang (*zero backend*), panggilan API eksternal, maupun transmisi jaringan. Hal ini menjamin privasi penuh dan meminimalkan risiko intersepsi data (*man-in-the-middle*).

---

## ✨ Fitur Unggulan

### 🔐 Keamanan Kriptografi (Cryptographic Security)
- **CSPRNG (Cryptographically Secure Pseudo-Random Number Generator)**: Menggunakan `window.crypto.getRandomValues()` bawaan peramban alih-alih `Math.random()` standar, memanfaatkan *entropy* perangkat keras sistem operasi untuk keacakan sejati.
- **Bebas Modulo Bias (*Rejection Sampling*)**: Mengimplementasikan algoritma *rejection sampling* pada fungsi acak untuk mengeliminasi bias distribusi statistik saat memetakan deret biner ke rentang karakter.
- **Secure Fisher-Yates Shuffle**: Pengacakan urutan akhir karakter dilakukan menggunakan algoritma Fisher-Yates yang ditenagai langsung oleh generator bilangan acak kriptografis.
- **Jaminan Komposisi Karakter**: Memastikan minimal 1 karakter dari setiap kategori yang aktif (huruf besar, huruf kecil, angka, simbol) pasti disertakan dalam kata sandi yang dihasilkan.
- **Privasi Sisi Klien Penuh**: Bebas penyimpanan *cookie*, *local storage*, analitik pihak ketiga, atau transmisi jaringan.

### ⚙️ Fleksibilitas & Kontrol Pengguna
- **Rentang Panjang Fleksibel**: Slider interaktif dengan batas panjang dari **4** hingga **64** karakter (standar bawaan: 16 karakter).
- **Kombinasi Karakter Komprehensif**:
  - **Uppercase**: Huruf kapital (`A–Z`)
  - **Lowercase**: Huruf kecil (`a–z`)
  - **Numbers**: Angka (`0–9`)
  - **Symbols**: Karakter simbol khusus (`!@#$%^&*()_+-=[]{}|;:,.<>?/~```)
- **Validasi Anti-Kosong Otomatis**: Mencegah seluruh opsi karakter dinonaktifkan secara bersamaan, memastikan selalu ada minimal satu set karakter yang aktif.

### 🎨 Antarmuka & Aksesibilitas Modern
- **Indikator Kekuatan Kata Sandi (*Real-Time Strength Meter*)**: Evaluasi kekuatan kata sandi secara instan berdasarkan panjang dan keragaman karakter ke dalam 4 kategori (*Weak*, *Medium*, *Strong*, *Very Strong*) dengan indikator warna visual dan progress bar dinamis.
- **Salin Sekali Klik (*One-Click Copy*)**: Tombol salin ke papan klip (*clipboard*) yang dilengkapi transisi status visual, indikator ikon centang, dan *toast notification* responsif. Dilengkapi mekanisme *fallback* (`document.execCommand`) untuk memastikan fungsionalitas tetap berjalan pada berbagai lingkungan peramban.
- **Pintasan Keyboard**: Menekan tombol `Enter` pada kolom tampilan kata sandi akan memicu pembuatan kata sandi baru secara instan.
- **Desain Responsif & Tema Gelap**: Tata letak modern dengan efek *glassmorphism* (`backdrop-filter`), palet warna kontras tinggi, dan adaptasi sempurna untuk desktop, tablet, maupun ponsel cerdas.
- **Ramah Aksesibilitas (*A11y*)**: Mengimplementasikan atribut ARIA semantik (`aria-live`, `aria-label`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, dan `role="alert"`) untuk kenyamanan pengguna pembaca layar (*screen reader*).

---

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur semantik berstandar W3C dan ramah aksesibilitas.
- **CSS3**: Sistem tata letak modern (*Flexbox* & *CSS Grid*), variabel CSS (*Custom Properties*), dan efek visual *glassmorphism*.
- **JavaScript (ES6+)**: Logika modular yang dienkapsulasi menggunakan pola *Immediately Invoked Function Expression* (IIFE) dengan mode ketat (*strict mode*), tanpa ketergantungan pada pustaka (*library*) atau *framework* pihak ketiga (*zero dependencies*).
- **Web Crypto API**: Antarmuka standar peramban modern untuk operasi kriptografis berkecepatan tinggi dan berkeamanan tinggi.

---

## 📁 Struktur Berkas

```
passforge/
├── img/
│   └── logo-passforge.png    # Aset logo aplikasi dan favicon
├── index.html                # Struktur halaman web dan antarmuka pengguna
├── script.js                 # Logika generator CSPRNG, pengacakan, dan interaktivitas
├── style.css                 # Desain tata letak, palet cybersecurity, dan responsivitas
└── README.md                 # Dokumentasi resmi proyek
```

---

## 💻 Persyaratan & Cara Menjalankan

PassForge dibangun murni dengan teknologi web standar peramban, sehingga tidak memerlukan instalasi Node.js, package manager (`npm`/`yarn`/`pnpm`), atau tahapan kompilasi/build.

### Prasyarat
Peramban web modern yang mendukung Web Crypto API (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera, atau peramban modern lainnya).

### Langkah Menjalankan

#### 1. Kloning Repositori
```bash
git clone https://github.com/evanhendramulyadi/passforge.git
cd passforge
```

#### 2. Membuka Aplikasi
Pilih salah satu metode berikut:

- **Buka Langsung Berkas**:
  Klik dua kali berkas `index.html` pada pengelola berkas (File Explorer pada Windows, Finder pada macOS, atau berkas manajer Linux).

- **Menggunakan Ekstensi VS Code (Live Server)**:
  Buka folder proyek di Visual Studio Code, klik kanan berkas `index.html`, lalu pilih **Open with Live Server**.

- **Menggunakan Python Local Server**:
  ```bash
  python -m http.server 3000
  ```
  Lalu buka peramban dan navigasikan ke `http://localhost:3000`.

- **Menggunakan Node.js (Opsional)**:
  ```bash
  npx serve .
  ```

---

## 📖 Panduan Penggunaan

1. Buka aplikasi PassForge pada peramban web Anda.
2. Tentukan panjang kata sandi yang diinginkan dengan menggeser slider **Password Length** (rentang 4 hingga 64 karakter).
3. Tentukan variasi karakter yang diinginkan dengan mencentang kotak opsi (**Uppercase**, **Lowercase**, **Numbers**, **Symbols**).
4. Klik tombol **Generate Password** atau tekan tombol **Enter** pada kolom kata sandi.
5. Perhatikan indikator **Password Strength** untuk melihat tingkat kekuatan kata sandi yang dihasilkan.
6. Klik tombol **Copy** di samping kolom kata sandi untuk menyalin hasilnya ke papan klip (*clipboard*). Notifikasi "Copied!" akan muncul sebagai konfirmasi.

---

## ⚙️ Konfigurasi Lingkungan & Keamanan Data

- **Tanpa File Konfigurasi Rahasia**: Aplikasi ini murni berjalan di sisi peramban pengguna (*client-side*). Tidak memerlukan berkas `.env`, kunci API (*API key*), token autentikasi, basis data, maupun kredensial server.
- **Zero Data Leakage**: Tidak ada pelacakan analitik, tidak ada transmisi data ke internet, dan tidak ada penyimpanan data ke *storage* peramban.

---

## 🚀 Informasi Deployment

PassForge dapat di-deploy secara instan ke platform penyedia *static site hosting* mana pun tanpa konfigurasi build khusus:

- **GitHub Pages**: Cukup aktifkan GitHub Pages dari tab Settings repositori pada cabang `main`.
- **Vercel / Netlify / Cloudflare Pages**: Hubungkan repositori langsung tanpa konfigurasi perintah build (*build command: none*, *publish directory: root*).
- **Web Server Tradisional**: Tempatkan seluruh berkas (`index.html`, `style.css`, `script.js`, dan folder `img/`) ke direktori publik server web (Nginx, Apache, atau Caddy).

---

## 🛡️ Analisis Algoritma Keamanan

### Mengapa Bukan `Math.random()`?
Fungsi `Math.random()` pada JavaScript umumnya diimplementasikan dengan generator bilangan acak semu (PRNG) seperti *xorshift128+*. Algoritma ini dirancang untuk kecepatan eksekusi grafis atau simulasi, bukan untuk keamanan. Keadaan internalnya (*internal state*) dapat ditebak jika penyerang mengamati sejumlah deret output acak sebelumnya.

### Solusi yang Diterapkan PassForge:
1. **Entropi Kriptografis (`crypto.getRandomValues`)**: Mengambil sumber keacakan langsung dari modul CSPRNG sistem operasi (misalnya `/dev/urandom` pada sistem berbasis Unix atau `CryptGenRandom` / `BCryptGenRandom` pada Windows).
2. **Eliminasi Modulo Bias melalui *Rejection Sampling***:
   Jika ruang bilangan biner $256$ dibagi dengan ukuran alfabet target $N$, sisa pembagian ($256 \pmod N$) dapat menyebabkan nilai tertentu memiliki probabilitas kemunculan lebih tinggi jika hanya menggunakan operator modulus langsung (`byte % N`). PassForge menentukan batas tertinggi yang habis dibagi $N$ (`maxUsable`) dan membuang (*reject & resample*) setiap byte yang berada di atas batas tersebut, memastikan distribusi seragam sejati (*true uniform distribution*).
3. **Fisher-Yates Shuffle Berkeamanan Tinggi**: Karakter hasil pembangkitan diacak kembali posisinya satu per satu menggunakan penukaran indeks yang ditenagai oleh CSPRNG untuk menghilangkan pola posisi bawaan.

---

## 📄 Hak Cipta, Kepemilikan & Ketentuan Penggunaan

© 2026 Evan Hendra Mulyadi. All Rights Reserved.

### Ketentuan Repositori Publik
Repositori ini disediakan secara publik dengan tujuan transparansi, edukasi, pembelajaran, dan sebagai referensi teknis mengenai pembuatan aplikasi web vanilla dengan standar kriptografi modern.

- **Pembelajaran & Referensi**: Anda dipersilakan untuk melihat, meninjau, menguji, dan mempelajari arsitektur kode sumber proyek ini untuk keperluan pembelajaran pribadi maupun penelitian.
- **Bukan Hak Cipta Bebas Salin (*No Plagiarism/Rebranding*)**: Akses publik terhadap repositori ini **tidak memberikan izin** untuk menduplikasi seluruh proyek secara mentah-mentah, mengubah nama/merek (*rebranding*), lalu mengklaim karya ini sebagai buatan sendiri.
- **Atribusi & Penghormatan Karya Orisinal**: Apabila Anda mengambil inspirasi konsep atau mengadaptasi bagian logika tertentu untuk proyek Anda, harap sertakan atribusi yang jelas kepada pencipta aslinya. Membuat proyek serupa secara mandiri dari awal (*scratch*) untuk tujuan belajar sangat dihargai dan tidak dilarang.

