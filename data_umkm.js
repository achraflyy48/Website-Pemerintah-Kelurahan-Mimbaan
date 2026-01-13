// FILE INI BERFUNGSI SEBAGAI DATABASE SEDERHANA
// Cara Menambah Data:
// 1. Copy dari tanda kurung kurawal pembuka '{' sampai penutup '},'
// 2. Paste di baris paling bawah sebelum tanda kurung siku penutup ']'
// 3. Ganti isi datanya.
// 4. Pastikan file foto sudah ada di folder 'assets/images/' sesuai nama yang ditulis di sini.

const umkmData = [
    {
        nama: "Warung Double M",
        alamat: "Jl. Sepudi Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM6.jpeg",
        harga: "Rp. 4.000 - Rp. 15.000",
        wa: "6282228791945" 
    },
    {
        nama: "Kantin Istiqomah",
        alamat: "Jl. Basuki Rahmat Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM7.jpg",
        harga: "Rp. 1.000 - Rp. 10.000",
        wa: "6282334107701"
    },
    {
        nama: "Ndry Style",
        alamat: "Jl. Basuki Rahmat Mimbaan",
        kategori: "Jasa",
        foto: "Assets/UMKM8.jpg",
        harga: "Rp. 100.000 - Rp. 150.000",
        wa: "6282332163822"
    },
    {
        nama: "Laundry Putra Faris",
        alamat: "Jl. Basuki Rahmat Mimbaan",
        kategori: "Jasa",
        foto: "Assets/UMKM9.jpg",
        harga: "Rp. 30.000 - (Relatif)",
        wa: "6285330197156"
    },
    {
        nama: "Dapur Moymoy",
        alamat: "Perum Panji Permai Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM10.jpg",
        harga: "Rp. 5.000 - Rp. 15.000",
        wa: "6282330621599"
    },
    {
        nama: "Kedai Ibu Tolak",
        alamat: "Jl. Basuki Rahmat Mimbaan",
        kategori: "Toko",
        foto: "Assets/UMKM11.jpg",
        harga: "Rp 2.000 - Rp. 10.000",
        wa: "6285232862046"
    },
    {
        nama: "Es Dawet Ayu",
        alamat: "Dusun Pengkepeng Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM12.jpg",
        harga: "Rp 5.000",
        wa: "6282245323871"
    },
    {
        nama: "Dapoer Utie by Nuryn",
        alamat: "Jl. Madura Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM13.jpg",
        harga: "Rp. 10.000 - Rp. 18.000",
        wa: "6282331204191"
    },
    {
        nama: "Kucur Bapak Saleh",
        alamat: "Jl. Basuki Rahmat Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM14.jpg",
        harga: "Rp 10.000 - Rp. 15.000",
        wa: "6283895515438"
    },
    {
        nama: "Audio & Las Caca",
        alamat: "Jl. Semeru Mimbaan",
        kategori: "Jasa",
        foto: "Assets/UMKM15.jpg",
        harga: "Rp 150.000 - Rp. 200.000",
        wa: "6282141424679"
    },
    // --- Data Tambahan ---
    {
        nama: "Kedai N Three",
        alamat: "RT 003 / RW 013 Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM16.jpg",
        harga: "Rp 5.000 - Rp 15.000",
        wa: "6285854406927"
    },
    {
        nama: "Bengkel Lancar Jaya",
        alamat: "RT 004 / RW 010 Mimbaan",
        kategori: "Jasa",
        foto: "Assets/UMKM17.jpg",
        harga: "Rp 25.000 - (Relatif)",
        wa: "6282332573775"
    },
    {
        nama: "Lapak Yudha",
        alamat: "Jl. Semeru Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM18.jpg",
        harga: "Rp. 1.000 - Rp. 5.000",
        wa: "6285784147002"
    },
    {
        nama: "Warung Berkah",
        alamat: "Jl. Basuki Rahmat Mimbaan",
        kategori: "Toko",
        foto: "Assets/UMKM19.jpg",
        harga: "Rp. 3.000 - Rp. 22.000",
        wa: "6285204229367"
    },
    {
        nama: "Tajhin Emak Ruk",
        alamat: "Jl. Argopuro Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM20.jpg",
        harga: "Rp. 5.000 - Rp. 6.000",
        wa: "6285233426621"
    },
    {
        nama: "Mie Ayam Barokah Pak Cipto",
        alamat: "Jl. Basuki Rahmat Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM21.jpg",
        harga: "Rp. 5.000 - Rp. 7.000",
        wa: "6282330638040"
    },
    {
        nama: "Es Dawet Jepara",
        alamat: "Jl. Basuki Rahmat Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM22.jpg",
        harga: "Rp. 7.000",
        wa: "6285235999918"
    },
    {
        nama: "Warung Rujak",
        alamat: "Jl. Bawean Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM23.jpeg",
        harga: "Rp. 10.000",
        wa: "6282233330140"
    },
    {
        nama: "Kacang Bawang Srikandi",
        alamat: "Jl. Basuki Rahmat Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM24.jpg",
        harga: "Rp. 10.000",
        wa: "6285258820962"
    },
    {
        nama: "Toko Sari",
        alamat: "Jl. Basuki Rahmat Mimbaan",
        kategori: "Toko",
        foto: "Assets/UMKM25.jpg",
        harga: "Rp. 5.000 - (Relatif)",
        wa: "6282146353627"
    },
    {
        nama: "Toko Rifa",
        alamat: "Jl. Semeru Gg. 2 Mimbaan",
        kategori: "Toko",
        foto: "Assets/UMKM26.jpg",
        harga: "Rp. 5.000 - (Relatif)",
        wa: "6285236335945"
    },
    {
        nama: "Kedai Aurel",
        alamat: "Jl. Argopuro Mimbaan",
        kategori: "Toko",
        foto: "Assets/UMKM27.jpg",
        harga: "Rp. 5.000 - (Relatif)",
        wa: "6283848801222"
    },
    {
        nama: "Bolen & Bika Ambon",
        alamat: "RT 003 / RW 018 Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM28.jpeg",
        harga: "Rp. 5.000",
        wa: "6285334823964"
    },
    {
        nama: "Uti Yatim Catering",
        alamat: "Jl. Argopuro Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM29.jpg",
        harga: "Rp. 6.000 - Rp. 10.000",
        wa: "6282335766868"
    },
    {
        nama: "Kedai Shafa",
        alamat: "Jl. Basuki Rahmat Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM30.jpg",
        harga: "Rp. 3.000 - Rp. 5.000",
        wa: "6285235593455"
    },
    {
        nama: "Warung Diyama",
        alamat: "Jl. Basuki Rahmat Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM31.jpg",
        harga: "Rp. 3.000 - Rp. 10.000",
        wa: "6287841369034"
    },
    {
        nama: "Warung Lesehan Mas Roni",
        alamat: "Jl. Basuki Rahmat Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM32.jpg",
        harga: "Rp. 3.000 - Rp. 10.000",
        wa: "6285859415915"
    },
    {
        nama: "Dapur Shakilah",
        alamat: "Jl. Basuki Rahmat Mimbaan",
        kategori: "Kuliner",
        foto: "Assets/UMKM33.jpg",
        harga: "Rp. 5.000",
        wa: "6285234111859"
    },
    {
        nama: "Bunda Farah Laundry",
        alamat: "Jl. Basuki Rahmat Mimbaan",
        kategori: "Jasa",
        foto: "Assets/UMKM34.jpg",
        harga: "Rp. 3.500 - Rp. 5.000",
        wa: "6285204230367"
    },
];