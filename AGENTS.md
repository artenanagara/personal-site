# artenanagara.com: aturan agent

Web personal (Astro + Vue + Tailwind v4, deploy Vercel). Cara menjalankan dan struktur kode: `README.md`. Gaya bahasa dan copy situs: `docs/copywriting.md` (**baca sebelum menulis copy apa pun**).

Aturan umum `~/Documents/AGENTS.md` tetap berlaku. Codex dan Gemini tidak otomatis membaca file di atas root git, jadi buka file itu di awal sesi.

## Data yang dikelola di sini

| File | Isi | Dipakai oleh |
|---|---|---|
| `src/data/works.json` | Daftar works (kartu di index) | halaman works, home |
| `src/data/work-details/{id}.json` | Isi case study per work | `src/pages/work/[id].astro` |
| `src/data/cv.js` | CV: profil, pengalaman, skill, pendidikan | halaman CV, About, dan folder `~/Documents/Personal/career` |
| `public/images/works/{id}/` | Gambar works (`thumb.webp`, `mockup.webp`, `lead.webp`, ...) | works dan case study |

`cv.js` adalah **sumber utama CV**. Folder `~/Documents/Personal/career` hanya membaca file ini, jadi pengalaman baru selalu ditambahkan di sini dulu.

## Menambah atau memperbarui work dari project lain

Perintah biasanya berbentuk: *"update works dari {project}"*.

### 1. Cari bahan
Bahan case study ada di project asalnya, bukan di repo ini:

| Asal | Lokasi bahan |
|---|---|
| Project desain Work | `~/Documents/Work/{klien}/{project}/_case-study/` (atau `docs/` untuk Futake) |
| UI kit | `~/Documents/Business/ui8/{Kit}/marketing/case-study/`, `behance/`, `listing.md` |
| Bisnis sendiri | `~/Documents/Business/{bisnis}/portfolio/` atau `docs/` |
| Project fullstack | `~/Documents/Project/{project}/README.md`, `docs/`, `_case-study/` |

Agent perlu akses baca ke folder asal (Claude: tambah folder ke sesi; Codex: `--add-dir`; Gemini: `--include-directories`).

### 2. Cek izin dulu
- `_case-study/case-study.md` dengan `publish: false` atau `confidential: true` → **berhenti dan tanya saya**. Jangan menulis apa pun ke repo ini.
- Pekerjaan klien (Futake, Rintisan, dan klien lain) tanpa `_case-study/` → anggap rahasia dan tanya dulu.
- Kalau sudah diizinkan tapi belum siap tayang, tambahkan dengan `"draft": true` di `works.json` (disembunyikan oleh `works.js`).

### 3. Tulis datanya
- **`works.json`:** tambah atau ubah satu entri. Field: `id` (kebab-case, sama dengan nama file detail dan folder gambar), `title`, `category`, `type` (`open` = ada case study, `visit` = link keluar saja, `soon` = belum tersedia), `url` (opsional), `cover.default`, `cover.hover`, `featured` (opsional), `draft` (opsional).
- **`work-details/{id}.json`:** ikuti bentuk file yang sudah ada (mis. `pickin.json`): `id`, `title`, `category`, `subtitle` (satu kalimat, juga tampil di index), `url`, `description`, `metadata` (selalu `Role`, `Deliverables`, `Platform`, `Year`), `content` berisi blok `full-width-image`, `text-block`, `gallery-grid`. Text-block selalu Problem → Challenge → Solution → Result; template lengkapnya di `docs/copywriting.md` bagian *Case study template*. Jangan membuat tipe blok baru tanpa mengubah komponen dan memberi tahu saya.
- **Gambar:** export ke `public/images/works/{id}/` dalam `.webp`. Nama mengikuti pola yang ada (`thumb.webp`, `mockup.webp`, `lead.webp`, lalu nama deskriptif). Jangan memakai file mentah dari project asal tanpa dikompres.
- **Copy:** English, ikuti `docs/copywriting.md` (kalimat pendek, konkret, tanpa buzzword). Ceritakan masalah dan keputusan, jangan menyalin PRD.
- **Angka dan klaim:** hanya yang ada di bahan asal. Kalau tidak ada, tulis `[perlu data]` lalu tanyakan. Jangan mengarang metrik.

### 4. Sinkron CV
Kalau work itu juga pengalaman kerja baru atau poin penting, usulkan perubahan `src/data/cv.js` (tunjukkan diff-nya) supaya CV dan folder career ikut terbarui.

### 5. Cek
```sh
npm run build
```
Build harus lolos. Buka `npm run dev` dan cek halaman `/work/{id}` di lebar desktop dan mobile.

## Batasan

- Jangan commit, push, atau deploy tanpa saya minta. Anggap push ke `main` langsung ter-deploy ke produksi lewat Vercel.
- Jangan menyentuh `api/dribbble.js` atau env (`DRIBBBLE_TOKEN`) kecuali diminta.
- Jangan menaruh catatan lamaran, rate, atau data klien di repo ini. Itu tempatnya di `~/Documents/Personal/career`.
