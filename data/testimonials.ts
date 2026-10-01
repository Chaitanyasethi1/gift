/**
 * AS PRINT GALLERY — Client Testimonials Data
 * 
 * TODO FOR OWNER:
 * Replace these placeholder reviews with real, verified client feedback
 * from your official Google Business Profile. Add links to the specific
 * reviews using the googleReviewUrl property.
 */

export interface Testimonial {
  id: string;
  name: string;
  business: string;
  city: string;
  rating: number;
  quote: string;
  productOrdered: string;
  photo?: string; // Optional client photo path (e.g. "/assets/testimonials/rajesh.jpg")
  logo?: string;  // Optional client company logo (e.g. "/assets/clients/d2c.png")
  googleReviewUrl?: string; // Optional link to verified Google review
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Rajesh Verma',
    business: 'D2C Electronics',
    city: 'Noida',
    rating: 5,
    quote: 'We were buying 3-ply boxes from local traders at ₹11.50 per piece. AS Print Gallery reduced our cost to ₹7.20/pc directly from their factory with 10x better bursting strength. Zero transit damage on Amazon since 8 months!',
    productOrdered: '3-Ply Corrugated Shipping Boxes (15,000+ pcs)',
    photo: '',
    logo: '',
    googleReviewUrl: ''
  },
  {
    id: 'testi-2',
    name: 'Sunita Mehra',
    business: 'Studio Khadi Apparels',
    city: 'Delhi',
    rating: 5,
    quote: 'The woven damask labels and custom hang tags they made for our export garment collection are identical to European luxury brands. Non-itch ultrasonic cut borders and sharp colors. Highly recommended!',
    productOrdered: 'High-Density Woven Labels & Hang Tags (50,000+ pcs)',
    photo: '',
    logo: '',
    googleReviewUrl: ''
  },
  {
    id: 'testi-3',
    name: 'Chef Ankit Sethi',
    business: 'Crust & Co. Pizzerias',
    city: 'NCR',
    rating: 5,
    quote: 'Our cloud kitchen chain orders 5,000 pizza boxes and sweet boxes every month. The food-grade liner keeps the pizza crust hot and crisp without sogginess, and the full-color print looks stunning.',
    productOrdered: 'Custom Printed Pizza & Food Packaging Boxes (Monthly Regular)',
    photo: '',
    logo: '',
    googleReviewUrl: ''
  }
];
