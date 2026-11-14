import type {
  CareerMilestone,
  CompanyLocation
} from './everootData';

export interface EnglishPartnerOrganization {
  id: string;
  name: string;
  category: 'Farming Communities' | 'MSMEs & Artisans' | 'Enterprise & Logistics';
  regencyOrCity: string;
  sinceYear: string;
  memberCountLabel: string;
  commodities: string[];
  collaborationModel: string;
  story: string;
  verificationNote: string;
}

export interface EnglishProductItem {
  slug: string;
  name: string;
  shortName: string;
  category: 'Indonesian Spices' | 'MSME Handicrafts' | 'Imported Commodities';
  tradeFlow: 'Export' | 'Import';
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
  specifications: {
    label: string;
    value: string;
  }[];
}

export interface EnglishGalleryPost {
  id: string;
  title: string;
  category: 'Harvest & Spices' | 'MSME Crafts' | 'Export Shipments' | 'Import Distribution';
  tradeType: 'Export' | 'Import' | 'Upstream Partnership';
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

export const companyProfileEn = {
  name: 'Everoot Inc.',
  legalName: 'PT Everoot Niaga Nusantara (Everoot Inc.)',
  tagline: 'Connecting East Java Volcanic Highland Spices & Handcrafted Goods to Global Ports',
  headquartersCity: 'Surabaya, East Java, Indonesia',
  foundedYear: '2016 (Dampit Origin) / 2020 (Surabaya Incorporation)',
  shortIntro:
    'Beginning as a small clove sorting shed at the foot of Mount Semeru in Malang Regency, Everoot Inc. now manages export supply chains for single-origin spices and East Java MSME handicrafts while distributing imported post-harvest equipment to local farming cooperatives.',
  vision:
    'To build transparent international trade corridors that preserve commodity traceability from East Java villages to global buyer warehouses, while returning fair added value directly to farming and artisan communities.',
  missions: [
    'Establish moisture grading, microbiological cleanliness, and export packaging standards directly at village cooperative hubs across East Java.',
    'Open international retail and hospitality market access for MSME artisans crafting woven bamboo, water hyacinth fiber, terracotta, and reclaimed teak root pieces.',
    'Supply precision post-harvest measuring instruments and food-grade hermetic liners through two-way import programs to protect local harvest quality.'
  ]
};

export const careerTimelineEn: CareerMilestone[] = [
  {
    year: '2016',
    phase: 'Phase 01: Upstream Foundation',
    title: 'First Sorting Shed in Dampit, Malang Regency',
    location: 'Dampit, Malang, East Java',
    summary:
      'Everoot started in a 60-square-meter drying and sorting facility in Dampit, working directly alongside 18 clove and black pepper farming families on the southern slopes of Mount Semeru.',
    keyAchievement:
      'Reduced post-harvest clove damage through manual stem separation and multi-tier drying racks.',
    operationalDetail:
      'Early efforts focused on bypassing multi-layered middlemen by purchasing harvests directly using measurable moisture thresholds (maximum 12 percent), ensuring fairer farm-gate pricing.',
    highlightTag: 'Semeru Farming Community'
  },
  {
    year: '2018',
    phase: 'Phase 02: MSME Craft Collaboration',
    title: 'Expanding into Village Handicraft Centers in Banyuwangi, Lamongan, and Ngawi',
    location: 'Banyuwangi & Lamongan, East Java',
    summary:
      'While visiting buyers across East Asia, the team identified strong demand for natural-fiber interior pieces carrying clear provenance stories from village workshops.',
    keyAchievement:
      'Partnered with Desa Gintangan bamboo weavers (Banyuwangi) and Babat water hyacinth artisans (Lamongan) to curate Everoot’s first export craft catalog.',
    operationalDetail:
      'Everoot standardized modular sizing guides and eco-friendly anti-mold kiln drying so MSME handicrafts withstand 28- to 35-day ocean container voyages.',
    highlightTag: 'MSME Craft Curation'
  },
  {
    year: '2020',
    phase: 'Phase 03: Port Consolidation',
    title: 'Incorporation of Everoot Inc. & Tanjung Perak Hub Launch in Surabaya',
    location: 'Krembangan, Surabaya, East Java',
    summary:
      'To handle full container loads (FCL) and inter-regency consolidation, the company formally incorporated as Everoot Inc. with headquarters and warehousing beside Tanjung Perak Port.',
    keyAchievement:
      'Integrated customs documentation (PEB/PIB), agricultural quarantine phytosanitary certification, and container fumigation under one operational desk.',
    operationalDetail:
      'The Surabaya hub cut pre-loading dwell time for cargo arriving from production centers in Ponorogo, Malang, Bondowoso, and Banyuwangi.',
    highlightTag: 'Surabaya Logistics Hub'
  },
  {
    year: '2022',
    phase: 'Phase 04: Two-Way Trade',
    title: 'Launch of Import Division for Post-Harvest Equipment & Food-Grade Vacuum Liners',
    location: 'Surabaya, Hamburg & Yokohama',
    summary:
      'Recognizing that export consistency depends on upstream field tools, Everoot activated general import licensing to bring practical post-harvest technology from overseas partners.',
    keyAchievement:
      'Imported optical moisture meters, multi-layer hermetic barrier bags, and precision craft cutting tools from Germany and Japan.',
    operationalDetail:
      'Imported tools are distributed via harvest-linked payment terms to partner farming cooperatives and MSME workshops across East Java, creating a mutually reinforcing export-import loop.',
    highlightTag: 'Export-Import Synergy'
  },
  {
    year: '2024 - Present',
    phase: 'Phase 05: Digital Traceability',
    title: 'Traceable Supply Network Across 9 East Java Regencies to Global Markets',
    location: 'Across East Java Corridors',
    summary:
      'Today Everoot Inc. runs scheduled shipments of single-origin spices and sustainable craft collections, backed by batch-code records from harvest plots and artisan benches.',
    keyAchievement:
      'Every spice sack and craft pallet carries a commodity passport listing village origin coordinates, harvest or production date, and partner unit profile.',
    operationalDetail:
      'Company growth continues to center on long-term relationships between East Java producers and food formulators, spice roasters, and interior curators across Europe, Japan, the Middle East, and North America.',
    highlightTag: 'East Java Traceability'
  }
];

export const partnershipsEn: EnglishPartnerOrganization[] = [
  {
    id: 'gapoktan-semeru-malang',
    name: 'Lereng Semeru Makmur Farmers Association',
    category: 'Farming Communities',
    regencyOrCity: 'Dampit & Tirtoyudo, Malang Regency',
    sinceYear: '2016',
    memberCountLabel: '64 smallholder agroforestry families',
    commodities: ['Lal Pari Cloves', 'Black Pepper', 'Intercropped Coffee & Cocoa'],
    collaborationModel: 'Tiered harvest off-take contracts backed by enclosed UV solar drying domes.',
    story:
      'The founding farming collective that partnered with Everoot in 2016. Building three enclosed UV-roofed solar dryers on Semeru’s southern slope eliminated sudden rain losses during peak picking months.',
    verificationNote: 'Highland plots at 650-900 masl with family-level harvest block logs.'
  },
  {
    id: 'komunitas-rempah-ijen',
    name: 'Kawah Ijen Spice & Cinnamon Growers Community',
    category: 'Farming Communities',
    regencyOrCity: 'Licin (Banyuwangi) & Sempol (Bondowoso)',
    sinceYear: '2019',
    memberCountLabel: '48 community agroforestry growers',
    commodities: ['Cassia Vera Cinnamon', 'Mountain Cloves', 'Local Cardamom'],
    collaborationModel: 'Selective sustainable bark harvesting paired with cinnamon seedling replanting.',
    story:
      'For every eight-year-old cinnamon tree harvested for bark, community members and Everoot plant five new seedlings along Ijen buffer slopes to preserve long-term canopy cover.',
    verificationNote: 'Bark volatile oil levels tested at the close of each dry season.'
  },
  {
    id: 'koperasi-rimpang-ponorogo',
    name: 'Wilis-Ponorogo Red Ginger Growers Cooperative',
    category: 'Farming Communities',
    regencyOrCity: 'Ngrayun & Pulung, Ponorogo Regency',
    sinceYear: '2021',
    memberCountLabel: '52 upland dryland farmers',
    commodities: ['Dried Red Ginger Slices', 'Black & Yellow Turmeric', 'Curcuma Simplisia'],
    collaborationModel: 'Deployment of food-grade stainless slicers and low-smoke biomass dryers.',
    story:
      'Farmers previously sold fresh red ginger during harvest price gluts. With Everoot, harvests are sliced and dried into export-ready botanical simplisia for herbal beverage and extraction buyers in Japan and Europe.',
    verificationNote: 'Sulfur-free, unbleached slices dried below 10 percent moisture.'
  },
  {
    id: 'sentra-bambu-gintangan',
    name: 'Desa Gintangan Woven Bamboo Craft Studio',
    category: 'MSMEs & Artisans',
    regencyOrCity: 'Blimbingsari, Banyuwangi Regency',
    sinceYear: '2018',
    memberCountLabel: '38 village artisans & youth weavers',
    commodities: ['Layered Bamboo Lamp Shades', 'Hotel Serving Baskets', 'Woven Wall Panels'],
    collaborationModel: 'Modular sizing training, borax-free preservation soaking, and 50 percent production advance payments.',
    story:
      'Desa Gintangan has long been known as Banyuwangi’s bamboo craft village. Everoot helped adapt thin bamboo strip weaving into lighting shades and tableware compliant with E27 hardware and hospitality specs in Kyoto and Amsterdam.',
    verificationNote: 'Crafted from Apus and Petung bamboo aged at least 3 years.'
  },
  {
    id: 'kolektif-serat-lamongan',
    name: 'Babat Water Hyacinth & Pandanus Craft Collective',
    category: 'MSMEs & Artisans',
    regencyOrCity: 'Babat & Sekaran, Lamongan Regency',
    sinceYear: '2019',
    memberCountLabel: '41 river-fiber weavers',
    commodities: ['Natural Fiber Laundry Baskets', 'Braided Water Hyacinth Rugs', 'Interior Trays & Totes'],
    collaborationModel: 'Upcycling invasive Bengawan Solo river reeds into high-value export homeware.',
    story:
      'Dense water hyacinth along the Bengawan Solo river in Lamongan is harvested, cleaned, sun-dried to warm golden tones, and hand-braided into sturdy, flexible household storage pieces.',
    verificationNote: 'Every batch passes through a 45°C dehumidifying kiln before carton packing.'
  },
  {
    id: 'paguyuban-akar-jati-ngawi',
    name: 'West East Java Teak Root & Terracotta Artisan Guild',
    category: 'MSMEs & Artisans',
    regencyOrCity: 'Kedunggalar (Ngawi) & Trowulan (Mojokerto)',
    sinceYear: '2020',
    memberCountLabel: '24 wood carving workshops & terracotta kilns',
    commodities: ['Reclaimed Teak Root Consoles', 'Solid Carved Bowls', 'Smoke-Fired Terracotta Vessels'],
    collaborationModel: 'Upcycling leftover forestry teak stumps alongside alluvial clay from Trowulan kilns.',
    story:
      'Rather than being left to rot or burned, aged teak root stumps are excavated and sculpted along natural contours in Ngawi, complemented by smoke-fired stoneware crafted in Mojokerto.',
    verificationNote: 'Backed by official Indonesian SVLK timber legality verification for export.'
  },
  {
    id: 'nordic-botanicals-hamburg',
    name: 'Nordic Spice & Botanicals Import GmbH',
    category: 'Enterprise & Logistics',
    regencyOrCity: 'Port of Hamburg, Germany (Buyer & Packaging Partner)',
    sinceYear: '2021',
    memberCountLabel: 'Northern Europe distribution & barrier partner',
    commodities: ['Whole Clove & Cinnamon Off-Take', 'Hermetic Barrier Liner Supply'],
    collaborationModel: 'Reciprocal trade: East Java whole spice exports paired with multi-layer vacuum liner imports.',
    story:
      'A bidirectional partnership allowing Everoot to lock in essential oil aroma during ocean transit using European food-grade oxygen-barrier sacks.',
    verificationNote: 'Regular sea freight corridor from Tanjung Perak (SUB) to Port of Hamburg (DEHAM).'
  },
  {
    id: 'kyoto-living-craft',
    name: 'Kyoto Living & Artisan Supply Co., Ltd.',
    category: 'Enterprise & Logistics',
    regencyOrCity: 'Kyoto & Port of Yokohama, Japan',
    sinceYear: '2022',
    memberCountLabel: 'Craft curator & precision inspection network',
    commodities: ['East Java Bamboo & Fiber Homeware', 'Optical Moisture Meter Supply'],
    collaborationModel: 'Seasonal curation of East Java MSME home collections and supply of digital QC inspection tools for Malang.',
    story:
      'Brings tactile East Java bamboo and reed craftsmanship to modern Japanese interiors while supplying digital moisture testing gear for Everoot’s quality team.',
    verificationNote: 'Joint pre-shipment quality inspections conducted quarterly.'
  },
  {
    id: 'tps-logistik-surabaya',
    name: 'Tanjung Perak Forwarding & Quarantine Consortium',
    category: 'Enterprise & Logistics',
    regencyOrCity: 'Tanjung Perak, Surabaya, East Java',
    sinceYear: '2020',
    memberCountLabel: 'Customs brokerage & container logistics unit',
    commodities: ['FCL / LCL Ocean Freight', 'ISPM 15 Heat Treatment', 'Phytosanitary Clearance'],
    collaborationModel: 'Integrated vessel scheduling, agricultural quarantine checks, and palletized stuffing.',
    story:
      'Ensures all spice and bamboo or wood craft exports clear pest-free heat treatment certification compliant with destination port regulations.',
    verificationNote: 'Directly integrated with Everoot’s North Surabaya consolidation warehouse.'
  }
];

export const productsEn: EnglishProductItem[] = [
  {
    slug: 'cengkeh-lal-pari-malang',
    name: 'Hand-Picked Lal Pari Whole Cloves',
    shortName: 'Malang Lal Pari Cloves',
    category: 'Indonesian Spices',
    tradeFlow: 'Export',
    originOrSource: 'Southern Slopes of Mount Semeru, Dampit',
    regency: 'Malang Regency, East Java',
    hsCode: '0907.10.00',
    grade: 'Lal Pari AB6 Special Hand-Picked',
    moq: '1 Metric Ton (LCL) / 11 Metric Tons (20ft FCL)',
    leadTime: '14 - 21 Business Days from Contract Confirmation',
    packaging: 'New 50 kg Jute Sacks with Food-Grade Hermetic Inner Liner',
    port: 'Tanjung Perak, Surabaya (IDSUB)',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Dried whole cloves in rich reddish-brown hues on a natural surface',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Export-grade dried clove buds sorting',
        caption: 'Lal Pari cloves with intact flower heads and uniform reddish-brown color.'
      },
      {
        url: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1000&q=80',
        alt: 'Assorted spices in quality lab measuring bowls',
        caption: 'Moisture level and stem ratio testing at the Dampit sorting house in Malang.'
      },
      {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80',
        alt: 'East Java volcanic highland agroforestry landscape',
        caption: 'Partner mixed-crop farms at 750 masl on the slopes of Mount Semeru.'
      }
    ],
    summary:
      'Whole Lal Pari variety clove buds from highland Malang Regency, rich in natural eugenol essential oil, hand-harvested just before bloom and dried in enclosed solar drying domes.',
    originStory:
      'On the southern flanks of Mount Semeru, mineral-rich volcanic soil gives Lal Pari cloves their sharp, warming aroma. Partner farmers in Dampit and Tirtoyudo pick flower clusters by hand as buds turn pinkish-gold, separating stems the same day before moving batches onto solar drying racks.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Selective Hand-Picking of Mature Buds',
        detail: 'Only full clusters are picked manually without damaging productive young branches.'
      },
      {
        stepNumber: '02',
        title: 'Stemming & UV Solar Rack Drying',
        detail: 'Buds are separated from stems and dried for 4 to 5 days inside covered solar domes down to 11-12 percent moisture.'
      },
      {
        stepNumber: '03',
        title: 'Mechanical Sieving & Table Hand-Picking',
        detail: 'Dust, headless buds, and foreign matter are removed on sorting tables at the Malang warehouse.'
      },
      {
        stepNumber: '04',
        title: 'Hermetic Liner Packing & Quarantine Clearance',
        detail: 'Sealed inside imported oxygen-barrier liners prior to jute sacking in Surabaya.'
      }
    ],
    partnerName: 'Lereng Semeru Makmur Farmers Association',
    partnerRole: 'Cultivation, selective picking, and primary solar drying partner in Dampit, Malang.',
    specifications: [
      { label: 'Moisture Content', value: 'Max. 12.0%' },
      { label: 'Volatile Essential Oil', value: '17.5% - 19.5%' },
      { label: 'Foreign Matter', value: 'Max. 0.5%' },
      { label: 'Clove Stems', value: 'Max. 1.5%' },
      { label: 'Khaki / Headless Cloves', value: 'Max. 2.0%' },
      { label: '20ft Container Load', value: '11,000 kg (220 Jute Sacks @ 50 kg)' }
    ]
  },
  {
    slug: 'kayu-manis-cassia-ijen',
    name: 'Ijen Highland Cassia Vera Cinnamon Quills',
    shortName: 'Ijen Cassia Cinnamon',
    category: 'Indonesian Spices',
    tradeFlow: 'Export',
    originOrSource: 'Ijen Mountain Slopes, Licin & Sempol',
    regency: 'Banyuwangi & Bondowoso, East Java',
    hsCode: '0906.19.00',
    grade: 'KA / AA Stick (Lengths 8 cm, 15 cm & 25 cm)',
    moq: '1 Metric Ton (LCL) / 7 Metric Tons (20ft FCL)',
    leadTime: '14 - 20 Business Days',
    packaging: '20 kg / 25 kg Heavy Kraft Cartons with Moisture Liner',
    port: 'Tanjung Perak, Surabaya (IDSUB)',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Cleanly scraped whole rolled Cassia Vera cinnamon sticks',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1000&q=80',
        alt: 'Dried rolled Cassia Vera cinnamon quills',
        caption: 'Naturally double-rolled cinnamon bark with warm golden-brown finish after outer cork scraping.'
      },
      {
        url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Assorted dried spices prepared for packing',
        caption: 'Uniform 8 cm and 15 cm stick cuts tailored for retail packaging or extraction buyers.'
      }
    ],
    summary:
      'Naturally rolled Cassia Vera bark harvested from 8- to 12-year-old highland trees around Mount Ijen, cleanly scraped of outer cork for tight quills with rich, sweet warmth.',
    originStory:
      'Cool mountain nights and porous volcanic loam between Banyuwangi and Bondowoso yield thick inner cinnamon bark rich in natural cinnamaldehyde. Every harvested tree is followed by planting five replacement seedlings on cooperative plots.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Outer Bark Scraping',
        detail: 'Rough outer cork layer is shaved cleanly in the orchard before inner bark peeling.'
      },
      {
        stepNumber: '02',
        title: 'Natural Sun Curling',
        detail: 'Bark strips dry on elevated bamboo racks until rolling tightly into double-quill cylinders.'
      },
      {
        stepNumber: '03',
        title: 'Precision Cutting & Thickness Grading',
        detail: 'Quills are cut to contract lengths (8 cm, 15 cm, or long sticks) and sorted by diameter.'
      }
    ],
    partnerName: 'Kawah Ijen Spice & Cinnamon Growers Community',
    partnerRole: 'Sustainable harvesting, clean peeling, and reforestation partner in Licin & Sempol.',
    specifications: [
      { label: 'Moisture Content', value: 'Max. 13.5%' },
      { label: 'Volatile Oil Content', value: '2.2% - 3.4%' },
      { label: 'Rolling Ratio', value: '90% - 95% Whole Quills' },
      { label: 'Cut Lengths Available', value: '6 cm, 8 cm, 15 cm, 25 cm, or Whole' },
      { label: '20ft Container Load', value: '6,500 - 7,500 kg in Cartons' },
      { label: '40ft HC Container Load', value: '15,000 - 16,500 kg in Cartons' }
    ]
  },
  {
    slug: 'jahe-merah-kering-ponorogo',
    name: 'Sun-Dried Red Ginger Slices (Simplisia)',
    shortName: 'Ponorogo Dried Red Ginger',
    category: 'Indonesian Spices',
    tradeFlow: 'Export',
    originOrSource: 'Ngrayun & Pulung Uplands',
    regency: 'Ponorogo Regency, East Java',
    hsCode: '0910.11.00',
    grade: 'Unbleached Export Slice (Zero Sulfur)',
    moq: '500 kg (LCL) / 9 Metric Tons (20ft FCL)',
    leadTime: '12 - 18 Business Days',
    packaging: '25 kg Woven PP Sacks + Food-Grade PE Liner',
    port: 'Tanjung Perak, Surabaya (IDSUB)',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Fresh red ginger rhizomes and sliced pieces on a timber prep board',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80',
        alt: 'Mature 11-month red ginger harvest',
        caption: 'Harvested at 10 to 12 months when gingerol and shogaol pungency reach peak concentration.'
      }
    ],
    summary:
      'Mature red ginger sliced uniformly at 3 mm from the limestone hills of Ponorogo, spring-washed without peeling, and cleanly dried without bleaching agents for herbal teas and oleoresin extraction.',
    originStory:
      'Working with the Wilis-Ponorogo Red Ginger Cooperative, harvests begin only after foliage naturally dies back past 10 months. Controlled warm-air and solar drying preserves fiery aroma without smoke taint.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Spring-Water Jet Washing & Draining',
        detail: 'Soil is removed gently with pressurized spring water while keeping essential-oil-rich skin intact.'
      },
      {
        stepNumber: '02',
        title: 'Uniform 3 mm Slicing',
        detail: 'Cut using food-grade stainless blades for even dehydration across every chip.'
      },
      {
        stepNumber: '03',
        title: 'Controlled 50°C Dehydration',
        detail: 'Dried below 10 percent moisture to prevent mold development across long sea voyages.'
      }
    ],
    partnerName: 'Wilis-Ponorogo Red Ginger Growers Cooperative',
    partnerRole: 'Mature rhizome farming and simplisia drying hub in Ngrayun, Ponorogo.',
    specifications: [
      { label: 'Moisture Content', value: 'Max. 10.0%' },
      { label: 'Slice Thickness', value: '2.5 mm - 3.5 mm (Dry)' },
      { label: 'Sulfur / Bleaching Treatment', value: '0 ppm (100% Unbleached)' },
      { label: 'Total Ash Content', value: 'Max. 6.5%' },
      { label: '20ft Container Load', value: '9,000 kg' }
    ]
  },
  {
    slug: 'lada-hitam-banyuwangi',
    name: 'Kalibaru Estate Bold Black Peppercorns',
    shortName: 'Kalibaru Black Pepper',
    category: 'Indonesian Spices',
    tradeFlow: 'Export',
    originOrSource: 'Kalibaru & Glenmore Highlands',
    regency: 'Banyuwangi Regency, East Java',
    hsCode: '0904.11.20',
    grade: 'ASTA Clean / Density 550 - 570 g/L',
    moq: '1 Metric Ton (LCL) / 14 Metric Tons (20ft FCL)',
    leadTime: '14 - 21 Business Days',
    packaging: '50 kg Food-Grade Jute Sacks / 25 kg Kraft Bags',
    port: 'Tanjung Perak, Surabaya (IDSUB)',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Whole wrinkled black peppercorns with dense dark skin',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1000&q=80',
        alt: 'Gravity-cleaned whole black peppercorns',
        caption: 'High 560 g/L bulk density with sharp piperine heat, free from stalk dust.'
      }
    ],
    summary:
      'Whole black peppercorns grown on shaded agroforestry trees in Kalibaru and Glenmore, hot-water blanched prior to elevated tarp drying for deep uniform black color and low microbial load.',
    originStory:
      'Pepper vines climb shade trees across smallholder plots in western Banyuwangi. Fresh green-yellow spikes are threshed and briefly dipped in hot water to trigger clean enzymatic darkening and sanitize surface dust naturally.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Threshing & Hot-Water Blanching',
        detail: 'Peppercorns are separated from spikes and dipped in 80°C water for 60 seconds.'
      },
      {
        stepNumber: '02',
        title: 'Elevated Clean-Tarp Sun Drying',
        detail: 'Sun-dried on raised clean tarps completely isolated from bare soil.'
      },
      {
        stepNumber: '03',
        title: 'Gravity Table Density Sorting',
        detail: 'Removes hollow light berries so only dense corns above 550 g/L enter export bags.'
      }
    ],
    partnerName: 'Kawah Ijen Spice & Cinnamon Growers Community',
    partnerRole: 'Intercropped pepper smallholder network in western Banyuwangi.',
    specifications: [
      { label: 'Bulk Density', value: '550 - 570 g/L' },
      { label: 'Moisture Content', value: 'Max. 12.0%' },
      { label: 'Light Berries', value: 'Max. 2.0%' },
      { label: 'Foreign Matter', value: 'Max. 0.5%' },
      { label: '20ft Container Load', value: '14,000 - 15,000 kg' }
    ]
  },
  {
    slug: 'lampu-gantung-bambu-gintangan',
    name: 'Woven Bamboo Layered Pendant Dome',
    shortName: 'Gintangan Bamboo Pendant',
    category: 'MSME Handicrafts',
    tradeFlow: 'Export',
    originOrSource: 'Gintangan Craft Village, Blimbingsari',
    regency: 'Banyuwangi Regency, East Java',
    hsCode: '4602.11.90',
    grade: 'Handcrafted Hospitality & Residential Grade',
    moq: '120 Units (LCL) / 650 Nested Units (20ft FCL)',
    leadTime: '25 - 32 Business Days (Scheduled Hand-Weaving)',
    packaging: 'Double-Wall Cartons with Silica Paper (3-Size Nesting)',
    port: 'Tanjung Perak, Surabaya (IDSUB)',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Handwoven natural bamboo pendant lamp shade casting warm light',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80',
        alt: 'Woven bamboo pendant lamp installed indoors',
        caption: 'Double-cross weave creates gentle geometric shadow patterns when lit.'
      },
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
        alt: 'Close-up texture of smooth sliced bamboo and rattan',
        caption: 'Hand-planed 1.2 mm bamboo strips sanded smooth without glossy synthetic varnish.'
      }
    ],
    summary:
      'Handwoven bamboo pendant domes crafted by artisans in Desa Gintangan, Banyuwangi, engineered in three nesting sizes (S, M, L) to reduce ocean freight volume by up to 60 percent.',
    originStory:
      'Across generations in Desa Gintangan, villagers have mastered slicing flexible paper-thin bamboo strips. Working alongside Sanggar Kriya Gintangan, Everoot standardized E27 lamp holder rings for European and Japanese electrical specs while introducing nesting geometry so three diameters ship inside one carton.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Mature Bamboo Selection & Organic Soak',
        detail: 'Three-year Apus bamboo is cured in natural saline baths to remove starch and prevent boring beetles.'
      },
      {
        stepNumber: '02',
        title: 'Strip Slicing & Mold Frame Weaving',
        detail: 'Artisans weave bamboo strips over wooden molds for consistent dome diameter.'
      },
      {
        stepNumber: '03',
        title: 'Fine Sanding & Water-Based Matte Sealer',
        detail: 'Surfaces are sanded smooth and finished with low-VOC water-based indoor sealant.'
      }
    ],
    partnerName: 'Desa Gintangan Woven Bamboo Craft Studio',
    partnerRole: 'Hand-weaving studio uniting 38 artisans in Blimbingsari, Banyuwangi.',
    specifications: [
      { label: 'Primary Material', value: '100% Apus Bamboo & Natural Rattan Frame' },
      { label: 'Nested Set Diameters (S / M / L)', value: 'Dia. 32 cm / 45 cm / 58 cm' },
      { label: 'Bamboo Moisture at Packing', value: '10% - 12% (Kiln Dried)' },
      { label: 'Socket Hardware Ring', value: 'Universal E26 / E27 Ring (40mm)' },
      { label: 'Surface Finish', value: 'Natural Matte Water-Based Sealer / Charcoal Black' },
      { label: 'Timber & Phytosanitary Certs', value: 'ISPM 15 & Indonesian V-Legal / SVLK' }
    ]
  },
  {
    slug: 'keranjang-enceng-gondok-lamongan',
    name: 'Braided Water Hyacinth Storage & Tray Set',
    shortName: 'Lamongan Hyacinth Baskets',
    category: 'MSME Handicrafts',
    tradeFlow: 'Export',
    originOrSource: 'Babat & Sekaran Fiber Hubs',
    regency: 'Lamongan Regency, East Java',
    hsCode: '4602.19.20',
    grade: 'Export Home Organization Grade (Anti-Mold Treated)',
    moq: '200 Sets (LCL) / 1,100 Sets (40ft HC FCL)',
    leadTime: '21 - 28 Business Days',
    packaging: '5-Ply Export Cartons with Food-Safe Silica Gel',
    port: 'Tanjung Perak, Surabaya (IDSUB)',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Warm neutral woven natural fiber storage baskets in a living room setting',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
        alt: 'Interior styling with handwoven river-fiber baskets',
        caption: 'Thick hand-braided water hyacinth stems deliver supple yet upright basket structure.'
      }
    ],
    summary:
      'Three-piece storage basket and tray sets hand-braided from wild Bengawan Solo water hyacinth stems in Lamongan, turning invasive river vegetation into sustainable home organization goods.',
    originStory:
      'Overgrown water hyacinth along the Bengawan Solo waterways in Lamongan frequently clogged local riverbanks. Artisan collectives in Babat harvest 70 cm stalks, sun-cure them for two weeks to warm honey hues, and braid them securely onto concealed wire or rattan frames.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'River Stalk Harvesting & 14-Day Sun Curing',
        detail: 'Roots and leaves are trimmed before stalks are flattened and sun-dried thoroughly.'
      },
      {
        stepNumber: '02',
        title: 'Tight Braid & Coil Weaving',
        detail: 'Woven by hand across village collectives using dense interlocking braid patterns.'
      },
      {
        stepNumber: '03',
        title: '45°C Dehumidification Kiln Cycle',
        detail: 'Finished sets rest inside heated drying rooms to eliminate mold spores prior to boxing.'
      }
    ],
    partnerName: 'Babat Water Hyacinth & Pandanus Craft Collective',
    partnerRole: 'River stalk harvesting and braiding partner in Lamongan.',
    specifications: [
      { label: 'Fiber Material', value: 'Dried Water Hyacinth Stalks & Pandanus Binding' },
      { label: 'Set Configuration', value: 'Nested Set of 3 (Large, Medium, Small)' },
      { label: 'Fiber Moisture Content', value: 'Max. 12%' },
      { label: 'Handle Load Capacity', value: 'Up to 12 kg (Double Stitched)' },
      { label: '40ft HC Container Load', value: '1,100 - 1,250 Sets' }
    ]
  },
  {
    slug: 'meja-konsol-akar-jati-ngawi',
    name: 'Reclaimed Sculptural Teak Root Console Table',
    shortName: 'Ngawi Teak Root Console',
    category: 'MSME Handicrafts',
    tradeFlow: 'Export',
    originOrSource: 'Kedunggalar & Paron Timber Corridors',
    regency: 'Ngawi Regency, East Java',
    hsCode: '9403.60.90',
    grade: 'One-of-a-Kind Sculptural Root / SVLK Certified',
    moq: '15 Units (LCL) / 85 Mixed Units (20ft FCL)',
    leadTime: '30 - 40 Business Days',
    packaging: 'ISPM 15 Heat-Treated Timber Crates + Biodegradable Corner Guards',
    port: 'Tanjung Perak, Surabaya (IDSUB)',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Sculptural natural grain solid teak furniture in a gallery interior',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80',
        alt: 'Solid teak wood tabletop with organic natural grain',
        caption: 'Each piece preserves decades-old natural underground grain erosion of mature teak roots.'
      }
    ],
    summary:
      'Architectural console tables and sculptural benches carved from reclaimed forestry teak root stumps in Ngawi, high-pressure washed and hand-sanded while honoring every organic curve.',
    originStory:
      'Legacy forestry parcels around Ngawi hold seasoned teak root stumps left behind decades after legal timber harvests. Local carvers excavate each root, clear trapped clay and pebbles from twisting grain cavities, and plane the upper deck into stable indoor-outdoor consoles.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Authorized Stump Recovery & Jet Washing',
        detail: 'Roots are excavated from permitted plots and hydro-blasted clean down to dense hardwood.'
      },
      {
        stepNumber: '02',
        title: 'Level Band-Sawing & Air Seasoning',
        detail: 'Top planes are leveled by band saw and air-seasoned for dimensional stability.'
      },
      {
        stepNumber: '03',
        title: '4-Stage Sanding & Pure Beeswax Polish',
        detail: 'Fine-sanded up to 400 grit and buffed with natural beeswax to highlight teak heartwood.'
      }
    ],
    partnerName: 'West East Java Teak Root & Terracotta Artisan Guild',
    partnerRole: 'Teak root carving workshops in Kedunggalar, Ngawi.',
    specifications: [
      { label: 'Timber Species', value: '100% Reclaimed Teak Root (Tectona grandis)' },
      { label: 'Standard Console Dimensions', value: 'L 120 - 160 cm x W 45 cm x H 78 cm' },
      { label: 'Timber Export Compliance', value: 'Full Indonesian V-Legal / SVLK Dossier' },
      { label: 'Surface Treatment', value: 'Raw Sanded / Natural Teak Oil / Beeswax' }
    ]
  },
  {
    slug: 'kemasan-barrier-vakum-impor',
    name: 'Hermetic Aroma-Barrier Liners & Optical Moisture Meters',
    shortName: 'Imported Barrier Liners & Meters',
    category: 'Imported Commodities',
    tradeFlow: 'Import',
    originOrSource: 'Port of Hamburg (Germany) & Yokohama (Japan)',
    regency: 'Surabaya & Malang Distribution Warehouses',
    hsCode: '3923.21.99 / 9027.89.90',
    grade: 'Food-Grade High Oxygen Barrier & Precision Ag-Tech',
    moq: '500 Liner Bags / 5 Cooperative Moisture Meters',
    leadTime: 'In Stock at Surabaya Warehouse (7 Business Days)',
    packaging: 'Factory-Sealed 100-Piece Master Cartons',
    port: 'Arrival Port: Tanjung Perak, Surabaya (IDSUB)',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Organized modern logistics warehouse stocked with palletized packaging',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Logistics warehouse racking storing hermetic liners in Surabaya',
        caption: 'Ready-to-dispatch oxygen-barrier liners and container desiccants at Tanjung Perak.'
      }
    ],
    summary:
      'Everoot Inc.’s import desk sources 7-layer hermetic barrier liners and digital grain moisture testers for distribution across partner spice cooperatives and exporters in East Java.',
    originStory:
      'Container condensation ("container sweat") when crossing from equatorial humidity into winter European or Japanese ports is the leading threat to tropical spice cargoes. Through direct import procurement, Everoot supplies high-barrier inner sacks and DMF-free container desiccants to upstream farmers.',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Direct OEM Partner Procurement',
        detail: 'Shipped via backhaul sea freight from partner suppliers in Hamburg and Yokohama.'
      },
      {
        stepNumber: '02',
        title: 'Customs Clearance (PIB) & Crop Calibration',
        detail: 'Digital meters are calibrated locally for cloves, black pepper, coffee, and dried ginger curves.'
      },
      {
        stepNumber: '03',
        title: 'Cooperative Dispatch & Harvest Terms',
        detail: 'Delivered to farming groups across Malang, Ponorogo, and Banyuwangi ahead of peak harvests.'
      }
    ],
    partnerName: 'Nordic Spice & Botanicals GmbH & Kyoto Living Co.',
    partnerRole: 'European barrier packaging and Japanese inspection instrument suppliers.',
    specifications: [
      { label: 'Oxygen Transmission Rate (OTR)', value: '< 0.5 cc/m²/24 hrs' },
      { label: 'Liner Film Thickness', value: '95 Micron Co-Extruded PA/PE' },
      { label: 'Bag Sizes Stocked', value: '25 kg, 50 kg Sacks & 500 kg Jumbo Bags' },
      { label: 'Moisture Meter Accuracy', value: '+/- 0.3% with Auto Temp Compensation' }
    ]
  }
];

export const galleryPostsEn: EnglishGalleryPost[] = [
  {
    id: 'pin-01-panen-cengkeh-dampit',
    title: 'Morning Mist at the Semeru Slope Clove Drying Dome',
    category: 'Harvest & Spices',
    tradeType: 'Export',
    aspectClass: 'ratio-tall',
    width: 800,
    height: 1100,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Freshly dried whole cloves lifted from bamboo drying racks',
    location: 'Dampit, Malang Regency, East Java',
    date: '14 August 2026',
    routeLabel: 'Dampit (Malang) -> Tanjung Perak -> Rotterdam',
    partnerUnit: 'Lereng Semeru Makmur Farmers Assoc.',
    summary: 'Day-four turning of Lal Pari cloves inside the solar drying dome prior to final moisture check.',
    storyParagraphs: [
      'Captured at 06:45 WIB in Sukodono Hamlet, Dampit District, Malang Regency. Pak Suparman and three cooperative members turn trays of Lal Pari cloves entering their fourth day inside tiered bamboo racks.',
      'Before installing this enclosed UV drying dome in 2017, growers raced to roll ground tarps every time afternoon mist swept down Mount Semeru. Interior dome warmth now holds steady between 38 and 42°C, yielding uniform reddish-brown buds with zero smoke odor.',
      'This exact batch passed 11.4 percent moisture that afternoon and filled 220 export jute sacks bound for Rotterdam.'
    ],
    fieldNote: 'Photographed by Everoot field QA during peak August harvest at 780 masl.',
    batchCode: 'EVR-CLV-MLG-2608',
    relatedProductSlug: 'cengkeh-lal-pari-malang',
    relatedProductName: 'Malang Lal Pari Cloves',
    tags: ['Lal Pari Cloves', 'Malang Regency', 'Solar Drying Dome', 'Europe Export']
  },
  {
    id: 'pin-02-anyaman-bambu-gintangan',
    title: 'Hand-Planed 1 mm Bamboo Strips on a Desa Gintangan Porch',
    category: 'MSME Crafts',
    tradeType: 'Export',
    aspectClass: 'ratio-portrait',
    width: 800,
    height: 960,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Woven bamboo pendant dome shade with fine latticework',
    location: 'Desa Gintangan, Banyuwangi, East Java',
    date: '03 September 2026',
    routeLabel: 'Banyuwangi -> Surabaya -> Yokohama, Japan',
    partnerUnit: 'Desa Gintangan Woven Bamboo Studio',
    summary: 'Final rim binding on 300 layered bamboo pendant shades bound for tearooms and residences in Kyoto.',
    storyParagraphs: [
      'On her front porch in Desa Gintangan, Banyuwangi, Ibu Sulastri weaves an open double-cross dome using Apus bamboo strips cured in natural brine and dried until supple as woven ribbon.',
      'This order came from Everoot’s interior curator partner in Kyoto, Japan, specifying zero metal fasteners. Every top and bottom ring joint is locked tightly using thin rattan peel.',
      'Each finished shade carries the weaver’s initials stamped inside the top ring so buyers in Japan know the East Java artisan who shaped it.'
    ],
    fieldNote: 'Bamboo poles harvested selectively from managed village groves.',
    batchCode: 'EVR-BMB-BWI-2609',
    relatedProductSlug: 'lampu-gantung-bambu-gintangan',
    relatedProductName: 'Gintangan Bamboo Pendant',
    tags: ['Woven Bamboo', 'Banyuwangi MSME', 'Desa Gintangan', 'Japan Export']
  },
  {
    id: 'pin-03-kontainer-tanjung-perak',
    title: 'Sealing a 40ft High Cube Container Before Night Vessel Cutoff',
    category: 'Export Shipments',
    tradeType: 'Export',
    aspectClass: 'ratio-landscape',
    width: 1000,
    height: 700,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Palletized export cartons inside the port consolidation warehouse',
    location: 'Tanjung Perak Timur Warehouse, Surabaya',
    date: '19 September 2026',
    routeLabel: 'Tanjung Perak (IDSUB) -> Hamburg (DEHAM)',
    partnerUnit: 'Everoot Surabaya Logistics & Quarantine Team',
    summary: 'Lining steel container walls with kraft buffer board and desiccant strips ahead of loading 15 tons of cinnamon.',
    storyParagraphs: [
      'Before the first carton enters any export container in Surabaya, warehouse staff line the steel walls with corrugated kraft board and hang 16 calcium-chloride desiccant strips.',
      'This step protects cargoes bound for Northern Europe. Moving from warm Indian Ocean waters into cool North Atlantic shipping lanes creates temperature swings capable of condensing ceiling droplets.',
      'Combined with inner hermetic liners in each carton, 15.8 tons of rolled Ijen cinnamon arrive in Port of Hamburg crisp and fragrant.'
    ],
    fieldNote: 'Stuffing completed at 17:20 WIB following agricultural quarantine inspection.',
    batchCode: 'EVR-LOG-SUB-2609',
    relatedProductSlug: 'kayu-manis-cassia-ijen',
    relatedProductName: 'Ijen Cassia Cinnamon',
    tags: ['Tanjung Perak', 'FCL Container', 'Ijen Cinnamon', 'Port of Hamburg']
  },
  {
    id: 'pin-04-kayu-manis-ijen',
    title: 'Golden Cassia Vera Quills Cured at 1,100 Meters Elevation',
    category: 'Harvest & Spices',
    tradeType: 'Export',
    aspectClass: 'ratio-square',
    width: 800,
    height: 800,
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Bundles of neatly curled dried Cassia cinnamon quills',
    location: 'Licin District, Banyuwangi, East Java',
    date: '27 August 2026',
    routeLabel: 'Ijen Slopes -> Malang Hub -> Dubai & Hamburg',
    partnerUnit: 'Kawah Ijen Spice Growers Community',
    summary: 'Precision cutting of 8 cm cinnamon sticks following six days of slow highland sun curling.',
    storyParagraphs: [
      'Sweet woody warmth fills the collector courtyard in Licin as fresh bark bundles arrive from slope groves.',
      'Partner growers peel only trees aged eight years or older. Outer cork bark is scraped away with curved knives prior to stripping, ensuring cured quills gleam golden-brown free of lichen spots.',
      'By day six on raised racks, strips curl naturally into tight double flutes ready for buyer-specified sizing.'
    ],
    fieldNote: 'Five-for-one cinnamon replanting tracked across Licin smallholder woodlots.',
    batchCode: 'EVR-CIN-IJN-2608',
    relatedProductSlug: 'kayu-manis-cassia-ijen',
    relatedProductName: 'Ijen Cassia Cinnamon',
    tags: ['Cinnamon', 'Kawah Ijen', 'Sustainable Agroforestry', 'Banyuwangi']
  },
  {
    id: 'pin-05-enceng-gondok-lamongan',
    title: 'Turning Bengawan Solo River Weeds into Scandinavian Home Baskets',
    category: 'MSME Crafts',
    tradeType: 'Export',
    aspectClass: 'ratio-tall',
    width: 800,
    height: 1080,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Braided water hyacinth home storage basket in a clean room',
    location: 'Babat, Lamongan Regency, East Java',
    date: '08 October 2026',
    routeLabel: 'Lamongan -> Surabaya -> Gothenburg, Sweden',
    partnerUnit: 'Babat Natural Fiber MSME Collective',
    summary: 'Braid tension checks and moisture screening across 450 basket sets prior to export packing.',
    storyParagraphs: [
      'For communities along the Bengawan Solo river near Babat, dense water hyacinth mats were once a seasonal nuisance tangling fishing boats.',
      'Today, 60- to 80-centimeter stalks are harvested every morning, split, and dried under open skies until transformed into soft yet remarkably tough braiding fiber.',
      'Here, Everoot QC staff and collective coordinators pull-test stitched handles to verify each basket safely carries laundry or firewood for Swedish homes.'
    ],
    fieldNote: 'Pin moisture meter readings averaged 10.8 percent prior to crating.',
    batchCode: 'EVR-WHC-LMG-2610',
    relatedProductSlug: 'keranjang-enceng-gondok-lamongan',
    relatedProductName: 'Lamongan Hyacinth Baskets',
    tags: ['Water Hyacinth', 'Lamongan MSME', 'Sustainable Craft', 'Europe Export']
  },
  {
    id: 'pin-06-impor-kemasan-hermetik',
    title: 'Arrival of Imported Hermetic Liners & Optical Moisture Meters',
    category: 'Import Distribution',
    tradeType: 'Import',
    aspectClass: 'ratio-portrait',
    width: 800,
    height: 980,
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Warehouse team checking incoming racks of imported equipment',
    location: 'Everoot Distribution Warehouse, Surabaya',
    date: '15 October 2026',
    routeLabel: 'Hamburg & Yokohama -> Tanjung Perak -> East Java Co-ops',
    partnerUnit: 'Everoot Import & Cooperative Supply Division',
    summary: 'Unloading 12,000 multi-layer hermetic sacks and 30 digital moisture testers for partner farming cooperatives.',
    storyParagraphs: [
      'Resilient trade flows in both directions. This snapshot captures container unloading in Surabaya as 7-layer hermetic barrier bags from Germany and optical moisture analyzers from Japan arrive.',
      'Previously, many upland spice farmers judged dryness purely by hand-snapping dried cloves or ginger chips.',
      'With digital meters distributed across Ponorogo, Malang, and Bondowoso, cooperative leads verify exact moisture numbers before dispatching cargo to port.'
    ],
    fieldNote: 'All 30 instruments pre-calibrated by Everoot technicians in Surabaya.',
    batchCode: 'EVR-IMP-SUB-2610',
    relatedProductSlug: 'kemasan-barrier-vakum-impor',
    relatedProductName: 'Imported Barrier Liners & Meters',
    tags: ['Ag-Tech Import', 'Hermetic Packaging', 'Farming Cooperatives', 'Surabaya']
  },
  {
    id: 'pin-07-akar-jati-ngawi',
    title: 'Rescuing Half-Century Reclaimed Teak Root Stumps in Ngawi',
    category: 'MSME Crafts',
    tradeType: 'Export',
    aspectClass: 'ratio-square',
    width: 800,
    height: 800,
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sculptural reclaimed teak console table with flowing wood grain',
    location: 'Kedunggalar, Ngawi Regency, East Java',
    date: '22 October 2026',
    routeLabel: 'Ngawi -> Surabaya -> Los Angeles, USA',
    partnerUnit: 'Ngawi Teak Root Artisan Guild',
    summary: 'Final beeswax hand-buffing on SVLK-certified reclaimed teak console tables.',
    storyParagraphs: [
      'No two teak root stumps ever mirror one another. At an open-air workshop in Kedunggalar, Ngawi, Pak Warsito spends eleven days clearing wedged soil from crevices of aged roots recovered from legal harvest plots.',
      'Rather than trimming away natural burl contours, artisans follow every twist and level only the tabletop plane so glass or decor rests securely.',
      'Each shipment includes SVLK timber legality documentation verifying responsible recovery of forestry residuals.'
    ],
    fieldNote: 'Finished exclusively with pure beeswax without synthetic wood stains.',
    batchCode: 'EVR-TKR-NGW-2610',
    relatedProductSlug: 'meja-konsol-akar-jati-ngawi',
    relatedProductName: 'Ngawi Teak Root Console',
    tags: ['Teak Root', 'Ngawi MSME', 'SVLK Certified', 'Woodcraft']
  },
  {
    id: 'pin-08-jahe-merah-ponorogo',
    title: 'Freshly Sliced Ngrayun Red Ginger Before Low-Temp Drying',
    category: 'Harvest & Spices',
    tradeType: 'Export',
    aspectClass: 'ratio-landscape',
    width: 1000,
    height: 720,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Cleanly washed fresh red ginger rhizomes ready for uniform slicing',
    location: 'Ngrayun, Ponorogo Regency, East Java',
    date: '02 November 2026',
    routeLabel: 'Ponorogo -> Surabaya -> Osaka, Japan',
    partnerUnit: 'Wilis-Ponorogo Red Ginger Cooperative',
    summary: 'Spring-water jet washing and 3 mm slicing for winter herbal beverage formulations.',
    storyParagraphs: [
      'Ahead of winter across Japan and Europe, demand climbs sharply for Ponorogo dried red ginger simplisia. These rhizomes matured for eleven months along Ngrayun hillside soils.',
      'High volatile pungency starts during washing: outer red skin is preserved intact because the sub-dermal layer concentrates peak gingerol compounds.',
      'Three-millimeter slices rest on stainless mesh trays inside 50°C clean-air dryers for even moisture removal.'
    ],
    fieldNote: 'Lab tests confirmed 0 ppm sulfur dioxide residue (100 percent unbleached).',
    batchCode: 'EVR-GGR-PNG-2611',
    relatedProductSlug: 'jahe-merah-kering-ponorogo',
    relatedProductName: 'Ponorogo Dried Red Ginger',
    tags: ['Red Ginger', 'Ponorogo', 'Herbal Simplisia', 'Japan Export']
  },
  {
    id: 'pin-09-lada-hitam-kalibaru',
    title: 'Deep Natural Sheen on Hot-Blanched Kalibaru Black Pepper',
    category: 'Harvest & Spices',
    tradeType: 'Export',
    aspectClass: 'ratio-portrait',
    width: 800,
    height: 960,
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Round bold dried black peppercorns on a wooden tasting spoon',
    location: 'Kalibaru, Banyuwangi Regency, East Java',
    date: '09 November 2026',
    routeLabel: 'Kalibaru -> Surabaya -> Rotterdam & Dubai',
    partnerUnit: 'Kalibaru Pepper Growers Group',
    summary: 'Bulk density verification at 565 g/L meeting international ASTA Clean export criteria.',
    storyParagraphs: [
      'Global spice buyers often ask why Kalibaru peppercorns hold such deep, even charcoal tone with zero grayish streaks.',
      'The secret lies in a simple blanching step performed right after threshing: green berries rest inside bamboo baskets and dip into boiling spring water for sixty seconds prior to sun drying.',
      'This quick dip triggers uniform enzymatic darkening while flushing away field dust and lowering surface microbes naturally.'
    ],
    fieldNote: 'Measured in Surabaya QC lab at 565 g/L bulk density and 11.6 percent moisture.',
    batchCode: 'EVR-PPR-KLB-2611',
    relatedProductSlug: 'lada-hitam-banyuwangi',
    relatedProductName: 'Kalibaru Black Pepper',
    tags: ['Black Pepper', 'ASTA Grade', 'Kalibaru', 'Banyuwangi']
  }
];

export const companyLocationsEn: CompanyLocation[] = [
  {
    id: 'hq-surabaya',
    name: 'Everoot Inc. HQ & Tanjung Perak Export-Import Hub',
    role: 'Corporate Headquarters, Port Consolidation Warehouse & Import Division',
    address: 'Jl. Tanjung Perak Timur No. 88, Krembangan, Surabaya, East Java 60165',
    city: 'Surabaya',
    lat: -7.2166,
    lng: 112.7314,
    phone: '+62 31 355 8490',
    operationalHours: 'Monday - Saturday, 08:00 - 17:00 WIB',
    facilities: [
      'Ventilation-Controlled Consolidation Warehouse (2,400 m²)',
      'Moisture Content & Spice Bulk Density QA Lab',
      '20ft & 40ft HC Container Loading Dock',
      'Distribution Hub for Imported Barrier Liners & Moisture Meters'
    ]
  },
  {
    id: 'hub-malang',
    name: 'Everoot Malang Highland Spice Sorting House',
    role: 'Upstream Sorting Unit, Solar Drying & Semeru Farmer Partnerships',
    address: 'Jl. Raya Semeru Selatan KM 4, Dampit, Malang Regency, East Java 65181',
    city: 'Malang Regency',
    lat: -8.2125,
    lng: 112.7531,
    phone: '+62 341 896 412',
    operationalHours: 'Monday - Saturday, 07:00 - 16:00 WIB',
    facilities: [
      'Enclosed UV Solar Drying Domes',
      'Manual Hand-Pick Clove & Nutmeg Sorting Tables',
      'Farmer Cooperative Post-Harvest Training Center'
    ]
  },
  {
    id: 'studio-banyuwangi',
    name: 'Everoot East Corridor Artisan & Ijen Consolidation Studio',
    role: 'Bamboo MSME Curation Studio & Ijen Cinnamon Collection Hub',
    address: 'Jl. Raya Desa Gintangan No. 14, Blimbingsari, Banyuwangi, East Java 68462',
    city: 'Banyuwangi',
    lat: -8.3094,
    lng: 114.2889,
    phone: '+62 333 418 709',
    operationalHours: 'Monday - Saturday, 08:00 - 16:30 WIB',
    facilities: [
      'Dehumidifying Kiln for Bamboo & Natural Fiber Crafts',
      'East Java MSME Craft Sample Showroom',
      'East Corridor Cinnamon & Pepper Consolidation Desk'
    ]
  }
];
