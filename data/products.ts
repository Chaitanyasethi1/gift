/**
 * AS PRINT GALLERY — Products Data Source
 * Auto-synced from Supabase products catalog
 * Total Products: 154
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
  name?: string;
  category: string;
  category_id?: string;
  categoryLabel: string;
  image: string;
  price: number;
  selling_price?: number;
  startingAt: number;
  mrp?: number;
  moq: number;
  badge?: string;
  badgeClass?: string;
  rating: number;
  reviews: number;
  specs: string[];
  dimensions?: string;
  desc: string;
  fullDesc?: string;
  images?: string[];
  variants?: any[];
  tiers: PriceTier[];
  bulk_pricing?: any[];
  price_tiers?: any[];
  flag_hot_deal?: boolean;
  flag_mega_sale?: boolean;
  flag_new_arrival?: boolean;
  flag_best_seller?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    "id": "ebcd3559-38e7-4a87-8488-a2db1e6d830f",
    "slug": "1-5-inch-round-star-thank-you-stickers-for-packaging",
    "title": "1.5 Inch Round Star Thank You Stickers for Packaging",
    "name": "1.5 Inch Round Star Thank You Stickers for Packaging",
    "category": "stickers-and-thank-you-cards",
    "category_id": "89d08a3b-d6e2-4b5a-97cc-67efb775debf",
    "categoryLabel": "Stickers & Thank You Cards",
    "image": "/assets/boxes/1-5-inch-round-star-thank-you-stickers-for-packaging_0.webp",
    "images": [
      "/assets/boxes/1-5-inch-round-star-thank-you-stickers-for-packaging_0.webp",
      "/assets/boxes/1-5-inch-round-star-thank-you-stickers-for-packaging_1.webp",
      "/assets/boxes/1-5-inch-round-star-thank-you-stickers-for-packaging_2.webp",
      "/assets/boxes/1-5-inch-round-star-thank-you-stickers-for-packaging_3.webp"
    ],
    "price": 141,
    "selling_price": 141,
    "startingAt": 141,
    "mrp": 280,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Add a professional touch to your packaging with 1.5 inch star thank you stickers. Strong adhesive, round design, ideal for eCommerce & small businesse",
    "fullDesc": "Add a professional touch to your packaging with 1.5 inch star thank you stickers. Strong adhesive, round design, ideal for eCommerce & small businesse",
    "tiers": [
      {
        "qty": 108,
        "rate": 141,
        "label": "Pack of 108 (₹141)"
      },
      {
        "qty": 540,
        "rate": 236,
        "label": "Pack of 540 (₹236)"
      },
      {
        "qty": 1080,
        "rate": 428,
        "label": "Pack of 1080 (₹428)"
      },
      {
        "qty": 2160,
        "rate": 808,
        "label": "Pack of 2160 (₹808)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 108,
        "rate": 1.31,
        "label": "Pack of 108 (₹141)"
      },
      {
        "qty": 540,
        "rate": 0.44,
        "label": "Pack of 540 (₹236)"
      },
      {
        "qty": 1080,
        "rate": 0.4,
        "label": "Pack of 1080 (₹428)"
      },
      {
        "qty": 2160,
        "rate": 0.37,
        "label": "Pack of 2160 (₹808)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "ca405f79-6078-4fe7-a39f-dac9062d3211",
    "slug": "elegant-orange-floral-thank-you-card-for-packaging-small-business-orders-3",
    "title": "AS Print Elegant Orange Floral Thank You Card for Packaging & Small Business Orders – 3 x 2 Inch",
    "name": "AS Print Elegant Orange Floral Thank You Card for Packaging & Small Business Orders – 3 x 2 Inch",
    "category": "stickers-and-thank-you-cards",
    "category_id": "89d08a3b-d6e2-4b5a-97cc-67efb775debf",
    "categoryLabel": "Stickers & Thank You Cards",
    "image": "/assets/boxes/elegant-orange-floral-thank-you-card-for-packaging-small-business-orders-3_0.webp",
    "images": [
      "/assets/boxes/elegant-orange-floral-thank-you-card-for-packaging-small-business-orders-3_0.webp",
      "/assets/boxes/elegant-orange-floral-thank-you-card-for-packaging-small-business-orders-3_1.webp",
      "/assets/boxes/elegant-orange-floral-thank-you-card-for-packaging-small-business-orders-3_2.webp",
      "/assets/boxes/elegant-orange-floral-thank-you-card-for-packaging-small-business-orders-3_3.webp"
    ],
    "price": 170,
    "selling_price": 170,
    "startingAt": 170,
    "mrp": 300,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Elegant floral thank you review card for packaging in premium design, size 3 x 2 inch. Perfect insert card to thank customers and encourage reviews fo",
    "fullDesc": "Elegant floral thank you review card for packaging in premium design, size 3 x 2 inch. Perfect insert card to thank customers and encourage reviews fo",
    "tiers": [
      {
        "qty": 108,
        "rate": 170,
        "label": "Pack of 108 (₹170)"
      },
      {
        "qty": 540,
        "rate": 427,
        "label": "Pack of 540 (₹427)"
      },
      {
        "qty": 1080,
        "rate": 808,
        "label": "Pack of 1080 (₹808)"
      },
      {
        "qty": 2160,
        "rate": 1524,
        "label": "Pack of 2160 (₹1,524)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 108,
        "rate": 1.57,
        "label": "Pack of 108 (₹170)"
      },
      {
        "qty": 540,
        "rate": 0.79,
        "label": "Pack of 540 (₹427)"
      },
      {
        "qty": 1080,
        "rate": 0.75,
        "label": "Pack of 1080 (₹808)"
      },
      {
        "qty": 2160,
        "rate": 0.71,
        "label": "Pack of 2160 (₹1,524)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "d6c73449-cd3f-45c1-b65d-3ed610b87b5b",
    "slug": "elegant-pink-floral-thank-you-card-for-packaging-small-business-orders-3-x",
    "title": "AS Print Elegant Pink Floral Thank You Card for Packaging & Small Business Orders – 3 x 2 Inch",
    "name": "AS Print Elegant Pink Floral Thank You Card for Packaging & Small Business Orders – 3 x 2 Inch",
    "category": "stickers-and-thank-you-cards",
    "category_id": "89d08a3b-d6e2-4b5a-97cc-67efb775debf",
    "categoryLabel": "Stickers & Thank You Cards",
    "image": "/assets/boxes/elegant-pink-floral-thank-you-card-for-packaging-small-business-orders-3-x_0.webp",
    "images": [
      "/assets/boxes/elegant-pink-floral-thank-you-card-for-packaging-small-business-orders-3-x_0.webp",
      "/assets/boxes/elegant-pink-floral-thank-you-card-for-packaging-small-business-orders-3-x_1.webp",
      "/assets/boxes/elegant-pink-floral-thank-you-card-for-packaging-small-business-orders-3-x_2.webp",
      "/assets/boxes/elegant-pink-floral-thank-you-card-for-packaging-small-business-orders-3-x_3.webp"
    ],
    "price": 170,
    "selling_price": 170,
    "startingAt": 170,
    "mrp": 299,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Elegant pink floral thank you card for packaging in premium pastel design, size 3 x 2 inch. Perfect insert card for eCommerce orders, gift boxes, and",
    "fullDesc": "Elegant pink floral thank you card for packaging in premium pastel design, size 3 x 2 inch. Perfect insert card for eCommerce orders, gift boxes, and",
    "tiers": [
      {
        "qty": 108,
        "rate": 170,
        "label": "Pack of 108 (₹170)"
      },
      {
        "qty": 540,
        "rate": 427,
        "label": "Pack of 540 (₹427)"
      },
      {
        "qty": 1080,
        "rate": 808,
        "label": "Pack of 1080 (₹808)"
      },
      {
        "qty": 2160,
        "rate": 1524,
        "label": "Pack of 2160 (₹1,524)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 108,
        "rate": 1.57,
        "label": "Pack of 108 (₹170)"
      },
      {
        "qty": 540,
        "rate": 0.79,
        "label": "Pack of 540 (₹427)"
      },
      {
        "qty": 1080,
        "rate": 0.75,
        "label": "Pack of 1080 (₹808)"
      },
      {
        "qty": 2160,
        "rate": 0.71,
        "label": "Pack of 2160 (₹1,524)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "12296840-e23e-400d-b06b-b2830211dc7a",
    "slug": "elegant-green-floral-thank-you-card-for-packaging-small-business-orders-3-x",
    "title": "AS Print Elegant Green Floral Thank You Card for Packaging & Small Business Orders – 3 x 2 Inch",
    "name": "AS Print Elegant Green Floral Thank You Card for Packaging & Small Business Orders – 3 x 2 Inch",
    "category": "stickers-and-thank-you-cards",
    "category_id": "89d08a3b-d6e2-4b5a-97cc-67efb775debf",
    "categoryLabel": "Stickers & Thank You Cards",
    "image": "/assets/boxes/elegant-green-floral-thank-you-card-for-packaging-small-business-orders-3-x_0.webp",
    "images": [
      "/assets/boxes/elegant-green-floral-thank-you-card-for-packaging-small-business-orders-3-x_0.webp",
      "/assets/boxes/elegant-green-floral-thank-you-card-for-packaging-small-business-orders-3-x_1.webp",
      "/assets/boxes/elegant-green-floral-thank-you-card-for-packaging-small-business-orders-3-x_2.webp",
      "/assets/boxes/elegant-green-floral-thank-you-card-for-packaging-small-business-orders-3-x_3.webp"
    ],
    "price": 170,
    "selling_price": 170,
    "startingAt": 170,
    "mrp": 300,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Elegant floral thank you card for packaging in green pastel design, size 3 x 2 inch. Perfect premium insert for eCommerce orders, gift boxes, and bran",
    "fullDesc": "Elegant floral thank you card for packaging in green pastel design, size 3 x 2 inch. Perfect premium insert for eCommerce orders, gift boxes, and bran",
    "tiers": [
      {
        "qty": 108,
        "rate": 170,
        "label": "Pack of 108 (₹170)"
      },
      {
        "qty": 540,
        "rate": 427,
        "label": "Pack of 540 (₹427)"
      },
      {
        "qty": 1080,
        "rate": 808,
        "label": "Pack of 1080 (₹808)"
      },
      {
        "qty": 2160,
        "rate": 1524,
        "label": "Pack of 2160 (₹1,524)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 108,
        "rate": 1.57,
        "label": "Pack of 108 (₹170)"
      },
      {
        "qty": 540,
        "rate": 0.79,
        "label": "Pack of 540 (₹427)"
      },
      {
        "qty": 1080,
        "rate": 0.75,
        "label": "Pack of 1080 (₹808)"
      },
      {
        "qty": 2160,
        "rate": 0.71,
        "label": "Pack of 2160 (₹1,524)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "e7597d2b-aded-4322-a2a6-7b872d637254",
    "slug": "peach-floral-thank-you-stickers-for-packaging-2-inch-round-order-stickers",
    "title": "AS Print Peach Floral Thank You Stickers for Packaging – 2 Inch Round Order Stickers",
    "name": "AS Print Peach Floral Thank You Stickers for Packaging – 2 Inch Round Order Stickers",
    "category": "stickers-and-thank-you-cards",
    "category_id": "89d08a3b-d6e2-4b5a-97cc-67efb775debf",
    "categoryLabel": "Stickers & Thank You Cards",
    "image": "/assets/boxes/peach-floral-thank-you-stickers-for-packaging-2-inch-round-order-stickers_0.webp",
    "images": [
      "/assets/boxes/peach-floral-thank-you-stickers-for-packaging-2-inch-round-order-stickers_0.webp",
      "/assets/boxes/peach-floral-thank-you-stickers-for-packaging-2-inch-round-order-stickers_1.webp",
      "/assets/boxes/peach-floral-thank-you-stickers-for-packaging-2-inch-round-order-stickers_2.webp",
      "/assets/boxes/peach-floral-thank-you-stickers-for-packaging-2-inch-round-order-stickers_3.webp"
    ],
    "price": 162,
    "selling_price": 162,
    "startingAt": 162,
    "mrp": 320,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Add a warm touch to your packaging with peach floral thank you stickers. 2 inch round, strong adhesive, perfect for small business & eCommerce order",
    "fullDesc": "Add a warm touch to your packaging with peach floral thank you stickers. 2 inch round, strong adhesive, perfect for small business & eCommerce order",
    "tiers": [
      {
        "qty": 108,
        "rate": 162,
        "label": "Pack of 108 (₹162)"
      },
      {
        "qty": 540,
        "rate": 371,
        "label": "Pack of 540 (₹371)"
      },
      {
        "qty": 1080,
        "rate": 712,
        "label": "Pack of 1080 (₹712)"
      },
      {
        "qty": 2160,
        "rate": 1379,
        "label": "Pack of 2160 (₹1,379)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 108,
        "rate": 1.5,
        "label": "Pack of 108 (₹162)"
      },
      {
        "qty": 540,
        "rate": 0.69,
        "label": "Pack of 540 (₹371)"
      },
      {
        "qty": 1080,
        "rate": 0.66,
        "label": "Pack of 1080 (₹712)"
      },
      {
        "qty": 2160,
        "rate": 0.64,
        "label": "Pack of 2160 (₹1,379)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": true,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "6a618fb5-7fee-45f7-a3c5-a321213dd229",
    "slug": "1-5-inch-peach-floral-thank-you-stickers-for-order-packaging",
    "title": "1.5 Inch Peach Floral Thank You Stickers for Order Packaging",
    "name": "1.5 Inch Peach Floral Thank You Stickers for Order Packaging",
    "category": "stickers-and-thank-you-cards",
    "category_id": "89d08a3b-d6e2-4b5a-97cc-67efb775debf",
    "categoryLabel": "Stickers & Thank You Cards",
    "image": "/assets/boxes/1-5-inch-peach-floral-thank-you-stickers-for-order-packaging_0.webp",
    "images": [
      "/assets/boxes/1-5-inch-peach-floral-thank-you-stickers-for-order-packaging_0.webp",
      "/assets/boxes/1-5-inch-peach-floral-thank-you-stickers-for-order-packaging_1.webp",
      "/assets/boxes/1-5-inch-peach-floral-thank-you-stickers-for-order-packaging_2.webp",
      "/assets/boxes/1-5-inch-peach-floral-thank-you-stickers-for-order-packaging_3.webp"
    ],
    "price": 141,
    "selling_price": 141,
    "startingAt": 141,
    "mrp": 280,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Add a warm touch to your packaging with peach floral thank you stickers. 1.5 inch round, strong adhesive, perfect for small business & eCommerce order",
    "fullDesc": "Add a warm touch to your packaging with peach floral thank you stickers. 1.5 inch round, strong adhesive, perfect for small business & eCommerce order",
    "tiers": [
      {
        "qty": 108,
        "rate": 141,
        "label": "Pack of 108 (₹141)"
      },
      {
        "qty": 540,
        "rate": 236,
        "label": "Pack of 540 (₹236)"
      },
      {
        "qty": 1080,
        "rate": 428,
        "label": "Pack of 1080 (₹428)"
      },
      {
        "qty": 2160,
        "rate": 808,
        "label": "Pack of 2160 (₹808)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 108,
        "rate": 1.31,
        "label": "Pack of 108 (₹141)"
      },
      {
        "qty": 540,
        "rate": 0.44,
        "label": "Pack of 540 (₹236)"
      },
      {
        "qty": 1080,
        "rate": 0.4,
        "label": "Pack of 1080 (₹428)"
      },
      {
        "qty": 2160,
        "rate": 0.37,
        "label": "Pack of 2160 (₹808)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "e7985627-a279-4113-b90d-93da3a390435",
    "slug": "2-inch-round-star-thank-you-stickers-for-packaging-and-orders",
    "title": "2 Inch Round Star Thank You Stickers for Packaging and Orders",
    "name": "2 Inch Round Star Thank You Stickers for Packaging and Orders",
    "category": "stickers-and-thank-you-cards",
    "category_id": "89d08a3b-d6e2-4b5a-97cc-67efb775debf",
    "categoryLabel": "Stickers & Thank You Cards",
    "image": "/assets/boxes/2-inch-round-star-thank-you-stickers-for-packaging-and-orders_0.webp",
    "images": [
      "/assets/boxes/2-inch-round-star-thank-you-stickers-for-packaging-and-orders_0.webp",
      "/assets/boxes/2-inch-round-star-thank-you-stickers-for-packaging-and-orders_1.webp",
      "/assets/boxes/2-inch-round-star-thank-you-stickers-for-packaging-and-orders_2.webp",
      "/assets/boxes/2-inch-round-star-thank-you-stickers-for-packaging-and-orders_3.webp"
    ],
    "price": 162,
    "selling_price": 162,
    "startingAt": 162,
    "mrp": 320,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Add a professional touch to your packaging with 2 inch star thank you stickers. Strong adhesive, round design, ideal for eCommerce & small businesses",
    "fullDesc": "Add a professional touch to your packaging with 2 inch star thank you stickers. Strong adhesive, round design, ideal for eCommerce & small businesses",
    "tiers": [
      {
        "qty": 108,
        "rate": 162,
        "label": "Pack of 108 (₹162)"
      },
      {
        "qty": 540,
        "rate": 371,
        "label": "Pack of 540 (₹371)"
      },
      {
        "qty": 1080,
        "rate": 712,
        "label": "Pack of 1080 (₹712)"
      },
      {
        "qty": 2160,
        "rate": 1379,
        "label": "Pack of 2160 (₹1,379)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 108,
        "rate": 1.5,
        "label": "Pack of 108 (₹162)"
      },
      {
        "qty": 540,
        "rate": 0.69,
        "label": "Pack of 540 (₹371)"
      },
      {
        "qty": 1080,
        "rate": 0.66,
        "label": "Pack of 1080 (₹712)"
      },
      {
        "qty": 2160,
        "rate": 0.64,
        "label": "Pack of 2160 (₹1,379)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": true,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "365538dd-a26e-48c8-9825-1bfb5b825879",
    "slug": "pink-1-5-inch-thank-you-stickers-for-packaging-round-stickers",
    "title": "AS Print Pink 1.5 Inch Thank You Stickers for Packaging – Round Stickers",
    "name": "AS Print Pink 1.5 Inch Thank You Stickers for Packaging – Round Stickers",
    "category": "stickers-and-thank-you-cards",
    "category_id": "89d08a3b-d6e2-4b5a-97cc-67efb775debf",
    "categoryLabel": "Stickers & Thank You Cards",
    "image": "/assets/boxes/pink-1-5-inch-thank-you-stickers-for-packaging-round-stickers_0.webp",
    "images": [
      "/assets/boxes/pink-1-5-inch-thank-you-stickers-for-packaging-round-stickers_0.webp",
      "/assets/boxes/pink-1-5-inch-thank-you-stickers-for-packaging-round-stickers_1.webp",
      "/assets/boxes/pink-1-5-inch-thank-you-stickers-for-packaging-round-stickers_2.webp",
      "/assets/boxes/pink-1-5-inch-thank-you-stickers-for-packaging-round-stickers_3.webp"
    ],
    "price": 141,
    "selling_price": 141,
    "startingAt": 141,
    "mrp": 280,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Premium 1.5 inch round pink thank you stickers for packaging with strong adhesive and glossy finish. Ideal for eCommerce, gifting, and small business",
    "fullDesc": "Premium 1.5 inch round pink thank you stickers for packaging with strong adhesive and glossy finish. Ideal for eCommerce, gifting, and small business",
    "tiers": [
      {
        "qty": 108,
        "rate": 141,
        "label": "Pack of 108 (₹141)"
      },
      {
        "qty": 540,
        "rate": 236,
        "label": "Pack of 540 (₹236)"
      },
      {
        "qty": 1080,
        "rate": 428,
        "label": "Pack of 1080 (₹428)"
      },
      {
        "qty": 2160,
        "rate": 808,
        "label": "Pack of 2160 (₹808)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 108,
        "rate": 1.31,
        "label": "Pack of 108 (₹141)"
      },
      {
        "qty": 540,
        "rate": 0.44,
        "label": "Pack of 540 (₹236)"
      },
      {
        "qty": 1080,
        "rate": 0.4,
        "label": "Pack of 1080 (₹428)"
      },
      {
        "qty": 2160,
        "rate": 0.37,
        "label": "Pack of 2160 (₹808)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "ad919d02-184e-446d-83ab-732d0ceef1c7",
    "slug": "pink-2-inch-thank-you-stickers-for-packaging-round-stickers",
    "title": "AS Print Pink 2 Inch Thank You Stickers for Packaging – Round Stickers",
    "name": "AS Print Pink 2 Inch Thank You Stickers for Packaging – Round Stickers",
    "category": "stickers-and-thank-you-cards",
    "category_id": "89d08a3b-d6e2-4b5a-97cc-67efb775debf",
    "categoryLabel": "Stickers & Thank You Cards",
    "image": "/assets/boxes/pink-2-inch-thank-you-stickers-for-packaging-round-stickers_0.webp",
    "images": [
      "/assets/boxes/pink-2-inch-thank-you-stickers-for-packaging-round-stickers_0.webp",
      "/assets/boxes/pink-2-inch-thank-you-stickers-for-packaging-round-stickers_1.webp",
      "/assets/boxes/pink-2-inch-thank-you-stickers-for-packaging-round-stickers_2.webp",
      "/assets/boxes/pink-2-inch-thank-you-stickers-for-packaging-round-stickers_3.webp"
    ],
    "price": 162,
    "selling_price": 162,
    "startingAt": 162,
    "mrp": 320,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Premium 2 inch round thank you stickers for packaging with strong adhesive and glossy finish. Ideal for eCommerce, gifting, and small business brandin",
    "fullDesc": "Premium 2 inch round thank you stickers for packaging with strong adhesive and glossy finish. Ideal for eCommerce, gifting, and small business brandin",
    "tiers": [
      {
        "qty": 108,
        "rate": 162,
        "label": "Pack of 108 (₹162)"
      },
      {
        "qty": 540,
        "rate": 371,
        "label": "Pack of 540 (₹371)"
      },
      {
        "qty": 1080,
        "rate": 712,
        "label": "Pack of 1080 (₹712)"
      },
      {
        "qty": 2160,
        "rate": 1379,
        "label": "Pack of 2160 (₹1,379)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 108,
        "rate": 1.5,
        "label": "Pack of 108 (₹162)"
      },
      {
        "qty": 540,
        "rate": 0.69,
        "label": "Pack of 540 (₹371)"
      },
      {
        "qty": 1080,
        "rate": 0.66,
        "label": "Pack of 1080 (₹712)"
      },
      {
        "qty": 2160,
        "rate": 0.64,
        "label": "Pack of 2160 (₹1,379)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "cbce5e01-2a19-4ec9-bb2f-a5318fdb8639",
    "slug": "2-inch-black-round-thank-you-stickers-for-packaging-and-orders",
    "title": "2 Inch Black Round Thank You Stickers for Packaging and Orders",
    "name": "2 Inch Black Round Thank You Stickers for Packaging and Orders",
    "category": "stickers-and-thank-you-cards",
    "category_id": "89d08a3b-d6e2-4b5a-97cc-67efb775debf",
    "categoryLabel": "Stickers & Thank You Cards",
    "image": "/assets/boxes/2-inch-black-round-thank-you-stickers-for-packaging-and-orders_0.webp",
    "images": [
      "/assets/boxes/2-inch-black-round-thank-you-stickers-for-packaging-and-orders_0.webp",
      "/assets/boxes/2-inch-black-round-thank-you-stickers-for-packaging-and-orders_1.webp",
      "/assets/boxes/2-inch-black-round-thank-you-stickers-for-packaging-and-orders_2.webp",
      "/assets/boxes/2-inch-black-round-thank-you-stickers-for-packaging-and-orders_3.webp"
    ],
    "price": 162,
    "selling_price": 162,
    "startingAt": 162,
    "mrp": 320,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Premium 2 inch round thank you stickers for packaging with strong adhesive. Ideal for eCommerce, gifting,",
    "fullDesc": "Premium 2 inch round thank you stickers for packaging with strong adhesive. Ideal for eCommerce, gifting,",
    "tiers": [
      {
        "qty": 108,
        "rate": 162,
        "label": "Pack of 108 (₹162)"
      },
      {
        "qty": 540,
        "rate": 371,
        "label": "Pack of 540 (₹371)"
      },
      {
        "qty": 1080,
        "rate": 712,
        "label": "Pack of 1080 (₹712)"
      },
      {
        "qty": 2160,
        "rate": 1379,
        "label": "Pack of 2160 (₹1,379)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 108,
        "rate": 1.5,
        "label": "Pack of 108 (₹162)"
      },
      {
        "qty": 540,
        "rate": 0.69,
        "label": "Pack of 540 (₹371)"
      },
      {
        "qty": 1080,
        "rate": 0.66,
        "label": "Pack of 1080 (₹712)"
      },
      {
        "qty": 2160,
        "rate": 0.64,
        "label": "Pack of 2160 (₹1,379)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "2fd39bfa-8ce2-4c29-8cbd-83d9ed46be97",
    "slug": "black-1-5-inch-thank-you-stickers-for-packaging-round-stickers",
    "title": "AS Print Black 1.5 Inch Thank You Stickers for Packaging – Round Stickers",
    "name": "AS Print Black 1.5 Inch Thank You Stickers for Packaging – Round Stickers",
    "category": "stickers-and-thank-you-cards",
    "category_id": "89d08a3b-d6e2-4b5a-97cc-67efb775debf",
    "categoryLabel": "Stickers & Thank You Cards",
    "image": "/assets/boxes/black-1-5-inch-thank-you-stickers-for-packaging-round-stickers_0.webp",
    "images": [
      "/assets/boxes/black-1-5-inch-thank-you-stickers-for-packaging-round-stickers_0.webp",
      "/assets/boxes/black-1-5-inch-thank-you-stickers-for-packaging-round-stickers_1.webp",
      "/assets/boxes/black-1-5-inch-thank-you-stickers-for-packaging-round-stickers_2.webp",
      "/assets/boxes/black-1-5-inch-thank-you-stickers-for-packaging-round-stickers_3.webp"
    ],
    "price": 141,
    "selling_price": 141,
    "startingAt": 141,
    "mrp": 280,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Premium thank you stickers for packaging with strong adhesive. 1.5 inch round design ideal for eCommerce, gifting & small business branding by Box Bro",
    "fullDesc": "Premium thank you stickers for packaging with strong adhesive. 1.5 inch round design ideal for eCommerce, gifting & small business branding by Box Bro",
    "tiers": [
      {
        "qty": 108,
        "rate": 141,
        "label": "Pack of 108 (₹141)"
      },
      {
        "qty": 540,
        "rate": 236,
        "label": "Pack of 540 (₹236)"
      },
      {
        "qty": 1080,
        "rate": 428,
        "label": "Pack of 1080 (₹428)"
      },
      {
        "qty": 2160,
        "rate": 808,
        "label": "Pack of 2160 (₹808)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 108,
        "rate": 1.31,
        "label": "Pack of 108 (₹141)"
      },
      {
        "qty": 540,
        "rate": 0.44,
        "label": "Pack of 540 (₹236)"
      },
      {
        "qty": 1080,
        "rate": 0.4,
        "label": "Pack of 1080 (₹428)"
      },
      {
        "qty": 2160,
        "rate": 0.37,
        "label": "Pack of 2160 (₹808)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "0db63c9c-f179-49ca-844b-1b0a951e2e9b",
    "slug": "floral-2-inch-thank-you-stickers-for-packaging-round-stickers",
    "title": "AS Print Floral 2 Inch Thank You Stickers for Packaging – Round Stickers",
    "name": "AS Print Floral 2 Inch Thank You Stickers for Packaging – Round Stickers",
    "category": "stickers-and-thank-you-cards",
    "category_id": "89d08a3b-d6e2-4b5a-97cc-67efb775debf",
    "categoryLabel": "Stickers & Thank You Cards",
    "image": "/assets/boxes/floral-2-inch-thank-you-stickers-for-packaging-round-stickers_0.webp",
    "images": [
      "/assets/boxes/floral-2-inch-thank-you-stickers-for-packaging-round-stickers_0.webp",
      "/assets/boxes/floral-2-inch-thank-you-stickers-for-packaging-round-stickers_1.webp",
      "/assets/boxes/floral-2-inch-thank-you-stickers-for-packaging-round-stickers_2.webp",
      "/assets/boxes/floral-2-inch-thank-you-stickers-for-packaging-round-stickers_3.webp"
    ],
    "price": 162,
    "selling_price": 162,
    "startingAt": 162,
    "mrp": 261,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "AS Print Thank You Stickers for Packaging – 2 Inch Round Floral Stickers (Pack of 108)",
    "fullDesc": "AS Print Thank You Stickers for Packaging – 2 Inch Round Floral Stickers (Pack of 108)",
    "tiers": [
      {
        "qty": 108,
        "rate": 162,
        "label": "Pack of 108 (₹162)"
      },
      {
        "qty": 540,
        "rate": 371,
        "label": "Pack of 540 (₹371)"
      },
      {
        "qty": 1080,
        "rate": 712,
        "label": "Pack of 1080 (₹712)"
      },
      {
        "qty": 2160,
        "rate": 1379,
        "label": "Pack of 2160 (₹1,379)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 108,
        "rate": 1.5,
        "label": "Pack of 108 (₹162)"
      },
      {
        "qty": 540,
        "rate": 0.69,
        "label": "Pack of 540 (₹371)"
      },
      {
        "qty": 1080,
        "rate": 0.66,
        "label": "Pack of 1080 (₹712)"
      },
      {
        "qty": 2160,
        "rate": 0.64,
        "label": "Pack of 2160 (₹1,379)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "bdb92b62-7281-4dca-8217-ec87fec749a6",
    "slug": "1-5-inch-floral-round-thank-you-stickers-for-order-packaging",
    "title": "1.5 Inch Floral Round Thank You Stickers for Order Packaging",
    "name": "1.5 Inch Floral Round Thank You Stickers for Order Packaging",
    "category": "stickers-and-thank-you-cards",
    "category_id": "89d08a3b-d6e2-4b5a-97cc-67efb775debf",
    "categoryLabel": "Stickers & Thank You Cards",
    "image": "/assets/boxes/1-5-inch-floral-round-thank-you-stickers-for-order-packaging_0.webp",
    "images": [
      "/assets/boxes/1-5-inch-floral-round-thank-you-stickers-for-order-packaging_0.webp",
      "/assets/boxes/1-5-inch-floral-round-thank-you-stickers-for-order-packaging_1.webp",
      "/assets/boxes/1-5-inch-floral-round-thank-you-stickers-for-order-packaging_2.webp",
      "/assets/boxes/1-5-inch-floral-round-thank-you-stickers-for-order-packaging_3.webp"
    ],
    "price": 141,
    "selling_price": 141,
    "startingAt": 141,
    "mrp": 280,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy floral thank you stickers for packaging. 1.5-inch round glossy stickers with strong adhesive, pack of 108.",
    "fullDesc": "Buy floral thank you stickers for packaging. 1.5-inch round glossy stickers with strong adhesive, pack of 108.",
    "tiers": [
      {
        "qty": 108,
        "rate": 141,
        "label": "Pack of 108 (₹141)"
      },
      {
        "qty": 540,
        "rate": 236,
        "label": "Pack of 540 (₹236)"
      },
      {
        "qty": 1080,
        "rate": 428,
        "label": "Pack of 1080 (₹428)"
      },
      {
        "qty": 2160,
        "rate": 808,
        "label": "Pack of 2160 (₹808)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 108,
        "rate": 1.31,
        "label": "Pack of 108 (₹141)"
      },
      {
        "qty": 540,
        "rate": 0.44,
        "label": "Pack of 540 (₹236)"
      },
      {
        "qty": 1080,
        "rate": 0.4,
        "label": "Pack of 1080 (₹428)"
      },
      {
        "qty": 2160,
        "rate": 0.37,
        "label": "Pack of 2160 (₹808)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "185c8759-3ea3-4bf0-bc06-eb2304b05ee3",
    "slug": "4-4x1-5-inch-black-matte-3-ply-mailer-box-for-jewellery-gifts-cosmetics-pac",
    "title": "4×4x1.5 Inch Black Matte 3 Ply Mailer Box for Jewellery, Gifts & Cosmetics – Pack of 50",
    "name": "4×4x1.5 Inch Black Matte 3 Ply Mailer Box for Jewellery, Gifts & Cosmetics – Pack of 50",
    "category": "multicolor-gift-box",
    "category_id": "1eaba4c9-f17d-4784-b788-c194adf6470d",
    "categoryLabel": "Multicolor Gift Boxes & Hamper Boxes",
    "image": "/assets/boxes/4-4x1-5-inch-black-matte-3-ply-mailer-box-for-jewellery-gifts-cosmetics-pac_0.webp",
    "images": [
      "/assets/boxes/4-4x1-5-inch-black-matte-3-ply-mailer-box-for-jewellery-gifts-cosmetics-pac_0.webp",
      "/assets/boxes/4-4x1-5-inch-black-matte-3-ply-mailer-box-for-jewellery-gifts-cosmetics-pac_1.webp",
      "/assets/boxes/4-4x1-5-inch-black-matte-3-ply-mailer-box-for-jewellery-gifts-cosmetics-pac_2.webp"
    ],
    "price": 236,
    "selling_price": 236,
    "startingAt": 236,
    "mrp": 600,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print Gallery 4x4x1.5 inch black matte 3 ply mailer boxes in a pack of 50. Self-locking boxes for jewellery, cosmetics, gifts and small items.",
    "fullDesc": "Buy AS Print Gallery 4x4x1.5 inch black matte 3 ply mailer boxes in a pack of 50. Self-locking boxes for jewellery, cosmetics, gifts and small items.",
    "tiers": [
      {
        "qty": 25,
        "rate": 236,
        "label": "Pack of 25 (₹236)"
      },
      {
        "qty": 50,
        "rate": 457,
        "label": "Pack of 50 (₹457)"
      },
      {
        "qty": 500,
        "rate": 4190,
        "label": "Pack of 500 (₹4,190)"
      },
      {
        "qty": 1000,
        "rate": 8762,
        "label": "Pack of 1000 (₹8,762)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "9788b1da-2d88-4de9-a15b-cdf7028093c1",
    "slug": "4x4x1-5-inch-orange-matte-mailer-box-for-jewellery-gifts-and-cosmetics-pack",
    "title": "4X4X1.5 Inch Orange Matte Mailer Box for Jewellery, Gifts and Cosmetics – Pack of 50",
    "name": "4X4X1.5 Inch Orange Matte Mailer Box for Jewellery, Gifts and Cosmetics – Pack of 50",
    "category": "multicolor-gift-box",
    "category_id": "1eaba4c9-f17d-4784-b788-c194adf6470d",
    "categoryLabel": "Multicolor Gift Boxes & Hamper Boxes",
    "image": "/assets/boxes/4x4x1-5-inch-orange-matte-mailer-box-for-jewellery-gifts-and-cosmetics-pack_0.webp",
    "images": [
      "/assets/boxes/4x4x1-5-inch-orange-matte-mailer-box-for-jewellery-gifts-and-cosmetics-pack_0.webp",
      "/assets/boxes/4x4x1-5-inch-orange-matte-mailer-box-for-jewellery-gifts-and-cosmetics-pack_1.webp",
      "/assets/boxes/4x4x1-5-inch-orange-matte-mailer-box-for-jewellery-gifts-and-cosmetics-pack_2.webp"
    ],
    "price": 236,
    "selling_price": 236,
    "startingAt": 236,
    "mrp": 600,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print Gallery 4x4x1.5 inch orange matte 3 ply mailer boxes in a pack of 50. Suitable for jewellery, cosmetics, gifts and other small products.",
    "fullDesc": "Buy AS Print Gallery 4x4x1.5 inch orange matte 3 ply mailer boxes in a pack of 50. Suitable for jewellery, cosmetics, gifts and other small products.",
    "tiers": [
      {
        "qty": 25,
        "rate": 236,
        "label": "Pack of 25 (₹236)"
      },
      {
        "qty": 50,
        "rate": 457,
        "label": "Pack of 50 (₹457)"
      },
      {
        "qty": 500,
        "rate": 4190,
        "label": "Pack of 500 (₹4,190)"
      },
      {
        "qty": 1000,
        "rate": 8762,
        "label": "Pack of 1000 (₹8,762)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "5a969647-e7ff-49c1-b9ea-b242c8fb718c",
    "slug": "3-ply-multicolor-corrugated-mug-gift-box-5x3-5x4-inch",
    "title": "3 Ply Multicolor Corrugated Mug Gift Box 5x3.5x4 Inch",
    "name": "3 Ply Multicolor Corrugated Mug Gift Box 5x3.5x4 Inch",
    "category": "multicolor-gift-box",
    "category_id": "1eaba4c9-f17d-4784-b788-c194adf6470d",
    "categoryLabel": "Multicolor Gift Boxes & Hamper Boxes",
    "image": "/assets/boxes/3-ply-multicolor-corrugated-mug-gift-box-5x3-5x4-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-multicolor-corrugated-mug-gift-box-5x3-5x4-inch_0.webp",
      "/assets/boxes/3-ply-multicolor-corrugated-mug-gift-box-5x3-5x4-inch_1.webp",
      "/assets/boxes/3-ply-multicolor-corrugated-mug-gift-box-5x3-5x4-inch_2.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 560,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium printed mug box and gift box packaging. Perfect for coffee mugs, return gifts, chocolates, and festive gifting. Durable, attractive & eco-",
    "fullDesc": "Buy premium printed mug box and gift box packaging. Perfect for coffee mugs, return gifts, chocolates, and festive gifting. Durable, attractive & eco-",
    "tiers": [
      {
        "qty": 25,
        "rate": 284,
        "label": "Pack of 25 (₹284)"
      },
      {
        "qty": 50,
        "rate": 503,
        "label": "Pack of 50 (₹503)"
      },
      {
        "qty": 100,
        "rate": 950,
        "label": "Pack of 100 (₹950)"
      },
      {
        "qty": 500,
        "rate": 4571,
        "label": "Pack of 500 (₹4,571)"
      },
      {
        "qty": 1000,
        "rate": 8999,
        "label": "Pack of 1000 (₹8,999)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 25,
        "rate": 11.35,
        "label": "Pack of 25 (₹284)"
      },
      {
        "qty": 50,
        "rate": 10.06,
        "label": "Pack of 50 (₹503)"
      },
      {
        "qty": 100,
        "rate": 9.5,
        "label": "Pack of 100 (₹950)"
      },
      {
        "qty": 500,
        "rate": 9.14,
        "label": "Pack of 500 (₹4,571)"
      },
      {
        "qty": 1000,
        "rate": 9,
        "label": "Pack of 1000 (₹8,999)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "9d944d13-ddc9-4feb-80cd-d4a835345b7f",
    "slug": "multipurpose-multi-design-gift-boxes-with-ribbon-3x3x4-25-inch-premium-prin",
    "title": "Multipurpose Multi Design Gift Boxes with Ribbon (3x3x4.25 Inch) – Premium Printed Gift Packaging Boxes",
    "name": "Multipurpose Multi Design Gift Boxes with Ribbon (3x3x4.25 Inch) – Premium Printed Gift Packaging Boxes",
    "category": "multicolor-gift-box",
    "category_id": "1eaba4c9-f17d-4784-b788-c194adf6470d",
    "categoryLabel": "Multicolor Gift Boxes & Hamper Boxes",
    "image": "/assets/boxes/multipurpose-multi-design-gift-boxes-with-ribbon-3x3x4-25-inch-premium-prin_0.webp",
    "images": [
      "/assets/boxes/multipurpose-multi-design-gift-boxes-with-ribbon-3x3x4-25-inch-premium-prin_0.webp",
      "/assets/boxes/multipurpose-multi-design-gift-boxes-with-ribbon-3x3x4-25-inch-premium-prin_1.webp",
      "/assets/boxes/multipurpose-multi-design-gift-boxes-with-ribbon-3x3x4-25-inch-premium-prin_2.webp"
    ],
    "price": 267,
    "selling_price": 267,
    "startingAt": 267,
    "mrp": 550,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy multi design gift boxes with ribbon (3x3x4.25 inch) featuring premium prints and elegant patterns. Perfect for return gifts, jewelry, and small ha",
    "fullDesc": "Buy multi design gift boxes with ribbon (3x3x4.25 inch) featuring premium prints and elegant patterns. Perfect for return gifts, jewelry, and small ha",
    "tiers": [
      {
        "qty": 12,
        "rate": 267,
        "label": "Pack of 12 (₹267)"
      },
      {
        "qty": 24,
        "rate": 427,
        "label": "Pack of 24 (₹427)"
      },
      {
        "qty": 48,
        "rate": 824,
        "label": "Pack of 48 (₹824)"
      },
      {
        "qty": 96,
        "rate": 1550,
        "label": "Pack of 96 (₹1,550)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 12,
        "rate": 22.22,
        "label": "Pack of 12 (₹267)"
      },
      {
        "qty": 24,
        "rate": 17.78,
        "label": "Pack of 24 (₹427)"
      },
      {
        "qty": 48,
        "rate": 17.17,
        "label": "Pack of 48 (₹824)"
      },
      {
        "qty": 96,
        "rate": 16.15,
        "label": "Pack of 96 (₹1,550)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "fb19bd1e-69ca-4974-a407-14e781568e5c",
    "slug": "multipurpose-geometric-heart-gift-box-with-ribbon-3x3x4-25-inch-premium-whi",
    "title": "Multipurpose Geometric Heart Gift Box with Ribbon (3x3x4.25 Inch) – Premium White & Gold Printed Gift Packaging Box",
    "name": "Multipurpose Geometric Heart Gift Box with Ribbon (3x3x4.25 Inch) – Premium White & Gold Printed Gift Packaging Box",
    "category": "multicolor-gift-box",
    "category_id": "1eaba4c9-f17d-4784-b788-c194adf6470d",
    "categoryLabel": "Multicolor Gift Boxes & Hamper Boxes",
    "image": "/assets/boxes/multipurpose-geometric-heart-gift-box-with-ribbon-3x3x4-25-inch-premium-whi_0.webp",
    "images": [
      "/assets/boxes/multipurpose-geometric-heart-gift-box-with-ribbon-3x3x4-25-inch-premium-whi_0.webp",
      "/assets/boxes/multipurpose-geometric-heart-gift-box-with-ribbon-3x3x4-25-inch-premium-whi_1.webp",
      "/assets/boxes/multipurpose-geometric-heart-gift-box-with-ribbon-3x3x4-25-inch-premium-whi_2.webp"
    ],
    "price": 267,
    "selling_price": 267,
    "startingAt": 267,
    "mrp": 500,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium geometric heart gift box with ribbon (3x3x4.25 inch). Perfect for jewelry, chocolates & return gifts. Elegant, durable & ready-to-use pack",
    "fullDesc": "Buy premium geometric heart gift box with ribbon (3x3x4.25 inch). Perfect for jewelry, chocolates & return gifts. Elegant, durable & ready-to-use pack",
    "tiers": [
      {
        "qty": 12,
        "rate": 267,
        "label": "Pack of 12 (₹267)"
      },
      {
        "qty": 24,
        "rate": 427,
        "label": "Pack of 24 (₹427)"
      },
      {
        "qty": 48,
        "rate": 824,
        "label": "Pack of 48 (₹824)"
      },
      {
        "qty": 96,
        "rate": 1550,
        "label": "Pack of 96 (₹1,550)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 12,
        "rate": 22.22,
        "label": "Pack of 12 (₹267)"
      },
      {
        "qty": 24,
        "rate": 17.78,
        "label": "Pack of 24 (₹427)"
      },
      {
        "qty": 48,
        "rate": 17.17,
        "label": "Pack of 48 (₹824)"
      },
      {
        "qty": 96,
        "rate": 16.15,
        "label": "Pack of 96 (₹1,550)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "af56c6fd-0b46-4ab2-842a-33eceab6031e",
    "slug": "multipurpose-striped-gift-box-with-ribbon-3x3x4-25-inch-premium-multicolor",
    "title": "Multipurpose Striped Gift Box with Ribbon (3x3x4.25 Inch) – Premium Multicolor Printed Gift Packaging Box",
    "name": "Multipurpose Striped Gift Box with Ribbon (3x3x4.25 Inch) – Premium Multicolor Printed Gift Packaging Box",
    "category": "multicolor-gift-box",
    "category_id": "1eaba4c9-f17d-4784-b788-c194adf6470d",
    "categoryLabel": "Multicolor Gift Boxes & Hamper Boxes",
    "image": "/assets/boxes/multipurpose-striped-gift-box-with-ribbon-3x3x4-25-inch-premium-multicolor_0.webp",
    "images": [
      "/assets/boxes/multipurpose-striped-gift-box-with-ribbon-3x3x4-25-inch-premium-multicolor_0.webp",
      "/assets/boxes/multipurpose-striped-gift-box-with-ribbon-3x3x4-25-inch-premium-multicolor_1.webp",
      "/assets/boxes/multipurpose-striped-gift-box-with-ribbon-3x3x4-25-inch-premium-multicolor_2.webp"
    ],
    "price": 267,
    "selling_price": 267,
    "startingAt": 267,
    "mrp": 550,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium multicolor striped gift box with ribbon (3x3x4.25 inch). Perfect for jewelry, chocolates & return gifts. Stylish, durable & ready-to-use p",
    "fullDesc": "Buy premium multicolor striped gift box with ribbon (3x3x4.25 inch). Perfect for jewelry, chocolates & return gifts. Stylish, durable & ready-to-use p",
    "tiers": [
      {
        "qty": 12,
        "rate": 267,
        "label": "Pack of 12 (₹267)"
      },
      {
        "qty": 24,
        "rate": 427,
        "label": "Pack of 24 (₹427)"
      },
      {
        "qty": 48,
        "rate": 824,
        "label": "Pack of 48 (₹824)"
      },
      {
        "qty": 96,
        "rate": 1550,
        "label": "Pack of 96 (₹1,550)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 12,
        "rate": 22.22,
        "label": "Pack of 12 (₹267)"
      },
      {
        "qty": 24,
        "rate": 17.78,
        "label": "Pack of 24 (₹427)"
      },
      {
        "qty": 48,
        "rate": 17.17,
        "label": "Pack of 48 (₹824)"
      },
      {
        "qty": 96,
        "rate": 16.15,
        "label": "Pack of 96 (₹1,550)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "744f7907-cbaa-4fdb-b31c-103f07c9e89a",
    "slug": "multipurpose-gradient-gift-box-with-ribbon-3x3x4-25-inch-premium-abstract-g",
    "title": "Multipurpose Gradient Gift Box with Ribbon (3x3x4.25 Inch) – Premium Abstract Gold Printed Gift Packaging Box",
    "name": "Multipurpose Gradient Gift Box with Ribbon (3x3x4.25 Inch) – Premium Abstract Gold Printed Gift Packaging Box",
    "category": "multicolor-gift-box",
    "category_id": "1eaba4c9-f17d-4784-b788-c194adf6470d",
    "categoryLabel": "Multicolor Gift Boxes & Hamper Boxes",
    "image": "/assets/boxes/multipurpose-gradient-gift-box-with-ribbon-3x3x4-25-inch-premium-abstract-g_0.webp",
    "images": [
      "/assets/boxes/multipurpose-gradient-gift-box-with-ribbon-3x3x4-25-inch-premium-abstract-g_0.webp",
      "/assets/boxes/multipurpose-gradient-gift-box-with-ribbon-3x3x4-25-inch-premium-abstract-g_1.webp",
      "/assets/boxes/multipurpose-gradient-gift-box-with-ribbon-3x3x4-25-inch-premium-abstract-g_2.webp"
    ],
    "price": 267,
    "selling_price": 267,
    "startingAt": 267,
    "mrp": 550,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium gradient gift box with ribbon (3x3x4.25 inch) featuring abstract gold print. Perfect for jewelry, chocolates & return gifts. Stylish, dura",
    "fullDesc": "Buy premium gradient gift box with ribbon (3x3x4.25 inch) featuring abstract gold print. Perfect for jewelry, chocolates & return gifts. Stylish, dura",
    "tiers": [
      {
        "qty": 12,
        "rate": 267,
        "label": "Pack of 12 (₹267)"
      },
      {
        "qty": 24,
        "rate": 427,
        "label": "Pack of 24 (₹427)"
      },
      {
        "qty": 48,
        "rate": 824,
        "label": "Pack of 48 (₹824)"
      },
      {
        "qty": 96,
        "rate": 1550,
        "label": "Pack of 96 (₹1,550)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 12,
        "rate": 22.22,
        "label": "Pack of 12 (₹267)"
      },
      {
        "qty": 24,
        "rate": 17.78,
        "label": "Pack of 24 (₹427)"
      },
      {
        "qty": 48,
        "rate": 17.17,
        "label": "Pack of 48 (₹824)"
      },
      {
        "qty": 96,
        "rate": 16.15,
        "label": "Pack of 96 (₹1,550)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "d9907cbc-d146-415d-876b-52256b8c091a",
    "slug": "multipurpose-gradient-gift-box-with-ribbon-3x3x4-25-inch-premium-leaf-print",
    "title": "Multipurpose Gradient Gift Box with Ribbon (3x3x4.25 Inch) – Premium Leaf Printed Gift Packaging Box",
    "name": "Multipurpose Gradient Gift Box with Ribbon (3x3x4.25 Inch) – Premium Leaf Printed Gift Packaging Box",
    "category": "multicolor-gift-box",
    "category_id": "1eaba4c9-f17d-4784-b788-c194adf6470d",
    "categoryLabel": "Multicolor Gift Boxes & Hamper Boxes",
    "image": "/assets/boxes/multipurpose-gradient-gift-box-with-ribbon-3x3x4-25-inch-premium-leaf-print_0.webp",
    "images": [
      "/assets/boxes/multipurpose-gradient-gift-box-with-ribbon-3x3x4-25-inch-premium-leaf-print_0.webp",
      "/assets/boxes/multipurpose-gradient-gift-box-with-ribbon-3x3x4-25-inch-premium-leaf-print_1.webp",
      "/assets/boxes/multipurpose-gradient-gift-box-with-ribbon-3x3x4-25-inch-premium-leaf-print_2.webp"
    ],
    "price": 267,
    "selling_price": 267,
    "startingAt": 267,
    "mrp": 550,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium gradient gift box with ribbon (3x3x4.25 inch) featuring elegant leaf print. Perfect for jewelry, chocolates & return gifts. Stylish, durab",
    "fullDesc": "Buy premium gradient gift box with ribbon (3x3x4.25 inch) featuring elegant leaf print. Perfect for jewelry, chocolates & return gifts. Stylish, durab",
    "tiers": [
      {
        "qty": 12,
        "rate": 267,
        "label": "Pack of 12 (₹267)"
      },
      {
        "qty": 24,
        "rate": 427,
        "label": "Pack of 24 (₹427)"
      },
      {
        "qty": 48,
        "rate": 824,
        "label": "Pack of 48 (₹824)"
      },
      {
        "qty": 96,
        "rate": 1550,
        "label": "Pack of 96 (₹1,550)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 12,
        "rate": 22.22,
        "label": "Pack of 12 (₹267)"
      },
      {
        "qty": 24,
        "rate": 17.78,
        "label": "Pack of 24 (₹427)"
      },
      {
        "qty": 48,
        "rate": 17.17,
        "label": "Pack of 48 (₹824)"
      },
      {
        "qty": 96,
        "rate": 16.15,
        "label": "Pack of 96 (₹1,550)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "65897a8d-233c-4aab-b4bd-48918093f786",
    "slug": "gradient-heart-printed-gift-box-with-ribbon-3x3x4-25-inch",
    "title": "Gradient Heart Printed Gift Box with Ribbon 3x3x4.25 Inch",
    "name": "Gradient Heart Printed Gift Box with Ribbon 3x3x4.25 Inch",
    "category": "multicolor-gift-box",
    "category_id": "1eaba4c9-f17d-4784-b788-c194adf6470d",
    "categoryLabel": "Multicolor Gift Boxes & Hamper Boxes",
    "image": "/assets/boxes/gradient-heart-printed-gift-box-with-ribbon-3x3x4-25-inch_0.webp",
    "images": [
      "/assets/boxes/gradient-heart-printed-gift-box-with-ribbon-3x3x4-25-inch_0.webp",
      "/assets/boxes/gradient-heart-printed-gift-box-with-ribbon-3x3x4-25-inch_1.webp",
      "/assets/boxes/gradient-heart-printed-gift-box-with-ribbon-3x3x4-25-inch_2.webp"
    ],
    "price": 267,
    "selling_price": 267,
    "startingAt": 267,
    "mrp": 550,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium gradient gift box with ribbon (3x3x4.25 inch). Perfect for jewelry, chocolates & return gifts. Elegant, durable & ready-to-use packaging.",
    "fullDesc": "Buy premium gradient gift box with ribbon (3x3x4.25 inch). Perfect for jewelry, chocolates & return gifts. Elegant, durable & ready-to-use packaging.",
    "tiers": [
      {
        "qty": 12,
        "rate": 267,
        "label": "Pack of 12 (₹267)"
      },
      {
        "qty": 24,
        "rate": 427,
        "label": "Pack of 24 (₹427)"
      },
      {
        "qty": 48,
        "rate": 824,
        "label": "Pack of 48 (₹824)"
      },
      {
        "qty": 96,
        "rate": 1550,
        "label": "Pack of 96 (₹1,550)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 12,
        "rate": 22.22,
        "label": "Pack of 12 (₹267)"
      },
      {
        "qty": 24,
        "rate": 17.78,
        "label": "Pack of 24 (₹427)"
      },
      {
        "qty": 48,
        "rate": 17.17,
        "label": "Pack of 48 (₹824)"
      },
      {
        "qty": 96,
        "rate": 16.15,
        "label": "Pack of 96 (₹1,550)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "c700e442-a519-45b5-8d57-561a0470fb66",
    "slug": "multipurpose-gift-box-with-ribbon-3x3x4-25-inch-premium-white-gold-gift-pac",
    "title": "Multipurpose Gift Box with Ribbon (3x3x4.25 Inch) – Premium White & Gold Gift Packaging Box",
    "name": "Multipurpose Gift Box with Ribbon (3x3x4.25 Inch) – Premium White & Gold Gift Packaging Box",
    "category": "multicolor-gift-box",
    "category_id": "1eaba4c9-f17d-4784-b788-c194adf6470d",
    "categoryLabel": "Multicolor Gift Boxes & Hamper Boxes",
    "image": "/assets/boxes/multipurpose-gift-box-with-ribbon-3x3x4-25-inch-premium-white-gold-gift-pac_0.webp",
    "images": [
      "/assets/boxes/multipurpose-gift-box-with-ribbon-3x3x4-25-inch-premium-white-gold-gift-pac_0.webp",
      "/assets/boxes/multipurpose-gift-box-with-ribbon-3x3x4-25-inch-premium-white-gold-gift-pac_1.webp",
      "/assets/boxes/multipurpose-gift-box-with-ribbon-3x3x4-25-inch-premium-white-gold-gift-pac_2.webp"
    ],
    "price": 267,
    "selling_price": 267,
    "startingAt": 267,
    "mrp": 550,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium multipurpose gift box with ribbon (3x3x4.25 inch). Perfect for jewelry, chocolates & return gifts. Elegant & durable packaging.",
    "fullDesc": "Buy premium multipurpose gift box with ribbon (3x3x4.25 inch). Perfect for jewelry, chocolates & return gifts. Elegant & durable packaging.",
    "tiers": [
      {
        "qty": 12,
        "rate": 267,
        "label": "Pack of 12 (₹267)"
      },
      {
        "qty": 24,
        "rate": 427,
        "label": "Pack of 24 (₹427)"
      },
      {
        "qty": 48,
        "rate": 824,
        "label": "Pack of 48 (₹824)"
      },
      {
        "qty": 96,
        "rate": 1550,
        "label": "Pack of 96 (₹1,550)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 12,
        "rate": 22.22,
        "label": "Pack of 12 (₹267)"
      },
      {
        "qty": 24,
        "rate": 17.78,
        "label": "Pack of 24 (₹427)"
      },
      {
        "qty": 48,
        "rate": 17.17,
        "label": "Pack of 48 (₹824)"
      },
      {
        "qty": 96,
        "rate": 16.15,
        "label": "Pack of 96 (₹1,550)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "cffe750f-a3ac-4e89-ae5e-8bc0d60c748f",
    "slug": "festive-gift-packaging-box-9x9x3-the-perfect-solution-for-elegant-gifting",
    "title": "Festive Gift Packaging Box 9x9x3 – The Perfect Solution for Elegant Gifting",
    "name": "Festive Gift Packaging Box 9x9x3 – The Perfect Solution for Elegant Gifting",
    "category": "multicolor-gift-box",
    "category_id": "1eaba4c9-f17d-4784-b788-c194adf6470d",
    "categoryLabel": "Multicolor Gift Boxes & Hamper Boxes",
    "image": "/assets/boxes/festive-gift-packaging-box-9x9x3-the-perfect-solution-for-elegant-gifting_0.webp",
    "images": [
      "/assets/boxes/festive-gift-packaging-box-9x9x3-the-perfect-solution-for-elegant-gifting_0.webp",
      "/assets/boxes/festive-gift-packaging-box-9x9x3-the-perfect-solution-for-elegant-gifting_1.webp",
      "/assets/boxes/festive-gift-packaging-box-9x9x3-the-perfect-solution-for-elegant-gifting_2.webp"
    ],
    "price": 414,
    "selling_price": 414,
    "startingAt": 414,
    "mrp": 800,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop premium Festive Gift Packaging Boxes online at AS Print Gallery. Decorative, Custom, Printed & Luxury gift packaging boxes for hampers, sweets .....",
    "fullDesc": "Shop premium Festive Gift Packaging Boxes online at AS Print Gallery. Decorative, Custom, Printed & Luxury gift packaging boxes for hampers, sweets .....",
    "tiers": [
      {
        "qty": 10,
        "rate": 414,
        "label": "Pack of 10 (₹414)"
      },
      {
        "qty": 25,
        "rate": 1030,
        "label": "Pack of 25 (₹1,030)"
      },
      {
        "qty": 50,
        "rate": 1999,
        "label": "Pack of 50 (₹1,999)"
      },
      {
        "qty": 100,
        "rate": 3950,
        "label": "Pack of 100 (₹3,950)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 10,
        "rate": 41.43,
        "label": "Pack of 10 (₹414)"
      },
      {
        "qty": 25,
        "rate": 41.2,
        "label": "Pack of 25 (₹1,030)"
      },
      {
        "qty": 50,
        "rate": 39.98,
        "label": "Pack of 50 (₹1,999)"
      },
      {
        "qty": 100,
        "rate": 39.5,
        "label": "Pack of 100 (₹3,950)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "c09a5cc1-6f96-4f08-9cc6-62ca021631ff",
    "slug": "multicolor-pre-printed-jungle-themed-pink-gift-flap-box-size-6x4x2-3-ply-co",
    "title": "Multicolor Pre-Printed Jungle themed Pink Gift Flap Box Size 6x4x2 | 3 Ply Corrugated Boxes",
    "name": "Multicolor Pre-Printed Jungle themed Pink Gift Flap Box Size 6x4x2 | 3 Ply Corrugated Boxes",
    "category": "multicolor-gift-box",
    "category_id": "1eaba4c9-f17d-4784-b788-c194adf6470d",
    "categoryLabel": "Multicolor Gift Boxes & Hamper Boxes",
    "image": "/assets/boxes/multicolor-pre-printed-jungle-themed-pink-gift-flap-box-size-6x4x2-3-ply-co_0.webp",
    "images": [
      "/assets/boxes/multicolor-pre-printed-jungle-themed-pink-gift-flap-box-size-6x4x2-3-ply-co_0.webp",
      "/assets/boxes/multicolor-pre-printed-jungle-themed-pink-gift-flap-box-size-6x4x2-3-ply-co_1.webp",
      "/assets/boxes/multicolor-pre-printed-jungle-themed-pink-gift-flap-box-size-6x4x2-3-ply-co_2.webp"
    ],
    "price": 380,
    "selling_price": 380,
    "startingAt": 380,
    "mrp": 760,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop 6x4x2 inch jungle-themed pink gift box from This multicolor 3 ply flap box is ideal for kids' gifts, birthday goodies, toys & return",
    "fullDesc": "Shop 6x4x2 inch jungle-themed pink gift box from This multicolor 3 ply flap box is ideal for kids' gifts, birthday goodies, toys & return",
    "tiers": [
      {
        "qty": 25,
        "rate": 380,
        "label": "Pack of 25 (₹380)"
      },
      {
        "qty": 50,
        "rate": 750,
        "label": "Pack of 50 (₹750)"
      },
      {
        "qty": 500,
        "rate": 7400,
        "label": "Pack of 500 (₹7,400)"
      },
      {
        "qty": 1000,
        "rate": 14600,
        "label": "Pack of 1000 (₹14,600)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 25,
        "rate": 15.2,
        "label": "Pack of 25 (₹380)"
      },
      {
        "qty": 50,
        "rate": 15,
        "label": "Pack of 50 (₹750)"
      },
      {
        "qty": 500,
        "rate": 14.8,
        "label": "Pack of 500 (₹7,400)"
      },
      {
        "qty": 1000,
        "rate": 14.6,
        "label": "Pack of 1000 (₹14,600)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "0aa159ba-2269-4c26-a687-58de5e3b951f",
    "slug": "multicolor-pre-printed-jungle-themed-blue-gift-flap-box-size-6x4x2-3-ply-co",
    "title": "Multicolor Pre-Printed Jungle themed Blue Gift Flap Box Size 6x4x2 | 3 Ply Corrugated Boxes",
    "name": "Multicolor Pre-Printed Jungle themed Blue Gift Flap Box Size 6x4x2 | 3 Ply Corrugated Boxes",
    "category": "multicolor-gift-box",
    "category_id": "1eaba4c9-f17d-4784-b788-c194adf6470d",
    "categoryLabel": "Multicolor Gift Boxes & Hamper Boxes",
    "image": "/assets/boxes/multicolor-pre-printed-jungle-themed-blue-gift-flap-box-size-6x4x2-3-ply-co_0.webp",
    "images": [
      "/assets/boxes/multicolor-pre-printed-jungle-themed-blue-gift-flap-box-size-6x4x2-3-ply-co_0.webp",
      "/assets/boxes/multicolor-pre-printed-jungle-themed-blue-gift-flap-box-size-6x4x2-3-ply-co_1.webp",
      "/assets/boxes/multicolor-pre-printed-jungle-themed-blue-gift-flap-box-size-6x4x2-3-ply-co_2.webp"
    ],
    "price": 380,
    "selling_price": 380,
    "startingAt": 380,
    "mrp": 760,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "jungle theme blue gift box, kids return gift box India, pre-printed flap box 6x4x2, multicolor corrugated gift box, printed 3 ply gift box, box for ch",
    "fullDesc": "jungle theme blue gift box, kids return gift box India, pre-printed flap box 6x4x2, multicolor corrugated gift box, printed 3 ply gift box, box for ch",
    "tiers": [
      {
        "qty": 25,
        "rate": 380,
        "label": "Pack of 25 (₹380)"
      },
      {
        "qty": 50,
        "rate": 750,
        "label": "Pack of 50 (₹750)"
      },
      {
        "qty": 500,
        "rate": 7400,
        "label": "Pack of 500 (₹7,400)"
      },
      {
        "qty": 1000,
        "rate": 14600,
        "label": "Pack of 1000 (₹14,600)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 25,
        "rate": 15.2,
        "label": "Pack of 25 (₹380)"
      },
      {
        "qty": 50,
        "rate": 15,
        "label": "Pack of 50 (₹750)"
      },
      {
        "qty": 500,
        "rate": 14.8,
        "label": "Pack of 500 (₹7,400)"
      },
      {
        "qty": 1000,
        "rate": 14.6,
        "label": "Pack of 1000 (₹14,600)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "1fcba229-f7ca-434f-9530-fb962639069d",
    "slug": "direct-thermal-label-paper-barcode-stickers-3x5-inches-75mmx125mm-400-label",
    "title": "AS Print Direct Thermal Label Paper Barcode Stickers | 3x5 Inches (75mmx125mm) | 400 Labels/Roll | White Self-Adhesive Stickers for Barcode, Shippi",
    "name": "AS Print Direct Thermal Label Paper Barcode Stickers | 3x5 Inches (75mmx125mm) | 400 Labels/Roll | White Self-Adhesive Stickers for Barcode, Shippi",
    "category": "thermal-label-paper",
    "category_id": "da15168f-6621-4532-9323-06e50b09fe6c",
    "categoryLabel": "Thermal Label Paper & Barcode Rolls",
    "image": "/assets/boxes/direct-thermal-label-paper-barcode-stickers-3x5-inches-75mmx125mm-400-label_0.webp",
    "images": [
      "/assets/boxes/direct-thermal-label-paper-barcode-stickers-3x5-inches-75mmx125mm-400-label_0.webp",
      "/assets/boxes/direct-thermal-label-paper-barcode-stickers-3x5-inches-75mmx125mm-400-label_1.webp",
      "/assets/boxes/direct-thermal-label-paper-barcode-stickers-3x5-inches-75mmx125mm-400-label_2.webp",
      "/assets/boxes/direct-thermal-label-paper-barcode-stickers-3x5-inches-75mmx125mm-400-label_3.webp"
    ],
    "price": 329,
    "selling_price": 329,
    "startingAt": 329,
    "mrp": 488,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Order AS Print 3x5 Inches (75mmx125mm) Direct Thermal Labels — 400 white self-adhesive stickers per roll. Perfect for shipping labels, barcode prin",
    "fullDesc": "Order AS Print 3x5 Inches (75mmx125mm) Direct Thermal Labels — 400 white self-adhesive stickers per roll. Perfect for shipping labels, barcode prin",
    "tiers": [
      {
        "qty": 1,
        "rate": 329,
        "label": "1 Piece (₹329)"
      },
      {
        "qty": 3,
        "rate": 889,
        "label": "3 Pieces (₹889)"
      },
      {
        "qty": 15,
        "rate": 4068,
        "label": "15 Pieces (₹4,068)"
      },
      {
        "qty": 30,
        "rate": 7627,
        "label": "30 Pieces (₹7,627)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 1,
        "rate": 328.81,
        "label": "1 Piece (₹329)"
      },
      {
        "qty": 3,
        "rate": 296.33,
        "label": "3 Pieces (₹889)"
      },
      {
        "qty": 15,
        "rate": 271.19,
        "label": "15 Pieces (₹4,068)"
      },
      {
        "qty": 30,
        "rate": 254.24,
        "label": "30 Pieces (₹7,627)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "951ebcdf-56da-46c5-937a-4d0f8721ce47",
    "slug": "direct-thermal-label-paper-barcode-stickers-2x1-inches-50mmx25mm-1-000-labe",
    "title": "AS Print Direct Thermal Label Paper Barcode Stickers | 2x1 Inches (50mmx25mm) | 1,000 Labels/Roll | White Self-Adhesive Stickers for Barcode, Shipp",
    "name": "AS Print Direct Thermal Label Paper Barcode Stickers | 2x1 Inches (50mmx25mm) | 1,000 Labels/Roll | White Self-Adhesive Stickers for Barcode, Shipp",
    "category": "thermal-label-paper",
    "category_id": "da15168f-6621-4532-9323-06e50b09fe6c",
    "categoryLabel": "Thermal Label Paper & Barcode Rolls",
    "image": "/assets/boxes/direct-thermal-label-paper-barcode-stickers-2x1-inches-50mmx25mm-1-000-labe_0.webp",
    "images": [
      "/assets/boxes/direct-thermal-label-paper-barcode-stickers-2x1-inches-50mmx25mm-1-000-labe_0.webp",
      "/assets/boxes/direct-thermal-label-paper-barcode-stickers-2x1-inches-50mmx25mm-1-000-labe_1.webp",
      "/assets/boxes/direct-thermal-label-paper-barcode-stickers-2x1-inches-50mmx25mm-1-000-labe_2.webp",
      "/assets/boxes/direct-thermal-label-paper-barcode-stickers-2x1-inches-50mmx25mm-1-000-labe_3.webp"
    ],
    "price": 237,
    "selling_price": 237,
    "startingAt": 237,
    "mrp": 500,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop AS Print 2x1 Inches (50mmx25mm) Direct Thermal Labels — 1,000 white self-adhesive stickers per roll. Ideal for barcode printing, product label",
    "fullDesc": "Shop AS Print 2x1 Inches (50mmx25mm) Direct Thermal Labels — 1,000 white self-adhesive stickers per roll. Ideal for barcode printing, product label",
    "tiers": [
      {
        "qty": 2000,
        "rate": 237,
        "label": "2000 Labels (₹237)"
      },
      {
        "qty": 10000,
        "rate": 1017,
        "label": "10000 Labels (₹1,017)"
      },
      {
        "qty": 20000,
        "rate": 1952,
        "label": "20000 Labels (₹1,952)"
      },
      {
        "qty": 50000,
        "rate": 4571,
        "label": "50000 Labels (₹4,571)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 2000,
        "rate": 0.12,
        "label": "2000 Labels (₹237)"
      },
      {
        "qty": 10000,
        "rate": 0.1,
        "label": "10000 Labels (₹1,017)"
      },
      {
        "qty": 20000,
        "rate": 0.1,
        "label": "20000 Labels (₹1,952)"
      },
      {
        "qty": 50000,
        "rate": 0.09,
        "label": "50000 Labels (₹4,571)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "f832c840-8877-4096-ae76-a518f07ba4ad",
    "slug": "direct-thermal-label-paper-barcode-stickers-1x2-inches-25mmx50mm-2-ups-2-00",
    "title": "AS Print Direct Thermal Label Paper Barcode Stickers | 1x2 Inches (25mmx50mm) - 2 Ups | 2,000 Labels/Roll | White Self-Adhesive Stickers for Packag",
    "name": "AS Print Direct Thermal Label Paper Barcode Stickers | 1x2 Inches (25mmx50mm) - 2 Ups | 2,000 Labels/Roll | White Self-Adhesive Stickers for Packag",
    "category": "thermal-label-paper",
    "category_id": "da15168f-6621-4532-9323-06e50b09fe6c",
    "categoryLabel": "Thermal Label Paper & Barcode Rolls",
    "image": "/assets/boxes/direct-thermal-label-paper-barcode-stickers-1x2-inches-25mmx50mm-2-ups-2-00_0.webp",
    "images": [
      "/assets/boxes/direct-thermal-label-paper-barcode-stickers-1x2-inches-25mmx50mm-2-ups-2-00_0.webp",
      "/assets/boxes/direct-thermal-label-paper-barcode-stickers-1x2-inches-25mmx50mm-2-ups-2-00_1.webp",
      "/assets/boxes/direct-thermal-label-paper-barcode-stickers-1x2-inches-25mmx50mm-2-ups-2-00_2.webp",
      "/assets/boxes/direct-thermal-label-paper-barcode-stickers-1x2-inches-25mmx50mm-2-ups-2-00_3.webp"
    ],
    "price": 237,
    "selling_price": 237,
    "startingAt": 237,
    "mrp": 380,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print 1x2 Inches (25mmx50mm) Direct Thermal Labels — 2,000 stickers per roll, white self-adhesive, ideal for barcode printing, product label",
    "fullDesc": "Buy AS Print 1x2 Inches (25mmx50mm) Direct Thermal Labels — 2,000 stickers per roll, white self-adhesive, ideal for barcode printing, product label",
    "tiers": [
      {
        "qty": 2000,
        "rate": 237,
        "label": "2000 Labels (₹237)"
      },
      {
        "qty": 10000,
        "rate": 1017,
        "label": "10000 Labels (₹1,017)"
      },
      {
        "qty": 20000,
        "rate": 1905,
        "label": "20000 Labels (₹1,905)"
      },
      {
        "qty": 50000,
        "rate": 4571,
        "label": "50000 Labels (₹4,571)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 2000,
        "rate": 0.12,
        "label": "2000 Labels (₹237)"
      },
      {
        "qty": 10000,
        "rate": 0.1,
        "label": "10000 Labels (₹1,017)"
      },
      {
        "qty": 20000,
        "rate": 0.1,
        "label": "20000 Labels (₹1,905)"
      },
      {
        "qty": 50000,
        "rate": 0.09,
        "label": "50000 Labels (₹4,571)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "0b663598-12da-44a3-89bc-d9d94187d207",
    "slug": "direct-thermal-label-paper-4x6-inch-stickers-shipping-packaging-labels-comp",
    "title": "AS Print Direct Thermal Label Paper 4x6 Inch Stickers | Shipping & Packaging Labels | Compatible with TSC, Zebra, Xprinter, and Other Thermal Print",
    "name": "AS Print Direct Thermal Label Paper 4x6 Inch Stickers | Shipping & Packaging Labels | Compatible with TSC, Zebra, Xprinter, and Other Thermal Print",
    "category": "thermal-label-paper",
    "category_id": "da15168f-6621-4532-9323-06e50b09fe6c",
    "categoryLabel": "Thermal Label Paper & Barcode Rolls",
    "image": "/assets/boxes/direct-thermal-label-paper-4x6-inch-stickers-shipping-packaging-labels-comp_0.webp",
    "images": [
      "/assets/boxes/direct-thermal-label-paper-4x6-inch-stickers-shipping-packaging-labels-comp_0.webp",
      "/assets/boxes/direct-thermal-label-paper-4x6-inch-stickers-shipping-packaging-labels-comp_1.webp",
      "/assets/boxes/direct-thermal-label-paper-4x6-inch-stickers-shipping-packaging-labels-comp_2.webp",
      "/assets/boxes/direct-thermal-label-paper-4x6-inch-stickers-shipping-packaging-labels-comp_3.webp"
    ],
    "price": 329,
    "selling_price": 329,
    "startingAt": 329,
    "mrp": 600,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop AS Print 4x6 Inches Direct Thermal Labels for shipping and packaging. Compatible with TSC, Zebra, Xprinter, and more. No ink or toner required",
    "fullDesc": "Shop AS Print 4x6 Inches Direct Thermal Labels for shipping and packaging. Compatible with TSC, Zebra, Xprinter, and more. No ink or toner required",
    "tiers": [
      {
        "qty": 1,
        "rate": 329,
        "label": "1 Piece (₹329)"
      },
      {
        "qty": 3,
        "rate": 889,
        "label": "3 Pieces (₹889)"
      },
      {
        "qty": 15,
        "rate": 4068,
        "label": "15 Pieces (₹4,068)"
      },
      {
        "qty": 30,
        "rate": 7810,
        "label": "30 Pieces (₹7,810)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 1,
        "rate": 328.81,
        "label": "1 Piece (₹329)"
      },
      {
        "qty": 3,
        "rate": 296.33,
        "label": "3 Pieces (₹889)"
      },
      {
        "qty": 15,
        "rate": 271.19,
        "label": "15 Pieces (₹4,068)"
      },
      {
        "qty": 30,
        "rate": 260.32,
        "label": "30 Pieces (₹7,810)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "1ce52914-a3ce-469f-a9bc-d72be31b3345",
    "slug": "meesho-branded-packaging-tape-60-meter-2-inch-48-mm-strong-adhesive-tape-fo",
    "title": "Meesho Branded Packaging Tape 60 Meter (2 Inch, 48 mm) Strong Adhesive Tape for Secure Shipping & eCommerce Packaging",
    "name": "Meesho Branded Packaging Tape 60 Meter (2 Inch, 48 mm) Strong Adhesive Tape for Secure Shipping & eCommerce Packaging",
    "category": "tape",
    "category_id": "ef67f757-94a6-4ac0-a5a5-93b3b9eaa24e",
    "categoryLabel": "BOPP Packaging Tape & Fragile Tape",
    "image": "/assets/boxes/meesho-branded-packaging-tape-60-meter-2-inch-48-mm-strong-adhesive-tape-fo_0.webp",
    "images": [
      "/assets/boxes/meesho-branded-packaging-tape-60-meter-2-inch-48-mm-strong-adhesive-tape-fo_0.webp",
      "/assets/boxes/meesho-branded-packaging-tape-60-meter-2-inch-48-mm-strong-adhesive-tape-fo_1.webp",
      "/assets/boxes/meesho-branded-packaging-tape-60-meter-2-inch-48-mm-strong-adhesive-tape-fo_2.webp",
      "/assets/boxes/meesho-branded-packaging-tape-60-meter-2-inch-48-mm-strong-adhesive-tape-fo_3.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 435,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy Meesho Branded Packaging Tape 60 Meter (2 Inch, 48 mm) from AS Print Gallery. Strong BOPP adhesive tape for secure carton sealing, courier packaging, shippin",
    "fullDesc": "Buy Meesho Branded Packaging Tape 60 Meter (2 Inch, 48 mm) from AS Print Gallery. Strong BOPP adhesive tape for secure carton sealing, courier packaging, shippin",
    "tiers": [
      {
        "qty": 6,
        "rate": 284,
        "label": "6  Pieces (₹284)"
      },
      {
        "qty": 12,
        "rate": 549,
        "label": "12  Pieces (₹549)"
      },
      {
        "qty": 36,
        "rate": 1429,
        "label": "36  Pieces (₹1,429)"
      },
      {
        "qty": 72,
        "rate": 2667,
        "label": "72  Pieces (₹2,667)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 6,
        "rate": 47.32,
        "label": "6  Pieces (₹284)"
      },
      {
        "qty": 12,
        "rate": 45.76,
        "label": "12  Pieces (₹549)"
      },
      {
        "qty": 36,
        "rate": 39.68,
        "label": "36  Pieces (₹1,429)"
      },
      {
        "qty": 72,
        "rate": 37.04,
        "label": "72  Pieces (₹2,667)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "857824c1-5e20-4555-8688-27423dfc9d99",
    "slug": "amazon-branded-transparent-packaging-tape-2-inch-48mm-width-60-meters-roll",
    "title": "AS Print Amazon Branded Transparent Packaging Tape | 2 Inch (48mm) Width | 60 Meters Roll | Strong Adhesive Amazon Printed Tape for Shipping",
    "name": "AS Print Amazon Branded Transparent Packaging Tape | 2 Inch (48mm) Width | 60 Meters Roll | Strong Adhesive Amazon Printed Tape for Shipping",
    "category": "tape",
    "category_id": "ef67f757-94a6-4ac0-a5a5-93b3b9eaa24e",
    "categoryLabel": "BOPP Packaging Tape & Fragile Tape",
    "image": "/assets/boxes/amazon-branded-transparent-packaging-tape-2-inch-48mm-width-60-meters-roll_0.webp",
    "images": [
      "/assets/boxes/amazon-branded-transparent-packaging-tape-2-inch-48mm-width-60-meters-roll_0.webp",
      "/assets/boxes/amazon-branded-transparent-packaging-tape-2-inch-48mm-width-60-meters-roll_1.webp",
      "/assets/boxes/amazon-branded-transparent-packaging-tape-2-inch-48mm-width-60-meters-roll_2.webp",
      "/assets/boxes/amazon-branded-transparent-packaging-tape-2-inch-48mm-width-60-meters-roll_3.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 735,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print Gallery Transparent BOPP Packaging Tape 48mm x 60m online. Strong adhesive tape for carton sealing, courier packaging, eCommerce, warehouse, office,",
    "fullDesc": "Buy AS Print Gallery Transparent BOPP Packaging Tape 48mm x 60m online. Strong adhesive tape for carton sealing, courier packaging, eCommerce, warehouse, office,",
    "tiers": [
      {
        "qty": 6,
        "rate": 284,
        "label": "6  Pieces (₹284)"
      },
      {
        "qty": 12,
        "rate": 549,
        "label": "12  Pieces (₹549)"
      },
      {
        "qty": 36,
        "rate": 1429,
        "label": "36  Pieces (₹1,429)"
      },
      {
        "qty": 72,
        "rate": 2667,
        "label": "72  Pieces (₹2,667)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 6,
        "rate": 47.32,
        "label": "6  Pieces (₹284)"
      },
      {
        "qty": 12,
        "rate": 45.76,
        "label": "12  Pieces (₹549)"
      },
      {
        "qty": 36,
        "rate": 39.68,
        "label": "36  Pieces (₹1,429)"
      },
      {
        "qty": 72,
        "rate": 37.04,
        "label": "72  Pieces (₹2,667)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "fa41b757-f088-4079-9199-6a7901d673cf",
    "slug": "self-adhesive-high-strength-bopp-packing-cello-tape-2-inch-width-wide-x-220",
    "title": "AS Print Self-Adhesive High-Strength BOPP Packing Cello Tape – 2″Inch Width Wide x 220m Long (2 inchX 220m). Strong Heavy-Duty Industrial Shipping",
    "name": "AS Print Self-Adhesive High-Strength BOPP Packing Cello Tape – 2″Inch Width Wide x 220m Long (2 inchX 220m). Strong Heavy-Duty Industrial Shipping",
    "category": "tape",
    "category_id": "ef67f757-94a6-4ac0-a5a5-93b3b9eaa24e",
    "categoryLabel": "BOPP Packaging Tape & Fragile Tape",
    "image": "/assets/boxes/self-adhesive-high-strength-bopp-packing-cello-tape-2-inch-width-wide-x-220_0.webp",
    "images": [
      "/assets/boxes/self-adhesive-high-strength-bopp-packing-cello-tape-2-inch-width-wide-x-220_0.webp",
      "/assets/boxes/self-adhesive-high-strength-bopp-packing-cello-tape-2-inch-width-wide-x-220_1.webp",
      "/assets/boxes/self-adhesive-high-strength-bopp-packing-cello-tape-2-inch-width-wide-x-220_2.webp",
      "/assets/boxes/self-adhesive-high-strength-bopp-packing-cello-tape-2-inch-width-wide-x-220_3.webp"
    ],
    "price": 189,
    "selling_price": 189,
    "startingAt": 189,
    "mrp": 400,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop AS Print’s 2 Inch x 220M High-Strength BOPP Cello Tape — Ideal for industrial, warehouse, and shipping use. Heavy-duty, strong adhesive packin",
    "fullDesc": "Shop AS Print’s 2 Inch x 220M High-Strength BOPP Cello Tape — Ideal for industrial, warehouse, and shipping use. Heavy-duty, strong adhesive packin",
    "tiers": [
      {
        "qty": 1,
        "rate": 189,
        "label": "1 Piece (₹189)"
      },
      {
        "qty": 6,
        "rate": 855,
        "label": "6  Pieces (₹855)"
      },
      {
        "qty": 18,
        "rate": 2476,
        "label": "18 Pieces (₹2,476)"
      },
      {
        "qty": 36,
        "rate": 4857,
        "label": "36  Pieces (₹4,857)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 1,
        "rate": 188.57,
        "label": "1 Piece (₹189)"
      },
      {
        "qty": 6,
        "rate": 142.54,
        "label": "6  Pieces (₹855)"
      },
      {
        "qty": 18,
        "rate": 137.57,
        "label": "18 Pieces (₹2,476)"
      },
      {
        "qty": 36,
        "rate": 134.92,
        "label": "36  Pieces (₹4,857)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "166dce81-3599-4733-a051-1864482115ac",
    "slug": "flipkart-branded-packaging-tape-60m-2-inch-48-mm",
    "title": "Flipkart Branded Packaging Tape 60m, 2 Inch (48 mm)",
    "name": "Flipkart Branded Packaging Tape 60m, 2 Inch (48 mm)",
    "category": "tape",
    "category_id": "ef67f757-94a6-4ac0-a5a5-93b3b9eaa24e",
    "categoryLabel": "BOPP Packaging Tape & Fragile Tape",
    "image": "/assets/boxes/flipkart-branded-packaging-tape-60m-2-inch-48-mm_0.webp",
    "images": [
      "/assets/boxes/flipkart-branded-packaging-tape-60m-2-inch-48-mm_0.webp",
      "/assets/boxes/flipkart-branded-packaging-tape-60m-2-inch-48-mm_1.webp",
      "/assets/boxes/flipkart-branded-packaging-tape-60m-2-inch-48-mm_2.webp",
      "/assets/boxes/flipkart-branded-packaging-tape-60m-2-inch-48-mm_3.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 435,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy Flipkart-branded packaging tape (60 meters) with strong adhesive. Premium 2 inch (48mm) BOPP courier tape ideal for carton sealing, eCommerce ship",
    "fullDesc": "Buy Flipkart-branded packaging tape (60 meters) with strong adhesive. Premium 2 inch (48mm) BOPP courier tape ideal for carton sealing, eCommerce ship",
    "tiers": [
      {
        "qty": 6,
        "rate": 284,
        "label": "6  Pieces (₹284)"
      },
      {
        "qty": 12,
        "rate": 549,
        "label": "12  Pieces (₹549)"
      },
      {
        "qty": 36,
        "rate": 1429,
        "label": "36  Pieces (₹1,429)"
      },
      {
        "qty": 72,
        "rate": 2667,
        "label": "72  Pieces (₹2,667)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 6,
        "rate": 47.32,
        "label": "6  Pieces (₹284)"
      },
      {
        "qty": 12,
        "rate": 45.76,
        "label": "12  Pieces (₹549)"
      },
      {
        "qty": 36,
        "rate": 39.68,
        "label": "36  Pieces (₹1,429)"
      },
      {
        "qty": 72,
        "rate": 37.04,
        "label": "72  Pieces (₹2,667)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "eec6ceba-a409-4f1f-a791-4be7531895f0",
    "slug": "cello-tape-2-inch-60-mtr-printed-packaging-tape-handle-with-care-fragile-pr",
    "title": "Cello Tape 2 Inch 60 Mtr | Printed Packaging Tape | Handle with Care Fragile Printed Tape for Shipping & Packaging",
    "name": "Cello Tape 2 Inch 60 Mtr | Printed Packaging Tape | Handle with Care Fragile Printed Tape for Shipping & Packaging",
    "category": "tape",
    "category_id": "ef67f757-94a6-4ac0-a5a5-93b3b9eaa24e",
    "categoryLabel": "BOPP Packaging Tape & Fragile Tape",
    "image": "/assets/boxes/cello-tape-2-inch-60-mtr-printed-packaging-tape-handle-with-care-fragile-pr_0.webp",
    "images": [
      "/assets/boxes/cello-tape-2-inch-60-mtr-printed-packaging-tape-handle-with-care-fragile-pr_0.webp",
      "/assets/boxes/cello-tape-2-inch-60-mtr-printed-packaging-tape-handle-with-care-fragile-pr_1.webp",
      "/assets/boxes/cello-tape-2-inch-60-mtr-printed-packaging-tape-handle-with-care-fragile-pr_2.webp",
      "/assets/boxes/cello-tape-2-inch-60-mtr-printed-packaging-tape-handle-with-care-fragile-pr_3.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 435,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print Gallery Handle With Care Fragile Printed Packaging Tape 60 Meter. Strong adhesive 2 inch BOPP tape for fragile product packaging, carton sealing, co",
    "fullDesc": "Buy AS Print Gallery Handle With Care Fragile Printed Packaging Tape 60 Meter. Strong adhesive 2 inch BOPP tape for fragile product packaging, carton sealing, co",
    "tiers": [
      {
        "qty": 6,
        "rate": 284,
        "label": "6  Pieces (₹284)"
      },
      {
        "qty": 12,
        "rate": 549,
        "label": "12  Pieces (₹549)"
      },
      {
        "qty": 36,
        "rate": 1429,
        "label": "36  Pieces (₹1,429)"
      },
      {
        "qty": 72,
        "rate": 2667,
        "label": "72  Pieces (₹2,667)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 6,
        "rate": 47.32,
        "label": "6  Pieces (₹284)"
      },
      {
        "qty": 12,
        "rate": 45.76,
        "label": "12  Pieces (₹549)"
      },
      {
        "qty": 36,
        "rate": 39.68,
        "label": "36  Pieces (₹1,429)"
      },
      {
        "qty": 72,
        "rate": 37.04,
        "label": "72  Pieces (₹2,667)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": true
  },
  {
    "id": "ec4ad7ed-abc3-4082-a656-ec8af1e6669a",
    "slug": "amazon-prime-branded-packaging-tape-60m-x-72mm-3-inch-strong-black-adhesive",
    "title": "Amazon Prime Branded Packaging Tape – 60m x 72mm (3-Inch) | Strong Black Adhesive Tape for Heavy Packaging, Shipping, & Carton Sealing",
    "name": "Amazon Prime Branded Packaging Tape – 60m x 72mm (3-Inch) | Strong Black Adhesive Tape for Heavy Packaging, Shipping, & Carton Sealing",
    "category": "tape",
    "category_id": "ef67f757-94a6-4ac0-a5a5-93b3b9eaa24e",
    "categoryLabel": "BOPP Packaging Tape & Fragile Tape",
    "image": "/assets/boxes/amazon-prime-branded-packaging-tape-60m-x-72mm-3-inch-strong-black-adhesive_0.webp",
    "images": [
      "/assets/boxes/amazon-prime-branded-packaging-tape-60m-x-72mm-3-inch-strong-black-adhesive_0.webp",
      "/assets/boxes/amazon-prime-branded-packaging-tape-60m-x-72mm-3-inch-strong-black-adhesive_1.webp",
      "/assets/boxes/amazon-prime-branded-packaging-tape-60m-x-72mm-3-inch-strong-black-adhesive_2.webp",
      "/assets/boxes/amazon-prime-branded-packaging-tape-60m-x-72mm-3-inch-strong-black-adhesive_3.webp"
    ],
    "price": 295,
    "selling_price": 295,
    "startingAt": 295,
    "mrp": 448,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Secure every shipment with Amazon Prime branded packaging tape. Strong adhesive, 60m length, and 72mm width make it ideal for carton sealing, shipping",
    "fullDesc": "Secure every shipment with Amazon Prime branded packaging tape. Strong adhesive, 60m length, and 72mm width make it ideal for carton sealing, shipping",
    "tiers": [
      {
        "qty": 4,
        "rate": 295,
        "label": "4 Pieces (₹295)"
      },
      {
        "qty": 12,
        "rate": 847,
        "label": "12  Pieces (₹847)"
      },
      {
        "qty": 24,
        "rate": 1619,
        "label": "24 Pieces (₹1,619)"
      },
      {
        "qty": 48,
        "rate": 2857,
        "label": "48 Pieces (₹2,857)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 4,
        "rate": 73.73,
        "label": "4 Pieces (₹295)"
      },
      {
        "qty": 12,
        "rate": 70.55,
        "label": "12  Pieces (₹847)"
      },
      {
        "qty": 24,
        "rate": 67.46,
        "label": "24 Pieces (₹1,619)"
      },
      {
        "qty": 48,
        "rate": 59.52,
        "label": "48 Pieces (₹2,857)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "007eb942-8181-4ec4-b6ab-e69c19e90308",
    "slug": "7x10-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewel",
    "title": "AS Print Gallery 7x10 Inch Transparent Zip Lock Pouch Bags | Resealable Plastic Bags for Jewellery, Cosmetics & eCommerce Packaging",
    "name": "AS Print Gallery 7x10 Inch Transparent Zip Lock Pouch Bags | Resealable Plastic Bags for Jewellery, Cosmetics & eCommerce Packaging",
    "category": "zip-lock-pouch-bags",
    "category_id": "a7f44342-85fa-4101-b80e-0a7ee7ac3515",
    "categoryLabel": "Zip Lock Stand Up Pouches",
    "image": "/assets/boxes/7x10-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewel_1.webp",
    "images": [
      "/assets/boxes/7x10-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewel_1.webp",
      "/assets/boxes/7x10-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewel_0.webp",
      "/assets/boxes/7x10-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewel_2.webp",
      "/assets/boxes/7x10-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewel_3.webp"
    ],
    "price": 190,
    "selling_price": 190,
    "startingAt": 190,
    "mrp": 399,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print Gallery 7x10 Inch Transparent Zip Lock Pouch Bags for clothing, documents, jewellery, cosmetics, electronics, and eCommerce packaging. Durable, reus",
    "fullDesc": "Buy AS Print Gallery 7x10 Inch Transparent Zip Lock Pouch Bags for clothing, documents, jewellery, cosmetics, electronics, and eCommerce packaging. Durable, reus",
    "tiers": [
      {
        "qty": 100,
        "rate": 190,
        "label": "Pack of 100 (₹190)"
      },
      {
        "qty": 500,
        "rate": 846,
        "label": "Pack of  500 (₹846)"
      },
      {
        "qty": 1000,
        "rate": 1610,
        "label": "Pack of  1000 (₹1,610)"
      },
      {
        "qty": 2000,
        "rate": 3136,
        "label": "Pack of  2000 (₹3,136)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 100,
        "rate": 1.9,
        "label": "Pack of 100 (₹190)"
      },
      {
        "qty": 500,
        "rate": 1.69,
        "label": "Pack of  500 (₹846)"
      },
      {
        "qty": 1000,
        "rate": 1.61,
        "label": "Pack of  1000 (₹1,610)"
      },
      {
        "qty": 2000,
        "rate": 1.57,
        "label": "Pack of  2000 (₹3,136)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "b8809f95-4bdb-41ac-8551-eec425b1c0e6",
    "slug": "6x8-inch-transparent-zip-lock-pouch-bags-for-packaging",
    "title": "AS Print Gallery 6x8 Inch Transparent Zip Lock Pouch Bags for Packaging",
    "name": "AS Print Gallery 6x8 Inch Transparent Zip Lock Pouch Bags for Packaging",
    "category": "zip-lock-pouch-bags",
    "category_id": "a7f44342-85fa-4101-b80e-0a7ee7ac3515",
    "categoryLabel": "Zip Lock Stand Up Pouches",
    "image": "/assets/boxes/6x8-inch-transparent-zip-lock-pouch-bags-for-packaging_1.webp",
    "images": [
      "/assets/boxes/6x8-inch-transparent-zip-lock-pouch-bags-for-packaging_1.webp",
      "/assets/boxes/6x8-inch-transparent-zip-lock-pouch-bags-for-packaging_0.webp",
      "/assets/boxes/6x8-inch-transparent-zip-lock-pouch-bags-for-packaging_2.webp",
      "/assets/boxes/6x8-inch-transparent-zip-lock-pouch-bags-for-packaging_3.webp"
    ],
    "price": 253,
    "selling_price": 253,
    "startingAt": 253,
    "mrp": 500,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print Gallery 6x8 Inch Transparent Zip Lock Pouch Bags for documents, jewellery, cosmetics, clothing accessories, electronics, and retail packaging. Durab",
    "fullDesc": "Buy AS Print Gallery 6x8 Inch Transparent Zip Lock Pouch Bags for documents, jewellery, cosmetics, clothing accessories, electronics, and retail packaging. Durab",
    "tiers": [
      {
        "qty": 200,
        "rate": 253,
        "label": "Pack of 200 (₹253)"
      },
      {
        "qty": 500,
        "rate": 627,
        "label": "Pack of  500 (₹627)"
      },
      {
        "qty": 2000,
        "rate": 2458,
        "label": "Pack of  2000 (₹2,458)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 200,
        "rate": 1.26,
        "label": "Pack of 200 (₹253)"
      },
      {
        "qty": 500,
        "rate": 1.25,
        "label": "Pack of  500 (₹627)"
      },
      {
        "qty": 2000,
        "rate": 1.23,
        "label": "Pack of  2000 (₹2,458)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "19af3f5b-b6c5-42d6-a371-4a28e8525b86",
    "slug": "5x7-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell",
    "title": "AS Print Gallery 5x7 Inch Transparent Zip Lock Pouch Bags | Resealable Plastic Bags for Jewellery, Documents, Clothing Accessories & Product Packaging",
    "name": "AS Print Gallery 5x7 Inch Transparent Zip Lock Pouch Bags | Resealable Plastic Bags for Jewellery, Documents, Clothing Accessories & Product Packaging",
    "category": "zip-lock-pouch-bags",
    "category_id": "a7f44342-85fa-4101-b80e-0a7ee7ac3515",
    "categoryLabel": "Zip Lock Stand Up Pouches",
    "image": "/assets/boxes/5x7-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell_1.webp",
    "images": [
      "/assets/boxes/5x7-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell_1.webp",
      "/assets/boxes/5x7-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell_0.webp",
      "/assets/boxes/5x7-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell_2.webp",
      "/assets/boxes/5x7-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell_3.webp"
    ],
    "price": 210,
    "selling_price": 210,
    "startingAt": 210,
    "mrp": 400,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy 5x7 inch transparent zip lock pouch bags for jewellery, cosmetics, electronics and product packaging. Reusable pouches with bulk pricing and Pan I",
    "fullDesc": "Buy 5x7 inch transparent zip lock pouch bags for jewellery, cosmetics, electronics and product packaging. Reusable pouches with bulk pricing and Pan I",
    "tiers": [
      {
        "qty": 200,
        "rate": 210,
        "label": "Pack of 200 (₹210)"
      },
      {
        "qty": 500,
        "rate": 458,
        "label": "Pack of  500 (₹458)"
      },
      {
        "qty": 2000,
        "rate": 1822,
        "label": "Pack of  2000 (₹1,822)"
      },
      {
        "qty": 5000,
        "rate": 3644,
        "label": "Pack of 5000 (₹3,644)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 200,
        "rate": 1.05,
        "label": "Pack of 200 (₹210)"
      },
      {
        "qty": 500,
        "rate": 0.92,
        "label": "Pack of  500 (₹458)"
      },
      {
        "qty": 2000,
        "rate": 0.91,
        "label": "Pack of  2000 (₹1,822)"
      },
      {
        "qty": 5000,
        "rate": 0.73,
        "label": "Pack of 5000 (₹3,644)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "8f9e89da-b82f-4a98-ac66-3086b8606198",
    "slug": "4x5-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell",
    "title": "AS Print Gallery 4x5 Inch Transparent Zip Lock Pouch Bags | Resealable Plastic Bags for Jewellery, Beads, Coins & Small Product Packaging",
    "name": "AS Print Gallery 4x5 Inch Transparent Zip Lock Pouch Bags | Resealable Plastic Bags for Jewellery, Beads, Coins & Small Product Packaging",
    "category": "zip-lock-pouch-bags",
    "category_id": "a7f44342-85fa-4101-b80e-0a7ee7ac3515",
    "categoryLabel": "Zip Lock Stand Up Pouches",
    "image": "/assets/boxes/4x5-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell_1.webp",
    "images": [
      "/assets/boxes/4x5-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell_1.webp",
      "/assets/boxes/4x5-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell_0.webp",
      "/assets/boxes/4x5-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell_2.webp",
      "/assets/boxes/4x5-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell_3.webp"
    ],
    "price": 161,
    "selling_price": 161,
    "startingAt": 161,
    "mrp": 300,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print Gallery 4x5 Inch Transparent Zip Lock Pouch Bags for jewellery, beads, coins, electronics, and small product packaging. Durable, reusable, resealabl",
    "fullDesc": "Buy AS Print Gallery 4x5 Inch Transparent Zip Lock Pouch Bags for jewellery, beads, coins, electronics, and small product packaging. Durable, reusable, resealabl",
    "tiers": [
      {
        "qty": 200,
        "rate": 161,
        "label": "Pack of 200 (₹161)"
      },
      {
        "qty": 500,
        "rate": 314,
        "label": "Pack of  500 (₹314)"
      },
      {
        "qty": 2000,
        "rate": 1142,
        "label": "Pack of  2000 (₹1,142)"
      },
      {
        "qty": 5000,
        "rate": 2246,
        "label": "Pack of 5000 (₹2,246)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 200,
        "rate": 0.81,
        "label": "Pack of 200 (₹161)"
      },
      {
        "qty": 500,
        "rate": 0.63,
        "label": "Pack of  500 (₹314)"
      },
      {
        "qty": 2000,
        "rate": 0.57,
        "label": "Pack of  2000 (₹1,142)"
      },
      {
        "qty": 5000,
        "rate": 0.45,
        "label": "Pack of 5000 (₹2,246)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "e912727e-c9eb-422d-97fb-ec7a79ff68f8",
    "slug": "3x4-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell",
    "title": "AS Print Gallery 3x4 Inch Transparent Zip Lock Pouch Bags | Resealable Plastic Bags for Jewellery, Beads, Coins & Small Product Packaging",
    "name": "AS Print Gallery 3x4 Inch Transparent Zip Lock Pouch Bags | Resealable Plastic Bags for Jewellery, Beads, Coins & Small Product Packaging",
    "category": "zip-lock-pouch-bags",
    "category_id": "a7f44342-85fa-4101-b80e-0a7ee7ac3515",
    "categoryLabel": "Zip Lock Stand Up Pouches",
    "image": "/assets/boxes/3x4-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell_1.webp",
    "images": [
      "/assets/boxes/3x4-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell_1.webp",
      "/assets/boxes/3x4-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell_0.webp",
      "/assets/boxes/3x4-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell_2.webp",
      "/assets/boxes/3x4-inch-transparent-zip-lock-pouch-bags-resealable-plastic-bags-for-jewell_3.webp"
    ],
    "price": 119,
    "selling_price": 119,
    "startingAt": 119,
    "mrp": 230,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy 3x4 inch transparent zip lock pouch bags from AS Print Gallery. Reusable resealable plastic bags for jewellery, beads, electronics, stationery, and small pro",
    "fullDesc": "Buy 3x4 inch transparent zip lock pouch bags from AS Print Gallery. Reusable resealable plastic bags for jewellery, beads, electronics, stationery, and small pro",
    "tiers": [
      {
        "qty": 200,
        "rate": 119,
        "label": "Pack of 200 (₹119)"
      },
      {
        "qty": 500,
        "rate": 237,
        "label": "Pack of  500 (₹237)"
      },
      {
        "qty": 2000,
        "rate": 719,
        "label": "Pack of  2000 (₹719)"
      },
      {
        "qty": 5000,
        "rate": 1441,
        "label": "Pack of 5000 (₹1,441)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 200,
        "rate": 0.59,
        "label": "Pack of 200 (₹119)"
      },
      {
        "qty": 500,
        "rate": 0.47,
        "label": "Pack of  500 (₹237)"
      },
      {
        "qty": 2000,
        "rate": 0.36,
        "label": "Pack of  2000 (₹719)"
      },
      {
        "qty": 5000,
        "rate": 0.29,
        "label": "Pack of 5000 (₹1,441)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "0c6cd4ba-14ee-449a-911e-cc894e5b2203",
    "slug": "2x3-inch-transparent-zip-lock-pouch-bags-for-jewellery-beads-small-product",
    "title": "AS Print Gallery 2x3 Inch Transparent Zip Lock Pouch Bags for Jewellery, Beads & Small Product Packaging",
    "name": "AS Print Gallery 2x3 Inch Transparent Zip Lock Pouch Bags for Jewellery, Beads & Small Product Packaging",
    "category": "zip-lock-pouch-bags",
    "category_id": "a7f44342-85fa-4101-b80e-0a7ee7ac3515",
    "categoryLabel": "Zip Lock Stand Up Pouches",
    "image": "/assets/boxes/2x3-inch-transparent-zip-lock-pouch-bags-for-jewellery-beads-small-product_1.webp",
    "images": [
      "/assets/boxes/2x3-inch-transparent-zip-lock-pouch-bags-for-jewellery-beads-small-product_1.webp",
      "/assets/boxes/2x3-inch-transparent-zip-lock-pouch-bags-for-jewellery-beads-small-product_0.webp",
      "/assets/boxes/2x3-inch-transparent-zip-lock-pouch-bags-for-jewellery-beads-small-product_2.webp",
      "/assets/boxes/2x3-inch-transparent-zip-lock-pouch-bags-for-jewellery-beads-small-product_3.webp"
    ],
    "price": 102,
    "selling_price": 102,
    "startingAt": 102,
    "mrp": 200,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy 2x3 Inch Transparent Zip Lock Pouch Bags for jewellery, beads, medicines, seeds, accessories, and small product packaging. Strong resealable closu",
    "fullDesc": "Buy 2x3 Inch Transparent Zip Lock Pouch Bags for jewellery, beads, medicines, seeds, accessories, and small product packaging. Strong resealable closu",
    "tiers": [
      {
        "qty": 200,
        "rate": 102,
        "label": "Pack of 200 (₹102)"
      },
      {
        "qty": 500,
        "rate": 161,
        "label": "Pack of  500 (₹161)"
      },
      {
        "qty": 2000,
        "rate": 338,
        "label": "Pack of  2000 (₹338)"
      },
      {
        "qty": 5000,
        "rate": 761,
        "label": "Pack of 5000 (₹761)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 200,
        "rate": 0.51,
        "label": "Pack of 200 (₹102)"
      },
      {
        "qty": 500,
        "rate": 0.32,
        "label": "Pack of  500 (₹161)"
      },
      {
        "qty": 2000,
        "rate": 0.17,
        "label": "Pack of  2000 (₹338)"
      },
      {
        "qty": 5000,
        "rate": 0.15,
        "label": "Pack of 5000 (₹761)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": true,
    "flag_best_seller": true
  },
  {
    "id": "36d8ca75-b500-4aa7-bdb0-81e98a029a82",
    "slug": "14x18-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp",
    "title": "14x18 Inch Meesho Polybag with Barcode for Secure Ecommerce Packaging & Shipping",
    "name": "14x18 Inch Meesho Polybag with Barcode for Secure Ecommerce Packaging & Shipping",
    "category": "meesho-polybags",
    "category_id": "a8138245-25cd-47d9-a486-d9700401af36",
    "categoryLabel": "Meesho & Marketplace Polybags",
    "image": "/assets/boxes/14x18-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp_1.webp",
    "images": [
      "/assets/boxes/14x18-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp_1.webp",
      "/assets/boxes/14x18-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp_0.webp",
      "/assets/boxes/14x18-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp_2.webp",
      "/assets/boxes/14x18-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp_3.webp"
    ],
    "price": 331,
    "selling_price": 331,
    "startingAt": 331,
    "mrp": 699,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium 14x18 inch Meesho polybags with barcode for secure ecommerce packaging, waterproof courier shipping, and tamper-proof deliveries.",
    "fullDesc": "Buy premium 14x18 inch Meesho polybags with barcode for secure ecommerce packaging, waterproof courier shipping, and tamper-proof deliveries.",
    "tiers": [
      {
        "qty": 50,
        "rate": 331,
        "label": "Pack of 50 (₹331)"
      },
      {
        "qty": 100,
        "rate": 653,
        "label": "Pack of 100 (₹653)"
      },
      {
        "qty": 500,
        "rate": 3220,
        "label": "Pack of 500 (₹3,220)"
      },
      {
        "qty": 1000,
        "rate": 6356,
        "label": "Pack of 1000 (₹6,356)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 50,
        "rate": 6.61,
        "label": "Pack of 50 (₹331)"
      },
      {
        "qty": 100,
        "rate": 6.53,
        "label": "Pack of 100 (₹653)"
      },
      {
        "qty": 500,
        "rate": 6.44,
        "label": "Pack of 500 (₹3,220)"
      },
      {
        "qty": 1000,
        "rate": 6.36,
        "label": "Pack of 1000 (₹6,356)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "63f65485-5a7d-40df-8120-bf2bfcdd345e",
    "slug": "16x20-inch-meesho-polybag-with-barcode-for-secure-shipping",
    "title": "16x20 Inch Meesho Polybag with Barcode for Secure Shipping",
    "name": "16x20 Inch Meesho Polybag with Barcode for Secure Shipping",
    "category": "meesho-polybags",
    "category_id": "a8138245-25cd-47d9-a486-d9700401af36",
    "categoryLabel": "Meesho & Marketplace Polybags",
    "image": "/assets/boxes/16x20-inch-meesho-polybag-with-barcode-for-secure-shipping_1.webp",
    "images": [
      "/assets/boxes/16x20-inch-meesho-polybag-with-barcode-for-secure-shipping_1.webp",
      "/assets/boxes/16x20-inch-meesho-polybag-with-barcode-for-secure-shipping_0.webp",
      "/assets/boxes/16x20-inch-meesho-polybag-with-barcode-for-secure-shipping_2.webp",
      "/assets/boxes/16x20-inch-meesho-polybag-with-barcode-for-secure-shipping_3.webp"
    ],
    "price": 422,
    "selling_price": 422,
    "startingAt": 422,
    "mrp": 899,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium 16x20 inch Meesho polybags with barcode for secure ecommerce packaging, waterproof courier shipping, and tamper-proof deliveries.",
    "fullDesc": "Buy premium 16x20 inch Meesho polybags with barcode for secure ecommerce packaging, waterproof courier shipping, and tamper-proof deliveries.",
    "tiers": [
      {
        "qty": 50,
        "rate": 422,
        "label": "Pack of 50 (₹422)"
      },
      {
        "qty": 100,
        "rate": 804,
        "label": "Pack of 100 (₹804)"
      },
      {
        "qty": 500,
        "rate": 3941,
        "label": "Pack of 500 (₹3,941)"
      },
      {
        "qty": 1000,
        "rate": 7797,
        "label": "Pack of 1000 (₹7,797)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 50,
        "rate": 8.44,
        "label": "Pack of 50 (₹422)"
      },
      {
        "qty": 100,
        "rate": 8.04,
        "label": "Pack of 100 (₹804)"
      },
      {
        "qty": 500,
        "rate": 7.88,
        "label": "Pack of 500 (₹3,941)"
      },
      {
        "qty": 1000,
        "rate": 7.8,
        "label": "Pack of 1000 (₹7,797)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "0fd8a4ef-2bdf-4506-b845-495be5814098",
    "slug": "12x14-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp",
    "title": "12x14 Inch Meesho Polybag with Barcode for Secure Ecommerce Packaging & Shipping",
    "name": "12x14 Inch Meesho Polybag with Barcode for Secure Ecommerce Packaging & Shipping",
    "category": "meesho-polybags",
    "category_id": "a8138245-25cd-47d9-a486-d9700401af36",
    "categoryLabel": "Meesho & Marketplace Polybags",
    "image": "/assets/boxes/12x14-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp_1.webp",
    "images": [
      "/assets/boxes/12x14-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp_1.webp",
      "/assets/boxes/12x14-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp_0.webp",
      "/assets/boxes/12x14-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp_2.webp",
      "/assets/boxes/12x14-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp_3.webp"
    ],
    "price": 458,
    "selling_price": 458,
    "startingAt": 458,
    "mrp": 999,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium 12x14 inch Meesho polybags with barcode for secure ecommerce packaging, waterproof courier shipping, and tamper-proof deliveries.",
    "fullDesc": "Buy premium 12x14 inch Meesho polybags with barcode for secure ecommerce packaging, waterproof courier shipping, and tamper-proof deliveries.",
    "tiers": [
      {
        "qty": 100,
        "rate": 458,
        "label": "Pack of 100 (₹458)"
      },
      {
        "qty": 200,
        "rate": 907,
        "label": "Pack of 200 (₹907)"
      },
      {
        "qty": 500,
        "rate": 2203,
        "label": "Pack of 500 (₹2,203)"
      },
      {
        "qty": 1000,
        "rate": 4322,
        "label": "Pack of 1000 (₹4,322)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 100,
        "rate": 4.58,
        "label": "Pack of 100 (₹458)"
      },
      {
        "qty": 200,
        "rate": 4.53,
        "label": "Pack of 200 (₹907)"
      },
      {
        "qty": 500,
        "rate": 4.41,
        "label": "Pack of 500 (₹2,203)"
      },
      {
        "qty": 1000,
        "rate": 4.32,
        "label": "Pack of 1000 (₹4,322)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "02ef607c-4791-4319-9989-641c8fafb912",
    "slug": "10x12-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp",
    "title": "10x12 Inch Meesho Polybag with Barcode for Secure Ecommerce Packaging & Shipping",
    "name": "10x12 Inch Meesho Polybag with Barcode for Secure Ecommerce Packaging & Shipping",
    "category": "meesho-polybags",
    "category_id": "a8138245-25cd-47d9-a486-d9700401af36",
    "categoryLabel": "Meesho & Marketplace Polybags",
    "image": "/assets/boxes/10x12-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp_1.webp",
    "images": [
      "/assets/boxes/10x12-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp_1.webp",
      "/assets/boxes/10x12-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp_0.webp",
      "/assets/boxes/10x12-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp_2.webp",
      "/assets/boxes/10x12-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shipp_3.webp"
    ],
    "price": 356,
    "selling_price": 356,
    "startingAt": 356,
    "mrp": 700,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium 10x12 inch Meesho polybags with barcode for secure ecommerce packaging, waterproof courier shipping, and tamper-proof deliveries.",
    "fullDesc": "Buy premium 10x12 inch Meesho polybags with barcode for secure ecommerce packaging, waterproof courier shipping, and tamper-proof deliveries.",
    "tiers": [
      {
        "qty": 100,
        "rate": 356,
        "label": "Pack of 100 (₹356)"
      },
      {
        "qty": 200,
        "rate": 1000,
        "label": "Pack of 200 (₹1,000)"
      },
      {
        "qty": 500,
        "rate": 1610,
        "label": "Pack of 500 (₹1,610)"
      },
      {
        "qty": 1000,
        "rate": 3008,
        "label": "Pack of 1000 (₹3,008)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 100,
        "rate": 3.56,
        "label": "Pack of 100 (₹356)"
      },
      {
        "qty": 200,
        "rate": 5,
        "label": "Pack of 200 (₹1,000)"
      },
      {
        "qty": 500,
        "rate": 3.22,
        "label": "Pack of 500 (₹1,610)"
      },
      {
        "qty": 1000,
        "rate": 3.01,
        "label": "Pack of 1000 (₹3,008)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "e92228b4-45c5-484e-ac2a-85b93ea593b8",
    "slug": "9x12-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippi",
    "title": "9x12 Inch Meesho Polybag with Barcode for Secure Ecommerce Packaging & Shipping",
    "name": "9x12 Inch Meesho Polybag with Barcode for Secure Ecommerce Packaging & Shipping",
    "category": "meesho-polybags",
    "category_id": "a8138245-25cd-47d9-a486-d9700401af36",
    "categoryLabel": "Meesho & Marketplace Polybags",
    "image": "/assets/boxes/9x12-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippi_1.webp",
    "images": [
      "/assets/boxes/9x12-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippi_1.webp",
      "/assets/boxes/9x12-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippi_0.webp",
      "/assets/boxes/9x12-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippi_2.webp",
      "/assets/boxes/9x12-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippi_3.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 399,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium 9x12 inch Meesho polybags with barcode for secure ecommerce packaging, waterproof courier shipping, and tamper-proof deliveries.",
    "fullDesc": "Buy premium 9x12 inch Meesho polybags with barcode for secure ecommerce packaging, waterproof courier shipping, and tamper-proof deliveries.",
    "tiers": [
      {
        "qty": 100,
        "rate": 284,
        "label": "Pack of 100 (₹284)"
      },
      {
        "qty": 500,
        "rate": 1314,
        "label": "Pack of 500 (₹1,314)"
      },
      {
        "qty": 1000,
        "rate": 2585,
        "label": "Pack of 1000 (₹2,585)"
      },
      {
        "qty": 2000,
        "rate": 5085,
        "label": "Pack of 2000 (₹5,085)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 100,
        "rate": 2.84,
        "label": "Pack of 100 (₹284)"
      },
      {
        "qty": 500,
        "rate": 2.63,
        "label": "Pack of 500 (₹1,314)"
      },
      {
        "qty": 1000,
        "rate": 2.58,
        "label": "Pack of 1000 (₹2,585)"
      },
      {
        "qty": 2000,
        "rate": 2.54,
        "label": "Pack of 2000 (₹5,085)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "60dab481-df47-43f8-88fe-1957ce57f2e9",
    "slug": "8x10-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippi",
    "title": "8x10 Inch Meesho Polybag with Barcode for Secure Ecommerce Packaging & Shipping",
    "name": "8x10 Inch Meesho Polybag with Barcode for Secure Ecommerce Packaging & Shipping",
    "category": "meesho-polybags",
    "category_id": "a8138245-25cd-47d9-a486-d9700401af36",
    "categoryLabel": "Meesho & Marketplace Polybags",
    "image": "/assets/boxes/8x10-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippi_1.webp",
    "images": [
      "/assets/boxes/8x10-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippi_1.webp",
      "/assets/boxes/8x10-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippi_0.webp",
      "/assets/boxes/8x10-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippi_2.webp",
      "/assets/boxes/8x10-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippi_3.webp"
    ],
    "price": 253,
    "selling_price": 253,
    "startingAt": 253,
    "mrp": 399,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium 8x10 inch Meesho polybags with barcode for secure ecommerce packaging, waterproof courier shipping, and tamper-proof deliveries.",
    "fullDesc": "Buy premium 8x10 inch Meesho polybags with barcode for secure ecommerce packaging, waterproof courier shipping, and tamper-proof deliveries.",
    "tiers": [
      {
        "qty": 100,
        "rate": 253,
        "label": "Pack of 100 (₹253)"
      },
      {
        "qty": 500,
        "rate": 1229,
        "label": "Pack of 500 (₹1,229)"
      },
      {
        "qty": 1000,
        "rate": 2288,
        "label": "Pack of 1000 (₹2,288)"
      },
      {
        "qty": 2000,
        "rate": 4237,
        "label": "Pack of 2000 (₹4,237)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 100,
        "rate": 2.53,
        "label": "Pack of 100 (₹253)"
      },
      {
        "qty": 500,
        "rate": 2.46,
        "label": "Pack of 500 (₹1,229)"
      },
      {
        "qty": 1000,
        "rate": 2.29,
        "label": "Pack of 1000 (₹2,288)"
      },
      {
        "qty": 2000,
        "rate": 2.12,
        "label": "Pack of 2000 (₹4,237)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "a6dd7d58-a0da-4dcf-ad77-37a5ca38acf6",
    "slug": "6x8-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippin",
    "title": "6x8 Inch Meesho Polybag with Barcode for Secure Ecommerce Packaging & Shipping",
    "name": "6x8 Inch Meesho Polybag with Barcode for Secure Ecommerce Packaging & Shipping",
    "category": "meesho-polybags",
    "category_id": "a8138245-25cd-47d9-a486-d9700401af36",
    "categoryLabel": "Meesho & Marketplace Polybags",
    "image": "/assets/boxes/6x8-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippin_1.webp",
    "images": [
      "/assets/boxes/6x8-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippin_1.webp",
      "/assets/boxes/6x8-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippin_0.webp",
      "/assets/boxes/6x8-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippin_2.webp",
      "/assets/boxes/6x8-inch-meesho-polybag-with-barcode-for-secure-ecommerce-packaging-shippin_3.webp"
    ],
    "price": 191,
    "selling_price": 191,
    "startingAt": 191,
    "mrp": 299,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium 6x8 inch Meesho polybags with barcode for secure ecommerce packaging, waterproof courier shipping, and tamper-proof deliveries.",
    "fullDesc": "Buy premium 6x8 inch Meesho polybags with barcode for secure ecommerce packaging, waterproof courier shipping, and tamper-proof deliveries.",
    "tiers": [
      {
        "qty": 100,
        "rate": 191,
        "label": "Pack of 100 (₹191)"
      },
      {
        "qty": 500,
        "rate": 888,
        "label": "Pack of 500 (₹888)"
      },
      {
        "qty": 1000,
        "rate": 1737,
        "label": "Pack of 1000 (₹1,737)"
      },
      {
        "qty": 2000,
        "rate": 3390,
        "label": "Pack of 2000 (₹3,390)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 100,
        "rate": 1.91,
        "label": "Pack of 100 (₹191)"
      },
      {
        "qty": 500,
        "rate": 1.78,
        "label": "Pack of 500 (₹888)"
      },
      {
        "qty": 1000,
        "rate": 1.74,
        "label": "Pack of 1000 (₹1,737)"
      },
      {
        "qty": 2000,
        "rate": 1.69,
        "label": "Pack of 2000 (₹3,390)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "7118a8c1-51c7-4bdd-8810-ec819f19da33",
    "slug": "10x14-inch-meesho-polybags-for-secure-ecommerce-packaging-shipping",
    "title": "10x14 Inch Meesho Polybags for Secure Ecommerce Packaging & Shipping",
    "name": "10x14 Inch Meesho Polybags for Secure Ecommerce Packaging & Shipping",
    "category": "meesho-polybags",
    "category_id": "a8138245-25cd-47d9-a486-d9700401af36",
    "categoryLabel": "Meesho & Marketplace Polybags",
    "image": "/assets/boxes/10x14-inch-meesho-polybags-for-secure-ecommerce-packaging-shipping_1.webp",
    "images": [
      "/assets/boxes/10x14-inch-meesho-polybags-for-secure-ecommerce-packaging-shipping_1.webp",
      "/assets/boxes/10x14-inch-meesho-polybags-for-secure-ecommerce-packaging-shipping_0.webp",
      "/assets/boxes/10x14-inch-meesho-polybags-for-secure-ecommerce-packaging-shipping_2.webp",
      "/assets/boxes/10x14-inch-meesho-polybags-for-secure-ecommerce-packaging-shipping_3.webp"
    ],
    "price": 369,
    "selling_price": 369,
    "startingAt": 369,
    "mrp": 699,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium Meesho polybags with barcode for secure ecommerce packaging, courier shipping, and tamper-proof product delivery.",
    "fullDesc": "Buy premium Meesho polybags with barcode for secure ecommerce packaging, courier shipping, and tamper-proof product delivery.",
    "tiers": [
      {
        "qty": 100,
        "rate": 369,
        "label": "Pack of 100 (₹369)"
      },
      {
        "qty": 200,
        "rate": 729,
        "label": "Pack of 200 (₹729)"
      },
      {
        "qty": 500,
        "rate": 1780,
        "label": "Pack of 500 (₹1,780)"
      },
      {
        "qty": 1000,
        "rate": 3475,
        "label": "Pack of 1000 (₹3,475)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 100,
        "rate": 3.69,
        "label": "Pack of 100 (₹369)"
      },
      {
        "qty": 200,
        "rate": 3.64,
        "label": "Pack of 200 (₹729)"
      },
      {
        "qty": 500,
        "rate": 3.56,
        "label": "Pack of 500 (₹1,780)"
      },
      {
        "qty": 1000,
        "rate": 3.47,
        "label": "Pack of 1000 (₹3,475)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "c79bb7e4-a30e-4fa9-91e4-b1ab5a0755f2",
    "slug": "14x18-inch-polybags-with-pod-for-packaging-clear-plastic-bags-wholesale-pol",
    "title": "14x18 Inch Polybags with POD for Packaging | Clear Plastic Bags | Wholesale Poly Bags for Shipping & Storage",
    "name": "14x18 Inch Polybags with POD for Packaging | Clear Plastic Bags | Wholesale Poly Bags for Shipping & Storage",
    "category": "polybag",
    "category_id": "e2d16bc9-9677-44ba-b33d-83dc45e3a068",
    "categoryLabel": "Courier Polybags & Mailer Bags",
    "image": "/assets/boxes/14x18-inch-polybags-with-pod-for-packaging-clear-plastic-bags-wholesale-pol_1.webp",
    "images": [
      "/assets/boxes/14x18-inch-polybags-with-pod-for-packaging-clear-plastic-bags-wholesale-pol_1.webp",
      "/assets/boxes/14x18-inch-polybags-with-pod-for-packaging-clear-plastic-bags-wholesale-pol_0.webp",
      "/assets/boxes/14x18-inch-polybags-with-pod-for-packaging-clear-plastic-bags-wholesale-pol_2.webp",
      "/assets/boxes/14x18-inch-polybags-with-pod-for-packaging-clear-plastic-bags-wholesale-pol_3.webp"
    ],
    "price": 389,
    "selling_price": 389,
    "startingAt": 389,
    "mrp": 599,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy durable 14x18 inch polybags at AS Print Gallery. Premium courier and packaging bags with a POD pouch for secure shipping and storage.",
    "fullDesc": "Buy durable 14x18 inch polybags at AS Print Gallery. Premium courier and packaging bags with a POD pouch for secure shipping and storage.",
    "tiers": [
      {
        "qty": 50,
        "rate": 389,
        "label": "Pack of 50 (₹389)"
      },
      {
        "qty": 100,
        "rate": 770,
        "label": "Pack of 100 (₹770)"
      },
      {
        "qty": 500,
        "rate": 3600,
        "label": "Pack of 500 (₹3,600)"
      },
      {
        "qty": 1000,
        "rate": 6900,
        "label": "Pack of 1000 (₹6,900)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 50,
        "rate": 7.78,
        "label": "Pack of 50 (₹389)"
      },
      {
        "qty": 100,
        "rate": 7.7,
        "label": "Pack of 100 (₹770)"
      },
      {
        "qty": 500,
        "rate": 7.2,
        "label": "Pack of 500 (₹3,600)"
      },
      {
        "qty": 1000,
        "rate": 6.9,
        "label": "Pack of 1000 (₹6,900)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "6bf8cde7-e9c5-4f01-a49b-9e6235242573",
    "slug": "8x10-polybag-with-pod-protect-your-packages-with-pod-courier-bags-for-shipp",
    "title": "8x10 Polybag With POD: Protect Your Packages with POD Courier Bags for Shipping, Packing, Mailing, and More ping, Packing, Mailing, and Mor",
    "name": "8x10 Polybag With POD: Protect Your Packages with POD Courier Bags for Shipping, Packing, Mailing, and More ping, Packing, Mailing, and Mor",
    "category": "polybag",
    "category_id": "e2d16bc9-9677-44ba-b33d-83dc45e3a068",
    "categoryLabel": "Courier Polybags & Mailer Bags",
    "image": "/assets/boxes/8x10-polybag-with-pod-protect-your-packages-with-pod-courier-bags-for-shipp_1.webp",
    "images": [
      "/assets/boxes/8x10-polybag-with-pod-protect-your-packages-with-pod-courier-bags-for-shipp_1.webp",
      "/assets/boxes/8x10-polybag-with-pod-protect-your-packages-with-pod-courier-bags-for-shipp_0.webp",
      "/assets/boxes/8x10-polybag-with-pod-protect-your-packages-with-pod-courier-bags-for-shipp_2.webp",
      "/assets/boxes/8x10-polybag-with-pod-protect-your-packages-with-pod-courier-bags-for-shipp_3.webp"
    ],
    "price": 189,
    "selling_price": 189,
    "startingAt": 189,
    "mrp": 360,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop 8x10 inch polybags with POD for secure shipping. Waterproof, tamper-proof courier bags ideal for eCommerce packaging, mailing, and delivery.",
    "fullDesc": "Shop 8x10 inch polybags with POD for secure shipping. Waterproof, tamper-proof courier bags ideal for eCommerce packaging, mailing, and delivery.",
    "tiers": [
      {
        "qty": 50,
        "rate": 189,
        "label": "Pack of 50 (₹189)"
      },
      {
        "qty": 100,
        "rate": 360,
        "label": "Pack of 100 (₹360)"
      },
      {
        "qty": 500,
        "rate": 1619,
        "label": "Pack of 500 (₹1,619)"
      },
      {
        "qty": 1000,
        "rate": 3048,
        "label": "Pack of 1000 (₹3,048)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 50,
        "rate": 3.77,
        "label": "Pack of 50 (₹189)"
      },
      {
        "qty": 100,
        "rate": 3.6,
        "label": "Pack of 100 (₹360)"
      },
      {
        "qty": 500,
        "rate": 3.24,
        "label": "Pack of 500 (₹1,619)"
      },
      {
        "qty": 1000,
        "rate": 3.05,
        "label": "Pack of 1000 (₹3,048)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "208e995c-dfd8-4a03-b8ab-982e11160e4c",
    "slug": "6x8-inch-polybag-with-pod-waterproof-courier-shipping-bags",
    "title": "6x8 Inch Polybag with POD | Waterproof Courier Shipping Bags",
    "name": "6x8 Inch Polybag with POD | Waterproof Courier Shipping Bags",
    "category": "polybag",
    "category_id": "e2d16bc9-9677-44ba-b33d-83dc45e3a068",
    "categoryLabel": "Courier Polybags & Mailer Bags",
    "image": "/assets/boxes/6x8-inch-polybag-with-pod-waterproof-courier-shipping-bags_1.webp",
    "images": [
      "/assets/boxes/6x8-inch-polybag-with-pod-waterproof-courier-shipping-bags_1.webp",
      "/assets/boxes/6x8-inch-polybag-with-pod-waterproof-courier-shipping-bags_0.webp",
      "/assets/boxes/6x8-inch-polybag-with-pod-waterproof-courier-shipping-bags_2.webp",
      "/assets/boxes/6x8-inch-polybag-with-pod-waterproof-courier-shipping-bags_3.webp"
    ],
    "price": 202,
    "selling_price": 202,
    "startingAt": 202,
    "mrp": 400,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Protect your shipments with premium 6x8 inch polybags featuring a POD jacket. Waterproof, tear-resistant, and tamper-proof courier bags for eCommerce",
    "fullDesc": "Protect your shipments with premium 6x8 inch polybags featuring a POD jacket. Waterproof, tear-resistant, and tamper-proof courier bags for eCommerce",
    "tiers": [
      {
        "qty": 100,
        "rate": 202,
        "label": "Pack of 100 (₹202)"
      },
      {
        "qty": 200,
        "rate": 379,
        "label": "Pack of 200 (₹379)"
      },
      {
        "qty": 1000,
        "rate": 1850,
        "label": "Pack of 1000 (₹1,850)"
      },
      {
        "qty": 2000,
        "rate": 3650,
        "label": "Pack of 2000 (₹3,650)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 100,
        "rate": 2.02,
        "label": "Pack of 100 (₹202)"
      },
      {
        "qty": 200,
        "rate": 1.9,
        "label": "Pack of 200 (₹379)"
      },
      {
        "qty": 1000,
        "rate": 1.85,
        "label": "Pack of 1000 (₹1,850)"
      },
      {
        "qty": 2000,
        "rate": 1.82,
        "label": "Pack of 2000 (₹3,650)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "5c4b5fcb-3a8b-440b-a094-08e6304cd15e",
    "slug": "16x20-inch-polybags-with-pod-jacket-for-ecommerce-shipping",
    "title": "16x20 Inch Polybags with POD Jacket for eCommerce Shipping",
    "name": "16x20 Inch Polybags with POD Jacket for eCommerce Shipping",
    "category": "polybag",
    "category_id": "e2d16bc9-9677-44ba-b33d-83dc45e3a068",
    "categoryLabel": "Courier Polybags & Mailer Bags",
    "image": "/assets/boxes/16x20-inch-polybags-with-pod-jacket-for-ecommerce-shipping_1.webp",
    "images": [
      "/assets/boxes/16x20-inch-polybags-with-pod-jacket-for-ecommerce-shipping_1.webp",
      "/assets/boxes/16x20-inch-polybags-with-pod-jacket-for-ecommerce-shipping_0.webp",
      "/assets/boxes/16x20-inch-polybags-with-pod-jacket-for-ecommerce-shipping_2.webp",
      "/assets/boxes/16x20-inch-polybags-with-pod-jacket-for-ecommerce-shipping_3.webp"
    ],
    "price": 562,
    "selling_price": 562,
    "startingAt": 562,
    "mrp": 1100,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Protect every shipment with premium 16x20 inch polybags featuring a POD jacket. Waterproof, tear-resistant, tamper-proof courier bags for Meesho, Amaz",
    "fullDesc": "Protect every shipment with premium 16x20 inch polybags featuring a POD jacket. Waterproof, tear-resistant, tamper-proof courier bags for Meesho, Amaz",
    "tiers": [
      {
        "qty": 50,
        "rate": 562,
        "label": "Pack of 50 (₹562)"
      },
      {
        "qty": 100,
        "rate": 1095,
        "label": "Pack of 100 (₹1,095)"
      },
      {
        "qty": 500,
        "rate": 5333,
        "label": "Pack of 500 (₹5,333)"
      },
      {
        "qty": 1000,
        "rate": 9429,
        "label": "Pack of 1000 (₹9,429)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 50,
        "rate": 11.24,
        "label": "Pack of 50 (₹562)"
      },
      {
        "qty": 100,
        "rate": 10.95,
        "label": "Pack of 100 (₹1,095)"
      },
      {
        "qty": 500,
        "rate": 10.67,
        "label": "Pack of 500 (₹5,333)"
      },
      {
        "qty": 1000,
        "rate": 9.43,
        "label": "Pack of 1000 (₹9,429)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "2516c5b8-66ab-40b9-81ef-1d9b6cfa5c80",
    "slug": "12x16-inches-polybags-for-packaging-clear-plastic-bags-bulk-shipping-storag",
    "title": "12x16 Inches Polybags for Packaging | Clear Plastic Bags | Bulk Shipping & Storage Poly Bags",
    "name": "12x16 Inches Polybags for Packaging | Clear Plastic Bags | Bulk Shipping & Storage Poly Bags",
    "category": "polybag",
    "category_id": "e2d16bc9-9677-44ba-b33d-83dc45e3a068",
    "categoryLabel": "Courier Polybags & Mailer Bags",
    "image": "/assets/boxes/12x16-inches-polybags-for-packaging-clear-plastic-bags-bulk-shipping-storag_1.webp",
    "images": [
      "/assets/boxes/12x16-inches-polybags-for-packaging-clear-plastic-bags-bulk-shipping-storag_1.webp",
      "/assets/boxes/12x16-inches-polybags-for-packaging-clear-plastic-bags-bulk-shipping-storag_0.webp",
      "/assets/boxes/12x16-inches-polybags-for-packaging-clear-plastic-bags-bulk-shipping-storag_2.webp",
      "/assets/boxes/12x16-inches-polybags-for-packaging-clear-plastic-bags-bulk-shipping-storag_3.webp"
    ],
    "price": 379,
    "selling_price": 379,
    "startingAt": 379,
    "mrp": 700,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop premium 12x16 inch clear polybags for packaging, shipping, storage, and product protection. Durable, lightweight, and ideal for eCommerce, retail",
    "fullDesc": "Shop premium 12x16 inch clear polybags for packaging, shipping, storage, and product protection. Durable, lightweight, and ideal for eCommerce, retail",
    "tiers": [
      {
        "qty": 50,
        "rate": 379,
        "label": "Pack of 50 (₹379)"
      },
      {
        "qty": 100,
        "rate": 712,
        "label": "Pack of 100 (₹712)"
      },
      {
        "qty": 500,
        "rate": 3476,
        "label": "Pack of 500 (₹3,476)"
      },
      {
        "qty": 1000,
        "rate": 6476,
        "label": "Pack of 1000 (₹6,476)"
      }
    ],
    "bulk_pricing": [
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
        "rate": 6.95,
        "label": "Pack of 500 (₹3,476)"
      },
      {
        "qty": 1000,
        "rate": 6.48,
        "label": "Pack of 1000 (₹6,476)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "9ef70b3b-931b-4bd0-bffd-b4c5457cb2f4",
    "slug": "10x14-inches-polybags-for-packaging-clear-plastic-shipping-bags-wholesale-s",
    "title": "AS Print 10x14 Inches Polybags for Packaging | Clear Plastic Shipping Bags | Wholesale Storage & Courier Poly Bags",
    "name": "AS Print 10x14 Inches Polybags for Packaging | Clear Plastic Shipping Bags | Wholesale Storage & Courier Poly Bags",
    "category": "polybag",
    "category_id": "e2d16bc9-9677-44ba-b33d-83dc45e3a068",
    "categoryLabel": "Courier Polybags & Mailer Bags",
    "image": "/assets/boxes/10x14-inches-polybags-for-packaging-clear-plastic-shipping-bags-wholesale-s_1.webp",
    "images": [
      "/assets/boxes/10x14-inches-polybags-for-packaging-clear-plastic-shipping-bags-wholesale-s_1.webp",
      "/assets/boxes/10x14-inches-polybags-for-packaging-clear-plastic-shipping-bags-wholesale-s_0.webp",
      "/assets/boxes/10x14-inches-polybags-for-packaging-clear-plastic-shipping-bags-wholesale-s_2.webp",
      "/assets/boxes/10x14-inches-polybags-for-packaging-clear-plastic-shipping-bags-wholesale-s_3.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 600,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Protect every shipment with premium 10x14 inch polybags featuring a POD jacket. Waterproof, tear-resistant, tamper-proof courier bags for Meesho, Amaz",
    "fullDesc": "Protect every shipment with premium 10x14 inch polybags featuring a POD jacket. Waterproof, tear-resistant, tamper-proof courier bags for Meesho, Amaz",
    "tiers": [
      {
        "qty": 50,
        "rate": 284,
        "label": "Pack of 50 (₹284)"
      },
      {
        "qty": 100,
        "rate": 562,
        "label": "Pack of 100 (₹562)"
      },
      {
        "qty": 500,
        "rate": 2571,
        "label": "Pack of 500 (₹2,571)"
      },
      {
        "qty": 1000,
        "rate": 4952,
        "label": "Pack of 1000 (₹4,952)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 50,
        "rate": 5.68,
        "label": "Pack of 50 (₹284)"
      },
      {
        "qty": 100,
        "rate": 5.62,
        "label": "Pack of 100 (₹562)"
      },
      {
        "qty": 500,
        "rate": 5.14,
        "label": "Pack of 500 (₹2,571)"
      },
      {
        "qty": 1000,
        "rate": 4.95,
        "label": "Pack of 1000 (₹4,952)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "8c82c99e-ed95-43b6-91ee-f9e0e8e67027",
    "slug": "10x12-inches-polybags-for-packaging-clear-plastic-bags-wholesale-poly-bags",
    "title": "10x12 Inches Polybags for Packaging | Clear Plastic Bags | Wholesale Poly Bags for Shipping & Storage",
    "name": "10x12 Inches Polybags for Packaging | Clear Plastic Bags | Wholesale Poly Bags for Shipping & Storage",
    "category": "polybag",
    "category_id": "e2d16bc9-9677-44ba-b33d-83dc45e3a068",
    "categoryLabel": "Courier Polybags & Mailer Bags",
    "image": "/assets/boxes/10x12-inches-polybags-for-packaging-clear-plastic-bags-wholesale-poly-bags_1.webp",
    "images": [
      "/assets/boxes/10x12-inches-polybags-for-packaging-clear-plastic-bags-wholesale-poly-bags_1.webp",
      "/assets/boxes/10x12-inches-polybags-for-packaging-clear-plastic-bags-wholesale-poly-bags_0.webp",
      "/assets/boxes/10x12-inches-polybags-for-packaging-clear-plastic-bags-wholesale-poly-bags_2.webp",
      "/assets/boxes/10x12-inches-polybags-for-packaging-clear-plastic-bags-wholesale-poly-bags_3.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 600,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy durable 10x12 inch polybags at AS Print Gallery. High-quality courier and packaging plastic bags for secure product delivery.",
    "fullDesc": "Buy durable 10x12 inch polybags at AS Print Gallery. High-quality courier and packaging plastic bags for secure product delivery.",
    "tiers": [
      {
        "qty": 50,
        "rate": 284,
        "label": "Pack of 50 (₹284)"
      },
      {
        "qty": 100,
        "rate": 562,
        "label": "Pack of 100 (₹562)"
      },
      {
        "qty": 500,
        "rate": 2571,
        "label": "Pack of 500 (₹2,571)"
      },
      {
        "qty": 1000,
        "rate": 4952,
        "label": "Pack of 1000 (₹4,952)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 50,
        "rate": 5.68,
        "label": "Pack of 50 (₹284)"
      },
      {
        "qty": 100,
        "rate": 5.62,
        "label": "Pack of 100 (₹562)"
      },
      {
        "qty": 500,
        "rate": 5.14,
        "label": "Pack of 500 (₹2,571)"
      },
      {
        "qty": 1000,
        "rate": 4.95,
        "label": "Pack of 1000 (₹4,952)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "49072ef8-0134-41fe-b8bf-bdec70e73dfd",
    "slug": "4-color-shredded-paper-200g-each-for-packaging-gift-box-filler",
    "title": "4 Color Shredded Paper 200g Each for Packaging | Gift Box Filler",
    "name": "4 Color Shredded Paper 200g Each for Packaging | Gift Box Filler",
    "category": "paper-bubble-wrap-protection",
    "category_id": "7fea5107-9b4f-4670-8388-1dd614d828d5",
    "categoryLabel": "Paper Bubble Wrap & Honeycomb Rolls",
    "image": "/assets/boxes/4-color-shredded-paper-200g-each-for-packaging-gift-box-filler_0.webp",
    "images": [
      "/assets/boxes/4-color-shredded-paper-200g-each-for-packaging-gift-box-filler_0.webp",
      "/assets/boxes/4-color-shredded-paper-200g-each-for-packaging-gift-box-filler_1.webp",
      "/assets/boxes/4-color-shredded-paper-200g-each-for-packaging-gift-box-filler_2.webp",
      "/assets/boxes/4-color-shredded-paper-200g-each-for-packaging-gift-box-filler_3.webp"
    ],
    "price": 427,
    "selling_price": 427,
    "startingAt": 427,
    "mrp": 800,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy 4 color shredded paper (800g , 2kg) for gift packaging, hampers & eCommerce boxes. Eco-friendly, lightweight & premium filler by AS Print Gallery.",
    "fullDesc": "Buy 4 color shredded paper (800g , 2kg) for gift packaging, hampers & eCommerce boxes. Eco-friendly, lightweight & premium filler by AS Print Gallery.",
    "tiers": [
      {
        "qty": 800,
        "rate": 427,
        "label": "800 g (₹427)"
      },
      {
        "qty": 2000,
        "rate": 950,
        "label": "2000g (₹950)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 800,
        "rate": 0.53,
        "label": "800 g (₹427)"
      },
      {
        "qty": 2000,
        "rate": 0.48,
        "label": "2000g (₹950)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "0dc88605-c511-473f-a961-cf9296f8f549",
    "slug": "black-shredded-paper-packaging-filler-for-gifts-and-hampers",
    "title": "Black Shredded Paper Packaging Filler for Gifts and Hampers",
    "name": "Black Shredded Paper Packaging Filler for Gifts and Hampers",
    "category": "paper-bubble-wrap-protection",
    "category_id": "7fea5107-9b4f-4670-8388-1dd614d828d5",
    "categoryLabel": "Paper Bubble Wrap & Honeycomb Rolls",
    "image": "/assets/boxes/black-shredded-paper-packaging-filler-for-gifts-and-hampers_0.webp",
    "images": [
      "/assets/boxes/black-shredded-paper-packaging-filler-for-gifts-and-hampers_0.webp",
      "/assets/boxes/black-shredded-paper-packaging-filler-for-gifts-and-hampers_1.webp",
      "/assets/boxes/black-shredded-paper-packaging-filler-for-gifts-and-hampers_2.webp",
      "/assets/boxes/black-shredded-paper-packaging-filler-for-gifts-and-hampers_3.webp"
    ],
    "price": 170,
    "selling_price": 170,
    "startingAt": 170,
    "mrp": 300,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy Black Shredded Paper for premium and eco-friendly packaging. Ideal for gift boxes, luxury packaging, and e-commerce use.",
    "fullDesc": "Buy Black Shredded Paper for premium and eco-friendly packaging. Ideal for gift boxes, luxury packaging, and e-commerce use.",
    "tiers": [
      {
        "qty": 200,
        "rate": 170,
        "label": "200 g (₹170)"
      },
      {
        "qty": 500,
        "rate": 305,
        "label": "500 g (₹305)"
      },
      {
        "qty": 1000,
        "rate": 552,
        "label": "1000 g (₹552)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 200,
        "rate": 0.85,
        "label": "200 g (₹170)"
      },
      {
        "qty": 500,
        "rate": 0.61,
        "label": "500 g (₹305)"
      },
      {
        "qty": 1000,
        "rate": 0.55,
        "label": "1000 g (₹552)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "a269a8b8-e156-4e41-9f0a-c6f7b0be5857",
    "slug": "brown-shredded-paper-eco-friendly-premium-packaging-filler",
    "title": "AS Print Brown Shredded Paper – Eco-Friendly & Premium Packaging Filler",
    "name": "AS Print Brown Shredded Paper – Eco-Friendly & Premium Packaging Filler",
    "category": "paper-bubble-wrap-protection",
    "category_id": "7fea5107-9b4f-4670-8388-1dd614d828d5",
    "categoryLabel": "Paper Bubble Wrap & Honeycomb Rolls",
    "image": "/assets/boxes/brown-shredded-paper-eco-friendly-premium-packaging-filler_0.webp",
    "images": [
      "/assets/boxes/brown-shredded-paper-eco-friendly-premium-packaging-filler_0.webp",
      "/assets/boxes/brown-shredded-paper-eco-friendly-premium-packaging-filler_1.webp",
      "/assets/boxes/brown-shredded-paper-eco-friendly-premium-packaging-filler_2.webp",
      "/assets/boxes/brown-shredded-paper-eco-friendly-premium-packaging-filler_3.webp"
    ],
    "price": 150,
    "selling_price": 150,
    "startingAt": 150,
    "mrp": 300,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print Brown Shredded Paper for safe and eco-friendly packaging. Ideal for gift boxes, courier packaging, and e-commerce use. Lightweight and",
    "fullDesc": "Buy AS Print Brown Shredded Paper for safe and eco-friendly packaging. Ideal for gift boxes, courier packaging, and e-commerce use. Lightweight and",
    "tiers": [
      {
        "qty": 200,
        "rate": 150,
        "label": "200 g (₹150)"
      },
      {
        "qty": 500,
        "rate": 276,
        "label": "500 g (₹276)"
      },
      {
        "qty": 1000,
        "rate": 474,
        "label": "1000 g (₹474)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 200,
        "rate": 0.75,
        "label": "200 g (₹150)"
      },
      {
        "qty": 500,
        "rate": 0.55,
        "label": "500 g (₹276)"
      },
      {
        "qty": 1000,
        "rate": 0.47,
        "label": "1000 g (₹474)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "d221ca6a-a5f5-4b1c-b003-905e80d88ba5",
    "slug": "white-shredded-paper-clean-safe-premium-packaging-filler",
    "title": "AS Print White Shredded Paper – Clean, Safe & Premium Packaging Filler",
    "name": "AS Print White Shredded Paper – Clean, Safe & Premium Packaging Filler",
    "category": "paper-bubble-wrap-protection",
    "category_id": "7fea5107-9b4f-4670-8388-1dd614d828d5",
    "categoryLabel": "Paper Bubble Wrap & Honeycomb Rolls",
    "image": "/assets/boxes/white-shredded-paper-clean-safe-premium-packaging-filler_0.webp",
    "images": [
      "/assets/boxes/white-shredded-paper-clean-safe-premium-packaging-filler_0.webp",
      "/assets/boxes/white-shredded-paper-clean-safe-premium-packaging-filler_1.webp",
      "/assets/boxes/white-shredded-paper-clean-safe-premium-packaging-filler_2.webp",
      "/assets/boxes/white-shredded-paper-clean-safe-premium-packaging-filler_3.webp"
    ],
    "price": 170,
    "selling_price": 170,
    "startingAt": 170,
    "mrp": 300,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print White Shredded Paper for clean, safe & eco-friendly packaging. Ideal for gift boxes, courier packaging & e-commerce use. Lightweight,",
    "fullDesc": "Buy AS Print White Shredded Paper for clean, safe & eco-friendly packaging. Ideal for gift boxes, courier packaging & e-commerce use. Lightweight,",
    "tiers": [
      {
        "qty": 200,
        "rate": 170,
        "label": "200 g (₹170)"
      },
      {
        "qty": 500,
        "rate": 305,
        "label": "500 g (₹305)"
      },
      {
        "qty": 1000,
        "rate": 552,
        "label": "1000 g (₹552)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 200,
        "rate": 0.85,
        "label": "200 g (₹170)"
      },
      {
        "qty": 500,
        "rate": 0.61,
        "label": "500 g (₹305)"
      },
      {
        "qty": 1000,
        "rate": 0.55,
        "label": "1000 g (₹552)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "176d9e4b-b87f-40cd-8ef7-ed10e44c5871",
    "slug": "peach-shredded-paper-premium-decorative-protective-packing-solution",
    "title": "AS Print Peach Shredded Paper – Premium Decorative & Protective Packing Solution",
    "name": "AS Print Peach Shredded Paper – Premium Decorative & Protective Packing Solution",
    "category": "paper-bubble-wrap-protection",
    "category_id": "7fea5107-9b4f-4670-8388-1dd614d828d5",
    "categoryLabel": "Paper Bubble Wrap & Honeycomb Rolls",
    "image": "/assets/boxes/peach-shredded-paper-premium-decorative-protective-packing-solution_0.webp",
    "images": [
      "/assets/boxes/peach-shredded-paper-premium-decorative-protective-packing-solution_0.webp",
      "/assets/boxes/peach-shredded-paper-premium-decorative-protective-packing-solution_1.webp",
      "/assets/boxes/peach-shredded-paper-premium-decorative-protective-packing-solution_2.webp",
      "/assets/boxes/peach-shredded-paper-premium-decorative-protective-packing-solution_3.webp"
    ],
    "price": 170,
    "selling_price": 170,
    "startingAt": 170,
    "mrp": 300,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print Peach Shredded Paper for safe and stylish packaging. Ideal for gift boxes, courier boxes & shipping boxes. Lightweight, eco-friendly &",
    "fullDesc": "Buy AS Print Peach Shredded Paper for safe and stylish packaging. Ideal for gift boxes, courier boxes & shipping boxes. Lightweight, eco-friendly &",
    "tiers": [
      {
        "qty": 200,
        "rate": 170,
        "label": "200 g (₹170)"
      },
      {
        "qty": 500,
        "rate": 305,
        "label": "500 g (₹305)"
      },
      {
        "qty": 1000,
        "rate": 552,
        "label": "1000 g (₹552)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 200,
        "rate": 0.85,
        "label": "200 g (₹170)"
      },
      {
        "qty": 500,
        "rate": 0.61,
        "label": "500 g (₹305)"
      },
      {
        "qty": 1000,
        "rate": 0.55,
        "label": "1000 g (₹552)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "7b3a6069-a594-4572-b6aa-472ef1b04cb1",
    "slug": "black-paper-bubble-wrap-15-inch-20m-100m-rolls",
    "title": "Black Paper Bubble Wrap 15-Inch – 20m & 100m Rolls",
    "name": "Black Paper Bubble Wrap 15-Inch – 20m & 100m Rolls",
    "category": "paper-bubble-wrap-protection",
    "category_id": "7fea5107-9b4f-4670-8388-1dd614d828d5",
    "categoryLabel": "Paper Bubble Wrap & Honeycomb Rolls",
    "image": "/assets/boxes/black-paper-bubble-wrap-15-inch-20m-100m-rolls_0.webp",
    "images": [
      "/assets/boxes/black-paper-bubble-wrap-15-inch-20m-100m-rolls_0.webp",
      "/assets/boxes/black-paper-bubble-wrap-15-inch-20m-100m-rolls_1.webp",
      "/assets/boxes/black-paper-bubble-wrap-15-inch-20m-100m-rolls_2.webp",
      "/assets/boxes/black-paper-bubble-wrap-15-inch-20m-100m-rolls_3.webp"
    ],
    "price": 276,
    "selling_price": 276,
    "startingAt": 276,
    "mrp": 600,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop eco-friendly black paper bubble wrap in 15-inch width, available in 20m and 100m rolls for cushioning, wrapping and sustainable packaging.",
    "fullDesc": "Shop eco-friendly black paper bubble wrap in 15-inch width, available in 20m and 100m rolls for cushioning, wrapping and sustainable packaging.",
    "tiers": [
      {
        "qty": 20,
        "rate": 276,
        "label": "20 Meters (₹276)"
      },
      {
        "qty": 100,
        "rate": 943,
        "label": "100 Meters (₹943)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 20,
        "rate": 13.81,
        "label": "20 Meters (₹276)"
      },
      {
        "qty": 100,
        "rate": 9.43,
        "label": "100 Meters (₹943)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "91ef72e3-7648-4e4c-b153-666caa9548c8",
    "slug": "white-paper-bubble-wrap-15-inch-20m-100m-rolls",
    "title": "White Paper Bubble Wrap 15-Inch – 20m & 100m Rolls",
    "name": "White Paper Bubble Wrap 15-Inch – 20m & 100m Rolls",
    "category": "paper-bubble-wrap-protection",
    "category_id": "7fea5107-9b4f-4670-8388-1dd614d828d5",
    "categoryLabel": "Paper Bubble Wrap & Honeycomb Rolls",
    "image": "/assets/boxes/white-paper-bubble-wrap-15-inch-20m-100m-rolls_0.webp",
    "images": [
      "/assets/boxes/white-paper-bubble-wrap-15-inch-20m-100m-rolls_0.webp",
      "/assets/boxes/white-paper-bubble-wrap-15-inch-20m-100m-rolls_1.webp",
      "/assets/boxes/white-paper-bubble-wrap-15-inch-20m-100m-rolls_2.webp",
      "/assets/boxes/white-paper-bubble-wrap-15-inch-20m-100m-rolls_3.webp"
    ],
    "price": 276,
    "selling_price": 276,
    "startingAt": 276,
    "mrp": 600,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop eco-friendly white paper bubble wrap in 15-inch width, available in 20m and 100m rolls for wrapping, cushioning and sustainable product packaging",
    "fullDesc": "Shop eco-friendly white paper bubble wrap in 15-inch width, available in 20m and 100m rolls for wrapping, cushioning and sustainable product packaging",
    "tiers": [
      {
        "qty": 20,
        "rate": 276,
        "label": "20 Meters (₹276)"
      },
      {
        "qty": 100,
        "rate": 943,
        "label": "100 Meters (₹943)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 20,
        "rate": 13.81,
        "label": "20 Meters (₹276)"
      },
      {
        "qty": 100,
        "rate": 9.43,
        "label": "100 Meters (₹943)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "b8c70da6-0b05-4013-abf2-96274d70201f",
    "slug": "brown-eco-friendly-paper-bubble-wrap-15-inch-20m-100m-250m-rolls",
    "title": "Brown Eco-Friendly Paper Bubble Wrap 15-Inch – 20m, 100m & 250m Rolls",
    "name": "Brown Eco-Friendly Paper Bubble Wrap 15-Inch – 20m, 100m & 250m Rolls",
    "category": "paper-bubble-wrap-protection",
    "category_id": "7fea5107-9b4f-4670-8388-1dd614d828d5",
    "categoryLabel": "Paper Bubble Wrap & Honeycomb Rolls",
    "image": "/assets/boxes/brown-eco-friendly-paper-bubble-wrap-15-inch-20m-100m-250m-rolls_0.webp",
    "images": [
      "/assets/boxes/brown-eco-friendly-paper-bubble-wrap-15-inch-20m-100m-250m-rolls_0.webp",
      "/assets/boxes/brown-eco-friendly-paper-bubble-wrap-15-inch-20m-100m-250m-rolls_1.webp",
      "/assets/boxes/brown-eco-friendly-paper-bubble-wrap-15-inch-20m-100m-250m-rolls_2.webp",
      "/assets/boxes/brown-eco-friendly-paper-bubble-wrap-15-inch-20m-100m-250m-rolls_3.webp"
    ],
    "price": 248,
    "selling_price": 248,
    "startingAt": 248,
    "mrp": 428,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop brown eco-friendly paper bubble wrap in 15-inch width, available in 20m, 100m and 250m rolls for wrapping, cushioning and secure product packagin",
    "fullDesc": "Shop brown eco-friendly paper bubble wrap in 15-inch width, available in 20m, 100m and 250m rolls for wrapping, cushioning and secure product packagin",
    "tiers": [
      {
        "qty": 20,
        "rate": 248,
        "label": "20 Meters (₹248)"
      },
      {
        "qty": 100,
        "rate": 960,
        "label": "100 Meters (₹960)"
      },
      {
        "qty": 250,
        "rate": 1760,
        "label": "250 Meters (₹1,760)"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 20,
        "rate": 12.4,
        "label": "20 Meters (₹248)"
      },
      {
        "qty": 100,
        "rate": 9.6,
        "label": "100 Meters (₹960)"
      },
      {
        "qty": 250,
        "rate": 7.04,
        "label": "250 Meters (₹1,760)"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "ee6b422b-e889-4cd6-97a2-bd73e3b3dee7",
    "slug": "5-5-4-inch-printed-pastry-box-for-4-pastries-cupcakes-donuts-desserts-3-ass",
    "title": "5×5×4 Inch Printed Pastry Box for 4 Pastries, Cupcakes, Donuts & Desserts – 3 Assorted Designs, Pack of 50",
    "name": "5×5×4 Inch Printed Pastry Box for 4 Pastries, Cupcakes, Donuts & Desserts – 3 Assorted Designs, Pack of 50",
    "category": "food-packaging",
    "category_id": "7b3306f1-d69c-4a8e-bb64-5953ffb37dfc",
    "categoryLabel": "Food Packaging Boxes & Containers",
    "image": "/assets/boxes/5-5-4-inch-printed-pastry-box-for-4-pastries-cupcakes-donuts-desserts-3-ass_0.webp",
    "images": [
      "/assets/boxes/5-5-4-inch-printed-pastry-box-for-4-pastries-cupcakes-donuts-desserts-3-ass_0.webp",
      "/assets/boxes/5-5-4-inch-printed-pastry-box-for-4-pastries-cupcakes-donuts-desserts-3-ass_1.webp",
      "/assets/boxes/5-5-4-inch-printed-pastry-box-for-4-pastries-cupcakes-donuts-desserts-3-ass_2.webp",
      "/assets/boxes/5-5-4-inch-printed-pastry-box-for-4-pastries-cupcakes-donuts-desserts-3-ass_3.webp"
    ],
    "price": 314,
    "selling_price": 314,
    "startingAt": 314,
    "mrp": 500,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy 5×5×4 inch printed pastry boxes for up to 4 small pastries, cupcakes and desserts. Pack of 50 supplied in a random mix of 3 designs.\n\n---DETAILED_DESCRIPTION---\n\n### 📋 Technical Specifications:\n• Product Name: 5×5×4 Inch Printed Pastry Box for 4 Pastries, Cupcakes, Donuts & Desserts – 3 Assorted Designs, Pack of 50\n• Material: High-GSM Virgin Kraft Paper\n• Stacking Strength: Heavy Duty Load Tested\n• Eco-Friendly: 100% Recyclable & Biodegradable\n• Pan-India Dispatch: Fast Doorstep Delivery\n\n### ⚡ Key Features & Benefits:\n✔ High-strength structural integrity for safe transit.\n✔ Perfect for e-commerce, courier dispatches, and warehouse storage.\n✔ Moisture-resistant exterior liner to prevent carton sagging.\n\n### ❓ Frequently Asked Questions:\nQ: Can I print my company logo on this item?\nA: Yes, custom branding and bulk logo printing are available.\n\nQ: Does the price include GST?\nA: Standard GST invoice with 100% ITC input credit is provided.",
    "fullDesc": "Buy 5×5×4 inch printed pastry boxes for up to 4 small pastries, cupcakes and desserts. Pack of 50 supplied in a random mix of 3 designs.\n\n---DETAILED_DESCRIPTION---\n\n### 📋 Technical Specifications:\n• Product Name: 5×5×4 Inch Printed Pastry Box for 4 Pastries, Cupcakes, Donuts & Desserts – 3 Assorted Designs, Pack of 50\n• Material: High-GSM Virgin Kraft Paper\n• Stacking Strength: Heavy Duty Load Tested\n• Eco-Friendly: 100% Recyclable & Biodegradable\n• Pan-India Dispatch: Fast Doorstep Delivery\n\n### ⚡ Key Features & Benefits:\n✔ High-strength structural integrity for safe transit.\n✔ Perfect for e-commerce, courier dispatches, and warehouse storage.\n✔ Moisture-resistant exterior liner to prevent carton sagging.\n\n### ❓ Frequently Asked Questions:\nQ: Can I print my company logo on this item?\nA: Yes, custom branding and bulk logo printing are available.\n\nQ: Does the price include GST?\nA: Standard GST invoice with 100% ITC input credit is provided.",
    "tiers": [
      {
        "qty": 50,
        "rate": 314,
        "label": "Pack of 50 (₹314)"
      },
      {
        "qty": 100,
        "rate": 590,
        "label": "Pack of 100 (₹590)"
      },
      {
        "qty": 500,
        "rate": 2762,
        "label": "Pack of 500 (₹2,762)"
      },
      {
        "qty": 1000,
        "rate": 5333,
        "label": "Pack of 1000 (₹5,333)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "d1381f94-9127-417b-b87d-f71a2c4f209e",
    "slug": "7-5-4-inch-printed-pastry-box-for-6-pastries-cupcakes-donuts-desserts-3-ass",
    "title": "7 × 5 × 4 Inch Printed Pastry Box for 6 Pastries, Cupcakes, Donuts & Desserts – 3 Assorted Designs, Pack of 50",
    "name": "7 × 5 × 4 Inch Printed Pastry Box for 6 Pastries, Cupcakes, Donuts & Desserts – 3 Assorted Designs, Pack of 50",
    "category": "food-packaging",
    "category_id": "7b3306f1-d69c-4a8e-bb64-5953ffb37dfc",
    "categoryLabel": "Food Packaging Boxes & Containers",
    "image": "/assets/boxes/7-5-4-inch-printed-pastry-box-for-6-pastries-cupcakes-donuts-desserts-3-ass_0.webp",
    "images": [
      "/assets/boxes/7-5-4-inch-printed-pastry-box-for-6-pastries-cupcakes-donuts-desserts-3-ass_0.webp",
      "/assets/boxes/7-5-4-inch-printed-pastry-box-for-6-pastries-cupcakes-donuts-desserts-3-ass_1.webp",
      "/assets/boxes/7-5-4-inch-printed-pastry-box-for-6-pastries-cupcakes-donuts-desserts-3-ass_2.webp",
      "/assets/boxes/7-5-4-inch-printed-pastry-box-for-6-pastries-cupcakes-donuts-desserts-3-ass_3.webp"
    ],
    "price": 362,
    "selling_price": 362,
    "startingAt": 362,
    "mrp": 700,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy 7×5×4 inch printed pastry boxes for approximately 6 pastries, cupcakes and desserts. Pack of 50 in a random mix of 3 colourful designs.",
    "fullDesc": "Buy 7×5×4 inch printed pastry boxes for approximately 6 pastries, cupcakes and desserts. Pack of 50 in a random mix of 3 colourful designs.",
    "tiers": [
      {
        "qty": 50,
        "rate": 362,
        "label": "Pack of 50 (₹362)"
      },
      {
        "qty": 100,
        "rate": 705,
        "label": "Pack of 100 (₹705)"
      },
      {
        "qty": 500,
        "rate": 3333,
        "label": "Pack of 500 (₹3,333)"
      },
      {
        "qty": 1000,
        "rate": 6381,
        "label": "Pack of 1000 (₹6,381)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "ff58c4a4-641d-4c47-bef2-17abf6cbe41a",
    "slug": "4-4-4-inch-printed-pastry-box-for-2-pastries-cupcakes-donuts-desserts-multi",
    "title": "4 × 4 × 4 Inch Printed Pastry Box for 2 Pastries, Cupcakes, Donuts & Desserts - Multicolour Maroon, Pack of 50",
    "name": "4 × 4 × 4 Inch Printed Pastry Box for 2 Pastries, Cupcakes, Donuts & Desserts - Multicolour Maroon, Pack of 50",
    "category": "food-packaging",
    "category_id": "7b3306f1-d69c-4a8e-bb64-5953ffb37dfc",
    "categoryLabel": "Food Packaging Boxes & Containers",
    "image": "/assets/boxes/4-4-4-inch-printed-pastry-box-for-2-pastries-cupcakes-donuts-desserts-multi_0.webp",
    "images": [
      "/assets/boxes/4-4-4-inch-printed-pastry-box-for-2-pastries-cupcakes-donuts-desserts-multi_0.webp",
      "/assets/boxes/4-4-4-inch-printed-pastry-box-for-2-pastries-cupcakes-donuts-desserts-multi_1.webp",
      "/assets/boxes/4-4-4-inch-printed-pastry-box-for-2-pastries-cupcakes-donuts-desserts-multi_2.webp",
      "/assets/boxes/4-4-4-inch-printed-pastry-box-for-2-pastries-cupcakes-donuts-desserts-multi_3.webp"
    ],
    "price": 276,
    "selling_price": 276,
    "startingAt": 276,
    "mrp": 500,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy printed pastry boxes in a pack of 50, each measuring 4 × 4 × 4 inches. Food-grade maroon boxes for two small pastries, cupcakes, donuts and desser",
    "fullDesc": "Buy printed pastry boxes in a pack of 50, each measuring 4 × 4 × 4 inches. Food-grade maroon boxes for two small pastries, cupcakes, donuts and desser",
    "tiers": [
      {
        "qty": 50,
        "rate": 276,
        "label": "Pack of 50 (₹276)"
      },
      {
        "qty": 100,
        "rate": 543,
        "label": "Pack of 100 (₹543)"
      },
      {
        "qty": 500,
        "rate": 2619,
        "label": "Pack of 500 (₹2,619)"
      },
      {
        "qty": 1000,
        "rate": 5143,
        "label": "Pack of 1000 (₹5,143)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "d69457ab-521e-474a-a7dc-65461b809442",
    "slug": "multicolour-printed-corrugated-pizza-box-for-9x9x1-5-inch-pizza-pack-of-50",
    "title": "Multicolour Printed Corrugated Pizza Box for 9x9x1.5-Inch Pizza – Pack of 50",
    "name": "Multicolour Printed Corrugated Pizza Box for 9x9x1.5-Inch Pizza – Pack of 50",
    "category": "food-packaging",
    "category_id": "7b3306f1-d69c-4a8e-bb64-5953ffb37dfc",
    "categoryLabel": "Food Packaging Boxes & Containers",
    "image": "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-9x9x1-5-inch-pizza-pack-of-50_0.webp",
    "images": [
      "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-9x9x1-5-inch-pizza-pack-of-50_0.webp",
      "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-9x9x1-5-inch-pizza-pack-of-50_1.webp",
      "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-9x9x1-5-inch-pizza-pack-of-50_2.webp",
      "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-9x9x1-5-inch-pizza-pack-of-50_3.webp"
    ],
    "price": 524,
    "selling_price": 524,
    "startingAt": 524,
    "mrp": 999,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print Gallery 9×9×1.5 inch 3 Ply Printed Pizza Boxes in a pack of 50. Includes a random mix of three colourful designs, ideal for 9-inch pizzas, takeaway,",
    "fullDesc": "Buy AS Print Gallery 9×9×1.5 inch 3 Ply Printed Pizza Boxes in a pack of 50. Includes a random mix of three colourful designs, ideal for 9-inch pizzas, takeaway,",
    "tiers": [
      {
        "qty": 50,
        "rate": 524,
        "label": "Pack of 50 (₹524)"
      },
      {
        "qty": 100,
        "rate": 1000,
        "label": "Pack of 100 (₹1,000)"
      },
      {
        "qty": 500,
        "rate": 4857,
        "label": "Pack of 500 (₹4,857)"
      },
      {
        "qty": 1000,
        "rate": 9333,
        "label": "Pack of 1000 (₹9,333)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "604c6990-a8b0-4760-948b-74bbf1721995",
    "slug": "multicolour-printed-corrugated-pizza-box-for-7x7x1-5-inch-pizza-pack-of-50",
    "title": "Multicolour Printed Corrugated Pizza Box for 7x7x1.5-Inch Pizza – Pack of 50",
    "name": "Multicolour Printed Corrugated Pizza Box for 7x7x1.5-Inch Pizza – Pack of 50",
    "category": "food-packaging",
    "category_id": "7b3306f1-d69c-4a8e-bb64-5953ffb37dfc",
    "categoryLabel": "Food Packaging Boxes & Containers",
    "image": "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-7x7x1-5-inch-pizza-pack-of-50_0.webp",
    "images": [
      "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-7x7x1-5-inch-pizza-pack-of-50_0.webp",
      "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-7x7x1-5-inch-pizza-pack-of-50_1.webp",
      "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-7x7x1-5-inch-pizza-pack-of-50_2.webp",
      "/assets/boxes/multicolour-printed-corrugated-pizza-box-for-7x7x1-5-inch-pizza-pack-of-50_3.webp"
    ],
    "price": 410,
    "selling_price": 410,
    "startingAt": 410,
    "mrp": 800,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print Gallery 7×7×1.5 inch 3 ply printed pizza boxes in a pack of 50. Includes a random mix of three colourful designs for 7-inch pizzas.",
    "fullDesc": "Buy AS Print Gallery 7×7×1.5 inch 3 ply printed pizza boxes in a pack of 50. Includes a random mix of three colourful designs for 7-inch pizzas.",
    "tiers": [
      {
        "qty": 50,
        "rate": 410,
        "label": "Pack of 50 (₹410)"
      },
      {
        "qty": 100,
        "rate": 760,
        "label": "Pack of 100 (₹760)"
      },
      {
        "qty": 500,
        "rate": 3714,
        "label": "Pack of 500 (₹3,714)"
      },
      {
        "qty": 1000,
        "rate": 7143,
        "label": "Pack of 1000 (₹7,143)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "92457967-5a58-4d90-badb-bc426da37c89",
    "slug": "sandwich-packaging-box-22-16-7-cm-premium-sbs-paper-food-packaging-box",
    "title": "Sandwich Packaging Box (22 × 16 × 7 cm) – Premium SBS Paper Food Packaging Box",
    "name": "Sandwich Packaging Box (22 × 16 × 7 cm) – Premium SBS Paper Food Packaging Box",
    "category": "food-packaging",
    "category_id": "7b3306f1-d69c-4a8e-bb64-5953ffb37dfc",
    "categoryLabel": "Food Packaging Boxes & Containers",
    "image": "/assets/boxes/sandwich-packaging-box-22-16-7-cm-premium-sbs-paper-food-packaging-box_0.webp",
    "images": [
      "/assets/boxes/sandwich-packaging-box-22-16-7-cm-premium-sbs-paper-food-packaging-box_0.webp",
      "/assets/boxes/sandwich-packaging-box-22-16-7-cm-premium-sbs-paper-food-packaging-box_1.webp",
      "/assets/boxes/sandwich-packaging-box-22-16-7-cm-premium-sbs-paper-food-packaging-box_2.webp",
      "/assets/boxes/sandwich-packaging-box-22-16-7-cm-premium-sbs-paper-food-packaging-box_3.webp"
    ],
    "price": 229,
    "selling_price": 229,
    "startingAt": 229,
    "mrp": 499,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy 22×16×7 cm SBS paper sandwich packaging boxes. Ideal for cafés, restaurants, bakeries, takeaway, and food delivery services.",
    "fullDesc": "Buy 22×16×7 cm SBS paper sandwich packaging boxes. Ideal for cafés, restaurants, bakeries, takeaway, and food delivery services.",
    "tiers": [
      {
        "qty": 25,
        "rate": 229,
        "label": "Pack of 25 (₹229)"
      },
      {
        "qty": 50,
        "rate": 452,
        "label": "Pack of 50 (₹452)"
      },
      {
        "qty": 100,
        "rate": 857,
        "label": "Pack of 100 (₹857)"
      },
      {
        "qty": 500,
        "rate": 4190,
        "label": "Pack of 500 (₹4,190)"
      },
      {
        "qty": 1000,
        "rate": 8286,
        "label": "Pack of 1000 (₹8,286)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "34e3eef0-746a-4e84-a1fe-df833150a09f",
    "slug": "burger-packaging-box-4-4-2-75-inch-sbs-paper-food-packaging-box-for-takeawa",
    "title": "Burger Packaging Box (4 × 4 × 2.75 Inch)—SBS Paper Food Packaging Box for Takeaway & Delivery",
    "name": "Burger Packaging Box (4 × 4 × 2.75 Inch)—SBS Paper Food Packaging Box for Takeaway & Delivery",
    "category": "food-packaging",
    "category_id": "7b3306f1-d69c-4a8e-bb64-5953ffb37dfc",
    "categoryLabel": "Food Packaging Boxes & Containers",
    "image": "/assets/boxes/burger-packaging-box-4-4-2-75-inch-sbs-paper-food-packaging-box-for-takeawa_0.webp",
    "images": [
      "/assets/boxes/burger-packaging-box-4-4-2-75-inch-sbs-paper-food-packaging-box-for-takeawa_0.webp",
      "/assets/boxes/burger-packaging-box-4-4-2-75-inch-sbs-paper-food-packaging-box-for-takeawa_1.webp",
      "/assets/boxes/burger-packaging-box-4-4-2-75-inch-sbs-paper-food-packaging-box-for-takeawa_2.webp",
      "/assets/boxes/burger-packaging-box-4-4-2-75-inch-sbs-paper-food-packaging-box-for-takeawa_3.webp"
    ],
    "price": 276,
    "selling_price": 276,
    "startingAt": 276,
    "mrp": 499,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy 4×4×2.75 inch SBS paper burger packaging boxes. Ideal for restaurants, cafés, takeaway, cloud kitchens, and food delivery services.",
    "fullDesc": "Buy 4×4×2.75 inch SBS paper burger packaging boxes. Ideal for restaurants, cafés, takeaway, cloud kitchens, and food delivery services.",
    "tiers": [
      {
        "qty": 50,
        "rate": 276,
        "label": "Pack of 50 (₹276)"
      },
      {
        "qty": 100,
        "rate": 543,
        "label": "Pack of 100 (₹543)"
      },
      {
        "qty": 500,
        "rate": 2619,
        "label": "Pack of 500 (₹2,619)"
      },
      {
        "qty": 1000,
        "rate": 5143,
        "label": "Pack of 1000 (₹5,143)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "25781cba-0536-4c87-b659-87ccf329c049",
    "slug": "purple-shubh-deepawali-4-cavity-rigid-gift-box-with-golden-ribbon-18-16-5-4",
    "title": "Purple Shubh Deepawali 4 Cavity Rigid Gift Box with Golden Ribbon, 18 × 16.5 × 4 cm",
    "name": "Purple Shubh Deepawali 4 Cavity Rigid Gift Box with Golden Ribbon, 18 × 16.5 × 4 cm",
    "category": "rigid-boxes",
    "category_id": "1b305f58-c0f3-4bd7-9ecd-2fe4961e43fd",
    "categoryLabel": "Rigid Luxury Boxes",
    "image": "/assets/boxes/purple-shubh-deepawali-4-cavity-rigid-gift-box-with-golden-ribbon-18-16-5-4_0.webp",
    "images": [
      "/assets/boxes/purple-shubh-deepawali-4-cavity-rigid-gift-box-with-golden-ribbon-18-16-5-4_0.webp",
      "/assets/boxes/purple-shubh-deepawali-4-cavity-rigid-gift-box-with-golden-ribbon-18-16-5-4_1.webp",
      "/assets/boxes/purple-shubh-deepawali-4-cavity-rigid-gift-box-with-golden-ribbon-18-16-5-4_2.webp",
      "/assets/boxes/purple-shubh-deepawali-4-cavity-rigid-gift-box-with-golden-ribbon-18-16-5-4_3.webp"
    ],
    "price": 167,
    "selling_price": 167,
    "startingAt": 167,
    "mrp": 300,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy the AS Print Gallery purple 4 cavity Diwali rigid gift box with removable divider and golden ribbon. Empty Shubh Deepawali box in 18 × 16.5 × 4 cm.",
    "fullDesc": "Buy the AS Print Gallery purple 4 cavity Diwali rigid gift box with removable divider and golden ribbon. Empty Shubh Deepawali box in 18 × 16.5 × 4 cm.",
    "tiers": [
      {
        "qty": 1,
        "rate": 167,
        "label": "Pack of 1 (₹167)"
      },
      {
        "qty": 5,
        "rate": 474,
        "label": "Pack of 5 (₹474)"
      },
      {
        "qty": 20,
        "rate": 1714,
        "label": "Pack of 20 (₹1,714)"
      },
      {
        "qty": 100,
        "rate": 7619,
        "label": "Pack of 100 (₹7,619)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "c26685b7-1256-497b-b69d-7c4f89d75a86",
    "slug": "purple-4-cavity-diwali-rigid-gift-box-size-18-16-5-4-cm-pack-of-1",
    "title": "AS Print Gallery Purple 4 Cavity Diwali Rigid Gift Box Size 18 × 16.5 × 4 cm – Pack of 1",
    "name": "AS Print Gallery Purple 4 Cavity Diwali Rigid Gift Box Size 18 × 16.5 × 4 cm – Pack of 1",
    "category": "rigid-boxes",
    "category_id": "1b305f58-c0f3-4bd7-9ecd-2fe4961e43fd",
    "categoryLabel": "Rigid Luxury Boxes",
    "image": "/assets/boxes/purple-4-cavity-diwali-rigid-gift-box-size-18-16-5-4-cm-pack-of-1_0.webp",
    "images": [
      "/assets/boxes/purple-4-cavity-diwali-rigid-gift-box-size-18-16-5-4-cm-pack-of-1_0.webp",
      "/assets/boxes/purple-4-cavity-diwali-rigid-gift-box-size-18-16-5-4-cm-pack-of-1_1.webp",
      "/assets/boxes/purple-4-cavity-diwali-rigid-gift-box-size-18-16-5-4-cm-pack-of-1_2.webp",
      "/assets/boxes/purple-4-cavity-diwali-rigid-gift-box-size-18-16-5-4-cm-pack-of-1_3.webp"
    ],
    "price": 167,
    "selling_price": 167,
    "startingAt": 167,
    "mrp": 300,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop the AS Print Gallery purple 4-cavity Diwali rigid gift box with removable divider and golden ribbon. Empty festive box in 18 × 16.5 × 4 cm size.",
    "fullDesc": "Shop the AS Print Gallery purple 4-cavity Diwali rigid gift box with removable divider and golden ribbon. Empty festive box in 18 × 16.5 × 4 cm size.",
    "tiers": [
      {
        "qty": 1,
        "rate": 167,
        "label": "Pack of 1 (₹167)"
      },
      {
        "qty": 5,
        "rate": 474,
        "label": "Pack of 5 (₹474)"
      },
      {
        "qty": 20,
        "rate": 1714,
        "label": "Pack of 20 (₹1,714)"
      },
      {
        "qty": 100,
        "rate": 7619,
        "label": "Pack of 100 (₹7,619)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "af599e79-d776-4643-8b5c-be5b18738fea",
    "slug": "yellow-4-cavity-diwali-gift-box-pack-of-1",
    "title": "AS Print Gallery Yellow 4 Cavity Diwali Gift Box – Pack of 1",
    "name": "AS Print Gallery Yellow 4 Cavity Diwali Gift Box – Pack of 1",
    "category": "rigid-boxes",
    "category_id": "1b305f58-c0f3-4bd7-9ecd-2fe4961e43fd",
    "categoryLabel": "Rigid Luxury Boxes",
    "image": "/assets/boxes/yellow-4-cavity-diwali-gift-box-pack-of-1_0.webp",
    "images": [
      "/assets/boxes/yellow-4-cavity-diwali-gift-box-pack-of-1_0.webp",
      "/assets/boxes/yellow-4-cavity-diwali-gift-box-pack-of-1_1.webp",
      "/assets/boxes/yellow-4-cavity-diwali-gift-box-pack-of-1_2.webp",
      "/assets/boxes/yellow-4-cavity-diwali-gift-box-pack-of-1_3.webp"
    ],
    "price": 167,
    "selling_price": 167,
    "startingAt": 167,
    "mrp": 300,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print Gallery yellow 4 cavity Diwali rigid gift box with removable compartments and golden ribbon. Happy Diwali box in 18 × 16.5 × 4 cm size.",
    "fullDesc": "Buy AS Print Gallery yellow 4 cavity Diwali rigid gift box with removable compartments and golden ribbon. Happy Diwali box in 18 × 16.5 × 4 cm size.",
    "tiers": [
      {
        "qty": 1,
        "rate": 167,
        "label": "Pack of 1 (₹167)"
      },
      {
        "qty": 5,
        "rate": 474,
        "label": "Pack of 5 (₹474)"
      },
      {
        "qty": 20,
        "rate": 1714,
        "label": "Pack of 20 (₹1,714)"
      },
      {
        "qty": 100,
        "rate": 7619,
        "label": "Pack of 100 (₹7,619)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "794d9b21-8837-4382-aeb7-8359beea7451",
    "slug": "4-cavity-red-diwali-rigid-gift-box-size-18x16-5x-4-cm-pack-of-1",
    "title": "4 Cavity Red Diwali Rigid Gift Box Size 18X16.5X 4 cm– Pack of 1 | AS Print Gallery",
    "name": "4 Cavity Red Diwali Rigid Gift Box Size 18X16.5X 4 cm– Pack of 1 | AS Print Gallery",
    "category": "rigid-boxes",
    "category_id": "1b305f58-c0f3-4bd7-9ecd-2fe4961e43fd",
    "categoryLabel": "Rigid Luxury Boxes",
    "image": "/assets/boxes/4-cavity-red-diwali-rigid-gift-box-size-18x16-5x-4-cm-pack-of-1_0.webp",
    "images": [
      "/assets/boxes/4-cavity-red-diwali-rigid-gift-box-size-18x16-5x-4-cm-pack-of-1_0.webp",
      "/assets/boxes/4-cavity-red-diwali-rigid-gift-box-size-18x16-5x-4-cm-pack-of-1_1.webp",
      "/assets/boxes/4-cavity-red-diwali-rigid-gift-box-size-18x16-5x-4-cm-pack-of-1_2.webp",
      "/assets/boxes/4-cavity-red-diwali-rigid-gift-box-size-18x16-5x-4-cm-pack-of-1_3.webp"
    ],
    "price": 167,
    "selling_price": 167,
    "startingAt": 167,
    "mrp": 300,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print Gallery 4 cavity Diwali rigid gift box with removable compartments and golden ribbon. Red Happy Diwali box in 18 × 16.5 × 4 cm size.",
    "fullDesc": "Buy AS Print Gallery 4 cavity Diwali rigid gift box with removable compartments and golden ribbon. Red Happy Diwali box in 18 × 16.5 × 4 cm size.",
    "tiers": [
      {
        "qty": 1,
        "rate": 167,
        "label": "Pack of 1 (₹167)"
      },
      {
        "qty": 5,
        "rate": 474,
        "label": "Pack of 5 (₹474)"
      },
      {
        "qty": 20,
        "rate": 1714,
        "label": "Pack of 20 (₹1,714)"
      },
      {
        "qty": 100,
        "rate": 7619,
        "label": "Pack of 100 (₹7,619)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "3ebaa625-3791-4e12-bb61-24409a29c625",
    "slug": "premium-purple-rakhi-gift-box-with-black-ribbon-18-13-7-cm-luxury-rigid-box",
    "title": "AS Print Gallery Premium Purple Rakhi Gift Box with Black Ribbon (18 × 13 × 7 cm) | Luxury Rigid Box for Raksha Bandhan Gifts, Chocolates, Dry Fruits & Gift Hamp",
    "name": "AS Print Gallery Premium Purple Rakhi Gift Box with Black Ribbon (18 × 13 × 7 cm) | Luxury Rigid Box for Raksha Bandhan Gifts, Chocolates, Dry Fruits & Gift Hamp",
    "category": "rigid-boxes",
    "category_id": "1b305f58-c0f3-4bd7-9ecd-2fe4961e43fd",
    "categoryLabel": "Rigid Luxury Boxes",
    "image": "/assets/boxes/premium-purple-rakhi-gift-box-with-black-ribbon-18-13-7-cm-luxury-rigid-box_0.webp",
    "images": [
      "/assets/boxes/premium-purple-rakhi-gift-box-with-black-ribbon-18-13-7-cm-luxury-rigid-box_0.webp",
      "/assets/boxes/premium-purple-rakhi-gift-box-with-black-ribbon-18-13-7-cm-luxury-rigid-box_1.webp",
      "/assets/boxes/premium-purple-rakhi-gift-box-with-black-ribbon-18-13-7-cm-luxury-rigid-box_2.webp",
      "/assets/boxes/premium-purple-rakhi-gift-box-with-black-ribbon-18-13-7-cm-luxury-rigid-box_3.webp"
    ],
    "price": 190,
    "selling_price": 190,
    "startingAt": 190,
    "mrp": 500,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy the Premium Purple Rakhi Gift Box with Ribbon (18 × 13 × 7 cm) from AS Print Gallery. Ideal for Rakhi, chocolates, dry fruits, sweets, jewellery, festi",
    "fullDesc": "Buy the Premium Purple Rakhi Gift Box with Ribbon (18 × 13 × 7 cm) from AS Print Gallery. Ideal for Rakhi, chocolates, dry fruits, sweets, jewellery, festi",
    "tiers": [
      {
        "qty": 1,
        "rate": 190,
        "label": "Pack of 1 (₹190)"
      },
      {
        "qty": 5,
        "rate": 762,
        "label": "Pack of 5 (₹762)"
      },
      {
        "qty": 20,
        "rate": 2952,
        "label": "Pack of 20 (₹2,952)"
      },
      {
        "qty": 100,
        "rate": 14286,
        "label": "Pack of 100 (₹14,286)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "26ca57be-9102-4559-89b5-6937460bc72d",
    "slug": "premium-yellow-rakhi-gift-box-with-golden-ribbon-18-13-7-cm-luxury-rigid-bo",
    "title": "Premium Yellow Rakhi Gift Box with Golden Ribbon (18 × 13 × 7 cm) | Luxury Rigid Box for Raksha Bandhan Gifts, Chocolates, Dry Fruits & Gift Hampers",
    "name": "Premium Yellow Rakhi Gift Box with Golden Ribbon (18 × 13 × 7 cm) | Luxury Rigid Box for Raksha Bandhan Gifts, Chocolates, Dry Fruits & Gift Hampers",
    "category": "rigid-boxes",
    "category_id": "1b305f58-c0f3-4bd7-9ecd-2fe4961e43fd",
    "categoryLabel": "Rigid Luxury Boxes",
    "image": "/assets/boxes/premium-yellow-rakhi-gift-box-with-golden-ribbon-18-13-7-cm-luxury-rigid-bo_0.webp",
    "images": [
      "/assets/boxes/premium-yellow-rakhi-gift-box-with-golden-ribbon-18-13-7-cm-luxury-rigid-bo_0.webp",
      "/assets/boxes/premium-yellow-rakhi-gift-box-with-golden-ribbon-18-13-7-cm-luxury-rigid-bo_1.webp",
      "/assets/boxes/premium-yellow-rakhi-gift-box-with-golden-ribbon-18-13-7-cm-luxury-rigid-bo_2.webp",
      "/assets/boxes/premium-yellow-rakhi-gift-box-with-golden-ribbon-18-13-7-cm-luxury-rigid-bo_3.webp"
    ],
    "price": 190,
    "selling_price": 190,
    "startingAt": 190,
    "mrp": 500,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy the Premium Rakhi Gift Box with Ribbon (18 × 13 × 7 cm) from AS Print Gallery. Perfect for Rakhi, chocolates, dry fruits, sweets, jewellery, festive ha",
    "fullDesc": "Buy the Premium Rakhi Gift Box with Ribbon (18 × 13 × 7 cm) from AS Print Gallery. Perfect for Rakhi, chocolates, dry fruits, sweets, jewellery, festive ha",
    "tiers": [
      {
        "qty": 1,
        "rate": 190,
        "label": "Pack of 1 (₹190)"
      },
      {
        "qty": 5,
        "rate": 762,
        "label": "Pack of 5 (₹762)"
      },
      {
        "qty": 20,
        "rate": 2952,
        "label": "Pack of 20 (₹2,952)"
      },
      {
        "qty": 100,
        "rate": 14286,
        "label": "Pack of 100 (₹14,286)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "8cd6055e-a798-417b-9284-aa5b63834425",
    "slug": "premium-red-foldable-gift-box-with-ribbon-luxury-rigid-box-for-gift-hampers",
    "title": "AS Print Gallery Premium Red Foldable Gift Box with Ribbon | Luxury Rigid Box for Gift Hampers, Weddings & Corporate Gifting (23 × 16 × 10 cm)",
    "name": "AS Print Gallery Premium Red Foldable Gift Box with Ribbon | Luxury Rigid Box for Gift Hampers, Weddings & Corporate Gifting (23 × 16 × 10 cm)",
    "category": "rigid-boxes",
    "category_id": "1b305f58-c0f3-4bd7-9ecd-2fe4961e43fd",
    "categoryLabel": "Rigid Luxury Boxes",
    "image": "/assets/boxes/premium-red-foldable-gift-box-with-ribbon-luxury-rigid-box-for-gift-hampers_0.webp",
    "images": [
      "/assets/boxes/premium-red-foldable-gift-box-with-ribbon-luxury-rigid-box-for-gift-hampers_0.webp",
      "/assets/boxes/premium-red-foldable-gift-box-with-ribbon-luxury-rigid-box-for-gift-hampers_1.webp",
      "/assets/boxes/premium-red-foldable-gift-box-with-ribbon-luxury-rigid-box-for-gift-hampers_2.webp",
      "/assets/boxes/premium-red-foldable-gift-box-with-ribbon-luxury-rigid-box-for-gift-hampers_3.webp"
    ],
    "price": 236,
    "selling_price": 236,
    "startingAt": 236,
    "mrp": 500,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy premium red foldable gift boxes with ribbon from AS Print Gallery. Ideal for gift hampers, weddings, corporate gifting, festivals, chocolates, dry fruits, an",
    "fullDesc": "Buy premium red foldable gift boxes with ribbon from AS Print Gallery. Ideal for gift hampers, weddings, corporate gifting, festivals, chocolates, dry fruits, an",
    "tiers": [
      {
        "qty": 1,
        "rate": 236,
        "label": "Pack of 1 (₹236)"
      },
      {
        "qty": 5,
        "rate": 951,
        "label": "Pack of 5 (₹951)"
      },
      {
        "qty": 20,
        "rate": 3714,
        "label": "Pack of 20 (₹3,714)"
      },
      {
        "qty": 100,
        "rate": 17619,
        "label": "Pack of 100 (₹17,619)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "18dbacae-2967-4ba8-8355-71afda46bd71",
    "slug": "white-flap-box-4x2-5x1-5-inch-white-flap-corrugated-box-3-ply-mini-hamper-p",
    "title": "4x2.5x1.5 Inch White Flap Corrugated Box | 3 Ply Mini hamper Packaging Box for Jewelry, Gifts & E-commerce Shipping",
    "name": "4x2.5x1.5 Inch White Flap Corrugated Box | 3 Ply Mini hamper Packaging Box for Jewelry, Gifts & E-commerce Shipping",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/white-flap-box-4x2-5x1-5-inch-white-flap-corrugated-box-3-ply-mini-hamper-p_0.webp",
    "images": [
      "/assets/boxes/white-flap-box-4x2-5x1-5-inch-white-flap-corrugated-box-3-ply-mini-hamper-p_0.webp",
      "/assets/boxes/white-flap-box-4x2-5x1-5-inch-white-flap-corrugated-box-3-ply-mini-hamper-p_1.webp",
      "/assets/boxes/white-flap-box-4x2-5x1-5-inch-white-flap-corrugated-box-3-ply-mini-hamper-p_2.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 560,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy 4x2.5x1.5 inch corrugated White flap box for jewelry, gifts & e-commerce packaging. Strong, lightweight & budget-friendly packaging solution by Gu",
    "fullDesc": "Buy 4x2.5x1.5 inch corrugated White flap box for jewelry, gifts & e-commerce packaging. Strong, lightweight & budget-friendly packaging solution by Gu",
    "tiers": [
      {
        "qty": 50,
        "rate": 284,
        "label": "Pack of 50 (₹284)"
      },
      {
        "qty": 100,
        "rate": 560,
        "label": "Pack of 100 (₹560)"
      },
      {
        "qty": 500,
        "rate": 2619,
        "label": "Pack of 500 (₹2,619)"
      },
      {
        "qty": 1000,
        "rate": 4952,
        "label": "Pack of 1000 (₹4,952)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": true,
    "flag_best_seller": true
  },
  {
    "id": "f77c43af-effc-42db-8cb6-c9659be1604b",
    "slug": "white-flap-box-3-ply-white-flap-corrugated-box-14x9x3-inch-for-ecommerce",
    "title": "3 Ply White Flap Corrugated Box 14x9x3 Inch for Ecommerce",
    "name": "3 Ply White Flap Corrugated Box 14x9x3 Inch for Ecommerce",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-14x9x3-inch-for-ecommerce_0.webp",
    "images": [
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-14x9x3-inch-for-ecommerce_0.webp",
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-14x9x3-inch-for-ecommerce_1.webp",
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-14x9x3-inch-for-ecommerce_2.webp"
    ],
    "price": 398,
    "selling_price": 398,
    "startingAt": 398,
    "mrp": 499,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop 14x9x3 inch 3 ply white flap corrugated boxes online. Perfect for premium packaging of apparel, gifts, cosmetics, and e-commerce products.",
    "fullDesc": "Shop 14x9x3 inch 3 ply white flap corrugated boxes online. Perfect for premium packaging of apparel, gifts, cosmetics, and e-commerce products.",
    "tiers": [
      {
        "qty": 10,
        "rate": 398,
        "label": "Pack of 10 (₹398)"
      },
      {
        "qty": 20,
        "rate": 790,
        "label": "Pack of 20 (₹790)"
      },
      {
        "qty": 40,
        "rate": 1550,
        "label": "Pack of 40 (₹1,550)"
      },
      {
        "qty": 100,
        "rate": 3850,
        "label": "Pack of 100 (₹3,850)"
      },
      {
        "qty": 500,
        "rate": 18800,
        "label": "Pack of 500 (₹18,800)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "74c7e89f-f28a-4d8b-9131-85df21828ce1",
    "slug": "white-mug-packaging-box-5-3-5-4-inch-3-ply-corrugated-cardboard-flap-box-fo",
    "title": "White Mug Packaging Box 5×3.5×4 Inch | 3 Ply Corrugated Cardboard Flap Box for Safe Mug Shipping",
    "name": "White Mug Packaging Box 5×3.5×4 Inch | 3 Ply Corrugated Cardboard Flap Box for Safe Mug Shipping",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/white-mug-packaging-box-5-3-5-4-inch-3-ply-corrugated-cardboard-flap-box-fo_0.webp",
    "images": [
      "/assets/boxes/white-mug-packaging-box-5-3-5-4-inch-3-ply-corrugated-cardboard-flap-box-fo_0.webp",
      "/assets/boxes/white-mug-packaging-box-5-3-5-4-inch-3-ply-corrugated-cardboard-flap-box-fo_1.webp",
      "/assets/boxes/white-mug-packaging-box-5-3-5-4-inch-3-ply-corrugated-cardboard-flap-box-fo_2.webp"
    ],
    "price": 331,
    "selling_price": 331,
    "startingAt": 331,
    "mrp": 448,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy white mug packaging box made from strong 3 ply corrugated cardboard. Secure 5×3.5×4 inch flap box with bottom interlock, ideal for mug shipping, g",
    "fullDesc": "Buy white mug packaging box made from strong 3 ply corrugated cardboard. Secure 5×3.5×4 inch flap box with bottom interlock, ideal for mug shipping, g",
    "tiers": [
      {
        "qty": 50,
        "rate": 331,
        "label": "Pack of 50 (₹331)"
      },
      {
        "qty": 100,
        "rate": 617,
        "label": "Pack of 100 (₹617)"
      },
      {
        "qty": 500,
        "rate": 2857,
        "label": "Pack of 500 (₹2,857)"
      },
      {
        "qty": 1000,
        "rate": 5333,
        "label": "Pack of 1000 (₹5,333)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "0e03cebe-2ec4-42fa-b7a3-2a3f87b61a7c",
    "slug": "white-flap-box-3-ply-white-flap-corrugated-box-size-7x5-5x2-inch-i-premium",
    "title": "3 Ply White Flap Corrugated Box – Size 7x5.5x2 Inch I Premium Corrugated Box for Shipping Gifts, Cosmetics & More",
    "name": "3 Ply White Flap Corrugated Box – Size 7x5.5x2 Inch I Premium Corrugated Box for Shipping Gifts, Cosmetics & More",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x5-5x2-inch-i-premium_0.webp",
    "images": [
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x5-5x2-inch-i-premium_0.webp",
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x5-5x2-inch-i-premium_1.webp",
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x5-5x2-inch-i-premium_2.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 566,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Order a 7x5.5x2 inch White flap corrugated box online. Ideal for gifts, skin care, jewelry & more. Durable, eco-friendly, and perfect for small produc",
    "fullDesc": "Order a 7x5.5x2 inch White flap corrugated box online. Ideal for gifts, skin care, jewelry & more. Durable, eco-friendly, and perfect for small produc",
    "tiers": [
      {
        "qty": 25,
        "rate": 284,
        "label": "Pack of 25 (₹284)"
      },
      {
        "qty": 50,
        "rate": 560,
        "label": "Pack of 50 (₹560)"
      },
      {
        "qty": 100,
        "rate": 1098,
        "label": "Pack of 100 (₹1,098)"
      },
      {
        "qty": 500,
        "rate": 5400,
        "label": "Pack of 500 (₹5,400)"
      },
      {
        "qty": 1000,
        "rate": 10600,
        "label": "Pack of 1000 (₹10,600)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "55930bfe-03a1-408c-b890-1e8cba36abfb",
    "slug": "white-flap-box-3-ply-white-flap-corrugated-box-size-6x5x1-5-inch-multipurpo",
    "title": "3 Ply White Flap Corrugated Box – Size 6x5x1.5 Inch | Multipurpose White Corrugated Box for Small Item Packaging",
    "name": "3 Ply White Flap Corrugated Box – Size 6x5x1.5 Inch | Multipurpose White Corrugated Box for Small Item Packaging",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_0.webp",
    "images": [
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_0.webp",
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_1.webp",
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_2.webp"
    ],
    "price": 522,
    "selling_price": 522,
    "startingAt": 522,
    "mrp": 1040,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Get 6x5x1.5 inch White flap corrugated boxes for packaging gifts, soaps, accessories, and cosmetics. Eco-friendly, foldable, and strong – available at",
    "fullDesc": "Get 6x5x1.5 inch White flap corrugated boxes for packaging gifts, soaps, accessories, and cosmetics. Eco-friendly, foldable, and strong – available at",
    "tiers": [
      {
        "qty": 50,
        "rate": 522,
        "label": "Pack of 50 (₹522)"
      },
      {
        "qty": 100,
        "rate": 980,
        "label": "Pack of 100 (₹980)"
      },
      {
        "qty": 500,
        "rate": 4800,
        "label": "Pack of 500 (₹4,800)"
      },
      {
        "qty": 1000,
        "rate": 9500,
        "label": "Pack of 1000 (₹9,500)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "4b7972fa-cff7-44eb-ad4a-526791f8fec2",
    "slug": "3-ply-white-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag",
    "title": "3 Ply White Corrugated Flap Box Size 4.5x3x1 Inch | Jewellery And Gift Packaging box",
    "name": "3 Ply White Corrugated Flap Box Size 4.5x3x1 Inch | Jewellery And Gift Packaging box",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/3-ply-white-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_0.webp",
    "images": [
      "/assets/boxes/3-ply-white-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_0.webp",
      "/assets/boxes/3-ply-white-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_1.webp",
      "/assets/boxes/3-ply-white-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_2.webp"
    ],
    "price": 427,
    "selling_price": 427,
    "startingAt": 427,
    "mrp": 850,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Durable 3 Ply White Flap Box 4.5x3x1 Inch—eco-friendly & customizable. Free shipping on 1000+ pieces. Upgrade your packaging with AS Print Gallery.com.",
    "fullDesc": "Durable 3 Ply White Flap Box 4.5x3x1 Inch—eco-friendly & customizable. Free shipping on 1000+ pieces. Upgrade your packaging with AS Print Gallery.com.",
    "tiers": [
      {
        "qty": 100,
        "rate": 427,
        "label": "Pack of 100 (₹427)"
      },
      {
        "qty": 500,
        "rate": 2048,
        "label": "Pack of 500 (₹2,048)"
      },
      {
        "qty": 1000,
        "rate": 3905,
        "label": "Pack of 1000 (₹3,905)"
      },
      {
        "qty": 2000,
        "rate": 7524,
        "label": "Pack of 2000 (₹7,524)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "d61be940-977e-4c44-a60d-2cc67a3103da",
    "slug": "3ply-white-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busine",
    "title": "3Ply White Flap Box 4x4x2 Inch-Ultimate Packaging Solution for Small Businesses",
    "name": "3Ply White Flap Box 4x4x2 Inch-Ultimate Packaging Solution for Small Businesses",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/3ply-white-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busine_0.webp",
    "images": [
      "/assets/boxes/3ply-white-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busine_0.webp",
      "/assets/boxes/3ply-white-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busine_1.webp",
      "/assets/boxes/3ply-white-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busine_2.webp"
    ],
    "price": 202,
    "selling_price": 202,
    "startingAt": 202,
    "mrp": 312,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy a high-quality 4x4x2 inch White flap corrugated box online – perfect for lightweight items like gifts, cosmetics, jewelry, and small accessories.",
    "fullDesc": "Buy a high-quality 4x4x2 inch White flap corrugated box online – perfect for lightweight items like gifts, cosmetics, jewelry, and small accessories.",
    "tiers": [
      {
        "qty": 25,
        "rate": 202,
        "label": "Pack of 25 (₹202)"
      },
      {
        "qty": 50,
        "rate": 390,
        "label": "Pack of 50 (₹390)"
      },
      {
        "qty": 100,
        "rate": 780,
        "label": "Pack of 100 (₹780)"
      },
      {
        "qty": 500,
        "rate": 3850,
        "label": "Pack of 500 (₹3,850)"
      },
      {
        "qty": 1000,
        "rate": 7700,
        "label": "Pack of 1000 (₹7,700)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "5f36ebef-cebc-4e2d-815c-40b9b3f84a11",
    "slug": "3-ply-white-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c",
    "title": "3 Ply White Corrugated Flap Box Size 14x13x2.5 Inch I Large Kraft Box for Clothing, Calendars, and Flat Product Shipping",
    "name": "3 Ply White Corrugated Flap Box Size 14x13x2.5 Inch I Large Kraft Box for Clothing, Calendars, and Flat Product Shipping",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/3-ply-white-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_0.webp",
    "images": [
      "/assets/boxes/3-ply-white-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_0.webp",
      "/assets/boxes/3-ply-white-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_1.webp",
      "/assets/boxes/3-ply-white-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_2.webp"
    ],
    "price": 408,
    "selling_price": 408,
    "startingAt": 408,
    "mrp": 800,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy 14x13x2.5-inch white flap boxes online at AS Print Gallery.com – perfect for wide products like apparel, books, and corporate gifting. Durable 3 ply corrugat",
    "fullDesc": "Buy 14x13x2.5-inch white flap boxes online at AS Print Gallery.com – perfect for wide products like apparel, books, and corporate gifting. Durable 3 ply corrugat",
    "tiers": [
      {
        "qty": 10,
        "rate": 408,
        "label": "Pack of 10 (₹408)"
      },
      {
        "qty": 20,
        "rate": 798,
        "label": "Pack of 20 (₹798)"
      },
      {
        "qty": 40,
        "rate": 1560,
        "label": "Pack of 40 (₹1,560)"
      },
      {
        "qty": 100,
        "rate": 3850,
        "label": "Pack of 100 (₹3,850)"
      },
      {
        "qty": 500,
        "rate": 19000,
        "label": "Pack of 500 (₹19,000)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "648d7cb3-b921-4524-9c67-b1377d8cdcdd",
    "slug": "3-ply-white-flap-box-size-13x9x2-inches-shipping-box-courier-box",
    "title": "3 ply White Flap Box Size 13X9X2 inches, Shipping Box Courier Box",
    "name": "3 ply White Flap Box Size 13X9X2 inches, Shipping Box Courier Box",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/3-ply-white-flap-box-size-13x9x2-inches-shipping-box-courier-box_1.webp",
    "images": [
      "/assets/boxes/3-ply-white-flap-box-size-13x9x2-inches-shipping-box-courier-box_1.webp",
      "/assets/boxes/3-ply-white-flap-box-size-13x9x2-inches-shipping-box-courier-box_0.webp",
      "/assets/boxes/3-ply-white-flap-box-size-13x9x2-inches-shipping-box-courier-box_2.webp"
    ],
    "price": 414,
    "selling_price": 414,
    "startingAt": 414,
    "mrp": 800,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Order a 13x9x2-inch white corrugated flap box online at AS Print Gallery.com. Ideal for books, certificates, clothing & flat gift kits. Durable 3 ply kraft box a",
    "fullDesc": "Order a 13x9x2-inch white corrugated flap box online at AS Print Gallery.com. Ideal for books, certificates, clothing & flat gift kits. Durable 3 ply kraft box a",
    "tiers": [
      {
        "qty": 20,
        "rate": 414,
        "label": "Pack of 20 (₹414)"
      },
      {
        "qty": 40,
        "rate": 826,
        "label": "Pack of 40 (₹826)"
      },
      {
        "qty": 60,
        "rate": 1230,
        "label": "Pack of 60 (₹1,230)"
      },
      {
        "qty": 500,
        "rate": 10200,
        "label": "Pack of 500 (₹10,200)"
      },
      {
        "qty": 1000,
        "rate": 19999,
        "label": "Pack of 1000 (₹19,999)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "a9c4ca20-244a-44ca-bff3-741c078b27fd",
    "slug": "white-flap-box-3-ply-white-flap-corrugated-box-size-7x7x2-inch-i-premium-co",
    "title": "3 Ply White Flap Corrugated Box – Size 7x7x2 Inch I Premium Corrugated Kraft Box for Gift Sets, Hampers & Fragile Items",
    "name": "3 Ply White Flap Corrugated Box – Size 7x7x2 Inch I Premium Corrugated Kraft Box for Gift Sets, Hampers & Fragile Items",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x7x2-inch-i-premium-co_0.webp",
    "images": [
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x7x2-inch-i-premium-co_0.webp",
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x7x2-inch-i-premium-co_1.webp",
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-7x7x2-inch-i-premium-co_2.webp"
    ],
    "price": 312,
    "selling_price": 312,
    "startingAt": 312,
    "mrp": 600,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop a 7x7x2-inch White flap box online. Ideal for curated gift boxes, skincare kits, chocolates, soaps & more. Durable 3 ply kraft corrugated box.",
    "fullDesc": "Shop a 7x7x2-inch White flap box online. Ideal for curated gift boxes, skincare kits, chocolates, soaps & more. Durable 3 ply kraft corrugated box.",
    "tiers": [
      {
        "qty": 25,
        "rate": 312,
        "label": "Pack of 25 (₹312)"
      },
      {
        "qty": 50,
        "rate": 598,
        "label": "Pack of 50 (₹598)"
      },
      {
        "qty": 100,
        "rate": 1148,
        "label": "Pack of 100 (₹1,148)"
      },
      {
        "qty": 500,
        "rate": 5700,
        "label": "Pack of 500 (₹5,700)"
      },
      {
        "qty": 1000,
        "rate": 11200,
        "label": "Pack of 1000 (₹11,200)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "c1f412bd-360a-4454-97e2-0f3d5ad9c156",
    "slug": "white-flap-box-3-ply-white-flap-corrugated-box-6x4x2-inch-for-small-items",
    "title": "3 Ply White Flap Corrugated Box 6x4x2 Inch for Small Items",
    "name": "3 Ply White Flap Corrugated Box 6x4x2 Inch for Small Items",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-6x4x2-inch-for-small-items_0.webp",
    "images": [
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-6x4x2-inch-for-small-items_0.webp",
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-6x4x2-inch-for-small-items_1.webp",
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-6x4x2-inch-for-small-items_2.webp"
    ],
    "price": 522,
    "selling_price": 522,
    "startingAt": 522,
    "mrp": 1040,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop premium 6x4x2 inch white flap corrugated boxes for packaging soaps, accessories, cosmetics, and small gifts. Lightweight, strong, and eco-friendl",
    "fullDesc": "Shop premium 6x4x2 inch white flap corrugated boxes for packaging soaps, accessories, cosmetics, and small gifts. Lightweight, strong, and eco-friendl",
    "tiers": [
      {
        "qty": 50,
        "rate": 522,
        "label": "Pack of 50 (₹522)"
      },
      {
        "qty": 100,
        "rate": 980,
        "label": "Pack of 100 (₹980)"
      },
      {
        "qty": 500,
        "rate": 4800,
        "label": "Pack of 500 (₹4,800)"
      },
      {
        "qty": 1000,
        "rate": 9500,
        "label": "Pack of 1000 (₹9,500)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "c5c00406-52f3-4426-8cbc-1059b6b9012d",
    "slug": "packaging-box-5x5x2-inch-white-flap-box-mini-corrugated-packaging-for-jewel",
    "title": "AS Print Packaging Box 5x5x2 Inch White Flap Box – Mini Corrugated Packaging for Jewelry, Gifts & E-commerce Orders",
    "name": "AS Print Packaging Box 5x5x2 Inch White Flap Box – Mini Corrugated Packaging for Jewelry, Gifts & E-commerce Orders",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/packaging-box-5x5x2-inch-white-flap-box-mini-corrugated-packaging-for-jewel_0.webp",
    "images": [
      "/assets/boxes/packaging-box-5x5x2-inch-white-flap-box-mini-corrugated-packaging-for-jewel_0.webp",
      "/assets/boxes/packaging-box-5x5x2-inch-white-flap-box-mini-corrugated-packaging-for-jewel_1.webp",
      "/assets/boxes/packaging-box-5x5x2-inch-white-flap-box-mini-corrugated-packaging-for-jewel_2.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 560,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Order 5x5x2-inch white flap boxes online – perfect for packaging jewelry, gifts, cosmetics, and lightweight items. Ideal for online sellers and small",
    "fullDesc": "Order 5x5x2-inch white flap boxes online – perfect for packaging jewelry, gifts, cosmetics, and lightweight items. Ideal for online sellers and small",
    "tiers": [
      {
        "qty": 25,
        "rate": 284,
        "label": "Pack of 25 (₹284)"
      },
      {
        "qty": 50,
        "rate": 549,
        "label": "Pack of 50 (₹549)"
      },
      {
        "qty": 100,
        "rate": 1048,
        "label": "Pack of 100 (₹1,048)"
      },
      {
        "qty": 500,
        "rate": 4999,
        "label": "Pack of 500 (₹4,999)"
      },
      {
        "qty": 1000,
        "rate": 9800,
        "label": "Pack of 1000 (₹9,800)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "26517c97-3042-4a1e-8080-a8c917e93577",
    "slug": "white-flap-box-3-ply-white-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi",
    "title": "3 Ply White Flap Corrugated Box – Size 4x4x1.5 Inch | Perfect Mini Packaging Box for Secure & Stylish Shipping",
    "name": "3 Ply White Flap Corrugated Box – Size 4x4x1.5 Inch | Perfect Mini Packaging Box for Secure & Stylish Shipping",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_0.webp",
    "images": [
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_0.webp",
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_1.webp",
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_2.webp"
    ],
    "price": 379,
    "selling_price": 379,
    "startingAt": 379,
    "mrp": 740,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop 4x4x1.5 inch 3 ply white flap corrugated boxes online. They are ideal for lightweight, delicate items like jewelry, accessories, and tech gadgets",
    "fullDesc": "Shop 4x4x1.5 inch 3 ply white flap corrugated boxes online. They are ideal for lightweight, delicate items like jewelry, accessories, and tech gadgets",
    "tiers": [
      {
        "qty": 50,
        "rate": 379,
        "label": "Pack of 50 (₹379)"
      },
      {
        "qty": 100,
        "rate": 712,
        "label": "Pack of 100 (₹712)"
      },
      {
        "qty": 500,
        "rate": 3429,
        "label": "Pack of 500 (₹3,429)"
      },
      {
        "qty": 1000,
        "rate": 6667,
        "label": "Pack of 1000 (₹6,667)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "c85be0ce-ff66-4252-9698-5a52da2af9b7",
    "slug": "white-flap-box-3-ply-white-flap-corrugated-box-size-9x6x3-inch-i-premium-co",
    "title": "3 Ply White Flap Corrugated Box – Size 9x6x3 Inch I Premium Corrugated Packaging for Gifts, Soaps, Ecommerce & Bulk Orders",
    "name": "3 Ply White Flap Corrugated Box – Size 9x6x3 Inch I Premium Corrugated Packaging for Gifts, Soaps, Ecommerce & Bulk Orders",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-9x6x3-inch-i-premium-co_0.webp",
    "images": [
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-9x6x3-inch-i-premium-co_0.webp",
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-9x6x3-inch-i-premium-co_1.webp",
      "/assets/boxes/white-flap-box-3-ply-white-flap-corrugated-box-size-9x6x3-inch-i-premium-co_2.webp"
    ],
    "price": 408,
    "selling_price": 408,
    "startingAt": 408,
    "mrp": 800,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy a 9x6x3-inch White flap box online. 3ply corrugated kraft box perfect for D2C shipping, hampers, gift boxes, cosmetics & branding.",
    "fullDesc": "Buy a 9x6x3-inch White flap box online. 3ply corrugated kraft box perfect for D2C shipping, hampers, gift boxes, cosmetics & branding.",
    "tiers": [
      {
        "qty": 20,
        "rate": 408,
        "label": "Pack of 20 (₹408)"
      },
      {
        "qty": 100,
        "rate": 1999,
        "label": "Pack of 100 (₹1,999)"
      },
      {
        "qty": 500,
        "rate": 9900,
        "label": "Pack of 500 (₹9,900)"
      },
      {
        "qty": 1000,
        "rate": 18800,
        "label": "Pack of 1000 (₹18,800)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "7cc86995-ba59-4c6c-8b3c-0ceef9546c0c",
    "slug": "3-ply-white-corrugated-flap-box-size-8x4x2-inch-stylish-corrugated-box-for",
    "title": "3 Ply White Corrugated Flap Box Size 8x4x2 Inch | Stylish Corrugated Box for Cosmetics, Electronics & Gifts",
    "name": "3 Ply White Corrugated Flap Box Size 8x4x2 Inch | Stylish Corrugated Box for Cosmetics, Electronics & Gifts",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/3-ply-white-corrugated-flap-box-size-8x4x2-inch-stylish-corrugated-box-for_0.webp",
    "images": [
      "/assets/boxes/3-ply-white-corrugated-flap-box-size-8x4x2-inch-stylish-corrugated-box-for_0.webp",
      "/assets/boxes/3-ply-white-corrugated-flap-box-size-8x4x2-inch-stylish-corrugated-box-for_1.webp",
      "/assets/boxes/3-ply-white-corrugated-flap-box-size-8x4x2-inch-stylish-corrugated-box-for_2.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 600,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Order 8x4x2 inch white corrugated flap box online for cosmetics, retail gifts, and premium packaging. Eco-friendly, customizable, and ideal for stylis",
    "fullDesc": "Order 8x4x2 inch white corrugated flap box online for cosmetics, retail gifts, and premium packaging. Eco-friendly, customizable, and ideal for stylis",
    "tiers": [
      {
        "qty": 25,
        "rate": 284,
        "label": "Pack of 25 (₹284)"
      },
      {
        "qty": 100,
        "rate": 1046,
        "label": "Pack of 100 (₹1,046)"
      },
      {
        "qty": 500,
        "rate": 5200,
        "label": "Pack of 500 (₹5,200)"
      },
      {
        "qty": 1000,
        "rate": 10200,
        "label": "Pack of 1000 (₹10,200)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "ca01fc2e-5a86-47d4-83b1-8a51688c89a4",
    "slug": "3-ply-white-corrugated-flap-box-10x7x3-5-inch-for-gifts",
    "title": "3 Ply White Corrugated Flap Box 10x7x3.5 Inch for Gifts",
    "name": "3 Ply White Corrugated Flap Box 10x7x3.5 Inch for Gifts",
    "category": "white-flap-box",
    "category_id": "185d510c-7e28-42e5-9b45-2e4d5fa0599f",
    "categoryLabel": "White Flap Corrugated Boxes",
    "image": "/assets/boxes/3-ply-white-corrugated-flap-box-10x7x3-5-inch-for-gifts_0.webp",
    "images": [
      "/assets/boxes/3-ply-white-corrugated-flap-box-10x7x3-5-inch-for-gifts_0.webp",
      "/assets/boxes/3-ply-white-corrugated-flap-box-10x7x3-5-inch-for-gifts_1.webp",
      "/assets/boxes/3-ply-white-corrugated-flap-box-10x7x3-5-inch-for-gifts_2.webp"
    ],
    "price": 236,
    "selling_price": 236,
    "startingAt": 236,
    "mrp": 600,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy 10x7x3.5 inch White flap box online. Durable 3 ply corrugated box ideal for shipping clothing, accessories, and large gift hampers.",
    "fullDesc": "Buy 10x7x3.5 inch White flap box online. Durable 3 ply corrugated box ideal for shipping clothing, accessories, and large gift hampers.",
    "tiers": [
      {
        "qty": 10,
        "rate": 236,
        "label": "Pack of 10 (₹236)"
      },
      {
        "qty": 50,
        "rate": 1180,
        "label": "Pack of 50 (₹1,180)"
      },
      {
        "qty": 500,
        "rate": 11700,
        "label": "Pack of 500 (₹11,700)"
      },
      {
        "qty": 1000,
        "rate": 21810,
        "label": "Pack of 1000 (₹21,810)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "2365c0c4-d943-4ede-9dcf-164f2c2d7ef7",
    "slug": "brown-flap-box-4x2-5x1-5-inch-brown-flap-corrugated-box-3-ply-mini-packagin",
    "title": "4x2.5x1.5 Inch Brown Flap Corrugated Box | 3 Ply Mini Packaging Box for Jewelry, Gifts & E-commerce Shipping",
    "name": "4x2.5x1.5 Inch Brown Flap Corrugated Box | 3 Ply Mini Packaging Box for Jewelry, Gifts & E-commerce Shipping",
    "category": "brown-flap-box",
    "category_id": "8c62e0b8-cd82-4224-bb5a-f2fff9fb2043",
    "categoryLabel": "Brown Flap Corrugated Boxes",
    "image": "/assets/boxes/brown-flap-box-4x2-5x1-5-inch-brown-flap-corrugated-box-3-ply-mini-packagin_0.webp",
    "images": [
      "/assets/boxes/brown-flap-box-4x2-5x1-5-inch-brown-flap-corrugated-box-3-ply-mini-packagin_0.webp",
      "/assets/boxes/brown-flap-box-4x2-5x1-5-inch-brown-flap-corrugated-box-3-ply-mini-packagin_1.webp",
      "/assets/boxes/brown-flap-box-4x2-5x1-5-inch-brown-flap-corrugated-box-3-ply-mini-packagin_2.webp"
    ],
    "price": 260,
    "selling_price": 260,
    "startingAt": 260,
    "mrp": 560,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy 4x2.5x1.5 inch corrugated flap box for jewelry, gifts & e-commerce packaging. Strong, lightweight & budget-friendly packaging solution by AS Print Gallery.",
    "fullDesc": "Buy 4x2.5x1.5 inch corrugated flap box for jewelry, gifts & e-commerce packaging. Strong, lightweight & budget-friendly packaging solution by AS Print Gallery.",
    "tiers": [
      {
        "qty": 50,
        "rate": 260,
        "label": "Pack of 50 (₹260)"
      },
      {
        "qty": 100,
        "rate": 499,
        "label": "Pack of 100 (₹499)"
      },
      {
        "qty": 500,
        "rate": 2381,
        "label": "Pack of 500 (₹2,381)"
      },
      {
        "qty": 1000,
        "rate": 4570,
        "label": "Pack of 1000 (₹4,570)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "14edc904-631e-4c69-b216-375b71e21b45",
    "slug": "brown-flap-box-3-ply-brown-flap-corrugated-box-size-14x9x3-inch-ideal-packa",
    "title": "3 Ply Brown Flap Corrugated Box – Size 14x9x3 Inch | Ideal Packaging Box for E-commerce & Shipping",
    "name": "3 Ply Brown Flap Corrugated Box – Size 14x9x3 Inch | Ideal Packaging Box for E-commerce & Shipping",
    "category": "brown-flap-box",
    "category_id": "8c62e0b8-cd82-4224-bb5a-f2fff9fb2043",
    "categoryLabel": "Brown Flap Corrugated Boxes",
    "image": "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-14x9x3-inch-ideal-packa_0.webp",
    "images": [
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-14x9x3-inch-ideal-packa_0.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-14x9x3-inch-ideal-packa_1.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-14x9x3-inch-ideal-packa_2.webp"
    ],
    "price": 343,
    "selling_price": 343,
    "startingAt": 343,
    "mrp": 599,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop 14x9x3 inch 3 ply brown flap corrugated boxes online. Ideal for shipping apparel, books, cosmetics, and medium-sized products safely across India",
    "fullDesc": "Shop 14x9x3 inch 3 ply brown flap corrugated boxes online. Ideal for shipping apparel, books, cosmetics, and medium-sized products safely across India",
    "tiers": [
      {
        "qty": 10,
        "rate": 343,
        "label": "Pack of 10 (₹343)"
      },
      {
        "qty": 20,
        "rate": 680,
        "label": "Pack of 20 (₹680)"
      },
      {
        "qty": 40,
        "rate": 1348,
        "label": "Pack of 40 (₹1,348)"
      },
      {
        "qty": 100,
        "rate": 3350,
        "label": "Pack of 100 (₹3,350)"
      },
      {
        "qty": 500,
        "rate": 16500,
        "label": "Pack of 500 (₹16,500)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": true
  },
  {
    "id": "411da344-078c-467a-b5b8-95363f41fb3c",
    "slug": "3-ply-brown-corrugated-carton-flap-box-size-8x4x2-inches-length-8-inch-widt",
    "title": "3 ply Brown Corrugated Carton Flap Box Size 8X4X2 inches Length 8 inch Width 4 inch Height 2 inch Shipping Box Courier Box",
    "name": "3 ply Brown Corrugated Carton Flap Box Size 8X4X2 inches Length 8 inch Width 4 inch Height 2 inch Shipping Box Courier Box",
    "category": "brown-flap-box",
    "category_id": "8c62e0b8-cd82-4224-bb5a-f2fff9fb2043",
    "categoryLabel": "Brown Flap Corrugated Boxes",
    "image": "/assets/boxes/3-ply-brown-corrugated-carton-flap-box-size-8x4x2-inches-length-8-inch-widt_0.webp",
    "images": [
      "/assets/boxes/3-ply-brown-corrugated-carton-flap-box-size-8x4x2-inches-length-8-inch-widt_0.webp",
      "/assets/boxes/3-ply-brown-corrugated-carton-flap-box-size-8x4x2-inches-length-8-inch-widt_1.webp",
      "/assets/boxes/3-ply-brown-corrugated-carton-flap-box-size-8x4x2-inches-length-8-inch-widt_2.webp"
    ],
    "price": 236,
    "selling_price": 236,
    "startingAt": 236,
    "mrp": 550,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "3 ply brown corrugated carton box, 8x4x2 inches, ideal for courier needs, ensuring secure packaging || pack of 25 - ₹299 || 📦 free shipping...",
    "fullDesc": "3 ply brown corrugated carton box, 8x4x2 inches, ideal for courier needs, ensuring secure packaging || pack of 25 - ₹299 || 📦 free shipping...",
    "tiers": [
      {
        "qty": 25,
        "rate": 236,
        "label": "Pack of 25 (₹236)"
      },
      {
        "qty": 100,
        "rate": 898,
        "label": "Pack of 100 (₹898)"
      },
      {
        "qty": 500,
        "rate": 4400,
        "label": "Pack of 500 (₹4,400)"
      },
      {
        "qty": 1000,
        "rate": 8700,
        "label": "Pack of 1000 (₹8,700)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "d08ba9d8-4e39-4fa5-8e01-1087aac14cbf",
    "slug": "brown-flap-box-3-ply-brown-corrugated-packing-box-flap-type-size-10x7x3-5-l",
    "title": "3 Ply Brown Corrugated Packing Box Flap Type Size: 10X7X3.5 Length 10 inch Width 7 inch Height 3.5 inch Shipping box Courier Box",
    "name": "3 Ply Brown Corrugated Packing Box Flap Type Size: 10X7X3.5 Length 10 inch Width 7 inch Height 3.5 inch Shipping box Courier Box",
    "category": "brown-flap-box",
    "category_id": "8c62e0b8-cd82-4224-bb5a-f2fff9fb2043",
    "categoryLabel": "Brown Flap Corrugated Boxes",
    "image": "/assets/boxes/brown-flap-box-3-ply-brown-corrugated-packing-box-flap-type-size-10x7x3-5-l_0.webp",
    "images": [
      "/assets/boxes/brown-flap-box-3-ply-brown-corrugated-packing-box-flap-type-size-10x7x3-5-l_0.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-corrugated-packing-box-flap-type-size-10x7x3-5-l_1.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-corrugated-packing-box-flap-type-size-10x7x3-5-l_2.webp"
    ],
    "price": 224,
    "selling_price": 224,
    "startingAt": 224,
    "mrp": 450,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Large 10-by-7-by-3.5-inch brown 3 ply corrugated flap box with a secure shipping design. Perfect for safe packaging and shipping.",
    "fullDesc": "Large 10-by-7-by-3.5-inch brown 3 ply corrugated flap box with a secure shipping design. Perfect for safe packaging and shipping.",
    "tiers": [
      {
        "qty": 10,
        "rate": 224,
        "label": "Pack of 10 (₹224)"
      },
      {
        "qty": 50,
        "rate": 1098,
        "label": "Pack of 50 (₹1,098)"
      },
      {
        "qty": 500,
        "rate": 10952,
        "label": "Pack of 500 (₹10,952)"
      },
      {
        "qty": 1000,
        "rate": 20952,
        "label": "Pack of 1000 (₹20,952)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "5fcc4902-1f8a-40f4-a581-74adf485b9fd",
    "slug": "3-ply-brown-flap-box-size-13x9x2-inches-shipping-box-courier-box",
    "title": "3 ply Brown Flap Box Size 13X9X2 inches, Shipping Box Courier Box",
    "name": "3 ply Brown Flap Box Size 13X9X2 inches, Shipping Box Courier Box",
    "category": "brown-flap-box",
    "category_id": "8c62e0b8-cd82-4224-bb5a-f2fff9fb2043",
    "categoryLabel": "Brown Flap Corrugated Boxes",
    "image": "/assets/boxes/3-ply-brown-flap-box-size-13x9x2-inches-shipping-box-courier-box_1.webp",
    "images": [
      "/assets/boxes/3-ply-brown-flap-box-size-13x9x2-inches-shipping-box-courier-box_1.webp",
      "/assets/boxes/3-ply-brown-flap-box-size-13x9x2-inches-shipping-box-courier-box_0.webp",
      "/assets/boxes/3-ply-brown-flap-box-size-13x9x2-inches-shipping-box-courier-box_2.webp"
    ],
    "price": 425,
    "selling_price": 425,
    "startingAt": 425,
    "mrp": 700,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Order 13x9x2 inch brown corrugated flap box online at AS Print Gallery.com. Ideal for books, certificates, clothing & flat gift kits. Durable 3 ply kraft box at",
    "fullDesc": "Order 13x9x2 inch brown corrugated flap box online at AS Print Gallery.com. Ideal for books, certificates, clothing & flat gift kits. Durable 3 ply kraft box at",
    "tiers": [
      {
        "qty": 20,
        "rate": 425,
        "label": "Pack of 20 (₹425)"
      },
      {
        "qty": 40,
        "rate": 848,
        "label": "Pack of 40 (₹848)"
      },
      {
        "qty": 60,
        "rate": 1248,
        "label": "Pack of 60 (₹1,248)"
      },
      {
        "qty": 500,
        "rate": 9999,
        "label": "Pack of 500 (₹9,999)"
      },
      {
        "qty": 1000,
        "rate": 19800,
        "label": "Pack of 1000 (₹19,800)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "5b4d080f-e37a-45a6-a2fa-da21cd0931a0",
    "slug": "3-ply-brown-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c",
    "title": "3 Ply Brown Corrugated Flap Box Size 14x13x2.5 Inch I Large Kraft Box for Clothing, Calendars, and Flat Product Shipping",
    "name": "3 Ply Brown Corrugated Flap Box Size 14x13x2.5 Inch I Large Kraft Box for Clothing, Calendars, and Flat Product Shipping",
    "category": "brown-flap-box",
    "category_id": "8c62e0b8-cd82-4224-bb5a-f2fff9fb2043",
    "categoryLabel": "Brown Flap Corrugated Boxes",
    "image": "/assets/boxes/3-ply-brown-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_0.webp",
    "images": [
      "/assets/boxes/3-ply-brown-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_0.webp",
      "/assets/boxes/3-ply-brown-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_1.webp",
      "/assets/boxes/3-ply-brown-corrugated-flap-box-size-14x13x2-5-inch-i-large-kraft-box-for-c_2.webp"
    ],
    "price": 379,
    "selling_price": 379,
    "startingAt": 379,
    "mrp": 700,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy 14x13x2.5 inch brown flap boxes online at AS Print Gallery.com – perfect for wide products like apparel, books, and corporate gifting. Durable 3 ply corrugat",
    "fullDesc": "Buy 14x13x2.5 inch brown flap boxes online at AS Print Gallery.com – perfect for wide products like apparel, books, and corporate gifting. Durable 3 ply corrugat",
    "tiers": [
      {
        "qty": 10,
        "rate": 379,
        "label": "Pack of 10 (₹379)"
      },
      {
        "qty": 20,
        "rate": 712,
        "label": "Pack of 20 (₹712)"
      },
      {
        "qty": 40,
        "rate": 1381,
        "label": "Pack of 40 (₹1,381)"
      },
      {
        "qty": 100,
        "rate": 3476,
        "label": "Pack of 100 (₹3,476)"
      },
      {
        "qty": 500,
        "rate": 16190,
        "label": "Pack of 500 (₹16,190)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "90b00b5c-f85a-4174-b31f-109a7227917b",
    "slug": "brown-flap-box-3-ply-brown-flap-corrugated-box-size-9x6x3-inch-i-premium-co",
    "title": "3 Ply Brown Flap Corrugated Box – Size 9x6x3 Inch I Premium Corrugated Packaging for Gifts, Soaps, Ecommerce & Bulk Orders",
    "name": "3 Ply Brown Flap Corrugated Box – Size 9x6x3 Inch I Premium Corrugated Packaging for Gifts, Soaps, Ecommerce & Bulk Orders",
    "category": "brown-flap-box",
    "category_id": "8c62e0b8-cd82-4224-bb5a-f2fff9fb2043",
    "categoryLabel": "Brown Flap Corrugated Boxes",
    "image": "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-9x6x3-inch-i-premium-co_0.webp",
    "images": [
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-9x6x3-inch-i-premium-co_0.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-9x6x3-inch-i-premium-co_1.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-9x6x3-inch-i-premium-co_2.webp"
    ],
    "price": 379,
    "selling_price": 379,
    "startingAt": 379,
    "mrp": 800,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy 3-ply brown flap corrugated boxes (9x6x3 inch) at AS Print Gallery. Premium eco-friendly packaging with a tuck-in lock design, ideal for gifts, cosmetics & e",
    "fullDesc": "Buy 3-ply brown flap corrugated boxes (9x6x3 inch) at AS Print Gallery. Premium eco-friendly packaging with a tuck-in lock design, ideal for gifts, cosmetics & e",
    "tiers": [
      {
        "qty": 20,
        "rate": 379,
        "label": "Pack of 20 (₹379)"
      },
      {
        "qty": 100,
        "rate": 1810,
        "label": "Pack of 100 (₹1,810)"
      },
      {
        "qty": 500,
        "rate": 8800,
        "label": "Pack of 500 (₹8,800)"
      },
      {
        "qty": 1000,
        "rate": 16095,
        "label": "Pack of 1000 (₹16,095)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "9a560d0c-cb52-47f2-928c-3c71ca9353a1",
    "slug": "brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x7x2-inch-i-premium-co",
    "title": "3 Ply Brown Flap Corrugated Box – Size 7x7x2 Inch I Premium Corrugated Kraft Box for Gift Sets, Hampers & Fragile Items",
    "name": "3 Ply Brown Flap Corrugated Box – Size 7x7x2 Inch I Premium Corrugated Kraft Box for Gift Sets, Hampers & Fragile Items",
    "category": "brown-flap-box",
    "category_id": "8c62e0b8-cd82-4224-bb5a-f2fff9fb2043",
    "categoryLabel": "Brown Flap Corrugated Boxes",
    "image": "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x7x2-inch-i-premium-co_0.webp",
    "images": [
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x7x2-inch-i-premium-co_0.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x7x2-inch-i-premium-co_1.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x7x2-inch-i-premium-co_2.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 600,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop a 7x7x2 inch brown flap box online. Ideal for curated gift boxes, skincare kits, chocolates, soaps & more. Durable 3 ply kraft corrugated box.",
    "fullDesc": "Shop a 7x7x2 inch brown flap box online. Ideal for curated gift boxes, skincare kits, chocolates, soaps & more. Durable 3 ply kraft corrugated box.",
    "tiers": [
      {
        "qty": 25,
        "rate": 284,
        "label": "Pack of 25 (₹284)"
      },
      {
        "qty": 50,
        "rate": 560,
        "label": "Pack of 50 (₹560)"
      },
      {
        "qty": 100,
        "rate": 1099,
        "label": "Pack of 100 (₹1,099)"
      },
      {
        "qty": 500,
        "rate": 5400,
        "label": "Pack of 500 (₹5,400)"
      },
      {
        "qty": 1000,
        "rate": 10200,
        "label": "Pack of 1000 (₹10,200)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": true
  },
  {
    "id": "65c6f343-2717-416e-b943-6d6663127231",
    "slug": "brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x5-5x2-inch-i-premium",
    "title": "3 Ply Brown Flap Corrugated Box – Size 7x5.5x2 Inch I Premium Corrugated Box for Shipping Gifts, Cosmetics & More",
    "name": "3 Ply Brown Flap Corrugated Box – Size 7x5.5x2 Inch I Premium Corrugated Box for Shipping Gifts, Cosmetics & More",
    "category": "brown-flap-box",
    "category_id": "8c62e0b8-cd82-4224-bb5a-f2fff9fb2043",
    "categoryLabel": "Brown Flap Corrugated Boxes",
    "image": "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x5-5x2-inch-i-premium_0.webp",
    "images": [
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x5-5x2-inch-i-premium_0.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x5-5x2-inch-i-premium_1.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-7x5-5x2-inch-i-premium_2.webp"
    ],
    "price": 267,
    "selling_price": 267,
    "startingAt": 267,
    "mrp": 600,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Order a 7x5.5x2 inch brown flap corrugated box online. Ideal for gifts, skin care, jewelry & more. Durable, eco-friendly, and perfect for small produc",
    "fullDesc": "Order a 7x5.5x2 inch brown flap corrugated box online. Ideal for gifts, skin care, jewelry & more. Durable, eco-friendly, and perfect for small produc",
    "tiers": [
      {
        "qty": 25,
        "rate": 267,
        "label": "Pack of 25 (₹267)"
      },
      {
        "qty": 50,
        "rate": 522,
        "label": "Pack of 50 (₹522)"
      },
      {
        "qty": 100,
        "rate": 980,
        "label": "Pack of 100 (₹980)"
      },
      {
        "qty": 500,
        "rate": 4800,
        "label": "Pack of 500 (₹4,800)"
      },
      {
        "qty": 1000,
        "rate": 9500,
        "label": "Pack of 1000 (₹9,500)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "7e6c686f-f1e1-4794-8d92-6d2f099f5835",
    "slug": "brown-flap-box-3-ply-brown-flap-corrugated-box-size-6x5x1-5-inch-multipurpo",
    "title": "3 Ply Brown Flap Corrugated Box – Size 6x5x1.5 Inch | Multipurpose Brown Corrugated Box for Small Item Packaging",
    "name": "3 Ply Brown Flap Corrugated Box – Size 6x5x1.5 Inch | Multipurpose Brown Corrugated Box for Small Item Packaging",
    "category": "brown-flap-box",
    "category_id": "8c62e0b8-cd82-4224-bb5a-f2fff9fb2043",
    "categoryLabel": "Brown Flap Corrugated Boxes",
    "image": "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_0.webp",
    "images": [
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_0.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_1.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-6x5x1-5-inch-multipurpo_2.webp"
    ],
    "price": 427,
    "selling_price": 427,
    "startingAt": 427,
    "mrp": 850,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Get 6x5x1.5 inch brown flap corrugated boxes for packaging gifts, soaps, accessories, and cosmetics. Eco-friendly, foldable, and strong – available at",
    "fullDesc": "Get 6x5x1.5 inch brown flap corrugated boxes for packaging gifts, soaps, accessories, and cosmetics. Eco-friendly, foldable, and strong – available at",
    "tiers": [
      {
        "qty": 50,
        "rate": 427,
        "label": "Pack of 50 (₹427)"
      },
      {
        "qty": 100,
        "rate": 840,
        "label": "Pack of 100 (₹840)"
      },
      {
        "qty": 500,
        "rate": 4190,
        "label": "Pack of 500 (₹4,190)"
      },
      {
        "qty": 1000,
        "rate": 8095,
        "label": "Pack of 1000 (₹8,095)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "f4e5709e-5caa-44c6-81b4-aef9aa162800",
    "slug": "brown-flap-box-3-ply-brown-flap-corrugated-box-6x4x2-inch-for-small-items",
    "title": "3 Ply Brown Flap Corrugated Box 6x4x2 Inch for Small Items",
    "name": "3 Ply Brown Flap Corrugated Box 6x4x2 Inch for Small Items",
    "category": "brown-flap-box",
    "category_id": "8c62e0b8-cd82-4224-bb5a-f2fff9fb2043",
    "categoryLabel": "Brown Flap Corrugated Boxes",
    "image": "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-6x4x2-inch-for-small-items_0.webp",
    "images": [
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-6x4x2-inch-for-small-items_0.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-6x4x2-inch-for-small-items_1.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-6x4x2-inch-for-small-items_2.webp"
    ],
    "price": 224,
    "selling_price": 224,
    "startingAt": 224,
    "mrp": 735,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Shop premium 6x4x2 inch brown flap corrugated boxes for packaging soaps, accessories, cosmetics, and small gifts. Lightweight, strong, and eco-friendl",
    "fullDesc": "Shop premium 6x4x2 inch brown flap corrugated boxes for packaging soaps, accessories, cosmetics, and small gifts. Lightweight, strong, and eco-friendl",
    "tiers": [
      {
        "qty": 25,
        "rate": 224,
        "label": "Pack of 25 (₹224)"
      },
      {
        "qty": 50,
        "rate": 427,
        "label": "Pack of 50 (₹427)"
      },
      {
        "qty": 500,
        "rate": 4190,
        "label": "Pack of 500 (₹4,190)"
      },
      {
        "qty": 1000,
        "rate": 8095,
        "label": "Pack of 1000 (₹8,095)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "45974f6e-8223-4ac6-a4c6-162fa63f2e05",
    "slug": "packaging-box-5x5x2-inch-brown-flap-box-mini-corrugated-packaging-for-jewel",
    "title": "AS Print Packaging Box 5x5x2 Inch Brown Flap Box – Mini Corrugated Packaging for Jewelry, Gifts & E-commerce Orders",
    "name": "AS Print Packaging Box 5x5x2 Inch Brown Flap Box – Mini Corrugated Packaging for Jewelry, Gifts & E-commerce Orders",
    "category": "brown-flap-box",
    "category_id": "8c62e0b8-cd82-4224-bb5a-f2fff9fb2043",
    "categoryLabel": "Brown Flap Corrugated Boxes",
    "image": "/assets/boxes/packaging-box-5x5x2-inch-brown-flap-box-mini-corrugated-packaging-for-jewel_0.webp",
    "images": [
      "/assets/boxes/packaging-box-5x5x2-inch-brown-flap-box-mini-corrugated-packaging-for-jewel_0.webp",
      "/assets/boxes/packaging-box-5x5x2-inch-brown-flap-box-mini-corrugated-packaging-for-jewel_1.webp",
      "/assets/boxes/packaging-box-5x5x2-inch-brown-flap-box-mini-corrugated-packaging-for-jewel_2.webp"
    ],
    "price": 224,
    "selling_price": 224,
    "startingAt": 224,
    "mrp": 600,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Order 5x5x2 inch brown flap boxes online – perfect for packaging jewelry, gifts, cosmetics, and lightweight items. Ideal for online sellers and small",
    "fullDesc": "Order 5x5x2 inch brown flap boxes online – perfect for packaging jewelry, gifts, cosmetics, and lightweight items. Ideal for online sellers and small",
    "tiers": [
      {
        "qty": 25,
        "rate": 224,
        "label": "Pack of 25 (₹224)"
      },
      {
        "qty": 50,
        "rate": 438,
        "label": "Pack of 50 (₹438)"
      },
      {
        "qty": 500,
        "rate": 4286,
        "label": "Pack of 500 (₹4,286)"
      },
      {
        "qty": 1000,
        "rate": 8381,
        "label": "Pack of 1000 (₹8,381)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "e43054aa-d3a8-4744-b4c1-77f9ede95b52",
    "slug": "brown-flap-box-3-ply-brown-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi",
    "title": "3 Ply Brown Flap Corrugated Box – Size 4x4x1.5 Inch | Perfect Mini Packaging Box for Secure & Stylish Shipping",
    "name": "3 Ply Brown Flap Corrugated Box – Size 4x4x1.5 Inch | Perfect Mini Packaging Box for Secure & Stylish Shipping",
    "category": "brown-flap-box",
    "category_id": "8c62e0b8-cd82-4224-bb5a-f2fff9fb2043",
    "categoryLabel": "Brown Flap Corrugated Boxes",
    "image": "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_0.webp",
    "images": [
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_0.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_1.webp",
      "/assets/boxes/brown-flap-box-3-ply-brown-flap-corrugated-box-size-4x4x1-5-inch-perfect-mi_2.webp"
    ],
    "price": 312,
    "selling_price": 312,
    "startingAt": 312,
    "mrp": 600,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy 4x4x1.5 inch corrugated flap box for safe packaging. Ideal for jewelry, cosmetics & small items. Strong, eco-friendly & affordable.",
    "fullDesc": "Buy 4x4x1.5 inch corrugated flap box for safe packaging. Ideal for jewelry, cosmetics & small items. Strong, eco-friendly & affordable.",
    "tiers": [
      {
        "qty": 50,
        "rate": 312,
        "label": "Pack of 50 (₹312)"
      },
      {
        "qty": 100,
        "rate": 598,
        "label": "Pack of 100 (₹598)"
      },
      {
        "qty": 500,
        "rate": 2905,
        "label": "Pack of 500 (₹2,905)"
      },
      {
        "qty": 1000,
        "rate": 5619,
        "label": "Pack of 1000 (₹5,619)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "578d152c-0ad6-4d1d-9f68-7c57ce039d05",
    "slug": "3-ply-brown-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busin",
    "title": "3-Ply Brown Flap Box 4x4x2 Inch-Ultimate Packaging Solution for Small Businesses",
    "name": "3-Ply Brown Flap Box 4x4x2 Inch-Ultimate Packaging Solution for Small Businesses",
    "category": "brown-flap-box",
    "category_id": "8c62e0b8-cd82-4224-bb5a-f2fff9fb2043",
    "categoryLabel": "Brown Flap Corrugated Boxes",
    "image": "/assets/boxes/3-ply-brown-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busin_0.webp",
    "images": [
      "/assets/boxes/3-ply-brown-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busin_0.webp",
      "/assets/boxes/3-ply-brown-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busin_1.webp",
      "/assets/boxes/3-ply-brown-flap-box-4x4x2-inch-ultimate-packaging-solution-for-small-busin_2.webp"
    ],
    "price": 189,
    "selling_price": 189,
    "startingAt": 189,
    "mrp": 400,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy a high-quality 4x4x2 inch brown flap corrugated box online – perfect for lightweight items like gifts, cosmetics, jewelry, and small accessories.",
    "fullDesc": "Buy a high-quality 4x4x2 inch brown flap corrugated box online – perfect for lightweight items like gifts, cosmetics, jewelry, and small accessories.",
    "tiers": [
      {
        "qty": 25,
        "rate": 189,
        "label": "Pack of 25 (₹189)"
      },
      {
        "qty": 50,
        "rate": 362,
        "label": "Pack of 50 (₹362)"
      },
      {
        "qty": 100,
        "rate": 712,
        "label": "Pack of 100 (₹712)"
      },
      {
        "qty": 500,
        "rate": 3476,
        "label": "Pack of 500 (₹3,476)"
      },
      {
        "qty": 1000,
        "rate": 6667,
        "label": "Pack of 1000 (₹6,667)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "eaf83af6-6a1b-439f-9ce9-c81d8de09961",
    "slug": "3-ply-brown-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag",
    "title": "3 Ply Brown Corrugated Flap Box Size 4.5x3x1 Inch | Jewellery And Gift Packaging box",
    "name": "3 Ply Brown Corrugated Flap Box Size 4.5x3x1 Inch | Jewellery And Gift Packaging box",
    "category": "brown-flap-box",
    "category_id": "8c62e0b8-cd82-4224-bb5a-f2fff9fb2043",
    "categoryLabel": "Brown Flap Corrugated Boxes",
    "image": "/assets/boxes/3-ply-brown-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_0.webp",
    "images": [
      "/assets/boxes/3-ply-brown-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_0.webp",
      "/assets/boxes/3-ply-brown-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_1.webp",
      "/assets/boxes/3-ply-brown-corrugated-flap-box-size-4-5x3x1-inch-jewellery-and-gift-packag_2.webp"
    ],
    "price": 371,
    "selling_price": 371,
    "startingAt": 371,
    "mrp": 878,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Order 4.5x3x1 inch 3 ply flap corrugated box – strong, brown kraft box ideal for small item shipping, ecommerce, gifts, and secure packaging. Delivere",
    "fullDesc": "Order 4.5x3x1 inch 3 ply flap corrugated box – strong, brown kraft box ideal for small item shipping, ecommerce, gifts, and secure packaging. Delivere",
    "tiers": [
      {
        "qty": 100,
        "rate": 371,
        "label": "Pack of 100 (₹371)"
      },
      {
        "qty": 500,
        "rate": 1810,
        "label": "Pack of 500 (₹1,810)"
      },
      {
        "qty": 1000,
        "rate": 3999,
        "label": "Pack of 1000 (₹3,999)"
      },
      {
        "qty": 2000,
        "rate": 7900,
        "label": "Pack of 2000 (₹7,900)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "f698e326-785c-4d4e-b14d-b2ebf056f92f",
    "slug": "3-ply-white-cardboard-box-size-8x5x2-length-8-inch-width-5-inch-height-2-in",
    "title": "3 Ply White Cardboard Box Size: 8x5x2 Length 8 inch Width 5 inch Height 2 inch 3Ply custom cardboard packing boxes",
    "name": "3 Ply White Cardboard Box Size: 8x5x2 Length 8 inch Width 5 inch Height 2 inch 3Ply custom cardboard packing boxes",
    "category": "3-ply-white-corrugated-boxes",
    "category_id": "9eb2ae65-1342-4042-a003-9a6cec1f0a94",
    "categoryLabel": "3 Ply White Corrugated Boxes",
    "image": "/assets/boxes/3-ply-white-cardboard-box-size-8x5x2-length-8-inch-width-5-inch-height-2-in_0.webp",
    "images": [
      "/assets/boxes/3-ply-white-cardboard-box-size-8x5x2-length-8-inch-width-5-inch-height-2-in_0.webp",
      "/assets/boxes/3-ply-white-cardboard-box-size-8x5x2-length-8-inch-width-5-inch-height-2-in_1.webp",
      "/assets/boxes/3-ply-white-cardboard-box-size-8x5x2-length-8-inch-width-5-inch-height-2-in_2.webp"
    ],
    "price": 498,
    "selling_price": 498,
    "startingAt": 498,
    "mrp": 800,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "White cardboard boxes that are 3Ply and cost-effective, measuring 8x5x2. Ideal for packing that is secure and adaptable...",
    "fullDesc": "White cardboard boxes that are 3Ply and cost-effective, measuring 8x5x2. Ideal for packing that is secure and adaptable...",
    "tiers": [
      {
        "qty": 50,
        "rate": 498,
        "label": "Pack of 50 (₹498)"
      },
      {
        "qty": 100,
        "rate": 978,
        "label": "Pack of 100 (₹978)"
      },
      {
        "qty": 500,
        "rate": 4800,
        "label": "Pack of 500 (₹4,800)"
      },
      {
        "qty": 1000,
        "rate": 9500,
        "label": "Pack of 1000 (₹9,500)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "71c67557-537b-438b-a137-72033c6ef60c",
    "slug": "3-ply-white-corrugated-packing-box-5x4x2-5-inch-carton-box-shipping-box",
    "title": "3 Ply White Corrugated Packing Box 5x4x2.5 Inch, Carton Box. Shipping Box",
    "name": "3 Ply White Corrugated Packing Box 5x4x2.5 Inch, Carton Box. Shipping Box",
    "category": "3-ply-white-corrugated-boxes",
    "category_id": "9eb2ae65-1342-4042-a003-9a6cec1f0a94",
    "categoryLabel": "3 Ply White Corrugated Boxes",
    "image": "/assets/boxes/3-ply-white-corrugated-packing-box-5x4x2-5-inch-carton-box-shipping-box_0.webp",
    "images": [
      "/assets/boxes/3-ply-white-corrugated-packing-box-5x4x2-5-inch-carton-box-shipping-box_0.webp",
      "/assets/boxes/3-ply-white-corrugated-packing-box-5x4x2-5-inch-carton-box-shipping-box_1.webp",
      "/assets/boxes/3-ply-white-corrugated-packing-box-5x4x2-5-inch-carton-box-shipping-box_2.webp"
    ],
    "price": 348,
    "selling_price": 348,
    "startingAt": 348,
    "mrp": 660,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Strong 3 ply corrugated box 5x4x2.5 INCH – Ideal for shipping, storage & gifting. Pack of 50. Fast delivery & bulk discounts. Order now & save big!",
    "fullDesc": "Strong 3 ply corrugated box 5x4x2.5 INCH – Ideal for shipping, storage & gifting. Pack of 50. Fast delivery & bulk discounts. Order now & save big!",
    "tiers": [
      {
        "qty": 50,
        "rate": 348,
        "label": "Pack of 50 (₹348)"
      },
      {
        "qty": 100,
        "rate": 690,
        "label": "Pack of 100 (₹690)"
      },
      {
        "qty": 500,
        "rate": 3400,
        "label": "Pack of 500 (₹3,400)"
      },
      {
        "qty": 1000,
        "rate": 6700,
        "label": "Pack of 1000 (₹6,700)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "d3004ce0-cc01-4fcc-a21c-dbbc172e71e3",
    "slug": "3-ply-white-cardboard-box-size-9-5x6x3-5-length-9-5-inch-width-6-inch-heigh",
    "title": "3 Ply White Cardboard Box Size: 9.5x6x3.5 Length 9.5 inch Width 6 inch Height 3.5 inch 3Ply custom cardboard packing boxes",
    "name": "3 Ply White Cardboard Box Size: 9.5x6x3.5 Length 9.5 inch Width 6 inch Height 3.5 inch 3Ply custom cardboard packing boxes",
    "category": "3-ply-white-corrugated-boxes",
    "category_id": "9eb2ae65-1342-4042-a003-9a6cec1f0a94",
    "categoryLabel": "3 Ply White Corrugated Boxes",
    "image": "/assets/boxes/3-ply-white-cardboard-box-size-9-5x6x3-5-length-9-5-inch-width-6-inch-heigh_0.webp",
    "images": [
      "/assets/boxes/3-ply-white-cardboard-box-size-9-5x6x3-5-length-9-5-inch-width-6-inch-heigh_0.webp",
      "/assets/boxes/3-ply-white-cardboard-box-size-9-5x6x3-5-length-9-5-inch-width-6-inch-heigh_1.webp",
      "/assets/boxes/3-ply-white-cardboard-box-size-9-5x6x3-5-length-9-5-inch-width-6-inch-heigh_2.webp"
    ],
    "price": 420,
    "selling_price": 420,
    "startingAt": 420,
    "mrp": 700,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Get the best quality 9.5x6x3.5 inch white flap box from AS Print Packaging Box. Made with strong 3 ply corrugated paper for e-commerce, gifting, and frag",
    "fullDesc": "Get the best quality 9.5x6x3.5 inch white flap box from AS Print Packaging Box. Made with strong 3 ply corrugated paper for e-commerce, gifting, and frag",
    "tiers": [
      {
        "qty": 25,
        "rate": 420,
        "label": "Pack of 25 (₹420)"
      },
      {
        "qty": 50,
        "rate": 835,
        "label": "Pack of 50 (₹835)"
      },
      {
        "qty": 500,
        "rate": 8200,
        "label": "Pack of 500 (₹8,200)"
      },
      {
        "qty": 1000,
        "rate": 16200,
        "label": "Pack of 1000 (₹16,200)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "2b3dce0a-705b-4fce-9471-eae7492199fd",
    "slug": "3-ply-white-corrugated-packing-box-7x4x3-5-inch-durable-shipping-carton-sma",
    "title": "3 Ply White Corrugated Packing Box 7x4x3.5 Inch | Durable Shipping Carton | Small Packaging Box for Ecommerce",
    "name": "3 Ply White Corrugated Packing Box 7x4x3.5 Inch | Durable Shipping Carton | Small Packaging Box for Ecommerce",
    "category": "3-ply-white-corrugated-boxes",
    "category_id": "9eb2ae65-1342-4042-a003-9a6cec1f0a94",
    "categoryLabel": "3 Ply White Corrugated Boxes",
    "image": "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x3-5-inch-durable-shipping-carton-sma_0.webp",
    "images": [
      "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x3-5-inch-durable-shipping-carton-sma_0.webp",
      "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x3-5-inch-durable-shipping-carton-sma_1.webp",
      "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x3-5-inch-durable-shipping-carton-sma_2.webp"
    ],
    "price": 425,
    "selling_price": 425,
    "startingAt": 425,
    "mrp": 800,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Buy AS Print Packaging Box 7x4x3.5 inch 3 Ply Corrugated Box – perfect for secure packaging, e-commerce shipping & small item delivery.",
    "fullDesc": "Buy AS Print Packaging Box 7x4x3.5 inch 3 Ply Corrugated Box – perfect for secure packaging, e-commerce shipping & small item delivery.",
    "tiers": [
      {
        "qty": 50,
        "rate": 425,
        "label": "Pack of 50 (₹425)"
      },
      {
        "qty": 100,
        "rate": 848,
        "label": "Pack of 100 (₹848)"
      },
      {
        "qty": 500,
        "rate": 4200,
        "label": "Pack of 500 (₹4,200)"
      },
      {
        "qty": 1000,
        "rate": 8300,
        "label": "Pack of 1000 (₹8,300)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "6c4bfe7c-61e8-45b4-bf61-c0423ddbc5d7",
    "slug": "3-ply-white-corrugated-packing-box-7x4x2-inch-small-shipping-carton-box-eas",
    "title": "3 Ply White Corrugated Packing Box 7x4x2 Inch | Small Shipping Carton Box| Easy to Buy Packaging Box",
    "name": "3 Ply White Corrugated Packing Box 7x4x2 Inch | Small Shipping Carton Box| Easy to Buy Packaging Box",
    "category": "3-ply-white-corrugated-boxes",
    "category_id": "9eb2ae65-1342-4042-a003-9a6cec1f0a94",
    "categoryLabel": "3 Ply White Corrugated Boxes",
    "image": "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x2-inch-small-shipping-carton-box-eas_0.webp",
    "images": [
      "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x2-inch-small-shipping-carton-box-eas_0.webp",
      "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x2-inch-small-shipping-carton-box-eas_1.webp",
      "/assets/boxes/3-ply-white-corrugated-packing-box-7x4x2-inch-small-shipping-carton-box-eas_2.webp"
    ],
    "price": 379,
    "selling_price": 379,
    "startingAt": 379,
    "mrp": 700,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Durable 3 Ply White Corrugated Box 7x4x2 inch from AS Print Packaging Box. Best for small product shipping, packaging, and e-commerce use.",
    "fullDesc": "Durable 3 Ply White Corrugated Box 7x4x2 inch from AS Print Packaging Box. Best for small product shipping, packaging, and e-commerce use.",
    "tiers": [
      {
        "qty": 50,
        "rate": 379,
        "label": "Pack of 50 (₹379)"
      },
      {
        "qty": 100,
        "rate": 748,
        "label": "Pack of 100 (₹748)"
      },
      {
        "qty": 500,
        "rate": 3700,
        "label": "Pack of 500 (₹3,700)"
      },
      {
        "qty": 1000,
        "rate": 7200,
        "label": "Pack of 1000 (₹7,200)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "bc062fae-23b2-42b6-adfe-1fc79e9ced04",
    "slug": "3-ply-corrugated-box-4x4x3-inch",
    "title": "3-Ply Brown Corrugated Box (4\" × 4\" × 3\")",
    "name": "3-Ply Brown Corrugated Box (4\" × 4\" × 3\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-4x4x3-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-4x4x3-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-4x4x3-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-4x4x3-inch_2.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 566,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (4\" × 4\" × 3\")\n📐 Dimensions: 4\" × 4\" × 3\" (10.2 × 10.2 × 7.6 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (4\" × 4\" × 3\")\n• Dimensions (Inches): 4\" × 4\" × 3\"\n• Dimensions (CM): 10.2 × 10.2 × 7.6 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (4\" × 4\" × 3\")\n📐 Dimensions: 4\" × 4\" × 3\" (10.2 × 10.2 × 7.6 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (4\" × 4\" × 3\")\n• Dimensions (Inches): 4\" × 4\" × 3\"\n• Dimensions (CM): 10.2 × 10.2 × 7.6 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 284,
        "label": "Pack of 50 (₹284)"
      },
      {
        "qty": 100,
        "rate": 610,
        "label": "Pack of 100 (₹610)"
      },
      {
        "qty": 500,
        "rate": 2761,
        "label": "Pack of 500 (₹2,761)"
      },
      {
        "qty": 1000,
        "rate": 5699,
        "label": "Pack of 1000 (₹5,699)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "9eee0b25-ff36-4c50-9eb1-43260a71437e",
    "slug": "3-ply-corrugated-box-12x8x4-inch",
    "title": "3-Ply Brown Corrugated Box (12\" × 8\" × 4\")",
    "name": "3-Ply Brown Corrugated Box (12\" × 8\" × 4\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-12x8x4-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-12x8x4-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-12x8x4-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-12x8x4-inch_2.webp"
    ],
    "price": 408,
    "selling_price": 408,
    "startingAt": 408,
    "mrp": 800,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (12\" × 8\" × 4\")\n📐 Dimensions: 12\" × 8\" × 4\" (30.5 × 20.3 × 10.2 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (12\" × 8\" × 4\")\n• Dimensions (Inches): 12\" × 8\" × 4\"\n• Dimensions (CM): 30.5 × 20.3 × 10.2 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 20 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 20 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (12\" × 8\" × 4\")\n📐 Dimensions: 12\" × 8\" × 4\" (30.5 × 20.3 × 10.2 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (12\" × 8\" × 4\")\n• Dimensions (Inches): 12\" × 8\" × 4\"\n• Dimensions (CM): 30.5 × 20.3 × 10.2 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 20 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 20 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 20,
        "rate": 408,
        "label": "Pack of 20 (₹408)"
      },
      {
        "qty": 100,
        "rate": 1999,
        "label": "Pack of 100 (₹1,999)"
      },
      {
        "qty": 500,
        "rate": 9429,
        "label": "Pack of 500 (₹9,429)"
      },
      {
        "qty": 1000,
        "rate": 18571,
        "label": "Pack of 1000 (₹18,571)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": true
  },
  {
    "id": "0c6dd6d7-710a-4503-92c6-27fe0109eef7",
    "slug": "3-ply-corrugated-box-15x11x9-inch",
    "title": "3-Ply Brown Corrugated Box (15\" × 11\" × 9\")",
    "name": "3-Ply Brown Corrugated Box (15\" × 11\" × 9\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-15x11x9-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-15x11x9-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-15x11x9-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-15x11x9-inch_2.webp"
    ],
    "price": 379,
    "selling_price": 379,
    "startingAt": 379,
    "mrp": 750,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (15\" × 11\" × 9\")\n📐 Dimensions: 15\" × 11\" × 9\" (38.1 × 27.9 × 22.9 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (15\" × 11\" × 9\")\n• Dimensions (Inches): 15\" × 11\" × 9\"\n• Dimensions (CM): 38.1 × 27.9 × 22.9 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 10 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 10 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (15\" × 11\" × 9\")\n📐 Dimensions: 15\" × 11\" × 9\" (38.1 × 27.9 × 22.9 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (15\" × 11\" × 9\")\n• Dimensions (Inches): 15\" × 11\" × 9\"\n• Dimensions (CM): 38.1 × 27.9 × 22.9 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 10 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 10 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 10,
        "rate": 379,
        "label": "Pack of 10 (₹379)"
      },
      {
        "qty": 20,
        "rate": 752,
        "label": "Pack of 20 (₹752)"
      },
      {
        "qty": 100,
        "rate": 3714,
        "label": "Pack of 100 (₹3,714)"
      },
      {
        "qty": 500,
        "rate": 18476,
        "label": "Pack of 500 (₹18,476)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "083ee63c-c956-490c-a0e8-6b5f4bf92c35",
    "slug": "3-ply-corrugated-box-12x11x6-inch",
    "title": "3-Ply Brown Corrugated Box (12\" × 11\" × 6\")",
    "name": "3-Ply Brown Corrugated Box (12\" × 11\" × 6\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-12x11x6-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-12x11x6-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-12x11x6-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-12x11x6-inch_2.webp"
    ],
    "price": 333,
    "selling_price": 333,
    "startingAt": 333,
    "mrp": 650,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (12\" × 11\" × 6\")\n📐 Dimensions: 12\" × 11\" × 6\" (30.5 × 27.9 × 15.2 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (12\" × 11\" × 6\")\n• Dimensions (Inches): 12\" × 11\" × 6\"\n• Dimensions (CM): 30.5 × 27.9 × 15.2 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 10 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 10 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (12\" × 11\" × 6\")\n📐 Dimensions: 12\" × 11\" × 6\" (30.5 × 27.9 × 15.2 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (12\" × 11\" × 6\")\n• Dimensions (Inches): 12\" × 11\" × 6\"\n• Dimensions (CM): 30.5 × 27.9 × 15.2 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 10 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 10 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 10,
        "rate": 333,
        "label": "Pack of 10 (₹333)"
      },
      {
        "qty": 20,
        "rate": 662,
        "label": "Pack of 20 (₹662)"
      },
      {
        "qty": 100,
        "rate": 3238,
        "label": "Pack of 100 (₹3,238)"
      },
      {
        "qty": 500,
        "rate": 16000,
        "label": "Pack of 500 (₹16,000)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "0ecc7ada-bc18-4a53-bab7-19c8570f9d3f",
    "slug": "3-ply-corrugated-box-12x2x12-inch",
    "title": "3-Ply Brown Corrugated Box (12\" × 2\" × 12\")",
    "name": "3-Ply Brown Corrugated Box (12\" × 2\" × 12\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-12x2x12-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-12x2x12-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-12x2x12-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-12x2x12-inch_2.webp"
    ],
    "price": 408,
    "selling_price": 408,
    "startingAt": 408,
    "mrp": 800,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (12\" × 2\" × 12\")\n📐 Dimensions: 12\" × 2\" × 12\" (30.5 × 5.1 × 30.5 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (12\" × 2\" × 12\")\n• Dimensions (Inches): 12\" × 2\" × 12\"\n• Dimensions (CM): 30.5 × 5.1 × 30.5 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 20 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 20 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (12\" × 2\" × 12\")\n📐 Dimensions: 12\" × 2\" × 12\" (30.5 × 5.1 × 30.5 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (12\" × 2\" × 12\")\n• Dimensions (Inches): 12\" × 2\" × 12\"\n• Dimensions (CM): 30.5 × 5.1 × 30.5 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 20 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 20 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 20,
        "rate": 408,
        "label": "Pack of 20 (₹408)"
      },
      {
        "qty": 100,
        "rate": 1999,
        "label": "Pack of 100 (₹1,999)"
      },
      {
        "qty": 500,
        "rate": 9429,
        "label": "Pack of 500 (₹9,429)"
      },
      {
        "qty": 1000,
        "rate": 18571,
        "label": "Pack of 1000 (₹18,571)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "942725f2-e110-42fa-a0da-b5d619ec915a",
    "slug": "3-ply-corrugated-box-12x8x8-inch",
    "title": "3-Ply Brown Corrugated Box (12\" × 8\" × 8\")",
    "name": "3-Ply Brown Corrugated Box (12\" × 8\" × 8\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-12x8x8-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-12x8x8-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-12x8x8-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-12x8x8-inch_2.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 600,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (12\" × 8\" × 8\")\n📐 Dimensions: 12\" × 8\" × 8\" (30.5 × 20.3 × 20.3 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (12\" × 8\" × 8\")\n• Dimensions (Inches): 12\" × 8\" × 8\"\n• Dimensions (CM): 30.5 × 20.3 × 20.3 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 10 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 10 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (12\" × 8\" × 8\")\n📐 Dimensions: 12\" × 8\" × 8\" (30.5 × 20.3 × 20.3 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (12\" × 8\" × 8\")\n• Dimensions (Inches): 12\" × 8\" × 8\"\n• Dimensions (CM): 30.5 × 20.3 × 20.3 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 10 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 10 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 10,
        "rate": 284,
        "label": "Pack of 10 (₹284)"
      },
      {
        "qty": 20,
        "rate": 560,
        "label": "Pack of 20 (₹560)"
      },
      {
        "qty": 100,
        "rate": 2714,
        "label": "Pack of 100 (₹2,714)"
      },
      {
        "qty": 500,
        "rate": 12571,
        "label": "Pack of 500 (₹12,571)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "2b5eb337-0c1e-481b-93df-e81dc985e909",
    "slug": "3-ply-corrugated-box-12x10x8-inch",
    "title": "3-Ply Brown Corrugated Box (12\" × 10\" × 8\")",
    "name": "3-Ply Brown Corrugated Box (12\" × 10\" × 8\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-12x10x8-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-12x10x8-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-12x10x8-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-12x10x8-inch_2.webp"
    ],
    "price": 333,
    "selling_price": 333,
    "startingAt": 333,
    "mrp": 650,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (12\" × 10\" × 8\")\n📐 Dimensions: 12\" × 10\" × 8\" (30.5 × 25.4 × 20.3 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (12\" × 10\" × 8\")\n• Dimensions (Inches): 12\" × 10\" × 8\"\n• Dimensions (CM): 30.5 × 25.4 × 20.3 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 10 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 10 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (12\" × 10\" × 8\")\n📐 Dimensions: 12\" × 10\" × 8\" (30.5 × 25.4 × 20.3 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (12\" × 10\" × 8\")\n• Dimensions (Inches): 12\" × 10\" × 8\"\n• Dimensions (CM): 30.5 × 25.4 × 20.3 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 10 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 10 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 10,
        "rate": 333,
        "label": "Pack of 10 (₹333)"
      },
      {
        "qty": 20,
        "rate": 657,
        "label": "Pack of 20 (₹657)"
      },
      {
        "qty": 100,
        "rate": 3190,
        "label": "Pack of 100 (₹3,190)"
      },
      {
        "qty": 500,
        "rate": 15238,
        "label": "Pack of 500 (₹15,238)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "134919a3-004c-431f-a571-dc31aab9d436",
    "slug": "3-ply-corrugated-box-12x4x3-inch",
    "title": "3-Ply Brown Corrugated Box (12\" × 4\" × 3\")",
    "name": "3-Ply Brown Corrugated Box (12\" × 4\" × 3\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-12x4x3-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-12x4x3-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-12x4x3-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-12x4x3-inch_2.webp"
    ],
    "price": 236,
    "selling_price": 236,
    "startingAt": 236,
    "mrp": 500,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (12\" × 4\" × 3\")\n📐 Dimensions: 12\" × 4\" × 3\" (30.5 × 10.2 × 7.6 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (12\" × 4\" × 3\")\n• Dimensions (Inches): 12\" × 4\" × 3\"\n• Dimensions (CM): 30.5 × 10.2 × 7.6 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (12\" × 4\" × 3\")\n📐 Dimensions: 12\" × 4\" × 3\" (30.5 × 10.2 × 7.6 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (12\" × 4\" × 3\")\n• Dimensions (Inches): 12\" × 4\" × 3\"\n• Dimensions (CM): 30.5 × 10.2 × 7.6 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 25,
        "rate": 236,
        "label": "Pack of 25 (₹236)"
      },
      {
        "qty": 50,
        "rate": 455,
        "label": "Pack of 50 (₹455)"
      },
      {
        "qty": 500,
        "rate": 4429,
        "label": "Pack of 500 (₹4,429)"
      },
      {
        "qty": 1000,
        "rate": 8667,
        "label": "Pack of 1000 (₹8,667)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "6fd17b49-8c45-4be9-8b7c-2eba9356dec6",
    "slug": "3-ply-corrugated-box-11x6x5-inch",
    "title": "3-Ply Brown Corrugated Box (11\" × 6\" × 5\")",
    "name": "3-Ply Brown Corrugated Box (11\" × 6\" × 5\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-11x6x5-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-11x6x5-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-11x6x5-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-11x6x5-inch_2.webp"
    ],
    "price": 371,
    "selling_price": 371,
    "startingAt": 371,
    "mrp": 660,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (11\" × 6\" × 5\")\n📐 Dimensions: 11\" × 6\" × 5\" (27.9 × 15.2 × 12.7 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (11\" × 6\" × 5\")\n• Dimensions (Inches): 11\" × 6\" × 5\"\n• Dimensions (CM): 27.9 × 15.2 × 12.7 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (11\" × 6\" × 5\")\n📐 Dimensions: 11\" × 6\" × 5\" (27.9 × 15.2 × 12.7 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (11\" × 6\" × 5\")\n• Dimensions (Inches): 11\" × 6\" × 5\"\n• Dimensions (CM): 27.9 × 15.2 × 12.7 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 25,
        "rate": 371,
        "label": "Pack of 25 (₹371)"
      },
      {
        "qty": 50,
        "rate": 733,
        "label": "Pack of 50 (₹733)"
      },
      {
        "qty": 500,
        "rate": 7238,
        "label": "Pack of 500 (₹7,238)"
      },
      {
        "qty": 1000,
        "rate": 14190,
        "label": "Pack of 1000 (₹14,190)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "14d2d1ea-37a5-4891-a077-6d0a4cf79557",
    "slug": "3-ply-corrugated-box-10x4-5x3-5-inch",
    "title": "3-Ply Brown Corrugated Box (10\" × 4.5\" × 3.5\")",
    "name": "3-Ply Brown Corrugated Box (10\" × 4.5\" × 3.5\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-10x4-5x3-5-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-10x4-5x3-5-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-10x4-5x3-5-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-10x4-5x3-5-inch_2.webp"
    ],
    "price": 236,
    "selling_price": 236,
    "startingAt": 236,
    "mrp": 400,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (10\" × 4.5\" × 3.5\")\n📐 Dimensions: 10\" × 4.5\" × 3.5\" (25.4 × 11.4 × 8.9 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (10\" × 4.5\" × 3.5\")\n• Dimensions (Inches): 10\" × 4.5\" × 3.5\"\n• Dimensions (CM): 25.4 × 11.4 × 8.9 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (10\" × 4.5\" × 3.5\")\n📐 Dimensions: 10\" × 4.5\" × 3.5\" (25.4 × 11.4 × 8.9 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (10\" × 4.5\" × 3.5\")\n• Dimensions (Inches): 10\" × 4.5\" × 3.5\"\n• Dimensions (CM): 25.4 × 11.4 × 8.9 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 25,
        "rate": 236,
        "label": "Pack of 25 (₹236)"
      },
      {
        "qty": 50,
        "rate": 455,
        "label": "Pack of 50 (₹455)"
      },
      {
        "qty": 500,
        "rate": 4429,
        "label": "Pack of 500 (₹4,429)"
      },
      {
        "qty": 1000,
        "rate": 8667,
        "label": "Pack of 1000 (₹8,667)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "3fb285cd-4b40-4540-8d91-acfb79f29531",
    "slug": "3-ply-corrugated-box-9x6x4-5-inch",
    "title": "3-Ply Brown Corrugated Box (9\" × 6\" × 4.5\")",
    "name": "3-Ply Brown Corrugated Box (9\" × 6\" × 4.5\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-9x6x4-5-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-9x6x4-5-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-9x6x4-5-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-9x6x4-5-inch_2.webp"
    ],
    "price": 379,
    "selling_price": 379,
    "startingAt": 379,
    "mrp": 720,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (9\" × 6\" × 4.5\")\n📐 Dimensions: 9\" × 6\" × 4.5\" (22.9 × 15.2 × 11.4 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (9\" × 6\" × 4.5\")\n• Dimensions (Inches): 9\" × 6\" × 4.5\"\n• Dimensions (CM): 22.9 × 15.2 × 11.4 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (9\" × 6\" × 4.5\")\n📐 Dimensions: 9\" × 6\" × 4.5\" (22.9 × 15.2 × 11.4 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (9\" × 6\" × 4.5\")\n• Dimensions (Inches): 9\" × 6\" × 4.5\"\n• Dimensions (CM): 22.9 × 15.2 × 11.4 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 25,
        "rate": 379,
        "label": "Pack of 25 (₹379)"
      },
      {
        "qty": 50,
        "rate": 743,
        "label": "Pack of 50 (₹743)"
      },
      {
        "qty": 500,
        "rate": 7143,
        "label": "Pack of 500 (₹7,143)"
      },
      {
        "qty": 1000,
        "rate": 13524,
        "label": "Pack of 1000 (₹13,524)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "53f65134-ebf2-4a05-a3e9-077d8330fb82",
    "slug": "3-ply-corrugated-box-9x4x2-inch",
    "title": "3-Ply Brown Corrugated Box (9\" × 4\" × 2\")",
    "name": "3-Ply Brown Corrugated Box (9\" × 4\" × 2\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-9x4x2-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-9x4x2-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-9x4x2-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-9x4x2-inch_2.webp"
    ],
    "price": 379,
    "selling_price": 379,
    "startingAt": 379,
    "mrp": 758,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (9\" × 4\" × 2\")\n📐 Dimensions: 9\" × 4\" × 2\" (22.9 × 10.2 × 5.1 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (9\" × 4\" × 2\")\n• Dimensions (Inches): 9\" × 4\" × 2\"\n• Dimensions (CM): 22.9 × 10.2 × 5.1 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (9\" × 4\" × 2\")\n📐 Dimensions: 9\" × 4\" × 2\" (22.9 × 10.2 × 5.1 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (9\" × 4\" × 2\")\n• Dimensions (Inches): 9\" × 4\" × 2\"\n• Dimensions (CM): 22.9 × 10.2 × 5.1 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 379,
        "label": "Pack of 50 (₹379)"
      },
      {
        "qty": 100,
        "rate": 741,
        "label": "Pack of 100 (₹741)"
      },
      {
        "qty": 500,
        "rate": 3571,
        "label": "Pack of 500 (₹3,571)"
      },
      {
        "qty": 1000,
        "rate": 6952,
        "label": "Pack of 1000 (₹6,952)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": true
  },
  {
    "id": "00519982-44ef-4186-a52f-bf7c48982a0b",
    "slug": "3-ply-corrugated-box-9x6x3-inch",
    "title": "3-Ply Brown Corrugated Box (9\" × 6\" × 3\")",
    "name": "3-Ply Brown Corrugated Box (9\" × 6\" × 3\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-9x6x3-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-9x6x3-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-9x6x3-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-9x6x3-inch_2.webp"
    ],
    "price": 236,
    "selling_price": 236,
    "startingAt": 236,
    "mrp": 472,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (9\" × 6\" × 3\")\n📐 Dimensions: 9\" × 6\" × 3\" (22.9 × 15.2 × 7.6 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (9\" × 6\" × 3\")\n• Dimensions (Inches): 9\" × 6\" × 3\"\n• Dimensions (CM): 22.9 × 15.2 × 7.6 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (9\" × 6\" × 3\")\n📐 Dimensions: 9\" × 6\" × 3\" (22.9 × 15.2 × 7.6 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (9\" × 6\" × 3\")\n• Dimensions (Inches): 9\" × 6\" × 3\"\n• Dimensions (CM): 22.9 × 15.2 × 7.6 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 25,
        "rate": 236,
        "label": "Pack of 25 (₹236)"
      },
      {
        "qty": 50,
        "rate": 467,
        "label": "Pack of 50 (₹467)"
      },
      {
        "qty": 500,
        "rate": 4571,
        "label": "Pack of 500 (₹4,571)"
      },
      {
        "qty": 1000,
        "rate": 9048,
        "label": "Pack of 1000 (₹9,048)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "cfa911d3-fdf2-4145-b3ba-166d34093927",
    "slug": "3-ply-corrugated-box-9x3x3-inch",
    "title": "3-Ply Brown Corrugated Box (9\" × 3\" × 3\")",
    "name": "3-Ply Brown Corrugated Box (9\" × 3\" × 3\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-9x3x3-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-9x3x3-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-9x3x3-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-9x3x3-inch_2.webp"
    ],
    "price": 379,
    "selling_price": 379,
    "startingAt": 379,
    "mrp": 758,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (9\" × 3\" × 3\")\n📐 Dimensions: 9\" × 3\" × 3\" (22.9 × 7.6 × 7.6 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (9\" × 3\" × 3\")\n• Dimensions (Inches): 9\" × 3\" × 3\"\n• Dimensions (CM): 22.9 × 7.6 × 7.6 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (9\" × 3\" × 3\")\n📐 Dimensions: 9\" × 3\" × 3\" (22.9 × 7.6 × 7.6 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (9\" × 3\" × 3\")\n• Dimensions (Inches): 9\" × 3\" × 3\"\n• Dimensions (CM): 22.9 × 7.6 × 7.6 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 379,
        "label": "Pack of 50 (₹379)"
      },
      {
        "qty": 100,
        "rate": 712,
        "label": "Pack of 100 (₹712)"
      },
      {
        "qty": 500,
        "rate": 3524,
        "label": "Pack of 500 (₹3,524)"
      },
      {
        "qty": 1000,
        "rate": 6857,
        "label": "Pack of 1000 (₹6,857)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "6883452e-6e66-439b-b1a7-bc28ea4a62d4",
    "slug": "3-ply-corrugated-box-9x6x6-inch",
    "title": "3-Ply Brown Corrugated Box (9\" × 6\" × 6\")",
    "name": "3-Ply Brown Corrugated Box (9\" × 6\" × 6\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-9x6x6-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-9x6x6-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-9x6x6-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-9x6x6-inch_2.webp"
    ],
    "price": 371,
    "selling_price": 371,
    "startingAt": 371,
    "mrp": 660,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (9\" × 6\" × 6\")\n📐 Dimensions: 9\" × 6\" × 6\" (22.9 × 15.2 × 15.2 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (9\" × 6\" × 6\")\n• Dimensions (Inches): 9\" × 6\" × 6\"\n• Dimensions (CM): 22.9 × 15.2 × 15.2 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (9\" × 6\" × 6\")\n📐 Dimensions: 9\" × 6\" × 6\" (22.9 × 15.2 × 15.2 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (9\" × 6\" × 6\")\n• Dimensions (Inches): 9\" × 6\" × 6\"\n• Dimensions (CM): 22.9 × 15.2 × 15.2 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 25,
        "rate": 371,
        "label": "Pack of 25 (₹371)"
      },
      {
        "qty": 50,
        "rate": 712,
        "label": "Pack of 50 (₹712)"
      },
      {
        "qty": 500,
        "rate": 7349,
        "label": "Pack of 500 (₹7,349)"
      },
      {
        "qty": 1000,
        "rate": 13810,
        "label": "Pack of 1000 (₹13,810)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "e2689e2f-b8ce-4677-a183-4085e736380e",
    "slug": "3-ply-corrugated-box-9x7-5x4-5-inch",
    "title": "3-Ply Brown Corrugated Box (9\" × 7.5\" × 4.5\")",
    "name": "3-Ply Brown Corrugated Box (9\" × 7.5\" × 4.5\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-9x7-5x4-5-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-9x7-5x4-5-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-9x7-5x4-5-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-9x7-5x4-5-inch_2.webp"
    ],
    "price": 371,
    "selling_price": 371,
    "startingAt": 371,
    "mrp": 660,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (9\" × 7.5\" × 4.5\")\n📐 Dimensions: 9\" × 7.5\" × 4.5\" (22.9 × 19.1 × 11.4 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (9\" × 7.5\" × 4.5\")\n• Dimensions (Inches): 9\" × 7.5\" × 4.5\"\n• Dimensions (CM): 22.9 × 19.1 × 11.4 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (9\" × 7.5\" × 4.5\")\n📐 Dimensions: 9\" × 7.5\" × 4.5\" (22.9 × 19.1 × 11.4 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (9\" × 7.5\" × 4.5\")\n• Dimensions (Inches): 9\" × 7.5\" × 4.5\"\n• Dimensions (CM): 22.9 × 19.1 × 11.4 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 25,
        "rate": 371,
        "label": "Pack of 25 (₹371)"
      },
      {
        "qty": 50,
        "rate": 733,
        "label": "Pack of 50 (₹733)"
      },
      {
        "qty": 500,
        "rate": 7238,
        "label": "Pack of 500 (₹7,238)"
      },
      {
        "qty": 1000,
        "rate": 14286,
        "label": "Pack of 1000 (₹14,286)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "5d061d5f-a762-4e89-b7f8-fcc475088d46",
    "slug": "3-ply-corrugated-box-8x4x8-inch",
    "title": "3-Ply Brown Corrugated Box (8\" × 4\" × 8\")",
    "name": "3-Ply Brown Corrugated Box (8\" × 4\" × 8\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-8x4x8-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-8x4x8-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-8x4x8-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-8x4x8-inch_2.webp"
    ],
    "price": 331,
    "selling_price": 331,
    "startingAt": 331,
    "mrp": 700,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (8\" × 4\" × 8\")\n📐 Dimensions: 8\" × 4\" × 8\" (20.3 × 10.2 × 20.3 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (8\" × 4\" × 8\")\n• Dimensions (Inches): 8\" × 4\" × 8\"\n• Dimensions (CM): 20.3 × 10.2 × 20.3 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (8\" × 4\" × 8\")\n📐 Dimensions: 8\" × 4\" × 8\" (20.3 × 10.2 × 20.3 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (8\" × 4\" × 8\")\n• Dimensions (Inches): 8\" × 4\" × 8\"\n• Dimensions (CM): 20.3 × 10.2 × 20.3 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 25,
        "rate": 331,
        "label": "Pack of 25 (₹331)"
      },
      {
        "qty": 50,
        "rate": 646,
        "label": "Pack of 50 (₹646)"
      },
      {
        "qty": 500,
        "rate": 6286,
        "label": "Pack of 500 (₹6,286)"
      },
      {
        "qty": 1000,
        "rate": 11905,
        "label": "Pack of 1000 (₹11,905)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "2e134833-ec4e-4813-b5fb-517e2ade47fb",
    "slug": "3-ply-corrugated-box-8x4x4-inch",
    "title": "3-Ply Brown Corrugated Box (8\" × 4\" × 4\")",
    "name": "3-Ply Brown Corrugated Box (8\" × 4\" × 4\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-8x4x4-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-8x4x4-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-8x4x4-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-8x4x4-inch_2.webp"
    ],
    "price": 408,
    "selling_price": 408,
    "startingAt": 408,
    "mrp": 814,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (8\" × 4\" × 4\")\n📐 Dimensions: 8\" × 4\" × 4\" (20.3 × 10.2 × 10.2 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (8\" × 4\" × 4\")\n• Dimensions (Inches): 8\" × 4\" × 4\"\n• Dimensions (CM): 20.3 × 10.2 × 10.2 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (8\" × 4\" × 4\")\n📐 Dimensions: 8\" × 4\" × 4\" (20.3 × 10.2 × 10.2 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (8\" × 4\" × 4\")\n• Dimensions (Inches): 8\" × 4\" × 4\"\n• Dimensions (CM): 20.3 × 10.2 × 10.2 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 408,
        "label": "Pack of 50 (₹408)"
      },
      {
        "qty": 100,
        "rate": 760,
        "label": "Pack of 100 (₹760)"
      },
      {
        "qty": 500,
        "rate": 3749,
        "label": "Pack of 500 (₹3,749)"
      },
      {
        "qty": 1000,
        "rate": 7298,
        "label": "Pack of 1000 (₹7,298)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "146e0604-b6c7-41fe-9318-85ea3b50e8b2",
    "slug": "3-ply-corrugated-box-8x5x2-inch",
    "title": "3-Ply Brown Corrugated Box (8\" × 5\" × 2\")",
    "name": "3-Ply Brown Corrugated Box (8\" × 5\" × 2\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-8x5x2-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-8x5x2-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-8x5x2-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-8x5x2-inch_2.webp"
    ],
    "price": 379,
    "selling_price": 379,
    "startingAt": 379,
    "mrp": 800,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (8\" × 5\" × 2\")\n📐 Dimensions: 8\" × 5\" × 2\" (20.3 × 12.7 × 5.1 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (8\" × 5\" × 2\")\n• Dimensions (Inches): 8\" × 5\" × 2\"\n• Dimensions (CM): 20.3 × 12.7 × 5.1 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (8\" × 5\" × 2\")\n📐 Dimensions: 8\" × 5\" × 2\" (20.3 × 12.7 × 5.1 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (8\" × 5\" × 2\")\n• Dimensions (Inches): 8\" × 5\" × 2\"\n• Dimensions (CM): 20.3 × 12.7 × 5.1 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 379,
        "label": "Pack of 50 (₹379)"
      },
      {
        "qty": 100,
        "rate": 741,
        "label": "Pack of 100 (₹741)"
      },
      {
        "qty": 500,
        "rate": 3619,
        "label": "Pack of 500 (₹3,619)"
      },
      {
        "qty": 1000,
        "rate": 7095,
        "label": "Pack of 1000 (₹7,095)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "5fa13f30-e574-41eb-a66e-a07c0cf415ca",
    "slug": "3-ply-corrugated-box-8x5x3-5-inch",
    "title": "3-Ply Brown Corrugated Box (8\" × 5\" × 3.5\")",
    "name": "3-Ply Brown Corrugated Box (8\" × 5\" × 3.5\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-8x5x3-5-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-8x5x3-5-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-8x5x3-5-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-8x5x3-5-inch_2.webp"
    ],
    "price": 236,
    "selling_price": 236,
    "startingAt": 236,
    "mrp": 600,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (8\" × 5\" × 3.5\")\n📐 Dimensions: 8\" × 5\" × 3.5\" (20.3 × 12.7 × 8.9 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (8\" × 5\" × 3.5\")\n• Dimensions (Inches): 8\" × 5\" × 3.5\"\n• Dimensions (CM): 20.3 × 12.7 × 8.9 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (8\" × 5\" × 3.5\")\n📐 Dimensions: 8\" × 5\" × 3.5\" (20.3 × 12.7 × 8.9 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (8\" × 5\" × 3.5\")\n• Dimensions (Inches): 8\" × 5\" × 3.5\"\n• Dimensions (CM): 20.3 × 12.7 × 8.9 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 25,
        "rate": 236,
        "label": "Pack of 25 (₹236)"
      },
      {
        "qty": 50,
        "rate": 457,
        "label": "Pack of 50 (₹457)"
      },
      {
        "qty": 500,
        "rate": 4190,
        "label": "Pack of 500 (₹4,190)"
      },
      {
        "qty": 1000,
        "rate": 8762,
        "label": "Pack of 1000 (₹8,762)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "34f3e2ed-891c-405c-b12d-6678c2a57c83",
    "slug": "3-ply-corrugated-box-8x8x3-inch",
    "title": "3-Ply Brown Corrugated Box (8\" × 8\" × 3\")",
    "name": "3-Ply Brown Corrugated Box (8\" × 8\" × 3\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-8x8x3-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-8x8x3-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-8x8x3-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-8x8x3-inch_2.webp"
    ],
    "price": 362,
    "selling_price": 362,
    "startingAt": 362,
    "mrp": 700,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (8\" × 8\" × 3\")\n📐 Dimensions: 8\" × 8\" × 3\" (20.3 × 20.3 × 7.6 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (8\" × 8\" × 3\")\n• Dimensions (Inches): 8\" × 8\" × 3\"\n• Dimensions (CM): 20.3 × 20.3 × 7.6 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (8\" × 8\" × 3\")\n📐 Dimensions: 8\" × 8\" × 3\" (20.3 × 20.3 × 7.6 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (8\" × 8\" × 3\")\n• Dimensions (Inches): 8\" × 8\" × 3\"\n• Dimensions (CM): 20.3 × 20.3 × 7.6 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 25,
        "rate": 362,
        "label": "Pack of 25 (₹362)"
      },
      {
        "qty": 50,
        "rate": 714,
        "label": "Pack of 50 (₹714)"
      },
      {
        "qty": 500,
        "rate": 7048,
        "label": "Pack of 500 (₹7,048)"
      },
      {
        "qty": 1000,
        "rate": 14857,
        "label": "Pack of 1000 (₹14,857)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "72928e07-5430-4647-9791-7bb7f3b325e0",
    "slug": "3-ply-corrugated-box-7-5x4-5x3-5-inch",
    "title": "3-Ply Brown Corrugated Box (7.5\" × 4.5\" × 3.5\")",
    "name": "3-Ply Brown Corrugated Box (7.5\" × 4.5\" × 3.5\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-7-5x4-5x3-5-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-7-5x4-5x3-5-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-7-5x4-5x3-5-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-7-5x4-5x3-5-inch_2.webp"
    ],
    "price": 408,
    "selling_price": 408,
    "startingAt": 408,
    "mrp": 700,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (7.5\" × 4.5\" × 3.5\")\n📐 Dimensions: 7.5\" × 4.5\" × 3.5\" (19.1 × 11.4 × 8.9 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (7.5\" × 4.5\" × 3.5\")\n• Dimensions (Inches): 7.5\" × 4.5\" × 3.5\"\n• Dimensions (CM): 19.1 × 11.4 × 8.9 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (7.5\" × 4.5\" × 3.5\")\n📐 Dimensions: 7.5\" × 4.5\" × 3.5\" (19.1 × 11.4 × 8.9 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (7.5\" × 4.5\" × 3.5\")\n• Dimensions (Inches): 7.5\" × 4.5\" × 3.5\"\n• Dimensions (CM): 19.1 × 11.4 × 8.9 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 408,
        "label": "Pack of 50 (₹408)"
      },
      {
        "qty": 100,
        "rate": 760,
        "label": "Pack of 100 (₹760)"
      },
      {
        "qty": 500,
        "rate": 3749,
        "label": "Pack of 500 (₹3,749)"
      },
      {
        "qty": 1000,
        "rate": 7298,
        "label": "Pack of 1000 (₹7,298)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "73df9ee8-d371-475b-be9e-ebd78b20bba4",
    "slug": "3-ply-corrugated-box-7x5-25x4-25-inch",
    "title": "3-Ply Brown Corrugated Box (7\" × 5.25\" × 4.25\")",
    "name": "3-Ply Brown Corrugated Box (7\" × 5.25\" × 4.25\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-7x5-25x4-25-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-7x5-25x4-25-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-7x5-25x4-25-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-7x5-25x4-25-inch_2.webp"
    ],
    "price": 236,
    "selling_price": 236,
    "startingAt": 236,
    "mrp": 700,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (7\" × 5.25\" × 4.25\")\n📐 Dimensions: 7\" × 5.25\" × 4.25\" (17.8 × 13.3 × 10.8 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (7\" × 5.25\" × 4.25\")\n• Dimensions (Inches): 7\" × 5.25\" × 4.25\"\n• Dimensions (CM): 17.8 × 13.3 × 10.8 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (7\" × 5.25\" × 4.25\")\n📐 Dimensions: 7\" × 5.25\" × 4.25\" (17.8 × 13.3 × 10.8 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (7\" × 5.25\" × 4.25\")\n• Dimensions (Inches): 7\" × 5.25\" × 4.25\"\n• Dimensions (CM): 17.8 × 13.3 × 10.8 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 25,
        "rate": 236,
        "label": "Pack of 25 (₹236)"
      },
      {
        "qty": 50,
        "rate": 467,
        "label": "Pack of 50 (₹467)"
      },
      {
        "qty": 500,
        "rate": 4571,
        "label": "Pack of 500 (₹4,571)"
      },
      {
        "qty": 1000,
        "rate": 9048,
        "label": "Pack of 1000 (₹9,048)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "4f078a11-4f96-422e-bfa5-d1d95abf6354",
    "slug": "3-ply-corrugated-box-7x4x3-5-inch",
    "title": "3-Ply Brown Corrugated Box (7\" × 4\" × 3.5\")",
    "name": "3-Ply Brown Corrugated Box (7\" × 4\" × 3.5\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-7x4x3-5-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-7x4x3-5-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-7x4x3-5-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-7x4x3-5-inch_2.webp"
    ],
    "price": 331,
    "selling_price": 331,
    "startingAt": 331,
    "mrp": 662,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (7\" × 4\" × 3.5\")\n📐 Dimensions: 7\" × 4\" × 3.5\" (17.8 × 10.2 × 8.9 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (7\" × 4\" × 3.5\")\n• Dimensions (Inches): 7\" × 4\" × 3.5\"\n• Dimensions (CM): 17.8 × 10.2 × 8.9 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (7\" × 4\" × 3.5\")\n📐 Dimensions: 7\" × 4\" × 3.5\" (17.8 × 10.2 × 8.9 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (7\" × 4\" × 3.5\")\n• Dimensions (Inches): 7\" × 4\" × 3.5\"\n• Dimensions (CM): 17.8 × 10.2 × 8.9 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 331,
        "label": "Pack of 50 (₹331)"
      },
      {
        "qty": 100,
        "rate": 648,
        "label": "Pack of 100 (₹648)"
      },
      {
        "qty": 500,
        "rate": 3199,
        "label": "Pack of 500 (₹3,199)"
      },
      {
        "qty": 1000,
        "rate": 6280,
        "label": "Pack of 1000 (₹6,280)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "82b5d1f8-405c-4aa6-a3aa-9b1ccd5044df",
    "slug": "3-ply-corrugated-box-7x4x2-inch",
    "title": "3-Ply Brown Corrugated Box (7\" × 4\" × 2\")",
    "name": "3-Ply Brown Corrugated Box (7\" × 4\" × 2\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-7x4x2-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-7x4x2-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-7x4x2-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-7x4x2-inch_2.webp"
    ],
    "price": 189,
    "selling_price": 189,
    "startingAt": 189,
    "mrp": 376,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (7\" × 4\" × 2\")\n📐 Dimensions: 7\" × 4\" × 2\" (17.8 × 10.2 × 5.1 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (7\" × 4\" × 2\")\n• Dimensions (Inches): 7\" × 4\" × 2\"\n• Dimensions (CM): 17.8 × 10.2 × 5.1 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (7\" × 4\" × 2\")\n📐 Dimensions: 7\" × 4\" × 2\" (17.8 × 10.2 × 5.1 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (7\" × 4\" × 2\")\n• Dimensions (Inches): 7\" × 4\" × 2\"\n• Dimensions (CM): 17.8 × 10.2 × 5.1 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 25,
        "rate": 189,
        "label": "Pack of 25 (₹189)"
      },
      {
        "qty": 50,
        "rate": 312,
        "label": "Pack of 50 (₹312)"
      },
      {
        "qty": 500,
        "rate": 3048,
        "label": "Pack of 500 (₹3,048)"
      },
      {
        "qty": 1000,
        "rate": 5905,
        "label": "Pack of 1000 (₹5,905)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "2453d990-59b9-41f4-8277-d7298f9d4d99",
    "slug": "3-ply-corrugated-box-7x7x7-inch",
    "title": "3-Ply Brown Corrugated Box (7\" × 7\" × 7\")",
    "name": "3-Ply Brown Corrugated Box (7\" × 7\" × 7\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-7x7x7-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-7x7x7-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-7x7x7-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-7x7x7-inch_2.webp"
    ],
    "price": 379,
    "selling_price": 379,
    "startingAt": 379,
    "mrp": 700,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (7\" × 7\" × 7\")\n📐 Dimensions: 7\" × 7\" × 7\" (17.8 × 17.8 × 17.8 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (7\" × 7\" × 7\")\n• Dimensions (Inches): 7\" × 7\" × 7\"\n• Dimensions (CM): 17.8 × 17.8 × 17.8 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (7\" × 7\" × 7\")\n📐 Dimensions: 7\" × 7\" × 7\" (17.8 × 17.8 × 17.8 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (7\" × 7\" × 7\")\n• Dimensions (Inches): 7\" × 7\" × 7\"\n• Dimensions (CM): 17.8 × 17.8 × 17.8 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 25,
        "rate": 379,
        "label": "Pack of 25 (₹379)"
      },
      {
        "qty": 50,
        "rate": 743,
        "label": "Pack of 50 (₹743)"
      },
      {
        "qty": 500,
        "rate": 7333,
        "label": "Pack of 500 (₹7,333)"
      },
      {
        "qty": 1000,
        "rate": 14286,
        "label": "Pack of 1000 (₹14,286)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "5222115c-6918-4283-bc6a-575755eca2dd",
    "slug": "3-ply-corrugated-box-6x4x4-inch",
    "title": "3-Ply Brown Corrugated Box (6\" × 4\" × 4\")",
    "name": "3-Ply Brown Corrugated Box (6\" × 4\" × 4\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-6x4x4-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-6x4x4-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-6x4x4-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-6x4x4-inch_2.webp"
    ],
    "price": 331,
    "selling_price": 331,
    "startingAt": 331,
    "mrp": 662,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (6\" × 4\" × 4\")\n📐 Dimensions: 6\" × 4\" × 4\" (15.2 × 10.2 × 10.2 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (6\" × 4\" × 4\")\n• Dimensions (Inches): 6\" × 4\" × 4\"\n• Dimensions (CM): 15.2 × 10.2 × 10.2 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (6\" × 4\" × 4\")\n📐 Dimensions: 6\" × 4\" × 4\" (15.2 × 10.2 × 10.2 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (6\" × 4\" × 4\")\n• Dimensions (Inches): 6\" × 4\" × 4\"\n• Dimensions (CM): 15.2 × 10.2 × 10.2 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 331,
        "label": "Pack of 50 (₹331)"
      },
      {
        "qty": 100,
        "rate": 648,
        "label": "Pack of 100 (₹648)"
      },
      {
        "qty": 500,
        "rate": 3199,
        "label": "Pack of 500 (₹3,199)"
      },
      {
        "qty": 1000,
        "rate": 6280,
        "label": "Pack of 1000 (₹6,280)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "9b4e6194-783e-49c9-b058-7ecd52e96ec2",
    "slug": "3-ply-corrugated-box-6x5x2-inch",
    "title": "3-Ply Brown Corrugated Box (6\" × 5\" × 2\")",
    "name": "3-Ply Brown Corrugated Box (6\" × 5\" × 2\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-6x5x2-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-6x5x2-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-6x5x2-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-6x5x2-inch_2.webp"
    ],
    "price": 331,
    "selling_price": 331,
    "startingAt": 331,
    "mrp": 662,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (6\" × 5\" × 2\")\n📐 Dimensions: 6\" × 5\" × 2\" (15.2 × 12.7 × 5.1 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (6\" × 5\" × 2\")\n• Dimensions (Inches): 6\" × 5\" × 2\"\n• Dimensions (CM): 15.2 × 12.7 × 5.1 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (6\" × 5\" × 2\")\n📐 Dimensions: 6\" × 5\" × 2\" (15.2 × 12.7 × 5.1 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (6\" × 5\" × 2\")\n• Dimensions (Inches): 6\" × 5\" × 2\"\n• Dimensions (CM): 15.2 × 12.7 × 5.1 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 331,
        "label": "Pack of 50 (₹331)"
      },
      {
        "qty": 100,
        "rate": 648,
        "label": "Pack of 100 (₹648)"
      },
      {
        "qty": 500,
        "rate": 3199,
        "label": "Pack of 500 (₹3,199)"
      },
      {
        "qty": 1000,
        "rate": 6280,
        "label": "Pack of 1000 (₹6,280)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "3ea77483-6d1a-4cb7-8e5a-7a6f5f180668",
    "slug": "3-ply-corrugated-box-6x3x3-inch",
    "title": "3-Ply Brown Corrugated Box (6\" × 3\" × 3\")",
    "name": "3-Ply Brown Corrugated Box (6\" × 3\" × 3\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-6x3x3-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-6x3x3-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-6x3x3-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-6x3x3-inch_2.webp"
    ],
    "price": 312,
    "selling_price": 312,
    "startingAt": 312,
    "mrp": 624,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (6\" × 3\" × 3\")\n📐 Dimensions: 6\" × 3\" × 3\" (15.2 × 7.6 × 7.6 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (6\" × 3\" × 3\")\n• Dimensions (Inches): 6\" × 3\" × 3\"\n• Dimensions (CM): 15.2 × 7.6 × 7.6 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (6\" × 3\" × 3\")\n📐 Dimensions: 6\" × 3\" × 3\" (15.2 × 7.6 × 7.6 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (6\" × 3\" × 3\")\n• Dimensions (Inches): 6\" × 3\" × 3\"\n• Dimensions (CM): 15.2 × 7.6 × 7.6 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 312,
        "label": "Pack of 50 (₹312)"
      },
      {
        "qty": 100,
        "rate": 610,
        "label": "Pack of 100 (₹610)"
      },
      {
        "qty": 500,
        "rate": 3048,
        "label": "Pack of 500 (₹3,048)"
      },
      {
        "qty": 1000,
        "rate": 5905,
        "label": "Pack of 1000 (₹5,905)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "145df82f-44b3-4b0d-a5b9-48a8c50a5c70",
    "slug": "3-ply-corrugated-box-6x6x3-inch",
    "title": "3-Ply Brown Corrugated Box (6\" × 6\" × 3\")",
    "name": "3-Ply Brown Corrugated Box (6\" × 6\" × 3\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-6x6x3-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-6x6x3-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-6x6x3-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-6x6x3-inch_2.webp"
    ],
    "price": 236,
    "selling_price": 236,
    "startingAt": 236,
    "mrp": 472,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (6\" × 6\" × 3\")\n📐 Dimensions: 6\" × 6\" × 3\" (15.2 × 15.2 × 7.6 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (6\" × 6\" × 3\")\n• Dimensions (Inches): 6\" × 6\" × 3\"\n• Dimensions (CM): 15.2 × 15.2 × 7.6 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (6\" × 6\" × 3\")\n📐 Dimensions: 6\" × 6\" × 3\" (15.2 × 15.2 × 7.6 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (6\" × 6\" × 3\")\n• Dimensions (Inches): 6\" × 6\" × 3\"\n• Dimensions (CM): 15.2 × 15.2 × 7.6 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 25,
        "rate": 236,
        "label": "Pack of 25 (₹236)"
      },
      {
        "qty": 50,
        "rate": 467,
        "label": "Pack of 50 (₹467)"
      },
      {
        "qty": 500,
        "rate": 4571,
        "label": "Pack of 500 (₹4,571)"
      },
      {
        "qty": 1000,
        "rate": 9048,
        "label": "Pack of 1000 (₹9,048)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "5a537f6d-1802-4fd9-8c5d-1b6e230745ba",
    "slug": "3-ply-corrugated-box-6x6x6-inch",
    "title": "3-Ply Brown Corrugated Box (6\" × 6\" × 6\")",
    "name": "3-Ply Brown Corrugated Box (6\" × 6\" × 6\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-6x6x6-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-6x6x6-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-6x6x6-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-6x6x6-inch_2.webp"
    ],
    "price": 312,
    "selling_price": 312,
    "startingAt": 312,
    "mrp": 624,
    "moq": 1,
    "badge": "HOT DEAL",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (6\" × 6\" × 6\")\n📐 Dimensions: 6\" × 6\" × 6\" (15.2 × 15.2 × 15.2 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (6\" × 6\" × 6\")\n• Dimensions (Inches): 6\" × 6\" × 6\"\n• Dimensions (CM): 15.2 × 15.2 × 15.2 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (6\" × 6\" × 6\")\n📐 Dimensions: 6\" × 6\" × 6\" (15.2 × 15.2 × 15.2 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (6\" × 6\" × 6\")\n• Dimensions (Inches): 6\" × 6\" × 6\"\n• Dimensions (CM): 15.2 × 15.2 × 15.2 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 25 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 25 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 25,
        "rate": 312,
        "label": "Pack of 25 (₹312)"
      },
      {
        "qty": 50,
        "rate": 610,
        "label": "Pack of 50 (₹610)"
      },
      {
        "qty": 500,
        "rate": 5905,
        "label": "Pack of 500 (₹5,905)"
      },
      {
        "qty": 1000,
        "rate": 11429,
        "label": "Pack of 1000 (₹11,429)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "a8549b86-956b-4584-b90d-27a61026283d",
    "slug": "3-ply-corrugated-box-5x5x5-inch",
    "title": "3-Ply Brown Corrugated Box (5\" × 5\" × 5\")",
    "name": "3-Ply Brown Corrugated Box (5\" × 5\" × 5\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-5x5x5-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-5x5x5-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-5x5x5-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-5x5x5-inch_2.webp"
    ],
    "price": 379,
    "selling_price": 379,
    "startingAt": 379,
    "mrp": 758,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (5\" × 5\" × 5\")\n📐 Dimensions: 5\" × 5\" × 5\" (12.7 × 12.7 × 12.7 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (5\" × 5\" × 5\")\n• Dimensions (Inches): 5\" × 5\" × 5\"\n• Dimensions (CM): 12.7 × 12.7 × 12.7 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (5\" × 5\" × 5\")\n📐 Dimensions: 5\" × 5\" × 5\" (12.7 × 12.7 × 12.7 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (5\" × 5\" × 5\")\n• Dimensions (Inches): 5\" × 5\" × 5\"\n• Dimensions (CM): 12.7 × 12.7 × 12.7 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 379,
        "label": "Pack of 50 (₹379)"
      },
      {
        "qty": 100,
        "rate": 752,
        "label": "Pack of 100 (₹752)"
      },
      {
        "qty": 500,
        "rate": 3748,
        "label": "Pack of 500 (₹3,748)"
      },
      {
        "qty": 1000,
        "rate": 6999,
        "label": "Pack of 1000 (₹6,999)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "a3a7b6b0-5390-4196-aa67-b6b8803ab120",
    "slug": "3-ply-corrugated-box-5x4x3-5-inch",
    "title": "3-Ply Brown Corrugated Box (5\" × 4\" × 3.5\")",
    "name": "3-Ply Brown Corrugated Box (5\" × 4\" × 3.5\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-5x4x3-5-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-5x4x3-5-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-5x4x3-5-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-5x4x3-5-inch_2.webp"
    ],
    "price": 331,
    "selling_price": 331,
    "startingAt": 331,
    "mrp": 662,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (5\" × 4\" × 3.5\")\n📐 Dimensions: 5\" × 4\" × 3.5\" (12.7 × 10.2 × 8.9 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (5\" × 4\" × 3.5\")\n• Dimensions (Inches): 5\" × 4\" × 3.5\"\n• Dimensions (CM): 12.7 × 10.2 × 8.9 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (5\" × 4\" × 3.5\")\n📐 Dimensions: 5\" × 4\" × 3.5\" (12.7 × 10.2 × 8.9 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (5\" × 4\" × 3.5\")\n• Dimensions (Inches): 5\" × 4\" × 3.5\"\n• Dimensions (CM): 12.7 × 10.2 × 8.9 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 331,
        "label": "Pack of 50 (₹331)"
      },
      {
        "qty": 100,
        "rate": 617,
        "label": "Pack of 100 (₹617)"
      },
      {
        "qty": 500,
        "rate": 3048,
        "label": "Pack of 500 (₹3,048)"
      },
      {
        "qty": 1000,
        "rate": 5905,
        "label": "Pack of 1000 (₹5,905)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "86dac147-3aa2-48ec-8bc4-723de58a5b70",
    "slug": "3-ply-corrugated-box-5x4x2-5-inch",
    "title": "3-Ply Brown Corrugated Box (5\" × 4\" × 2.5\")",
    "name": "3-Ply Brown Corrugated Box (5\" × 4\" × 2.5\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-5x4x2-5-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-5x4x2-5-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-5x4x2-5-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-5x4x2-5-inch_2.webp"
    ],
    "price": 312,
    "selling_price": 312,
    "startingAt": 312,
    "mrp": 428,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (5\" × 4\" × 2.5\")\n📐 Dimensions: 5\" × 4\" × 2.5\" (12.7 × 10.2 × 6.3 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (5\" × 4\" × 2.5\")\n• Dimensions (Inches): 5\" × 4\" × 2.5\"\n• Dimensions (CM): 12.7 × 10.2 × 6.3 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (5\" × 4\" × 2.5\")\n📐 Dimensions: 5\" × 4\" × 2.5\" (12.7 × 10.2 × 6.3 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (5\" × 4\" × 2.5\")\n• Dimensions (Inches): 5\" × 4\" × 2.5\"\n• Dimensions (CM): 12.7 × 10.2 × 6.3 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 312,
        "label": "Pack of 50 (₹312)"
      },
      {
        "qty": 100,
        "rate": 610,
        "label": "Pack of 100 (₹610)"
      },
      {
        "qty": 500,
        "rate": 2761,
        "label": "Pack of 500 (₹2,761)"
      },
      {
        "qty": 1000,
        "rate": 5699,
        "label": "Pack of 1000 (₹5,699)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "c14cb6ab-b52b-411a-9562-fb398bf5e6de",
    "slug": "3-ply-corrugated-box-4-5x4-5x2-inch",
    "title": "3-Ply Brown Corrugated Box (4.5\" × 4.5\" × 2\")",
    "name": "3-Ply Brown Corrugated Box (4.5\" × 4.5\" × 2\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-4-5x4-5x2-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-4-5x4-5x2-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-4-5x4-5x2-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-4-5x4-5x2-inch_2.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 566,
    "moq": 1,
    "badge": "BESTSELLER",
    "badgeClass": "bestseller",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (4.5\" × 4.5\" × 2\")\n📐 Dimensions: 4.5\" × 4.5\" × 2\" (11.4 × 11.4 × 5.1 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (4.5\" × 4.5\" × 2\")\n• Dimensions (Inches): 4.5\" × 4.5\" × 2\"\n• Dimensions (CM): 11.4 × 11.4 × 5.1 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (4.5\" × 4.5\" × 2\")\n📐 Dimensions: 4.5\" × 4.5\" × 2\" (11.4 × 11.4 × 5.1 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (4.5\" × 4.5\" × 2\")\n• Dimensions (Inches): 4.5\" × 4.5\" × 2\"\n• Dimensions (CM): 11.4 × 11.4 × 5.1 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 284,
        "label": "Pack of 50 (₹284)"
      },
      {
        "qty": 100,
        "rate": 569,
        "label": "Pack of 100 (₹569)"
      },
      {
        "qty": 500,
        "rate": 2799,
        "label": "Pack of 500 (₹2,799)"
      },
      {
        "qty": 1000,
        "rate": 5499,
        "label": "Pack of 1000 (₹5,499)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": true
  },
  {
    "id": "4431f897-ccab-406e-8d17-2a69608c8022",
    "slug": "3-ply-corrugated-box-4x4x4-inch",
    "title": "3-Ply Brown Corrugated Box (4\" × 4\" × 4\")",
    "name": "3-Ply Brown Corrugated Box (4\" × 4\" × 4\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-4x4x4-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-4x4x4-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-4x4x4-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-4x4x4-inch_2.webp"
    ],
    "price": 329,
    "selling_price": 329,
    "startingAt": 329,
    "mrp": 624,
    "moq": 1,
    "badge": "HOT DEAL",
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (4\" × 4\" × 4\")\n📐 Dimensions: 4\" × 4\" × 4\" (10.2 × 10.2 × 10.2 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (4\" × 4\" × 4\")\n• Dimensions (Inches): 4\" × 4\" × 4\"\n• Dimensions (CM): 10.2 × 10.2 × 10.2 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (4\" × 4\" × 4\")\n📐 Dimensions: 4\" × 4\" × 4\" (10.2 × 10.2 × 10.2 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (4\" × 4\" × 4\")\n• Dimensions (Inches): 4\" × 4\" × 4\"\n• Dimensions (CM): 10.2 × 10.2 × 10.2 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 329,
        "label": "Pack of 50 (₹329)"
      },
      {
        "qty": 100,
        "rate": 619,
        "label": "Pack of 100 (₹619)"
      },
      {
        "qty": 500,
        "rate": 2999,
        "label": "Pack of 500 (₹2,999)"
      },
      {
        "qty": 1000,
        "rate": 5799,
        "label": "Pack of 1000 (₹5,799)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": true,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "0ede844e-1e81-438d-9400-b6e7030eecf1",
    "slug": "3-ply-corrugated-box-3-5x3-5x3-5-inch",
    "title": "3-Ply Brown Corrugated Box (3.5\" × 3.5\" × 3.5\")",
    "name": "3-Ply Brown Corrugated Box (3.5\" × 3.5\" × 3.5\")",
    "category": "craft-3-ply-box",
    "category_id": "a5aef218-51e3-4294-acac-b273a9f260f9",
    "categoryLabel": "3 Ply Corrugated Boxes",
    "image": "/assets/boxes/3-ply-corrugated-box-3-5x3-5x3-5-inch_0.webp",
    "images": [
      "/assets/boxes/3-ply-corrugated-box-3-5x3-5x3-5-inch_0.webp",
      "/assets/boxes/3-ply-corrugated-box-3-5x3-5x3-5-inch_1.webp",
      "/assets/boxes/3-ply-corrugated-box-3-5x3-5x3-5-inch_2.webp"
    ],
    "price": 284,
    "selling_price": 284,
    "startingAt": 284,
    "mrp": 600,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "📦 3-Ply Brown Corrugated Box (3.5\" × 3.5\" × 3.5\")\n📐 Dimensions: 3.5\" × 3.5\" × 3.5\" (8.9 × 8.9 × 8.9 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (3.5\" × 3.5\" × 3.5\")\n• Dimensions (Inches): 3.5\" × 3.5\" × 3.5\"\n• Dimensions (CM): 8.9 × 8.9 × 8.9 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "fullDesc": "📦 3-Ply Brown Corrugated Box (3.5\" × 3.5\" × 3.5\")\n📐 Dimensions: 3.5\" × 3.5\" × 3.5\" (8.9 × 8.9 × 8.9 cm)\n💪 18-24 BF High-Bursting Factor Virgin Kraft Liner\n🚚 Fast Pan-India Doorstep Dispatch from Factory\n💰 Wholesale Bulk Tier Savings: Direct Manufacturer Rates\n\n---DETAILED_DESCRIPTION---\n\n📋 Technical Specifications:\n• Product Name: 3-Ply Brown Corrugated Box (3.5\" × 3.5\" × 3.5\")\n• Dimensions (Inches): 3.5\" × 3.5\" × 3.5\"\n• Dimensions (CM): 8.9 × 8.9 × 8.9 cm\n• Ply Construction: 3-Ply Single Wall Corrugated Board\n• Flute Type: High-Cushion B/C Fluting\n• Paper Grade: 18-24 BF Virgin Kraft Liner\n• Color: Classic Eco Kraft Brown\n• Minimum Order Quantity (MOQ): 50 pieces\n• Ideal Usage: Amazon, Flipkart, Meesho, E-Commerce, Courier Parcels, Warehousing, Moving & Storage\n⚡ Key Features & Quality Assurance:\n✔ High Edge Crush & Burst Strength: Engineered with heavy-duty virgin kraft paper and resilient fluting to absorb drops, impact, and stacking pressure during courier transit.\n✔ 100% Recyclable & Sustainable: Eco-friendly biodegradable corrugated board compliant with green packaging standards.\n✔ Accurate Machine Creasing: Precision die-cut and pre-creased fold lines for instant, hassle-free tape sealing and packing efficiency.\n✔ Humidity & Moisture Resistant: Outer kraft liner safeguards inner goods against atmospheric humidity during multi-city transit.\n🏭 Direct Factory Manufacturing:\nManufactured with high-speed automatic corrugation lines ensuring uniform flute height, superior adhesion strength, and zero de-lamination under pressure.\n❓ Frequently Asked Questions:\nQ: What are the bulk discount tiers available?\nA: We offer tiered discounts starting from 50 pcs up to 1,000+ pcs with increasing per-piece savings.\nQ: Can I get my company logo or custom branding printed on these boxes?\nA: Yes! We offer custom single-color and multi-color logo printing for bulk consignments. Contact our sales team for custom plate printing.",
    "tiers": [
      {
        "qty": 50,
        "rate": 284,
        "label": "Pack of 50 (₹284)"
      },
      {
        "qty": 100,
        "rate": 569,
        "label": "Pack of 100 (₹569)"
      },
      {
        "qty": 500,
        "rate": 2799,
        "label": "Pack of 500 (₹2,799)"
      },
      {
        "qty": 1000,
        "rate": 5499,
        "label": "Pack of 1000 (₹5,499)"
      }
    ],
    "bulk_pricing": [
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
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": false,
    "flag_best_seller": false
  },
  {
    "id": "17e30771-1fd2-4262-8cbf-c165c0cadd2c",
    "slug": "branding-combo-offer",
    "title": "BRANDING COMBO OFFER",
    "name": "BRANDING COMBO OFFER",
    "category": "stickers",
    "category_id": "44444444-4444-4444-4444-444444444444",
    "categoryLabel": "Stickers",
    "image": "https://hfkduzluulqkszhlsixa.supabase.co/storage/v1/object/public/product-images/1791694069031-e2nkwn.jpeg",
    "images": [
      "https://hfkduzluulqkszhlsixa.supabase.co/storage/v1/object/public/product-images/1791694069031-e2nkwn.jpeg",
      "https://hfkduzluulqkszhlsixa.supabase.co/storage/v1/object/public/product-images/1792675160038-sa2s1k.png",
      "https://hfkduzluulqkszhlsixa.supabase.co/storage/v1/object/public/product-images/1792675374883-r9xx4w.png",
      "https://hfkduzluulqkszhlsixa.supabase.co/storage/v1/object/public/product-images/1792675523212-i0gjo.png"
    ],
    "price": 999,
    "selling_price": 999,
    "startingAt": 999,
    "mrp": 1599,
    "moq": 1,
    "badgeClass": "new",
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "🔥 BUSINESS BRANDING COMBO – ONLY ₹999! 🔥\n\n---DETAILED_DESCRIPTION---\n\nApne business ko dijiye ek professional look! 😍\n\n🎁 Combo Offer Mein Paayein:\n✅ 1000 Custom Stickers – 1.5 × 1.5 Inch\n✅ 200 Thank You Cards – 3 × 2 Inch\n✅ 1 Custom Rubber Stamp – 1.5 x 1.5 Inch\n✅ FREE Design Charges\n\n💰 Combo Price: Just ₹999/-\n\n📦 Shipping Charges FREE\n💳 Payment Terms: 50% Advance Required\n\n✨ Perfect for: Small Businesses, Home Bakers, Boutiques, Clothing Brands, Gift Shops, Cosmetic Brands & Online Sellers.\n\n🚀 Apne brand ki packaging ko banayein attractive aur professional. Ek hi combo mein apne business ki branding ko next level par le jaayein!\n\n📩 Order Now & Give Your Brand a Professional Identity!",
    "fullDesc": "🔥 BUSINESS BRANDING COMBO – ONLY ₹999! 🔥\n\n---DETAILED_DESCRIPTION---\n\nApne business ko dijiye ek professional look! 😍\n\n🎁 Combo Offer Mein Paayein:\n✅ 1000 Custom Stickers – 1.5 × 1.5 Inch\n✅ 200 Thank You Cards – 3 × 2 Inch\n✅ 1 Custom Rubber Stamp – 1.5 x 1.5 Inch\n✅ FREE Design Charges\n\n💰 Combo Price: Just ₹999/-\n\n📦 Shipping Charges FREE\n💳 Payment Terms: 50% Advance Required\n\n✨ Perfect for: Small Businesses, Home Bakers, Boutiques, Clothing Brands, Gift Shops, Cosmetic Brands & Online Sellers.\n\n🚀 Apne brand ki packaging ko banayein attractive aur professional. Ek hi combo mein apne business ki branding ko next level par le jaayein!\n\n📩 Order Now & Give Your Brand a Professional Identity!",
    "tiers": [
      {
        "qty": 1,
        "rate": 999,
        "label": "3+1 STARTUP COMBO"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 1,
        "rate": 999,
        "label": "3+1 STARTUP COMBO"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": false,
    "flag_new_arrival": true,
    "flag_best_seller": false
  },
  {
    "id": "570f9649-dfd3-47b3-976a-0ea8b1704bcf",
    "slug": "premium-printed-thank-you-cards-for-packaging-small-business-thank-you-insert-cards",
    "title": "Premium Printed Thank You Cards for Packaging | Small Business Thank You Insert Cards",
    "name": "Premium Printed Thank You Cards for Packaging | Small Business Thank You Insert Cards",
    "category": "visiting-cards",
    "category_id": "0bd2d048-1c31-4092-af52-281efcec2c2f",
    "categoryLabel": "Visiting Cards & Thankyou cards",
    "image": "https://hfkduzluulqkszhlsixa.supabase.co/storage/v1/object/public/product-images/1792675959955-eirts.jpeg",
    "images": [
      "https://hfkduzluulqkszhlsixa.supabase.co/storage/v1/object/public/product-images/1792675959955-eirts.jpeg",
      "https://hfkduzluulqkszhlsixa.supabase.co/storage/v1/object/public/product-images/1791200347302-dwxggk.jpeg",
      "https://hfkduzluulqkszhlsixa.supabase.co/storage/v1/object/public/product-images/1792675956256-2eqnw.png",
      "https://hfkduzluulqkszhlsixa.supabase.co/storage/v1/object/public/product-images/1792675961470-1f2xx.jpeg"
    ],
    "price": 300,
    "selling_price": 300,
    "startingAt": 300,
    "mrp": 550,
    "moq": 1,
    "rating": 4.7,
    "reviews": 45,
    "specs": [
      "High Bursting Strength",
      "Pan-India Delivery"
    ],
    "desc": "Premium quality Printed Thank You Cards designed to add a personal and professional touch to every order. These elegant cards are perfect for small businesses, food brands, clothing brands, boutiques, handmade products and e-commerce packaging. The attractive design helps create a memorable unboxing experience and shows appreciation to your customers.\nProduct Features:\n• Premium Quality Printed Card\n• Elegant & Professional Design\n• Perfect for Customer Appreciation\n• Ideal for E-Commerce Packaging\n• Suitable for Small Businesses & Brands\n• Great for Food, Clothing & Handmade Products\n• Enhances Customer Unboxing Experience\n• Lightweight & Easy to Include with Orders  \nPackage Includes:\n1 × Printed Thank You Card\nIdeal For:\nSmall Businesses | E-Commerce Sellers | Clothing Brands | Boutiques | Food Businesses | Handmade Products | Gift Packaging | Customer Orders\n\n---DETAILED_DESCRIPTION---\n\n### 📋 Technical Specifications:\n• Dimensions: 3.5 x 2.0 inches (Standard Business Card Size)\n• Paper Stock: 350 GSM Premium Art Card with Velvet Matte Finish\n• Printing: High-Definition Full Color Offset / Digital Printing\n• Coating: Anti-fingerprint and Water-resistant Soft Lamination\n• Packaging: Shrink-wrapped packs of 100 / 250 / 500 pcs\n\n### ⚡ Key Features & Benefits:\n✔ Unboxing Experience: Transforms ordinary delivery packages into a memorable brand unboxing experience.\n✔ Customer Retention: Encourages 5-star product reviews, repeat orders, and Instagram social tags.\n✔ Custom QR Codes: Can include scan-to-reorder, discount coupon codes, or Instagram handle links.\n✔ Heavyweight 350 GSM: Thick, rigid premium cardstock that does not bend or curl inside parcels.\n\n### 🏭 Material & Manufacturing:\nManufactured using imported virgin pulp cardstock with eco-friendly soy-based inks. Precision die-cut with smooth round or sharp square edges.\n\n### ❓ Frequently Asked Questions:\nQ: Can I add my Instagram handle and brand logo?\nA: Yes! Custom printing is supported. You can upload your design or our design team will assist you.\n\nQ: What is the turnaround time for custom thank you cards?\nA: Standard dispatch is 24-48 hours across India.\n\nQ: Does this price include GST?\nA: Standard GST applies as per invoice.",
    "fullDesc": "Premium quality Printed Thank You Cards designed to add a personal and professional touch to every order. These elegant cards are perfect for small businesses, food brands, clothing brands, boutiques, handmade products and e-commerce packaging. The attractive design helps create a memorable unboxing experience and shows appreciation to your customers.\nProduct Features:\n• Premium Quality Printed Card\n• Elegant & Professional Design\n• Perfect for Customer Appreciation\n• Ideal for E-Commerce Packaging\n• Suitable for Small Businesses & Brands\n• Great for Food, Clothing & Handmade Products\n• Enhances Customer Unboxing Experience\n• Lightweight & Easy to Include with Orders  \nPackage Includes:\n1 × Printed Thank You Card\nIdeal For:\nSmall Businesses | E-Commerce Sellers | Clothing Brands | Boutiques | Food Businesses | Handmade Products | Gift Packaging | Customer Orders\n\n---DETAILED_DESCRIPTION---\n\n### 📋 Technical Specifications:\n• Dimensions: 3.5 x 2.0 inches (Standard Business Card Size)\n• Paper Stock: 350 GSM Premium Art Card with Velvet Matte Finish\n• Printing: High-Definition Full Color Offset / Digital Printing\n• Coating: Anti-fingerprint and Water-resistant Soft Lamination\n• Packaging: Shrink-wrapped packs of 100 / 250 / 500 pcs\n\n### ⚡ Key Features & Benefits:\n✔ Unboxing Experience: Transforms ordinary delivery packages into a memorable brand unboxing experience.\n✔ Customer Retention: Encourages 5-star product reviews, repeat orders, and Instagram social tags.\n✔ Custom QR Codes: Can include scan-to-reorder, discount coupon codes, or Instagram handle links.\n✔ Heavyweight 350 GSM: Thick, rigid premium cardstock that does not bend or curl inside parcels.\n\n### 🏭 Material & Manufacturing:\nManufactured using imported virgin pulp cardstock with eco-friendly soy-based inks. Precision die-cut with smooth round or sharp square edges.\n\n### ❓ Frequently Asked Questions:\nQ: Can I add my Instagram handle and brand logo?\nA: Yes! Custom printing is supported. You can upload your design or our design team will assist you.\n\nQ: What is the turnaround time for custom thank you cards?\nA: Standard dispatch is 24-48 hours across India.\n\nQ: Does this price include GST?\nA: Standard GST applies as per invoice.",
    "tiers": [
      {
        "qty": 100,
        "rate": 300,
        "label": "100 pcs Pack"
      },
      {
        "qty": 200,
        "rate": 300,
        "label": "200 pcs Pack"
      },
      {
        "qty": 500,
        "rate": 300,
        "label": "500 pcs Pack"
      },
      {
        "qty": 1000,
        "rate": 300,
        "label": "1000 pcs Pack"
      }
    ],
    "bulk_pricing": [
      {
        "qty": 100,
        "rate": 300,
        "label": "100 pcs Pack"
      },
      {
        "qty": 200,
        "rate": 550,
        "label": "200 pcs Pack"
      },
      {
        "qty": 500,
        "rate": 1200,
        "label": "500 pcs Pack"
      },
      {
        "qty": 1000,
        "rate": 1500,
        "label": "1000 pcs Pack"
      }
    ],
    "price_tiers": [],
    "flag_hot_deal": false,
    "flag_mega_sale": true,
    "flag_new_arrival": false,
    "flag_best_seller": false
  }
];
