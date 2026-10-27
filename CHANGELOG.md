# Changelog: artenanagara.com

Format dan aturan: `~/Documents/AGENTS.md` bagian Changelog. Terbaru di atas.

> Riwayat sebelum 2026-10-27 **direkonstruksi** dari git log, README, dan tanggal file. Detail per commit tetap ada di `git log`.

## [Belum dirilis]

## 2026-10-28 (3)
### Ditambah
- Marquee Explorations: shot video Dribbble diputar (muted, loop), gambar diam jadi poster
### Diubah
- Marquee Explorations: urutan shot diacak setiap kunjungan

## 2026-10-28 (2)
### Diubah
- Marquee Explorations jadi dua baris berlawanan arah, kartu sedikit lebih kecil
### Diperbaiki
- Marquee Explorations terlalu cepat di Safari: ukuran kartu eksplisit dan kecepatan tetap 70 px/detik

## 2026-10-28
### Ditambah
- `AGENTS.md` (+ `CLAUDE.md`, `GEMINI.md`): aturan update works dari project lain
- CV: pengalaman Zenko dan Pickin, skill Back-End & Mobile, AI Workflow diperluas
- Case study: Goals bernomor di Problem, section Result (ringkasan + daftar hasil) menggantikan Summary
- Exmood: juara 1 DIMAS-TI AMLI 2022, riset dan skor usability 14.2/15
- Intro: sapaan 5 bahasa (terakhir Bahasa Indonesia) di layar hitam yang terangkat ke atas, sekali per sesi
- Transisi pindah halaman: tirai hitam bertepi lengkung, nama halaman tujuan, konten masuk dengan parallax; prefetch saat hover
- Halaman Work: divider di bawah indeks Years dan Projects
### Diubah
- Template section teks case study: eyebrow tetap (Problem, Challenge, Solution, Result), title, body; Solution dengan satu gambar di samping
- Copy semua case study ditulis ulang mengikuti `docs/copywriting.md`; Pickin dan Zenko disusun ulang ke empat section
- Metadata case study seragam: Role, Deliverables, Platform, Year
- Pickin dan Zenko: Role disamakan dengan CV (Product Designer & Full-Stack Developer)
- Folder portfolio lama dipindah ke `~/Documents/Project/_archive/portfolio`
- Halaman Work: masthead tanpa divider, label (Selected work), indeks Years dan Projects
- Hero: slogan "Clear interfaces, built to ship." menggantikan label Portfolio
### Diperbaiki
- Zenko: Platform kembali ke "Website, mobile web" karena aplikasi Flutter masih dikembangkan
- Favicon 404 di production: file tercatat di git sebagai `icon.PNG`, server Vercel membedakan huruf besar

## 2026-10-27
### Diubah
- Situs dipindah ke Astro; domain artenanagara.com; subdomain CV lewat middleware
- Case study: teks di separuh kanan, gambar di grid 4 kolom
- Label tengah navigasi: Product Designer, Surakarta, jam

## 2026-10-26
### Ditambah
- Positioning "Clear interfaces, built to ship" diterapkan ke semua section
- Marquee Explorations memuat shot Dribbble terbaru
### Diubah
- Halaman Work: grid 2×2 untuk 4 project teratas, 3 kolom di bawahnya, satu daftar tanpa heading Archive
- Copy diarahkan ke klien freelance dan kontrak; headline hero ditulis ulang
### Diperbaiki
- Marquee Explorations tidak muncul saat jumlah shot bertambah

## 2026-10-19 – 2026-10-20
### Ditambah
- Redesign editorial (tema putih), halaman Work baru, dan case study baru; case study Pickin dan Zenko diperluas
- SEO, sitemap, Speed Insights, dan domain dibawa dari v2

## 2026-06-24 – 2026-06-28
### Ditambah
- Project Fungsix (menggantikan Greenprobolinggo di daftar), foto profil baru
- Konfigurasi Vercel untuk URL rewrite

## [v2] - 2025-12-10
### Ditambah
- Halaman CV dengan PDF, tombol animasi, kursor custom, project Manis Grafika
### Diubah
- Detail Exmood, Greenprobolinggo, dan The Investor diperbarui

## [v1] - 2025-12-09
### Ditambah
- Situs awal dengan SEO, halaman 404, kursor interaktif, dan project Greenprobolinggo
