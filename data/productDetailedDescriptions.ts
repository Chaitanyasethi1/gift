/**
 * Detailed specifications, feature breakdowns, deep descriptions, FAQs, and offers
 * for all products in the catalogue. Matches exact layout from user screenshots.
 */

export interface DetailedSpecRow {
  label: string;
  value: string;
}

export interface DetailedFeature {
  title: string;
  desc: string;
}

export interface DetailedSubSection {
  title: string;
  content: string;
}

export interface DetailedFaq {
  q: string;
  a: string;
}

export interface DetailedOffer {
  code: string;
  description: string;
  type: string;
}

export interface ProductDetailInfo {
  productName: string;
  subhead: string;
  specs: DetailedSpecRow[];
  featureHeadline: string;
  features: DetailedFeature[];
  crossSell?: {
    text: string;
    linkSlug: string;
  };
  deepDescription?: {
    headline: string;
    sections: DetailedSubSection[];
  };
  faqs?: DetailedFaq[];
  offers?: DetailedOffer[];
}

export const DETAILED_DESCRIPTIONS: Record<string, ProductDetailInfo> = {
  '3-ply-corrugated-shipping-boxes': {
    productName: 'AS Print 3 Ply Brown Moving Corrugated Box',
    subhead: 'AS Print 3 ply Brown Corrugated Moving Box:',
    specs: [
      { label: 'Product Name', value: 'AS Print 3 Ply Brown Moving Corrugated Box' },
      { label: 'Dimensions (inches)', value: '6 x 4 x 4 inches' },
      { label: 'Dimensions (cm)', value: '15.24 x 10.16 x 10.16 cm' },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Color', value: 'Brown' },
      { label: 'Weight Capacity', value: 'Light to Medium Weight Items' },
      { label: 'Usage', value: 'Shipping, Packing, Storage, E-commerce' },
      { label: 'Customization', value: 'Logo Printing, Custom Sizes' },
      { label: 'Shipping', value: 'Free Pan-India Shipping' }
    ],
    featureHeadline: 'AS Print 3-Ply Brown Corrugated Moving Box (6x4x4 inches)',
    features: [
      {
        title: 'Size & Flexibility',
        desc: 'This box measures 6 inches (Length) x 4 inches (Width) x 4 inches (Height) (15.24 cm x 10.16 cm x 10.16 cm), making it a perfect size for packing a variety of items like small electronics, books, clothes, or personal belongings. It fits easily into any space and keeps your products safe.'
      },
      {
        title: 'Built To Last',
        desc: 'Made with 3-ply corrugated cardboard, this box is super strong. The reinforced edges and sturdy sides ensure your items stay safe during shipping or moving. It\'s built to handle the rough treatment of transit while keeping your goods secure inside.'
      },
      {
        title: 'Perfect For Multiple Uses',
        desc: 'Whether you are moving, packing, shipping, or storing, this box can do it all. It\'s great for packing your books, organizing office supplies, or sending products to customers. It\'s a multi-purpose box that works for many different needs.'
      },
      {
        title: 'Classic Brown Look',
        desc: 'The box has a simple, clean brown design that makes it look professional. This classic color is perfect for both personal and business use, keeping your parcels looking neat and presentable.'
      },
      {
        title: 'Space-Efficient Cube Design',
        desc: 'The cube shape of this box helps you use space efficiently, making sure your items are packed neatly and securely. This design helps prevent things from moving around during shipping or transport.'
      },
      {
        title: 'Can Carry Heavy Items Too',
        desc: 'Even though it\'s compact, this box can hold light to medium-weight items. Whether you\'re packing lightweight books or slightly heavier products, this box can handle it, making it a reliable option for packing and shipping.'
      },
      {
        title: 'E-Commerce Ready',
        desc: 'This box is designed for e-commerce businesses. It is easy to handle and provides great protection, ensuring your products reach customers safely. Whether you\'re sending a gift or shipping products, this box makes the process smooth and easy.'
      }
    ],
    crossSell: {
      text: 'Need A Smaller Box? Check Out Our 6x3x3 Box!',
      linkSlug: '5-ply-heavy-duty-master-cartons'
    },
    deepDescription: {
      headline: 'Product Description About 3-Ply Brown Corrugated Shipping Box (6x4x4 inches)',
      sections: [
        {
          title: 'Types of Packaging Boxes',
          content: 'Depending on the products they contain and the level of protection needed, different types of packaging boxes are available, each of which is made to perform a certain function. Here are a few popular box types for packaging: moving boxes, slotted cartons, and die-cut mailers.'
        },
        {
          title: 'Friendly Features',
          content: 'A wide range of user-friendly features that meet a variety of demands are available in cardboard boxes. The outstanding versatility and customization choices of boxes made from print-friendly materials set them apart from other types of boxes.'
        },
        {
          title: 'Make Alternative Uses of boxes',
          content: 'Without a doubt, cardboard boxes are pretty versatile and may be used in a wide variety of inventive ways in addition to their original packaging role. Containers made of cardboard can also be used for storage, parcel returns, archival documentation, and DIY organization.'
        }
      ]
    },
    faqs: [
      {
        q: 'What Is The Best Use For A 6x4x4 Inch Corrugated Moving Box?',
        a: 'The 6x4x4 inch 3-ply corrugated box is ideal for small e-commerce shipments, packaging jewelry, gifts, cosmetics, or personal items. It is perfect for medium-sized goods that require secure shipping and storage.'
      },
      {
        q: 'How Much Weight Can The 6x4x4 Inch 3-Ply Box Hold?',
        a: 'The 6x4x4 inch box can handle light to medium-weight items, providing excellent strength for packaging products like books, small electronics, and accessories. It can hold up to approximately 3-5 kg depending on the item.'
      },
      {
        q: 'Is The 6x4x4 Inch 3-Ply Corrugated Box Eco-Friendly?',
        a: 'Yes, the 3-ply corrugated box is made from recyclable materials, making it an eco-friendly option for businesses that care about sustainability. It\'s designed to minimize environmental impact and can be reused or recycled after use.'
      },
      {
        q: 'Can I Print My Logo On The 6x4x4 Inch Cardboard Boxes?',
        a: 'Absolutely! The 6x4x4 inch 3-ply box can be customized with your company\'s logo or design, creating a unique and professional appearance for your shipments. Custom printing options are available for branding purposes.'
      },
      {
        q: 'Can I Use The 6x4x4 Inch Box For Shipping Fragile Items?',
        a: 'Yes, the 3-ply construction of the 6x4x4 inch box offers reliable protection for fragile items, such as glassware or small electronics. The sturdy design ensures your products are safe during transit and handling.'
      },
      {
        q: 'Can I See Videos Or Samples Of Your Corrugated Boxes?',
        a: 'Yes, visit our Instagram page or WhatsApp to view videos of the production process and see custom box samples. Explore our high-quality packaging solutions there.'
      }
    ],
    offers: [
      {
        code: 'G15',
        description: 'Get 15% OFF on orders above ₹1500. Perfect for bulk packaging – save more, order more!',
        type: 'Percentage Discount'
      }
    ]
  },

  '5-ply-heavy-duty-master-cartons': {
    productName: 'AS Print 5-Ply Heavy-Duty Master Shipping Carton',
    subhead: 'AS Print 5-Ply Heavy-Duty Master Shipping Carton:',
    specs: [
      { label: 'Product Name', value: 'AS Print 5-Ply Heavy-Duty Master Shipping Carton' },
      { label: 'Dimensions (inches)', value: '18 x 14 x 12 inches (Custom sizes available)' },
      { label: 'Dimensions (cm)', value: '45.72 x 35.56 x 30.48 cm' },
      { label: 'Material', value: 'Double-Wall 5-Ply Corrugated Kraft Board' },
      { label: 'Color', value: 'Natural Kraft Brown' },
      { label: 'Weight Capacity', value: 'Heavy Duty (15 kg to 30+ kg payload)' },
      { label: 'Usage', value: 'Bulk Exports, Warehousing, Master Packaging, Relocation' },
      { label: 'Customization', value: 'Flexo/Screen Logo Printing, Barcode Stamp, Custom Sizes' },
      { label: 'Shipping', value: 'Free Pan-India Shipping' }
    ],
    featureHeadline: 'AS Print 5-Ply Heavy-Duty Master Carton (18x14x12 inches)',
    features: [
      {
        title: 'Double-Wall Heavy Fluting',
        desc: 'Engineered with double-wall A/B or B/C flute matrix for maximum vertical compression strength. Resists pallet stacking weight without bulging or corner collapse.'
      },
      {
        title: 'Built To Last in Transit',
        desc: 'High-bursting factor (24+ BF) kraft liners withstand aggressive courier drops, long-distance freight transit, and humid container conditions.'
      },
      {
        title: 'Ideal for Master Packing',
        desc: 'Designed to fit multiple smaller retail cartons (such as 3-ply inner boxes) for consolidation, bulk export, and wholesale logistics.'
      },
      {
        title: 'Professional Industrial Look',
        desc: 'Clean kraft finish with water-based flexo printing for handling symbols, fragile warnings, and bold company branding.'
      },
      {
        title: 'Space-Saving Flat Dispatch',
        desc: 'Ships bundled flat for minimal warehouse storage and folds easily into shape with heavy-duty BOPP packaging tape.'
      },
      {
        title: 'Certified High Load Capacity',
        desc: 'Confidently carries 15 to 30 kg of hardware, books, apparel, ceramics, or industrial goods without base tear.'
      },
      {
        title: '100% Eco-Friendly & Recyclable',
        desc: 'Crafted from renewable wood pulp with starch adhesive, fully conforming to sustainable green packaging guidelines.'
      }
    ],
    crossSell: {
      text: 'Need Smaller Boxes for Individual Packing? Check Out Our 3-Ply Shipping Boxes!',
      linkSlug: '3-ply-corrugated-shipping-boxes'
    },
    deepDescription: {
      headline: 'Product Description About 5-Ply Heavy-Duty Master Shipping Cartons',
      sections: [
        {
          title: 'Superior Compression Strength',
          content: 'The 5-ply construction combines two fluted inner layers sandwiched between three flat linerboards, providing unmatched stacking and puncture resistance.'
        },
        {
          title: 'Export & Domestic Logistics Ready',
          content: 'Compliant with international shipping and domestic courier standards for air freight, container shipping, and road transport.'
        },
        {
          title: 'Versatile Heavy Industrial Applications',
          content: 'Commonly utilized by automotive part manufacturers, pharmaceutical distributors, ceramic exporters, and fast-moving consumer goods (FMCG) suppliers.'
        }
      ]
    },
    faqs: [
      {
        q: 'How much weight can the 5-ply master carton hold?',
        a: 'Our standard 5-ply boxes support payloads from 15 kg up to 30 kg depending on density and packing arrangement.'
      },
      {
        q: 'Can I customize the dimensions to fit our specific products?',
        a: 'Yes, we manufacture fully customized dimensions to match your exact product volumetric requirements.'
      },
      {
        q: 'Can you print fragile warnings and our brand logo?',
        a: 'Yes, we provide flexographic printing for company logos, barcodes, handle-with-care symbols, and orientation arrows.'
      },
      {
        q: 'What is the MOQ for 5-ply cartons?',
        a: 'Standard orders start from 500 pieces with direct wholesale factory pricing.'
      }
    ],
    offers: [
      {
        code: 'G15',
        description: 'Get 15% OFF on orders above ₹1500. Perfect for bulk packaging – save more, order more!',
        type: 'Percentage Discount'
      }
    ]
  },

  'custom-printed-pizza-boxes': {
    productName: 'Food-Grade Corrugated Kraft Pizza Delivery Box',
    subhead: 'Food-Grade Corrugated Kraft Pizza Delivery Box:',
    specs: [
      { label: 'Product Name', value: 'Food-Grade Corrugated Kraft Pizza Delivery Box' },
      { label: 'Dimensions (inches)', value: '10 x 10 x 1.75 inches (Sizes: 7", 8", 9", 10", 12", 14")' },
      { label: 'Dimensions (cm)', value: '25.4 x 25.4 x 4.5 cm' },
      { label: 'Material', value: 'Food-Grade E-Flute / B-Flute Virgin Kraft Paperboard' },
      { label: 'Color', value: 'Natural Kraft Brown / Clean Bleached White' },
      { label: 'Weight Capacity', value: 'Supports piping-hot pizzas up to 1.5 kg' },
      { label: 'Usage', value: 'Pizzerias, Cloud Kitchens, Cafes, Bakeries' },
      { label: 'Customization', value: '1-4 Color Brand Flexo Printing, Steam Vent Die-Cuts' },
      { label: 'Shipping', value: 'Free Pan-India Shipping' }
    ],
    featureHeadline: 'Food-Grade Corrugated Kraft Pizza Delivery Box (10x10 inches)',
    features: [
      {
        title: 'Steam Ventilation Technology',
        desc: 'Strategically die-cut rear vents release steam while trapping heat, ensuring crusts stay crispy without soggy condensation.'
      },
      {
        title: 'Built To Last with Anti-Sag Lid',
        desc: 'Reinforced folding corners and arched locking tabs allow 5-box stacking without the lid touching melted cheese.'
      },
      {
        title: '100% Food-Safe Virgin Kraft',
        desc: 'Odorless, chemical-free virgin paperboard certified for direct food contact. Zero toxic dyes or recycled contaminants.'
      },
      {
        title: 'Oil & Grease Resistance',
        desc: 'High-density kraft fibers prevent grease and butter seepage, keeping the bottom clean and dry during motorcycle delivery.'
      },
      {
        title: 'Quick 3-Second Assembly',
        desc: 'Pre-scored roll-over fold lines allow busy pizza kitchen staff to assemble boxes in seconds during peak dinner rush.'
      },
      {
        title: 'Superior Thermal Heat Retention',
        desc: 'Corrugated air fluting acts as natural insulation, keeping pizzas piping hot for up to 45 minutes of delivery travel.'
      },
      {
        title: 'Cloud Kitchen & Delivery Ready',
        desc: 'Optimized for Zomato, Swiggy, and direct delivery fleets with secure front interlocking tuck tabs.'
      }
    ],
    crossSell: {
      text: 'Looking for luxury sweet boxes? Check Out Our Luxury Sweet Boxes!',
      linkSlug: 'luxury-sweet-boxes'
    },
    deepDescription: {
      headline: 'Product Description About Food-Grade Corrugated Pizza Delivery Boxes',
      sections: [
        {
          title: 'Available Pizzeria Sizes',
          content: 'We manufacture all standard pizza dimensions: 7-inch (Personal), 8/9-inch (Regular), 10-inch (Medium), 12-inch (Large), and 14/16-inch (Monster).'
        },
        {
          title: 'Eco-Friendly & Non-Toxic',
          content: 'Biodegradable virgin paperboard printed with soy-based food-safe inks that preserve authentic oven-baked flavors.'
        },
        {
          title: 'Branding & Social Media Impact',
          content: 'Feature your pizzeria logo, social media tags, QR menus, and discount coupons directly on the box cover for customer reorders.'
        }
      ]
    },
    faqs: [
      {
        q: 'Do your pizza boxes keep the crust crispy during delivery?',
        a: 'Yes! Our boxes incorporate rear ventilation holes that allow trapped steam to escape while retaining oven heat.'
      },
      {
        q: 'Can the boxes be stacked without crushing the pizza inside?',
        a: 'Yes. The sturdy E-flute corrugated walls support stacking up to 5 loaded pizza boxes without sagging.'
      },
      {
        q: 'Are these boxes made of food-grade virgin paper?',
        a: 'Yes, 100% virgin food-grade kraft pulp is used. They are completely odorless and non-toxic.'
      },
      {
        q: 'Can I print my custom pizzeria logo and QR menu?',
        a: 'Yes, we print full custom artwork, menus, and social handles in 1, 2, or full flexo colors.'
      }
    ],
    offers: [
      {
        code: 'G15',
        description: 'Get 15% OFF on orders above ₹1500. Perfect for bulk packaging – save more, order more!',
        type: 'Percentage Discount'
      }
    ]
  },

  'luxury-sweet-boxes': {
    productName: 'Luxury Mithai, Bakery & Dry Fruit Partition Sweet Box',
    subhead: 'Luxury Mithai, Bakery & Dry Fruit Partition Sweet Box:',
    specs: [
      { label: 'Product Name', value: 'Luxury Mithai & Dry Fruit Partition Sweet Box' },
      { label: 'Dimensions (inches)', value: '8 x 8 x 2 inches (250g, 500g, 1kg, 2kg capacities)' },
      { label: 'Dimensions (cm)', value: '20.3 x 20.3 x 5.08 cm' },
      { label: 'Material', value: 'Food-Grade Kappa Board / 350 GSM Food-Safe Art Board' },
      { label: 'Color', value: 'Festive Red, Royal Blue, Emerald Green, Rich Gold' },
      { label: 'Weight Capacity', value: 'Rigid structure designed for 250g to 2.5 kg sweets' },
      { label: 'Usage', value: 'Traditional Mithai, Chocolates, Dry Fruits, Wedding Gifts' },
      { label: 'Customization', value: 'Gold Foil Stamping, Velvet Finish, Partition Trays, Windows' },
      { label: 'Shipping', value: 'Free Pan-India Shipping' }
    ],
    featureHeadline: 'Luxury Mithai & Dry Fruit Partition Box (8x8x2 inches)',
    features: [
      {
        title: 'Certified Food-Grade Interior',
        desc: 'Manufactured using certified food-safe greaseproof paperboard preventing ghee and sugar syrup from seeping through.'
      },
      {
        title: 'Rigid Kappa Board Core',
        desc: 'Heavy 1.5mm to 2.5mm rigid cardboard core prevents the box from crushing under stacking weight during busy festival seasons.'
      },
      {
        title: 'Modular Partition Trays',
        desc: 'Available with 4, 6, 9, 12, or 16 cavity dividers in gold foil board or transparent blister trays to present sweets attractively.'
      },
      {
        title: 'Opulent Festive Aesthetics',
        desc: 'Embellished with intricate traditional motifs, hot foil stamping in mirror gold or silver, and soft-touch velvet laminations.'
      },
      {
        title: 'Pre-Calibrated Sweet Capacities',
        desc: 'Pre-calibrated dimensions tailored precisely to hold 250g, 500g, 1kg, or 2kg weights of laddoos, kaju katli, or dry fruits.'
      },
      {
        title: 'Clear Window Options',
        desc: 'Optional top window allows buyers to view fresh sweets and dry fruit assortments without opening the seal.'
      },
      {
        title: 'Corporate & Wedding Gifting Ready',
        desc: 'Personalized with company or family crests for corporate Diwali, Eid, New Year, and wedding invite return gift hampers.'
      }
    ],
    crossSell: {
      text: 'Need Paper Carry Bags for your Sweet Boxes? Check Our Kraft Paper Bags!',
      linkSlug: 'kraft-paper-carry-bags'
    },
    deepDescription: {
      headline: 'Product Description About Luxury Mithai & Confectionery Sweet Boxes',
      sections: [
        {
          title: 'Premium Box Structures',
          content: 'Choose from Book-Style magnetic lids, Traditional Top-Lid & Base, Drawer Slide-Out Matchbox style, or folding mono-cartons.'
        },
        {
          title: 'Hygiene & Odorless Construction',
          content: 'Produced in clean, regulated factory environments using soy-based vegetable inks and odorless, food-contact-approved adhesives.'
        },
        {
          title: 'High Brand Perception',
          content: 'Elevates your sweet shop, bakery, or confectionary brand with regal packaging that customers cherish and reuse.'
        }
      ]
    },
    faqs: [
      {
        q: 'Are these sweet boxes certified safe for direct food contact?',
        a: 'Yes! All interior boards, greaseproof papers, and cavity inserts are made from certified food-grade, odor-free materials.'
      },
      {
        q: 'Can I get internal cavity dividers for multiple dry fruit varieties?',
        a: 'Yes, we produce custom 4-in-1, 6-in-1, or 9-in-1 modular partition trays finished in gold board or clear food-grade blister.'
      },
      {
        q: 'Can we print our sweet shop logo and custom festive artwork?',
        a: 'Absolutely! We specialize in full-color custom printing with gold foil stamping and embossed shop branding.'
      }
    ],
    offers: [
      {
        code: 'G15',
        description: 'Get 15% OFF on orders above ₹1500. Perfect for bulk packaging – save more, order more!',
        type: 'Percentage Discount'
      }
    ]
  },

  'garment-apparel-boxes': {
    productName: 'Custom Printed Luxury Garment & Shirt Packaging Box',
    subhead: 'Custom Printed Luxury Garment & Shirt Packaging Box:',
    specs: [
      { label: 'Product Name', value: 'Custom Printed Luxury Garment & Shirt Packaging Box' },
      { label: 'Dimensions (inches)', value: '14 x 10 x 2.5 inches (Customized for shirts, sarees, dresses)' },
      { label: 'Dimensions (cm)', value: '35.5 x 25.4 x 6.35 cm' },
      { label: 'Material', value: '350–450 GSM Folding Box Board (FBB) / E-Flute Corrugated' },
      { label: 'Color', value: 'Full-Color Custom Brand Print + Matte / Velvet Finish' },
      { label: 'Weight Capacity', value: 'Up to 3–5 kg capacity (Rigid protective wall construction)' },
      { label: 'Usage', value: 'Formal Shirts, Sarees, Designer Suits, T-Shirt Mailers' },
      { label: 'Customization', value: 'Gold Foil, Spot UV, Clear PVC Window, Magnetic Flap' },
      { label: 'Shipping', value: 'Free Pan-India Shipping' }
    ],
    featureHeadline: 'Custom Printed Luxury Garment Packaging Box (14x10x2.5 inches)',
    features: [
      {
        title: 'Premium Unboxing Presentation',
        desc: 'Transforms garment delivery into a high-end luxury unboxing moment. Sharp creasing and vivid exterior printing reinforce your brand stature.'
      },
      {
        title: 'Foldable Space-Saving Construction',
        desc: 'Ships completely flat to save warehouse space and assembles in under 5 seconds with pre-scored fold lines.'
      },
      {
        title: 'Clear Window Patching Option',
        desc: 'Incorporate transparent display windows so customers can admire the fabric color, embroidery, or weave pattern without opening the box.'
      },
      {
        title: 'Luxury Foil & Spot UV Finishes',
        desc: 'Add hot-stamped gold, copper, or silver foil along with glossy raised Spot UV coatings for tactile luxury.'
      },
      {
        title: 'Sturdy Transit Protection',
        desc: 'Rigid board options keep folded shirts crisp and wrinkle-free, preventing crushed collars during transit.'
      },
      {
        title: 'Odorless Fabric-Safe Liners',
        desc: 'Completely odor-free board ensures fine fabrics, linens, and silks never absorb chemical or musty smells.'
      },
      {
        title: 'Custom Interior Printing',
        desc: 'Print vibrant brand storytelling, return instructions, or founder welcome messages inside the box lid.'
      }
    ],
    crossSell: {
      text: 'Pair with our Woven Garment Labels for complete collection branding!',
      linkSlug: 'woven-damask-labels'
    },
    deepDescription: {
      headline: 'Product Description About Custom Apparel & Garment Packaging Boxes',
      sections: [
        {
          title: 'Box Styles & Structures',
          content: 'Two-Piece Lid & Base boxes, Tuck-End folding cartons, Book-Style magnetic rigid boxes, and Self-Locking roll-end mailers.'
        },
        {
          title: 'Surface Embellishments',
          content: 'Silky Velvet Matte Lamination, High-Gloss Lamination, Deep Blind Debossing, and Texture Embossing.'
        },
        {
          title: 'Sustainability Commitment',
          content: 'Crafted from FSC-certified paperboard using water-based varnishes. 100% recyclable and plastic-neutral.'
        }
      ]
    },
    faqs: [
      {
        q: 'What box size is best for formal shirts or kurti sets?',
        a: 'A standard size of 14 x 10 x 2.5 inches comfortably accommodates folded formal shirts, t-shirts, or kurti sets with tissue wrapping.'
      },
      {
        q: 'Do the boxes ship flat or assembled?',
        a: 'They ship flat in compact bundles to drastically reduce freight costs and warehouse footprint.'
      },
      {
        q: 'Can I print artwork inside the box lid?',
        a: 'Yes! We specialize in dual-sided printing so you can feature thank you notes or brand artwork inside the lid.'
      }
    ],
    offers: [
      {
        code: 'G15',
        description: 'Get 15% OFF on orders above ₹1500. Perfect for bulk packaging – save more, order more!',
        type: 'Percentage Discount'
      }
    ]
  },

  'kraft-paper-carry-bags': {
    productName: 'Eco-Friendly Virgin Kraft Paper Shopping Carry Bag',
    subhead: 'Eco-Friendly Virgin Kraft Paper Shopping Carry Bag:',
    specs: [
      { label: 'Product Name', value: 'Eco-Friendly Virgin Kraft Paper Shopping Carry Bag' },
      { label: 'Dimensions (inches)', value: '10 x 14 x 4 inches (Custom sizes: 8x10x3 to 18x16x6 inches)' },
      { label: 'Dimensions (cm)', value: '25.4 x 35.56 x 10.16 cm' },
      { label: 'Material', value: '120–180 GSM Virgin Brown / White Kraft Paper' },
      { label: 'Color', value: 'Natural Kraft Brown / Bleached Clean White' },
      { label: 'Weight Capacity', value: 'Carries 5 kg to 10+ kg (Reinforced cardboard bottom)' },
      { label: 'Usage', value: 'Boutiques, Retail Stores, Exhibitions, Gifting, Jewelry' },
      { label: 'Customization', value: 'Twisted Paper, Cotton Rope, Satin Ribbon Handles, Foil Stamping' },
      { label: 'Shipping', value: 'Free Pan-India Shipping' }
    ],
    featureHeadline: 'Eco-Friendly Kraft Paper Carry Bag (10x14x4 inches)',
    features: [
      {
        title: 'Reinforced Bottom & Top Turn-Over',
        desc: 'Fitted with heavy card reinforcements inside the top rim and bottom base gusset, preventing tearing even when carrying heavy contents.'
      },
      {
        title: '100% Biodegradable & Plastic-Ban Compliant',
        desc: 'Manufactured from virgin sustainable forest pulp. Fully conforms to all Indian municipal anti-single-use-plastic laws.'
      },
      {
        title: 'Comfortable Ergonomic Handles',
        desc: 'Choose from twisted kraft paper handles, soft braided cotton ropes, or luxurious grosgrain satin ribbons that feel pleasant in hands.'
      },
      {
        title: 'Walking Billboard Advertising',
        desc: 'High-visibility mobile marketing for your boutique as shoppers carry your bag through shopping malls and high streets.'
      },
      {
        title: 'Deep Side Gussets for Easy Packing',
        desc: 'Generous bottom and side folds expand easily to hold shoeboxes, garments, cosmetics, or gift hampers without buckling.'
      },
      {
        title: 'High Load-Bearing Capacity',
        desc: 'Precision hotmelt machine glueing ensures handles never pull out under normal weight loads up to 8 kg.'
      },
      {
        title: 'Metallic Foil & Debossing Options',
        desc: 'Complement your brand identity with shimmering metallic foil lettering and deep blind embossing on white art card bags.'
      }
    ],
    crossSell: {
      text: 'Need matching Hang Tags for your retail products? Check Our Brand Hang Tags!',
      linkSlug: 'brand-hang-tags'
    },
    deepDescription: {
      headline: 'Product Description About Custom Printed Paper Carry Bags',
      sections: [
        {
          title: 'Paper Quality Options',
          content: 'Natural Virgin Brown Kraft (earthy, rugged organic look), Bleached White Kraft, and Laminated Art Paper (crisp photographic printing).'
        },
        {
          title: 'Handle Styles',
          content: 'Twisted Paper cords, Flat Folded Paper handles, Tubular Cotton Ropes, Satin Ribbons, or Die-Cut Punch handles.'
        },
        {
          title: 'Retail Merchandising Value',
          content: 'A beautiful carry bag is frequently reused by consumers, providing long-term brand recall long after the purchase.'
        }
      ]
    },
    faqs: [
      {
        q: 'Are these paper bags compliant with government plastic ban laws?',
        a: 'Yes! They are 100% paper-based, biodegradable, and fully compliant with all single-use plastic ban regulations across India.'
      },
      {
        q: 'How much weight can a standard paper bag carry?',
        a: 'Standard kraft bags with reinforced bottoms hold 3 to 5 kg. Our heavyweight art card bags with rope handles carry up to 8–10 kg with ease.'
      },
      {
        q: 'Can I print all four sides of the paper bag?',
        a: 'Yes! Full-bleed printing covers the front, back, side gussets, bottom, and even inside turn-over borders.'
      }
    ],
    offers: [
      {
        code: 'G15',
        description: 'Get 15% OFF on orders above ₹1500. Perfect for bulk packaging – save more, order more!',
        type: 'Percentage Discount'
      }
    ]
  },

  'paper-courier-mailers': {
    productName: 'Tamper-Evident Kraft Paper Courier Mailer Envelope',
    subhead: 'Tamper-Evident Kraft Paper Courier Mailer Envelope:',
    specs: [
      { label: 'Product Name', value: 'Tamper-Evident Kraft Paper Courier Mailer Envelope' },
      { label: 'Dimensions (inches)', value: '10 x 13 inches (Custom: 9x12, 10x14, 12x16 inches)' },
      { label: 'Dimensions (cm)', value: '25.4 x 33.02 cm' },
      { label: 'Material', value: '120–150 GSM Heavy Virgin Brown Kraft Paper' },
      { label: 'Color', value: 'Natural Kraft Brown / Bleached White' },
      { label: 'Weight Capacity', value: 'High tear and puncture resistance for courier parcels' },
      { label: 'Usage', value: 'E-Commerce Shipping, Apparel, Books, Invoices, Documents' },
      { label: 'Customization', value: 'Peel-and-Seal Strip, Tamper Slits, Full Brand Printing' },
      { label: 'Shipping', value: 'Free Pan-India Shipping' }
    ],
    featureHeadline: 'Tamper-Evident Paper Courier Envelope (10x13 inches)',
    features: [
      {
        title: 'Instant Peel & Seal Adhesive Strip',
        desc: 'Equipped with a self-adhesive silicone release liner strip that bonds permanently in one press, eliminating water moistening and packing tape.'
      },
      {
        title: 'Tamper-Evident Security Flap',
        desc: 'Permanent adhesive bonds so strongly that any attempt to open the envelope tears the paper visibly, preventing unauthorized opening during transit.'
      },
      {
        title: 'Tear-Resistant Kraft Construction',
        desc: 'Made from dense virgin kraft fibers with high puncture resistance to ensure documents, jewelry, or cloth samples arrive unbent and dry.'
      },
      {
        title: 'Plastic-Free Eco Courier Mailer',
        desc: 'The ideal green substitute for plastic poly courier bags. Fully recyclable and biodegradable.'
      },
      {
        title: 'Professional Brand Presentation',
        desc: 'Custom printed with your company logo, return address, consignee details, and tracking barcode boxes.'
      },
      {
        title: 'Slim & Lightweight for Lower Shipping Rates',
        desc: 'Weighs very little, keeping courier volumetric weight charges at their minimum bracket.'
      }
    ],
    crossSell: {
      text: 'Need heavy shipping cartons for bulky freight? Check Our 3-Ply Shipping Boxes!',
      linkSlug: '3-ply-corrugated-shipping-boxes'
    },
    deepDescription: {
      headline: 'Product Description About Custom Printed Paper Mailers & Envelopes',
      sections: [
        {
          title: 'Envelope Formats & Styles',
          content: 'Pocket style (opening on short side), Wallet style (opening on long side), and Gusset expandable envelopes for thick brochures.'
        },
        {
          title: 'E-Commerce Courier Advantage',
          content: 'Helps fashion and book sellers eliminate plastic mailer bags, satisfying sustainability-minded online buyers.'
        }
      ]
    },
    faqs: [
      {
        q: 'Can I use these envelopes for courier shipping instead of plastic poly bags?',
        a: 'Yes! Leading sustainable brands use our heavy kraft paper envelopes as 100% plastic-free courier packaging.'
      },
      {
        q: 'Is the adhesive tamper-evident?',
        a: 'Yes. Once the peel-and-seal strip is pressed down, the flap cannot be reopened without tearing the paper fibers.'
      }
    ],
    offers: [
      {
        code: 'G15',
        description: 'Get 15% OFF on orders above ₹1500. Perfect for bulk packaging – save more, order more!',
        type: 'Percentage Discount'
      }
    ]
  },

  'woven-damask-labels': {
    productName: 'High-Density Damask Woven Fabric Garment Neck Label',
    subhead: 'High-Density Damask Woven Fabric Garment Neck Label:',
    specs: [
      { label: 'Product Name', value: 'High-Density Damask Woven Fabric Garment Neck Label' },
      { label: 'Dimensions (inches)', value: '1.0 x 2.25 inches (Customizable 0.4 to 4 inches)' },
      { label: 'Dimensions (cm)', value: '2.54 x 5.71 cm' },
      { label: 'Material', value: '100% High-Density Polyester Damask Yarn' },
      { label: 'Color', value: 'Up to 8 Yarn Colors (Pantone Matched) + Metallic Lurex' },
      { label: 'Weight Capacity', value: 'Ultra-durable weave structure (50D yarn density)' },
      { label: 'Usage', value: 'Designer Collars, Jeans Waistbands, Jackets, Uniforms' },
      { label: 'Customization', value: 'Damask Weave, Ultrasonic Laser Cut, Center/End Fold' },
      { label: 'Shipping', value: 'Free Pan-India Shipping' }
    ],
    featureHeadline: 'High-Density Damask Woven Label (1.0x2.25 inches)',
    features: [
      {
        title: 'Ultra-High Damask Thread Density',
        desc: 'Woven with fine 50-denier polyester yarn, delivering tight stitches that render razor-sharp brand typography, gradients, and intricate crests.'
      },
      {
        title: 'Ultrasonic Laser Soft Border',
        desc: 'Laser-cut edges melt together gently, ensuring the edges are completely soft and will never prick or irritate the back of the neck.'
      },
      {
        title: 'Built For The Life Of The Garment',
        desc: 'Because the design is woven directly from colored threads rather than printed, it never fades, cracks, or washes out across years of heavy wear.'
      },
      {
        title: 'Luxury Hand Feel',
        desc: 'Elevates ordinary garments into boutique high-street fashion pieces with rich tactile texture.'
      },
      {
        title: 'Specialty Metallic & Lurex Threads',
        desc: 'Add glimmering gold, silver, bronze, or rose gold lurex threads to make luxury evening wear and outerwear shine.'
      },
      {
        title: 'Flexible Stitching Styles',
        desc: 'Suitable for flat top stitching, center fold into neckband seam, side seam flag labels, or iron-on adhesive backing.'
      }
    ],
    crossSell: {
      text: 'Pair with our Printed Wash Care Labels for inner lining compliance!',
      linkSlug: 'satin-wash-care-labels'
    },
    deepDescription: {
      headline: 'Product Description About Premium Damask Woven Labels',
      sections: [
        {
          title: 'Weave Density & Types',
          content: 'We offer High-Density Damask (our flagship standard for high-end brands), Satin Woven (lustrous silky base), and Heavy Taffeta.'
        },
        {
          title: 'Finishing & Cut Options',
          content: 'Available as End Fold, Center Fold, Manhattan Fold, Mitre Fold, Laser Die-Cut custom shapes, or Peel-and-Stick badges.'
        }
      ]
    },
    faqs: [
      {
        q: 'Will these labels prick or irritate the skin?',
        a: 'No! All our woven labels are finished with ultrasonic soft laser cutting, creating baby-soft edges that eliminate skin irritation.'
      },
      {
        q: 'How many thread colors can be used in one label?',
        a: 'You can include up to 8 distinct Pantone-matched yarn colors in a single woven design, including gold or silver metallic threads.'
      }
    ],
    offers: [
      {
        code: 'G15',
        description: 'Get 15% OFF on orders above ₹1500. Perfect for bulk packaging – save more, order more!',
        type: 'Percentage Discount'
      }
    ]
  },

  'satin-wash-care-labels': {
    productName: 'Custom Printed Satin, Taffeta & Cotton Wash Care Label',
    subhead: 'Custom Printed Satin, Taffeta & Cotton Wash Care Label:',
    specs: [
      { label: 'Product Name', value: 'Custom Printed Satin, Taffeta & Cotton Wash Care Label' },
      { label: 'Dimensions (inches)', value: '0.75 x 2.0 inches (Custom: 0.5 to 3.0 inches width)' },
      { label: 'Dimensions (cm)', value: '1.9 x 5.08 cm' },
      { label: 'Material', value: 'Polyester White Satin, Dull Taffeta, Organic Cotton Ribbon' },
      { label: 'Color', value: 'Snow White, Jet Black, Natural Ivory + Multi-Color Ink' },
      { label: 'Weight Capacity', value: 'Ultra-lightweight ribbon, 80–120 GSM thickness' },
      { label: 'Usage', value: 'Wash Care Instructions, Size Tags, Fabric Composition, Barcodes' },
      { label: 'Customization', value: 'Rotary Flexo / Screen Printing, Ultrasonic Soft Laser Cut' },
      { label: 'Shipping', value: 'Free Pan-India Shipping' }
    ],
    featureHeadline: 'Custom Printed Wash Care Label (0.75x2.0 inches)',
    features: [
      {
        title: 'Size & Flexibility',
        desc: 'Customized to exact millimeter widths (10mm to 75mm). Available in rolls or pre-cut pieces with end-fold, center-fold, or loop for seamless stitching into garment seams.'
      },
      {
        title: 'Built To Last & Wash Resistant',
        desc: 'Printed using premium indelible curing inks that withstand up to 50+ commercial washing and dry-cleaning cycles without fading or smearing.'
      },
      {
        title: 'Silky Soft & Skin-Friendly',
        desc: 'Ultra-fine satin weave with ultrasonic laser-sealed soft borders eliminates scratchy plastic edges, keeping garments completely itch-free.'
      },
      {
        title: 'High-Definition Micro Typography',
        desc: 'Sharp, crisp reproduction of complex wash-care symbols, fiber breakdown percentages, and international barcodes down to 4pt font size.'
      },
      {
        title: 'Export Compliant Standards',
        desc: 'Complies with global textile labelling regulations (ISO 3758 wash symbols and OEKO-TEX safety standards).'
      }
    ],
    crossSell: {
      text: 'Looking for collar brand labels? Check Out Our Woven Damask Labels!',
      linkSlug: 'woven-damask-labels'
    },
    deepDescription: {
      headline: 'Product Description About Custom Printed Fabric Garment Labels',
      sections: [
        {
          title: 'Types of Ribbon Bases Available',
          content: 'Choose from Shiny Gloss Satin (silky smooth), Matte Taffeta (crisp paper-like finish), or Organic Cotton Canvas.'
        },
        {
          title: 'Skin-Safe & Eco-Friendly Inks',
          content: 'We use non-toxic, lead-free water-based textile inks that pass skin irritation tests, making them 100% safe for baby wear.'
        }
      ]
    },
    faqs: [
      {
        q: 'Will the ink fade after machine washing?',
        a: 'No. Our heat-cured textile inks are formulated to resist up to 50+ hot machine washes and dry-cleaning treatments.'
      },
      {
        q: 'What fold styles do you offer for printed labels?',
        a: 'We offer Center Fold (booklet fold), End Fold (stitched at sides), Mitre Fold, Manhattan Fold, and Straight Cut.'
      }
    ],
    offers: [
      {
        code: 'G15',
        description: 'Get 15% OFF on orders above ₹1500. Perfect for bulk packaging – save more, order more!',
        type: 'Percentage Discount'
      }
    ]
  },

  'brand-hang-tags': {
    productName: 'Luxury Garment Hang Tags & Price Tickets with Foil & Spot UV',
    subhead: 'Luxury Garment Hang Tags & Price Tickets with Foil & Spot UV:',
    specs: [
      { label: 'Product Name', value: 'Luxury Garment Hang Tags & Price Tickets' },
      { label: 'Dimensions (inches)', value: '2.0 x 3.5 inches / 2.0 x 4.0 inches' },
      { label: 'Dimensions (cm)', value: '5.08 x 8.89 cm / 5.08 x 10.16 cm' },
      { label: 'Material', value: '350–450 GSM Art Board / Virgin Kraft / Textured Cardstock' },
      { label: 'Color', value: 'Full-Color CMYK + Gold / Silver Foil + Spot UV' },
      { label: 'Weight Capacity', value: 'Heavy rigid cardstock (non-bending structure)' },
      { label: 'Usage', value: 'Apparel Branding, Retail Price Tags, Luggage Tags' },
      { label: 'Customization', value: 'Spot UV, Matte/Gloss Lamination, Metal Eyelets, Twine Cord' },
      { label: 'Shipping', value: 'Free Pan-India Shipping' }
    ],
    featureHeadline: 'Luxury Garment Hang Tag (2x3.5 inches)',
    features: [
      {
        title: 'Heavyweight 350–450 GSM Cardstock',
        desc: 'Thick, premium rigid paperboard provides a substantial feel in the buyer\'s hands, signaling top-tier clothing quality.'
      },
      {
        title: 'Eyelet & Custom Cord Attachment',
        desc: 'Equipped with punched holes, reinforced brass or black metal eyelets, and pre-strung waxed cotton, natural jute twine, or elastic cords.'
      },
      {
        title: 'Metallic Foil Stamping',
        desc: 'High-precision hot foil stamping in mirror gold, silver, rose gold, or holographic finishes turns your logo into an eye-catching focal point.'
      },
      {
        title: 'Velvet Soft-Touch & Spot UV',
        desc: 'Pair smooth soft-touch matte lamination with glossy raised Spot UV highlights on your brand logo for contrast and tactile delight.'
      },
      {
        title: 'Dual-Sided Information Layout',
        desc: 'Front side showcases your brand identity; reverse side accommodates MRP, barcode, size, fabric composition, and QR code for scanning.'
      }
    ],
    crossSell: {
      text: 'Pack your clothing in matching custom printed Garment Apparel Boxes!',
      linkSlug: 'garment-apparel-boxes'
    },
    deepDescription: {
      headline: 'Product Description About Custom Printed Clothing Hang Tags',
      sections: [
        {
          title: 'Paper Stocks & Materials',
          content: 'Select from 350/400 GSM C2S Art Card, Uncoated Natural Kraft, Pearlized Textured Shimmer Board, or 100% Recycled Cotton Pulp.'
        },
        {
          title: 'Retail Merchandising Impact',
          content: 'Hang tags are often the first tactile contact a customer has with your apparel on retail racks. A stunning tag reinforces full price credibility.'
        }
      ]
    },
    faqs: [
      {
        q: 'What paper thickness (GSM) do you recommend for fashion tags?',
        a: 'We recommend 350 to 400 GSM Art Card with matte lamination for standard high-end retail, or 450 GSM rigid duplex board for luxury designer collections.'
      },
      {
        q: 'Do the tags come with string and eyelets already attached?',
        a: 'Yes! You can order tags pre-fitted with metal eyelets and your choice of twine, ribbon, or seal tags ready to hang.'
      }
    ],
    offers: [
      {
        code: 'G15',
        description: 'Get 15% OFF on orders above ₹1500. Perfect for bulk packaging – save more, order more!',
        type: 'Percentage Discount'
      }
    ]
  },

  'chromo-gumming-stickers': {
    productName: 'Chromocote Self-Adhesive Gumming Paper Product & Packaging Sticker',
    subhead: 'Chromocote Self-Adhesive Gumming Paper Product & Packaging Sticker:',
    specs: [
      { label: 'Product Name', value: 'Chromocote Self-Adhesive Gumming Paper Sticker' },
      { label: 'Dimensions (inches)', value: '2 x 2 inches / 3 x 2 inches (Custom: 1x1 to 12x18 inches)' },
      { label: 'Dimensions (cm)', value: '5.08 x 5.08 cm / 7.62 x 5.08 cm' },
      { label: 'Material', value: '80 GSM Cast-Coated Chromocote Paper + Hotmelt Adhesive' },
      { label: 'Color', value: 'Ultra-Gloss White, Radiant Neon, Gold/Silver Paper' },
      { label: 'Weight Capacity', value: 'High-tack permanent adhesive backing' },
      { label: 'Usage', value: 'Carton Sealing, Bakery & Sweet Boxes, Jars, Product SKU Labels' },
      { label: 'Customization', value: 'Full-Color Offset Printing, Gloss/Matte Varnish, Circle/Square Cut' },
      { label: 'Shipping', value: 'Free Pan-India Shipping' }
    ],
    featureHeadline: 'Chromocote Gumming Paper Sticker (2x2 inches)',
    features: [
      {
        title: 'High-Tack Instant Adhesive',
        desc: 'Strong permanent hotmelt adhesive sticks instantly to cardboard boxes, corrugated surfaces, glass jars, plastic tubs, and paper bags without peeling.'
      },
      {
        title: 'Mirror-Finish Chromocote Paper',
        desc: 'Super-smooth glossy surface produces photographic print sharpness and vivid, bright colors that catch attention immediately.'
      },
      {
        title: 'Cost-Effective Bulk Sealing',
        desc: 'The most economical option for sealing takeaway food containers, shipping boxes, envelope flaps, and bakery packaging.'
      },
      {
        title: 'Easy Peel & Stick Backing',
        desc: 'Supplied with crack-and-peel backing paper or kiss-cut on easy-release sheets for rapid high-speed manual application.'
      },
      {
        title: 'Writeable Surface',
        desc: 'Can be written on with ballpoint pens or permanent markers for batch numbers, expiry dates, or handwritten customer thank you notes.'
      }
    ],
    crossSell: {
      text: 'Need outdoor waterproof stickers? Check Out Our Waterproof Vinyl Stickers!',
      linkSlug: 'waterproof-vinyl-stickers'
    },
    deepDescription: {
      headline: 'Product Description About Chromocote Paper Gumming Stickers',
      sections: [
        {
          title: 'Adhesive Grades Available',
          content: 'We supply Permanent High-Tack adhesive for shipping cartons and porous surfaces, as well as Removable adhesive for glassware.'
        },
        {
          title: 'High Efficiency in Retail Packaging',
          content: 'Using branded gumming stickers to seal tissue wrapping or boxes is an affordable way to create memorable unboxing experiences.'
        }
      ]
    },
    faqs: [
      {
        q: 'What is the difference between gumming paper stickers and vinyl stickers?',
        a: 'Gumming stickers are paper-based, making them extremely affordable and ideal for indoor packaging and box sealing. Vinyl stickers are waterproof plastic film.'
      },
      {
        q: 'Can I write on these stickers with a pen?',
        a: 'Yes! You can easily write batch codes, prices, or dates with a ballpoint pen or marker.'
      }
    ],
    offers: [
      {
        code: 'G15',
        description: 'Get 15% OFF on orders above ₹1500. Perfect for bulk packaging – save more, order more!',
        type: 'Percentage Discount'
      }
    ]
  },

  'waterproof-vinyl-stickers': {
    productName: 'Waterproof & UV-Resistant Custom Die-Cut Premium Vinyl Sticker',
    subhead: 'Waterproof & UV-Resistant Custom Die-Cut Premium Vinyl Sticker:',
    specs: [
      { label: 'Product Name', value: 'Waterproof Custom Die-Cut Premium Vinyl Sticker' },
      { label: 'Dimensions (inches)', value: '2.5 x 2.5 inches (Custom sizes 1x1 to 48x48 inches)' },
      { label: 'Dimensions (cm)', value: '6.35 x 6.35 cm' },
      { label: 'Material', value: '100 Micron PVC Vinyl Film + Anti-Scratch Lamination' },
      { label: 'Color', value: 'Vivid Eco-Solvent / UV Ink (Full Color CMYK + White)' },
      { label: 'Weight Capacity', value: 'Heavy-duty outdoor weather-resistant vinyl' },
      { label: 'Usage', value: 'Product Branding, Laptops, Bottles, Helmets, Vehicles' },
      { label: 'Customization', value: 'Die-Cut, Kiss-Cut, Clear Transparent, Holographic, Matte/Gloss' },
      { label: 'Shipping', value: 'Free Pan-India Shipping' }
    ],
    featureHeadline: 'Waterproof Die-Cut Vinyl Sticker (2.5x2.5 inches)',
    features: [
      {
        title: '100% Waterproof & Weatherproof',
        desc: 'Constructed from thick, premium PVC vinyl. Resists water, rain, dishwasher cycles, motor oil, and extreme temperatures without peeling.'
      },
      {
        title: 'UV-Resistant Non-Fading Inks',
        desc: 'Printed using advanced UV and eco-solvent inks that withstand direct sunlight for years without fading, yellowing, or cracking.'
      },
      {
        title: 'Exact Contour Die-Cutting',
        desc: 'Computerized optical cutting blades cut around the exact contours of your logo or custom artwork with laser precision.'
      },
      {
        title: 'Scratch-Resistant Lamination',
        desc: 'Protected by an extra layer of matte or glossy overlaminate, shielding your artwork against scratches and daily abrasion.'
      },
      {
        title: 'Clean Residue-Free Removal',
        desc: 'Adheres firmly to metal, plastic, glass, and wood, yet removes cleanly without leaving stubborn glue residue behind.'
      }
    ],
    crossSell: {
      text: 'Need thermal warehouse labels? Check Out Our Barcode Thermal Roll Labels!',
      linkSlug: 'barcode-thermal-roll-labels'
    },
    deepDescription: {
      headline: 'Product Description About Premium Waterproof Die-Cut Vinyl Stickers',
      sections: [
        {
          title: 'Substrate & Finish Options',
          content: 'Available in Glossy (vibrant candy-like sheen), Matte (smooth glare-free look), Transparent (clear backing), and Holographic rainbow film.'
        },
        {
          title: 'Industrial & Outdoor Durability',
          content: 'Engineered to withstand heavy duty outdoor environments, car washes, and freezer storage without bubbling or edge lifting.'
        }
      ]
    },
    faqs: [
      {
        q: 'Are these vinyl stickers genuinely waterproof?',
        a: 'Yes! They are 100% waterproof and dishwasher-safe. Water, condensation, and oil will not harm the vinyl or ink.'
      },
      {
        q: 'Will they leave sticky residue when removed?',
        a: 'Our premium acrylic adhesive allows clean removal from laptops, glass, and vehicles without scraping or residue.'
      }
    ],
    offers: [
      {
        code: 'G15',
        description: 'Get 15% OFF on orders above ₹1500. Perfect for bulk packaging – save more, order more!',
        type: 'Percentage Discount'
      }
    ]
  },

  'barcode-thermal-roll-labels': {
    productName: 'Thermal Transfer & Chromo Barcode / QR Code Shipping Roll Labels',
    subhead: 'Thermal Transfer & Chromo Barcode / QR Code Shipping Roll Labels:',
    specs: [
      { label: 'Product Name', value: 'Thermal Transfer & Chromo Barcode / QR Code Roll Labels' },
      { label: 'Dimensions (inches)', value: '2 x 1 inch / 3 x 2 inches / 4 x 6 inches (Standard courier)' },
      { label: 'Dimensions (cm)', value: '50 x 25 mm / 75 x 50 mm / 100 x 150 mm' },
      { label: 'Material', value: 'Thermal Transfer Paper / Direct Thermal / Synthetic Poly' },
      { label: 'Color', value: 'Ultra-Sharp Dense Black on Bright White Background' },
      { label: 'Weight Capacity', value: 'Permanent acrylic adhesive (Freezer-safe grades available)' },
      { label: 'Usage', value: 'E-Commerce Shipping Labels, Retail MRP, Asset Tracking, QR Codes' },
      { label: 'Customization', value: 'Serialized Numbering, Variable Barcode (EAN, Code 128, QR)' },
      { label: 'Shipping', value: 'Free Pan-India Shipping' }
    ],
    featureHeadline: 'Industrial Barcode Thermal Roll Label (4x6 inches)',
    features: [
      {
        title: '100% Guaranteed Scanner Readability',
        desc: 'Printed with high-contrast, razor-sharp edge precision to guarantee instantaneous reads with 1D handheld laser scanners and 2D mobile camera scanners.'
      },
      {
        title: 'Variable Data & Serialized Printing',
        desc: 'We seamlessly print sequential numbering, unique SKU identifiers, dynamic QR codes, lot numbers, and custom batch details.'
      },
      {
        title: 'Direct Thermal & Thermal Transfer Options',
        desc: 'Available as ribbon-less Direct Thermal paper or heavy-duty Thermal Transfer with wax-resin ribbon durability for prolonged storage.'
      },
      {
        title: 'Standard E-Commerce Courier Sizes',
        desc: 'Pre-cut sizes compatible with Amazon, Flipkart, Delhivery, BlueDart, Bluedart, and India Post 4x6 inch shipping label specifications.'
      },
      {
        title: 'Roll & Sheet Formats',
        desc: 'Supplied on standard 1-inch or 3-inch cardboard cores to fit Zebra, TSC, Godex, TVS, and Citizen industrial barcode printers.'
      }
    ],
    crossSell: {
      text: 'Need tagless branding on t-shirts? Check Our Tagless Heat Transfer Labels!',
      linkSlug: 'tagless-heat-transfer-labels'
    },
    deepDescription: {
      headline: 'Product Description About Barcode & QR Code Inventory Stickers',
      sections: [
        {
          title: 'Supported Barcode Symbologies',
          content: 'We print all international standards including EAN-13, UPC-A, Code 128, Code 39, QR Code, Data Matrix, and PDF417.'
        },
        {
          title: 'ERP & Inventory Integration',
          content: 'Send us your Excel or CSV database sheet, and we generate sequentially printed batches with verified checksum algorithms.'
        }
      ]
    },
    faqs: [
      {
        q: 'Can I provide an Excel file for serialized or unique QR codes?',
        a: 'Yes! Send your Excel sheet with SKU, serial number, MRP, or URLs, and our automated workflow generates unique barcode labels.'
      },
      {
        q: 'Are the barcodes compatible with smartphone camera scanners?',
        a: 'Yes, our high-density print ensures instant recognition on both dedicated barcode guns and smartphone camera apps.'
      }
    ],
    offers: [
      {
        code: 'G15',
        description: 'Get 15% OFF on orders above ₹1500. Perfect for bulk packaging – save more, order more!',
        type: 'Percentage Discount'
      }
    ]
  },

  'bottle-jar-packaging-labels': {
    productName: 'Waterproof & Oil-Resistant Custom Wrap-Around Bottle & Jar Labels',
    subhead: 'Waterproof & Oil-Resistant Custom Wrap-Around Bottle & Jar Labels:',
    specs: [
      { label: 'Product Name', value: 'Waterproof Wrap-Around Bottle & Jar Labels' },
      { label: 'Dimensions (inches)', value: '2.5 x 6 inches / 3 x 7 inches (Custom: wrap-around or dual)' },
      { label: 'Dimensions (cm)', value: '6.35 x 15.24 cm' },
      { label: 'Material', value: 'BOPP Synthetic Polypropylene Film / Metallized Foil Film' },
      { label: 'Color', value: 'Full-Color Photo-Quality Print + Spot Varnish + Cold Foil' },
      { label: 'Weight Capacity', value: 'High-shear waterproof acrylic adhesive backing' },
      { label: 'Usage', value: 'Juice Bottles, Wine, Oils, Cosmetics, Essential Oils, Sanitizers' },
      { label: 'Customization', value: 'Full Wrap-Around, Front & Back Pair, Clear "No-Label" Look' },
      { label: 'Shipping', value: 'Free Pan-India Shipping' }
    ],
    featureHeadline: 'Waterproof Wrap-Around Bottle Label (2.5x6 inches)',
    features: [
      {
        title: '100% Waterproof & Condensation Resistant',
        desc: 'Constructed from synthetic BOPP film that survives ice buckets, refrigeration condensation, and humid showers without wrinkling or falling off.'
      },
      {
        title: 'Oil & Chemical Resistance',
        desc: 'Impervious to essential oils, cooking oils, vinegars, alcohol sanitizers, and chemical cosmetics. Inks will not run, smudge, or dissolve.'
      },
      {
        title: 'Flawless Curve Adhesion',
        desc: 'High-flex film combined with aggressive tack acrylic adhesive prevents edge-lifting on tight cylindrical glass and PET plastic bottles.'
      },
      {
        title: 'The "No-Label" Clear Look',
        desc: 'Printed on crystal-clear transparent BOPP film with white ink backing to give the illusion that your graphics are printed directly on the glass.'
      },
      {
        title: 'Machine & Manual Application Ready',
        desc: 'Supplied on standardized rolls with calibrated gap spacing for high-speed automatic bottle labelling conveyor machines or easy hand peeling.'
      }
    ],
    crossSell: {
      text: 'Need cartons to ship bottled merchandise? Check Out Our 3-Ply Shipping Boxes!',
      linkSlug: '3-ply-corrugated-shipping-boxes'
    },
    deepDescription: {
      headline: 'Product Description About Waterproof Wrap-Around Bottle & Jar Labels',
      sections: [
        {
          title: 'Substrate Materials Available',
          content: 'White BOPP (vibrant colors), Clear BOPP (no-label glass effect), Metallized Silver/Gold BOPP (mirror chrome effects), and Textured Wine Paper.'
        },
        {
          title: 'Container Compatibility',
          content: 'Engineered specifically for Glass jars, PET bottles, HDPE plastic cosmetic containers, aluminium cans, and amber glass dropper bottles.'
        }
      ]
    },
    faqs: [
      {
        q: 'Will these bottle labels peel off in cold refrigerators or ice buckets?',
        a: 'No! Our synthetic BOPP labels and freezer-grade acrylic adhesive are engineered to resist continuous condensation, freezing, and moisture.'
      },
      {
        q: 'Are the labels resistant to cooking oils and cosmetic serums?',
        a: 'Yes! The protective lamination layer completely shields the inks against oils, alcohol, essential oil drips, and sanitizers.'
      }
    ],
    offers: [
      {
        code: 'G15',
        description: 'Get 15% OFF on orders above ₹1500. Perfect for bulk packaging – save more, order more!',
        type: 'Percentage Discount'
      }
    ]
  },

  'tagless-heat-transfer-labels': {
    productName: 'Tagless DTF & Vinyl Heat Transfer Stickers for T-Shirts & Sportswear',
    subhead: 'Tagless DTF & Vinyl Heat Transfer Stickers for T-Shirts & Sportswear:',
    specs: [
      { label: 'Product Name', value: 'Tagless DTF Heat Transfer Neck & Logo Labels' },
      { label: 'Dimensions (inches)', value: '2 x 2 inches / 3 x 3 inches (Sheet & gang-sheet options)' },
      { label: 'Dimensions (cm)', value: '5.08 x 5.08 cm / 7.62 x 7.62 cm' },
      { label: 'Material', value: 'Polyurethane (PU) Film + High-Stretch Hot-Melt Adhesive Powder' },
      { label: 'Color', value: 'Full-Color Photographic CMYK + Ultra-Opaque Solid White Underbase' },
      { label: 'Weight Capacity', value: 'Zero-feel featherweight transfer layer' },
      { label: 'Usage', value: 'Inner Collar Size Tags, Sportswear Branding, Hoodies, Caps' },
      { label: 'Customization', value: 'Hot Peel, Cold Peel, Stretchable Activewear, Reflective, Gold' },
      { label: 'Shipping', value: 'Free Pan-India Shipping' }
    ],
    featureHeadline: 'Tagless DTF Heat Transfer Label (2x2 inches)',
    features: [
      {
        title: '100% Tagless Zero-Irritation Comfort',
        desc: 'Fuses seamlessly into garment fibers, completely eliminating itchy sew-in labels. Ideal for baby clothing, gym wear, and innerwear.'
      },
      {
        title: 'Ultra-Stretch & Crack-Proof',
        desc: 'Formulated with flexible polyurethane resins that stretch and rebound alongside spandex and lycra fabrics without cracking or tearing.'
      },
      {
        title: 'High Wash Durability (50+ Washes)',
        desc: 'Undergoes rigorous commercial laundry testing; remains crisp, vivid, and firmly bonded through hot water cycles.'
      },
      {
        title: 'Photographic Color Precision',
        desc: 'Renders gradients, fine lines, micro-text, and multi-color company emblems with photographic clarity and zero color bleeding.'
      },
      {
        title: 'Works on Any Fabric Color',
        desc: 'Backed with a dense, opaque white underbase that keeps graphics vibrant even on 100% jet-black cotton and polyester fabrics.'
      }
    ],
    crossSell: {
      text: 'Need collar labels with luxury fabric weave? Check Our Woven Damask Labels!',
      linkSlug: 'woven-damask-labels'
    },
    deepDescription: {
      headline: 'Product Description About Tagless DTF & Heat Transfer Stickers',
      sections: [
        {
          title: 'Compatible Textile Fabrics',
          content: '100% Combed Cotton, Polyester, Nylon, Spandex, Poly-Cotton blends, Denim, Canvas, and Fleece.'
        },
        {
          title: 'Simple Application with Heat Press',
          content: 'Applies in just 10–15 seconds at 150°C–160°C under medium pressure using standard commercial heat press equipment.'
        }
      ]
    },
    faqs: [
      {
        q: 'What temperature and time is needed to press these stickers?',
        a: 'Press at 150°C to 160°C for 10–12 seconds under medium pressure (3–4 bar). Peel hot or cold based on film grade.'
      },
      {
        q: 'Will the print crack when the fabric is stretched?',
        a: 'No! Our DTF inks and PU adhesive powder have superior elastic stretch memory that flexes with activewear fabrics.'
      }
    ],
    offers: [
      {
        code: 'G15',
        description: 'Get 15% OFF on orders above ₹1500. Perfect for bulk packaging – save more, order more!',
        type: 'Percentage Discount'
      }
    ]
  },
  '3-ply-corrugated-box-3-5x3-5x3-5-inch': {
    productName: "3-Ply Brown Corrugated Box (3.5\" × 3.5\" × 3.5\")",
    subhead: "3-Ply Brown Corrugated Box (3.5\" × 3.5\" × 3.5\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (3.5\" × 3.5\" × 3.5\")" },
      { label: 'Dimensions (inches)', value: "3.5\" × 3.5\" × 3.5\"" },
      { label: 'Dimensions (cm)', value: "8.9 × 8.9 × 8.9 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-4x4x4-inch': {
    productName: "3-Ply Brown Corrugated Box (4\" × 4\" × 4\")",
    subhead: "3-Ply Brown Corrugated Box (4\" × 4\" × 4\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (4\" × 4\" × 4\")" },
      { label: 'Dimensions (inches)', value: "4\" × 4\" × 4\"" },
      { label: 'Dimensions (cm)', value: "10.2 × 10.2 × 10.2 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-4-5x4-5x2-inch': {
    productName: "3-Ply Brown Corrugated Box (4.5\" × 4.5\" × 2\")",
    subhead: "3-Ply Brown Corrugated Box (4.5\" × 4.5\" × 2\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (4.5\" × 4.5\" × 2\")" },
      { label: 'Dimensions (inches)', value: "4.5\" × 4.5\" × 2\"" },
      { label: 'Dimensions (cm)', value: "11.4 × 11.4 × 5.1 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-5x4x2-5-inch': {
    productName: "3-Ply Brown Corrugated Box (5\" × 4\" × 2.5\")",
    subhead: "3-Ply Brown Corrugated Box (5\" × 4\" × 2.5\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (5\" × 4\" × 2.5\")" },
      { label: 'Dimensions (inches)', value: "5\" × 4\" × 2.5\"" },
      { label: 'Dimensions (cm)', value: "12.7 × 10.2 × 6.3 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-5x4x3-5-inch': {
    productName: "3-Ply Brown Corrugated Box (5\" × 4\" × 3.5\")",
    subhead: "3-Ply Brown Corrugated Box (5\" × 4\" × 3.5\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (5\" × 4\" × 3.5\")" },
      { label: 'Dimensions (inches)', value: "5\" × 4\" × 3.5\"" },
      { label: 'Dimensions (cm)', value: "12.7 × 10.2 × 8.9 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-5x5x5-inch': {
    productName: "3-Ply Brown Corrugated Box (5\" × 5\" × 5\")",
    subhead: "3-Ply Brown Corrugated Box (5\" × 5\" × 5\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (5\" × 5\" × 5\")" },
      { label: 'Dimensions (inches)', value: "5\" × 5\" × 5\"" },
      { label: 'Dimensions (cm)', value: "12.7 × 12.7 × 12.7 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-6x6x6-inch': {
    productName: "3-Ply Brown Corrugated Box (6\" × 6\" × 6\")",
    subhead: "3-Ply Brown Corrugated Box (6\" × 6\" × 6\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (6\" × 6\" × 6\")" },
      { label: 'Dimensions (inches)', value: "6\" × 6\" × 6\"" },
      { label: 'Dimensions (cm)', value: "15.2 × 15.2 × 15.2 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 25 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-6x6x3-inch': {
    productName: "3-Ply Brown Corrugated Box (6\" × 6\" × 3\")",
    subhead: "3-Ply Brown Corrugated Box (6\" × 6\" × 3\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (6\" × 6\" × 3\")" },
      { label: 'Dimensions (inches)', value: "6\" × 6\" × 3\"" },
      { label: 'Dimensions (cm)', value: "15.2 × 15.2 × 7.6 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 25 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-6x3x3-inch': {
    productName: "3-Ply Brown Corrugated Box (6\" × 3\" × 3\")",
    subhead: "3-Ply Brown Corrugated Box (6\" × 3\" × 3\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (6\" × 3\" × 3\")" },
      { label: 'Dimensions (inches)', value: "6\" × 3\" × 3\"" },
      { label: 'Dimensions (cm)', value: "15.2 × 7.6 × 7.6 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-6x5x2-inch': {
    productName: "3-Ply Brown Corrugated Box (6\" × 5\" × 2\")",
    subhead: "3-Ply Brown Corrugated Box (6\" × 5\" × 2\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (6\" × 5\" × 2\")" },
      { label: 'Dimensions (inches)', value: "6\" × 5\" × 2\"" },
      { label: 'Dimensions (cm)', value: "15.2 × 12.7 × 5.1 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-6x4x4-inch': {
    productName: "3-Ply Brown Corrugated Box (6\" × 4\" × 4\")",
    subhead: "3-Ply Brown Corrugated Box (6\" × 4\" × 4\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (6\" × 4\" × 4\")" },
      { label: 'Dimensions (inches)', value: "6\" × 4\" × 4\"" },
      { label: 'Dimensions (cm)', value: "15.2 × 10.2 × 10.2 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-7x7x7-inch': {
    productName: "3-Ply Brown Corrugated Box (7\" × 7\" × 7\")",
    subhead: "3-Ply Brown Corrugated Box (7\" × 7\" × 7\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (7\" × 7\" × 7\")" },
      { label: 'Dimensions (inches)', value: "7\" × 7\" × 7\"" },
      { label: 'Dimensions (cm)', value: "17.8 × 17.8 × 17.8 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 25 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-7x4x2-inch': {
    productName: "3-Ply Brown Corrugated Box (7\" × 4\" × 2\")",
    subhead: "3-Ply Brown Corrugated Box (7\" × 4\" × 2\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (7\" × 4\" × 2\")" },
      { label: 'Dimensions (inches)', value: "7\" × 4\" × 2\"" },
      { label: 'Dimensions (cm)', value: "17.8 × 10.2 × 5.1 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 25 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-7x4x3-5-inch': {
    productName: "3-Ply Brown Corrugated Box (7\" × 4\" × 3.5\")",
    subhead: "3-Ply Brown Corrugated Box (7\" × 4\" × 3.5\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (7\" × 4\" × 3.5\")" },
      { label: 'Dimensions (inches)', value: "7\" × 4\" × 3.5\"" },
      { label: 'Dimensions (cm)', value: "17.8 × 10.2 × 8.9 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-7x5-25x4-25-inch': {
    productName: "3-Ply Brown Corrugated Box (7\" × 5.25\" × 4.25\")",
    subhead: "3-Ply Brown Corrugated Box (7\" × 5.25\" × 4.25\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (7\" × 5.25\" × 4.25\")" },
      { label: 'Dimensions (inches)', value: "7\" × 5.25\" × 4.25\"" },
      { label: 'Dimensions (cm)', value: "17.8 × 13.3 × 10.8 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 25 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-7-5x4-5x3-5-inch': {
    productName: "3-Ply Brown Corrugated Box (7.5\" × 4.5\" × 3.5\")",
    subhead: "3-Ply Brown Corrugated Box (7.5\" × 4.5\" × 3.5\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (7.5\" × 4.5\" × 3.5\")" },
      { label: 'Dimensions (inches)', value: "7.5\" × 4.5\" × 3.5\"" },
      { label: 'Dimensions (cm)', value: "19.1 × 11.4 × 8.9 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-8x8x3-inch': {
    productName: "3-Ply Brown Corrugated Box (8\" × 8\" × 3\")",
    subhead: "3-Ply Brown Corrugated Box (8\" × 8\" × 3\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (8\" × 8\" × 3\")" },
      { label: 'Dimensions (inches)', value: "8\" × 8\" × 3\"" },
      { label: 'Dimensions (cm)', value: "20.3 × 20.3 × 7.6 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 25 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-8x5x3-5-inch': {
    productName: "3-Ply Brown Corrugated Box (8\" × 5\" × 3.5\")",
    subhead: "3-Ply Brown Corrugated Box (8\" × 5\" × 3.5\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (8\" × 5\" × 3.5\")" },
      { label: 'Dimensions (inches)', value: "8\" × 5\" × 3.5\"" },
      { label: 'Dimensions (cm)', value: "20.3 × 12.7 × 8.9 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 25 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-8x5x2-inch': {
    productName: "3-Ply Brown Corrugated Box (8\" × 5\" × 2\")",
    subhead: "3-Ply Brown Corrugated Box (8\" × 5\" × 2\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (8\" × 5\" × 2\")" },
      { label: 'Dimensions (inches)', value: "8\" × 5\" × 2\"" },
      { label: 'Dimensions (cm)', value: "20.3 × 12.7 × 5.1 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-8x4x4-inch': {
    productName: "3-Ply Brown Corrugated Box (8\" × 4\" × 4\")",
    subhead: "3-Ply Brown Corrugated Box (8\" × 4\" × 4\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (8\" × 4\" × 4\")" },
      { label: 'Dimensions (inches)', value: "8\" × 4\" × 4\"" },
      { label: 'Dimensions (cm)', value: "20.3 × 10.2 × 10.2 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-8x4x8-inch': {
    productName: "3-Ply Brown Corrugated Box (8\" × 4\" × 8\")",
    subhead: "3-Ply Brown Corrugated Box (8\" × 4\" × 8\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (8\" × 4\" × 8\")" },
      { label: 'Dimensions (inches)', value: "8\" × 4\" × 8\"" },
      { label: 'Dimensions (cm)', value: "20.3 × 10.2 × 20.3 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 25 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-9x7-5x4-5-inch': {
    productName: "3-Ply Brown Corrugated Box (9\" × 7.5\" × 4.5\")",
    subhead: "3-Ply Brown Corrugated Box (9\" × 7.5\" × 4.5\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (9\" × 7.5\" × 4.5\")" },
      { label: 'Dimensions (inches)', value: "9\" × 7.5\" × 4.5\"" },
      { label: 'Dimensions (cm)', value: "22.9 × 19.1 × 11.4 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 25 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-9x6x6-inch': {
    productName: "3-Ply Brown Corrugated Box (9\" × 6\" × 6\")",
    subhead: "3-Ply Brown Corrugated Box (9\" × 6\" × 6\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (9\" × 6\" × 6\")" },
      { label: 'Dimensions (inches)', value: "9\" × 6\" × 6\"" },
      { label: 'Dimensions (cm)', value: "22.9 × 15.2 × 15.2 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 25 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-9x3x3-inch': {
    productName: "3-Ply Brown Corrugated Box (9\" × 3\" × 3\")",
    subhead: "3-Ply Brown Corrugated Box (9\" × 3\" × 3\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (9\" × 3\" × 3\")" },
      { label: 'Dimensions (inches)', value: "9\" × 3\" × 3\"" },
      { label: 'Dimensions (cm)', value: "22.9 × 7.6 × 7.6 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-9x6x3-inch': {
    productName: "3-Ply Brown Corrugated Box (9\" × 6\" × 3\")",
    subhead: "3-Ply Brown Corrugated Box (9\" × 6\" × 3\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (9\" × 6\" × 3\")" },
      { label: 'Dimensions (inches)', value: "9\" × 6\" × 3\"" },
      { label: 'Dimensions (cm)', value: "22.9 × 15.2 × 7.6 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 25 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-9x4x2-inch': {
    productName: "3-Ply Brown Corrugated Box (9\" × 4\" × 2\")",
    subhead: "3-Ply Brown Corrugated Box (9\" × 4\" × 2\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (9\" × 4\" × 2\")" },
      { label: 'Dimensions (inches)', value: "9\" × 4\" × 2\"" },
      { label: 'Dimensions (cm)', value: "22.9 × 10.2 × 5.1 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-9x6x4-5-inch': {
    productName: "3-Ply Brown Corrugated Box (9\" × 6\" × 4.5\")",
    subhead: "3-Ply Brown Corrugated Box (9\" × 6\" × 4.5\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (9\" × 6\" × 4.5\")" },
      { label: 'Dimensions (inches)', value: "9\" × 6\" × 4.5\"" },
      { label: 'Dimensions (cm)', value: "22.9 × 15.2 × 11.4 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 25 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-10x4-5x3-5-inch': {
    productName: "3-Ply Brown Corrugated Box (10\" × 4.5\" × 3.5\")",
    subhead: "3-Ply Brown Corrugated Box (10\" × 4.5\" × 3.5\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (10\" × 4.5\" × 3.5\")" },
      { label: 'Dimensions (inches)', value: "10\" × 4.5\" × 3.5\"" },
      { label: 'Dimensions (cm)', value: "25.4 × 11.4 × 8.9 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 25 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-11x6x5-inch': {
    productName: "3-Ply Brown Corrugated Box (11\" × 6\" × 5\")",
    subhead: "3-Ply Brown Corrugated Box (11\" × 6\" × 5\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (11\" × 6\" × 5\")" },
      { label: 'Dimensions (inches)', value: "11\" × 6\" × 5\"" },
      { label: 'Dimensions (cm)', value: "27.9 × 15.2 × 12.7 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 25 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-12x4x3-inch': {
    productName: "3-Ply Brown Corrugated Box (12\" × 4\" × 3\")",
    subhead: "3-Ply Brown Corrugated Box (12\" × 4\" × 3\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (12\" × 4\" × 3\")" },
      { label: 'Dimensions (inches)', value: "12\" × 4\" × 3\"" },
      { label: 'Dimensions (cm)', value: "30.5 × 10.2 × 7.6 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 25 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-12x10x8-inch': {
    productName: "3-Ply Brown Corrugated Box (12\" × 10\" × 8\")",
    subhead: "3-Ply Brown Corrugated Box (12\" × 10\" × 8\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (12\" × 10\" × 8\")" },
      { label: 'Dimensions (inches)', value: "12\" × 10\" × 8\"" },
      { label: 'Dimensions (cm)', value: "30.5 × 25.4 × 20.3 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 10 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-12x8x8-inch': {
    productName: "3-Ply Brown Corrugated Box (12\" × 8\" × 8\")",
    subhead: "3-Ply Brown Corrugated Box (12\" × 8\" × 8\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (12\" × 8\" × 8\")" },
      { label: 'Dimensions (inches)', value: "12\" × 8\" × 8\"" },
      { label: 'Dimensions (cm)', value: "30.5 × 20.3 × 20.3 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 10 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-12x2x12-inch': {
    productName: "3-Ply Brown Corrugated Box (12\" × 2\" × 12\")",
    subhead: "3-Ply Brown Corrugated Box (12\" × 2\" × 12\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (12\" × 2\" × 12\")" },
      { label: 'Dimensions (inches)', value: "12\" × 2\" × 12\"" },
      { label: 'Dimensions (cm)', value: "30.5 × 5.1 × 30.5 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 20 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-12x11x6-inch': {
    productName: "3-Ply Brown Corrugated Box (12\" × 11\" × 6\")",
    subhead: "3-Ply Brown Corrugated Box (12\" × 11\" × 6\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (12\" × 11\" × 6\")" },
      { label: 'Dimensions (inches)', value: "12\" × 11\" × 6\"" },
      { label: 'Dimensions (cm)', value: "30.5 × 27.9 × 15.2 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 10 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-15x11x9-inch': {
    productName: "3-Ply Brown Corrugated Box (15\" × 11\" × 9\")",
    subhead: "3-Ply Brown Corrugated Box (15\" × 11\" × 9\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (15\" × 11\" × 9\")" },
      { label: 'Dimensions (inches)', value: "15\" × 11\" × 9\"" },
      { label: 'Dimensions (cm)', value: "38.1 × 27.9 × 22.9 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 10 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-12x8x4-inch': {
    productName: "3-Ply Brown Corrugated Box (12\" × 8\" × 4\")",
    subhead: "3-Ply Brown Corrugated Box (12\" × 8\" × 4\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (12\" × 8\" × 4\")" },
      { label: 'Dimensions (inches)', value: "12\" × 8\" × 4\"" },
      { label: 'Dimensions (cm)', value: "30.5 × 20.3 × 10.2 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 20 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },
  '3-ply-corrugated-box-4x4x3-inch': {
    productName: "3-Ply Brown Corrugated Box (4\" × 4\" × 3\")",
    subhead: "3-Ply Brown Corrugated Box (4\" × 4\" × 3\") - Direct Manufacturer Rates",
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Corrugated Box (4\" × 4\" × 3\")" },
      { label: 'Dimensions (inches)', value: "4\" × 4\" × 3\"" },
      { label: 'Dimensions (cm)', value: "10.2 × 10.2 × 7.6 cm" },
      { label: 'Material', value: '3-Ply Corrugated Cardboard' },
      { label: 'Paper Grade', value: '18-24 BF Virgin Kraft Liner' },
      { label: 'Flute Type', value: 'B/C Flute Structure' },
      { label: 'Color', value: 'Classic Kraft Brown' },
      { label: 'Weight Capacity', value: 'Up to 6-10 kg Payload' },
      { label: 'Usage', value: 'Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels & Warehousing' },
      { label: 'Shipping', value: 'Fast Pan-India Doorstep Dispatch' }
    ],
    featureHeadline: 'Heavy-Duty 3-Ply Protection for Courier & Logistics Transit',
    features: [
      { title: 'High Bursting & Edge Crush Strength', desc: 'Crafted with premium virgin kraft paper and resilient fluting to absorb shocks and resist multi-tier transit drops.' },
      { title: '100% Eco-Friendly & Recyclable', desc: 'Biodegradable, eco-compliant single-wall corrugated board.' },
      { title: 'Standard Flap & Die-Cut Creasing', desc: 'Accurate machine pre-creased folds for effortless tape application and packaging speed.' },
      { title: 'Direct Factory Wholesale Pricing', desc: 'Direct from manufacturer prices with volume-tiered savings.' }
    ],
    deepDescription: {
      headline: 'Material Architecture & Quality Standards',
      sections: [
        { title: 'Corrugated Construction', content: 'Manufactured with high-speed automated corrugation lines ensuring uniform flute height, superior starch adhesion, and zero de-lamination under transit vibrations.' },
        { title: 'Packaging Recommendations', content: 'Ideal for small-to-medium retail goods, books, apparel, gadgets, cosmetics, and fragile items paired with bubble wrap or kraft honeycomb wrap.' }
      ]
    },
    faqs: [
      { q: 'What is the MOQ for this box?', a: 'Minimum order quantity starts from 50 pieces with tiered volume discounts.' },
      { q: 'Do you offer custom company logo printing?', a: 'Yes! Custom logo printing in single or multi-color is available for bulk consignments.' }
    ],
    offers: [
      { code: 'FACTORYSAVE', description: 'Instant bulk discounts applied on packs of 100, 500, and 1,000 pcs.', type: 'discount' }
    ]
  },

  '3-ply-white-corrugated-packing-box-7x4x2-inch-small-shipping-carton-box-eas': {
    productName: "3 Ply White Corrugated Packing Box 7x4x2 Inch | Small Shipping Carton Box| Easy to Buy Packaging Box",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Corrugated Packing Box 7x4x2 Inch | Small Shipping Carton Box| Easy to Buy Packaging Box" },
      { label: 'Category', value: "3 Ply White Corrugated Boxes" },
      { label: 'Dimensions', value: "7\" × 4\" × 2\" (17.8 × 10.2 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '3-ply-white-corrugated-packing-box-7x4x3-5-inch-durable-shipping-carton-sma': {
    productName: "3 Ply White Corrugated Packing Box 7x4x3.5 Inch | Durable Shipping Carton | Small Packaging Box for Ecommerce",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Corrugated Packing Box 7x4x3.5 Inch | Durable Shipping Carton | Small Packaging Box for Ecommerce" },
      { label: 'Category', value: "3 Ply White Corrugated Boxes" },
      { label: 'Dimensions', value: "7\" × 4\" × 3.5\" (17.8 × 10.2 × 8.9 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '3-ply-white-cardboard-box-size-9-5x6x3-5-length-9-5-inch-width-6-inch-heigh': {
    productName: "3 Ply White Cardboard Box Size: 9.5x6x3.5 Length 9.5 inch Width 6 inch Height 3.5 inch 3Ply custom cardboard packing boxes",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Cardboard Box Size: 9.5x6x3.5 Length 9.5 inch Width 6 inch Height 3.5 inch 3Ply custom cardboard packing boxes" },
      { label: 'Category', value: "3 Ply White Corrugated Boxes" },
      { label: 'Dimensions', value: "9.5\" × 6\" × 3.5\" (24.1 × 15.2 × 8.9 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '25 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 25 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '3-ply-white-corrugated-packing-box-5x4x2-5-inch-carton-box-shipping-box': {
    productName: "3 Ply White Corrugated Packing Box 5x4x2.5 Inch, Carton Box. Shipping Box",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Corrugated Packing Box 5x4x2.5 Inch, Carton Box. Shipping Box" },
      { label: 'Category', value: "3 Ply White Corrugated Boxes" },
      { label: 'Dimensions', value: "5\" × 4\" × 2.5\" (12.7 × 10.2 × 6.3 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '3-ply-white-cardboard-box-size-8x5x2-length-8-inch-width-5-inch-height-2-in': {
    productName: "3 Ply White Cardboard Box Size: 8x5x2 Length 8 inch Width 5 inch Height 2 inch 3Ply custom cardboard packing boxes",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Cardboard Box Size: 8x5x2 Length 8 inch Width 5 inch Height 2 inch 3Ply custom cardboard packing boxes" },
      { label: 'Category', value: "3 Ply White Corrugated Boxes" },
      { label: 'Dimensions', value: "8\" × 5\" × 2\" (20.3 × 12.7 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '3-ply-brown-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag': {
    productName: "3 Ply Brown Corrugated Flap Box Size 4.5x3x1 Inch | Jewellery And Gift Packaging box",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply Brown Corrugated Flap Box Size 4.5x3x1 Inch | Jewellery And Gift Packaging box" },
      { label: 'Category', value: "Brown Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "4.5\" × 3\" × 1\" (11.4 × 7.6 × 2.5 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '100 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 100 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '3-ply-brown-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busin': {
    productName: "3-Ply Brown Flap Box 4x4x2 Inch-Ultimate Packaging Solution for Small Businesses",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3-Ply Brown Flap Box 4x4x2 Inch-Ultimate Packaging Solution for Small Businesses" },
      { label: 'Category', value: "Brown Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "4\" × 4\" × 2\" (10.2 × 10.2 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '25 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 25 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'brown-flap-box-3-ply-brown-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi': {
    productName: "3 Ply Brown Flap Corrugated Box – Size 4x4x1.5 Inch | Perfect Mini Packaging Box for Secure & Stylish Shipping",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply Brown Flap Corrugated Box – Size 4x4x1.5 Inch | Perfect Mini Packaging Box for Secure & Stylish Shipping" },
      { label: 'Category', value: "Brown Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "4\" × 4\" × 1.5\" (10.2 × 10.2 × 3.8 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'packaging-box-5x5x2-inch-brown-flap-box-mini-corrugated-packaging-for-jewel': {
    productName: "AS Print Packaging Box 5x5x2 Inch Brown Flap Box – Mini Corrugated Packaging for Jewelry, Gifts & E-commerce Orders",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "AS Print Packaging Box 5x5x2 Inch Brown Flap Box – Mini Corrugated Packaging for Jewelry, Gifts & E-commerce Orders" },
      { label: 'Category', value: "Brown Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "5\" × 5\" × 2\" (12.7 × 12.7 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '25 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 25 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'brown-flap-box-3-ply-brown-flap-corrugated-box-6x4x2-inch-for-small-items': {
    productName: "3 Ply Brown Flap Corrugated Box 6x4x2 Inch for Small Items",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply Brown Flap Corrugated Box 6x4x2 Inch for Small Items" },
      { label: 'Category', value: "Brown Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "6\" × 4\" × 2\" (15.2 × 10.2 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '25 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 25 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'brown-flap-box-3-ply-brown-flap-corrugated-box-size-6x5x1-5-inch-multipurpo': {
    productName: "3 Ply Brown Flap Corrugated Box – Size 6x5x1.5 Inch | Multipurpose Brown Corrugated Box for Small Item Packaging",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply Brown Flap Corrugated Box – Size 6x5x1.5 Inch | Multipurpose Brown Corrugated Box for Small Item Packaging" },
      { label: 'Category', value: "Brown Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "6\" × 5\" × 1.5\" (15.2 × 12.7 × 3.8 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x5-5x2-inch-i-premium': {
    productName: "3 Ply Brown Flap Corrugated Box – Size 7x5.5x2 Inch I Premium Corrugated Box for Shipping Gifts, Cosmetics & More",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply Brown Flap Corrugated Box – Size 7x5.5x2 Inch I Premium Corrugated Box for Shipping Gifts, Cosmetics & More" },
      { label: 'Category', value: "Brown Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "7\" × 5.5\" × 2\" (17.8 × 14.0 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '25 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 25 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x7x2-inch-i-premium-co': {
    productName: "3 Ply Brown Flap Corrugated Box – Size 7x7x2 Inch I Premium Corrugated Kraft Box for Gift Sets, Hampers & Fragile Items",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply Brown Flap Corrugated Box – Size 7x7x2 Inch I Premium Corrugated Kraft Box for Gift Sets, Hampers & Fragile Items" },
      { label: 'Category', value: "Brown Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "7\" × 7\" × 2\" (17.8 × 17.8 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '25 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 25 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'brown-flap-box-3-ply-brown-flap-corrugated-box-size-9x6x3-inch-i-premium-co': {
    productName: "3 Ply Brown Flap Corrugated Box – Size 9x6x3 Inch I Premium Corrugated Packaging for Gifts, Soaps, Ecommerce & Bulk Orders",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply Brown Flap Corrugated Box – Size 9x6x3 Inch I Premium Corrugated Packaging for Gifts, Soaps, Ecommerce & Bulk Orders" },
      { label: 'Category', value: "Brown Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "9\" × 6\" × 3\" (22.9 × 15.2 × 7.6 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '20 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 20 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '3-ply-brown-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c': {
    productName: "3 Ply Brown Corrugated Flap Box Size 14x13x2.5 Inch I Large Kraft Box for Clothing, Calendars, and Flat Product Shipping",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply Brown Corrugated Flap Box Size 14x13x2.5 Inch I Large Kraft Box for Clothing, Calendars, and Flat Product Shipping" },
      { label: 'Category', value: "Brown Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "14\" × 13\" × 2.5\" (35.6 × 33.0 × 6.3 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '10 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 10 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '3-ply-brown-flap-box-size-13x9x2-inches-shipping-box-courier-box': {
    productName: "3 ply Brown Flap Box Size 13X9X2 inches, Shipping Box Courier Box",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 ply Brown Flap Box Size 13X9X2 inches, Shipping Box Courier Box" },
      { label: 'Category', value: "Brown Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "13\" × 9\" × 2\" (33.0 × 22.9 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '20 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 20 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'brown-flap-box-3-ply-brown-corrugated-packing-box-flap-type-size-10x7x3-5-l': {
    productName: "3 Ply Brown Corrugated Packing Box Flap Type Size: 10X7X3.5 Length 10 inch Width 7 inch Height 3.5 inch Shipping box Courier Box",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply Brown Corrugated Packing Box Flap Type Size: 10X7X3.5 Length 10 inch Width 7 inch Height 3.5 inch Shipping box Courier Box" },
      { label: 'Category', value: "Brown Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "10\" × 7\" × 3.5\" (25.4 × 17.8 × 8.9 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '10 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 10 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '3-ply-brown-corrugated-carton-flap-box-size-8x4x2-inches-length-8-inch-widt': {
    productName: "3 ply Brown Corrugated Carton Flap Box Size 8X4X2 inches Length 8 inch Width 4 inch Height 2 inch Shipping Box Courier Box",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 ply Brown Corrugated Carton Flap Box Size 8X4X2 inches Length 8 inch Width 4 inch Height 2 inch Shipping Box Courier Box" },
      { label: 'Category', value: "Brown Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "8\" × 4\" × 2\" (20.3 × 10.2 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '25 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 25 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'brown-flap-box-3-ply-brown-flap-corrugated-box-size-14x9x3-inch-ideal-packa': {
    productName: "3 Ply Brown Flap Corrugated Box – Size 14x9x3 Inch | Ideal Packaging Box for E-commerce & Shipping",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply Brown Flap Corrugated Box – Size 14x9x3 Inch | Ideal Packaging Box for E-commerce & Shipping" },
      { label: 'Category', value: "Brown Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "14\" × 9\" × 3\" (35.6 × 22.9 × 7.6 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '10 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 10 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'brown-flap-box-4x2-5x1-5-inch-brown-flap-corrugated-box-3-ply-mini-packagin': {
    productName: "4x2.5x1.5 Inch Brown Flap Corrugated Box | 3 Ply Mini Packaging Box for Jewelry, Gifts & E-commerce Shipping",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "4x2.5x1.5 Inch Brown Flap Corrugated Box | 3 Ply Mini Packaging Box for Jewelry, Gifts & E-commerce Shipping" },
      { label: 'Category', value: "Brown Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "4\" × 2.5\" × 1.5\" (10.2 × 6.3 × 3.8 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '3-ply-white-corrugated-flap-box-10x7x3-5-inch-for-gifts': {
    productName: "3 Ply White Corrugated Flap Box 10x7x3.5 Inch for Gifts",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Corrugated Flap Box 10x7x3.5 Inch for Gifts" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "10\" × 7\" × 3.5\" (25.4 × 17.8 × 8.9 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '10 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 10 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '3-ply-white-corrugated-flap-box-size-8x4x2-inch-stylish-corrugated-box-for': {
    productName: "3 Ply White Corrugated Flap Box Size 8x4x2 Inch | Stylish Corrugated Box for Cosmetics, Electronics & Gifts",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Corrugated Flap Box Size 8x4x2 Inch | Stylish Corrugated Box for Cosmetics, Electronics & Gifts" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "8\" × 4\" × 2\" (20.3 × 10.2 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '25 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 25 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'white-flap-box-3-ply-white-flap-corrugated-box-size-9x6x3-inch-i-premium-co': {
    productName: "3 Ply White Flap Corrugated Box – Size 9x6x3 Inch I Premium Corrugated Packaging for Gifts, Soaps, Ecommerce & Bulk Orders",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Flap Corrugated Box – Size 9x6x3 Inch I Premium Corrugated Packaging for Gifts, Soaps, Ecommerce & Bulk Orders" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "9\" × 6\" × 3\" (22.9 × 15.2 × 7.6 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '20 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 20 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'white-flap-box-3-ply-white-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi': {
    productName: "3 Ply White Flap Corrugated Box – Size 4x4x1.5 Inch | Perfect Mini Packaging Box for Secure & Stylish Shipping",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Flap Corrugated Box – Size 4x4x1.5 Inch | Perfect Mini Packaging Box for Secure & Stylish Shipping" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "4\" × 4\" × 1.5\" (10.2 × 10.2 × 3.8 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'packaging-box-5x5x2-inch-white-flap-box-mini-corrugated-packaging-for-jewel': {
    productName: "AS Print Packaging Box 5x5x2 Inch White Flap Box – Mini Corrugated Packaging for Jewelry, Gifts & E-commerce Orders",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "AS Print Packaging Box 5x5x2 Inch White Flap Box – Mini Corrugated Packaging for Jewelry, Gifts & E-commerce Orders" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "5\" × 5\" × 2\" (12.7 × 12.7 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '25 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 25 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'white-flap-box-3-ply-white-flap-corrugated-box-6x4x2-inch-for-small-items': {
    productName: "3 Ply White Flap Corrugated Box 6x4x2 Inch for Small Items",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Flap Corrugated Box 6x4x2 Inch for Small Items" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "6\" × 4\" × 2\" (15.2 × 10.2 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'white-flap-box-3-ply-white-flap-corrugated-box-size-7x7x2-inch-i-premium-co': {
    productName: "3 Ply White Flap Corrugated Box – Size 7x7x2 Inch I Premium Corrugated Kraft Box for Gift Sets, Hampers & Fragile Items",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Flap Corrugated Box – Size 7x7x2 Inch I Premium Corrugated Kraft Box for Gift Sets, Hampers & Fragile Items" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "7\" × 7\" × 2\" (17.8 × 17.8 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '25 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 25 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '3-ply-white-flap-box-size-13x9x2-inches-shipping-box-courier-box': {
    productName: "3 ply White Flap Box Size 13X9X2 inches, Shipping Box Courier Box",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 ply White Flap Box Size 13X9X2 inches, Shipping Box Courier Box" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "13\" × 9\" × 2\" (33.0 × 22.9 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '20 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 20 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '3-ply-white-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c': {
    productName: "3 Ply White Corrugated Flap Box Size 14x13x2.5 Inch I Large Kraft Box for Clothing, Calendars, and Flat Product Shipping",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Corrugated Flap Box Size 14x13x2.5 Inch I Large Kraft Box for Clothing, Calendars, and Flat Product Shipping" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "14\" × 13\" × 2.5\" (35.6 × 33.0 × 6.3 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '10 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 10 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '3ply-white-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busine': {
    productName: "3Ply White Flap Box 4x4x2 Inch-Ultimate Packaging Solution for Small Businesses",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3Ply White Flap Box 4x4x2 Inch-Ultimate Packaging Solution for Small Businesses" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "4\" × 4\" × 2\" (10.2 × 10.2 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '25 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 25 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '3-ply-white-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag': {
    productName: "3 Ply White Corrugated Flap Box Size 4.5x3x1 Inch | Jewellery And Gift Packaging box",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Corrugated Flap Box Size 4.5x3x1 Inch | Jewellery And Gift Packaging box" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "4.5\" × 3\" × 1\" (11.4 × 7.6 × 2.5 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '100 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 100 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'white-flap-box-3-ply-white-flap-corrugated-box-size-6x5x1-5-inch-multipurpo': {
    productName: "3 Ply White Flap Corrugated Box – Size 6x5x1.5 Inch | Multipurpose White Corrugated Box for Small Item Packaging",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Flap Corrugated Box – Size 6x5x1.5 Inch | Multipurpose White Corrugated Box for Small Item Packaging" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "6\" × 5\" × 1.5\" (15.2 × 12.7 × 3.8 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'white-flap-box-3-ply-white-flap-corrugated-box-size-7x5-5x2-inch-i-premium': {
    productName: "3 Ply White Flap Corrugated Box – Size 7x5.5x2 Inch I Premium Corrugated Box for Shipping Gifts, Cosmetics & More",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Flap Corrugated Box – Size 7x5.5x2 Inch I Premium Corrugated Box for Shipping Gifts, Cosmetics & More" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "7\" × 5.5\" × 2\" (17.8 × 14.0 × 5.1 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '25 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 25 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'white-mug-packaging-box-5-3-5-4-inch-3-ply-corrugated-cardboard-flap-box-fo': {
    productName: "White Mug Packaging Box 5×3.5×4 Inch | 3 Ply Corrugated Cardboard Flap Box for Safe Mug Shipping",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "White Mug Packaging Box 5×3.5×4 Inch | 3 Ply Corrugated Cardboard Flap Box for Safe Mug Shipping" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "5\" × 3.5\" × 4\" (12.7 × 8.9 × 10.2 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'white-flap-box-3-ply-white-flap-corrugated-box-14x9x3-inch-for-ecommerce': {
    productName: "3 Ply White Flap Corrugated Box 14x9x3 Inch for Ecommerce",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "3 Ply White Flap Corrugated Box 14x9x3 Inch for Ecommerce" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "14\" × 9\" × 3\" (35.6 × 22.9 × 7.6 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '10 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 10 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'white-flap-box-4x2-5x1-5-inch-white-flap-corrugated-box-3-ply-mini-hamper-p': {
    productName: "4x2.5x1.5 Inch White Flap Corrugated Box | 3 Ply Mini hamper Packaging Box for Jewelry, Gifts & E-commerce Shipping",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "4x2.5x1.5 Inch White Flap Corrugated Box | 3 Ply Mini hamper Packaging Box for Jewelry, Gifts & E-commerce Shipping" },
      { label: 'Category', value: "White Flap Corrugated Boxes" },
      { label: 'Dimensions', value: "4\" × 2.5\" × 1.5\" (10.2 × 6.3 × 3.8 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'premium-red-foldable-gift-box-with-ribbon-luxury-rigid-box-for-gift-hampers': {
    productName: "AS Print Gallery Premium Red Foldable Gift Box with Ribbon | Luxury Rigid Box for Gift Hampers, Weddings & Corporate Gifting (23 × 16 × 10 cm)",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "AS Print Gallery Premium Red Foldable Gift Box with Ribbon | Luxury Rigid Box for Gift Hampers, Weddings & Corporate Gifting (23 × 16 × 10 cm)" },
      { label: 'Category', value: "Rigid Luxury Boxes" },
      { label: 'Dimensions', value: "9.1\" × 6.3\" × 3.9\" (23 × 16 × 10 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '1 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 1 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'premium-yellow-rakhi-gift-box-with-golden-ribbon-18-13-7-cm-luxury-rigid-bo': {
    productName: "Premium Yellow Rakhi Gift Box with Golden Ribbon (18 × 13 × 7 cm) | Luxury Rigid Box for Raksha Bandhan Gifts, Chocolates, Dry Fruits & Gift Hampers",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "Premium Yellow Rakhi Gift Box with Golden Ribbon (18 × 13 × 7 cm) | Luxury Rigid Box for Raksha Bandhan Gifts, Chocolates, Dry Fruits & Gift Hampers" },
      { label: 'Category', value: "Rigid Luxury Boxes" },
      { label: 'Dimensions', value: "7.1\" × 5.1\" × 2.8\" (18 × 13 × 7 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '1 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 1 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'premium-purple-rakhi-gift-box-with-black-ribbon-18-13-7-cm-luxury-rigid-box': {
    productName: "AS Print Gallery Premium Purple Rakhi Gift Box with Black Ribbon (18 × 13 × 7 cm) | Luxury Rigid Box for Raksha Bandhan Gifts, Chocolates, Dry Fruits & Gift Hamp",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "AS Print Gallery Premium Purple Rakhi Gift Box with Black Ribbon (18 × 13 × 7 cm) | Luxury Rigid Box for Raksha Bandhan Gifts, Chocolates, Dry Fruits & Gift Hamp" },
      { label: 'Category', value: "Rigid Luxury Boxes" },
      { label: 'Dimensions', value: "7.1\" × 5.1\" × 2.8\" (18 × 13 × 7 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '1 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 1 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '4-cavity-red-diwali-rigid-gift-box-size-18x16-5x-4-cm-pack-of-1': {
    productName: "4 Cavity Red Diwali Rigid Gift Box Size 18X16.5X 4 cm– Pack of 1 | AS Print Gallery",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "4 Cavity Red Diwali Rigid Gift Box Size 18X16.5X 4 cm– Pack of 1 | AS Print Gallery" },
      { label: 'Category', value: "Rigid Luxury Boxes" },
      { label: 'Dimensions', value: "7.1\" × 6.5\" × 1.6\" (18 × 16.5 × 4 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '1 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 1 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'yellow-4-cavity-diwali-gift-box-pack-of-1': {
    productName: "AS Print Gallery Yellow 4 Cavity Diwali Gift Box – Pack of 1",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "AS Print Gallery Yellow 4 Cavity Diwali Gift Box – Pack of 1" },
      { label: 'Category', value: "Rigid Luxury Boxes" },
      { label: 'Dimensions', value: "7.1\" × 6.5\" × 1.6\" (18 × 16.5 × 4 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '1 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 1 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'purple-4-cavity-diwali-rigid-gift-box-size-18-16-5-4-cm-pack-of-1': {
    productName: "AS Print Gallery Purple 4 Cavity Diwali Rigid Gift Box Size 18 × 16.5 × 4 cm – Pack of 1",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "AS Print Gallery Purple 4 Cavity Diwali Rigid Gift Box Size 18 × 16.5 × 4 cm – Pack of 1" },
      { label: 'Category', value: "Rigid Luxury Boxes" },
      { label: 'Dimensions', value: "7.1\" × 6.5\" × 1.6\" (18 × 16.5 × 4 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '1 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 1 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'purple-shubh-deepawali-4-cavity-rigid-gift-box-with-golden-ribbon-18-16-5-4': {
    productName: "Purple Shubh Deepawali 4 Cavity Rigid Gift Box with Golden Ribbon, 18 × 16.5 × 4 cm",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "Purple Shubh Deepawali 4 Cavity Rigid Gift Box with Golden Ribbon, 18 × 16.5 × 4 cm" },
      { label: 'Category', value: "Rigid Luxury Boxes" },
      { label: 'Dimensions', value: "7.1\" × 6.5\" × 1.6\" (18 × 16.5 × 4 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '1 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 1 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'burger-packaging-box-4-4-2-75-inch-sbs-paper-food-packaging-box-for-takeawa': {
    productName: "Burger Packaging Box (4 × 4 × 2.75 Inch)—SBS Paper Food Packaging Box for Takeaway & Delivery",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "Burger Packaging Box (4 × 4 × 2.75 Inch)—SBS Paper Food Packaging Box for Takeaway & Delivery" },
      { label: 'Category', value: "Food Packaging Boxes & Containers" },
      { label: 'Dimensions', value: "4\" × 4\" × 2.75\" (10.2 × 10.2 × 7.0 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'sandwich-packaging-box-22-16-7-cm-premium-sbs-paper-food-packaging-box': {
    productName: "Sandwich Packaging Box (22 × 16 × 7 cm) – Premium SBS Paper Food Packaging Box",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "Sandwich Packaging Box (22 × 16 × 7 cm) – Premium SBS Paper Food Packaging Box" },
      { label: 'Category', value: "Food Packaging Boxes & Containers" },
      { label: 'Dimensions', value: "8.7\" × 6.3\" × 2.8\" (22 × 16 × 7 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '25 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 25 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'multicolour-printed-corrugated-pizza-box-for-7x7x1-5-inch-pizza-pack-of-50': {
    productName: "Multicolour Printed Corrugated Pizza Box for 7x7x1.5-Inch Pizza – Pack of 50",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "Multicolour Printed Corrugated Pizza Box for 7x7x1.5-Inch Pizza – Pack of 50" },
      { label: 'Category', value: "Food Packaging Boxes & Containers" },
      { label: 'Dimensions', value: "7\" × 7\" × 1.5\" (17.8 × 17.8 × 3.8 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  'multicolour-printed-corrugated-pizza-box-for-9x9x1-5-inch-pizza-pack-of-50': {
    productName: "Multicolour Printed Corrugated Pizza Box for 9x9x1.5-Inch Pizza – Pack of 50",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "Multicolour Printed Corrugated Pizza Box for 9x9x1.5-Inch Pizza – Pack of 50" },
      { label: 'Category', value: "Food Packaging Boxes & Containers" },
      { label: 'Dimensions', value: "9\" × 9\" × 1.5\" (22.9 × 22.9 × 3.8 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '4-4-4-inch-printed-pastry-box-for-2-pastries-cupcakes-donuts-desserts-multi': {
    productName: "4 × 4 × 4 Inch Printed Pastry Box for 2 Pastries, Cupcakes, Donuts & Desserts - Multicolour Maroon, Pack of 50",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "4 × 4 × 4 Inch Printed Pastry Box for 2 Pastries, Cupcakes, Donuts & Desserts - Multicolour Maroon, Pack of 50" },
      { label: 'Category', value: "Food Packaging Boxes & Containers" },
      { label: 'Dimensions', value: "4\" × 4\" × 4\" (10.2 × 10.2 × 10.2 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '7-5-4-inch-printed-pastry-box-for-6-pastries-cupcakes-donuts-desserts-3-ass': {
    productName: "7 × 5 × 4 Inch Printed Pastry Box for 6 Pastries, Cupcakes, Donuts & Desserts – 3 Assorted Designs, Pack of 50",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "7 × 5 × 4 Inch Printed Pastry Box for 6 Pastries, Cupcakes, Donuts & Desserts – 3 Assorted Designs, Pack of 50" },
      { label: 'Category', value: "Food Packaging Boxes & Containers" },
      { label: 'Dimensions', value: "7\" × 5\" × 4\" (17.8 × 12.7 × 10.2 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  },

  '5-5-4-inch-printed-pastry-box-for-4-pastries-cupcakes-donuts-desserts-3-ass': {
    productName: "5×5×4 Inch Printed Pastry Box for 4 Pastries, Cupcakes, Donuts & Desserts – 3 Assorted Designs, Pack of 50",
    subhead: 'Technical Specifications & Quality Certifications:',
    specs: [
      { label: 'Product Name', value: "5×5×4 Inch Printed Pastry Box for 4 Pastries, Cupcakes, Donuts & Desserts – 3 Assorted Designs, Pack of 50" },
      { label: 'Category', value: "Food Packaging Boxes & Containers" },
      { label: 'Dimensions', value: "5\" × 5\" × 4\" (12.7 × 12.7 × 10.2 cm)" },
      { label: 'Paper Grade', value: '18-24 BF Virgin Quality Paper' },
      { label: 'Flute / Construction', value: 'Heavy Duty Structural Durability' },
      { label: 'MOQ', value: '50 Pieces' },
      { label: 'Dispatch Timeline', value: 'Immediate 24-48h dispatch from Ghaziabad Plant' },
      { label: 'Custom Branding', value: 'Custom logo printing available upon request' }
    ],
    featureHeadline: 'Engineered for Maximum Strength & Protection',
    features: [
      {
        title: 'Factory Direct High Bursting Strength',
        desc: 'Engineered with premium virgin kraft paper and high-rigidity fluting to protect shipments against drops, vibrations, and stacking loads.'
      },
      {
        title: 'Precision Die-Cut Fit',
        desc: 'Manufactured with automated rotary die-cut machines ensuring clean folds, square edges, and seamless locking assembly.'
      },
      {
        title: '100% Recyclable & Sustainable',
        desc: 'Eco-friendly biodegradable construction conforming with Indian plastic ban regulations.'
      }
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'The minimum order quantity for this item is 50 pieces with wholesale tiered rates for higher quantities.'
      },
      {
        q: 'Can I print my custom logo and branding?',
        a: 'Yes, custom multi-color branding and custom sizes are manufactured at our Ghaziabad plant.'
      }
    ]
  }
};

function parseCustomDescriptionData(rawText: string = ''): {
  specs: DetailedSpecRow[];
  features: DetailedFeature[];
  faqs: DetailedFaq[];
  sections: DetailedSubSection[];
} {
  const specs: DetailedSpecRow[] = [];
  const features: DetailedFeature[] = [];
  const faqs: DetailedFaq[] = [];
  const sections: DetailedSubSection[] = [];

  if (!rawText || typeof rawText !== 'string') {
    return { specs, features, faqs, sections };
  }

  // 1. Parse FAQs (Q: ... A: ...)
  const faqRegex = /(?:^|\n)\s*(?:Q|Q\d+)\s*[:.-]\s*([^\n]+?)\s*\n\s*(?:A|Ans|Answer)\s*[:.-]\s*([\s\S]+?)(?=(?:\n\s*(?:Q|Q\d+)\s*[:.-])|$)/gi;
  let fMatch;
  while ((fMatch = faqRegex.exec(rawText)) !== null) {
    if (fMatch[1] && fMatch[2]) {
      faqs.push({
        q: fMatch[1].trim(),
        a: fMatch[2].trim()
      });
    }
  }

  // 2. Parse Specs and Features lines
  const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
  for (const line of lines) {
    if (/^(Q|Q\d+|A|Ans|Answer)\s*[:.-]/i.test(line)) continue;
    if (line.startsWith('###') || line.startsWith('===')) continue;

    const specMatch = line.match(/^[•\-\*✔]\s*([^:]+?)\s*:\s*(.+)$/);
    if (specMatch) {
      const label = specMatch[1].replace(/^[•\-\*✔📦⚡📋🏭❓]\s*/, '').trim();
      const val = specMatch[2].trim();
      if (label && val && label.length < 60) {
        if (line.includes('✔') || /feature|advantage|benefit|stackab|durab/i.test(label)) {
          features.push({ title: label, desc: val });
        } else {
          specs.push({ label, value: val });
        }
      }
    } else if (line.startsWith('✔')) {
      const cleanLine = line.replace(/^✔\s*/, '').trim();
      const parts = cleanLine.split(':');
      if (parts.length > 1) {
        features.push({ title: parts[0].trim(), desc: parts.slice(1).join(':').trim() });
      } else {
        features.push({ title: 'Feature', desc: cleanLine });
      }
    }
  }

  return { specs, features, faqs, sections };
}

/**
 * Universal detail generator for all existing and future products added to catalog.
 * Priority order:
 * 1. Admin custom detailed specs in database (if configured)
 * 2. Static curated DETAILED_DESCRIPTIONS (if predefined)
 * 3. Smart Category-aware fallback generator (guarantees zero UI breaks)
 */
export function getProductDetailInfo(slug: string, fallbackProduct: any): ProductDetailInfo {
  const title = fallbackProduct?.title || fallbackProduct?.name || 'Packaging Product';
  const categoryLabel = fallbackProduct?.categoryLabel || fallbackProduct?.category || 'Industrial Packaging';
  const dimensions = fallbackProduct?.dimensions || 'Custom Dimensions (As per order)';

  // Check if product description has custom admin-written detailed section
  const rawDesc = String(fallbackProduct?.description || fallbackProduct?.fullDesc || '');
  const detailedText = rawDesc.includes('---DETAILED_DESCRIPTION---')
    ? rawDesc.split('---DETAILED_DESCRIPTION---')[1]
    : rawDesc;

  const parsedCustom = parseCustomDescriptionData(detailedText);

  // If statically predefined in catalog
  const staticEntry = DETAILED_DESCRIPTIONS[slug];

  // Base specifications table
  const defaultSpecs: DetailedSpecRow[] = [
    { label: 'Product Name', value: title },
    { label: 'Dimensions (inches)', value: dimensions },
    { label: 'Dimensions (cm)', value: 'Fully customizable to any length x width x height' },
    { label: 'Material', value: 'High-Grade Industrial Material (Virgin Pulp / Food Safe)' },
    { label: 'Color', value: 'Custom / Standard Production Finish' },
    { label: 'Weight Capacity', value: 'Tailored for Light to Heavy Industrial Load' },
    { label: 'Usage', value: `${categoryLabel}, E-Commerce, Retail, Storage, Dispatch` },
    { label: 'Customization', value: 'Brand Logo Printing, Custom Sizes, Special Finishes' },
    { label: 'Shipping', value: 'Free Pan-India Shipping' }
  ];

  // Merge specs: admin custom specs > static specs > default specs
  let finalSpecs = defaultSpecs;
  if (parsedCustom.specs.length > 0) {
    const hasProdName = parsedCustom.specs.some(s => s.label.toLowerCase().includes('product name'));
    finalSpecs = hasProdName ? parsedCustom.specs : [{ label: 'Product Name', value: title }, ...parsedCustom.specs];
  } else if (staticEntry?.specs) {
    finalSpecs = staticEntry.specs;
  }

  // Merge features: admin custom features > static features > default features
  let finalFeatures = staticEntry?.features || [
    {
      title: 'Size & Flexibility',
      desc: `Precision fabricated to ${dimensions}. Engineered to hold items securely without unnecessary void space, keeping your merchandise safe.`
    },
    {
      title: 'Built To Last',
      desc: 'Manufactured with high-strength materials ensuring high endurance against stacking pressure, drops, and rough logistics handling.'
    },
    {
      title: 'Perfect For Multiple Uses',
      desc: 'Suitable for business shipments, retail storage, factory logistics, and direct consumer delivery.'
    },
    {
      title: 'Professional Aesthetic Look',
      desc: 'Features a clean, sharp finish that elevates brand presentation and creates a memorable unboxing experience.'
    },
    {
      title: 'E-Commerce & Courier Ready',
      desc: 'Compliant with domestic courier handling guidelines, ensuring safe transit through road, rail, and air freight.'
    }
  ];
  if (parsedCustom.features.length > 0) {
    finalFeatures = parsedCustom.features;
  }

  // Merge FAQs: admin custom faqs > static faqs > default faqs
  let finalFaqs = staticEntry?.faqs || [
    {
      q: `What is the best use for ${title}?`,
      a: `It is optimized for ${categoryLabel}, secure transit, retail unboxing, and organized warehouse storage.`
    },
    {
      q: 'Can I print my custom company logo on it?',
      a: 'Yes, full custom branding, logo printing, barcodes, and custom colors are available.'
    },
    {
      q: 'What is the standard delivery timeline?',
      a: 'Standard orders dispatch within 24 to 48 hours, while custom printed orders take 3 to 5 business days.'
    }
  ];
  if (parsedCustom.faqs.length > 0) {
    finalFaqs = parsedCustom.faqs;
  }

  return {
    productName: title,
    subhead: `${title}:`,
    specs: finalSpecs,
    featureHeadline: `${title} (${dimensions.split('(')[0].trim()})`,
    features: finalFeatures,
    crossSell: staticEntry?.crossSell || {
      text: 'Need Corrugated Shipping Boxes? Check Out Our 3-Ply Shipping Boxes!',
      linkSlug: '3-ply-corrugated-shipping-boxes'
    },
    deepDescription: staticEntry?.deepDescription || {
      headline: `Product Description About ${title}`,
      sections: [
        {
          title: 'Types of Packaging Options',
          content: 'Available in standard dimensions, customized bulk orders, and custom printed finishes to meet specific brand requirements.'
        },
        {
          title: 'Eco-Friendly & Sustainable Features',
          content: 'Crafted using eco-conscious raw materials that support recyclable packaging standards.'
        }
      ]
    },
    faqs: finalFaqs,
    offers: staticEntry?.offers || [
      {
        code: 'WELCOME10',
        description: 'Get 10% OFF on your packaging order! Direct factory savings.',
        type: 'Percentage Discount'
      }
    ]
  };
}
