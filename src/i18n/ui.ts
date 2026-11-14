import {
  companyProfile,
  careerTimeline,
  partnerships,
  products,
  galleryPosts,
  companyLocations
} from '../data/everootData';
import {
  companyProfileEn,
  careerTimelineEn,
  partnershipsEn,
  productsEn,
  galleryPostsEn,
  companyLocationsEn
} from '../data/everootData.en';

export type Lang = 'id' | 'en';

export function localizePath(path: string, lang: Lang): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'id') {
    return cleanPath;
  }
  if (cleanPath === '/') {
    return '/en';
  }
  if (cleanPath.startsWith('/#') || cleanPath.startsWith('/?')) {
    return `/en${cleanPath.slice(1)}`;
  }
  if (cleanPath === '/en' || cleanPath.startsWith('/en/') || cleanPath.startsWith('/en?') || cleanPath.startsWith('/en#')) {
    return cleanPath;
  }
  return `/en${cleanPath}`;
}

export function stripLocalePrefix(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  const normalized = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  if (normalized === '/en') return '/';
  if (normalized.startsWith('/en/')) {
    return normalized.slice(3) || '/';
  }
  return normalized;
}

export function switchLangPath(currentPath: string, targetLang: Lang): string {
  const basePath = stripLocalePrefix(currentPath);
  return localizePath(basePath, targetLang);
}

export function getSiteData(lang: Lang) {
  if (lang === 'en') {
    return {
      companyProfile: companyProfileEn,
      careerTimeline: careerTimelineEn,
      partnerships: partnershipsEn,
      products: productsEn,
      galleryPosts: galleryPostsEn,
      companyLocations: companyLocationsEn
    };
  }
  return {
    companyProfile,
    careerTimeline,
    partnerships,
    products,
    galleryPosts,
    companyLocations
  };
}

export const uiStrings = {
  id: {
    skipLink: 'Lewati ke konten utama',
    navAriaLabel: 'Navigasi Utama Everoot Inc.',
    brandAriaLabel: 'Everoot Inc. Beranda',
    navItems: [
      { path: '/', label: 'Beranda' },
      { path: '/about', label: 'Tentang & Mitra' },
      { path: '/products', label: 'Katalog' },
      { path: '/gallery', label: 'Galeri' },
      { path: '/contact', label: 'Kontak & Peta' }
    ],
    header: {
      themeAriaLabel: 'Ganti tema tampilan Terang atau Gelap',
      darkModeLabel: 'Mode Gelap',
      lightModeLabel: 'Mode Terang',
      rfqShort: 'Ajukan RFQ',
      rfqFull: 'Ajukan Spesifikasi Kontainer (RFQ)',
      menuBtn: 'Menu',
      langSwitchAria: 'Ganti bahasa website'
    },
    footer: {
      eyebrow: 'TANJUNG PERAK, SURABAYA (IDSUB) • JAWA TIMUR',
      hqTitle: 'Kantor Pusat & Hub Pelabuhan',
      hqAddress: 'Jl. Tanjung Perak Timur No. 88, Krembangan, Surabaya 60165',
      sortingTitle: 'Unit Sortasi Lereng Semeru',
      sortingAddress: 'Jl. Raya Semeru Selatan KM 4, Dampit, Kab. Malang 65181',
      navHeading: 'Navigasi',
      navLinks: [
        { path: '/', label: 'Beranda' },
        { path: '/about', label: 'Tentang & Mitra' },
        { path: '/products', label: 'Katalog Komoditas' },
        { path: '/gallery', label: 'Galeri Visual' },
        { path: '/contact', label: 'Kontak & Peta Jatim' }
      ],
      commoditiesHeading: 'Komoditas Utama',
      commoditiesLinks: [
        { slug: 'cengkeh-lal-pari-malang', label: 'Cengkeh Lal Pari Dampit' },
        { slug: 'kayu-manis-cassia-ijen', label: 'Kayu Manis Cassia Ijen' },
        { slug: 'lampu-gantung-bambu-gintangan', label: 'Kap Lampu Bambu Gintangan' },
        { slug: 'keranjang-enceng-gondok-lamongan', label: 'Keranjang Enceng Gondok' }
      ],
      copyrightSuffix: 'Jawa Timur, Indonesia.',
      portMeta: 'Pelabuhan Muat: IDSUB (Tanjung Perak, Surabaya)'
    },
    home: {
      pageTitle: 'Beranda Ekspor Rempah & Kriya UMKM Jawa Timur',
      craftCategoryMatch: 'Kerajinan UMKM',
      heroHeadline: 'Rempah Lereng Vulkanik & Kriya Jawa Timur untuk Pasar Dunia.',
      exploreCatalog: (n: number) => `Jelajahi Katalog (${n})`,
      chooseCommodity: 'Pilih Komoditas...',
      flagshipMoisture: 'Kadar Air Maks. 12%',
      manifestoEyebrow: 'MODEL PERDAGANGAN DUA ARAH • IDSUB',
      manifestoQuote:
        'Dari rumah jemur cengkeh di lereng Semeru hingga pengapalan kontainer di Tanjung Perak, setiap komoditas membawa identitas komunitas penghasilnya.',
      route1Eyebrow: '01 / EKSPOR HULU JAWA TIMUR',
      route1Title: 'Rempah Tunggal & Kriya Desa',
      route1Body:
        'Cengkeh Dampit Malang, Kayu Manis Ijen, Jahe Merah Ponorogo, Anyaman Bambu Banyuwangi, Serat Lamongan, dan Akar Jati Ngawi dengan ketertelusuran batch.',
      route2Eyebrow: '02 / IMPOR HILIR KOPERASI',
      route2Title: 'Teknologi Pascapanen Mitra',
      route2Body:
        'Pengadaan kantong liner hermetik 7-lapis dari Jerman dan alat ukur kadar air optik dari Jepang untuk disalurkan kepada koperasi petani di Jawa Timur.',
      showcaseEyebrow: 'KOMODITAS UNGGULAN',
      showcaseHeading: 'Kurasi Rempah & Kerajinan UMKM',
      viewAllCommodities: 'Lihat Semua Komoditas',
      spiceColEyebrow: 'LINI EKSPOR AGRIKULTUR',
      spiceColTitle: 'Rempah Nusantara',
      spiceColDesc: 'Sortasi kadar air terukur, bebas bahan pemutih, dan dikemas dengan liner hermetik pangan.',
      craftColEyebrow: 'LINI EKSPOR KRIYA DESA',
      craftColTitle: 'Kerajinan Tangan UMKM',
      craftColDesc: 'Anyaman bambu, serat enceng gondok, dan tunggul akar jati berdokumen legalitas SVLK resmi.',
      openSpecs: 'Buka Spesifikasi',
      journeyEyebrow: 'REKAM JEJAK PERUSAHAAN (2016 - SEKARANG)',
      journeyHeading: 'Dari Gudang 60m² di Dampit ke Tanjung Perak',
      fullHistoryBtn: 'Sejarah Lengkap & Mitra',
      journeyTabsAria: 'Pilih tahun perjalanan karir Everoot Inc.',
      keyAchievementLabel: 'CAPAIAN UTAMA',
      partnersEyebrow: 'JEJARING KEMITRAAN HULU KE HILIR',
      partnersHeading: 'Komunitas Tani, Sanggar UMKM & Mitra Global',
      allPartnersBtn: (n: number) => `Semua ${n} Mitra`,
      sincePrefix: 'Sejak',
      schemePrefix: 'Skema:',
      galleryEyebrow: 'ARSIP VISUAL LAPANGAN',
      galleryHeading: 'Cerita di Balik Setiap Pengapalan',
      openGalleryBtn: (n: number) => `Buka Galeri (${n} Foto)`,
      readStoryCue: 'Baca Cerita',
      hubEyebrow: 'TITIK OPERASIONAL JAWA TIMUR',
      hubHeading: 'Kunjungi Hub Surabaya, Gudang Malang, atau Studio Banyuwangi',
      hubBody:
        'Lihat peta interaktif dengan koordinat fasilitas Everoot Inc. atau kirimkan permintaan spesifikasi kontainer (RFQ).',
      openMapBtn: (n: number) => `Buka Peta (${n} Lokasi)`,
      requestRfqBtn: 'Ajukan Kontrak / RFQ'
    },
    about: {
      pageTitle: 'Tentang Perusahaan, Sejarah Karir & Mitra',
      pageDesc:
        'Perjalanan lengkap Everoot Inc. dari awal rintisan gudang sortasi di Dampit, Malang (2016) hingga jaringan ekspor-impor rempah dan kriya UMKM Jawa Timur saat ini.',
      heroEyebrow: 'PROFIL PERUSAHAAN • BERDIRI SEJAK 2016',
      heroTitle: 'Berakar di Desa Penghasil Jawa Timur, Terhubung ke Pelabuhan Dunia.',
      storyP1:
        'Everoot Inc. lahir dari pengamatan langsung di lapangan: petani rempah di lereng Gunung Semeru dan Kawah Ijen menghasilkan cengkeh, lada, serta kayu manis berkualitas tinggi, namun sering kehilangan nilai jual akibat kadar air yang tidak seragam dan panjangnya rantai perantara. Di sisi lain, perajin bambu Banyuwangi dan penganyam serat alam Lamongan memiliki keterampilan tangan turun-temurun yang belum terhubung langsung dengan standar pengemasan pembeli internasional.',
      storyP2:
        'Dimulai dari ruang sortasi sederhana seluas 60 meter persegi di Kecamatan Dampit, Kabupaten Malang pada tahun 2016, kami membangun kemitraan satu demi satu bersama kelompok tani dan sanggar UMKM. Pada tahun 2020, kami meresmikan kantor pusat serta fasilitas konsolidasi di dekat Pelabuhan Tanjung Perak, Surabaya, disusul pembukaan divisi impor pada tahun 2022 untuk menyuplai kantong penyimpanan hermetik serta instrumen pengukur kadar air bagi koperasi mitra di Jawa Timur.',
      heroImgAlt: 'Lanskap dataran tinggi dan perkebunan hijau di Jawa Timur',
      visionEyebrow: 'VISI & PRINSIP OPERASIONAL',
      timelineEyebrow: 'LINIMASA PERJALANAN KARIR PERUSAHAAN',
      timelineHeading: 'Evolusi Operasional Everoot Inc. (2016 - Sekarang)',
      timelineLead:
        'Setiap fase pertumbuhan didorong oleh kebutuhan nyata di lapangan, mulai dari perbaikan rumah jemur di tingkat desa hingga integrasi dokumen kepabeanan ekspor-impor di Surabaya.',
      milestoneTag: 'TONGGAK CAPAIAN',
      partnersEyebrow: 'DIREKTORI KERJA SAMA & KEMITRAAN',
      partnersHeading: 'Komunitas Pertanian, UMKM & Mitra Global',
      partnersLead:
        'Telusuri daftar kelompok tani, sanggar kerajinan UMKM desa, serta perusahaan logistik dan pembeli internasional yang bekerja bersama Everoot Inc.',
      categories: ['Semua Mitra', 'Komunitas Pertanian', 'UMKM & Pengrajin', 'Perusahaan & Logistik'],
      regencies: ['Semua Wilayah', 'Malang', 'Banyuwangi', 'Ponorogo', 'Lamongan', 'Ngawi & Mojokerto', 'Surabaya', 'Jerman & Jepang'],
      allCatValue: 'Semua Mitra',
      allRegionValue: 'Semua Wilayah',
      regionPrefix: 'Wilayah:',
      regionIntlValue: 'Jerman & Jepang',
      regionIntlTerms: ['jerman', 'jepang'],
      filterCatAria: 'Filter kategori mitra',
      searchLabel: 'Cari nama komunitas, UMKM, atau komoditas',
      searchPlaceholder: 'Contoh: Semeru, Bambu, Lamongan, Hamburg...',
      countTemplate: 'Menampilkan {n} mitra terverifikasi',
      emptyTitle: 'Tidak Ada Mitra yang Cocok dengan Filter',
      emptyDesc: (n: number) =>
        `Pencarian atau kombinasi wilayah yang dipilih belum memiliki catatan mitra. Atur ulang filter untuk menampilkan seluruh ${n} mitra kerja sama.`,
      resetBtn: 'Tampilkan Semua Mitra',
      sincePrefix: 'Sejak',
      schemeHeading: 'SKEMA KERJA SAMA',
      verifyPrefix: 'Verifikasi:',
      infraEyebrow: 'INFRASTRUKTUR OPERASIONAL JAWA TIMUR',
      infraHeading: 'Tiga Titik Fasilitas dari Kebun Hulu ke Pelabuhan',
      openInteractiveMap: 'Buka Peta Interaktif'
    },
    products: {
      pageTitle: 'Katalog Komoditas Ekspor & Impor',
      pageDesc:
        'Daftar komoditas ekspor rempah tunggal Jawa Timur, kerajinan tangan UMKM desa, serta kemasan dan instrumen pascapanen impor Everoot Inc.',
      eyebrow: 'KATALOG PERDAGANGAN • JAWA TIMUR -> GLOBAL PORTS',
      title: 'Katalog Komoditas Rempah, Kriya UMKM & Impor',
      lead:
        'Telusuri spesifikasi teknis, kode HS, kuantitas pesanan minimum (MOQ), dan cerita asal-usul setiap komoditas Jawa Timur.',
      catLabel: 'Kategori Produk',
      catOptions: ['Semua Kategori', 'Rempah Nusantara', 'Kerajinan UMKM', 'Komoditas Impor'],
      flowLabel: 'Alur Perdagangan',
      flowOptions: ['Semua Alur (Ekspor & Impor)', 'Ekspor', 'Impor'],
      searchLabel: 'Pencarian Cepat (Nama, Kode HS, Kabupaten)',
      searchPlaceholder: 'Ketik cengkeh, bambu, 0907, Banyuwangi...',
      countTemplate: 'Menampilkan {m} dari {t} komoditas terdaftar',
      emptyTitle: 'Komoditas Tidak Ditemukan',
      emptyDesc:
        'Tidak ada produk yang sesuai dengan kata kunci atau filter kategori tersebut. Silakan atur ulang filter pencarian.',
      resetBtn: 'Reset Filter Katalog',
      flagshipEyebrowPrefix: 'KOMODITAS UTAMA MUSIM PANEN • HS',
      gradeLabel: 'Standar Mutu',
      moqLabel: 'Kuantitas Minimum (MOQ)',
      openSpecBtn: 'Buka Detail & Tabel Spesifikasi',
      quoteBtn: 'Minta Penawaran FCL/LCL',
      cardGrade: 'Grade',
      cardMoq: 'MOQ',
      cardPartner: 'Mitra',
      cardBtn: 'Lihat Detail & Proses Hulu'
    },
    productDetail: {
      backToCatalog: 'Kembali ke Katalog',
      thumbAria: 'Pilih sudut foto komoditas',
      originPrefix: 'Asal Komoditas:',
      gradeLabel: 'Klasifikasi Mutu (Grade)',
      moqLabel: 'Kuantitas Minimum (MOQ)',
      packagingLabel: 'Standar Pengemasan',
      leadTimeLabel: 'Waktu Siap Muat & Pelabuhan',
      shipModeLabel: 'Pilih Skema Pengapalan / Pemesanan',
      shipModes: [
        {
          label: 'Kontainer 20ft FCL (Muatan Penuh)',
          note: 'Pengiriman kontainer eksklusif dari Tanjung Perak Surabaya lengkap dengan kertas kraft pelindung dinding, desikan bebas DMF, dan sertifikat fitokarantina.'
        },
        {
          label: 'Konsolidasi LCL (Palet Terpisah)',
          note: 'Cocok untuk pesanan percobaan sesuai MOQ awal. Dikemas di atas palet kayu berstandar ISPM 15 dengan plastik pelindung kelembapan.'
        },
        {
          label: 'Pengiriman Sampel Kurir Udara (DHL/FedEx)',
          note: 'Tersedia paket sampel evaluasi mutu 1-2 kg (rempah) atau 1 unit prototipe (kriya UMKM) yang dikirim langsung dari kantor Surabaya dalam 3 hari kerja.'
        }
      ],
      requestContractPrefix: 'Ajukan Kontrak',
      viewGalleryDocs: 'Lihat Dokumentasi Galeri',
      storyEyebrow: 'CERITA HULU & KETERTELUSURAN',
      storyHeading: 'Asal-Usul & Karakter Komoditas',
      partnerEyebrow: 'MITRA KOMUNITAS / UMKM PENGHASIL',
      partnerLink: 'Lihat Profil Kemitraan',
      specsEyebrow: 'PARAMETER TEKNIS EKSPOR-IMPOR',
      specsHeading: 'Tabel Spesifikasi & Standar Mutu',
      specColParam: 'Parameter Pemeriksaan',
      specColValue: 'Nilai Standar Everoot',
      processEyebrow: 'PROSES PENANGANAN PASCAPANEN & PRODUKSI',
      processHeadingSuffix: 'Tahap',
      processHeadingPrefix: 'Tahapan Sortasi & Kendali Mutu',
      stepLabel: 'TAHAP',
      relatedHeading: 'Komoditas Lainnya dari Jawa Timur',
      viewFullCatalog: 'Lihat Seluruh Katalog',
      openDetailPrefix: 'Buka Detail'
    },
    gallery: {
      pageTitle: 'Galeri Lapangan & Cerita Komoditas',
      pageDesc:
        'Dokumentasi visual panen rempah, proses menganyam kriya UMKM, pemuatan kontainer ekspor di Tanjung Perak, dan cerita di balik setiap pengapalan Everoot Inc.',
      eyebrow: 'ARSIP VISUAL • JAWA TIMUR',
      title: 'Galeri Lapangan Everoot',
      subtitle:
        'Dokumentasi visual perjalanan komoditas Jawa Timur, dari rumah jemur lereng vulkanik hingga pelabuhan muat Tanjung Perak.',
      savedTitle: 'Filter foto yang Anda simpan',
      savedSuffix: 'Tersimpan',
      savedLabelSingle: 'Tersimpan',
      saveLabelSingle: 'Simpan',
      catAria: 'Filter kategori foto galeri',
      categories: ['Semua Foto', 'Panen & Rempah', 'Kriya UMKM', 'Pengapalan Ekspor', 'Distribusi Impor'],
      allCatValue: 'Semua Foto',
      searchLabel: 'Cari lokasi, komoditas, atau pelabuhan',
      searchPlaceholder: 'Cari lokasi, komoditas, pelabuhan...',
      flowOptions: ['Semua Alur', 'Ekspor', 'Impor', 'Tersimpan'],
      allFlowValue: 'Semua Alur',
      savedFlowValue: 'Tersimpan',
      emptyTitle: 'Belum Ada Foto yang Cocok',
      emptyDesc: 'Belum ada cerita foto untuk kata kunci atau filter yang dipilih.',
      resetBtn: 'Tampilkan Semua Foto',
      openStoryAriaPrefix: 'Buka cerita foto:',
      savePinAriaPrefix: 'Simpan foto',
      prevBtn: 'Sebelumnya',
      prevAria: 'Cerita foto sebelumnya',
      nextBtn: 'Berikutnya',
      nextAria: 'Cerita foto berikutnya',
      saveBtnAria: 'Simpan foto',
      copyLinkBtn: 'Salin Tautan',
      copyLinkCopied: 'Tersalin!',
      copyLinkAria: 'Salin tautan cerita foto',
      copyLinkCopiedAria: 'Tautan berhasil disalin',
      closeBtn: 'Tutup',
      closeAria: 'Tutup cerita foto',
      batchPrefix: 'Batch:',
      tradePrefix: 'Alur:',
      partnerLocLabel: 'Unit Kemitraan & Lokasi',
      storyHeading: 'Cerita di Balik Foto',
      fieldNoteEyebrow: 'CATATAN TIM LAPANGAN EVEROOT',
      relatedEyebrow: 'KOMODITAS TERKAIT',
      openProductSpec: 'Buka Spesifikasi Produk'
    },
    contact: {
      pageTitle: 'Kontak, Pengajuan RFQ & Peta Lokasi',
      pageDesc:
        'Hubungi tim ekspor-impor Everoot Inc. di Surabaya, Malang, dan Banyuwangi. Dilengkapi peta interaktif titik fasilitas perusahaan di Jawa Timur.',
      mapEyebrow: 'PETA LOKASI & FASILITAS • JAWA TIMUR',
      mapTitle: 'Alamat Perusahaan & Titik Operasional',
      mapLead:
        'Pilih kartu fasilitas atau klik langsung penanda titik pada peta untuk melihat koordinat dan fungsi operasional Everoot Inc. di Surabaya, Kabupaten Malang, dan Banyuwangi.',
      selectLocAria: 'Pilih lokasi fasilitas pada peta',
      focusMapCue: 'Fokuskan Titik di Peta',
      mapRegionAria: 'Peta interaktif lokasi Everoot Inc. di Surabaya, Malang, dan Banyuwangi',
      coordsPrefix: 'Koordinat:',
      openGmaps: 'Buka di Google Maps',
      rfqEyebrow: 'FORMULIR PERMINTAAN SPESIFIKASI (RFQ) & KEMITRAAN',
      rfqHeading: 'Kirim Permintaan Penawaran Ekspor atau Impor',
      rfqLead:
        'Lengkapi rincian kebutuhan kontainer, sampel komoditas, atau pengajuan kemitraan komunitas di bawah ini. Tim operasional Surabaya merespons dalam 1 hari kerja.',
      nameLabel: 'Nama Lengkap / Perwakilan *',
      namePlaceholder: 'Ketik nama lengkap Anda',
      companyLabel: 'Nama Perusahaan / Koperasi / UMKM *',
      companyPlaceholder: 'Contoh: Nordic Botanicals / Gapoktan...',
      emailLabel: 'Alamat Email Bisnis *',
      emailPlaceholder: 'nama@perusahaan.com',
      countryLabel: 'Negara / Kota & Pelabuhan Tujuan *',
      countryPlaceholder: 'Contoh: Rotterdam, Belanda / Surabaya',
      inquiryLabel: 'Jenis Keperluan Kerja Sama',
      inquiryCategories: [
        'Permintaan Kontrak Ekspor Rempah (FCL / LCL)',
        'Permintaan Ekspor Kerajinan UMKM Jawa Timur',
        'Pemesanan Kemasan Hermetik / Alat Ukur Impor',
        'Pendaftaran Mitra Komunitas Tani / Sanggar UMKM'
      ],
      commodityLabel: 'Komoditas yang Diminati',
      mixedOption: 'Konsolidasi Campuran / Lainnya',
      volumeLabel: 'Estimasi Volume / Skema Kontainer',
      volumePlaceholder: 'Contoh: 1x 20ft FCL / 2 Ton LCL / Sampel',
      messageLabel: 'Rincian Spesifikasi Kadar Air, Kemasan, atau Pesan Kerja Sama *',
      messagePlaceholder: 'Tuliskan spesifikasi mutu, jadwal pengiriman, atau profil singkat komunitas Anda...',
      submitBtn: 'Kirim Permintaan Resmi',
      submittingBtn: 'Mengirim Permintaan...',
      directEmailBtn: 'Email Langsung',
      validationError:
        'Perhatian: Mohon lengkapi seluruh kolom bertanda bintang (*) beserta alamat email bisnis yang valid sebelum mengirim.',
      loadingStatus: 'Sedang mencatat nomor tiket RFQ dan rincian komoditas Anda...',
      successPrefix: 'Terkirim: Terima kasih,',
      successMiddle: 'Permintaan spesifikasi untuk tujuan',
      successSuffix: 'telah tercatat dengan referensi #EVR-RFQ-2611. Tim ekspor-impor Surabaya kami akan menghubungi',
      sidebarChannelsEyebrow: 'KONTAK LANGSUNG DIVISI',
      sidebarChannelsTitle: 'Saluran Komunikasi Cepat',
      channels: [
        {
          title: 'Meja Ekspor Rempah & Agrikultur',
          email: 'spices@everoot-jatim.co.id',
          phone: 'Telp Surabaya: +62 31 355 8490 (Ext. 102)'
        },
        {
          title: 'Meja Kurasi Ekspor UMKM Kriya',
          email: 'craft@everoot-jatim.co.id',
          phone: 'Studio Banyuwangi: +62 333 418 709'
        },
        {
          title: 'Divisi Impor & Kemitraan Koperasi',
          email: 'koperasi@everoot-jatim.co.id',
          phone: 'Pos Sortasi Malang: +62 341 896 412'
        }
      ],
      sidebarDocsEyebrow: 'KELENGKAPAN DOKUMEN PENGAPALAN',
      sidebarDocsTitle: 'Dokumen Standar Ekspor-Impor',
      docsList: [
        'Bill of Lading (B/L) & Commercial Invoice / Packing List',
        'Certificate of Origin (SKA Form D / Form E / ICO)',
        'Phytosanitary Certificate (Karantina Pertanian Tanjung Perak)',
        'Fumigation Certificate (ISPM 15 / Heat Treatment)',
        'Dokumen V-Legal / SVLK untuk Kerajinan Kayu & Bambu',
        'Certificate of Analysis (CoA) Kadar Air & Minyak Atsiri'
      ]
    }
  },
  en: {
    skipLink: 'Skip to main content',
    navAriaLabel: 'Everoot Inc. Primary Navigation',
    brandAriaLabel: 'Everoot Inc. Home',
    navItems: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About & Partners' },
      { path: '/products', label: 'Catalog' },
      { path: '/gallery', label: 'Gallery' },
      { path: '/contact', label: 'Contact & Map' }
    ],
    header: {
      themeAriaLabel: 'Switch Light or Dark display theme',
      darkModeLabel: 'Dark Mode',
      lightModeLabel: 'Light Mode',
      rfqShort: 'Request RFQ',
      rfqFull: 'Request Container Specs (RFQ)',
      menuBtn: 'Menu',
      langSwitchAria: 'Switch website language'
    },
    footer: {
      eyebrow: 'TANJUNG PERAK, SURABAYA (IDSUB) • EAST JAVA',
      hqTitle: 'Headquarters & Port Hub',
      hqAddress: 'Jl. Tanjung Perak Timur No. 88, Krembangan, Surabaya 60165',
      sortingTitle: 'Semeru Slope Sorting House',
      sortingAddress: 'Jl. Raya Semeru Selatan KM 4, Dampit, Malang Regency 65181',
      navHeading: 'Navigation',
      navLinks: [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About & Partners' },
        { path: '/products', label: 'Commodity Catalog' },
        { path: '/gallery', label: 'Visual Gallery' },
        { path: '/contact', label: 'Contact & Map' }
      ],
      commoditiesHeading: 'Flagship Commodities',
      commoditiesLinks: [
        { slug: 'cengkeh-lal-pari-malang', label: 'Malang Lal Pari Cloves' },
        { slug: 'kayu-manis-cassia-ijen', label: 'Ijen Cassia Cinnamon' },
        { slug: 'lampu-gantung-bambu-gintangan', label: 'Gintangan Bamboo Pendant' },
        { slug: 'keranjang-enceng-gondok-lamongan', label: 'Lamongan Hyacinth Baskets' }
      ],
      copyrightSuffix: 'East Java, Indonesia.',
      portMeta: 'Port of Loading: IDSUB (Tanjung Perak, Surabaya)'
    },
    home: {
      pageTitle: 'East Java Spices & MSME Craft Export Home',
      craftCategoryMatch: 'MSME Handicrafts',
      heroHeadline: 'Volcanic Highland Spices & East Java Craft for Global Markets.',
      exploreCatalog: (n: number) => `Explore Catalog (${n})`,
      chooseCommodity: 'Select Commodity...',
      flagshipMoisture: 'Max. 12% Moisture',
      manifestoEyebrow: 'TWO-WAY TRADE MODEL • IDSUB',
      manifestoQuote:
        'From clove solar drying domes on Mount Semeru slopes to container loading at Tanjung Perak, every shipment preserves the identity of its producing community.',
      route1Eyebrow: '01 / EAST JAVA UPSTREAM EXPORTS',
      route1Title: 'Single-Origin Spices & Village Craft',
      route1Body:
        'Malang Dampit cloves, Ijen cinnamon, Ponorogo red ginger, Banyuwangi woven bamboo, Lamongan river fiber, and Ngawi teak root with full batch traceability.',
      route2Eyebrow: '02 / COOPERATIVE DOWNSTREAM IMPORTS',
      route2Title: 'Partner Post-Harvest Technology',
      route2Body:
        'Sourcing 7-layer hermetic barrier bags from Germany and optical moisture analyzers from Japan for distribution across East Java farming cooperatives.',
      showcaseEyebrow: 'FLAGSHIP COMMODITIES',
      showcaseHeading: 'Curated Spices & MSME Handicrafts',
      viewAllCommodities: 'View All Commodities',
      spiceColEyebrow: 'AGRICULTURAL EXPORT LINE',
      spiceColTitle: 'Indonesian Spices',
      spiceColDesc: 'Verified moisture grading, zero chemical bleaching, and food-grade hermetic liner packing.',
      craftColEyebrow: 'VILLAGE CRAFT EXPORT LINE',
      craftColTitle: 'MSME Handcrafted Goods',
      craftColDesc: 'Woven bamboo lighting, braided water hyacinth baskets, and SVLK-certified reclaimed teak root pieces.',
      openSpecs: 'View Specifications',
      journeyEyebrow: 'COMPANY TRACK RECORD (2016 - PRESENT)',
      journeyHeading: 'From a 60m² Dampit Shed to Tanjung Perak Port',
      fullHistoryBtn: 'Full History & Partners',
      journeyTabsAria: 'Select a milestone year in Everoot Inc. history',
      keyAchievementLabel: 'KEY MILESTONE',
      partnersEyebrow: 'END-TO-END PARTNERSHIP NETWORK',
      partnersHeading: 'Farming Collectives, MSME Studios & Global Buyers',
      allPartnersBtn: (n: number) => `All ${n} Partners`,
      sincePrefix: 'Since',
      schemePrefix: 'Model:',
      galleryEyebrow: 'FIELD VISUAL ARCHIVE',
      galleryHeading: 'Stories Behind Every Container',
      openGalleryBtn: (n: number) => `Open Gallery (${n} Photos)`,
      readStoryCue: 'Read Story',
      hubEyebrow: 'EAST JAVA OPERATIONAL HUBS',
      hubHeading: 'Visit Our Surabaya Hub, Malang Sorting House, or Banyuwangi Studio',
      hubBody:
        'Explore our interactive map with Everoot Inc. facility coordinates or submit container specifications directly via RFQ.',
      openMapBtn: (n: number) => `Open Map (${n} Locations)`,
      requestRfqBtn: 'Submit Contract / RFQ'
    },
    about: {
      pageTitle: 'About Company, Career Timeline & Partners',
      pageDesc:
        'The complete journey of Everoot Inc. from an upstream clove sorting house in Dampit, Malang (2016) to an East Java spice and MSME craft export-import hub.',
      heroEyebrow: 'COMPANY PROFILE • ESTABLISHED 2016',
      heroTitle: 'Rooted in East Java Producing Villages, Connected to Global Ports.',
      storyP1:
        'Everoot Inc. began with firsthand fieldwork: spice growers on the slopes of Mount Semeru and Kawah Ijen cultivated aromatic cloves, pepper, and cinnamon, yet frequently lost value due to uneven moisture levels and fragmented middlemen. Meanwhile, Banyuwangi bamboo weavers and Lamongan natural-fiber artisans held generational skillsets without direct bridges to international buyer packing requirements.',
      storyP2:
        'Starting from a modest 60-square-meter sorting shed in Dampit District, Malang Regency in 2016, we forged partnerships step by step with farming collectives and village craft studios. In 2020 we incorporated our headquarters and port consolidation facility beside Tanjung Perak in Surabaya, followed by launching an import division in 2022 to supply hermetic storage bags and optical moisture meters to partner cooperatives across East Java.',
      heroImgAlt: 'Highland terrain and green agroforestry plantations in East Java',
      visionEyebrow: 'VISION & OPERATIONAL PRINCIPLES',
      timelineEyebrow: 'CORPORATE GROWTH TIMELINE',
      timelineHeading: 'Operational Evolution of Everoot Inc. (2016 - Present)',
      timelineLead:
        'Every growth phase responded directly to upstream realities, from building enclosed solar dryers in highland hamlets to integrating customs clearance and two-way trade in Surabaya.',
      milestoneTag: 'CORE ACHIEVEMENT',
      partnersEyebrow: 'PARTNERSHIP & COLLABORATION DIRECTORY',
      partnersHeading: 'Farming Communities, MSMEs & Global Partners',
      partnersLead:
        'Browse farming collectives, village craft studios, and logistics or international buyer partners collaborating with Everoot Inc.',
      categories: ['All Partners', 'Farming Communities', 'MSMEs & Artisans', 'Enterprise & Logistics'],
      regencies: ['All Regions', 'Malang', 'Banyuwangi', 'Ponorogo', 'Lamongan', 'Ngawi & Mojokerto', 'Surabaya', 'Germany & Japan'],
      allCatValue: 'All Partners',
      allRegionValue: 'All Regions',
      regionPrefix: 'Region:',
      regionIntlValue: 'Germany & Japan',
      regionIntlTerms: ['germany', 'japan'],
      filterCatAria: 'Filter partner categories',
      searchLabel: 'Search community, MSME studio, or commodity',
      searchPlaceholder: 'Example: Semeru, Bamboo, Lamongan, Hamburg...',
      countTemplate: 'Showing {n} verified partners',
      emptyTitle: 'No Partners Match These Filters',
      emptyDesc: (n: number) =>
        `The current search or region combination returned no partner records. Reset filters to display all ${n} collaborating partners.`,
      resetBtn: 'Show All Partners',
      sincePrefix: 'Since',
      schemeHeading: 'COLLABORATION MODEL',
      verifyPrefix: 'Verification:',
      infraEyebrow: 'EAST JAVA OPERATIONAL INFRASTRUCTURE',
      infraHeading: 'Three Facility Hubs from Highland Farms to Ocean Port',
      openInteractiveMap: 'Open Interactive Map'
    },
    products: {
      pageTitle: 'Export & Import Commodity Catalog',
      pageDesc:
        'Browse single-origin East Java export spices, village MSME handcrafted homeware, and imported post-harvest packaging and inspection tools from Everoot Inc.',
      eyebrow: 'TRADE CATALOG • EAST JAVA -> GLOBAL PORTS',
      title: 'Spices, MSME Handicrafts & Import Equipment Catalog',
      lead:
        'Review technical specifications, HS codes, minimum order quantities (MOQ), and village origin stories across every East Java commodity.',
      catLabel: 'Product Category',
      catOptions: ['All Categories', 'Indonesian Spices', 'MSME Handicrafts', 'Imported Commodities'],
      flowLabel: 'Trade Flow',
      flowOptions: ['All Flows (Export & Import)', 'Export', 'Import'],
      searchLabel: 'Quick Search (Product, HS Code, Regency)',
      searchPlaceholder: 'Type cloves, bamboo, 0907, Banyuwangi...',
      countTemplate: 'Showing {m} of {t} listed commodities',
      emptyTitle: 'No Matching Commodities Found',
      emptyDesc:
        'No commodities match your keyword or selected filters. Reset filters below to view the complete catalog.',
      resetBtn: 'Reset Catalog Filters',
      flagshipEyebrowPrefix: 'SEASONAL FLAGSHIP COMMODITY • HS',
      gradeLabel: 'Quality Grade',
      moqLabel: 'Minimum Order (MOQ)',
      openSpecBtn: 'View Details & Specification Table',
      quoteBtn: 'Request FCL/LCL Quote',
      cardGrade: 'Grade',
      cardMoq: 'MOQ',
      cardPartner: 'Partner',
      cardBtn: 'View Details & Upstream Process'
    },
    productDetail: {
      backToCatalog: 'Back to Catalog',
      thumbAria: 'Select commodity photo angle',
      originPrefix: 'Origin / Source:',
      gradeLabel: 'Quality Classification (Grade)',
      moqLabel: 'Minimum Order Quantity (MOQ)',
      packagingLabel: 'Export / Packaging Standard',
      leadTimeLabel: 'Lead Time & Port',
      shipModeLabel: 'Select Shipment / Order Scheme',
      shipModes: [
        {
          label: '20ft FCL Container (Full Container Load)',
          note: 'Dedicated ocean container loading at Tanjung Perak Surabaya lined with kraft moisture paper, DMF-free container desiccants, and full phytosanitary clearance.'
        },
        {
          label: 'LCL Consolidation (Palletized Shipment)',
          note: 'Ideal for initial commercial runs meeting trial MOQ. Packed on ISPM 15 heat-treated pallets wrapped in moisture-barrier film.'
        },
        {
          label: 'Air Courier Sample Dispatch (DHL/FedEx)',
          note: '1-2 kg quality evaluation spice samples or 1 prototype craft piece shipped directly from our Surabaya office within 3 business days.'
        }
      ],
      requestContractPrefix: 'Request Contract:',
      viewGalleryDocs: 'View Field Gallery',
      storyEyebrow: 'UPSTREAM STORY & TRACEABILITY',
      storyHeading: 'Origin Profile & Commodity Characteristics',
      partnerEyebrow: 'PRODUCING COMMUNITY / MSME PARTNER',
      partnerLink: 'View Partner Profile',
      specsEyebrow: 'EXPORT-IMPORT TECHNICAL PARAMETERS',
      specsHeading: 'Specification & Quality Standards Table',
      specColParam: 'Inspection Parameter',
      specColValue: 'Everoot Standard Specification',
      processEyebrow: 'POST-HARVEST HANDLING & PRODUCTION',
      processHeadingSuffix: 'Stages',
      processHeadingPrefix: 'Sorting & Quality Control Workflow',
      stepLabel: 'STAGE',
      relatedHeading: 'Other Commodities from East Java',
      viewFullCatalog: 'View Full Catalog',
      openDetailPrefix: 'View'
    },
    gallery: {
      pageTitle: 'Field Gallery & Commodity Stories',
      pageDesc:
        'Visual field archive of spice harvests, MSME artisan weaving, Tanjung Perak container stuffing, and the stories behind every Everoot Inc. shipment.',
      eyebrow: 'VISUAL ARCHIVE • EAST JAVA',
      title: 'Everoot Field Gallery',
      subtitle:
        'Visual documentation tracing East Java commodities from volcanic hillside drying domes to container vessels at Tanjung Perak.',
      savedTitle: 'Filter your bookmarked photos',
      savedSuffix: 'Saved',
      savedLabelSingle: 'Saved',
      saveLabelSingle: 'Save',
      catAria: 'Filter gallery photo categories',
      categories: ['All Photos', 'Harvest & Spices', 'MSME Crafts', 'Export Shipments', 'Import Distribution'],
      allCatValue: 'All Photos',
      searchLabel: 'Search locations, commodities, or ports',
      searchPlaceholder: 'Search location, commodity, port...',
      flowOptions: ['All Flows', 'Export', 'Import', 'Saved'],
      allFlowValue: 'All Flows',
      savedFlowValue: 'Saved',
      emptyTitle: 'No Matching Photos Yet',
      emptyDesc: 'No field stories matched your active keyword or filter combination.',
      resetBtn: 'Show All Photos',
      openStoryAriaPrefix: 'Open photo story:',
      savePinAriaPrefix: 'Bookmark photo',
      prevBtn: 'Previous',
      prevAria: 'Previous photo story',
      nextBtn: 'Next',
      nextAria: 'Next photo story',
      saveBtnAria: 'Bookmark photo',
      copyLinkBtn: 'Copy Link',
      copyLinkCopied: 'Copied!',
      copyLinkAria: 'Copy photo story link',
      copyLinkCopiedAria: 'Story link copied to clipboard',
      closeBtn: 'Close',
      closeAria: 'Close photo story',
      batchPrefix: 'Batch:',
      tradePrefix: 'Flow:',
      partnerLocLabel: 'Partner Unit & Location',
      storyHeading: 'Story Behind the Photo',
      fieldNoteEyebrow: 'EVEROOT FIELD TEAM NOTE',
      relatedEyebrow: 'RELATED COMMODITY',
      openProductSpec: 'Open Product Specs'
    },
    contact: {
      pageTitle: 'Contact, RFQ Form & Facility Map',
      pageDesc:
        'Connect with the Everoot Inc. export-import desk in Surabaya, Malang, and Banyuwangi. Interactive map of operational hubs across East Java.',
      mapEyebrow: 'FACILITY MAP & HUBS • EAST JAVA',
      mapTitle: 'Company Addresses & Operational Hubs',
      mapLead:
        'Select any facility card or click map markers directly to view coordinates and operational scope across Surabaya, Malang Regency, and Banyuwangi.',
      selectLocAria: 'Select a facility location on the map',
      focusMapCue: 'Focus Pin on Map',
      mapRegionAria: 'Interactive map showing Everoot Inc. hubs in Surabaya, Malang, and Banyuwangi',
      coordsPrefix: 'Coordinates:',
      openGmaps: 'Open in Google Maps',
      rfqEyebrow: 'REQUEST FOR QUOTATION (RFQ) & PARTNERSHIP FORM',
      rfqHeading: 'Submit an Export or Import Inquiry',
      rfqLead:
        'Share your container volume, commodity sample request, or community partnership profile below. Our Surabaya trade desk responds within 1 business day.',
      nameLabel: 'Full Name / Representative *',
      namePlaceholder: 'Enter your full name',
      companyLabel: 'Company / Cooperative / MSME Studio *',
      companyPlaceholder: 'Example: Nordic Botanicals / Growers Co-op...',
      emailLabel: 'Business Email Address *',
      emailPlaceholder: 'name@company.com',
      countryLabel: 'Destination Country / Port of Discharge *',
      countryPlaceholder: 'Example: Rotterdam, Netherlands / Surabaya',
      inquiryLabel: 'Inquiry Category',
      inquiryCategories: [
        'Spice Export Contract Inquiry (FCL / LCL)',
        'East Java MSME Handicraft Export Inquiry',
        'Hermetic Liners / Optical Meter Import Order',
        'Farming Collective / MSME Studio Partnership'
      ],
      commodityLabel: 'Commodity of Interest',
      mixedOption: 'Mixed Consolidation / Other',
      volumeLabel: 'Estimated Volume / Container Scheme',
      volumePlaceholder: 'Example: 1x 20ft FCL / 2 Tons LCL / Sample',
      messageLabel: 'Moisture Specs, Packaging Requirements, or Partnership Details *',
      messagePlaceholder: 'Outline target specifications, preferred shipment window, or your organization profile...',
      submitBtn: 'Submit Official Inquiry',
      submittingBtn: 'Submitting Inquiry...',
      directEmailBtn: 'Direct Email',
      validationError:
        'Please complete all required fields marked with (*) and enter a valid business email address before submitting.',
      loadingStatus: 'Logging your RFQ reference ticket and commodity specifications...',
      successPrefix: 'Submitted: Thank you,',
      successMiddle: 'Your specification inquiry for destination',
      successSuffix: 'has been logged under reference #EVR-RFQ-2611. Our Surabaya trade desk will follow up at',
      sidebarChannelsEyebrow: 'DIRECT TRADE DESKS',
      sidebarChannelsTitle: 'Direct Communication Channels',
      channels: [
        {
          title: 'Spices & Agricultural Export Desk',
          email: 'spices@everoot-jatim.co.id',
          phone: 'Surabaya Office: +62 31 355 8490 (Ext. 102)'
        },
        {
          title: 'MSME Handicraft Curation Desk',
          email: 'craft@everoot-jatim.co.id',
          phone: 'Banyuwangi Studio: +62 333 418 709'
        },
        {
          title: 'Import Desk & Cooperative Supply',
          email: 'koperasi@everoot-jatim.co.id',
          phone: 'Malang Sorting House: +62 341 896 412'
        }
      ],
      sidebarDocsEyebrow: 'SHIPPING COMPLIANCE PACKAGE',
      sidebarDocsTitle: 'Standard Export-Import Documents',
      docsList: [
        'Bill of Lading (B/L) & Commercial Invoice / Packing List',
        'Certificate of Origin (SKA Form D / Form E / ICO)',
        'Phytosanitary Certificate (Tanjung Perak Quarantine)',
        'Fumigation Certificate (ISPM 15 / Heat Treatment)',
        'Indonesian V-Legal / SVLK Dossier for Wood & Bamboo Craft',
        'Certificate of Analysis (CoA) Moisture & Essential Oil'
      ]
    }
  }
} as const;
