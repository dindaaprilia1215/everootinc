export interface CareerMilestone {
  year: string;
  phase: string;
  title: string;
  location: string;
  summary: string;
  keyAchievement: string;
  operationalDetail: string;
  highlightTag: string;
}

export interface PartnerOrganization {
  id: string;
  name: string;
  category: 'Komunitas Pertanian' | 'UMKM & Pengrajin' | 'Perusahaan & Logistik';
  regencyOrCity: string;
  sinceYear: string;
  memberCountLabel: string;
  commodities: string[];
  collaborationModel: string;
  story: string;
  verificationNote: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductItem {
  slug: string;
  name: string;
  shortName: string;
  category: 'Rempah Nusantara' | 'Kerajinan UMKM' | 'Komoditas Impor';
  tradeFlow: 'Ekspor' | 'Impor';
  originOrSource: string;
  regency: string;
  hsCode: string;
  grade: string;
  moq: string;
  leadTime: string;
  packaging: string;
  port: string;
  featured: boolean;
  heroImage: string;
  heroImageAlt: string;
  galleryImages: {
    url: string;
    alt: string;
    caption: string;
  }[];
  summary: string;
  originStory: string;
  processSteps: {
    stepNumber: string;
    title: string;
    detail: string;
  }[];
  partnerName: string;
  partnerRole: string;
  specifications: ProductSpec[];
}

export interface GalleryPost {
  id: string;
  title: string;
  category: 'Panen & Rempah' | 'Kriya UMKM' | 'Pengapalan Ekspor' | 'Distribusi Impor';
  tradeType: 'Ekspor' | 'Impor' | 'Kemitraan Hulu';
  aspectClass: 'ratio-tall' | 'ratio-portrait' | 'ratio-square' | 'ratio-landscape';
  width: number;
  height: number;
  image: string;
  imageAlt: string;
  location: string;
  date: string;
  routeLabel: string;
  partnerUnit: string;
  summary: string;
  storyParagraphs: string[];
  fieldNote: string;
  batchCode: string;
  relatedProductSlug: string;
  relatedProductName: string;
  tags: string[];
}

export interface CompanyLocation {
  id: string;
  name: string;
  role: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  phone: string;
  operationalHours: string;
  facilities: string[];
}

export const companyProfile = {
  name: 'Everoot Inc.',
  legalName: 'PT Everoot Niaga Nusantara (Everoot Inc.)',
  tagline: 'Penghubung Rempah Lereng Vulkanik & Kriya Tangan Jawa Timur ke Pelabuhan Dunia',
  headquartersCity: 'Surabaya, Jawa Timur, Indonesia',
  foundedYear: '2016 (Rintisan Dampit) / 2020 (Korporasi Surabaya)',
  prototypeDataNotice:
    'Data profil, kode batch, dan metrik operasional pada halaman ini disusun sebagai representasi prototipe profil perusahaan (Sample Data) untuk demonstrasi sistem Everoot Inc.',
  shortIntro:
    'Berawal dari gudang sortasi cengkeh kecil di kaki Gunung Semeru, Kabupaten Malang, Everoot Inc. kini mengelola rantai pasok ekspor rempah tunggal dan kerajinan tangan UMKM Jawa Timur sekaligus mendistribusikan perangkat pascapanen impor bagi koperasi tani lokal.',
  vision:
    'Membangun jalur perdagangan internasional yang transparan, menjaga ketertelusuran komoditas dari desa asal di Jawa Timur hingga gudang pembeli global, serta mengembalikan nilai tambah langsung ke komunitas petani dan perajin.',
  missions: [
    'Menetapkan standar sortasi kadar air, kebersihan mikrobiologi, dan pengemasan ekspor langsung di tingkat koperasi desa di Jawa Timur.',
    'Membuka akses pasar ritel dan perhotelan internasional bagi pengrajin anyaman bambu, serat enceng gondok, terakota, dan kayu akar jati UMKM.',
    'Menyediakan fasilitas impor alat ukur pascapanen dan kemasan kedap udara berstandar pangan untuk menjaga mutu hasil bumi lokal.'
  ]
};

export const careerTimeline: CareerMilestone[] = [
  {
    year: '2016',
    phase: 'Fase 01: Rintisan Hulu',
    title: 'Gudang Sortasi Pertama di Dampit, Kabupaten Malang',
    location: 'Dampit, Malang, Jawa Timur',
    summary:
      'Perjalanan Everoot dimulai dari ruang penjemuran dan sortasi seluas 60 meter persegi di Dampit, bekerja langsung bersama 18 keluarga petani cengkeh dan lada di lereng selatan Gunung Semeru.',
    keyAchievement:
      'Menurunkan tingkat kerusakan cengkeh pascapanen melalui pemisahan tangkai manual dan pengeringan rak bertingkat.',
    operationalDetail:
      'Pada tahap awal ini, fokus utama tim adalah memutus rantai tengkulak berlapis dengan membeli hasil panen petani menggunakan parameter kadar air terukur (maksimal 12 persen) sehingga harga beli di tingkat kebun lebih adil.',
    highlightTag: 'Komunitas Tani Semeru'
  },
  {
    year: '2018',
    phase: 'Fase 02: Kolaborasi UMKM Kriya',
    title: 'Ekspansi Lini Kerajinan Tangan Desa di Banyuwangi, Lamongan, dan Ngawi',
    location: 'Banyuwangi & Lamongan, Jawa Timur',
    summary:
      'Saat mengunjungi mitra pembeli di Asia Timur, tim melihat tingginya permintaan terhadap produk interior berbahan serat alami yang memiliki cerita asal-usul jelas dari perajin desa.',
    keyAchievement:
      'Menggandeng sentra anyaman bambu Desa Gintangan (Banyuwangi) dan pengrajin enceng gondok Babat (Lamongan) untuk kurasi katalog ekspor pertama.',
    operationalDetail:
      'Everoot menyusun panduan ukuran modular dan teknik pengeringan anti-jamur ramah lingkungan agar produk kerajinan tangan UMKM tahan melewati perjalanan kontainer laut selama 28 hingga 35 hari.',
    highlightTag: 'Kurasi Kriya UMKM'
  },
  {
    year: '2020',
    phase: 'Fase 03: Konsolidasi Pelabuhan',
    title: 'Pendirian Resmi Everoot Inc. & Pembukaan Hub Tanjung Perak Surabaya',
    location: 'Krembangan, Surabaya, Jawa Timur',
    summary:
      'Untuk menjawab kebutuhan pengiriman kontainer penuh (FCL) dan konsolidasi lintas kabupaten, perusahaan resmi berbadan hukum sebagai Everoot Inc. dengan kantor pusat dan gudang di dekat Pelabuhan Tanjung Perak.',
    keyAchievement:
      'Mengintegrasikan layanan dokumen kepabeanan (PEB/PIB), sertifikasi fitosanitari karantina pertanian, dan fumigasi kontainer dalam satu pintu operasional.',
    operationalDetail:
      'Keberadaan hub Surabaya memangkas waktu tunggu muat barang dari sentra produksi di Ponorogo, Malang, Bondowoso, dan Banyuwangi menuju kapal kargo internasional.',
    highlightTag: 'Hub Logistik Surabaya'
  },
  {
    year: '2022',
    phase: 'Fase 04: Perdagangan Dua Arah',
    title: 'Pembukaan Divisi Impor Peralatan Pascapanen & Kemasan Vakum Pangan',
    location: 'Surabaya, Hamburg & Yokohama',
    summary:
      'Menyadari bahwa kualitas ekspor sangat bergantung pada alat kerja di hulu, Everoot mengaktifkan izin impor umum untuk mendatangkan teknologi pascapanen tepat guna dari mitra luar negeri.',
    keyAchievement:
      'Mengimpor pengukur kadar air optik, kantong penyimpanan hermetik multi-layer, dan pisau potong kriya presisi dari Jerman serta Jepang.',
    operationalDetail:
      'Peralatan impor tersebut disalurkan melalui skema cicilan panen ringan kepada koperasi petani dan bengkel UMKM mitra di Jawa Timur, menciptakan siklus perdagangan ekspor-impor yang saling menguatkan.',
    highlightTag: 'Sinergi Ekspor-Impor'
  },
  {
    year: '2024 - Kini',
    phase: 'Fase 05: Ketertelusuran Digital',
    title: 'Jaringan Rantai Pasok Terlacak dari 9 Kabupaten Jawa Timur ke Pasar Global',
    location: 'Jawa Timur Lintas Koridor',
    summary:
      'Saat ini Everoot Inc. mengelola pengiriman terjadwal untuk rempah tunggal dan koleksi kriya berkelanjutan, dilengkapi pencatatan kode batch dari titik panen maupun bengkel pengrajin.',
    keyAchievement:
      'Setiap karung rempah dan palet kerajinan dilengkapi paspor komoditas berisi titik koordinat desa asal, tanggal panen/produksi, dan profil kelompok mitra.',
    operationalDetail:
      'Fokus perusahaan terus bertumpu pada hubungan jangka panjang antara komunitas penghasil di Jawa Timur dan peramu pangan, roaster rempah, serta kurator desain interior di Eropa, Jepang, Timur Tengah, dan Amerika Utara.',
    highlightTag: 'Paspor Komoditas Jatim'
  }
];

export const partnerships: PartnerOrganization[] = [
  {
    id: 'gapoktan-semeru-malang',
    name: 'Gabungan Kelompok Tani Lereng Semeru Makmur',
    category: 'Komunitas Pertanian',
    regencyOrCity: 'Dampit & Tirtoyudo, Kab. Malang',
    sinceYear: '2016',
    memberCountLabel: '64 keluarga petani kebun campur',
    commodities: ['Cengkeh Lal Pari', 'Lada Hitam', 'Kopi & Kakao Sela'],
    collaborationModel: 'Kontrak beli panen berjenjang dengan pendampingan rumah jemur surya tertutup.',
    story:
      'Kelompok petani pertama yang bekerja bersama pendiri Everoot sejak tahun 2016. Melalui pembangunan tiga unit rumah jemur beratap UV di lereng selatan Semeru, petani tidak lagi kehilangan hasil panen saat hujan turun mendadak di musim petik.',
    verificationNote: 'Lokasi kebun pada ketinggian 650-900 mdpl dengan pencatatan blok panen per keluarga.'
  },
  {
    id: 'komunitas-rempah-ijen',
    name: 'Komunitas Petani Rempah & Kayu Manis Kawah Ijen',
    category: 'Komunitas Pertanian',
    regencyOrCity: 'Licin (Banyuwangi) & Sempol (Bondowoso)',
    sinceYear: '2019',
    memberCountLabel: '48 petani hutan rakyat',
    commodities: ['Kayu Manis Cassia Vera', 'Cengkeh Gunung', 'Kapulaga Lokal'],
    collaborationModel: 'Sistem panen tebang pilih berkelanjutan disertai pembibitan pohon kayu manis baru.',
    story:
      'Untuk setiap pohon kayu manis yang dikupas kulitnya pada usia panen delapan tahun, anggota komunitas bersama Everoot menanam lima bibit baru di lahan penyangga lereng Ijen agar kelestarian hutan tetap terjaga.',
    verificationNote: 'Kadar minyak atsiri kulit kayu manis diuji setiap akhir musim kemarau.'
  },
  {
    id: 'koperasi-rimpang-ponorogo',
    name: 'Koperasi Tani Rimpang Merah Wilis-Ponorogo',
    category: 'Komunitas Pertanian',
    regencyOrCity: 'Ngrayun & Pulung, Kab. Ponorogo',
    sinceYear: '2021',
    memberCountLabel: '52 petani lahan kering',
    commodities: ['Jahe Merah Kering Iris', 'Kunyit Hitam & Kuning', 'Temulawak Simplisia'],
    collaborationModel: 'Penyediaan mesin pengiris stainless dan oven pengering biomassa rendah asap.',
    story:
      'Sebelumnya petani menjual jahe merah segar saat harga anjlok di musim panen raya. Bersama Everoot, hasil panen diolah menjadi simplisia kering berstandar ekspor untuk industri minuman herbal dan ekstraksi di Jepang serta Eropa.',
    verificationNote: 'Bebas residu pemutih dan dikeringkan hingga kadar air di bawah 10 persen.'
  },
  {
    id: 'sentra-bambu-gintangan',
    name: 'Sanggar Kriya Anyaman Bambu Desa Gintangan',
    category: 'UMKM & Pengrajin',
    regencyOrCity: 'Blimbingsari, Kab. Banyuwangi',
    sinceYear: '2018',
    memberCountLabel: '38 perajin ibu rumah tangga & pemuda desa',
    commodities: ['Kap Lampu Bambu Lapis', 'Keranjang Saji Hotel', 'Panel Dinding Anyam'],
    collaborationModel: 'Pelatihan desain modular, penyediaan cairan pengawet boraks-free, dan pembayaran uang muka produksi 50 persen.',
    story:
      'Desa Gintangan telah lama dikenal sebagai kampung pengrajin bambu di Banyuwangi. Everoot membantu menerjemahkan keahlian menganyam bilah bambu tipis menjadi kap lampu gantung dan wadah saji yang memenuhi standar kelistrikan dan estetika ruang di Kyoto serta Amsterdam.',
    verificationNote: 'Menggunakan bambu apus dan bambu petung berusia minimal 3 tahun.'
  },
  {
    id: 'kolektif-serat-lamongan',
    name: 'Kolektif UMKM Serat Enceng Gondok & Pandan Babat',
    category: 'UMKM & Pengrajin',
    regencyOrCity: 'Babat & Sekaran, Kab. Lamongan',
    sinceYear: '2019',
    memberCountLabel: '41 perajin anyaman serat sungai',
    commodities: ['Keranjang Laundry Serat Alam', 'Karpet Kepang Enceng Gondok', 'Tas & Tray Interior'],
    collaborationModel: 'Pemanfaatan gulma perairan Bengawan Solo menjadi produk interior bernilai ekspor tinggi.',
    story:
      'Tanaman enceng gondok yang tumbuh subur di aliran Bengawan Solo wilayah Lamongan dipanen, dibersihkan, dijemur hingga berwarna keemasan, lalu dikepang oleh perajin lokal menjadi wadah penyimpanan rumah tangga yang kokoh dan lentur.',
    verificationNote: 'Setiap batch melewati ruang pemanas kelembapan 45 derajat Celsius sebelum masuk kontainer.'
  },
  {
    id: 'paguyuban-akar-jati-ngawi',
    name: 'Paguyuban Kriya Akar Jati & Terakota Koridor Barat Jatim',
    category: 'UMKM & Pengrajin',
    regencyOrCity: 'Kedunggalar (Ngawi) & Trowulan (Mojokerto)',
    sinceYear: '2020',
    memberCountLabel: '24 bengkel pahat kayu & tungku terakota',
    commodities: ['Meja Konsol Akar Jati Lawas', 'Mangkuk Kayu Utuh', 'Bejana Terakota Bakar Asap'],
    collaborationModel: 'Pemanfaatan tunggul akar jati sisa penebangan resmi Perhutani dan tanah liat aluvial Mojokerto.',
    story:
      'Daripada dibiarkan membusuk atau dibakar sebagai kayu api, tunggul akar jati tua digali dan dibersihkan mengikuti lekuk alaminya oleh perajin Ngawi, dipadukan dengan lini gerabah bakar asap dari pengrajin Trowulan Mojokerto.',
    verificationNote: 'Dilengkapi dokumen legalitas kayu SVLK untuk pengiriman ekspor resmi.'
  },
  {
    id: 'nordic-botanicals-hamburg',
    name: 'Nordic Spice & Botanicals Import GmbH',
    category: 'Perusahaan & Logistik',
    regencyOrCity: 'Pelabuhan Hamburg, Jerman (Mitra Pembeli & Suplai Kemasan)',
    sinceYear: '2021',
    memberCountLabel: 'Mitra kontrak distribusi Eropa Utara',
    commodities: ['Kontrak Pembelian Cengkeh & Kayu Manis', 'Suplai Impor Kemasan Hermetik Barrier'],
    collaborationModel: 'Perdagangan timbal balik: ekspor rempah utuh Jawa Timur dan impor kantong vakum multi-layer.',
    story:
      'Kemitraan dua arah yang memungkinkan Everoot menjaga kesegaran aroma minyak atsiri rempah selama pelayaran laut menggunakan kantong pelindung oksigen berstandar pangan Eropa.',
    verificationNote: 'Pengiriman rutin melalui jalur Tanjung Perak (SUB) ke Port of Hamburg (DEHAM).'
  },
  {
    id: 'kyoto-living-craft',
    name: 'Kyoto Living & Artisan Supply Co., Ltd.',
    category: 'Perusahaan & Logistik',
    regencyOrCity: 'Kyoto & Pelabuhan Yokohama, Jepang',
    sinceYear: '2022',
    memberCountLabel: 'Jaringan kurator kriya & peralatan ukur',
    commodities: ['Distribusi Kerajinan Bambu & Serat Jatim', 'Impor Alat Ukur Kadar Air Optik'],
    collaborationModel: 'Kurasi musiman koleksi interior UMKM Jawa Timur dan pengadaan alat inspeksi mutu untuk gudang Malang.',
    story:
      'Membawa kehangatan anyaman tangan perajin Banyuwangi dan Lamongan ke ruang hunian modern Jepang, sekaligus menyuplai instrumen pengukur kelembapan digital bagi tim kendali mutu Everoot.',
    verificationNote: 'Inspeksi kualitas pra-pengapalan dilakukan bersama setiap kuartal.'
  },
  {
    id: 'tps-logistik-surabaya',
    name: 'Konsorsium Forwarding & Karantina Tanjung Perak',
    category: 'Perusahaan & Logistik',
    regencyOrCity: 'Tanjung Perak, Surabaya, Jawa Timur',
    sinceYear: '2020',
    memberCountLabel: 'Mitra operasional kepabeanan & kontainer',
    commodities: ['Layanan Kontainer FCL/LCL', 'Fumigasi Standar ISPM 15', 'Pengurusan Fitokarantina'],
    collaborationModel: 'Integrasi jadwal sandar kapal, inspeksi karantina pertanian, dan pemuatan palet terstandar.',
    story:
      'Memastikan seluruh pengiriman ekspor rempah dan kerajinan kayu/bambu bebas hama dengan sertifikasi perlakuan panas (Heat Treatment) sesuai regulasi pelabuhan tujuan.',
    verificationNote: 'Terkoneksi langsung dengan gudang konsolidasi Everoot di Surabaya Utara.'
  }
];

export const products: ProductItem[] = [
  {
    slug: 'cengkeh-lal-pari-malang',
    name: 'Cengkeh Lal Pari Petik Tangan (Hand-Picked Whole Cloves)',
    shortName: 'Cengkeh Lal Pari Malang',
    category: 'Rempah Nusantara',
    tradeFlow: 'Ekspor',
    originOrSource: 'Lereng Selatan Gunung Semeru, Dampit',
    regency: 'Kabupaten Malang, Jawa Timur',
    hsCode: '0907.10.00',
    grade: 'Lal Pari AB6 Special Hand-Picked',
    moq: '1 Metrik Ton (LCL) / 11 Metrik Ton (20ft FCL)',
    leadTime: '14 - 21 Hari Kerja setelah Konfirmasi Kontrak',
    packaging: 'Karung Goni Baru 50 kg dengan Inner Liner Hermetik Pangan',
    port: 'Tanjung Perak, Surabaya (IDSUB)',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Butiran cengkeh kering utuh berwarna cokelat kemerahan di atas wadah alami',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Sortasi butiran cengkeh kering kualitas ekspor',
        caption: 'Butiran cengkeh Lal Pari dengan kepala bunga utuh dan warna cokelat kemerahan merata.'
      },
      {
        url: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1000&q=80',
        alt: 'Rempah nusantara dalam mangkuk takar laboratorium mutu',
        caption: 'Pengujian kadar air dan persentase gagang di fasilitas sortasi Dampit, Malang.'
      },
      {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80',
        alt: 'Lanskap perkebunan dataran tinggi Jawa Timur',
        caption: 'Kawasan kebun campur petani mitra di ketinggian 750 mdpl lereng Semeru.'
      }
    ],
    summary:
      'Bunga cengkeh utuh varietas Lal Pari dari dataran tinggi Kabupaten Malang dengan kandungan minyak eugenol alami tinggi, dipetik tepat sebelum kuncup mekar dan dikeringkan di rumah jemur surya tertutup.',
    originStory:
      'Di lereng selatan Gunung Semeru, tanah vulkanik kaya mineral memberikan karakter aroma hangat dan tajam pada bunga cengkeh Lal Pari. Petani mitra kami di Kecamatan Dampit dan Tirtoyudo memetik kuncup bunga secara manual saat warna mahkota berubah merah muda keemasan, lalu memisahkan gagang di hari yang sama sebelum masuk ke rak pengering surya.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Petik Selektif Kuncup Matang',
        detail: 'Hanya tandan dengan kuncup penuh yang dipetik tangan tanpa merusak pucuk ranting produktif.'
      },
      {
        stepNumber: '02',
        title: 'Perontokan & Pengeringan Rak UV',
        detail: 'Bunga dipisahkan dari gagang dan dijemur selama 4 hingga 5 hari di rumah pengering tertutup hingga kadar air mencapai 11-12 persen.'
      },
      {
        stepNumber: '03',
        title: 'Ayak Mekanis & Sortasi Meja (Hand-Pick)',
        detail: 'Pemisahan debu, cengkeh tanpa kepala (headless), dan benda asing di meja sortasi gudang Malang.'
      },
      {
        stepNumber: '04',
        title: 'Pengemasan Liner Hermetik & Karantina',
        detail: 'Dikemas dalam kantong pelindung aroma impor sebelum dimasukkan ke karung goni ekspor di Surabaya.'
      }
    ],
    partnerName: 'Gabungan Kelompok Tani Lereng Semeru Makmur',
    partnerRole: 'Mitra budidaya, petik selektif, dan pengeringan tahap pertama di Dampit, Malang.',
    specifications: [
      { label: 'Kadar Air (Moisture)', value: 'Maks. 12.0%' },
      { label: 'Kadar Minyak Atsiri (Volatile Oil)', value: '17.5% - 19.5%' },
      { label: 'Benda Asing (Foreign Matter)', value: 'Maks. 0.5%' },
      { label: 'Gagang Cengkeh (Clove Stems)', value: 'Maks. 1.5%' },
      { label: 'Cengkeh Khaki / Tanpa Kepala', value: 'Maks. 2.0%' },
      { label: 'Kapasitas Kontainer 20ft', value: '11.000 kg (220 Karung @ 50 kg)' }
    ]
  },
  {
    slug: 'kayu-manis-cassia-ijen',
    name: 'Kayu Manis Cassia Vera Gulung Utuh (Ijen Highland Cinnamon Quills)',
    shortName: 'Kayu Manis Cassia Ijen',
    category: 'Rempah Nusantara',
    tradeFlow: 'Ekspor',
    originOrSource: 'Lereng Pegunungan Ijen, Licin & Sempol',
    regency: 'Banyuwangi & Bondowoso, Jawa Timur',
    hsCode: '0906.19.00',
    grade: 'KA / AA Stick (Panjang 8 cm, 15 cm, & 25 cm)',
    moq: '1 Metrik Ton (LCL) / 7 Metrik Ton (20ft FCL)',
    leadTime: '14 - 20 Hari Kerja',
    packaging: 'Karton Kraf Tebal 20 kg / 25 kg dengan Pelindung Kelembapan',
    port: 'Tanjung Perak, Surabaya (IDSUB)',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Batang kayu manis gulung utuh tersusun rapi dengan tekstur kulit bersih',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1000&q=80',
        alt: 'Gulungan batang kayu manis Cassia Vera kering',
        caption: 'Gulungan alami kulit kayu manis dengan warna cokelat keemasan bersih setelah proses pengerokan kulit luar.'
      },
      {
        url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Koleksi rempah kering siap kemas',
        caption: 'Pemotongan ukuran seragam 8 cm dan 15 cm untuk kebutuhan ritel maupun industri ekstraksi.'
      }
    ],
    summary:
      'Kulit kayu manis gulung alami dari pohon berusia 8 hingga 12 tahun di kawasan dataran tinggi Ijen, dikikis bersih dari lapisan gabus luar sehingga menghasilkan gulungan padat beraroma manis hangat.',
    originStory:
      'Kawasan penyangga Kawah Ijen antara Banyuwangi dan Bondowoso memiliki suhu malam yang sejuk dan tanah berpasir vulkanik. Kondisi ini membuat lapisan kulit dalam pohon kayu manis tumbuh tebal dengan kadar sinamaldehida yang kuat. Setiap panen diikuti penanaman kembali lima bibit pohon muda.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Pengerokan Kulit Luar (Scraping)',
        detail: 'Lapisan kulit luar yang kasar dibersihkan secara manual di kebun sebelum kulit bagian dalam dikupas.'
      },
      {
        stepNumber: '02',
        title: 'Penggulungan Alami dengan Sinar Matahari',
        detail: 'Lembaran kulit dijemur di atas para-para bambu hingga menggulung padat membentuk silinder ganda.'
      },
      {
        stepNumber: '03',
        title: 'Pemotongan Presisi & Sortasi Ketebalan',
        detail: 'Batang dipotong sesuai spesifikasi kontrak (stick 8 cm, 15 cm, atau long quill) dan dikelompokkan berdasarkan diameter.'
      }
    ],
    partnerName: 'Komunitas Petani Rempah & Kayu Manis Kawah Ijen',
    partnerRole: 'Mitra panen lestari, pengupasan kulit bersih, dan penanaman bibit baru di Licin & Sempol.',
    specifications: [
      { label: 'Kadar Air (Moisture)', value: 'Maks. 13.5%' },
      { label: 'Kandungan Minyak Atsiri', value: '2.2% - 3.4%' },
      { label: 'Tingkat Gulungan (Rolling)', value: '90% - 95% Gulungan Utuh' },
      { label: 'Potongan Panjang Tersedia', value: '6 cm, 8 cm, 15 cm, 25 cm, atau Utuh' },
      { label: 'Kapasitas Kontainer 20ft', value: '6.500 - 7.500 kg dalam Karton' },
      { label: 'Kapasitas Kontainer 40ft HC', value: '15.000 - 16.500 kg dalam Karton' }
    ]
  },
  {
    slug: 'jahe-merah-kering-ponorogo',
    name: 'Jahe Merah Iris Kering Simplisia (Sun-Dried Red Ginger Slices)',
    shortName: 'Jahe Merah Kering Ponorogo',
    category: 'Rempah Nusantara',
    tradeFlow: 'Ekspor',
    originOrSource: 'Perbukitan Ngrayun & Pulung',
    regency: 'Kabupaten Ponorogo, Jawa Timur',
    hsCode: '0910.11.00',
    grade: 'Unbleached Export Slice (Tanpa Pemutih Sulfur)',
    moq: '500 kg (LCL) / 9 Metrik Ton (20ft FCL)',
    leadTime: '12 - 18 Hari Kerja',
    packaging: 'Kantong PP Woven 25 kg + Liner PE Food Grade',
    port: 'Tanjung Perak, Surabaya (IDSUB)',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Rimpang jahe segar dan irisan kering di atas permukaan kayu',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80',
        alt: 'Rimpang jahe hasil panen tua 11 bulan',
        caption: 'Rimpang dipanen pada usia 10 hingga 12 bulan saat kandungan gingerol dan shogaol mencapai puncak.'
      }
    ],
    summary:
      'Irisan jahe merah tua dari perbukitan kapur dan lempung Ponorogo, dicuci dengan air mata air pegunungan, diiris seragam 3 milimeter, dan dikeringkan tanpa bahan pemutih untuk industri teh herbal dan ekstraksi oleoresin.',
    originStory:
      'Bersama Koperasi Tani Rimpang Merah Wilis-Ponorogo, kami memastikan jahe hanya dipanen saat daun tanaman telah mengering sempurna di usia minimal 10 bulan. Proses pengeringan mengandalkan kombinasi rumah surya dan pemanas udara bersih sehingga aroma pedas khas jahe merah tetap terjaga tanpa bau asap.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Pencucian Bertekanan & Tirisan Air',
        detail: 'Tanah yang menempel di sela rimpang dibersihkan dengan semprotan air bersih tanpa mengupas kulit ari kaya minyak atsiri.'
      },
      {
        stepNumber: '02',
        title: 'Pengirisan Ketebalan 3 mm',
        detail: 'Diiris menggunakan pisau baja tahan karat pangan agar waktu pengeringan merata di setiap keping.'
      },
      {
        stepNumber: '03',
        title: 'Pengeringan Suhu Terkontrol (50°C)',
        detail: 'Dikeringkan hingga kadar air di bawah 10 persen untuk mencegah pertumbuhan kapang selama pengiriman.'
      }
    ],
    partnerName: 'Koperasi Tani Rimpang Merah Wilis-Ponorogo',
    partnerRole: 'Mitra budidaya rimpang tua dan unit pengolahan simplisia di Ngrayun, Ponorogo.',
    specifications: [
      { label: 'Kadar Air (Moisture)', value: 'Maks. 10.0%' },
      { label: 'Ketebalan Irisan', value: '2.5 mm - 3.5 mm (Kering)' },
      { label: 'Perlakuan Sulfur / Pemutih', value: '0 ppm (100% Tanpa Pemutih)' },
      { label: 'Kadar Abu Total', value: 'Maks. 6.5%' },
      { label: 'Kapasitas Kontainer 20ft', value: '9.000 kg' }
    ]
  },
  {
    slug: 'lada-hitam-banyuwangi',
    name: 'Lada Hitam Butir Bold (Kalibaru Estate Black Peppercorns)',
    shortName: 'Lada Hitam Kalibaru',
    category: 'Rempah Nusantara',
    tradeFlow: 'Ekspor',
    originOrSource: 'Dataran Kalibaru & Glenmore',
    regency: 'Kabupaten Banyuwangi, Jawa Timur',
    hsCode: '0904.11.20',
    grade: 'ASTA Clean / Density 550 - 570 g/L',
    moq: '1 Metrik Ton (LCL) / 14 Metrik Ton (20ft FCL)',
    leadTime: '14 - 21 Hari Kerja',
    packaging: 'Karung Goni Food Grade 50 kg / Kantong Kraf 25 kg',
    port: 'Tanjung Perak, Surabaya (IDSUB)',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Butiran lada hitam kering dengan tekstur keriput padat',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1000&q=80',
        alt: 'Butiran lada hitam hasil ayak spiral',
        caption: 'Densitas bulir 560 gram per liter dengan kadar piperin yang kuat dan bersih dari debu tangkai.'
      }
    ],
    summary:
      'Lada hitam butir utuh dari kebun tumpang sari di kawasan Kalibaru dan Glenmore, Banyuwangi, melalui proses perendaman air panas singkat sebelum penjemuran untuk menghasilkan warna hitam legam merata dan higienitas tinggi.',
    originStory:
      'Tanaman lada merambat di pohon pelindung di kebun rakyat Kalibaru. Setelah tandan buah berwarna hijau tua kekuningan dipetik, bulir lada direndam sejenak dalam air panas bersih untuk menonaktifkan spora jamur alami sekaligus memunculkan warna hitam berkilau saat dijemur.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Perontokan Tandan & Blanching Air Panas',
        detail: 'Bulir lada dipisahkan dari tangkai dan dicelupkan ke air panas 80 derajat Celsius selama 60 detik.'
      },
      {
        stepNumber: '02',
        title: 'Penjemuran Lantai Terpal Bersih',
        detail: 'Dijemur di atas alas terpal tinggi tanpa bersentuhan langsung dengan tanah.'
      },
      {
        stepNumber: '03',
        title: 'Pemisahan Berat Jenis (Gravity Table)',
        detail: 'Memisahkan bulir kopong (light berries) sehingga hanya bulir padat di atas 550 g/L yang dikemas.'
      }
    ],
    partnerName: 'Komunitas Petani Rempah & Kayu Manis Kawah Ijen',
    partnerRole: 'Mitra kebun lada tumpang sari di koridor barat Banyuwangi.',
    specifications: [
      { label: 'Berat Jenis (Bulk Density)', value: '550 - 570 gram / liter' },
      { label: 'Kadar Air (Moisture)', value: 'Maks. 12.0%' },
      { label: 'Bulir Ringan (Light Berries)', value: 'Maks. 2.0%' },
      { label: 'Benda Asing (Foreign Matter)', value: 'Maks. 0.5%' },
      { label: 'Kapasitas Kontainer 20ft', value: '14.000 - 15.000 kg' }
    ]
  },
  {
    slug: 'lampu-gantung-bambu-gintangan',
    name: 'Kap Lampu Anyaman Bambu Lapis Gintangan (Woven Bamboo Pendant Dome)',
    shortName: 'Kap Lampu Bambu Gintangan',
    category: 'Kerajinan UMKM',
    tradeFlow: 'Ekspor',
    originOrSource: 'Desa Wisata Kriya Gintangan, Blimbingsari',
    regency: 'Kabupaten Banyuwangi, Jawa Timur',
    hsCode: '4602.11.90',
    grade: 'Handcrafted Hospitality & Residential Grade',
    moq: '120 Unit (LCL) / 650 Unit Set Bersarang (20ft FCL)',
    leadTime: '25 - 32 Hari Kerja (Produksi Tangan Terjadwal)',
    packaging: 'Karton Double-Wall Berlapis Kertas Silika (Sistem Nesting 3 Ukuran)',
    port: 'Tanjung Perak, Surabaya (IDSUB)',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Kap lampu gantung anyaman serat dan bambu alami dengan pendar cahaya hangat',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80',
        alt: 'Pencahayaan kap lampu anyaman bambu di ruang interior',
        caption: 'Pola anyaman silang ganda menciptakan bayangan geometris lembut saat lampu dinyalakan.'
      },
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
        alt: 'Tekstur detail serat bambu dan rotan yang dihaluskan',
        caption: 'Bilah bambu disayat setebal 1,2 milimeter dan diamplas halus tanpa pernis sintetis mengilap.'
      }
    ],
    summary:
      'Kap lampu gantung hasil anyaman tangan perajin Desa Gintangan, Banyuwangi, dirancang dalam tiga ukuran bersarang (nesting S, M, L) untuk menghemat volume kontainer ekspor hingga 60 persen.',
    originStory:
      'Di Desa Gintangan, keterampilan menyayat bambu menjadi pita tipis yang lentur diwariskan lintas generasi. Bersama Sanggar Kriya Gintangan, tim desain Everoot menyempurnakan rangka dudukan fitting lampu agar kompatibel dengan standar kabel E27 Eropa dan Jepang, serta merancang struktur nesting agar tiga ukuran kap lampu dapat dikemas dalam satu kotak kardus.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Seleksi Bambu Tua & Perendaman Alami',
        detail: 'Bambu apus berusia minimal tiga tahun direndam larutan garam organik untuk menghilangkan kandungan pati pemicu kumbang bubuk.'
      },
      {
        stepNumber: '02',
        title: 'Penyayatan Bilah & Penganyaman Rangka',
        detail: 'Perajin menganyam bilah bambu mengikuti cetakan kayu presisi agar diameter setiap kap lampu konsisten.'
      },
      {
        stepNumber: '03',
        title: 'Pengamplasan Halus & Coating Water-Based',
        detail: 'Permukaan dihaluskan dan dilapisi pelindung matte berbahan dasar air yang aman bagi ruang dalam.'
      }
    ],
    partnerName: 'Sanggar Kriya Anyaman Bambu Desa Gintangan',
    partnerRole: 'Mitra produksi anyaman tangan oleh 38 perajin di Blimbingsari, Banyuwangi.',
    specifications: [
      { label: 'Material Utama', value: '100% Bambu Apus & Rangka Rotan Alami' },
      { label: 'Dimensi Set Bersarang (S / M / L)', value: 'Dia. 32 cm / 45 cm / 58 cm' },
      { label: 'Kadar Air Bambu Saat Kemas', value: '10% - 12% (Kiln Dried)' },
      { label: 'Kompatibilitas Dudukan Lampu', value: 'Cincin Universal E26 / E27 (40mm)' },
      { label: 'Finishing Permukaan', value: 'Natural Matte Water-Based Sealer / Black Charcoal' },
      { label: 'Sertifikasi Kayu & Fumigasi', value: 'ISPM 15 & Dokumen V-Legal / SVLK' }
    ]
  },
  {
    slug: 'keranjang-enceng-gondok-lamongan',
    name: 'Set Keranjang & Tray Serat Enceng Gondok Kepang (Water Hyacinth Storage Set)',
    shortName: 'Keranjang Enceng Gondok Lamongan',
    category: 'Kerajinan UMKM',
    tradeFlow: 'Ekspor',
    originOrSource: 'Sentra Serat Alam Babat & Sekaran',
    regency: 'Kabupaten Lamongan, Jawa Timur',
    hsCode: '4602.19.20',
    grade: 'Export Home Organization Grade (Anti-Mold Treated)',
    moq: '200 Set (LCL) / 1.100 Set (40ft HC FCL)',
    leadTime: '21 - 28 Hari Kerja',
    packaging: 'Karton Ekspor 5-Ply dengan Silica Gel Food-Safe',
    port: 'Tanjung Perak, Surabaya (IDSUB)',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Keranjang dan penataan ruang berbahan serat alam warna krem hangat',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
        alt: 'Penataan interior menggunakan keranjang serat alam',
        caption: 'Anyaman kepang tebal dari batang enceng gondok kering memberikan struktur lentur namun tegak.'
      }
    ],
    summary:
      'Set keranjang penyimpanan dan baki saji yang dianyam dari batang enceng gondok daerah aliran Bengawan Solo di Lamongan, mengubah tanaman gulma sungai menjadi produk interior rumah tangga ramah lingkungan.',
    originStory:
      'Pertumbuhan enceng gondok yang terlalu cepat di perairan Lamongan sering menghambat aliran air. Kolektif perajin di Kecamatan Babat memanen batang enceng gondok sepanjang 70 sentimeter, menjemurnya selama dua pekan hingga berubah warna cokelat madu, lalu mengepangnya di atas rangka kawat tersembunyi atau rotan.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Panen Batang Sungai & Penjemuran 14 Hari',
        detail: 'Batang enceng gondok dibersihkan dari akar dan daun, lalu dijemur hingga pipih dan kering sempurna.'
      },
      {
        stepNumber: '02',
        title: 'Penganyaman Teknik Kepang & Lilit',
        detail: 'Dianyaman secara manual oleh kelompok perajin desa menggunakan pola kepang rapat.'
      },
      {
        stepNumber: '03',
        title: 'Pemanasan Ruang Oven 45°C',
        detail: 'Sebelum masuk kardus, seluruh keranjang dimasukkan ke ruang pemanas untuk memastikan bebas spora jamur.'
      }
    ],
    partnerName: 'Kolektif UMKM Serat Enceng Gondok & Pandan Babat',
    partnerRole: 'Mitra pemanenan serat sungai dan produksi anyaman di Lamongan.',
    specifications: [
      { label: 'Material Serat', value: 'Batang Enceng Gondok Kering & Pengikat Daun Pandan' },
      { label: 'Konfigurasi Set', value: '1 Set Isi 3 Ukuran (Besar, Sedang, Kecil)' },
      { label: 'Kadar Kelembapan Serat', value: 'Maks. 12%' },
      { label: 'Kapasitas Beban Pegangan', value: 'Hingga 12 kg (Jahitan Ganda)' },
      { label: 'Kapasitas Kontainer 40ft HC', value: '1.100 - 1.250 Set' }
    ]
  },
  {
    slug: 'meja-konsol-akar-jati-ngawi',
    name: 'Meja Konsol & Kriya Pahatan Akar Jati Alami (Reclaimed Teak Root Console)',
    shortName: 'Meja Konsol Akar Jati Ngawi',
    category: 'Kerajinan UMKM',
    tradeFlow: 'Ekspor',
    originOrSource: 'Kawasan Hutan Jati Kedunggalar & Paron',
    regency: 'Kabupaten Ngawi, Jawa Timur',
    hsCode: '9403.60.90',
    grade: 'One-of-a-Kind Sculptural Root / SVLK Certified',
    moq: '15 Unit (LCL) / 85 Unit Campuran (20ft FCL)',
    leadTime: '30 - 40 Hari Kerja',
    packaging: 'Krat Kayu Perlakuan Panas (ISPM 15) + Pelindung Sudut Busa Biodegradable',
    port: 'Tanjung Perak, Surabaya (IDSUB)',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Meja kayu jati alami dengan serat organik di ruang galeri',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80',
        alt: 'Permukaan meja kayu jati solid bertekstur alami',
        caption: 'Setiap meja mempertahankan lekuk erosi alami akar jati tua yang telah berusia puluhan tahun.'
      }
    ],
    summary:
      'Meja konsol dan bangku pahatan dari tunggul akar kayu jati sisa penebangan resmi di Ngawi, dibersihkan dengan semprotan air bertekanan dan dihaluskan tangan tanpa mengubah bentuk organiknya.',
    originStory:
      'Hutan jati di perbatasan Ngawi menyimpan tunggul akar tua yang tertinggal di dalam tanah selama puluhan tahun setelah panen kayu resmi. Perajin lokal menggali akar tersebut, mengupas tanah dan batu yang terjepit di sela urat kayu, lalu meratakan bagian atasnya menjadi meja konsol yang padat dan tahan cuaca.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Ekskavasi Tunggul Resmi & Pencucian Tekanan Tinggi',
        detail: 'Akar dibersihkan dari sisa tanah lempung hingga serat kayu keras terlihat utuh.'
      },
      {
        stepNumber: '02',
        title: 'Pemotongan Ratakan Atas & Pengeringan Alami',
        detail: 'Bagian permukaan meja diratakan dengan gergaji pita dan diangin-anginkan hingga kayu stabil.'
      },
      {
        stepNumber: '03',
        title: 'Sanding 4 Tahap & Beeswax Alami',
        detail: 'Dihaluskan hingga grit 400 dan dipoles lilin lebah (beeswax) agar urat kayu jati tampak hidup.'
      }
    ],
    partnerName: 'Paguyuban Kriya Akar Jati & Terakota Koridor Barat Jatim',
    partnerRole: 'Mitra bengkel pahat akar jati di Kedunggalar, Ngawi.',
    specifications: [
      { label: 'Material Kayu', value: '100% Tunggul Akar Jati Rekondisi (Tectona grandis)' },
      { label: 'Rentang Ukuran Konsol', value: 'Panjang 120 - 160 cm x Lebar 45 cm x Tinggi 78 cm' },
      { label: 'Legalitas Ekspor Kayu', value: 'Lengkap Dokumen V-Legal / SVLK Indonesia' },
      { label: 'Perlakuan Finishing', value: 'Raw Sanded / Natural Teak Oil / Beeswax' }
    ]
  },
  {
    slug: 'kemasan-barrier-vakum-impor',
    name: 'Kantong Hermetik Aroma-Barrier & Instrumen Kadar Air Optik (Impor Distribusi Jatim)',
    shortName: 'Kemasan Barrier & Alat Ukur Impor',
    category: 'Komoditas Impor',
    tradeFlow: 'Impor',
    originOrSource: 'Pelabuhan Hamburg (Jerman) & Yokohama (Jepang)',
    regency: 'Distribusi Gudang Surabaya & Malang, Jawa Timur',
    hsCode: '3923.21.99 / 9027.89.90',
    grade: 'Food-Grade High Oxygen Barrier & Precision Ag-Tech',
    moq: '500 Lembar Liner / 5 Unit Pengukur Kadar Air Koperasi',
    leadTime: 'Tersedia Stok Gudang Surabaya (7 Hari Kerja)',
    packaging: 'Karton Segel Pabrik 100 Lembar per Box',
    port: 'Pelabuhan Tujuan: Tanjung Perak, Surabaya (IDSUB)',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Gudang logistik modern dengan palet barang yang tertata rapi',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Fasilitas penyimpanan logistik dan kemasan di gudang Surabaya',
        caption: 'Stok kemasan pelindung oksigen dan kelembapan di gudang distribusi Tanjung Perak.'
      }
    ],
    summary:
      'Divisi impor Everoot Inc. mendatangkan kantong liner hermetik 7-lapis dan pengukur kelembapan bijian digital untuk disalurkan kepada koperasi petani rempah dan eksportir mitra di seluruh Jawa Timur.',
    originStory:
      'Masalah terbesar ekspor rempah tropis adalah kondensasi uap air di dalam kontainer (container sweat) saat kapal berlayar dari perairan khatulistiwa menuju pelabuhan musim dingin di Eropa atau Jepang. Melalui divisi impor kami, Everoot menyediakan kantong hermetik kedap oksigen serta penyerap kelembapan kontainer bebas DMF bagi komunitas tani dan pelaku usaha di Jawa Timur.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Pengadaan Langsung dari Produsen Mitra',
        detail: 'Diimpor dalam kontainer balik dari mitra kami di Hamburg dan Yokohama.'
      },
      {
        stepNumber: '02',
        title: 'Penyelesaian PIB & Kalibrasi di Surabaya',
        detail: 'Alat ukur kelembapan dikalibrasi khusus untuk kurva cengkeh, lada, kopi, dan irisan rimpang.'
      },
      {
        stepNumber: '03',
        title: 'Distribusi Koperasi & Cicilan Panen',
        detail: 'Disalurkan ke kelompok tani mitra di Malang, Ponorogo, dan Banyuwangi sebelum musim petik tiba.'
      }
    ],
    partnerName: 'Nordic Spice & Botanicals Import GmbH & Kyoto Living Co.',
    partnerRole: 'Mitra pemasok teknologi kemasan hermetik dan alat inspeksi mutu.',
    specifications: [
      { label: 'Laju Transmisi Oksigen (OTR)', value: '< 0.5 cc/m²/24 jam' },
      { label: 'Ketebalan Kantong Liner', value: '95 Mikron Co-Extruded PA/PE' },
      { label: 'Kapasitas Liner', value: 'Ukuran Karung 25 kg, 50 kg, dan Jumbo Bag 500 kg' },
      { label: 'Akurasi Alat Ukur Kadar Air', value: '+/- 0.3% dengan Kompensasi Suhu Otomatis' }
    ]
  }
];

export const galleryPosts: GalleryPost[] = [
  {
    id: 'pin-01-panen-cengkeh-dampit',
    title: 'Embun Pagi di Rumah Jemur Cengkeh Lereng Semeru',
    category: 'Panen & Rempah',
    tradeType: 'Ekspor',
    aspectClass: 'ratio-tall',
    width: 800,
    height: 1100,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Butiran cengkeh kering yang baru diangkat dari rak jemur bambu',
    location: 'Dampit, Kabupaten Malang, Jawa Timur',
    date: '14 Agustus 2026',
    routeLabel: 'Dampit (Malang) -> Tanjung Perak -> Rotterdam',
    partnerUnit: 'Gapoktan Lereng Semeru Makmur',
    summary: 'Pembalikan hamparan cengkeh Lal Pari hari keempat di rumah pengering surya sebelum pengujian kadar air.',
    storyParagraphs: [
      'Foto ini diambil pukul 06.45 WIB di Dusun Sukodono, Kecamatan Dampit, Kabupaten Malang. Bapak Suparman bersama tiga anggota kelompok tani sedang membalik lapisan cengkeh Lal Pari yang sudah dijemur selama empat hari di atas rak bambu bertingkat.',
      'Sebelum menggunakan kubah jemur penahan embun ini pada tahun 2017, petani harus buru-buru menggulung terpal setiap kali kabut sore turun dari lereng Gunung Semeru. Kini suhu di dalam ruang jemur stabil di kisaran 38 hingga 42 derajat Celsius, membuat warna kuncup cengkeh matang merata menjadi cokelat kemerahan tanpa bau asap.',
      'Batch cengkeh dalam foto ini berhasil mencapai kadar air 11,4 persen pada sore harinya dan dikemas sebanyak 220 karung untuk pengiriman menuju pelabuhan Rotterdam.'
    ],
    fieldNote: 'Dokumentasi tim lapangan Everoot saat inspeksi panen raya Agustus di ketinggian 780 mdpl.',
    batchCode: 'EVR-CLV-MLG-2608',
    relatedProductSlug: 'cengkeh-lal-pari-malang',
    relatedProductName: 'Cengkeh Lal Pari Malang',
    tags: ['Cengkeh Lal Pari', 'Kabupaten Malang', 'Rumah Jemur Surya', 'Ekspor Eropa']
  },
  {
    id: 'pin-02-anyaman-bambu-gintangan',
    title: 'Menyayat Bilah Bambu 1 Milimeter di Teras Desa Gintangan',
    category: 'Kriya UMKM',
    tradeType: 'Ekspor',
    aspectClass: 'ratio-portrait',
    width: 800,
    height: 960,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Kap lampu anyaman bambu gantung dengan struktur kisi halus',
    location: 'Desa Gintangan, Banyuwangi, Jawa Timur',
    date: '03 September 2026',
    routeLabel: 'Banyuwangi -> Surabaya -> Yokohama, Jepang',
    partnerUnit: 'Sanggar Kriya Anyaman Bambu Gintangan',
    summary: 'Penyelesaian akhir 300 unit kap lampu bambu lapis untuk pesanan ruang teh dan hunian di Kyoto.',
    storyParagraphs: [
      'Di teras rumahnya di Desa Gintangan, Banyuwangi, Ibu Sulastri menganyam pola silang ganda menggunakan bilah bambu apus yang telah direndam air garam alami dan dijemur hingga lentur seperti pita kain.',
      'Pesanan kali ini datang dari mitra kurator interior kami di Kyoto, Jepang, yang meminta kap lampu tanpa paku logam sama sekali. Seluruh sambungan cincin atas dan bawah dikunci menggunakan lilitan kulit rotan tipis.',
      'Setiap kap lampu yang selesai dianyam diberi label inisial perajin pembuatnya pada bagian dalam cincin bambu, sehingga pembeli di Jepang mengetahui siapa perajin Jawa Timur yang merangkai lampu tersebut.'
    ],
    fieldNote: 'Bambu dipanen dari kebun desa dengan sistem tebang rumpun terukur.',
    batchCode: 'EVR-BMB-BWI-2609',
    relatedProductSlug: 'lampu-gantung-bambu-gintangan',
    relatedProductName: 'Kap Lampu Bambu Gintangan',
    tags: ['Anyaman Bambu', 'UMKM Banyuwangi', 'Desa Gintangan', 'Ekspor Jepang']
  },
  {
    id: 'pin-03-kontainer-tanjung-perak',
    title: 'Penyegelan Kontainer 40ft High Cube Sebelum Kapal Sandar Malam',
    category: 'Pengapalan Ekspor',
    tradeType: 'Ekspor',
    aspectClass: 'ratio-landscape',
    width: 1000,
    height: 700,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Aktivitas pemuatan palet kardus ekspor di gudang konsolidasi pelabuhan',
    location: 'Gudang Tanjung Perak Timur, Surabaya',
    date: '19 September 2026',
    routeLabel: 'Tanjung Perak (IDSUB) -> Hamburg (DEHAM)',
    partnerUnit: 'Tim Logistik & Karantina Everoot Surabaya',
    summary: 'Pemasangan kertas kraft pelindung dinding kontainer dan kantong desikan sebelum muat 15 ton kayu manis.',
    storyParagraphs: [
      'Sebelum satu karton pun masuk ke dalam kontainer, tim gudang kami di Surabaya melapisi seluruh dinding baja kontainer dengan kertas kraft bergelombang (corrugated paper lining) dan menggantung 16 titik penyerap kelembapan.',
      'Langkah ini wajib kami lakukan untuk pengiriman ke Eropa Utara. Ketika kapal kargo bergerak dari perairan hangat Samudra Hindia memasuki perairan dingin Atlantik Utara, perbedaan suhu ekstrem dapat memicu tetesan air di langit-langit kontainer.',
      'Dengan pelapis dinding kraft dan liner hermetik di setiap karton, 15,8 ton kayu manis gulung dari lereng Ijen tiba di Pelabuhan Hamburg dalam kondisi kering renyah seperti saat meninggalkan Jawa Timur.'
    ],
    fieldNote: 'Pemuatan selesai pukul 17.20 WIB setelah pemeriksaan pejabat Karantina Pertanian.',
    batchCode: 'EVR-LOG-SUB-2609',
    relatedProductSlug: 'kayu-manis-cassia-ijen',
    relatedProductName: 'Kayu Manis Cassia Ijen',
    tags: ['Tanjung Perak', 'Kontainer FCL', 'Kayu Manis Ijen', 'Pelabuhan Hamburg']
  },
  {
    id: 'pin-04-kayu-manis-ijen',
    title: 'Gulungan Emas Kulit Cassia Vera dari Ketinggian 1.100 Mdpl',
    category: 'Panen & Rempah',
    tradeType: 'Ekspor',
    aspectClass: 'ratio-square',
    width: 800,
    height: 800,
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Susunan batang kayu manis kering yang menggulung rapi',
    location: 'Kecamatan Licin, Banyuwangi, Jawa Timur',
    date: '27 Agustus 2026',
    routeLabel: 'Lereng Ijen -> Gudang Malang -> Dubai & Hamburg',
    partnerUnit: 'Komunitas Petani Rempah Kawah Ijen',
    summary: 'Proses pemotongan stick kayu manis ukuran 8 sentimeter setelah penjemuran alami selama enam hari.',
    storyParagraphs: [
      'Aroma manis pedas langsung memenuhi halaman rumah pengumpul di Kecamatan Licin begitu ikatan kulit kayu manis diturunkan dari mobil pikap kebun.',
      'Petani mitra kami hanya mengupas pohon yang telah berumur minimal delapan tahun. Sebelum kulit bagian dalam dilepas dari batang, lapisan gabus luar dikikis bersih menggunakan pisau lengkung khusus sehingga saat mengering, batangnya berwarna cokelat terang mulus tanpa bercak lumut.',
      'Di hari keenam penjemuran, lembaran kulit tersebut telah menggulung alami menyerupai seruling padat dan siap dipotong sesuai ukuran pesanan.'
    ],
    fieldNote: 'Program tanam 5 bibit pohon baru untuk setiap 1 pohon panen berjalan di blok hutan rakyat Licin.',
    batchCode: 'EVR-CIN-IJN-2608',
    relatedProductSlug: 'kayu-manis-cassia-ijen',
    relatedProductName: 'Kayu Manis Cassia Ijen',
    tags: ['Kayu Manis', 'Kawah Ijen', 'Pertanian Lestari', 'Banyuwangi']
  },
  {
    id: 'pin-05-enceng-gondok-lamongan',
    title: 'Dari Gulma Sungai Bengawan Menjadi Keranjang Interior Skandinavia',
    category: 'Kriya UMKM',
    tradeType: 'Ekspor',
    aspectClass: 'ratio-tall',
    width: 800,
    height: 1080,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Keranjang serat alam hasil anyaman kepang di ruang bersih',
    location: 'Babat, Kabupaten Lamongan, Jawa Timur',
    date: '08 Oktober 2026',
    routeLabel: 'Lamongan -> Surabaya -> Gothenburg, Swedia',
    partnerUnit: 'Kolektif UMKM Serat Alam Babat',
    summary: 'Inspeksi kekencangan kepang dan kadar air 450 set keranjang enceng gondok sebelum pengemasan.',
    storyParagraphs: [
      'Bagi warga di tepian aliran Bengawan Solo wilayah Babat, Lamongan, hamparan enceng gondok dulunya adalah masalah tahunan yang menyumbat perahu nelayan sungai.',
      'Kini, batang enceng gondok sepanjang 60 hingga 80 sentimeter dipanen setiap pagi, dibelah dan dijemur di pelataran desa hingga berubah menjadi serat bertekstur lembut namun sangat ulet.',
      'Dalam foto ini, tim kendali mutu Everoot bersama koordinator perajin memeriksa jahitan pegangan keranjang menggunakan alat uji tarik sederhana untuk memastikan setiap keranjang sanggup menahan beban pakaian maupun kayu bakar di rumah pembeli di Swedia.'
    ],
    fieldNote: 'Kadar air serat diukur menggunakan moisture meter tusuk: rata-rata 10,8 persen.',
    batchCode: 'EVR-WHC-LMG-2610',
    relatedProductSlug: 'keranjang-enceng-gondok-lamongan',
    relatedProductName: 'Keranjang Enceng Gondok Lamongan',
    tags: ['Enceng Gondok', 'UMKM Lamongan', 'Kriya Berkelanjutan', 'Ekspor Eropa']
  },
  {
    id: 'pin-06-impor-kemasan-hermetik',
    title: 'Kedatangan Kontainer Impor Liner Hermetik & Alat Ukur Kadar Air',
    category: 'Distribusi Impor',
    tradeType: 'Impor',
    aspectClass: 'ratio-portrait',
    width: 800,
    height: 980,
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Petugas gudang memeriksa barang masuk di rak logistik',
    location: 'Gudang Distribusi Everoot, Surabaya',
    date: '15 Oktober 2026',
    routeLabel: 'Hamburg & Yokohama -> Tanjung Perak -> Koperasi Jatim',
    partnerUnit: 'Divisi Impor & Distribusi Koperasi Everoot',
    summary: 'Bongkar muat 12.000 lembar kantong hermetik multi-layer dan 30 unit moisture meter untuk koperasi mitra.',
    storyParagraphs: [
      'Perdagangan yang sehat tidak hanya mengalir satu arah. Foto ini merekam kegiatan bongkar muat di gudang Surabaya saat kiriman impor kantong liner hermetik 7-lapis dari Jerman dan alat ukur kelembapan optik dari Jepang tiba.',
      'Sebagian besar petani rempah di daerah terpencil sebelumnya hanya mengandalkan perkiraan bunyi patah (dipatahkan dengan jari) untuk menentukan apakah cengkeh atau jahe sudah cukup kering.',
      'Melalui distribusi alat ukur digital ini ke koperasi di Ponorogo, Malang, dan Bondowoso, ketua kelompok tani dapat langsung membaca angka kadar air secara akurat sebelum barang dikirim ke gudang konsolidasi kami.'
    ],
    fieldNote: 'Seluruh unit alat ukur telah dikalibrasi ulang oleh teknisi kami di Surabaya.',
    batchCode: 'EVR-IMP-SUB-2610',
    relatedProductSlug: 'kemasan-barrier-vakum-impor',
    relatedProductName: 'Kemasan Barrier & Alat Ukur Impor',
    tags: ['Impor Alat Pertanian', 'Kemasan Hermetik', 'Koperasi Tani', 'Surabaya']
  },
  {
    id: 'pin-07-akar-jati-ngawi',
    title: 'Menyelamatkan Tunggul Akar Jati Berusia Setengah Abad di Ngawi',
    category: 'Kriya UMKM',
    tradeType: 'Ekspor',
    aspectClass: 'ratio-square',
    width: 800,
    height: 800,
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Meja kayu jati alami dengan serat akar yang artistik',
    location: 'Kedunggalar, Kabupaten Ngawi, Jawa Timur',
    date: '22 Oktober 2026',
    routeLabel: 'Ngawi -> Surabaya -> Los Angeles, AS',
    partnerUnit: 'Paguyuban Kriya Akar Jati Ngawi',
    summary: 'Pengamplasan tahap akhir meja konsol akar jati rekondisi berdokumen SVLK resmi.',
    storyParagraphs: [
      'Tidak ada dua bonggol akar jati yang memiliki bentuk serupa. Di bengkel terbuka Kecamatan Kedunggalar, Ngawi, Bapak Warsito menghabiskan waktu sebelas hari untuk membersihkan celah-celah akar jati tua yang digali dari lahan bekas tebangan resmi puluhan tahun silam.',
      'Alih-alih memotong habis tonjolan alaminya, perajin mengikuti alur urat kayu yang berliku dan hanya meratakan sisi bagian atas agar kaca atau benda pajangan dapat berdiri stabil.',
      'Setiap pengiriman dilengkapi sertifikat SVLK (Sistem Verifikasi Legalitas Kayu) yang membuktikan bahwa karya ini berasal dari pemanfaatan limbah tunggul hutan yang sah dan bertanggung jawab.'
    ],
    fieldNote: 'Finishing menggunakan olesan beeswax murni tanpa pewarna kayu buatan.',
    batchCode: 'EVR-TKR-NGW-2610',
    relatedProductSlug: 'meja-konsol-akar-jati-ngawi',
    relatedProductName: 'Meja Konsol Akar Jati Ngawi',
    tags: ['Akar Jati', 'UMKM Ngawi', 'SVLK Certified', 'Kriya Kayu']
  },
  {
    id: 'pin-08-jahe-merah-ponorogo',
    title: 'Irisan Segar Jahe Merah Tua Ngrayun Sebelum Masuk Ruang Pengering',
    category: 'Panen & Rempah',
    tradeType: 'Ekspor',
    aspectClass: 'ratio-landscape',
    width: 1000,
    height: 720,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Rimpang jahe segar yang baru dicuci bersih siap diiris',
    location: 'Ngrayun, Kabupaten Ponorogo, Jawa Timur',
    date: '02 November 2026',
    routeLabel: 'Ponorogo -> Surabaya -> Osaka, Jepang',
    partnerUnit: 'Koperasi Tani Rimpang Merah Wilis-Ponorogo',
    summary: 'Pencucian air pegunungan dan pengirisan 3 milimeter untuk pesanan bahan baku minuman herbal musim dingin.',
    storyParagraphs: [
      'Menjelang musim dingin di Jepang dan Eropa, permintaan simplisia jahe merah kering dari Ponorogo selalu meningkat tajam. Rimpang dalam foto ini dipanen pada usia sebelas bulan di tanah miring Kecamatan Ngrayun.',
      'Kunci dari tingginya kadar minyak atsiri pada batch ini terletak pada proses pencuciannya: kami tidak mengupas kulit ari merah di bagian luar rimpang karena lapisan tepat di bawah kulit ari itulah yang menyimpan kandungan gingerol paling pekat.',
      'Setelah diiris setebal tiga milimeter, kepingan jahe disusun di atas baki jaring baja tahan karat dan dikeringkan pada suhu terkontrol 50 derajat Celsius.'
    ],
    fieldNote: 'Uji laboratorium menunjukkan 0 ppm residu sulfur dioksida (100 persen tanpa pemutih).',
    batchCode: 'EVR-GGR-PNG-2611',
    relatedProductSlug: 'jahe-merah-kering-ponorogo',
    relatedProductName: 'Jahe Merah Kering Ponorogo',
    tags: ['Jahe Merah', 'Ponorogo', 'Simplisia Herbal', 'Ekspor Jepang']
  },
  {
    id: 'pin-09-lada-hitam-kalibaru',
    title: 'Kilau Hitam Alami Lada Kalibaru Hasil Celup Air Panas',
    category: 'Panen & Rempah',
    tradeType: 'Ekspor',
    aspectClass: 'ratio-portrait',
    width: 800,
    height: 960,
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Butiran lada hitam bulat padat di atas sendok takar kayu',
    location: 'Kalibaru, Kabupaten Banyuwangi, Jawa Timur',
    date: '09 November 2026',
    routeLabel: 'Kalibaru -> Surabaya -> Rotterdam & Dubai',
    partnerUnit: 'Kelompok Kebun Lada Kalibaru',
    summary: 'Pengujian berat jenis (bulk density) 565 gram per liter untuk pemenuhan standar ASTA Clean.',
    storyParagraphs: [
      'Banyak pembeli internasional bertanya mengapa butiran lada hitam dari kebun mitra kami di Kalibaru memiliki warna hitam pekat yang seragam tanpa bercak abu-abu.',
      'Jawabannya adalah teknik blanching sederhana yang dilakukan petani segera setelah buah lada dirontokkan dari tangkainya. Bulir lada hijau tua dimasukkan ke dalam keranjang bambu dan dicelupkan ke kawah air panas mendidih selama satu menit sebelum dijemur.',
      'Selain mengaktifkan enzim alami kulit buah agar berubah hitam legam dalam waktu singkat, celupan air panas ini juga membersihkan debu kebun dan menurunkan jumlah mikroba permukaan secara alami.'
    ],
    fieldNote: 'Densitas terukur di gudang Surabaya: 565 g/L dengan kadar air 11,6 persen.',
    batchCode: 'EVR-PPR-KLB-2611',
    relatedProductSlug: 'lada-hitam-banyuwangi',
    relatedProductName: 'Lada Hitam Kalibaru',
    tags: ['Lada Hitam', 'ASTA Grade', 'Kalibaru', 'Banyuwangi']
  }
];

export const companyLocations: CompanyLocation[] = [
  {
    id: 'hq-surabaya',
    name: 'Everoot Inc. HQ & Tanjung Perak Export-Import Hub',
    role: 'Kantor Pusat, Gudang Konsolidasi Pelabuhan & Divisi Impor',
    address: 'Jl. Tanjung Perak Timur No. 88, Krembangan, Surabaya, Jawa Timur 60165',
    city: 'Surabaya',
    lat: -7.2166,
    lng: 112.7314,
    phone: '+62 31 355 8490',
    operationalHours: 'Senin - Sabtu, 08.00 - 17.00 WIB',
    facilities: [
      'Gudang Konsolidasi Berventilasi Terkontrol (2.400 m²)',
      'Laboratorium Uji Kadar Air & Berat Jenis Rempah',
      'Stasiun Pemuatan Kontainer 20ft & 40ft HC (Loading Dock)',
      'Gudang Distribusi Kemasan Hermetik & Alat Ukur Impor'
    ]
  },
  {
    id: 'hub-malang',
    name: 'Everoot Malang Highland Spice Sorting House',
    role: 'Unit Sortasi Hulu, Pengeringan Surya & Kemitraan Tani Semeru',
    address: 'Jl. Raya Semeru Selatan KM 4, Dampit, Kabupaten Malang, Jawa Timur 65181',
    city: 'Kabupaten Malang',
    lat: -8.2125,
    lng: 112.7531,
    phone: '+62 341 896 412',
    operationalHours: 'Senin - Sabtu, 07.00 - 16.00 WIB',
    facilities: [
      'Rumah Pengering Surya Tertutup UV',
      'Meja Sortasi Manual (Hand-Pick Station) Cengkeh & Pala',
      'Pusat Pelatihan Pascapanen Kelompok Tani'
    ]
  },
  {
    id: 'studio-banyuwangi',
    name: 'Everoot East Corridor Artisan & Ijen Consolidation Studio',
    role: 'Sentra Kurasi UMKM Bambu & Pengumpulan Kayu Manis Ijen',
    address: 'Jl. Raya Desa Gintangan No. 14, Blimbingsari, Banyuwangi, Jawa Timur 68462',
    city: 'Banyuwangi',
    lat: -8.3094,
    lng: 114.2889,
    phone: '+62 333 418 709',
    operationalHours: 'Senin - Sabtu, 08.00 - 16.30 WIB',
    facilities: [
      'Ruang Oven Pengering Kerajinan Bambu & Serat Alam',
      'Showroom Sampel Kriya UMKM Jawa Timur',
      'Pos Pengumpulan Kayu Manis & Lada Koridor Timur'
    ]
  }
];
