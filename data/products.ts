/**
 * AS PRINT GALLERY — Products Data Source
 * 
 * NOTE TO OWNER:
 * Add, edit, or remove products and wholesale quantity tiers in this file.
 * The entire website (product counts, catalogues, filters, product detail pages)
 * automatically reads from this array.
 */

export interface PriceTier {
  qty: number;
  rate: number;
  label?: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: 'corrugated' | 'food' | 'packaging' | 'label' | 'sticker' | 'bags';
  categoryLabel: string;
  image: string;
  price: number; // Base unit price (lowest tier or standard)
  startingAt: number; // "Starting at ₹X/pc"
  moq: number;
  badge?: string;
  badgeClass?: 'bestseller' | 'factory-rate' | 'popular' | 'new';
  rating: number;
  reviews: number;
  specs: string[];
  dimensions?: string;
  desc: string;
  fullDesc?: string;
  tiers: PriceTier[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    slug: '3-ply-corrugated-shipping-boxes',
    title: '3-Ply Corrugated Shipping Boxes',
    category: 'corrugated',
    categoryLabel: 'Corrugated Boxes',
    image: '/assets/corrugated_box.jpg',
    price: 1,
    startingAt: 1,
    moq: 1,
    badge: 'BESTSELLER',
    badgeClass: 'bestseller',
    rating: 4.9,
    reviews: 428,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', 'Up to 6 kg Payload'],
    dimensions: '10" × 8" × 6" (Custom sizes available)',
    desc: 'High-bursting strength 3-ply brown corrugated cardboard shipping boxes for Amazon, Flipkart, eCommerce, and retail logistics dispatch.',
    fullDesc: 'Manufactured with high-bursting index kraft liner and resilient fluting to safeguard retail consignments during courier transit. Virgin kraft paper outer protects against atmospheric humidity and stacking crush.',
    tiers: [
      { qty: 100, rate: 1 },
      { qty: 500, rate: 1 },
      { qty: 1000, rate: 1 },
      { qty: 5000, rate: 1 }
    ]
  },
  {
    id: 'prod-2',
    slug: '5-ply-heavy-duty-master-cartons',
    title: '5-Ply Heavy-Duty Master Cartons',
    category: 'corrugated',
    categoryLabel: 'Corrugated Boxes',
    image: '/assets/boxes.jpg',
    price: 1,
    startingAt: 1,
    moq: 1,
    badge: 'HEAVY FREIGHT',
    badgeClass: 'popular',
    rating: 4.9,
    reviews: 312,
    specs: ['Double Wall 5-Ply', '24+ BF Heavy Kraft', 'Up to 22 kg Capacity', 'Interlocking Flutes'],
    dimensions: '18" × 14" × 12" (Custom sizes available)',
    desc: 'Dual-wall master shipper cartons built for bulk exports, heavy industrial hardware, ceramic goods, and long-haul inter-state transport.',
    fullDesc: 'Built with double-wall A/B or B/C flute matrix for extreme stacking rigidity (ECT 44+ lbs/in). Ideal for master packing of multiple smaller boxes or heavy machinery components.',
    tiers: [
      { qty: 50, rate: 1 },
      { qty: 250, rate: 1 },
      { qty: 500, rate: 1 },
      { qty: 2500, rate: 1 }
    ]
  },
  {
    id: 'prod-3',
    slug: 'custom-printed-pizza-boxes',
    title: 'Custom Printed Pizza Packaging Boxes',
    category: 'food',
    categoryLabel: 'Food & Bakery Boxes',
    image: '/assets/pizza_box.jpg',
    price: 1,
    startingAt: 1,
    moq: 1,
    badge: 'FOOD GRADE',
    badgeClass: 'popular',
    rating: 4.8,
    reviews: 512,
    specs: ['Virgin Food Liner', 'Laser Steam Vents', 'Non-Toxic Soy Inks', 'Heat Retention Matrix'],
    dimensions: '7", 8", 10", 12", 14" Square',
    desc: 'Steam-vented, oil-resistant food board pizza delivery boxes. Customized with high-resolution full-color brand graphics.',
    fullDesc: 'Specially engineered for cloud kitchens and pizzeria chains. Food-grade inner barrier prevents grease seepage and sogginess while corner vents evacuate condensation to keep crusts crisp.',
    tiers: [
      { qty: 250, rate: 1 },
      { qty: 1000, rate: 1 },
      { qty: 2500, rate: 1 },
      { qty: 10000, rate: 1 }
    ]
  },
  {
    id: 'prod-4',
    slug: 'luxury-sweet-boxes',
    title: 'Luxury Sweet & Confectionery Boxes',
    category: 'food',
    categoryLabel: 'Food & Bakery Boxes',
    image: '/assets/sweet_box.jpg',
    price: 1,
    startingAt: 1,
    moq: 1,
    badge: 'FESTIVE PACK',
    badgeClass: 'factory-rate',
    rating: 4.9,
    reviews: 184,
    specs: ['Gold Foil Stamping', 'Food-Safe Golden Cavity', 'Rigid Kappa Board', 'Magnetic Lid Option'],
    dimensions: '250g, 500g, 1kg Mithai Trays',
    desc: 'Premium rigid & folding confectionery gift boxes with metallic gold foiling, emboss detailing, and food-safe inner partition cavities.',
    fullDesc: 'Perfect for Haldiram-style sweets, artisanal chocolates, and luxury corporate gifting. Features sturdy duplex and kappa board with velvet or satin finish choices.',
    tiers: [
      { qty: 100, rate: 1 },
      { qty: 500, rate: 1 },
      { qty: 1000, rate: 1 },
      { qty: 5000, rate: 1 }
    ]
  },
  {
    id: 'prod-5',
    slug: 'garment-apparel-boxes',
    title: 'Garment & Apparel Packaging Boxes',
    category: 'packaging',
    categoryLabel: 'Garment Packaging',
    image: '/assets/factory_hero.jpg',
    price: 1,
    startingAt: 1,
    moq: 1,
    badge: 'LUXURY RETRACTABLE',
    badgeClass: 'popular',
    rating: 4.8,
    reviews: 240,
    specs: ['SBS Bleached Board', 'Matte Lamination', 'Self-Locking Die-Cut', 'Crush-Proof Corners'],
    dimensions: '14" × 10" × 3" (Shirt & Saree standard)',
    desc: 'Elegant apparel presentation boxes for shirts, sarees, kurtas, and luxury fabrics. Matte coated with crisp logo debossing.',
    fullDesc: 'Die-cut from pure white SBS virgin paperboard. Features dust-free edge trims, magnetic closures, and quick-fold mechanisms for retail fashion packaging.',
    tiers: [
      { qty: 100, rate: 1 },
      { qty: 500, rate: 1 },
      { qty: 1000, rate: 1 },
      { qty: 5000, rate: 1 }
    ]
  },
  {
    id: 'prod-6',
    slug: 'kraft-paper-carry-bags',
    title: 'Eco-Friendly Kraft Paper Carry Bags',
    category: 'bags',
    categoryLabel: 'Bags & Envelopes',
    image: '/assets/bags.jpg',
    price: 1,
    startingAt: 1,
    moq: 1,
    badge: 'BIO-DEGRADABLE',
    badgeClass: 'popular',
    rating: 4.9,
    reviews: 380,
    specs: ['120-180 GSM Kraft', 'Twisted Paper Handles', 'Reinforced Base', 'Holds Up to 8 kg'],
    dimensions: 'Small (8×10×4), Medium (10×14×4), Large (14×18×5)',
    desc: 'Sustainable brown and bleached white kraft shopping bags with twisted handles. Replace single-use plastics with 100% bio-compostable paper.',
    fullDesc: 'Reinforced bottom patch with hot-melt glue ensures handles and bases will not tear under heavy grocery, garment, or boutique retail weight.',
    tiers: [
      { qty: 200, rate: 1 },
      { qty: 500, rate: 1 },
      { qty: 1000, rate: 1 },
      { qty: 5000, rate: 1 }
    ]
  },
  {
    id: 'prod-7',
    slug: 'paper-courier-mailers',
    title: 'Tamper-Evident Paper Envelopes & Mailers',
    category: 'bags',
    categoryLabel: 'Bags & Envelopes',
    image: '/assets/paper_envelope.jpg',
    price: 1,
    startingAt: 1,
    moq: 1,
    badge: 'TAMPER PROOF',
    badgeClass: 'factory-rate',
    rating: 4.7,
    reviews: 195,
    specs: ['Peel-&-Seal Adhesive', 'Water-Resistant Coating', 'Tear-Off Security Strip', '100% Recyclable'],
    dimensions: '9" × 12", 10" × 14", 12" × 16"',
    desc: 'Eco-friendly courier mailing envelopes with strong self-adhesive tamper-proof destruction tape. Ideal for documents, apparel, and books.',
    fullDesc: 'Any unauthorized opening tears the paper fibers visibly. Eliminates plastic poly mailers while offering superior branding print surface.',
    tiers: [
      { qty: 250, rate: 1 },
      { qty: 1000, rate: 1 },
      { qty: 2500, rate: 1 },
      { qty: 10000, rate: 1 }
    ]
  },
  {
    id: 'prod-8',
    slug: 'woven-damask-labels',
    title: 'High-Density Woven Garment Labels',
    category: 'label',
    categoryLabel: 'Labels & Hang Tags',
    image: '/assets/woven_label.jpg',
    price: 1,
    startingAt: 1,
    moq: 1,
    badge: 'TOP SELLER',
    badgeClass: 'bestseller',
    rating: 4.9,
    reviews: 620,
    specs: ['100 Denier Damask Yarn', 'Ultrasonic Cut Edges', 'Oeko-Tex Standard 100', 'Non-Itch Soft Border'],
    dimensions: 'End Fold, Center Fold, or Mitre Fold',
    desc: 'Luxury woven damask neck labels for apparel brands, designers, and exporters. Woven on computerized jacquard looms with ultrasonic soft edges.',
    fullDesc: 'Non-itch, skin-safe micro-polyester yarns with exceptional detail for tiny text, washing symbols, and intricate crests.',
    tiers: [
      { qty: 1000, rate: 1 },
      { qty: 2500, rate: 1 },
      { qty: 5000, rate: 1 },
      { qty: 20000, rate: 1 }
    ]
  },
  {
    id: 'prod-9',
    slug: 'satin-wash-care-labels',
    title: 'Printed Satin & Cotton Wash-Care Labels',
    category: 'label',
    categoryLabel: 'Labels & Hang Tags',
    image: '/assets/labels.jpg',
    price: 1,
    startingAt: 1,
    moq: 1,
    badge: '50+ WASH TESTED',
    badgeClass: 'popular',
    rating: 4.8,
    reviews: 310,
    specs: ['Silky Double-Face Satin', 'AZO-Free Inks', '50+ Industrial Washes', 'Multi-Language Layout'],
    dimensions: '25mm, 30mm, 38mm, 50mm Widths',
    desc: 'Silky smooth woven-edge satin and organic cotton wash-care instruction tags. Wash-tested to survive 50+ launderings without fading.',
    fullDesc: 'Compliant with international textile tagging regulations for fiber content, care icons, origin, and importer GST/factory details.',
    tiers: [
      { qty: 1000, rate: 1 },
      { qty: 2500, rate: 1 },
      { qty: 5000, rate: 1 },
      { qty: 20000, rate: 1 }
    ]
  },
  {
    id: 'prod-10',
    slug: 'brand-hang-tags',
    title: 'Custom Brand Hang Tags & Swing Tickets',
    category: 'label',
    categoryLabel: 'Labels & Hang Tags',
    image: '/assets/tags.jpg',
    price: 1,
    startingAt: 1,
    moq: 1,
    badge: 'LUXURY BOARD',
    badgeClass: 'popular',
    rating: 4.9,
    reviews: 440,
    specs: ['350-600 GSM Art Card', 'Gold Foil / UV Spot', 'Eyelet & String Options', 'Custom Die-Cut Shapes'],
    dimensions: 'Custom rectangular, arched, or die-cut shape',
    desc: 'Heavyweight apparel swing tags with matte velvet touch, spot UV highlights, metal eyelets, and wax cords for boutique fashion houses.',
    fullDesc: 'Gives garments a high-end designer showroom appearance. Options include black-core boards, textured krafts, and foil stamping.',
    tiers: [
      { qty: 500, rate: 1 },
      { qty: 1000, rate: 1 },
      { qty: 2500, rate: 1 },
      { qty: 10000, rate: 1 }
    ]
  },
  {
    id: 'prod-11',
    slug: 'chromo-gumming-stickers',
    title: 'Custom Die-Cut Gumming Paper Stickers',
    category: 'sticker',
    categoryLabel: 'Stickers & Rolls',
    image: '/assets/gumming.jpg',
    price: 1,
    startingAt: 1,
    moq: 1,
    badge: 'STRONG TACK',
    badgeClass: 'popular',
    rating: 4.8,
    reviews: 350,
    specs: ['80 GSM Chromo Paper', 'Permanent Acrylic Tack', 'Easy-Peel Split Back', 'Sheet or Roll Form'],
    dimensions: 'Custom rounds, squares, and contours',
    desc: 'High-tack self-adhesive chromo gumming stickers for box sealing, product branding, packaging labels, and invoice envelopes.',
    fullDesc: 'Bonds instantly to cardboard, kraft paper, glass, and plastic without lifting at edges. Fast automatic dispensing available.',
    tiers: [
      { qty: 1000, rate: 1 },
      { qty: 2500, rate: 1 },
      { qty: 5000, rate: 1 },
      { qty: 20000, rate: 1 }
    ]
  },
  {
    id: 'prod-12',
    slug: 'waterproof-vinyl-stickers',
    title: 'Waterproof Vinyl & Branding Stickers',
    category: 'sticker',
    categoryLabel: 'Stickers & Rolls',
    image: '/assets/stickers.jpg',
    price: 1,
    startingAt: 1,
    moq: 1,
    badge: '100% WATERPROOF',
    badgeClass: 'factory-rate',
    rating: 4.9,
    reviews: 290,
    specs: ['100 Micron PVC Vinyl', 'Scratch-Proof Matte/Gloss', 'Weather & Oil Resistant', 'Residue-Free Peel'],
    dimensions: 'Custom shapes and individual cut stickers',
    desc: 'Weatherproof vinyl decals, transparent branding stickers, and refrigerated packaging labels resistant to water, oils, and deep-freeze.',
    fullDesc: 'UV-cured pigment inks will not bleed in rain, moisture, or cold storage. Perfect for cosmetics, beverages, and laptop decals.',
    tiers: [
      { qty: 250, rate: 1 },
      { qty: 1000, rate: 1 },
      { qty: 2500, rate: 1 },
      { qty: 10000, rate: 1 }
    ]
  },
  {
    id: 'prod-13',
    slug: 'barcode-thermal-roll-labels',
    title: 'Industrial Barcode & Thermal Roll Labels',
    category: 'sticker',
    categoryLabel: 'Stickers & Rolls',
    image: '/assets/barcode_sticker.jpg',
    price: 1,
    startingAt: 1,
    moq: 1,
    badge: 'PRINTER COMPLIANT',
    badgeClass: 'popular',
    rating: 4.8,
    reviews: 215,
    specs: ['Direct Thermal & TTR', 'Tough Hot-Melt Adhesive', 'Zebra / TSC Compatible', '1000 Labels Per Roll'],
    dimensions: '50×25mm, 100×150mm (4×6 shipping)',
    desc: 'High-density barcode labels on rolls for Zebra, TVS, TSC, and desktop thermal printers. Perfect for Amazon FBA & courier shipping bills.',
    fullDesc: 'Crisp scan readability without head wear. Jam-free sensor gap spacing and high thermal sensitivity.',
    tiers: [
      { qty: 10, rate: 1 },
      { qty: 50, rate: 1 },
      { qty: 100, rate: 1 },
      { qty: 500, rate: 1 }
    ]
  },
  {
    id: 'prod-14',
    slug: 'bottle-jar-packaging-labels',
    title: 'Custom Bottle & Jar Packaging Labels',
    category: 'label',
    categoryLabel: 'Labels & Hang Tags',
    image: '/assets/bottle_label.jpg',
    price: 1,
    startingAt: 1,
    moq: 1,
    badge: 'OIL RESISTANT',
    badgeClass: 'popular',
    rating: 4.8,
    reviews: 175,
    specs: ['BOPP Waterproof Film', 'Metallic Hot Foil Accents', 'Curved Surface Grip', 'Roll or Sheet'],
    dimensions: 'Wrap-around or front/back dual label sets',
    desc: 'High-adhesion wrap-around product labels for honey jars, cosmetic bottles, food jars, and chemicals with curved glass grip.',
    fullDesc: 'Engineered specifically for cylindrical glass and HDPE plastic bottles so edges never flag or buckle over time.',
    tiers: [
      { qty: 500, rate: 1 },
      { qty: 1000, rate: 1 },
      { qty: 2500, rate: 1 },
      { qty: 10000, rate: 1 }
    ]
  },
  {
    id: 'prod-15',
    slug: 'tagless-heat-transfer-labels',
    title: 'Tagless Heat Transfer Garment Labels',
    category: 'label',
    categoryLabel: 'Labels & Hang Tags',
    image: '/assets/heat_transfer.jpg',
    price: 1,
    startingAt: 1,
    moq: 1,
    badge: 'ZERO-ITCH',
    badgeClass: 'popular',
    rating: 4.9,
    reviews: 260,
    specs: ['Plastisol / Silicone Base', 'Heat-Press Applied', 'High Stretch Elasticity', 'Zero Body Itch'],
    dimensions: 'Neck logos, size markings, athletic gear',
    desc: 'Direct-to-fabric heat seal neck prints for activewear, sportswear, innerwear, and t-shirts. 100% tagless comfort.',
    fullDesc: 'Transfers in 10-12 seconds at 150°C. Stretchable rubberized ink does not crack when fabric is pulled and endures heavy domestic washing.',
    tiers: [
      { qty: 1000, rate: 1 },
      { qty: 2500, rate: 1 },
      { qty: 5000, rate: 1 },
      { qty: 20000, rate: 1 }
    ]
  }
];
