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

  // 2. Packaging Material
  { id: '22222222-2222-2222-2222-222222222222', name: 'Packaging Material', slug: 'packaging-material', parent_id: null, sort_order: 2, show_in_menu: true, show_in_home: true },
  { id: 'bx-1', name: 'Corrugated Boxes', slug: 'corrugated-boxes', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 1, show_in_menu: true, show_in_home: false },
  { id: 'bx-2', name: 'Garment Boxes', slug: 'garment-boxes', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 2, show_in_menu: true, show_in_home: false },
  { id: 'bx-3', name: 'Gift Boxes', slug: 'gift-boxes', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 3, show_in_menu: true, show_in_home: false },
  { id: 'bx-4', name: 'Sweet Boxes', slug: 'sweet-boxes', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 4, show_in_menu: true, show_in_home: false },
  { id: 'bx-5', name: 'Pizza Boxes', slug: 'pizza-boxes', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 5, show_in_menu: true, show_in_home: false },
  { id: 'bx-6', name: 'Custom Printed Boxes', slug: 'custom-printed-boxes', parent_id: '22222222-2222-2222-2222-222222222222', sort_order: 6, show_in_menu: true, show_in_home: false },

  // 3. Labels & Tags
  { id: '33333333-3333-3333-3333-333333333333', name: 'Labels & Tags', slug: 'labels-tags', parent_id: null, sort_order: 3, show_in_menu: true, show_in_home: false },
  { id: 'lt-1', name: 'Woven Labels', slug: 'woven-labels', parent_id: '33333333-3333-3333-3333-333333333333', sort_order: 1, show_in_menu: true, show_in_home: false },
  { id: 'lt-2', name: 'Satin Labels', slug: 'satin-labels', parent_id: '33333333-3333-3333-3333-333333333333', sort_order: 2, show_in_menu: true, show_in_home: false },
  { id: 'lt-3', name: 'Printed Labels', slug: 'printed-labels', parent_id: '33333333-3333-3333-3333-333333333333', sort_order: 3, show_in_menu: true, show_in_home: false },
  { id: 'lt-4', name: 'Hang Tags', slug: 'hang-tags', parent_id: '33333333-3333-3333-3333-333333333333', sort_order: 4, show_in_menu: true, show_in_home: false },
  { id: 'lt-5', name: 'Barcode Stickers', slug: 'barcode-stickers', parent_id: '33333333-3333-3333-3333-333333333333', sort_order: 5, show_in_menu: true, show_in_home: false },

  // 4. Stickers
  { id: '44444444-4444-4444-4444-444444444444', name: 'Stickers', slug: 'stickers', parent_id: null, sort_order: 4, show_in_menu: true, show_in_home: false },
  { id: 'st-1', name: 'Product Stickers', slug: 'product-stickers', parent_id: '44444444-4444-4444-4444-444444444444', sort_order: 1, show_in_menu: true, show_in_home: false },
  { id: 'st-2', name: 'Round Stickers', slug: 'round-stickers', parent_id: '44444444-4444-4444-4444-444444444444', sort_order: 2, show_in_menu: true, show_in_home: false },
  { id: 'st-3', name: 'Custom Stickers', slug: 'custom-stickers', parent_id: '44444444-4444-4444-4444-444444444444', sort_order: 3, show_in_menu: true, show_in_home: false },
  { id: 'st-4', name: 'Packaging Labels', slug: 'packaging-labels', parent_id: '44444444-4444-4444-4444-444444444444', sort_order: 4, show_in_menu: true, show_in_home: false },

  // 5. Advertising
  { id: '55555555-5555-5555-5555-555555555555', name: 'Advertising', slug: 'advertising', parent_id: null, sort_order: 5, show_in_menu: true, show_in_home: false },
  { id: 'bm-1', name: 'Visiting Cards', slug: 'visiting-cards', parent_id: '55555555-5555-5555-5555-555555555555', sort_order: 1, show_in_menu: true, show_in_home: false },
  { id: 'bm-2', name: 'Thank You Cards', slug: 'thank-you-cards', parent_id: '55555555-5555-5555-5555-555555555555', sort_order: 2, show_in_menu: true, show_in_home: false },
  { id: 'bm-3', name: 'Rubber Stamps', slug: 'rubber-stamps', parent_id: '55555555-5555-5555-5555-555555555555', sort_order: 3, show_in_menu: true, show_in_home: false },
  { id: 'bm-4', name: 'Letterheads', slug: 'letterheads', parent_id: '55555555-5555-5555-5555-555555555555', sort_order: 4, show_in_menu: true, show_in_home: false },
  { id: 'bm-5', name: 'QR Code Cards', slug: 'qr-code-cards', parent_id: '55555555-5555-5555-5555-555555555555', sort_order: 5, show_in_menu: true, show_in_home: false },

  // 6. Disposable Products
  { id: '66666666-6666-6666-6666-666666666666', name: 'Disposable Products', slug: 'disposable-products', parent_id: null, sort_order: 6, show_in_menu: true, show_in_home: false },
  { id: 'dp-1', name: 'Paper Dona', slug: 'paper-dona', parent_id: '66666666-6666-6666-6666-666666666666', sort_order: 1, show_in_menu: true, show_in_home: false },
  { id: 'dp-2', name: 'Paper Plates', slug: 'paper-plates', parent_id: '66666666-6666-6666-6666-666666666666', sort_order: 2, show_in_menu: true, show_in_home: false },
  { id: 'dp-3', name: 'Silver Dona', slug: 'silver-dona', parent_id: '66666666-6666-6666-6666-666666666666', sort_order: 3, show_in_menu: true, show_in_home: false },
  { id: 'dp-4', name: 'Silver Plates', slug: 'silver-plates', parent_id: '66666666-6666-6666-6666-666666666666', sort_order: 4, show_in_menu: true, show_in_home: false },
];
