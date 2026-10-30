export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  parent_id: string | null;
  sort_order: number;
  show_in_menu: boolean;
  show_in_home: boolean;
  image_url?: string | null;
}

export const initialCategories: CategoryItem[] = [
  // 1. Carry Bags
  { id: '11111111-1111-1111-1111-111111111111', name: 'Carry Bags', slug: 'carry-bags', parent_id: null, sort_order: 1, show_in_menu: true, show_in_home: true },
  { id: 'pb-1', name: 'Kraft Carry Bags', slug: 'kraft-carry-bags', parent_id: '11111111-1111-1111-1111-111111111111', sort_order: 1, show_in_menu: true, show_in_home: false },
  { id: 'pb-2', name: 'Printed Carry Bags', slug: 'printed-carry-bags', parent_id: '11111111-1111-1111-1111-111111111111', sort_order: 2, show_in_menu: true, show_in_home: false },
  { id: 'pb-3', name: 'Handle Carry Bags', slug: 'handle-carry-bags', parent_id: '11111111-1111-1111-1111-111111111111', sort_order: 3, show_in_menu: true, show_in_home: false },
  { id: 'pb-4', name: 'Paper Bags & Mailers', slug: 'paper-bags-mailers', parent_id: '11111111-1111-1111-1111-111111111111', sort_order: 4, show_in_menu: true, show_in_home: false },
  { id: 'e2d16bc9-9677-44ba-b33d-83dc45e3a068', name: 'Courier Polybags & Mailer Bags', slug: 'polybag', parent_id: '11111111-1111-1111-1111-111111111111', sort_order: 6, show_in_menu: true, show_in_home: false },
  { id: 'a8138245-25cd-47d9-a486-d9700401af36', name: 'Meesho & Marketplace Polybags', slug: 'meesho-polybags', parent_id: '11111111-1111-1111-1111-111111111111', sort_order: 7, show_in_menu: true, show_in_home: false },
  { id: 'a7f44342-85fa-4101-b80e-0a7ee7ac3515', name: 'Zip Lock Stand Up Pouches', slug: 'zip-lock-pouch-bags', parent_id: '11111111-1111-1111-1111-111111111111', sort_order: 8, show_in_menu: true, show_in_home: false },

  // 2. Packaging Material
  { id: '22222222-2222-2222-2222-222222222222', name: 'Packaging Material', slug: 'packaging-material', parent_id: null, sort_order: 2, show_in_menu: true, show_in_home: true },
  { id: 'bx-1', name: 'Corrugated Boxes', slug: 'corrugated-boxes', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 1, show_in_menu: true, show_in_home: false },
  { id: 'bx-2', name: 'Garment Boxes', slug: 'garment-boxes', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 2, show_in_menu: true, show_in_home: false },
  { id: 'bx-3', name: 'Gift Boxes', slug: 'gift-boxes', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 3, show_in_menu: true, show_in_home: false },
  { id: 'bx-4', name: 'Sweet Boxes', slug: 'sweet-boxes', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 4, show_in_menu: true, show_in_home: false },
  { id: 'bx-5', name: 'Pizza Boxes', slug: 'pizza-boxes', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 5, show_in_menu: true, show_in_home: false },
  { id: 'bx-6', name: 'Custom Printed Boxes', slug: 'custom-printed-boxes', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 6, show_in_menu: true, show_in_home: false },
  { id: '1b305f58-c0f3-4bd7-9ecd-2fe4961e43fd', name: 'Rigid Luxury Boxes', slug: 'rigid-boxes', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 9, show_in_menu: true, show_in_home: true },
  { id: '7b3306f1-d69c-4a8e-bb64-5953ffb37dfc', name: 'Food Packaging Boxes & Containers', slug: 'food-packaging', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 10, show_in_menu: true, show_in_home: true },
  { id: '7fea5107-9b4f-4670-8388-1dd614d828d5', name: 'Paper Bubble Wrap & Honeycomb Rolls', slug: 'paper-bubble-wrap-protection', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 11, show_in_menu: true, show_in_home: false },
  { id: 'ef67f757-94a6-4ac0-a5a5-93b3b9eaa24e', name: 'BOPP Packaging Tape & Fragile Tape', slug: 'tape', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 12, show_in_menu: true, show_in_home: false },
  { id: '1eaba4c9-f17d-4784-b788-c194adf6470d', name: 'Multicolor Gift Boxes & Hamper Boxes', slug: 'multicolor-gift-box', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 13, show_in_menu: true, show_in_home: false },

  // 3. Labels & Tags
  { id: '33333333-3333-3333-3333-333333333333', name: 'Labels & Tags', slug: 'labels-tags', parent_id: null, sort_order: 3, show_in_menu: true, show_in_home: false },
  { id: 'lt-1', name: 'Woven Labels', slug: 'woven-labels', parent_id: '33333333-3333-3333-3333-333333333333', sort_order: 1, show_in_menu: true, show_in_home: false },
  { id: 'lt-2', name: 'Satin Labels', slug: 'satin-labels', parent_id: '33333333-3333-3333-3333-333333333333', sort_order: 2, show_in_menu: true, show_in_home: false },
  { id: 'lt-3', name: 'Printed Labels', slug: 'printed-labels', parent_id: '33333333-3333-3333-3333-333333333333', sort_order: 3, show_in_menu: true, show_in_home: false },
  { id: 'lt-4', name: 'Hang Tags', slug: 'hang-tags', parent_id: '33333333-3333-3333-3333-333333333333', sort_order: 4, show_in_menu: true, show_in_home: false },
  { id: 'lt-5', name: 'Barcode Stickers', slug: 'barcode-stickers', parent_id: '33333333-3333-3333-3333-333333333333', sort_order: 5, show_in_menu: true, show_in_home: false },
  { id: 'da15168f-6621-4532-9323-06e50b09fe6c', name: 'Thermal Label Paper & Barcode Rolls', slug: 'thermal-label-paper', parent_id: '33333333-3333-3333-3333-333333333333', sort_order: 6, show_in_menu: true, show_in_home: false },

  // 4. Stickers
  { id: '44444444-4444-4444-4444-444444444444', name: 'Stickers', slug: 'stickers', parent_id: null, sort_order: 4, show_in_menu: true, show_in_home: false },
  { id: 'st-1', name: 'Product Stickers', slug: 'product-stickers', parent_id: '44444444-4444-4444-4444-444444444444', sort_order: 1, show_in_menu: true, show_in_home: false },
  { id: '89d08a3b-d6e2-4b5a-97cc-67efb775debf', name: 'Thank You Stickers', slug: 'thank-you-stickers', parent_id: '44444444-4444-4444-4444-444444444444', sort_order: 2, show_in_menu: true, show_in_home: true },
  { id: 'st-2', name: 'Round Stickers', slug: 'round-stickers', parent_id: '44444444-4444-4444-4444-444444444444', sort_order: 3, show_in_menu: true, show_in_home: false },
  { id: 'st-3', name: 'Custom Stickers', slug: 'custom-stickers', parent_id: '44444444-4444-4444-4444-444444444444', sort_order: 4, show_in_menu: true, show_in_home: false },
  { id: 'st-4', name: 'Packaging Labels', slug: 'packaging-labels', parent_id: '44444444-4444-4444-4444-444444444444', sort_order: 5, show_in_menu: true, show_in_home: false },

  // 5. Advertising
  { id: '55555555-5555-5555-5555-555555555555', name: 'Advertising', slug: 'advertising', parent_id: null, sort_order: 5, show_in_menu: true, show_in_home: false },
  { id: '0bd2d048-1c31-4092-af52-281efcec2c2f', name: 'Visiting Cards', slug: 'visiting-cards', parent_id: '55555555-5555-5555-5555-555555555555', sort_order: 1, show_in_menu: true, show_in_home: false },
  { id: '0d9e88a0-a5b4-4790-bfce-df3b807d1c1f', name: 'Thank You Cards', slug: 'thank-you-cards', parent_id: '55555555-5555-5555-5555-555555555555', sort_order: 2, show_in_menu: true, show_in_home: false },
  { id: 'bm-3', name: 'Rubber Stamps', slug: 'rubber-stamps', parent_id: '55555555-5555-5555-5555-555555555555', sort_order: 3, show_in_menu: true, show_in_home: false },
  { id: 'bm-4', name: 'Letterheads', slug: 'letterheads', parent_id: '55555555-5555-5555-5555-555555555555', sort_order: 4, show_in_menu: true, show_in_home: false },
  { id: 'bm-5', name: 'Bill Book', slug: 'qr-code-cards', parent_id: '55555555-5555-5555-5555-555555555555', sort_order: 5, show_in_menu: true, show_in_home: false },

  // 6. Disposable Products
  { id: '66666666-6666-6666-6666-666666666666', name: 'Disposable Products', slug: 'disposable-products', parent_id: null, sort_order: 6, show_in_menu: true, show_in_home: false },
  { id: 'dp-1', name: 'Paper Dona', slug: 'paper-dona', parent_id: '66666666-6666-6666-6666-666666666666', sort_order: 1, show_in_menu: true, show_in_home: false },
  { id: 'dp-2', name: 'Paper Plates', slug: 'paper-plates', parent_id: '66666666-6666-6666-6666-666666666666', sort_order: 2, show_in_menu: true, show_in_home: false },
  { id: 'dp-3', name: 'Silver Dona', slug: 'silver-dona', parent_id: '66666666-6666-6666-6666-666666666666', sort_order: 3, show_in_menu: true, show_in_home: false },
  { id: 'dp-4', name: 'Silver Plates', slug: 'silver-plates', parent_id: '66666666-6666-6666-6666-666666666666', sort_order: 4, show_in_menu: true, show_in_home: false },
];
