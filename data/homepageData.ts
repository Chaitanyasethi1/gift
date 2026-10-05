export interface HeroBanner {
  id: string;
  img: string;
  alt: string;
  link: string;
  active: boolean;
  order: number;
}

export interface PopularCategoryItem {
  id: string;
  title: string;
  emoji?: string;
  image?: string;
  link: string;
  isSpecial?: boolean;
  order: number;
}

export interface HomepageConfig {
  tickerText: string;
  tickerActive: boolean;
  slideIntervalMs: number;
  heroBanners: HeroBanner[];
  popularCategories: PopularCategoryItem[];
}

export const initialHomepageConfig: HomepageConfig = {
  tickerText: '⚡ MEGA FACTORY SALE: Flat 20% OFF on all Corrugated Cartons! Use code AS20 ⚡',
  tickerActive: true,
  slideIntervalMs: 2000,
  heroBanners: [
    { id: 'banner-1', img: '/assets/banner_woven_labels.png', alt: 'Woven Labels - AS Print Gallery', link: '/shop', active: true, order: 1 },
    { id: 'banner-2', img: '/assets/banner_corrugated_box.png', alt: 'Corrugated Box - AS Print Gallery', link: '/shop', active: true, order: 2 },
    { id: 'banner-3', img: '/assets/banner_custom_stickers.png', alt: 'Custom Stickers - AS Print Gallery', link: '/shop', active: true, order: 3 },
    { id: 'banner-4', img: '/assets/banner_satin_labels.png', alt: 'Printed Satin Labels - AS Print Gallery', link: '/shop', active: true, order: 4 },
    { id: 'banner-5', img: '/assets/banner_custom_packaging.png', alt: 'Custom Packaging Boxes - AS Print Gallery', link: '/shop', active: true, order: 5 }
  ],
  popularCategories: [
    { id: 'cat-1', title: 'Hot Deals', emoji: '🔥', link: '/shop', isSpecial: true, order: 1 },
    { id: 'cat-2', title: 'Sale', emoji: '🏷️', link: '/shop', isSpecial: true, order: 2 },
    { id: 'cat-3', title: 'New Arrivals', emoji: '🌟', link: '/shop', isSpecial: true, order: 3 },
    { id: 'cat-4', title: 'Packaging Material', image: '/assets/packaging_boxes_cat.jpg', link: '/shop', order: 4 },
    { id: 'cat-5', title: 'Carry Bags', image: '/assets/paper_bags_cat.png', link: '/shop', order: 5 },
    { id: 'cat-6', title: 'Paper Lifafa', emoji: '✉️', link: '/shop', order: 6 },
    { id: 'cat-7', title: 'Stickers', image: '/assets/stickers_cat.png', link: '/shop', order: 7 },
    { id: 'cat-8', title: 'Printed Labels', image: '/assets/printed_labels_cat.png', link: '/shop', order: 8 },
    { id: 'cat-9', title: 'Woven Labels', emoji: '🧵', link: '/shop', order: 9 },
    { id: 'cat-10', title: 'Hang Tags', image: '/assets/hang_tags_cat.png', link: '/shop', order: 10 },
    { id: 'cat-11', title: 'Food & Pizza', emoji: '🍕', link: '/shop', order: 11 },
    { id: 'cat-12', title: 'Custom Tape', emoji: '📼', link: '/shop', order: 12 },
    { id: 'cat-13', title: 'Bubble Wrap', emoji: '🫧', link: '/shop', order: 13 },
    { id: 'cat-14', title: 'Courier Bags', emoji: '📨', link: '/shop', order: 14 }
  ]
};
