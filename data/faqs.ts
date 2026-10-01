/**
 * AS PRINT GALLERY — Frequently Asked Questions (FAQ) Data
 * 
 * NOTE TO OWNER:
 * Add or edit FAQs here. They are automatically rendered in the accordion
 * on the homepage and embedded as SEO-friendly JSON-LD FAQPage schema.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is your Minimum Order Quantity (MOQ) for corrugated boxes?',
    answer: 'For standard unprinted brown corrugated boxes, our MOQ is just 100 pieces. For custom printed boxes with your brand logo, MOQ starts at 250 - 500 pieces depending on box size. We also provide single sample prototypes before mass production.'
  },
  {
    id: 'faq-2',
    question: 'Can I customize the exact Length, Width, and Height of my boxes?',
    answer: 'Yes, 100%! We are a direct manufacturing unit, not a trader. We make custom die-cut and regular slotted cartons (RSC) to your exact measurements (in inches or centimeters) so your products fit snug without wasting bubble wrap or paying extra courier volumetric weight.'
  },
  {
    id: 'faq-3',
    question: 'How fast can you dispatch orders across India?',
    answer: 'In-stock standard items: 24-48 hrs. Custom printed orders: 3-5 working days. Delivery: Delhi NCR same/next day, other cities 2-4 days.'
  },
  {
    id: 'faq-4',
    question: 'Do you provide GST invoices for claiming Input Tax Credit (ITC)?',
    answer: 'Yes! AS PRINT GALLERY is a registered industrial business with GSTIN: 09AWKPN5910E1ZG. Every order comes with a 100% compliant B2B tax invoice allowing you to claim full 18% Input Tax Credit on your business filings.'
  },
  {
    id: 'faq-5',
    question: 'Can I get a physical sample kit before placing a large wholesale order?',
    answer: 'Absolutely! Click the "Free Sample Kit" button on our site or contact us on WhatsApp (+91 9911678386). We dispatch a sample kit containing various corrugated flutes, kraft papers, woven labels, stickers, and tags to your address.'
  },
  {
    id: 'faq-6',
    question: 'What is the difference between 3-ply, 5-ply, and 7-ply corrugated boxes?',
    answer: '3-ply (single wall) consists of 2 kraft liners and 1 fluted medium, ideal for eCommerce parcels up to 6 kg. 5-ply (double wall) has 3 liners and 2 flutes, supporting heavy goods up to 22 kg. 7-ply (triple wall) is heavy-duty export grade engineered for hardware, ceramics, and exports up to 40+ kg.'
  }
];
