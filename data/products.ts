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
  images?: string[];
  variants?: any[];
  tiers: PriceTier[];
  flag_hot_deal?: boolean;
  flag_mega_sale?: boolean;
  flag_new_arrival?: boolean;
  flag_best_seller?: boolean;
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
  },
  {
    id: 'prod-3ply-20',
    slug: "3-ply-corrugated-box-3-5x3-5x3-5-inch",
    title: "3-Ply Brown Corrugated Box (3.5\" × 3.5\" × 3.5\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-3-5x3-5x3-5-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-3-5x3-5x3-5-inch_0.webp","/assets/boxes/3-ply-corrugated-box-3-5x3-5x3-5-inch_1.webp","/assets/boxes/3-ply-corrugated-box-3-5x3-5x3-5-inch_2.webp"],
    price: 5.68,
    startingAt: 5.68,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "3.5\" × 3.5\" × 3.5\""],
    dimensions: "3.5\" × 3.5\" × 3.5\" (8.9 × 8.9 × 8.9 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (3.5\" × 3.5\" × 3.5\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 5.68,
                "label": "Pack of 50 (₹284)"
          },
          {
                "qty": 100,
                "rate": 5.69,
                "label": "Pack of 100 (₹569)"
          },
          {
                "qty": 500,
                "rate": 5.6,
                "label": "Pack of 500 (₹2,799)"
          },
          {
                "qty": 1000,
                "rate": 5.5,
                "label": "Pack of 1000 (₹5,499)"
          }
    ]
  },
  {
    id: 'prod-3ply-21',
    slug: "3-ply-corrugated-box-4x4x4-inch",
    title: "3-Ply Brown Corrugated Box (4\" × 4\" × 4\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-4x4x4-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-4x4x4-inch_0.webp","/assets/boxes/3-ply-corrugated-box-4x4x4-inch_1.webp","/assets/boxes/3-ply-corrugated-box-4x4x4-inch_2.webp"],
    price: 6.58,
    startingAt: 6.58,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "4\" × 4\" × 4\""],
    dimensions: "4\" × 4\" × 4\" (10.2 × 10.2 × 10.2 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (4\" × 4\" × 4\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 6.58,
                "label": "Pack of 50 (₹329)"
          },
          {
                "qty": 100,
                "rate": 6.19,
                "label": "Pack of 100 (₹619)"
          },
          {
                "qty": 500,
                "rate": 6,
                "label": "Pack of 500 (₹2,999)"
          },
          {
                "qty": 1000,
                "rate": 5.8,
                "label": "Pack of 1000 (₹5,799)"
          }
    ]
  },
  {
    id: 'prod-3ply-22',
    slug: "3-ply-corrugated-box-4-5x4-5x2-inch",
    title: "3-Ply Brown Corrugated Box (4.5\" × 4.5\" × 2\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-4-5x4-5x2-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-4-5x4-5x2-inch_0.webp","/assets/boxes/3-ply-corrugated-box-4-5x4-5x2-inch_1.webp","/assets/boxes/3-ply-corrugated-box-4-5x4-5x2-inch_2.webp"],
    price: 5.68,
    startingAt: 5.68,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "4.5\" × 4.5\" × 2\""],
    dimensions: "4.5\" × 4.5\" × 2\" (11.4 × 11.4 × 5.1 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (4.5\" × 4.5\" × 2\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 5.68,
                "label": "Pack of 50 (₹284)"
          },
          {
                "qty": 100,
                "rate": 5.69,
                "label": "Pack of 100 (₹569)"
          },
          {
                "qty": 500,
                "rate": 5.6,
                "label": "Pack of 500 (₹2,799)"
          },
          {
                "qty": 1000,
                "rate": 5.5,
                "label": "Pack of 1000 (₹5,499)"
          }
    ]
  },
  {
    id: 'prod-3ply-23',
    slug: "3-ply-corrugated-box-5x4x2-5-inch",
    title: "3-Ply Brown Corrugated Box (5\" × 4\" × 2.5\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-5x4x2-5-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-5x4x2-5-inch_0.webp","/assets/boxes/3-ply-corrugated-box-5x4x2-5-inch_1.webp","/assets/boxes/3-ply-corrugated-box-5x4x2-5-inch_2.webp"],
    price: 6.25,
    startingAt: 6.25,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "5\" × 4\" × 2.5\""],
    dimensions: "5\" × 4\" × 2.5\" (12.7 × 10.2 × 6.3 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (5\" × 4\" × 2.5\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 6.25,
                "label": "Pack of 50 (₹312)"
          },
          {
                "qty": 100,
                "rate": 6.1,
                "label": "Pack of 100 (₹610)"
          },
          {
                "qty": 500,
                "rate": 5.52,
                "label": "Pack of 500 (₹2,761)"
          },
          {
                "qty": 1000,
                "rate": 5.7,
                "label": "Pack of 1000 (₹5,699)"
          }
    ]
  },
  {
    id: 'prod-3ply-24',
    slug: "3-ply-corrugated-box-5x4x3-5-inch",
    title: "3-Ply Brown Corrugated Box (5\" × 4\" × 3.5\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-5x4x3-5-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-5x4x3-5-inch_0.webp","/assets/boxes/3-ply-corrugated-box-5x4x3-5-inch_1.webp","/assets/boxes/3-ply-corrugated-box-5x4x3-5-inch_2.webp"],
    price: 6.63,
    startingAt: 6.63,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "5\" × 4\" × 3.5\""],
    dimensions: "5\" × 4\" × 3.5\" (12.7 × 10.2 × 8.9 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (5\" × 4\" × 3.5\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 6.63,
                "label": "Pack of 50 (₹331)"
          },
          {
                "qty": 100,
                "rate": 6.17,
                "label": "Pack of 100 (₹617)"
          },
          {
                "qty": 500,
                "rate": 6.1,
                "label": "Pack of 500 (₹3,048)"
          },
          {
                "qty": 1000,
                "rate": 5.9,
                "label": "Pack of 1000 (₹5,905)"
          }
    ]
  },
  {
    id: 'prod-3ply-25',
    slug: "3-ply-corrugated-box-5x5x5-inch",
    title: "3-Ply Brown Corrugated Box (5\" × 5\" × 5\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-5x5x5-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-5x5x5-inch_0.webp","/assets/boxes/3-ply-corrugated-box-5x5x5-inch_1.webp","/assets/boxes/3-ply-corrugated-box-5x5x5-inch_2.webp"],
    price: 7.58,
    startingAt: 7.58,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "5\" × 5\" × 5\""],
    dimensions: "5\" × 5\" × 5\" (12.7 × 12.7 × 12.7 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (5\" × 5\" × 5\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 7.58,
                "label": "Pack of 50 (₹379)"
          },
          {
                "qty": 100,
                "rate": 7.52,
                "label": "Pack of 100 (₹752)"
          },
          {
                "qty": 500,
                "rate": 7.5,
                "label": "Pack of 500 (₹3,748)"
          },
          {
                "qty": 1000,
                "rate": 7,
                "label": "Pack of 1000 (₹6,999)"
          }
    ]
  },
  {
    id: 'prod-3ply-26',
    slug: "3-ply-corrugated-box-6x6x6-inch",
    title: "3-Ply Brown Corrugated Box (6\" × 6\" × 6\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-6x6x6-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-6x6x6-inch_0.webp","/assets/boxes/3-ply-corrugated-box-6x6x6-inch_1.webp","/assets/boxes/3-ply-corrugated-box-6x6x6-inch_2.webp"],
    price: 12.5,
    startingAt: 12.5,
    moq: 25,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "6\" × 6\" × 6\""],
    dimensions: "6\" × 6\" × 6\" (15.2 × 15.2 × 15.2 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (6\" × 6\" × 6\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 25,
                "rate": 12.5,
                "label": "Pack of 25 (₹312)"
          },
          {
                "qty": 50,
                "rate": 12.19,
                "label": "Pack of 50 (₹610)"
          },
          {
                "qty": 500,
                "rate": 11.81,
                "label": "Pack of 500 (₹5,905)"
          },
          {
                "qty": 1000,
                "rate": 11.43,
                "label": "Pack of 1000 (₹11,429)"
          }
    ]
  },
  {
    id: 'prod-3ply-27',
    slug: "3-ply-corrugated-box-6x6x3-inch",
    title: "3-Ply Brown Corrugated Box (6\" × 6\" × 3\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-6x6x3-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-6x6x3-inch_0.webp","/assets/boxes/3-ply-corrugated-box-6x6x3-inch_1.webp","/assets/boxes/3-ply-corrugated-box-6x6x3-inch_2.webp"],
    price: 9.45,
    startingAt: 9.45,
    moq: 25,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "6\" × 6\" × 3\""],
    dimensions: "6\" × 6\" × 3\" (15.2 × 15.2 × 7.6 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (6\" × 6\" × 3\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 25,
                "rate": 9.45,
                "label": "Pack of 25 (₹236)"
          },
          {
                "qty": 50,
                "rate": 9.33,
                "label": "Pack of 50 (₹467)"
          },
          {
                "qty": 500,
                "rate": 9.14,
                "label": "Pack of 500 (₹4,571)"
          },
          {
                "qty": 1000,
                "rate": 9.05,
                "label": "Pack of 1000 (₹9,048)"
          }
    ]
  },
  {
    id: 'prod-3ply-28',
    slug: "3-ply-corrugated-box-6x3x3-inch",
    title: "3-Ply Brown Corrugated Box (6\" × 3\" × 3\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-6x3x3-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-6x3x3-inch_0.webp","/assets/boxes/3-ply-corrugated-box-6x3x3-inch_1.webp","/assets/boxes/3-ply-corrugated-box-6x3x3-inch_2.webp"],
    price: 6.25,
    startingAt: 6.25,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "6\" × 3\" × 3\""],
    dimensions: "6\" × 3\" × 3\" (15.2 × 7.6 × 7.6 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (6\" × 3\" × 3\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 6.25,
                "label": "Pack of 50 (₹312)"
          },
          {
                "qty": 100,
                "rate": 6.1,
                "label": "Pack of 100 (₹610)"
          },
          {
                "qty": 500,
                "rate": 6.1,
                "label": "Pack of 500 (₹3,048)"
          },
          {
                "qty": 1000,
                "rate": 5.9,
                "label": "Pack of 1000 (₹5,905)"
          }
    ]
  },
  {
    id: 'prod-3ply-29',
    slug: "3-ply-corrugated-box-6x5x2-inch",
    title: "3-Ply Brown Corrugated Box (6\" × 5\" × 2\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-6x5x2-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-6x5x2-inch_0.webp","/assets/boxes/3-ply-corrugated-box-6x5x2-inch_1.webp","/assets/boxes/3-ply-corrugated-box-6x5x2-inch_2.webp"],
    price: 6.63,
    startingAt: 6.63,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "6\" × 5\" × 2\""],
    dimensions: "6\" × 5\" × 2\" (15.2 × 12.7 × 5.1 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (6\" × 5\" × 2\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 6.63,
                "label": "Pack of 50 (₹331)"
          },
          {
                "qty": 100,
                "rate": 6.48,
                "label": "Pack of 100 (₹648)"
          },
          {
                "qty": 500,
                "rate": 6.4,
                "label": "Pack of 500 (₹3,199)"
          },
          {
                "qty": 1000,
                "rate": 6.28,
                "label": "Pack of 1000 (₹6,280)"
          }
    ]
  },
  {
    id: 'prod-3ply-30',
    slug: "3-ply-corrugated-box-6x4x4-inch",
    title: "3-Ply Brown Corrugated Box (6\" × 4\" × 4\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-6x4x4-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-6x4x4-inch_0.webp","/assets/boxes/3-ply-corrugated-box-6x4x4-inch_1.webp","/assets/boxes/3-ply-corrugated-box-6x4x4-inch_2.webp"],
    price: 6.63,
    startingAt: 6.63,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "6\" × 4\" × 4\""],
    dimensions: "6\" × 4\" × 4\" (15.2 × 10.2 × 10.2 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (6\" × 4\" × 4\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 6.63,
                "label": "Pack of 50 (₹331)"
          },
          {
                "qty": 100,
                "rate": 6.48,
                "label": "Pack of 100 (₹648)"
          },
          {
                "qty": 500,
                "rate": 6.4,
                "label": "Pack of 500 (₹3,199)"
          },
          {
                "qty": 1000,
                "rate": 6.28,
                "label": "Pack of 1000 (₹6,280)"
          }
    ]
  },
  {
    id: 'prod-3ply-31',
    slug: "3-ply-corrugated-box-7x7x7-inch",
    title: "3-Ply Brown Corrugated Box (7\" × 7\" × 7\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-7x7x7-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-7x7x7-inch_0.webp","/assets/boxes/3-ply-corrugated-box-7x7x7-inch_1.webp","/assets/boxes/3-ply-corrugated-box-7x7x7-inch_2.webp"],
    price: 15.16,
    startingAt: 15.16,
    moq: 25,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "7\" × 7\" × 7\""],
    dimensions: "7\" × 7\" × 7\" (17.8 × 17.8 × 17.8 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (7\" × 7\" × 7\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 25,
                "rate": 15.16,
                "label": "Pack of 25 (₹379)"
          },
          {
                "qty": 50,
                "rate": 14.86,
                "label": "Pack of 50 (₹743)"
          },
          {
                "qty": 500,
                "rate": 14.67,
                "label": "Pack of 500 (₹7,333)"
          },
          {
                "qty": 1000,
                "rate": 14.29,
                "label": "Pack of 1000 (₹14,286)"
          }
    ]
  },
  {
    id: 'prod-3ply-32',
    slug: "3-ply-corrugated-box-7x4x2-inch",
    title: "3-Ply Brown Corrugated Box (7\" × 4\" × 2\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-7x4x2-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-7x4x2-inch_0.webp","/assets/boxes/3-ply-corrugated-box-7x4x2-inch_1.webp","/assets/boxes/3-ply-corrugated-box-7x4x2-inch_2.webp"],
    price: 7.54,
    startingAt: 7.54,
    moq: 25,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "7\" × 4\" × 2\""],
    dimensions: "7\" × 4\" × 2\" (17.8 × 10.2 × 5.1 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (7\" × 4\" × 2\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 25,
                "rate": 7.54,
                "label": "Pack of 25 (₹189)"
          },
          {
                "qty": 50,
                "rate": 6.25,
                "label": "Pack of 50 (₹312)"
          },
          {
                "qty": 500,
                "rate": 6.1,
                "label": "Pack of 500 (₹3,048)"
          },
          {
                "qty": 1000,
                "rate": 5.9,
                "label": "Pack of 1000 (₹5,905)"
          }
    ]
  },
  {
    id: 'prod-3ply-33',
    slug: "3-ply-corrugated-box-7x4x3-5-inch",
    title: "3-Ply Brown Corrugated Box (7\" × 4\" × 3.5\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-7x4x3-5-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-7x4x3-5-inch_0.webp","/assets/boxes/3-ply-corrugated-box-7x4x3-5-inch_1.webp","/assets/boxes/3-ply-corrugated-box-7x4x3-5-inch_2.webp"],
    price: 6.63,
    startingAt: 6.63,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "7\" × 4\" × 3.5\""],
    dimensions: "7\" × 4\" × 3.5\" (17.8 × 10.2 × 8.9 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (7\" × 4\" × 3.5\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 6.63,
                "label": "Pack of 50 (₹331)"
          },
          {
                "qty": 100,
                "rate": 6.48,
                "label": "Pack of 100 (₹648)"
          },
          {
                "qty": 500,
                "rate": 6.4,
                "label": "Pack of 500 (₹3,199)"
          },
          {
                "qty": 1000,
                "rate": 6.28,
                "label": "Pack of 1000 (₹6,280)"
          }
    ]
  },
  {
    id: 'prod-3ply-34',
    slug: "3-ply-corrugated-box-7x5-25x4-25-inch",
    title: "3-Ply Brown Corrugated Box (7\" × 5.25\" × 4.25\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-7x5-25x4-25-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-7x5-25x4-25-inch_0.webp","/assets/boxes/3-ply-corrugated-box-7x5-25x4-25-inch_1.webp","/assets/boxes/3-ply-corrugated-box-7x5-25x4-25-inch_2.webp"],
    price: 9.45,
    startingAt: 9.45,
    moq: 25,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "7\" × 5.25\" × 4.25\""],
    dimensions: "7\" × 5.25\" × 4.25\" (17.8 × 13.3 × 10.8 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (7\" × 5.25\" × 4.25\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 25,
                "rate": 9.45,
                "label": "Pack of 25 (₹236)"
          },
          {
                "qty": 50,
                "rate": 9.33,
                "label": "Pack of 50 (₹467)"
          },
          {
                "qty": 500,
                "rate": 9.14,
                "label": "Pack of 500 (₹4,571)"
          },
          {
                "qty": 1000,
                "rate": 9.05,
                "label": "Pack of 1000 (₹9,048)"
          }
    ]
  },
  {
    id: 'prod-3ply-35',
    slug: "3-ply-corrugated-box-7-5x4-5x3-5-inch",
    title: "3-Ply Brown Corrugated Box (7.5\" × 4.5\" × 3.5\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-7-5x4-5x3-5-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-7-5x4-5x3-5-inch_0.webp","/assets/boxes/3-ply-corrugated-box-7-5x4-5x3-5-inch_1.webp","/assets/boxes/3-ply-corrugated-box-7-5x4-5x3-5-inch_2.webp"],
    price: 8.15,
    startingAt: 8.15,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "7.5\" × 4.5\" × 3.5\""],
    dimensions: "7.5\" × 4.5\" × 3.5\" (19.1 × 11.4 × 8.9 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (7.5\" × 4.5\" × 3.5\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 8.15,
                "label": "Pack of 50 (₹408)"
          },
          {
                "qty": 100,
                "rate": 7.6,
                "label": "Pack of 100 (₹760)"
          },
          {
                "qty": 500,
                "rate": 7.5,
                "label": "Pack of 500 (₹3,749)"
          },
          {
                "qty": 1000,
                "rate": 7.3,
                "label": "Pack of 1000 (₹7,298)"
          }
    ]
  },
  {
    id: 'prod-3ply-36',
    slug: "3-ply-corrugated-box-8x8x3-inch",
    title: "3-Ply Brown Corrugated Box (8\" × 8\" × 3\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-8x8x3-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-8x8x3-inch_0.webp","/assets/boxes/3-ply-corrugated-box-8x8x3-inch_1.webp","/assets/boxes/3-ply-corrugated-box-8x8x3-inch_2.webp"],
    price: 14.48,
    startingAt: 14.48,
    moq: 25,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "8\" × 8\" × 3\""],
    dimensions: "8\" × 8\" × 3\" (20.3 × 20.3 × 7.6 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (8\" × 8\" × 3\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 25,
                "rate": 14.48,
                "label": "Pack of 25 (₹362)"
          },
          {
                "qty": 50,
                "rate": 14.29,
                "label": "Pack of 50 (₹714)"
          },
          {
                "qty": 500,
                "rate": 14.1,
                "label": "Pack of 500 (₹7,048)"
          },
          {
                "qty": 1000,
                "rate": 14.86,
                "label": "Pack of 1000 (₹14,857)"
          }
    ]
  },
  {
    id: 'prod-3ply-37',
    slug: "3-ply-corrugated-box-8x5x3-5-inch",
    title: "3-Ply Brown Corrugated Box (8\" × 5\" × 3.5\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-8x5x3-5-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-8x5x3-5-inch_0.webp","/assets/boxes/3-ply-corrugated-box-8x5x3-5-inch_1.webp","/assets/boxes/3-ply-corrugated-box-8x5x3-5-inch_2.webp"],
    price: 9.45,
    startingAt: 9.45,
    moq: 25,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "8\" × 5\" × 3.5\""],
    dimensions: "8\" × 5\" × 3.5\" (20.3 × 12.7 × 8.9 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (8\" × 5\" × 3.5\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 25,
                "rate": 9.45,
                "label": "Pack of 25 (₹236)"
          },
          {
                "qty": 50,
                "rate": 9.14,
                "label": "Pack of 50 (₹457)"
          },
          {
                "qty": 500,
                "rate": 8.38,
                "label": "Pack of 500 (₹4,190)"
          },
          {
                "qty": 1000,
                "rate": 8.76,
                "label": "Pack of 1000 (₹8,762)"
          }
    ]
  },
  {
    id: 'prod-3ply-38',
    slug: "3-ply-corrugated-box-8x5x2-inch",
    title: "3-Ply Brown Corrugated Box (8\" × 5\" × 2\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-8x5x2-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-8x5x2-inch_0.webp","/assets/boxes/3-ply-corrugated-box-8x5x2-inch_1.webp","/assets/boxes/3-ply-corrugated-box-8x5x2-inch_2.webp"],
    price: 7.58,
    startingAt: 7.58,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "8\" × 5\" × 2\""],
    dimensions: "8\" × 5\" × 2\" (20.3 × 12.7 × 5.1 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (8\" × 5\" × 2\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 7.58,
                "label": "Pack of 50 (₹379)"
          },
          {
                "qty": 100,
                "rate": 7.41,
                "label": "Pack of 100 (₹741)"
          },
          {
                "qty": 500,
                "rate": 7.24,
                "label": "Pack of 500 (₹3,619)"
          },
          {
                "qty": 1000,
                "rate": 7.1,
                "label": "Pack of 1000 (₹7,095)"
          }
    ]
  },
  {
    id: 'prod-3ply-39',
    slug: "3-ply-corrugated-box-8x4x4-inch",
    title: "3-Ply Brown Corrugated Box (8\" × 4\" × 4\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-8x4x4-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-8x4x4-inch_0.webp","/assets/boxes/3-ply-corrugated-box-8x4x4-inch_1.webp","/assets/boxes/3-ply-corrugated-box-8x4x4-inch_2.webp"],
    price: 8.15,
    startingAt: 8.15,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "8\" × 4\" × 4\""],
    dimensions: "8\" × 4\" × 4\" (20.3 × 10.2 × 10.2 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (8\" × 4\" × 4\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 8.15,
                "label": "Pack of 50 (₹408)"
          },
          {
                "qty": 100,
                "rate": 7.6,
                "label": "Pack of 100 (₹760)"
          },
          {
                "qty": 500,
                "rate": 7.5,
                "label": "Pack of 500 (₹3,749)"
          },
          {
                "qty": 1000,
                "rate": 7.3,
                "label": "Pack of 1000 (₹7,298)"
          }
    ]
  },
  {
    id: 'prod-3ply-40',
    slug: "3-ply-corrugated-box-8x4x8-inch",
    title: "3-Ply Brown Corrugated Box (8\" × 4\" × 8\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-8x4x8-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-8x4x8-inch_0.webp","/assets/boxes/3-ply-corrugated-box-8x4x8-inch_1.webp","/assets/boxes/3-ply-corrugated-box-8x4x8-inch_2.webp"],
    price: 13.26,
    startingAt: 13.26,
    moq: 25,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "8\" × 4\" × 8\""],
    dimensions: "8\" × 4\" × 8\" (20.3 × 10.2 × 20.3 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (8\" × 4\" × 8\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 25,
                "rate": 13.26,
                "label": "Pack of 25 (₹331)"
          },
          {
                "qty": 50,
                "rate": 12.91,
                "label": "Pack of 50 (₹646)"
          },
          {
                "qty": 500,
                "rate": 12.57,
                "label": "Pack of 500 (₹6,286)"
          },
          {
                "qty": 1000,
                "rate": 11.9,
                "label": "Pack of 1000 (₹11,905)"
          }
    ]
  },
  {
    id: 'prod-3ply-41',
    slug: "3-ply-corrugated-box-9x7-5x4-5-inch",
    title: "3-Ply Brown Corrugated Box (9\" × 7.5\" × 4.5\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-9x7-5x4-5-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-9x7-5x4-5-inch_0.webp","/assets/boxes/3-ply-corrugated-box-9x7-5x4-5-inch_1.webp","/assets/boxes/3-ply-corrugated-box-9x7-5x4-5-inch_2.webp"],
    price: 14.86,
    startingAt: 14.86,
    moq: 25,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "9\" × 7.5\" × 4.5\""],
    dimensions: "9\" × 7.5\" × 4.5\" (22.9 × 19.1 × 11.4 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (9\" × 7.5\" × 4.5\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 25,
                "rate": 14.86,
                "label": "Pack of 25 (₹371)"
          },
          {
                "qty": 50,
                "rate": 14.67,
                "label": "Pack of 50 (₹733)"
          },
          {
                "qty": 500,
                "rate": 14.48,
                "label": "Pack of 500 (₹7,238)"
          },
          {
                "qty": 1000,
                "rate": 14.29,
                "label": "Pack of 1000 (₹14,286)"
          }
    ]
  },
  {
    id: 'prod-3ply-42',
    slug: "3-ply-corrugated-box-9x6x6-inch",
    title: "3-Ply Brown Corrugated Box (9\" × 6\" × 6\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-9x6x6-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-9x6x6-inch_0.webp","/assets/boxes/3-ply-corrugated-box-9x6x6-inch_1.webp","/assets/boxes/3-ply-corrugated-box-9x6x6-inch_2.webp"],
    price: 14.86,
    startingAt: 14.86,
    moq: 25,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "9\" × 6\" × 6\""],
    dimensions: "9\" × 6\" × 6\" (22.9 × 15.2 × 15.2 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (9\" × 6\" × 6\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 25,
                "rate": 14.86,
                "label": "Pack of 25 (₹371)"
          },
          {
                "qty": 50,
                "rate": 14.25,
                "label": "Pack of 50 (₹712)"
          },
          {
                "qty": 500,
                "rate": 14.7,
                "label": "Pack of 500 (₹7,349)"
          },
          {
                "qty": 1000,
                "rate": 13.81,
                "label": "Pack of 1000 (₹13,810)"
          }
    ]
  },
  {
    id: 'prod-3ply-43',
    slug: "3-ply-corrugated-box-9x3x3-inch",
    title: "3-Ply Brown Corrugated Box (9\" × 3\" × 3\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-9x3x3-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-9x3x3-inch_0.webp","/assets/boxes/3-ply-corrugated-box-9x3x3-inch_1.webp","/assets/boxes/3-ply-corrugated-box-9x3x3-inch_2.webp"],
    price: 7.58,
    startingAt: 7.58,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "9\" × 3\" × 3\""],
    dimensions: "9\" × 3\" × 3\" (22.9 × 7.6 × 7.6 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (9\" × 3\" × 3\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 7.58,
                "label": "Pack of 50 (₹379)"
          },
          {
                "qty": 100,
                "rate": 7.12,
                "label": "Pack of 100 (₹712)"
          },
          {
                "qty": 500,
                "rate": 7.05,
                "label": "Pack of 500 (₹3,524)"
          },
          {
                "qty": 1000,
                "rate": 6.86,
                "label": "Pack of 1000 (₹6,857)"
          }
    ]
  },
  {
    id: 'prod-3ply-44',
    slug: "3-ply-corrugated-box-9x6x3-inch",
    title: "3-Ply Brown Corrugated Box (9\" × 6\" × 3\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-9x6x3-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-9x6x3-inch_0.webp","/assets/boxes/3-ply-corrugated-box-9x6x3-inch_1.webp","/assets/boxes/3-ply-corrugated-box-9x6x3-inch_2.webp"],
    price: 9.45,
    startingAt: 9.45,
    moq: 25,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "9\" × 6\" × 3\""],
    dimensions: "9\" × 6\" × 3\" (22.9 × 15.2 × 7.6 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (9\" × 6\" × 3\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 25,
                "rate": 9.45,
                "label": "Pack of 25 (₹236)"
          },
          {
                "qty": 50,
                "rate": 9.33,
                "label": "Pack of 50 (₹467)"
          },
          {
                "qty": 500,
                "rate": 9.14,
                "label": "Pack of 500 (₹4,571)"
          },
          {
                "qty": 1000,
                "rate": 9.05,
                "label": "Pack of 1000 (₹9,048)"
          }
    ]
  },
  {
    id: 'prod-3ply-45',
    slug: "3-ply-corrugated-box-9x4x2-inch",
    title: "3-Ply Brown Corrugated Box (9\" × 4\" × 2\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-9x4x2-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-9x4x2-inch_0.webp","/assets/boxes/3-ply-corrugated-box-9x4x2-inch_1.webp","/assets/boxes/3-ply-corrugated-box-9x4x2-inch_2.webp"],
    price: 7.58,
    startingAt: 7.58,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "9\" × 4\" × 2\""],
    dimensions: "9\" × 4\" × 2\" (22.9 × 10.2 × 5.1 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (9\" × 4\" × 2\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 7.58,
                "label": "Pack of 50 (₹379)"
          },
          {
                "qty": 100,
                "rate": 7.41,
                "label": "Pack of 100 (₹741)"
          },
          {
                "qty": 500,
                "rate": 7.14,
                "label": "Pack of 500 (₹3,571)"
          },
          {
                "qty": 1000,
                "rate": 6.95,
                "label": "Pack of 1000 (₹6,952)"
          }
    ]
  },
  {
    id: 'prod-3ply-46',
    slug: "3-ply-corrugated-box-9x6x4-5-inch",
    title: "3-Ply Brown Corrugated Box (9\" × 6\" × 4.5\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-9x6x4-5-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-9x6x4-5-inch_0.webp","/assets/boxes/3-ply-corrugated-box-9x6x4-5-inch_1.webp","/assets/boxes/3-ply-corrugated-box-9x6x4-5-inch_2.webp"],
    price: 15.16,
    startingAt: 15.16,
    moq: 25,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "9\" × 6\" × 4.5\""],
    dimensions: "9\" × 6\" × 4.5\" (22.9 × 15.2 × 11.4 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (9\" × 6\" × 4.5\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 25,
                "rate": 15.16,
                "label": "Pack of 25 (₹379)"
          },
          {
                "qty": 50,
                "rate": 14.86,
                "label": "Pack of 50 (₹743)"
          },
          {
                "qty": 500,
                "rate": 14.29,
                "label": "Pack of 500 (₹7,143)"
          },
          {
                "qty": 1000,
                "rate": 13.52,
                "label": "Pack of 1000 (₹13,524)"
          }
    ]
  },
  {
    id: 'prod-3ply-47',
    slug: "3-ply-corrugated-box-10x4-5x3-5-inch",
    title: "3-Ply Brown Corrugated Box (10\" × 4.5\" × 3.5\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-10x4-5x3-5-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-10x4-5x3-5-inch_0.webp","/assets/boxes/3-ply-corrugated-box-10x4-5x3-5-inch_1.webp","/assets/boxes/3-ply-corrugated-box-10x4-5x3-5-inch_2.webp"],
    price: 9.45,
    startingAt: 9.45,
    moq: 25,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "10\" × 4.5\" × 3.5\""],
    dimensions: "10\" × 4.5\" × 3.5\" (25.4 × 11.4 × 8.9 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (10\" × 4.5\" × 3.5\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 25,
                "rate": 9.45,
                "label": "Pack of 25 (₹236)"
          },
          {
                "qty": 50,
                "rate": 9.1,
                "label": "Pack of 50 (₹455)"
          },
          {
                "qty": 500,
                "rate": 8.86,
                "label": "Pack of 500 (₹4,429)"
          },
          {
                "qty": 1000,
                "rate": 8.67,
                "label": "Pack of 1000 (₹8,667)"
          }
    ]
  },
  {
    id: 'prod-3ply-48',
    slug: "3-ply-corrugated-box-11x6x5-inch",
    title: "3-Ply Brown Corrugated Box (11\" × 6\" × 5\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-11x6x5-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-11x6x5-inch_0.webp","/assets/boxes/3-ply-corrugated-box-11x6x5-inch_1.webp","/assets/boxes/3-ply-corrugated-box-11x6x5-inch_2.webp"],
    price: 14.86,
    startingAt: 14.86,
    moq: 25,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "11\" × 6\" × 5\""],
    dimensions: "11\" × 6\" × 5\" (27.9 × 15.2 × 12.7 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (11\" × 6\" × 5\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 25,
                "rate": 14.86,
                "label": "Pack of 25 (₹371)"
          },
          {
                "qty": 50,
                "rate": 14.67,
                "label": "Pack of 50 (₹733)"
          },
          {
                "qty": 500,
                "rate": 14.48,
                "label": "Pack of 500 (₹7,238)"
          },
          {
                "qty": 1000,
                "rate": 14.19,
                "label": "Pack of 1000 (₹14,190)"
          }
    ]
  },
  {
    id: 'prod-3ply-49',
    slug: "3-ply-corrugated-box-12x4x3-inch",
    title: "3-Ply Brown Corrugated Box (12\" × 4\" × 3\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-12x4x3-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-12x4x3-inch_0.webp","/assets/boxes/3-ply-corrugated-box-12x4x3-inch_1.webp","/assets/boxes/3-ply-corrugated-box-12x4x3-inch_2.webp"],
    price: 9.45,
    startingAt: 9.45,
    moq: 25,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "12\" × 4\" × 3\""],
    dimensions: "12\" × 4\" × 3\" (30.5 × 10.2 × 7.6 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (12\" × 4\" × 3\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 25,
                "rate": 9.45,
                "label": "Pack of 25 (₹236)"
          },
          {
                "qty": 50,
                "rate": 9.1,
                "label": "Pack of 50 (₹455)"
          },
          {
                "qty": 500,
                "rate": 8.86,
                "label": "Pack of 500 (₹4,429)"
          },
          {
                "qty": 1000,
                "rate": 8.67,
                "label": "Pack of 1000 (₹8,667)"
          }
    ]
  },
  {
    id: 'prod-3ply-50',
    slug: "3-ply-corrugated-box-12x10x8-inch",
    title: "3-Ply Brown Corrugated Box (12\" × 10\" × 8\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-12x10x8-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-12x10x8-inch_0.webp","/assets/boxes/3-ply-corrugated-box-12x10x8-inch_1.webp","/assets/boxes/3-ply-corrugated-box-12x10x8-inch_2.webp"],
    price: 33.33,
    startingAt: 33.33,
    moq: 10,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "12\" × 10\" × 8\""],
    dimensions: "12\" × 10\" × 8\" (30.5 × 25.4 × 20.3 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (12\" × 10\" × 8\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 10,
                "rate": 33.33,
                "label": "Pack of 10 (₹333)"
          },
          {
                "qty": 20,
                "rate": 32.86,
                "label": "Pack of 20 (₹657)"
          },
          {
                "qty": 100,
                "rate": 31.9,
                "label": "Pack of 100 (₹3,190)"
          },
          {
                "qty": 500,
                "rate": 30.48,
                "label": "Pack of 500 (₹15,238)"
          }
    ]
  },
  {
    id: 'prod-3ply-51',
    slug: "3-ply-corrugated-box-12x8x8-inch",
    title: "3-Ply Brown Corrugated Box (12\" × 8\" × 8\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-12x8x8-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-12x8x8-inch_0.webp","/assets/boxes/3-ply-corrugated-box-12x8x8-inch_1.webp","/assets/boxes/3-ply-corrugated-box-12x8x8-inch_2.webp"],
    price: 28.38,
    startingAt: 28.38,
    moq: 10,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "12\" × 8\" × 8\""],
    dimensions: "12\" × 8\" × 8\" (30.5 × 20.3 × 20.3 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (12\" × 8\" × 8\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 10,
                "rate": 28.38,
                "label": "Pack of 10 (₹284)"
          },
          {
                "qty": 20,
                "rate": 28,
                "label": "Pack of 20 (₹560)"
          },
          {
                "qty": 100,
                "rate": 27.14,
                "label": "Pack of 100 (₹2,714)"
          },
          {
                "qty": 500,
                "rate": 25.14,
                "label": "Pack of 500 (₹12,571)"
          }
    ]
  },
  {
    id: 'prod-3ply-52',
    slug: "3-ply-corrugated-box-12x2x12-inch",
    title: "3-Ply Brown Corrugated Box (12\" × 2\" × 12\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-12x2x12-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-12x2x12-inch_0.webp","/assets/boxes/3-ply-corrugated-box-12x2x12-inch_1.webp","/assets/boxes/3-ply-corrugated-box-12x2x12-inch_2.webp"],
    price: 20.38,
    startingAt: 20.38,
    moq: 20,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "12\" × 2\" × 12\""],
    dimensions: "12\" × 2\" × 12\" (30.5 × 5.1 × 30.5 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (12\" × 2\" × 12\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 20,
                "rate": 20.38,
                "label": "Pack of 20 (₹408)"
          },
          {
                "qty": 100,
                "rate": 19.99,
                "label": "Pack of 100 (₹1,999)"
          },
          {
                "qty": 500,
                "rate": 18.86,
                "label": "Pack of 500 (₹9,429)"
          },
          {
                "qty": 1000,
                "rate": 18.57,
                "label": "Pack of 1000 (₹18,571)"
          }
    ]
  },
  {
    id: 'prod-3ply-53',
    slug: "3-ply-corrugated-box-12x11x6-inch",
    title: "3-Ply Brown Corrugated Box (12\" × 11\" × 6\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-12x11x6-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-12x11x6-inch_0.webp","/assets/boxes/3-ply-corrugated-box-12x11x6-inch_1.webp","/assets/boxes/3-ply-corrugated-box-12x11x6-inch_2.webp"],
    price: 33.33,
    startingAt: 33.33,
    moq: 10,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "12\" × 11\" × 6\""],
    dimensions: "12\" × 11\" × 6\" (30.5 × 27.9 × 15.2 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (12\" × 11\" × 6\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 10,
                "rate": 33.33,
                "label": "Pack of 10 (₹333)"
          },
          {
                "qty": 20,
                "rate": 33.09,
                "label": "Pack of 20 (₹662)"
          },
          {
                "qty": 100,
                "rate": 32.38,
                "label": "Pack of 100 (₹3,238)"
          },
          {
                "qty": 500,
                "rate": 32,
                "label": "Pack of 500 (₹16,000)"
          }
    ]
  },
  {
    id: 'prod-3ply-54',
    slug: "3-ply-corrugated-box-15x11x9-inch",
    title: "3-Ply Brown Corrugated Box (15\" × 11\" × 9\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-15x11x9-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-15x11x9-inch_0.webp","/assets/boxes/3-ply-corrugated-box-15x11x9-inch_1.webp","/assets/boxes/3-ply-corrugated-box-15x11x9-inch_2.webp"],
    price: 37.91,
    startingAt: 37.91,
    moq: 10,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "15\" × 11\" × 9\""],
    dimensions: "15\" × 11\" × 9\" (38.1 × 27.9 × 22.9 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (15\" × 11\" × 9\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 10,
                "rate": 37.91,
                "label": "Pack of 10 (₹379)"
          },
          {
                "qty": 20,
                "rate": 37.62,
                "label": "Pack of 20 (₹752)"
          },
          {
                "qty": 100,
                "rate": 37.14,
                "label": "Pack of 100 (₹3,714)"
          },
          {
                "qty": 500,
                "rate": 36.95,
                "label": "Pack of 500 (₹18,476)"
          }
    ]
  },
  {
    id: 'prod-3ply-55',
    slug: "3-ply-corrugated-box-12x8x4-inch",
    title: "3-Ply Brown Corrugated Box (12\" × 8\" × 4\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-12x8x4-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-12x8x4-inch_0.webp","/assets/boxes/3-ply-corrugated-box-12x8x4-inch_1.webp","/assets/boxes/3-ply-corrugated-box-12x8x4-inch_2.webp"],
    price: 20.38,
    startingAt: 20.38,
    moq: 20,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "12\" × 8\" × 4\""],
    dimensions: "12\" × 8\" × 4\" (30.5 × 20.3 × 10.2 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (12\" × 8\" × 4\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 20,
                "rate": 20.38,
                "label": "Pack of 20 (₹408)"
          },
          {
                "qty": 100,
                "rate": 19.99,
                "label": "Pack of 100 (₹1,999)"
          },
          {
                "qty": 500,
                "rate": 18.86,
                "label": "Pack of 500 (₹9,429)"
          },
          {
                "qty": 1000,
                "rate": 18.57,
                "label": "Pack of 1000 (₹18,571)"
          }
    ]
  },
  {
    id: 'prod-3ply-56',
    slug: "3-ply-corrugated-box-4x4x3-inch",
    title: "3-Ply Brown Corrugated Box (4\" × 4\" × 3\")",
    category: 'corrugated',
    categoryLabel: '3 Ply Corrugated Boxes',
    image: "/assets/boxes/3-ply-corrugated-box-4x4x3-inch_0.webp",
    images: ["/assets/boxes/3-ply-corrugated-box-4x4x3-inch_0.webp","/assets/boxes/3-ply-corrugated-box-4x4x3-inch_1.webp","/assets/boxes/3-ply-corrugated-box-4x4x3-inch_2.webp"],
    price: 5.68,
    startingAt: 5.68,
    moq: 50,
    badge: 'DIRECT FACTORY',
    badgeClass: 'factory-rate',
    rating: 4.8,
    reviews: 120,
    specs: ['18-24 BF Virgin Kraft', 'Flute B/C Structure', '100% Eco Recyclable', "4\" × 4\" × 3\""],
    dimensions: "4\" × 4\" × 3\" (10.2 × 10.2 × 7.6 cm)",
    desc: "High-bursting strength 3-ply brown corrugated cardboard shipping box (4\" × 4\" × 3\") for Amazon, Flipkart, eCommerce, and logistics dispatch.",
    fullDesc: "Manufactured with high-bursting index virgin kraft liner and resilient fluting to safeguard retail consignments during courier transit. 18-24 BF kraft liner protects against atmospheric humidity and stacking crush.",
    tiers: [
          {
                "qty": 50,
                "rate": 5.68,
                "label": "Pack of 50 (₹284)"
          },
          {
                "qty": 100,
                "rate": 6.1,
                "label": "Pack of 100 (₹610)"
          },
          {
                "qty": 500,
                "rate": 5.52,
                "label": "Pack of 500 (₹2,761)"
          },
          {
                "qty": 1000,
                "rate": 5.7,
                "label": "Pack of 1000 (₹5,699)"
          }
    ]
  },
  {
  "id": "prod-cat-3-ply-white-corrugat-0",
  "slug": "3-ply-white-corrugated-packing-box-7x4x2-inch-small-shipping-carton-box-eas",
  "title": "3 Ply White Corrugated Packing Box 7x4x2 Inch | Small Shipping Carton Box| Easy to Buy Packaging Box",
  "category": "corrugated",
  "categoryLabel": "3 Ply White Corrugated Boxes",
  "image": "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x2-inch-small-shipping-carton-box-eas_0.webp",
  "images": [
    "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x2-inch-small-shipping-carton-box-eas_0.webp",
    "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x2-inch-small-shipping-carton-box-eas_1.webp",
    "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x2-inch-small-shipping-carton-box-eas_2.webp"
  ],
  "price": 7.58,
  "startingAt": 7.58,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 95,
  "specs": [
    "7\" × 4\" × 2\" (17.8 × 10.2 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "7\" × 4\" × 2\" (17.8 × 10.2 × 5.1 cm)",
  "desc": "Durable 3 Ply White Corrugated Box 7x4x2 inch from AS Print Packaging Box. Best for small product shipping, packaging, and e-commerce use.",
  "fullDesc": "Durable 3 Ply White Corrugated Box 7x4x2 inch from AS Print Packaging Box. Best for small product shipping, packaging, and e-commerce use.",
  "tiers": [
    {
      "qty": 50,
      "rate": 7.58,
      "label": "Pack of 50 (₹379)"
    },
    {
      "qty": 100,
      "rate": 7.48,
      "label": "Pack of 100 (₹748)"
    },
    {
      "qty": 500,
      "rate": 7.4,
      "label": "Pack of 500 (₹3,700)"
    },
    {
      "qty": 1000,
      "rate": 7.2,
      "label": "Pack of 1000 (₹7,200)"
    }
  ]
},
  {
  "id": "prod-cat-3-ply-white-corrugat-1",
  "slug": "3-ply-white-corrugated-packing-box-7x4x3-5-inch-durable-shipping-carton-sma",
  "title": "3 Ply White Corrugated Packing Box 7x4x3.5 Inch | Durable Shipping Carton | Small Packaging Box for Ecommerce",
  "category": "corrugated",
  "categoryLabel": "3 Ply White Corrugated Boxes",
  "image": "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x3-5-inch-durable-shipping-carton-sma_0.webp",
  "images": [
    "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x3-5-inch-durable-shipping-carton-sma_0.webp",
    "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x3-5-inch-durable-shipping-carton-sma_1.webp",
    "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x3-5-inch-durable-shipping-carton-sma_2.webp"
  ],
  "price": 8.5,
  "startingAt": 8.5,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 98,
  "specs": [
    "7\" × 4\" × 3.5\" (17.8 × 10.2 × 8.9 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "7\" × 4\" × 3.5\" (17.8 × 10.2 × 8.9 cm)",
  "desc": "Buy AS Print Packaging Box 7x4x3.5 inch 3 Ply Corrugated Box – perfect for secure packaging, e-commerce shipping & small item delivery.",
  "fullDesc": "Buy AS Print Packaging Box 7x4x3.5 inch 3 Ply Corrugated Box – perfect for secure packaging, e-commerce shipping & small item delivery.",
  "tiers": [
    {
      "qty": 50,
      "rate": 8.5,
      "label": "Pack of 50 (₹425)"
    },
    {
      "qty": 100,
      "rate": 8.48,
      "label": "Pack of 100 (₹848)"
    },
    {
      "qty": 500,
      "rate": 8.4,
      "label": "Pack of 500 (₹4,200)"
    },
    {
      "qty": 1000,
      "rate": 8.3,
      "label": "Pack of 1000 (₹8,300)"
    }
  ]
},
  {
  "id": "prod-cat-3-ply-white-cardboar-2",
  "slug": "3-ply-white-cardboard-box-size-9-5x6x3-5-length-9-5-inch-width-6-inch-heigh",
  "title": "3 Ply White Cardboard Box Size: 9.5x6x3.5 Length 9.5 inch Width 6 inch Height 3.5 inch 3Ply custom cardboard packing boxes",
  "category": "corrugated",
  "categoryLabel": "3 Ply White Corrugated Boxes",
  "image": "/assets/boxes/3-ply-white-cardboard-box-size-9-5x6x3-5-length-9-5-inch-width-6-inch-heigh_0.webp",
  "images": [
    "/assets/boxes/3-ply-white-cardboard-box-size-9-5x6x3-5-length-9-5-inch-width-6-inch-heigh_0.webp",
    "/assets/boxes/3-ply-white-cardboard-box-size-9-5x6x3-5-length-9-5-inch-width-6-inch-heigh_1.webp",
    "/assets/boxes/3-ply-white-cardboard-box-size-9-5x6x3-5-length-9-5-inch-width-6-inch-heigh_2.webp"
  ],
  "price": 16.8,
  "startingAt": 16.8,
  "moq": 25,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 101,
  "specs": [
    "9.5\" × 6\" × 3.5\" (24.1 × 15.2 × 8.9 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "9.5\" × 6\" × 3.5\" (24.1 × 15.2 × 8.9 cm)",
  "desc": "Get the best quality 9.5x6x3.5 inch white flap box from AS Print Packaging Box. Made with strong 3 ply corrugated paper for e-commerce, gifting, and frag",
  "fullDesc": "Get the best quality 9.5x6x3.5 inch white flap box from AS Print Packaging Box. Made with strong 3 ply corrugated paper for e-commerce, gifting, and frag",
  "tiers": [
    {
      "qty": 25,
      "rate": 16.8,
      "label": "Pack of 25 (₹420)"
    },
    {
      "qty": 50,
      "rate": 16.7,
      "label": "Pack of 50 (₹835)"
    },
    {
      "qty": 500,
      "rate": 16.4,
      "label": "Pack of 500 (₹8,200)"
    },
    {
      "qty": 1000,
      "rate": 16.2,
      "label": "Pack of 1000 (₹16,200)"
    }
  ]
},
  {
  "id": "prod-cat-3-ply-white-corrugat-3",
  "slug": "3-ply-white-corrugated-packing-box-5x4x2-5-inch-carton-box-shipping-box",
  "title": "3 Ply White Corrugated Packing Box 5x4x2.5 Inch, Carton Box. Shipping Box",
  "category": "corrugated",
  "categoryLabel": "3 Ply White Corrugated Boxes",
  "image": "/assets/boxes/3-ply-white-corrugated-packing-box-5x4x2-5-inch-carton-box-shipping-box_0.webp",
  "images": [
    "/assets/boxes/3-ply-white-corrugated-packing-box-5x4x2-5-inch-carton-box-shipping-box_0.webp",
    "/assets/boxes/3-ply-white-corrugated-packing-box-5x4x2-5-inch-carton-box-shipping-box_1.webp",
    "/assets/boxes/3-ply-white-corrugated-packing-box-5x4x2-5-inch-carton-box-shipping-box_2.webp"
  ],
  "price": 6.96,
  "startingAt": 6.96,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 104,
  "specs": [
    "5\" × 4\" × 2.5\" (12.7 × 10.2 × 6.3 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "5\" × 4\" × 2.5\" (12.7 × 10.2 × 6.3 cm)",
  "desc": "Strong 3 ply corrugated box 5x4x2.5 INCH – Ideal for shipping, storage & gifting. Pack of 50. Fast delivery & bulk discounts. Order now & save big!",
  "fullDesc": "Strong 3 ply corrugated box 5x4x2.5 INCH – Ideal for shipping, storage & gifting. Pack of 50. Fast delivery & bulk discounts. Order now & save big!",
  "tiers": [
    {
      "qty": 50,
      "rate": 6.96,
      "label": "Pack of 50 (₹348)"
    },
    {
      "qty": 100,
      "rate": 6.9,
      "label": "Pack of 100 (₹690)"
    },
    {
      "qty": 500,
      "rate": 6.8,
      "label": "Pack of 500 (₹3,400)"
    },
    {
      "qty": 1000,
      "rate": 6.7,
      "label": "Pack of 1000 (₹6,700)"
    }
  ]
},
  {
  "id": "prod-cat-3-ply-white-cardboar-4",
  "slug": "3-ply-white-cardboard-box-size-8x5x2-length-8-inch-width-5-inch-height-2-in",
  "title": "3 Ply White Cardboard Box Size: 8x5x2 Length 8 inch Width 5 inch Height 2 inch 3Ply custom cardboard packing boxes",
  "category": "corrugated",
  "categoryLabel": "3 Ply White Corrugated Boxes",
  "image": "/assets/boxes/3-ply-white-cardboard-box-size-8x5x2-length-8-inch-width-5-inch-height-2-in_0.webp",
  "images": [
    "/assets/boxes/3-ply-white-cardboard-box-size-8x5x2-length-8-inch-width-5-inch-height-2-in_0.webp",
    "/assets/boxes/3-ply-white-cardboard-box-size-8x5x2-length-8-inch-width-5-inch-height-2-in_1.webp",
    "/assets/boxes/3-ply-white-cardboard-box-size-8x5x2-length-8-inch-width-5-inch-height-2-in_2.webp"
  ],
  "price": 9.96,
  "startingAt": 9.96,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 107,
  "specs": [
    "8\" × 5\" × 2\" (20.3 × 12.7 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "8\" × 5\" × 2\" (20.3 × 12.7 × 5.1 cm)",
  "desc": "White cardboard boxes that are 3Ply and cost-effective, measuring 8x5x2. Ideal for packing that is secure and adaptable...",
  "fullDesc": "White cardboard boxes that are 3Ply and cost-effective, measuring 8x5x2. Ideal for packing that is secure and adaptable...",
  "tiers": [
    {
      "qty": 50,
      "rate": 9.96,
      "label": "Pack of 50 (₹498)"
    },
    {
      "qty": 100,
      "rate": 9.78,
      "label": "Pack of 100 (₹978)"
    },
    {
      "qty": 500,
      "rate": 9.6,
      "label": "Pack of 500 (₹4,800)"
    },
    {
      "qty": 1000,
      "rate": 9.5,
      "label": "Pack of 1000 (₹9,500)"
    }
  ]
},
  {
  "id": "prod-cat-3-ply-brown-corrugat-5",
  "slug": "3-ply-brown-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag",
  "title": "3 Ply Brown Corrugated Flap Box Size 4.5x3x1 Inch | Jewellery And Gift Packaging box",
  "category": "corrugated",
  "categoryLabel": "Brown Flap Corrugated Boxes",
  "image": "/assets/boxes/3-ply-brown-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_0.webp",
  "images": [
    "/assets/boxes/3-ply-brown-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_0.webp",
    "/assets/boxes/3-ply-brown-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_1.webp",
    "/assets/boxes/3-ply-brown-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_2.webp"
  ],
  "price": 3.71,
  "startingAt": 3.71,
  "moq": 100,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 110,
  "specs": [
    "4.5\" × 3\" × 1\" (11.4 × 7.6 × 2.5 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "4.5\" × 3\" × 1\" (11.4 × 7.6 × 2.5 cm)",
  "desc": "Order 4.5x3x1 inch 3 ply flap corrugated box – strong, brown kraft box ideal for small item shipping, ecommerce, gifts, and secure packaging. Delivere",
  "fullDesc": "Order 4.5x3x1 inch 3 ply flap corrugated box – strong, brown kraft box ideal for small item shipping, ecommerce, gifts, and secure packaging. Delivere",
  "tiers": [
    {
      "qty": 100,
      "rate": 3.71,
      "label": "Pack of 100 (₹371)"
    },
    {
      "qty": 500,
      "rate": 3.62,
      "label": "Pack of 500 (₹1,810)"
    },
    {
      "qty": 1000,
      "rate": 4,
      "label": "Pack of 1000 (₹3,999)"
    },
    {
      "qty": 2000,
      "rate": 3.95,
      "label": "Pack of 2000 (₹7,900)"
    }
  ]
},
  {
  "id": "prod-cat-3-ply-brown-flap-box-6",
  "slug": "3-ply-brown-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busin",
  "title": "3-Ply Brown Flap Box 4x4x2 Inch-Ultimate Packaging Solution for Small Businesses",
  "category": "corrugated",
  "categoryLabel": "Brown Flap Corrugated Boxes",
  "image": "/assets/boxes/3-ply-brown-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busin_0.webp",
  "images": [
    "/assets/boxes/3-ply-brown-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busin_0.webp",
    "/assets/boxes/3-ply-brown-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busin_1.webp",
    "/assets/boxes/3-ply-brown-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busin_2.webp"
  ],
  "price": 7.54,
  "startingAt": 7.54,
  "moq": 25,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 113,
  "specs": [
    "4\" × 4\" × 2\" (10.2 × 10.2 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "4\" × 4\" × 2\" (10.2 × 10.2 × 5.1 cm)",
  "desc": "Buy a high-quality 4x4x2 inch brown flap corrugated box online – perfect for lightweight items like gifts, cosmetics, jewelry, and small accessories.",
  "fullDesc": "Buy a high-quality 4x4x2 inch brown flap corrugated box online – perfect for lightweight items like gifts, cosmetics, jewelry, and small accessories.",
  "tiers": [
    {
      "qty": 25,
      "rate": 7.54,
      "label": "Pack of 25 (₹189)"
    },
    {
      "qty": 50,
      "rate": 7.24,
      "label": "Pack of 50 (₹362)"
    },
    {
      "qty": 100,
      "rate": 7.12,
      "label": "Pack of 100 (₹712)"
    },
    {
      "qty": 500,
      "rate": 6.95,
      "label": "Pack of 500 (₹3,476)"
    },
    {
      "qty": 1000,
      "rate": 6.67,
      "label": "Pack of 1000 (₹6,667)"
    }
  ]
},
  {
  "id": "prod-cat-brown-flap-box-3-ply-7",
  "slug": "brown-flap-box-3-ply-brown-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi",
  "title": "3 Ply Brown Flap Corrugated Box – Size 4x4x1.5 Inch | Perfect Mini Packaging Box for Secure & Stylish Shipping",
  "category": "corrugated",
  "categoryLabel": "Brown Flap Corrugated Boxes",
  "image": "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_0.webp",
  "images": [
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_0.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_1.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_2.webp"
  ],
  "price": 6.25,
  "startingAt": 6.25,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 116,
  "specs": [
    "4\" × 4\" × 1.5\" (10.2 × 10.2 × 3.8 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "4\" × 4\" × 1.5\" (10.2 × 10.2 × 3.8 cm)",
  "desc": "Buy 4x4x1.5 inch corrugated flap box for safe packaging. Ideal for jewelry, cosmetics & small items. Strong, eco-friendly & affordable.",
  "fullDesc": "Buy 4x4x1.5 inch corrugated flap box for safe packaging. Ideal for jewelry, cosmetics & small items. Strong, eco-friendly & affordable.",
  "tiers": [
    {
      "qty": 50,
      "rate": 6.25,
      "label": "Pack of 50 (₹312)"
    },
    {
      "qty": 100,
      "rate": 5.98,
      "label": "Pack of 100 (₹598)"
    },
    {
      "qty": 500,
      "rate": 5.81,
      "label": "Pack of 500 (₹2,905)"
    },
    {
      "qty": 1000,
      "rate": 5.62,
      "label": "Pack of 1000 (₹5,619)"
    }
  ]
},
  {
  "id": "prod-cat-packaging-box-5x5x2--8",
  "slug": "packaging-box-5x5x2-inch-brown-flap-box-mini-corrugated-packaging-for-jewel",
  "title": "AS Print Packaging Box 5x5x2 Inch Brown Flap Box – Mini Corrugated Packaging for Jewelry, Gifts & E-commerce Orders",
  "category": "corrugated",
  "categoryLabel": "Brown Flap Corrugated Boxes",
  "image": "/assets/boxes/packaging-box-5x5x2-inch-brown-flap-box-mini-corrugated-packaging-for-jewel_0.webp",
  "images": [
    "/assets/boxes/packaging-box-5x5x2-inch-brown-flap-box-mini-corrugated-packaging-for-jewel_0.webp",
    "/assets/boxes/packaging-box-5x5x2-inch-brown-flap-box-mini-corrugated-packaging-for-jewel_1.webp",
    "/assets/boxes/packaging-box-5x5x2-inch-brown-flap-box-mini-corrugated-packaging-for-jewel_2.webp"
  ],
  "price": 8.95,
  "startingAt": 8.95,
  "moq": 25,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 119,
  "specs": [
    "5\" × 5\" × 2\" (12.7 × 12.7 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "5\" × 5\" × 2\" (12.7 × 12.7 × 5.1 cm)",
  "desc": "Order 5x5x2 inch brown flap boxes online – perfect for packaging jewelry, gifts, cosmetics, and lightweight items. Ideal for online sellers and small",
  "fullDesc": "Order 5x5x2 inch brown flap boxes online – perfect for packaging jewelry, gifts, cosmetics, and lightweight items. Ideal for online sellers and small",
  "tiers": [
    {
      "qty": 25,
      "rate": 8.95,
      "label": "Pack of 25 (₹224)"
    },
    {
      "qty": 50,
      "rate": 8.76,
      "label": "Pack of 50 (₹438)"
    },
    {
      "qty": 500,
      "rate": 8.57,
      "label": "Pack of 500 (₹4,286)"
    },
    {
      "qty": 1000,
      "rate": 8.38,
      "label": "Pack of 1000 (₹8,381)"
    }
  ]
},
  {
  "id": "prod-cat-brown-flap-box-3-ply-9",
  "slug": "brown-flap-box-3-ply-brown-flap-corrugated-box-6x4x2-inch-for-small-items",
  "title": "3 Ply Brown Flap Corrugated Box 6x4x2 Inch for Small Items",
  "category": "corrugated",
  "categoryLabel": "Brown Flap Corrugated Boxes",
  "image": "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-6x4x2-inch-for-small-items_0.webp",
  "images": [
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-6x4x2-inch-for-small-items_0.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-6x4x2-inch-for-small-items_1.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-6x4x2-inch-for-small-items_2.webp"
  ],
  "price": 8.95,
  "startingAt": 8.95,
  "moq": 25,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 122,
  "specs": [
    "6\" × 4\" × 2\" (15.2 × 10.2 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "6\" × 4\" × 2\" (15.2 × 10.2 × 5.1 cm)",
  "desc": "Shop premium 6x4x2 inch brown flap corrugated boxes for packaging soaps, accessories, cosmetics, and small gifts. Lightweight, strong, and eco-friendl",
  "fullDesc": "Shop premium 6x4x2 inch brown flap corrugated boxes for packaging soaps, accessories, cosmetics, and small gifts. Lightweight, strong, and eco-friendl",
  "tiers": [
    {
      "qty": 25,
      "rate": 8.95,
      "label": "Pack of 25 (₹224)"
    },
    {
      "qty": 50,
      "rate": 8.53,
      "label": "Pack of 50 (₹427)"
    },
    {
      "qty": 500,
      "rate": 8.38,
      "label": "Pack of 500 (₹4,190)"
    },
    {
      "qty": 1000,
      "rate": 8.1,
      "label": "Pack of 1000 (₹8,095)"
    }
  ]
},
  {
  "id": "prod-cat-brown-flap-box-3-ply-10",
  "slug": "brown-flap-box-3-ply-brown-flap-corrugated-box-size-6x5x1-5-inch-multipurpo",
  "title": "3 Ply Brown Flap Corrugated Box – Size 6x5x1.5 Inch | Multipurpose Brown Corrugated Box for Small Item Packaging",
  "category": "corrugated",
  "categoryLabel": "Brown Flap Corrugated Boxes",
  "image": "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_0.webp",
  "images": [
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_0.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_1.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_2.webp"
  ],
  "price": 8.53,
  "startingAt": 8.53,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 125,
  "specs": [
    "6\" × 5\" × 1.5\" (15.2 × 12.7 × 3.8 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "6\" × 5\" × 1.5\" (15.2 × 12.7 × 3.8 cm)",
  "desc": "Get 6x5x1.5 inch brown flap corrugated boxes for packaging gifts, soaps, accessories, and cosmetics. Eco-friendly, foldable, and strong – available at",
  "fullDesc": "Get 6x5x1.5 inch brown flap corrugated boxes for packaging gifts, soaps, accessories, and cosmetics. Eco-friendly, foldable, and strong – available at",
  "tiers": [
    {
      "qty": 50,
      "rate": 8.53,
      "label": "Pack of 50 (₹427)"
    },
    {
      "qty": 100,
      "rate": 8.4,
      "label": "Pack of 100 (₹840)"
    },
    {
      "qty": 500,
      "rate": 8.38,
      "label": "Pack of 500 (₹4,190)"
    },
    {
      "qty": 1000,
      "rate": 8.1,
      "label": "Pack of 1000 (₹8,095)"
    }
  ]
},
  {
  "id": "prod-cat-brown-flap-box-3-ply-11",
  "slug": "brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x5-5x2-inch-i-premium",
  "title": "3 Ply Brown Flap Corrugated Box – Size 7x5.5x2 Inch I Premium Corrugated Box for Shipping Gifts, Cosmetics & More",
  "category": "corrugated",
  "categoryLabel": "Brown Flap Corrugated Boxes",
  "image": "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x5-5x2-inch-i-premium_0.webp",
  "images": [
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x5-5x2-inch-i-premium_0.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x5-5x2-inch-i-premium_1.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x5-5x2-inch-i-premium_2.webp"
  ],
  "price": 10.67,
  "startingAt": 10.67,
  "moq": 25,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 128,
  "specs": [
    "7\" × 5.5\" × 2\" (17.8 × 14.0 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "7\" × 5.5\" × 2\" (17.8 × 14.0 × 5.1 cm)",
  "desc": "Order a 7x5.5x2 inch brown flap corrugated box online. Ideal for gifts, skin care, jewelry & more. Durable, eco-friendly, and perfect for small produc",
  "fullDesc": "Order a 7x5.5x2 inch brown flap corrugated box online. Ideal for gifts, skin care, jewelry & more. Durable, eco-friendly, and perfect for small produc",
  "tiers": [
    {
      "qty": 25,
      "rate": 10.67,
      "label": "Pack of 25 (₹267)"
    },
    {
      "qty": 50,
      "rate": 10.44,
      "label": "Pack of 50 (₹522)"
    },
    {
      "qty": 100,
      "rate": 9.8,
      "label": "Pack of 100 (₹980)"
    },
    {
      "qty": 500,
      "rate": 9.6,
      "label": "Pack of 500 (₹4,800)"
    },
    {
      "qty": 1000,
      "rate": 9.5,
      "label": "Pack of 1000 (₹9,500)"
    }
  ]
},
  {
  "id": "prod-cat-brown-flap-box-3-ply-12",
  "slug": "brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x7x2-inch-i-premium-co",
  "title": "3 Ply Brown Flap Corrugated Box – Size 7x7x2 Inch I Premium Corrugated Kraft Box for Gift Sets, Hampers & Fragile Items",
  "category": "corrugated",
  "categoryLabel": "Brown Flap Corrugated Boxes",
  "image": "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x7x2-inch-i-premium-co_0.webp",
  "images": [
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x7x2-inch-i-premium-co_0.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x7x2-inch-i-premium-co_1.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x7x2-inch-i-premium-co_2.webp"
  ],
  "price": 11.35,
  "startingAt": 11.35,
  "moq": 25,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 131,
  "specs": [
    "7\" × 7\" × 2\" (17.8 × 17.8 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "7\" × 7\" × 2\" (17.8 × 17.8 × 5.1 cm)",
  "desc": "Shop a 7x7x2 inch brown flap box online. Ideal for curated gift boxes, skincare kits, chocolates, soaps & more. Durable 3 ply kraft corrugated box.",
  "fullDesc": "Shop a 7x7x2 inch brown flap box online. Ideal for curated gift boxes, skincare kits, chocolates, soaps & more. Durable 3 ply kraft corrugated box.",
  "tiers": [
    {
      "qty": 25,
      "rate": 11.35,
      "label": "Pack of 25 (₹284)"
    },
    {
      "qty": 50,
      "rate": 11.2,
      "label": "Pack of 50 (₹560)"
    },
    {
      "qty": 100,
      "rate": 10.99,
      "label": "Pack of 100 (₹1,099)"
    },
    {
      "qty": 500,
      "rate": 10.8,
      "label": "Pack of 500 (₹5,400)"
    },
    {
      "qty": 1000,
      "rate": 10.2,
      "label": "Pack of 1000 (₹10,200)"
    }
  ]
},
  {
  "id": "prod-cat-brown-flap-box-3-ply-13",
  "slug": "brown-flap-box-3-ply-brown-flap-corrugated-box-size-9x6x3-inch-i-premium-co",
  "title": "3 Ply Brown Flap Corrugated Box – Size 9x6x3 Inch I Premium Corrugated Packaging for Gifts, Soaps, Ecommerce & Bulk Orders",
  "category": "corrugated",
  "categoryLabel": "Brown Flap Corrugated Boxes",
  "image": "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-9x6x3-inch-i-premium-co_0.webp",
  "images": [
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-9x6x3-inch-i-premium-co_0.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-9x6x3-inch-i-premium-co_1.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-9x6x3-inch-i-premium-co_2.webp"
  ],
  "price": 18.95,
  "startingAt": 18.95,
  "moq": 20,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 134,
  "specs": [
    "9\" × 6\" × 3\" (22.9 × 15.2 × 7.6 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "9\" × 6\" × 3\" (22.9 × 15.2 × 7.6 cm)",
  "desc": "Buy 3-ply brown flap corrugated boxes (9x6x3 inch) at AS Print Gallery. Premium eco-friendly packaging with a tuck-in lock design, ideal for gifts, cosmetics & e",
  "fullDesc": "Buy 3-ply brown flap corrugated boxes (9x6x3 inch) at AS Print Gallery. Premium eco-friendly packaging with a tuck-in lock design, ideal for gifts, cosmetics & e",
  "tiers": [
    {
      "qty": 20,
      "rate": 18.95,
      "label": "Pack of 20 (₹379)"
    },
    {
      "qty": 100,
      "rate": 18.1,
      "label": "Pack of 100 (₹1,810)"
    },
    {
      "qty": 500,
      "rate": 17.6,
      "label": "Pack of 500 (₹8,800)"
    },
    {
      "qty": 1000,
      "rate": 16.1,
      "label": "Pack of 1000 (₹16,095)"
    }
  ]
},
  {
  "id": "prod-cat-3-ply-brown-corrugat-14",
  "slug": "3-ply-brown-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c",
  "title": "3 Ply Brown Corrugated Flap Box Size 14x13x2.5 Inch I Large Kraft Box for Clothing, Calendars, and Flat Product Shipping",
  "category": "corrugated",
  "categoryLabel": "Brown Flap Corrugated Boxes",
  "image": "/assets/boxes/3-ply-brown-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_0.webp",
  "images": [
    "/assets/boxes/3-ply-brown-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_0.webp",
    "/assets/boxes/3-ply-brown-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_1.webp",
    "/assets/boxes/3-ply-brown-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_2.webp"
  ],
  "price": 37.91,
  "startingAt": 37.91,
  "moq": 10,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 137,
  "specs": [
    "14\" × 13\" × 2.5\" (35.6 × 33.0 × 6.3 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "14\" × 13\" × 2.5\" (35.6 × 33.0 × 6.3 cm)",
  "desc": "Buy 14x13x2.5 inch brown flap boxes online at AS Print Gallery.com – perfect for wide products like apparel, books, and corporate gifting. Durable 3 ply corrugat",
  "fullDesc": "Buy 14x13x2.5 inch brown flap boxes online at AS Print Gallery.com – perfect for wide products like apparel, books, and corporate gifting. Durable 3 ply corrugat",
  "tiers": [
    {
      "qty": 10,
      "rate": 37.91,
      "label": "Pack of 10 (₹379)"
    },
    {
      "qty": 20,
      "rate": 35.62,
      "label": "Pack of 20 (₹712)"
    },
    {
      "qty": 40,
      "rate": 34.52,
      "label": "Pack of 40 (₹1,381)"
    },
    {
      "qty": 100,
      "rate": 34.76,
      "label": "Pack of 100 (₹3,476)"
    },
    {
      "qty": 500,
      "rate": 32.38,
      "label": "Pack of 500 (₹16,190)"
    }
  ]
},
  {
  "id": "prod-cat-3-ply-brown-flap-box-15",
  "slug": "3-ply-brown-flap-box-size-13x9x2-inches-shipping-box-courier-box",
  "title": "3 ply Brown Flap Box Size 13X9X2 inches, Shipping Box Courier Box",
  "category": "corrugated",
  "categoryLabel": "Brown Flap Corrugated Boxes",
  "image": "/assets/boxes/3-ply-brown-flap-box-size-13x9x2-inches-shipping-box-courier-box_0.webp",
  "images": [
    "/assets/boxes/3-ply-brown-flap-box-size-13x9x2-inches-shipping-box-courier-box_0.webp",
    "/assets/boxes/3-ply-brown-flap-box-size-13x9x2-inches-shipping-box-courier-box_1.webp",
    "/assets/boxes/3-ply-brown-flap-box-size-13x9x2-inches-shipping-box-courier-box_2.webp"
  ],
  "price": 21.25,
  "startingAt": 21.25,
  "moq": 20,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 140,
  "specs": [
    "13\" × 9\" × 2\" (33.0 × 22.9 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "13\" × 9\" × 2\" (33.0 × 22.9 × 5.1 cm)",
  "desc": "Order 13x9x2 inch brown corrugated flap box online at AS Print Gallery.com. Ideal for books, certificates, clothing & flat gift kits. Durable 3 ply kraft box at",
  "fullDesc": "Order 13x9x2 inch brown corrugated flap box online at AS Print Gallery.com. Ideal for books, certificates, clothing & flat gift kits. Durable 3 ply kraft box at",
  "tiers": [
    {
      "qty": 20,
      "rate": 21.25,
      "label": "Pack of 20 (₹425)"
    },
    {
      "qty": 40,
      "rate": 21.2,
      "label": "Pack of 40 (₹848)"
    },
    {
      "qty": 60,
      "rate": 20.8,
      "label": "Pack of 60 (₹1,248)"
    },
    {
      "qty": 500,
      "rate": 20,
      "label": "Pack of 500 (₹9,999)"
    },
    {
      "qty": 1000,
      "rate": 19.8,
      "label": "Pack of 1000 (₹19,800)"
    }
  ]
},
  {
  "id": "prod-cat-brown-flap-box-3-ply-16",
  "slug": "brown-flap-box-3-ply-brown-corrugated-packing-box-flap-type-size-10x7x3-5-l",
  "title": "3 Ply Brown Corrugated Packing Box Flap Type Size: 10X7X3.5 Length 10 inch Width 7 inch Height 3.5 inch Shipping box Courier Box",
  "category": "corrugated",
  "categoryLabel": "Brown Flap Corrugated Boxes",
  "image": "/assets/boxes/brown-flap-box-3-ply-brown-corrugated-packing-box-flap-type-size-10x7x3-5-l_0.webp",
  "images": [
    "/assets/boxes/brown-flap-box-3-ply-brown-corrugated-packing-box-flap-type-size-10x7x3-5-l_0.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-corrugated-packing-box-flap-type-size-10x7x3-5-l_1.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-corrugated-packing-box-flap-type-size-10x7x3-5-l_2.webp"
  ],
  "price": 22.38,
  "startingAt": 22.38,
  "moq": 10,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 143,
  "specs": [
    "10\" × 7\" × 3.5\" (25.4 × 17.8 × 8.9 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "10\" × 7\" × 3.5\" (25.4 × 17.8 × 8.9 cm)",
  "desc": "Large 10-by-7-by-3.5-inch brown 3 ply corrugated flap box with a secure shipping design. Perfect for safe packaging and shipping.",
  "fullDesc": "Large 10-by-7-by-3.5-inch brown 3 ply corrugated flap box with a secure shipping design. Perfect for safe packaging and shipping.",
  "tiers": [
    {
      "qty": 10,
      "rate": 22.38,
      "label": "Pack of 10 (₹224)"
    },
    {
      "qty": 50,
      "rate": 21.96,
      "label": "Pack of 50 (₹1,098)"
    },
    {
      "qty": 500,
      "rate": 21.9,
      "label": "Pack of 500 (₹10,952)"
    },
    {
      "qty": 1000,
      "rate": 20.95,
      "label": "Pack of 1000 (₹20,952)"
    }
  ]
},
  {
  "id": "prod-cat-3-ply-brown-corrugat-17",
  "slug": "3-ply-brown-corrugated-carton-flap-box-size-8x4x2-inches-length-8-inch-widt",
  "title": "3 ply Brown Corrugated Carton Flap Box Size 8X4X2 inches Length 8 inch Width 4 inch Height 2 inch Shipping Box Courier Box",
  "category": "corrugated",
  "categoryLabel": "Brown Flap Corrugated Boxes",
  "image": "/assets/boxes/3-ply-brown-corrugated-carton-flap-box-size-8x4x2-inches-length-8-inch-widt_0.webp",
  "images": [
    "/assets/boxes/3-ply-brown-corrugated-carton-flap-box-size-8x4x2-inches-length-8-inch-widt_0.webp",
    "/assets/boxes/3-ply-brown-corrugated-carton-flap-box-size-8x4x2-inches-length-8-inch-widt_1.webp",
    "/assets/boxes/3-ply-brown-corrugated-carton-flap-box-size-8x4x2-inches-length-8-inch-widt_2.webp"
  ],
  "price": 9.45,
  "startingAt": 9.45,
  "moq": 25,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 96,
  "specs": [
    "8\" × 4\" × 2\" (20.3 × 10.2 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "8\" × 4\" × 2\" (20.3 × 10.2 × 5.1 cm)",
  "desc": "3 ply brown corrugated carton box, 8x4x2 inches, ideal for courier needs, ensuring secure packaging || pack of 25 - ₹299 || 📦 free shipping...",
  "fullDesc": "3 ply brown corrugated carton box, 8x4x2 inches, ideal for courier needs, ensuring secure packaging || pack of 25 - ₹299 || 📦 free shipping...",
  "tiers": [
    {
      "qty": 25,
      "rate": 9.45,
      "label": "Pack of 25 (₹236)"
    },
    {
      "qty": 100,
      "rate": 8.98,
      "label": "Pack of 100 (₹898)"
    },
    {
      "qty": 500,
      "rate": 8.8,
      "label": "Pack of 500 (₹4,400)"
    },
    {
      "qty": 1000,
      "rate": 8.7,
      "label": "Pack of 1000 (₹8,700)"
    }
  ]
},
  {
  "id": "prod-cat-brown-flap-box-3-ply-18",
  "slug": "brown-flap-box-3-ply-brown-flap-corrugated-box-size-14x9x3-inch-ideal-packa",
  "title": "3 Ply Brown Flap Corrugated Box – Size 14x9x3 Inch | Ideal Packaging Box for E-commerce & Shipping",
  "category": "corrugated",
  "categoryLabel": "Brown Flap Corrugated Boxes",
  "image": "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-14x9x3-inch-ideal-packa_0.webp",
  "images": [
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-14x9x3-inch-ideal-packa_0.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-14x9x3-inch-ideal-packa_1.webp",
    "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-14x9x3-inch-ideal-packa_2.webp"
  ],
  "price": 34.29,
  "startingAt": 34.29,
  "moq": 10,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 99,
  "specs": [
    "14\" × 9\" × 3\" (35.6 × 22.9 × 7.6 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "14\" × 9\" × 3\" (35.6 × 22.9 × 7.6 cm)",
  "desc": "Shop 14x9x3 inch 3 ply brown flap corrugated boxes online. Ideal for shipping apparel, books, cosmetics, and medium-sized products safely across India",
  "fullDesc": "Shop 14x9x3 inch 3 ply brown flap corrugated boxes online. Ideal for shipping apparel, books, cosmetics, and medium-sized products safely across India",
  "tiers": [
    {
      "qty": 10,
      "rate": 34.29,
      "label": "Pack of 10 (₹343)"
    },
    {
      "qty": 20,
      "rate": 34,
      "label": "Pack of 20 (₹680)"
    },
    {
      "qty": 40,
      "rate": 33.7,
      "label": "Pack of 40 (₹1,348)"
    },
    {
      "qty": 100,
      "rate": 33.5,
      "label": "Pack of 100 (₹3,350)"
    },
    {
      "qty": 500,
      "rate": 33,
      "label": "Pack of 500 (₹16,500)"
    }
  ]
},
  {
  "id": "prod-cat-brown-flap-box-4x2-5-19",
  "slug": "brown-flap-box-4x2-5x1-5-inch-brown-flap-corrugated-box-3-ply-mini-packagin",
  "title": "4x2.5x1.5 Inch Brown Flap Corrugated Box | 3 Ply Mini Packaging Box for Jewelry, Gifts & E-commerce Shipping",
  "category": "corrugated",
  "categoryLabel": "Brown Flap Corrugated Boxes",
  "image": "/assets/boxes/brown-flap-box-4x2-5x1-5-inch-brown-flap-corrugated-box-3-ply-mini-packagin_0.webp",
  "images": [
    "/assets/boxes/brown-flap-box-4x2-5x1-5-inch-brown-flap-corrugated-box-3-ply-mini-packagin_0.webp",
    "/assets/boxes/brown-flap-box-4x2-5x1-5-inch-brown-flap-corrugated-box-3-ply-mini-packagin_1.webp",
    "/assets/boxes/brown-flap-box-4x2-5x1-5-inch-brown-flap-corrugated-box-3-ply-mini-packagin_2.webp"
  ],
  "price": 5.2,
  "startingAt": 5.2,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 102,
  "specs": [
    "4\" × 2.5\" × 1.5\" (10.2 × 6.3 × 3.8 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "4\" × 2.5\" × 1.5\" (10.2 × 6.3 × 3.8 cm)",
  "desc": "Buy 4x2.5x1.5 inch corrugated flap box for jewelry, gifts & e-commerce packaging. Strong, lightweight & budget-friendly packaging solution by AS Print Gallery.",
  "fullDesc": "Buy 4x2.5x1.5 inch corrugated flap box for jewelry, gifts & e-commerce packaging. Strong, lightweight & budget-friendly packaging solution by AS Print Gallery.",
  "tiers": [
    {
      "qty": 50,
      "rate": 5.2,
      "label": "Pack of 50 (₹260)"
    },
    {
      "qty": 100,
      "rate": 4.99,
      "label": "Pack of 100 (₹499)"
    },
    {
      "qty": 500,
      "rate": 4.76,
      "label": "Pack of 500 (₹2,381)"
    },
    {
      "qty": 1000,
      "rate": 4.57,
      "label": "Pack of 1000 (₹4,570)"
    }
  ]
},
  {
  "id": "prod-cat-3-ply-white-corrugat-20",
  "slug": "3-ply-white-corrugated-flap-box-10x7x3-5-inch-for-gifts",
  "title": "3 Ply White Corrugated Flap Box 10x7x3.5 Inch for Gifts",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/3-ply-white-corrugated-flap-box-10x7x3-5-inch-for-gifts_0.webp",
  "images": [
    "/assets/boxes/3-ply-white-corrugated-flap-box-10x7x3-5-inch-for-gifts_0.webp",
    "/assets/boxes/3-ply-white-corrugated-flap-box-10x7x3-5-inch-for-gifts_1.webp",
    "/assets/boxes/3-ply-white-corrugated-flap-box-10x7x3-5-inch-for-gifts_2.webp"
  ],
  "price": 23.62,
  "startingAt": 23.62,
  "moq": 10,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 105,
  "specs": [
    "10\" × 7\" × 3.5\" (25.4 × 17.8 × 8.9 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "10\" × 7\" × 3.5\" (25.4 × 17.8 × 8.9 cm)",
  "desc": "Buy 10x7x3.5 inch White flap box online. Durable 3 ply corrugated box ideal for shipping clothing, accessories, and large gift hampers.",
  "fullDesc": "Buy 10x7x3.5 inch White flap box online. Durable 3 ply corrugated box ideal for shipping clothing, accessories, and large gift hampers.",
  "tiers": [
    {
      "qty": 10,
      "rate": 23.62,
      "label": "Pack of 10 (₹236)"
    },
    {
      "qty": 50,
      "rate": 23.6,
      "label": "Pack of 50 (₹1,180)"
    },
    {
      "qty": 500,
      "rate": 23.4,
      "label": "Pack of 500 (₹11,700)"
    },
    {
      "qty": 1000,
      "rate": 21.81,
      "label": "Pack of 1000 (₹21,810)"
    }
  ]
},
  {
  "id": "prod-cat-3-ply-white-corrugat-21",
  "slug": "3-ply-white-corrugated-flap-box-size-8x4x2-inch-stylish-corrugated-box-for",
  "title": "3 Ply White Corrugated Flap Box Size 8x4x2 Inch | Stylish Corrugated Box for Cosmetics, Electronics & Gifts",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/3-ply-white-corrugated-flap-box-size-8x4x2-inch-stylish-corrugated-box-for_0.webp",
  "images": [
    "/assets/boxes/3-ply-white-corrugated-flap-box-size-8x4x2-inch-stylish-corrugated-box-for_0.webp",
    "/assets/boxes/3-ply-white-corrugated-flap-box-size-8x4x2-inch-stylish-corrugated-box-for_1.webp",
    "/assets/boxes/3-ply-white-corrugated-flap-box-size-8x4x2-inch-stylish-corrugated-box-for_2.webp"
  ],
  "price": 11.35,
  "startingAt": 11.35,
  "moq": 25,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 108,
  "specs": [
    "8\" × 4\" × 2\" (20.3 × 10.2 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "8\" × 4\" × 2\" (20.3 × 10.2 × 5.1 cm)",
  "desc": "Order 8x4x2 inch white corrugated flap box online for cosmetics, retail gifts, and premium packaging. Eco-friendly, customizable, and ideal for stylis",
  "fullDesc": "Order 8x4x2 inch white corrugated flap box online for cosmetics, retail gifts, and premium packaging. Eco-friendly, customizable, and ideal for stylis",
  "tiers": [
    {
      "qty": 25,
      "rate": 11.35,
      "label": "Pack of 25 (₹284)"
    },
    {
      "qty": 100,
      "rate": 10.46,
      "label": "Pack of 100 (₹1,046)"
    },
    {
      "qty": 500,
      "rate": 10.4,
      "label": "Pack of 500 (₹5,200)"
    },
    {
      "qty": 1000,
      "rate": 10.2,
      "label": "Pack of 1000 (₹10,200)"
    }
  ]
},
  {
  "id": "prod-cat-white-flap-box-3-ply-22",
  "slug": "white-flap-box-3-ply-white-flap-corrugated-box-size-9x6x3-inch-i-premium-co",
  "title": "3 Ply White Flap Corrugated Box – Size 9x6x3 Inch I Premium Corrugated Packaging for Gifts, Soaps, Ecommerce & Bulk Orders",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-9x6x3-inch-i-premium-co_0.webp",
  "images": [
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-9x6x3-inch-i-premium-co_0.webp",
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-9x6x3-inch-i-premium-co_1.webp",
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-9x6x3-inch-i-premium-co_2.webp"
  ],
  "price": 20.38,
  "startingAt": 20.38,
  "moq": 20,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 111,
  "specs": [
    "9\" × 6\" × 3\" (22.9 × 15.2 × 7.6 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "9\" × 6\" × 3\" (22.9 × 15.2 × 7.6 cm)",
  "desc": "Buy a 9x6x3-inch White flap box online. 3ply corrugated kraft box perfect for D2C shipping, hampers, gift boxes, cosmetics & branding.",
  "fullDesc": "Buy a 9x6x3-inch White flap box online. 3ply corrugated kraft box perfect for D2C shipping, hampers, gift boxes, cosmetics & branding.",
  "tiers": [
    {
      "qty": 20,
      "rate": 20.38,
      "label": "Pack of 20 (₹408)"
    },
    {
      "qty": 100,
      "rate": 19.99,
      "label": "Pack of 100 (₹1,999)"
    },
    {
      "qty": 500,
      "rate": 19.8,
      "label": "Pack of 500 (₹9,900)"
    },
    {
      "qty": 1000,
      "rate": 18.8,
      "label": "Pack of 1000 (₹18,800)"
    }
  ]
},
  {
  "id": "prod-cat-white-flap-box-3-ply-23",
  "slug": "white-flap-box-3-ply-white-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi",
  "title": "3 Ply White Flap Corrugated Box – Size 4x4x1.5 Inch | Perfect Mini Packaging Box for Secure & Stylish Shipping",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_0.webp",
  "images": [
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_0.webp",
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_1.webp",
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_2.webp"
  ],
  "price": 7.58,
  "startingAt": 7.58,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 114,
  "specs": [
    "4\" × 4\" × 1.5\" (10.2 × 10.2 × 3.8 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "4\" × 4\" × 1.5\" (10.2 × 10.2 × 3.8 cm)",
  "desc": "Shop 4x4x1.5 inch 3 ply white flap corrugated boxes online. They are ideal for lightweight, delicate items like jewelry, accessories, and tech gadgets",
  "fullDesc": "Shop 4x4x1.5 inch 3 ply white flap corrugated boxes online. They are ideal for lightweight, delicate items like jewelry, accessories, and tech gadgets",
  "tiers": [
    {
      "qty": 50,
      "rate": 7.58,
      "label": "Pack of 50 (₹379)"
    },
    {
      "qty": 100,
      "rate": 7.12,
      "label": "Pack of 100 (₹712)"
    },
    {
      "qty": 500,
      "rate": 6.86,
      "label": "Pack of 500 (₹3,429)"
    },
    {
      "qty": 1000,
      "rate": 6.67,
      "label": "Pack of 1000 (₹6,667)"
    }
  ]
},
  {
  "id": "prod-cat-packaging-box-5x5x2--24",
  "slug": "packaging-box-5x5x2-inch-white-flap-box-mini-corrugated-packaging-for-jewel",
  "title": "AS Print Packaging Box 5x5x2 Inch White Flap Box – Mini Corrugated Packaging for Jewelry, Gifts & E-commerce Orders",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/packaging-box-5x5x2-inch-white-flap-box-mini-corrugated-packaging-for-jewel_0.webp",
  "images": [
    "/assets/boxes/packaging-box-5x5x2-inch-white-flap-box-mini-corrugated-packaging-for-jewel_0.webp",
    "/assets/boxes/packaging-box-5x5x2-inch-white-flap-box-mini-corrugated-packaging-for-jewel_1.webp",
    "/assets/boxes/packaging-box-5x5x2-inch-white-flap-box-mini-corrugated-packaging-for-jewel_2.webp"
  ],
  "price": 11.35,
  "startingAt": 11.35,
  "moq": 25,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 117,
  "specs": [
    "5\" × 5\" × 2\" (12.7 × 12.7 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "5\" × 5\" × 2\" (12.7 × 12.7 × 5.1 cm)",
  "desc": "Order 5x5x2-inch white flap boxes online – perfect for packaging jewelry, gifts, cosmetics, and lightweight items. Ideal for online sellers and small",
  "fullDesc": "Order 5x5x2-inch white flap boxes online – perfect for packaging jewelry, gifts, cosmetics, and lightweight items. Ideal for online sellers and small",
  "tiers": [
    {
      "qty": 25,
      "rate": 11.35,
      "label": "Pack of 25 (₹284)"
    },
    {
      "qty": 50,
      "rate": 10.98,
      "label": "Pack of 50 (₹549)"
    },
    {
      "qty": 100,
      "rate": 10.48,
      "label": "Pack of 100 (₹1,048)"
    },
    {
      "qty": 500,
      "rate": 10,
      "label": "Pack of 500 (₹4,999)"
    },
    {
      "qty": 1000,
      "rate": 9.8,
      "label": "Pack of 1000 (₹9,800)"
    }
  ]
},
  {
  "id": "prod-cat-white-flap-box-3-ply-25",
  "slug": "white-flap-box-3-ply-white-flap-corrugated-box-6x4x2-inch-for-small-items",
  "title": "3 Ply White Flap Corrugated Box 6x4x2 Inch for Small Items",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-6x4x2-inch-for-small-items_0.webp",
  "images": [
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-6x4x2-inch-for-small-items_0.webp",
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-6x4x2-inch-for-small-items_1.webp",
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-6x4x2-inch-for-small-items_2.webp"
  ],
  "price": 10.44,
  "startingAt": 10.44,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 120,
  "specs": [
    "6\" × 4\" × 2\" (15.2 × 10.2 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "6\" × 4\" × 2\" (15.2 × 10.2 × 5.1 cm)",
  "desc": "Shop premium 6x4x2 inch white flap corrugated boxes for packaging soaps, accessories, cosmetics, and small gifts. Lightweight, strong, and eco-friendl",
  "fullDesc": "Shop premium 6x4x2 inch white flap corrugated boxes for packaging soaps, accessories, cosmetics, and small gifts. Lightweight, strong, and eco-friendl",
  "tiers": [
    {
      "qty": 50,
      "rate": 10.44,
      "label": "Pack of 50 (₹522)"
    },
    {
      "qty": 100,
      "rate": 9.8,
      "label": "Pack of 100 (₹980)"
    },
    {
      "qty": 500,
      "rate": 9.6,
      "label": "Pack of 500 (₹4,800)"
    },
    {
      "qty": 1000,
      "rate": 9.5,
      "label": "Pack of 1000 (₹9,500)"
    }
  ]
},
  {
  "id": "prod-cat-white-flap-box-3-ply-26",
  "slug": "white-flap-box-3-ply-white-flap-corrugated-box-size-7x7x2-inch-i-premium-co",
  "title": "3 Ply White Flap Corrugated Box – Size 7x7x2 Inch I Premium Corrugated Kraft Box for Gift Sets, Hampers & Fragile Items",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x7x2-inch-i-premium-co_0.webp",
  "images": [
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x7x2-inch-i-premium-co_0.webp",
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x7x2-inch-i-premium-co_1.webp",
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x7x2-inch-i-premium-co_2.webp"
  ],
  "price": 12.5,
  "startingAt": 12.5,
  "moq": 25,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 123,
  "specs": [
    "7\" × 7\" × 2\" (17.8 × 17.8 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "7\" × 7\" × 2\" (17.8 × 17.8 × 5.1 cm)",
  "desc": "Shop a 7x7x2-inch White flap box online. Ideal for curated gift boxes, skincare kits, chocolates, soaps & more. Durable 3 ply kraft corrugated box.",
  "fullDesc": "Shop a 7x7x2-inch White flap box online. Ideal for curated gift boxes, skincare kits, chocolates, soaps & more. Durable 3 ply kraft corrugated box.",
  "tiers": [
    {
      "qty": 25,
      "rate": 12.5,
      "label": "Pack of 25 (₹312)"
    },
    {
      "qty": 50,
      "rate": 11.96,
      "label": "Pack of 50 (₹598)"
    },
    {
      "qty": 100,
      "rate": 11.48,
      "label": "Pack of 100 (₹1,148)"
    },
    {
      "qty": 500,
      "rate": 11.4,
      "label": "Pack of 500 (₹5,700)"
    },
    {
      "qty": 1000,
      "rate": 11.2,
      "label": "Pack of 1000 (₹11,200)"
    }
  ]
},
  {
  "id": "prod-cat-3-ply-white-flap-box-27",
  "slug": "3-ply-white-flap-box-size-13x9x2-inches-shipping-box-courier-box",
  "title": "3 ply White Flap Box Size 13X9X2 inches, Shipping Box Courier Box",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/3-ply-white-flap-box-size-13x9x2-inches-shipping-box-courier-box_0.webp",
  "images": [
    "/assets/boxes/3-ply-white-flap-box-size-13x9x2-inches-shipping-box-courier-box_0.webp",
    "/assets/boxes/3-ply-white-flap-box-size-13x9x2-inches-shipping-box-courier-box_1.webp",
    "/assets/boxes/3-ply-white-flap-box-size-13x9x2-inches-shipping-box-courier-box_2.webp"
  ],
  "price": 20.71,
  "startingAt": 20.71,
  "moq": 20,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 126,
  "specs": [
    "13\" × 9\" × 2\" (33.0 × 22.9 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "13\" × 9\" × 2\" (33.0 × 22.9 × 5.1 cm)",
  "desc": "Order a 13x9x2-inch white corrugated flap box online at AS Print Gallery.com. Ideal for books, certificates, clothing & flat gift kits. Durable 3 ply kraft box a",
  "fullDesc": "Order a 13x9x2-inch white corrugated flap box online at AS Print Gallery.com. Ideal for books, certificates, clothing & flat gift kits. Durable 3 ply kraft box a",
  "tiers": [
    {
      "qty": 20,
      "rate": 20.71,
      "label": "Pack of 20 (₹414)"
    },
    {
      "qty": 40,
      "rate": 20.65,
      "label": "Pack of 40 (₹826)"
    },
    {
      "qty": 60,
      "rate": 20.5,
      "label": "Pack of 60 (₹1,230)"
    },
    {
      "qty": 500,
      "rate": 20.4,
      "label": "Pack of 500 (₹10,200)"
    },
    {
      "qty": 1000,
      "rate": 20,
      "label": "Pack of 1000 (₹19,999)"
    }
  ]
},
  {
  "id": "prod-cat-3-ply-white-corrugat-28",
  "slug": "3-ply-white-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c",
  "title": "3 Ply White Corrugated Flap Box Size 14x13x2.5 Inch I Large Kraft Box for Clothing, Calendars, and Flat Product Shipping",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/3-ply-white-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_0.webp",
  "images": [
    "/assets/boxes/3-ply-white-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_0.webp",
    "/assets/boxes/3-ply-white-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_1.webp",
    "/assets/boxes/3-ply-white-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_2.webp"
  ],
  "price": 40.76,
  "startingAt": 40.76,
  "moq": 10,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 129,
  "specs": [
    "14\" × 13\" × 2.5\" (35.6 × 33.0 × 6.3 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "14\" × 13\" × 2.5\" (35.6 × 33.0 × 6.3 cm)",
  "desc": "Buy 14x13x2.5-inch white flap boxes online at AS Print Gallery.com – perfect for wide products like apparel, books, and corporate gifting. Durable 3 ply corrugat",
  "fullDesc": "Buy 14x13x2.5-inch white flap boxes online at AS Print Gallery.com – perfect for wide products like apparel, books, and corporate gifting. Durable 3 ply corrugat",
  "tiers": [
    {
      "qty": 10,
      "rate": 40.76,
      "label": "Pack of 10 (₹408)"
    },
    {
      "qty": 20,
      "rate": 39.9,
      "label": "Pack of 20 (₹798)"
    },
    {
      "qty": 40,
      "rate": 39,
      "label": "Pack of 40 (₹1,560)"
    },
    {
      "qty": 100,
      "rate": 38.5,
      "label": "Pack of 100 (₹3,850)"
    },
    {
      "qty": 500,
      "rate": 38,
      "label": "Pack of 500 (₹19,000)"
    }
  ]
},
  {
  "id": "prod-cat-3ply-white-flap-box--29",
  "slug": "3ply-white-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busine",
  "title": "3Ply White Flap Box 4x4x2 Inch-Ultimate Packaging Solution for Small Businesses",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/3ply-white-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busine_0.webp",
  "images": [
    "/assets/boxes/3ply-white-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busine_0.webp",
    "/assets/boxes/3ply-white-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busine_1.webp",
    "/assets/boxes/3ply-white-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busine_2.webp"
  ],
  "price": 8.08,
  "startingAt": 8.08,
  "moq": 25,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 132,
  "specs": [
    "4\" × 4\" × 2\" (10.2 × 10.2 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "4\" × 4\" × 2\" (10.2 × 10.2 × 5.1 cm)",
  "desc": "Buy a high-quality 4x4x2 inch White flap corrugated box online – perfect for lightweight items like gifts, cosmetics, jewelry, and small accessories.",
  "fullDesc": "Buy a high-quality 4x4x2 inch White flap corrugated box online – perfect for lightweight items like gifts, cosmetics, jewelry, and small accessories.",
  "tiers": [
    {
      "qty": 25,
      "rate": 8.08,
      "label": "Pack of 25 (₹202)"
    },
    {
      "qty": 50,
      "rate": 7.8,
      "label": "Pack of 50 (₹390)"
    },
    {
      "qty": 100,
      "rate": 7.8,
      "label": "Pack of 100 (₹780)"
    },
    {
      "qty": 500,
      "rate": 7.7,
      "label": "Pack of 500 (₹3,850)"
    },
    {
      "qty": 1000,
      "rate": 7.7,
      "label": "Pack of 1000 (₹7,700)"
    }
  ]
},
  {
  "id": "prod-cat-3-ply-white-corrugat-30",
  "slug": "3-ply-white-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag",
  "title": "3 Ply White Corrugated Flap Box Size 4.5x3x1 Inch | Jewellery And Gift Packaging box",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/3-ply-white-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_0.webp",
  "images": [
    "/assets/boxes/3-ply-white-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_0.webp",
    "/assets/boxes/3-ply-white-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_1.webp",
    "/assets/boxes/3-ply-white-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_2.webp"
  ],
  "price": 4.27,
  "startingAt": 4.27,
  "moq": 100,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 135,
  "specs": [
    "4.5\" × 3\" × 1\" (11.4 × 7.6 × 2.5 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "4.5\" × 3\" × 1\" (11.4 × 7.6 × 2.5 cm)",
  "desc": "Durable 3 Ply White Flap Box 4.5x3x1 Inch—eco-friendly & customizable. Free shipping on 1000+ pieces. Upgrade your packaging with AS Print Gallery.com.",
  "fullDesc": "Durable 3 Ply White Flap Box 4.5x3x1 Inch—eco-friendly & customizable. Free shipping on 1000+ pieces. Upgrade your packaging with AS Print Gallery.com.",
  "tiers": [
    {
      "qty": 100,
      "rate": 4.27,
      "label": "Pack of 100 (₹427)"
    },
    {
      "qty": 500,
      "rate": 4.1,
      "label": "Pack of 500 (₹2,048)"
    },
    {
      "qty": 1000,
      "rate": 3.9,
      "label": "Pack of 1000 (₹3,905)"
    },
    {
      "qty": 2000,
      "rate": 3.76,
      "label": "Pack of 2000 (₹7,524)"
    }
  ]
},
  {
  "id": "prod-cat-white-flap-box-3-ply-31",
  "slug": "white-flap-box-3-ply-white-flap-corrugated-box-size-6x5x1-5-inch-multipurpo",
  "title": "3 Ply White Flap Corrugated Box – Size 6x5x1.5 Inch | Multipurpose White Corrugated Box for Small Item Packaging",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_0.webp",
  "images": [
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_0.webp",
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_1.webp",
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_2.webp"
  ],
  "price": 10.44,
  "startingAt": 10.44,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 138,
  "specs": [
    "6\" × 5\" × 1.5\" (15.2 × 12.7 × 3.8 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "6\" × 5\" × 1.5\" (15.2 × 12.7 × 3.8 cm)",
  "desc": "Get 6x5x1.5 inch White flap corrugated boxes for packaging gifts, soaps, accessories, and cosmetics. Eco-friendly, foldable, and strong – available at",
  "fullDesc": "Get 6x5x1.5 inch White flap corrugated boxes for packaging gifts, soaps, accessories, and cosmetics. Eco-friendly, foldable, and strong – available at",
  "tiers": [
    {
      "qty": 50,
      "rate": 10.44,
      "label": "Pack of 50 (₹522)"
    },
    {
      "qty": 100,
      "rate": 9.8,
      "label": "Pack of 100 (₹980)"
    },
    {
      "qty": 500,
      "rate": 9.6,
      "label": "Pack of 500 (₹4,800)"
    },
    {
      "qty": 1000,
      "rate": 9.5,
      "label": "Pack of 1000 (₹9,500)"
    }
  ]
},
  {
  "id": "prod-cat-white-flap-box-3-ply-32",
  "slug": "white-flap-box-3-ply-white-flap-corrugated-box-size-7x5-5x2-inch-i-premium",
  "title": "3 Ply White Flap Corrugated Box – Size 7x5.5x2 Inch I Premium Corrugated Box for Shipping Gifts, Cosmetics & More",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x5-5x2-inch-i-premium_0.webp",
  "images": [
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x5-5x2-inch-i-premium_0.webp",
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x5-5x2-inch-i-premium_1.webp",
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x5-5x2-inch-i-premium_2.webp"
  ],
  "price": 11.35,
  "startingAt": 11.35,
  "moq": 25,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 141,
  "specs": [
    "7\" × 5.5\" × 2\" (17.8 × 14.0 × 5.1 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "7\" × 5.5\" × 2\" (17.8 × 14.0 × 5.1 cm)",
  "desc": "Order a 7x5.5x2 inch White flap corrugated box online. Ideal for gifts, skin care, jewelry & more. Durable, eco-friendly, and perfect for small produc",
  "fullDesc": "Order a 7x5.5x2 inch White flap corrugated box online. Ideal for gifts, skin care, jewelry & more. Durable, eco-friendly, and perfect for small produc",
  "tiers": [
    {
      "qty": 25,
      "rate": 11.35,
      "label": "Pack of 25 (₹284)"
    },
    {
      "qty": 50,
      "rate": 11.2,
      "label": "Pack of 50 (₹560)"
    },
    {
      "qty": 100,
      "rate": 10.98,
      "label": "Pack of 100 (₹1,098)"
    },
    {
      "qty": 500,
      "rate": 10.8,
      "label": "Pack of 500 (₹5,400)"
    },
    {
      "qty": 1000,
      "rate": 10.6,
      "label": "Pack of 1000 (₹10,600)"
    }
  ]
},
  {
  "id": "prod-cat-white-mug-packaging--33",
  "slug": "white-mug-packaging-box-5-3-5-4-inch-3-ply-corrugated-cardboard-flap-box-fo",
  "title": "White Mug Packaging Box 5×3.5×4 Inch | 3 Ply Corrugated Cardboard Flap Box for Safe Mug Shipping",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/white-mug-packaging-box-5-3-5-4-inch-3-ply-corrugated-cardboard-flap-box-fo_0.webp",
  "images": [
    "/assets/boxes/white-mug-packaging-box-5-3-5-4-inch-3-ply-corrugated-cardboard-flap-box-fo_0.webp",
    "/assets/boxes/white-mug-packaging-box-5-3-5-4-inch-3-ply-corrugated-cardboard-flap-box-fo_1.webp",
    "/assets/boxes/white-mug-packaging-box-5-3-5-4-inch-3-ply-corrugated-cardboard-flap-box-fo_2.webp"
  ],
  "price": 6.63,
  "startingAt": 6.63,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 144,
  "specs": [
    "5\" × 3.5\" × 4\" (12.7 × 8.9 × 10.2 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "5\" × 3.5\" × 4\" (12.7 × 8.9 × 10.2 cm)",
  "desc": "Buy white mug packaging box made from strong 3 ply corrugated cardboard. Secure 5×3.5×4 inch flap box with bottom interlock, ideal for mug shipping, g",
  "fullDesc": "Buy white mug packaging box made from strong 3 ply corrugated cardboard. Secure 5×3.5×4 inch flap box with bottom interlock, ideal for mug shipping, g",
  "tiers": [
    {
      "qty": 50,
      "rate": 6.63,
      "label": "Pack of 50 (₹331)"
    },
    {
      "qty": 100,
      "rate": 6.17,
      "label": "Pack of 100 (₹617)"
    },
    {
      "qty": 500,
      "rate": 5.71,
      "label": "Pack of 500 (₹2,857)"
    },
    {
      "qty": 1000,
      "rate": 5.33,
      "label": "Pack of 1000 (₹5,333)"
    }
  ]
},
  {
  "id": "prod-cat-white-flap-box-3-ply-34",
  "slug": "white-flap-box-3-ply-white-flap-corrugated-box-14x9x3-inch-for-ecommerce",
  "title": "3 Ply White Flap Corrugated Box 14x9x3 Inch for Ecommerce",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-14x9x3-inch-for-ecommerce_0.webp",
  "images": [
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-14x9x3-inch-for-ecommerce_0.webp",
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-14x9x3-inch-for-ecommerce_1.webp",
    "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-14x9x3-inch-for-ecommerce_2.webp"
  ],
  "price": 39.8,
  "startingAt": 39.8,
  "moq": 10,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 97,
  "specs": [
    "14\" × 9\" × 3\" (35.6 × 22.9 × 7.6 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "14\" × 9\" × 3\" (35.6 × 22.9 × 7.6 cm)",
  "desc": "Shop 14x9x3 inch 3 ply white flap corrugated boxes online. Perfect for premium packaging of apparel, gifts, cosmetics, and e-commerce products.",
  "fullDesc": "Shop 14x9x3 inch 3 ply white flap corrugated boxes online. Perfect for premium packaging of apparel, gifts, cosmetics, and e-commerce products.",
  "tiers": [
    {
      "qty": 10,
      "rate": 39.8,
      "label": "Pack of 10 (₹398)"
    },
    {
      "qty": 20,
      "rate": 39.5,
      "label": "Pack of 20 (₹790)"
    },
    {
      "qty": 40,
      "rate": 38.75,
      "label": "Pack of 40 (₹1,550)"
    },
    {
      "qty": 100,
      "rate": 38.5,
      "label": "Pack of 100 (₹3,850)"
    },
    {
      "qty": 500,
      "rate": 37.6,
      "label": "Pack of 500 (₹18,800)"
    }
  ]
},
  {
  "id": "prod-cat-white-flap-box-4x2-5-35",
  "slug": "white-flap-box-4x2-5x1-5-inch-white-flap-corrugated-box-3-ply-mini-hamper-p",
  "title": "4x2.5x1.5 Inch White Flap Corrugated Box | 3 Ply Mini hamper Packaging Box for Jewelry, Gifts & E-commerce Shipping",
  "category": "corrugated",
  "categoryLabel": "White Flap Corrugated Boxes",
  "image": "/assets/boxes/white-flap-box-4x2-5x1-5-inch-white-flap-corrugated-box-3-ply-mini-hamper-p_0.webp",
  "images": [
    "/assets/boxes/white-flap-box-4x2-5x1-5-inch-white-flap-corrugated-box-3-ply-mini-hamper-p_0.webp",
    "/assets/boxes/white-flap-box-4x2-5x1-5-inch-white-flap-corrugated-box-3-ply-mini-hamper-p_1.webp",
    "/assets/boxes/white-flap-box-4x2-5x1-5-inch-white-flap-corrugated-box-3-ply-mini-hamper-p_2.webp"
  ],
  "price": 5.68,
  "startingAt": 5.68,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 100,
  "specs": [
    "4\" × 2.5\" × 1.5\" (10.2 × 6.3 × 3.8 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "4\" × 2.5\" × 1.5\" (10.2 × 6.3 × 3.8 cm)",
  "desc": "Buy 4x2.5x1.5 inch corrugated White flap box for jewelry, gifts & e-commerce packaging. Strong, lightweight & budget-friendly packaging solution by Gu",
  "fullDesc": "Buy 4x2.5x1.5 inch corrugated White flap box for jewelry, gifts & e-commerce packaging. Strong, lightweight & budget-friendly packaging solution by Gu",
  "tiers": [
    {
      "qty": 50,
      "rate": 5.68,
      "label": "Pack of 50 (₹284)"
    },
    {
      "qty": 100,
      "rate": 5.6,
      "label": "Pack of 100 (₹560)"
    },
    {
      "qty": 500,
      "rate": 5.24,
      "label": "Pack of 500 (₹2,619)"
    },
    {
      "qty": 1000,
      "rate": 4.95,
      "label": "Pack of 1000 (₹4,952)"
    }
  ]
},
  {
  "id": "prod-cat-premium-red-foldable-36",
  "slug": "premium-red-foldable-gift-box-with-ribbon-luxury-rigid-box-for-gift-hampers",
  "title": "AS Print Gallery Premium Red Foldable Gift Box with Ribbon | Luxury Rigid Box for Gift Hampers, Weddings & Corporate Gifting (23 × 16 × 10 cm)",
  "category": "packaging",
  "categoryLabel": "Rigid Luxury Boxes",
  "image": "/assets/boxes/premium-red-foldable-gift-box-with-ribbon-luxury-rigid-box-for-gift-hampers_0.webp",
  "images": [
    "/assets/boxes/premium-red-foldable-gift-box-with-ribbon-luxury-rigid-box-for-gift-hampers_0.webp",
    "/assets/boxes/premium-red-foldable-gift-box-with-ribbon-luxury-rigid-box-for-gift-hampers_1.webp",
    "/assets/boxes/premium-red-foldable-gift-box-with-ribbon-luxury-rigid-box-for-gift-hampers_2.webp",
    "/assets/boxes/premium-red-foldable-gift-box-with-ribbon-luxury-rigid-box-for-gift-hampers_3.webp"
  ],
  "price": 236.19,
  "startingAt": 236.19,
  "moq": 1,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 103,
  "specs": [
    "9.1\" × 6.3\" × 3.9\" (23 × 16 × 10 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "9.1\" × 6.3\" × 3.9\" (23 × 16 × 10 cm)",
  "desc": "Buy premium red foldable gift boxes with ribbon from AS Print Gallery. Ideal for gift hampers, weddings, corporate gifting, festivals, chocolates, dry fruits, an",
  "fullDesc": "Buy premium red foldable gift boxes with ribbon from AS Print Gallery. Ideal for gift hampers, weddings, corporate gifting, festivals, chocolates, dry fruits, an",
  "tiers": [
    {
      "qty": 1,
      "rate": 236.19,
      "label": "Pack of 1 (₹236)"
    },
    {
      "qty": 5,
      "rate": 190.29,
      "label": "Pack of 5 (₹951)"
    },
    {
      "qty": 20,
      "rate": 185.71,
      "label": "Pack of 20 (₹3,714)"
    },
    {
      "qty": 100,
      "rate": 176.19,
      "label": "Pack of 100 (₹17,619)"
    }
  ]
},
  {
  "id": "prod-cat-premium-yellow-rakhi-37",
  "slug": "premium-yellow-rakhi-gift-box-with-golden-ribbon-18-13-7-cm-luxury-rigid-bo",
  "title": "Premium Yellow Rakhi Gift Box with Golden Ribbon (18 × 13 × 7 cm) | Luxury Rigid Box for Raksha Bandhan Gifts, Chocolates, Dry Fruits & Gift Hampers",
  "category": "packaging",
  "categoryLabel": "Rigid Luxury Boxes",
  "image": "/assets/boxes/premium-yellow-rakhi-gift-box-with-golden-ribbon-18-13-7-cm-luxury-rigid-bo_0.webp",
  "images": [
    "/assets/boxes/premium-yellow-rakhi-gift-box-with-golden-ribbon-18-13-7-cm-luxury-rigid-bo_0.webp",
    "/assets/boxes/premium-yellow-rakhi-gift-box-with-golden-ribbon-18-13-7-cm-luxury-rigid-bo_1.webp",
    "/assets/boxes/premium-yellow-rakhi-gift-box-with-golden-ribbon-18-13-7-cm-luxury-rigid-bo_2.webp",
    "/assets/boxes/premium-yellow-rakhi-gift-box-with-golden-ribbon-18-13-7-cm-luxury-rigid-bo_3.webp"
  ],
  "price": 189.52,
  "startingAt": 189.52,
  "moq": 1,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 106,
  "specs": [
    "7.1\" × 5.1\" × 2.8\" (18 × 13 × 7 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "7.1\" × 5.1\" × 2.8\" (18 × 13 × 7 cm)",
  "desc": "Buy the Premium Rakhi Gift Box with Ribbon (18 × 13 × 7 cm) from AS Print Gallery. Perfect for Rakhi, chocolates, dry fruits, sweets, jewellery, festive ha",
  "fullDesc": "Buy the Premium Rakhi Gift Box with Ribbon (18 × 13 × 7 cm) from AS Print Gallery. Perfect for Rakhi, chocolates, dry fruits, sweets, jewellery, festive ha",
  "tiers": [
    {
      "qty": 1,
      "rate": 189.52,
      "label": "Pack of 1 (₹190)"
    },
    {
      "qty": 5,
      "rate": 152.38,
      "label": "Pack of 5 (₹762)"
    },
    {
      "qty": 20,
      "rate": 147.62,
      "label": "Pack of 20 (₹2,952)"
    },
    {
      "qty": 100,
      "rate": 142.86,
      "label": "Pack of 100 (₹14,286)"
    }
  ]
},
  {
  "id": "prod-cat-premium-purple-rakhi-38",
  "slug": "premium-purple-rakhi-gift-box-with-black-ribbon-18-13-7-cm-luxury-rigid-box",
  "title": "AS Print Gallery Premium Purple Rakhi Gift Box with Black Ribbon (18 × 13 × 7 cm) | Luxury Rigid Box for Raksha Bandhan Gifts, Chocolates, Dry Fruits & Gift Hamp",
  "category": "packaging",
  "categoryLabel": "Rigid Luxury Boxes",
  "image": "/assets/boxes/premium-purple-rakhi-gift-box-with-black-ribbon-18-13-7-cm-luxury-rigid-box_0.webp",
  "images": [
    "/assets/boxes/premium-purple-rakhi-gift-box-with-black-ribbon-18-13-7-cm-luxury-rigid-box_0.webp",
    "/assets/boxes/premium-purple-rakhi-gift-box-with-black-ribbon-18-13-7-cm-luxury-rigid-box_1.webp",
    "/assets/boxes/premium-purple-rakhi-gift-box-with-black-ribbon-18-13-7-cm-luxury-rigid-box_2.webp",
    "/assets/boxes/premium-purple-rakhi-gift-box-with-black-ribbon-18-13-7-cm-luxury-rigid-box_3.webp"
  ],
  "price": 189.52,
  "startingAt": 189.52,
  "moq": 1,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 109,
  "specs": [
    "7.1\" × 5.1\" × 2.8\" (18 × 13 × 7 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "7.1\" × 5.1\" × 2.8\" (18 × 13 × 7 cm)",
  "desc": "Buy the Premium Purple Rakhi Gift Box with Ribbon (18 × 13 × 7 cm) from AS Print Gallery. Ideal for Rakhi, chocolates, dry fruits, sweets, jewellery, festi",
  "fullDesc": "Buy the Premium Purple Rakhi Gift Box with Ribbon (18 × 13 × 7 cm) from AS Print Gallery. Ideal for Rakhi, chocolates, dry fruits, sweets, jewellery, festi",
  "tiers": [
    {
      "qty": 1,
      "rate": 189.52,
      "label": "Pack of 1 (₹190)"
    },
    {
      "qty": 5,
      "rate": 152.38,
      "label": "Pack of 5 (₹762)"
    },
    {
      "qty": 20,
      "rate": 147.62,
      "label": "Pack of 20 (₹2,952)"
    },
    {
      "qty": 100,
      "rate": 142.86,
      "label": "Pack of 100 (₹14,286)"
    }
  ]
},
  {
  "id": "prod-cat-4-cavity-red-diwali--39",
  "slug": "4-cavity-red-diwali-rigid-gift-box-size-18x16-5x-4-cm-pack-of-1",
  "title": "4 Cavity Red Diwali Rigid Gift Box Size 18X16.5X 4 cm– Pack of 1 | AS Print Gallery",
  "category": "packaging",
  "categoryLabel": "Rigid Luxury Boxes",
  "image": "/assets/boxes/4-cavity-red-diwali-rigid-gift-box-size-18x16-5x-4-cm-pack-of-1_0.webp",
  "images": [
    "/assets/boxes/4-cavity-red-diwali-rigid-gift-box-size-18x16-5x-4-cm-pack-of-1_0.webp",
    "/assets/boxes/4-cavity-red-diwali-rigid-gift-box-size-18x16-5x-4-cm-pack-of-1_1.webp",
    "/assets/boxes/4-cavity-red-diwali-rigid-gift-box-size-18x16-5x-4-cm-pack-of-1_2.webp",
    "/assets/boxes/4-cavity-red-diwali-rigid-gift-box-size-18x16-5x-4-cm-pack-of-1_3.webp"
  ],
  "price": 166.67,
  "startingAt": 166.67,
  "moq": 1,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 112,
  "specs": [
    "7.1\" × 6.5\" × 1.6\" (18 × 16.5 × 4 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "7.1\" × 6.5\" × 1.6\" (18 × 16.5 × 4 cm)",
  "desc": "Buy AS Print Gallery 4 cavity Diwali rigid gift box with removable compartments and golden ribbon. Red Happy Diwali box in 18 × 16.5 × 4 cm size.",
  "fullDesc": "Buy AS Print Gallery 4 cavity Diwali rigid gift box with removable compartments and golden ribbon. Red Happy Diwali box in 18 × 16.5 × 4 cm size.",
  "tiers": [
    {
      "qty": 1,
      "rate": 166.67,
      "label": "Pack of 1 (₹167)"
    },
    {
      "qty": 5,
      "rate": 94.86,
      "label": "Pack of 5 (₹474)"
    },
    {
      "qty": 20,
      "rate": 85.71,
      "label": "Pack of 20 (₹1,714)"
    },
    {
      "qty": 100,
      "rate": 76.19,
      "label": "Pack of 100 (₹7,619)"
    }
  ]
},
  {
  "id": "prod-cat-yellow-4-cavity-diwa-40",
  "slug": "yellow-4-cavity-diwali-gift-box-pack-of-1",
  "title": "AS Print Gallery Yellow 4 Cavity Diwali Gift Box – Pack of 1",
  "category": "packaging",
  "categoryLabel": "Rigid Luxury Boxes",
  "image": "/assets/boxes/yellow-4-cavity-diwali-gift-box-pack-of-1_0.webp",
  "images": [
    "/assets/boxes/yellow-4-cavity-diwali-gift-box-pack-of-1_0.webp",
    "/assets/boxes/yellow-4-cavity-diwali-gift-box-pack-of-1_1.webp",
    "/assets/boxes/yellow-4-cavity-diwali-gift-box-pack-of-1_2.webp",
    "/assets/boxes/yellow-4-cavity-diwali-gift-box-pack-of-1_3.webp"
  ],
  "price": 166.67,
  "startingAt": 166.67,
  "moq": 1,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 115,
  "specs": [
    "7.1\" × 6.5\" × 1.6\" (18 × 16.5 × 4 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "7.1\" × 6.5\" × 1.6\" (18 × 16.5 × 4 cm)",
  "desc": "Buy AS Print Gallery yellow 4 cavity Diwali rigid gift box with removable compartments and golden ribbon. Happy Diwali box in 18 × 16.5 × 4 cm size.",
  "fullDesc": "Buy AS Print Gallery yellow 4 cavity Diwali rigid gift box with removable compartments and golden ribbon. Happy Diwali box in 18 × 16.5 × 4 cm size.",
  "tiers": [
    {
      "qty": 1,
      "rate": 166.67,
      "label": "Pack of 1 (₹167)"
    },
    {
      "qty": 5,
      "rate": 94.86,
      "label": "Pack of 5 (₹474)"
    },
    {
      "qty": 20,
      "rate": 85.71,
      "label": "Pack of 20 (₹1,714)"
    },
    {
      "qty": 100,
      "rate": 76.19,
      "label": "Pack of 100 (₹7,619)"
    }
  ]
},
  {
  "id": "prod-cat-purple-4-cavity-diwa-41",
  "slug": "purple-4-cavity-diwali-rigid-gift-box-size-18-16-5-4-cm-pack-of-1",
  "title": "AS Print Gallery Purple 4 Cavity Diwali Rigid Gift Box Size 18 × 16.5 × 4 cm – Pack of 1",
  "category": "packaging",
  "categoryLabel": "Rigid Luxury Boxes",
  "image": "/assets/boxes/purple-4-cavity-diwali-rigid-gift-box-size-18-16-5-4-cm-pack-of-1_0.webp",
  "images": [
    "/assets/boxes/purple-4-cavity-diwali-rigid-gift-box-size-18-16-5-4-cm-pack-of-1_0.webp",
    "/assets/boxes/purple-4-cavity-diwali-rigid-gift-box-size-18-16-5-4-cm-pack-of-1_1.webp",
    "/assets/boxes/purple-4-cavity-diwali-rigid-gift-box-size-18-16-5-4-cm-pack-of-1_2.webp",
    "/assets/boxes/purple-4-cavity-diwali-rigid-gift-box-size-18-16-5-4-cm-pack-of-1_3.webp"
  ],
  "price": 166.67,
  "startingAt": 166.67,
  "moq": 1,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 118,
  "specs": [
    "7.1\" × 6.5\" × 1.6\" (18 × 16.5 × 4 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "7.1\" × 6.5\" × 1.6\" (18 × 16.5 × 4 cm)",
  "desc": "Shop the AS Print Gallery purple 4-cavity Diwali rigid gift box with removable divider and golden ribbon. Empty festive box in 18 × 16.5 × 4 cm size.",
  "fullDesc": "Shop the AS Print Gallery purple 4-cavity Diwali rigid gift box with removable divider and golden ribbon. Empty festive box in 18 × 16.5 × 4 cm size.",
  "tiers": [
    {
      "qty": 1,
      "rate": 166.67,
      "label": "Pack of 1 (₹167)"
    },
    {
      "qty": 5,
      "rate": 94.86,
      "label": "Pack of 5 (₹474)"
    },
    {
      "qty": 20,
      "rate": 85.71,
      "label": "Pack of 20 (₹1,714)"
    },
    {
      "qty": 100,
      "rate": 76.19,
      "label": "Pack of 100 (₹7,619)"
    }
  ]
},
  {
  "id": "prod-cat-purple-shubh-deepawa-42",
  "slug": "purple-shubh-deepawali-4-cavity-rigid-gift-box-with-golden-ribbon-18-16-5-4",
  "title": "Purple Shubh Deepawali 4 Cavity Rigid Gift Box with Golden Ribbon, 18 × 16.5 × 4 cm",
  "category": "packaging",
  "categoryLabel": "Rigid Luxury Boxes",
  "image": "/assets/boxes/purple-shubh-deepawali-4-cavity-rigid-gift-box-with-golden-ribbon-18-16-5-4_0.webp",
  "images": [
    "/assets/boxes/purple-shubh-deepawali-4-cavity-rigid-gift-box-with-golden-ribbon-18-16-5-4_0.webp",
    "/assets/boxes/purple-shubh-deepawali-4-cavity-rigid-gift-box-with-golden-ribbon-18-16-5-4_1.webp",
    "/assets/boxes/purple-shubh-deepawali-4-cavity-rigid-gift-box-with-golden-ribbon-18-16-5-4_2.webp",
    "/assets/boxes/purple-shubh-deepawali-4-cavity-rigid-gift-box-with-golden-ribbon-18-16-5-4_3.webp"
  ],
  "price": 166.67,
  "startingAt": 166.67,
  "moq": 1,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 121,
  "specs": [
    "7.1\" × 6.5\" × 1.6\" (18 × 16.5 × 4 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "7.1\" × 6.5\" × 1.6\" (18 × 16.5 × 4 cm)",
  "desc": "Buy the AS Print Gallery purple 4 cavity Diwali rigid gift box with removable divider and golden ribbon. Empty Shubh Deepawali box in 18 × 16.5 × 4 cm.",
  "fullDesc": "Buy the AS Print Gallery purple 4 cavity Diwali rigid gift box with removable divider and golden ribbon. Empty Shubh Deepawali box in 18 × 16.5 × 4 cm.",
  "tiers": [
    {
      "qty": 1,
      "rate": 166.67,
      "label": "Pack of 1 (₹167)"
    },
    {
      "qty": 5,
      "rate": 94.86,
      "label": "Pack of 5 (₹474)"
    },
    {
      "qty": 20,
      "rate": 85.71,
      "label": "Pack of 20 (₹1,714)"
    },
    {
      "qty": 100,
      "rate": 76.19,
      "label": "Pack of 100 (₹7,619)"
    }
  ]
},
  {
  "id": "prod-cat-burger-packaging-box-43",
  "slug": "burger-packaging-box-4-4-2-75-inch-sbs-paper-food-packaging-box-for-takeawa",
  "title": "Burger Packaging Box (4 × 4 × 2.75 Inch)—SBS Paper Food Packaging Box for Takeaway & Delivery",
  "category": "food",
  "categoryLabel": "Food Packaging Boxes & Containers",
  "image": "/assets/boxes/burger-packaging-box-4-4-2-75-inch-sbs-paper-food-packaging-box-for-takeawa_0.webp",
  "images": [
    "/assets/boxes/burger-packaging-box-4-4-2-75-inch-sbs-paper-food-packaging-box-for-takeawa_0.webp",
    "/assets/boxes/burger-packaging-box-4-4-2-75-inch-sbs-paper-food-packaging-box-for-takeawa_1.webp",
    "/assets/boxes/burger-packaging-box-4-4-2-75-inch-sbs-paper-food-packaging-box-for-takeawa_2.webp",
    "/assets/boxes/burger-packaging-box-4-4-2-75-inch-sbs-paper-food-packaging-box-for-takeawa_3.webp"
  ],
  "price": 5.52,
  "startingAt": 5.52,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 124,
  "specs": [
    "4\" × 4\" × 2.75\" (10.2 × 10.2 × 7.0 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "4\" × 4\" × 2.75\" (10.2 × 10.2 × 7.0 cm)",
  "desc": "Buy 4×4×2.75 inch SBS paper burger packaging boxes. Ideal for restaurants, cafés, takeaway, cloud kitchens, and food delivery services.",
  "fullDesc": "Buy 4×4×2.75 inch SBS paper burger packaging boxes. Ideal for restaurants, cafés, takeaway, cloud kitchens, and food delivery services.",
  "tiers": [
    {
      "qty": 50,
      "rate": 5.52,
      "label": "Pack of 50 (₹276)"
    },
    {
      "qty": 100,
      "rate": 5.43,
      "label": "Pack of 100 (₹543)"
    },
    {
      "qty": 500,
      "rate": 5.24,
      "label": "Pack of 500 (₹2,619)"
    },
    {
      "qty": 1000,
      "rate": 5.14,
      "label": "Pack of 1000 (₹5,143)"
    }
  ]
},
  {
  "id": "prod-cat-sandwich-packaging-b-44",
  "slug": "sandwich-packaging-box-22-16-7-cm-premium-sbs-paper-food-packaging-box",
  "title": "Sandwich Packaging Box (22 × 16 × 7 cm) – Premium SBS Paper Food Packaging Box",
  "category": "food",
  "categoryLabel": "Food Packaging Boxes & Containers",
  "image": "/assets/boxes/sandwich-packaging-box-22-16-7-cm-premium-sbs-paper-food-packaging-box_0.webp",
  "images": [
    "/assets/boxes/sandwich-packaging-box-22-16-7-cm-premium-sbs-paper-food-packaging-box_0.webp",
    "/assets/boxes/sandwich-packaging-box-22-16-7-cm-premium-sbs-paper-food-packaging-box_1.webp",
    "/assets/boxes/sandwich-packaging-box-22-16-7-cm-premium-sbs-paper-food-packaging-box_2.webp",
    "/assets/boxes/sandwich-packaging-box-22-16-7-cm-premium-sbs-paper-food-packaging-box_3.webp"
  ],
  "price": 9.14,
  "startingAt": 9.14,
  "moq": 25,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 127,
  "specs": [
    "8.7\" × 6.3\" × 2.8\" (22 × 16 × 7 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "8.7\" × 6.3\" × 2.8\" (22 × 16 × 7 cm)",
  "desc": "Buy 22×16×7 cm SBS paper sandwich packaging boxes. Ideal for cafés, restaurants, bakeries, takeaway, and food delivery services.",
  "fullDesc": "Buy 22×16×7 cm SBS paper sandwich packaging boxes. Ideal for cafés, restaurants, bakeries, takeaway, and food delivery services.",
  "tiers": [
    {
      "qty": 25,
      "rate": 9.14,
      "label": "Pack of 25 (₹229)"
    },
    {
      "qty": 50,
      "rate": 9.05,
      "label": "Pack of 50 (₹452)"
    },
    {
      "qty": 100,
      "rate": 8.57,
      "label": "Pack of 100 (₹857)"
    },
    {
      "qty": 500,
      "rate": 8.38,
      "label": "Pack of 500 (₹4,190)"
    },
    {
      "qty": 1000,
      "rate": 8.29,
      "label": "Pack of 1000 (₹8,286)"
    }
  ]
},
  {
  "id": "prod-cat-multicolour-printed--45",
  "slug": "multicolour-printed-corrugated-pizza-box-for-7x7x1-5-inch-pizza-pack-of-50",
  "title": "Multicolour Printed Corrugated Pizza Box for 7x7x1.5-Inch Pizza – Pack of 50",
  "category": "food",
  "categoryLabel": "Food Packaging Boxes & Containers",
  "image": "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-7x7x1-5-inch-pizza-pack-of-50_0.webp",
  "images": [
    "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-7x7x1-5-inch-pizza-pack-of-50_0.webp",
    "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-7x7x1-5-inch-pizza-pack-of-50_1.webp",
    "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-7x7x1-5-inch-pizza-pack-of-50_2.webp",
    "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-7x7x1-5-inch-pizza-pack-of-50_3.webp"
  ],
  "price": 8.19,
  "startingAt": 8.19,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 130,
  "specs": [
    "7\" × 7\" × 1.5\" (17.8 × 17.8 × 3.8 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "7\" × 7\" × 1.5\" (17.8 × 17.8 × 3.8 cm)",
  "desc": "Buy AS Print Gallery 7×7×1.5 inch 3 ply printed pizza boxes in a pack of 50. Includes a random mix of three colourful designs for 7-inch pizzas.",
  "fullDesc": "Buy AS Print Gallery 7×7×1.5 inch 3 ply printed pizza boxes in a pack of 50. Includes a random mix of three colourful designs for 7-inch pizzas.",
  "tiers": [
    {
      "qty": 50,
      "rate": 8.19,
      "label": "Pack of 50 (₹410)"
    },
    {
      "qty": 100,
      "rate": 7.6,
      "label": "Pack of 100 (₹760)"
    },
    {
      "qty": 500,
      "rate": 7.43,
      "label": "Pack of 500 (₹3,714)"
    },
    {
      "qty": 1000,
      "rate": 7.14,
      "label": "Pack of 1000 (₹7,143)"
    }
  ]
},
  {
  "id": "prod-cat-multicolour-printed--46",
  "slug": "multicolour-printed-corrugated-pizza-box-for-9x9x1-5-inch-pizza-pack-of-50",
  "title": "Multicolour Printed Corrugated Pizza Box for 9x9x1.5-Inch Pizza – Pack of 50",
  "category": "food",
  "categoryLabel": "Food Packaging Boxes & Containers",
  "image": "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-9x9x1-5-inch-pizza-pack-of-50_0.webp",
  "images": [
    "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-9x9x1-5-inch-pizza-pack-of-50_0.webp",
    "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-9x9x1-5-inch-pizza-pack-of-50_1.webp",
    "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-9x9x1-5-inch-pizza-pack-of-50_2.webp",
    "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-9x9x1-5-inch-pizza-pack-of-50_3.webp"
  ],
  "price": 10.48,
  "startingAt": 10.48,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 133,
  "specs": [
    "9\" × 9\" × 1.5\" (22.9 × 22.9 × 3.8 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "9\" × 9\" × 1.5\" (22.9 × 22.9 × 3.8 cm)",
  "desc": "Buy AS Print Gallery 9×9×1.5 inch 3 Ply Printed Pizza Boxes in a pack of 50. Includes a random mix of three colourful designs, ideal for 9-inch pizzas, takeaway,",
  "fullDesc": "Buy AS Print Gallery 9×9×1.5 inch 3 Ply Printed Pizza Boxes in a pack of 50. Includes a random mix of three colourful designs, ideal for 9-inch pizzas, takeaway,",
  "tiers": [
    {
      "qty": 50,
      "rate": 10.48,
      "label": "Pack of 50 (₹524)"
    },
    {
      "qty": 100,
      "rate": 10,
      "label": "Pack of 100 (₹1,000)"
    },
    {
      "qty": 500,
      "rate": 9.71,
      "label": "Pack of 500 (₹4,857)"
    },
    {
      "qty": 1000,
      "rate": 9.33,
      "label": "Pack of 1000 (₹9,333)"
    }
  ]
},
  {
  "id": "prod-cat-4-4-4-inch-printed-p-47",
  "slug": "4-4-4-inch-printed-pastry-box-for-2-pastries-cupcakes-donuts-desserts-multi",
  "title": "4 × 4 × 4 Inch Printed Pastry Box for 2 Pastries, Cupcakes, Donuts & Desserts - Multicolour Maroon, Pack of 50",
  "category": "food",
  "categoryLabel": "Food Packaging Boxes & Containers",
  "image": "/assets/boxes/4-4-4-inch-printed-pastry-box-for-2-pastries-cupcakes-donuts-desserts-multi_0.webp",
  "images": [
    "/assets/boxes/4-4-4-inch-printed-pastry-box-for-2-pastries-cupcakes-donuts-desserts-multi_0.webp",
    "/assets/boxes/4-4-4-inch-printed-pastry-box-for-2-pastries-cupcakes-donuts-desserts-multi_1.webp",
    "/assets/boxes/4-4-4-inch-printed-pastry-box-for-2-pastries-cupcakes-donuts-desserts-multi_2.webp",
    "/assets/boxes/4-4-4-inch-printed-pastry-box-for-2-pastries-cupcakes-donuts-desserts-multi_3.webp"
  ],
  "price": 5.52,
  "startingAt": 5.52,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 136,
  "specs": [
    "4\" × 4\" × 4\" (10.2 × 10.2 × 10.2 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "4\" × 4\" × 4\" (10.2 × 10.2 × 10.2 cm)",
  "desc": "Buy printed pastry boxes in a pack of 50, each measuring 4 × 4 × 4 inches. Food-grade maroon boxes for two small pastries, cupcakes, donuts and desser",
  "fullDesc": "Buy printed pastry boxes in a pack of 50, each measuring 4 × 4 × 4 inches. Food-grade maroon boxes for two small pastries, cupcakes, donuts and desser",
  "tiers": [
    {
      "qty": 50,
      "rate": 5.52,
      "label": "Pack of 50 (₹276)"
    },
    {
      "qty": 100,
      "rate": 5.43,
      "label": "Pack of 100 (₹543)"
    },
    {
      "qty": 500,
      "rate": 5.24,
      "label": "Pack of 500 (₹2,619)"
    },
    {
      "qty": 1000,
      "rate": 5.14,
      "label": "Pack of 1000 (₹5,143)"
    }
  ]
},
  {
  "id": "prod-cat-7-5-4-inch-printed-p-48",
  "slug": "7-5-4-inch-printed-pastry-box-for-6-pastries-cupcakes-donuts-desserts-3-ass",
  "title": "7 × 5 × 4 Inch Printed Pastry Box for 6 Pastries, Cupcakes, Donuts & Desserts – 3 Assorted Designs, Pack of 50",
  "category": "food",
  "categoryLabel": "Food Packaging Boxes & Containers",
  "image": "/assets/boxes/7-5-4-inch-printed-pastry-box-for-6-pastries-cupcakes-donuts-desserts-3-ass_0.webp",
  "images": [
    "/assets/boxes/7-5-4-inch-printed-pastry-box-for-6-pastries-cupcakes-donuts-desserts-3-ass_0.webp",
    "/assets/boxes/7-5-4-inch-printed-pastry-box-for-6-pastries-cupcakes-donuts-desserts-3-ass_1.webp",
    "/assets/boxes/7-5-4-inch-printed-pastry-box-for-6-pastries-cupcakes-donuts-desserts-3-ass_2.webp",
    "/assets/boxes/7-5-4-inch-printed-pastry-box-for-6-pastries-cupcakes-donuts-desserts-3-ass_3.webp"
  ],
  "price": 7.24,
  "startingAt": 7.24,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 139,
  "specs": [
    "7\" × 5\" × 4\" (17.8 × 12.7 × 10.2 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "7\" × 5\" × 4\" (17.8 × 12.7 × 10.2 cm)",
  "desc": "Buy 7×5×4 inch printed pastry boxes for approximately 6 pastries, cupcakes and desserts. Pack of 50 in a random mix of 3 colourful designs.",
  "fullDesc": "Buy 7×5×4 inch printed pastry boxes for approximately 6 pastries, cupcakes and desserts. Pack of 50 in a random mix of 3 colourful designs.",
  "tiers": [
    {
      "qty": 50,
      "rate": 7.24,
      "label": "Pack of 50 (₹362)"
    },
    {
      "qty": 100,
      "rate": 7.05,
      "label": "Pack of 100 (₹705)"
    },
    {
      "qty": 500,
      "rate": 6.67,
      "label": "Pack of 500 (₹3,333)"
    },
    {
      "qty": 1000,
      "rate": 6.38,
      "label": "Pack of 1000 (₹6,381)"
    }
  ]
},
  {
  "id": "prod-cat-5-5-4-inch-printed-p-49",
  "slug": "5-5-4-inch-printed-pastry-box-for-4-pastries-cupcakes-donuts-desserts-3-ass",
  "title": "5×5×4 Inch Printed Pastry Box for 4 Pastries, Cupcakes, Donuts & Desserts – 3 Assorted Designs, Pack of 50",
  "category": "food",
  "categoryLabel": "Food Packaging Boxes & Containers",
  "image": "/assets/boxes/5-5-4-inch-printed-pastry-box-for-4-pastries-cupcakes-donuts-desserts-3-ass_0.webp",
  "images": [
    "/assets/boxes/5-5-4-inch-printed-pastry-box-for-4-pastries-cupcakes-donuts-desserts-3-ass_0.webp",
    "/assets/boxes/5-5-4-inch-printed-pastry-box-for-4-pastries-cupcakes-donuts-desserts-3-ass_1.webp",
    "/assets/boxes/5-5-4-inch-printed-pastry-box-for-4-pastries-cupcakes-donuts-desserts-3-ass_2.webp",
    "/assets/boxes/5-5-4-inch-printed-pastry-box-for-4-pastries-cupcakes-donuts-desserts-3-ass_3.webp"
  ],
  "price": 6.29,
  "startingAt": 6.29,
  "moq": 50,
  "badge": "DIRECT FACTORY",
  "badgeClass": "factory-rate",
  "rating": 4.8,
  "reviews": 142,
  "specs": [
    "5\" × 5\" × 4\" (12.7 × 12.7 × 10.2 cm)",
    "100% Virgin Material",
    "Certified Eco-Friendly",
    "High Bursting Strength"
  ],
  "dimensions": "5\" × 5\" × 4\" (12.7 × 12.7 × 10.2 cm)",
  "desc": "Buy 5×5×4 inch printed pastry boxes for up to 4 small pastries, cupcakes and desserts. Pack of 50 supplied in a random mix of 3 designs.",
  "fullDesc": "Buy 5×5×4 inch printed pastry boxes for up to 4 small pastries, cupcakes and desserts. Pack of 50 supplied in a random mix of 3 designs.",
  "tiers": [
    {
      "qty": 50,
      "rate": 6.29,
      "label": "Pack of 50 (₹314)"
    },
    {
      "qty": 100,
      "rate": 5.9,
      "label": "Pack of 100 (₹590)"
    },
    {
      "qty": 500,
      "rate": 5.52,
      "label": "Pack of 500 (₹2,762)"
    },
    {
      "qty": 1000,
      "rate": 5.33,
      "label": "Pack of 1000 (₹5,333)"
    }
  ]
}
];
