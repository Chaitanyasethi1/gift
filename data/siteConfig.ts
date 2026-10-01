/**
 * AS PRINT GALLERY — Site Configuration & Global Constants
 * 
 * NOTE TO OWNER:
 * Edit all business contact information, GSTIN, stats numbers, review links,
 * and analytics IDs in this single file. You will never need to touch component code!
 */

export const siteConfig = {
  name: "AS PRINT GALLERY",
  legalName: "AS Print Gallery Packaging & Printing Unit",
  tagline: "Direct Factory Corrugated Boxes, Labels & Stickers",
  subheading: "Custom sizes • 3-ply & 5-ply • Pan-India dispatch from Ghaziabad",
  url: "https://asprintgallery.com",
  gstin: "09AWKPN5910E1ZG",
  hsnCodes: "4819 (Cartons/Boxes), 4821 (Labels/Tags)",

  // Normalized phones
  phones: {
    salesDisplay: "+91 9911678386",
    salesRaw: "919911678386",
    salesTel: "tel:+919911678386",
    whatsappDisplay: "+91 9911678386",
    whatsappRaw: "919911678386",
    whatsappTel: "tel:+919911678386"
  },

  // Contact Channels
  contact: {
    salesPhone: "+91 9911678386",
    salesPhoneRaw: "919911678386",
    whatsappPhone: "+91 9911678386",
    whatsappPhoneRaw: "919911678386",
    email: "asprintgallery742@gmail.com",
    address: {
      street: "Plot No. 12, Industrial Area, Loni",
      city: "Ghaziabad",
      state: "Uttar Pradesh",
      pincode: "201102",
      country: "India",
      landmark: "Near Tronica City Industrial Area"
    },
    googleMapsUrl: "https://maps.google.com/?q=Loni+Ghaziabad+201102"
  },

  emails: {
    quotations: "asprintgallery742@gmail.com",
    support: "asprintgallery742@gmail.com"
  },

  address: {
    full: "Plot No. 12, Industrial Area, Loni, Ghaziabad, Uttar Pradesh - 201102, India",
    area: "Loni Industrial Area",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    pincode: "201102",
    country: "India"
  },

  // Social Channels
  social: {
    instagram: "https://www.instagram.com/as_print_gallery_/?hl=en",
    facebook: "https://www.facebook.com/p/AS-Print-Gallery-61593587124577/",
    youtube: "https://www.youtube.com/@AsPrintGallery"
  },

  socialLinks: {
    instagram: "https://www.instagram.com/as_print_gallery_/?hl=en",
    facebook: "https://www.facebook.com/p/AS-Print-Gallery-61593587124577/",
    youtube: "https://www.youtube.com/@AsPrintGallery"
  },

  // Verification & Trust
  // TODO FOR OWNER: Replace with your real Google Business Profile review link
  googleReviewsUrl: "https://maps.google.com/?cid=YOUR_GOOGLE_BUSINESS_CID",
  
  // Analytics
  // TODO FOR OWNER: Enter your real Google Analytics 4 Measurement ID (e.g. G-ABC123XYZ)
  gaMeasurementId: "G-XXXXXXXXXX",

  // Factory Stats (Verifiable Only)
  // NOTE TO OWNER: Only keep numbers that can be proven.
  stats: {
    inHouse: {
      number: "100% In-House",
      label: "Direct Manufacturing Plant"
    },
    monthlyVolume: {
      number: "5,00,000+",
      label: "Boxes Dispatched Monthly"
    },
    dispatchTime: {
      number: "24 - 48 Hrs",
      label: "Standard Dispatch Guarantee"
    },
    reviews: {
      number: "4.9 / 5.0",
      label: "1,200+ Verified Client Reviews"
    },
    // Aliases for component convenience
    manufacturing: "100% In-House",
    manufacturingLabel: "Direct Manufacturing Plant",
    boxesDispatched: "5,00,000+",
    boxesDispatchedLabel: "Boxes Dispatched Monthly",
    reviewsCount: "1,200+ Verified Client Reviews",
    rating: "4.9 / 5.0"
  },

  // Standard Dispatch Commitments
  dispatchPolicy: {
    standardStock: "24 - 48 hrs",
    customPrinted: "3 - 5 working days",
    deliveryNCR: "Same / Next Day",
    deliveryOtherCities: "2 - 4 business days",
    freeShippingThreshold: 999
  },

  // Founder & Visionary Section
  // NOTE TO OWNER: Update founder name, title, quote, and bio here
  founder: {
    name: "Nafees Ahmed",
    role: "FOUNDER & MANAGING DIRECTOR",
    eyebrow: "THE VISIONARY",
    quotePrefix: "We are not just selling boxes; we are ",
    quoteAccent: "reviving",
    quoteSuffix: " trust & precision in packaging.",
    bio: "At AS Print Gallery, our mission goes beyond packaging manufacturing. We are dedicated to providing direct, honest, and high-precision packaging solutions to businesses across India, eliminating middlemen markups and delivering factory-certified quality for every single carton. Every box engineered tells a story of reliability, built for the modern enterprise.",
    image: "/assets/nafees_ahmed.jpg",
    ctaText: "READ OUR STORY",
    ctaLink: "#factory-story"
  }
};
