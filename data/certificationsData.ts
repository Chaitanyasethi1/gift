/**
 * AS PRINT GALLERY — Official Certifications & Test Reports Data
 * 
 * NOTE TO OWNER:
 * Place your official PDF or scanned images in public/docs/ (e.g., public/docs/gst-certificate.pdf).
 * Update the docPath property below to point to the file.
 * DO NOT add unverified certificates here.
 */

export interface CertificationItem {
  id: string;
  title: string;
  issuingBody: string;
  dateOrValidity: string;
  statusBadge: string;
  docPath: string; // e.g. "/docs/gst-certificate.pdf"
  isUploaded: boolean; // Set to true once the real document is uploaded
  standardRef: string;
  desc: string;
  meta: { label: string; value: string }[];
}

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-gst',
    title: 'GST Identification Certificate',
    issuingBody: 'Goods and Services Tax Network (GSTN), Government of India',
    dateOrValidity: 'Active & Verified Regular Taxpayer',
    statusBadge: 'ACTIVE & VERIFIED',
    docPath: '/docs/gst-certificate.pdf',
    isUploaded: false,
    standardRef: 'GSTIN: 09AWKPN5910E1ZG',
    desc: 'Government-registered industrial manufacturing unit under the Goods & Services Tax network. Enables 100% compliant corporate billing and full 18% Input Tax Credit (ITC) pass-through.',
    meta: [
      { label: 'GSTIN', value: '09AWKPN5910E1ZG' },
      { label: 'Tax Jurisdiction', value: 'Uttar Pradesh (Ghaziabad)' },
      { label: 'Filing Status', value: 'Active & Regular Taxpayer' },
      { label: 'HSN Codes', value: '4819 (Cartons/Boxes), 4821 (Labels/Tags)' }
    ]
  },
  {
    id: 'cert-iso',
    title: 'ISO 9001:2015 Quality Management System',
    issuingBody: 'Quality Management Systems Accredited Registrar',
    dateOrValidity: 'Annual Surveillance on Record',
    statusBadge: 'QMS AUDITED',
    docPath: '/docs/iso-9001-certificate.pdf',
    isUploaded: false,
    standardRef: 'ISO 9001:2015 Standard Setup',
    desc: 'Standardized production protocols covering kraft paper corrugation, dimensional precision tolerance (±1.5mm), ink adhesion testing, and automated defect rejection.',
    meta: [
      { label: 'Standard', value: 'ISO 9001:2015 Certified Setup' },
      { label: 'Audit Scope', value: 'Design, Printing & Corrugation' },
      { label: 'Calibration', value: 'Calibrated Micrometers & Digital Scales' },
      { label: 'Quality Yield', value: '99.8% First-Time-Right (FTR)' }
    ]
  },
  {
    id: 'cert-fsc',
    title: 'FSC-Controlled Recyclable Kraft Conformance',
    issuingBody: 'Certified Pulp & Paper Mill Testing Agency',
    dateOrValidity: 'Batch Paper Mill Compliance',
    statusBadge: '100% ECO-FRIENDLY',
    docPath: '/docs/fsc-kraft-certificate.pdf',
    isUploaded: false,
    standardRef: 'FSC-Controlled Sustainable Kraft',
    desc: 'Environmentally sustainable paper raw material sourced from certified pulp mills. 100% bio-degradable, recyclable, and processed with non-toxic corn starch adhesives.',
    meta: [
      { label: 'Pulp Classification', value: 'FSC-Controlled Kraft' },
      { label: 'Recyclability', value: '100% Recyclable in Standard Mills' },
      { label: 'Bleaching Process', value: 'ECF / TCF (Zero Elemental Chlorine)' },
      { label: 'Bio-Degradation', value: 'Rapid Natural Soil Breakdown' }
    ]
  },
  {
    id: 'cert-bursting',
    title: 'IS 2771 / ASTM Bursting Strength Lab Report',
    issuingBody: 'Calibrated Packaging Testing Laboratory',
    dateOrValidity: 'Hydraulic Mullen Burst Test Protocol',
    statusBadge: 'LAB TESTED 18-24 BF',
    docPath: '/docs/bursting-strength-report.pdf',
    isUploaded: false,
    standardRef: 'IS 2771 (Part 1) / ASTM D4727',
    desc: 'Calibrated with digital hydraulic Mullen Burst Testers and Box Compression Test (BCT) rigs. Built to withstand rough courier transit, stacking weight, and drops.',
    meta: [
      { label: 'Testing Standard', value: 'IS 2771 (Part 1) / ASTM D4727' },
      { label: 'Bursting Factor (BF)', value: '18 BF to 24 BF Heavy Grade' },
      { label: 'Edge Crush Test (ECT)', value: '32 to 55 lbs/in' },
      { label: 'Drop Test', value: '10-Drop ISTA-1A Standard Compliant' }
    ]
  },
  {
    id: 'cert-fssai',
    title: 'FSSAI Safe Food Packaging Compliance',
    issuingBody: 'Food Safety & Standards Authority of India (FSSAI) Approved Lab',
    dateOrValidity: 'IS 9845 Migration Safety Compliance',
    statusBadge: 'FOOD SAFE CONTACT',
    docPath: '/docs/fssai-food-contact-report.pdf',
    isUploaded: false,
    standardRef: 'FSSAI Packaging Regulations / IS 9845',
    desc: 'Direct-contact food packaging certification for pizza boxes, sweet boxes, and bakery cartons. Free from heavy metal migration and printed with food-grade soy/vegetable inks.',
    meta: [
      { label: 'Compliance', value: 'FSSAI Packaging Regulations / IS 9845' },
      { label: 'Overall Migration', value: 'Well Below 10 mg/dm² Safety Limit' },
      { label: 'Grease Barrier', value: 'Virgin Top Liner Barrier Tested' },
      { label: 'Steam Ventilation', value: 'Laser-cut Hot Air Release Holes' }
    ]
  },
  {
    id: 'cert-oeko',
    title: 'OEKO-TEX & Non-Toxic Label Inks Test Report',
    issuingBody: 'Textile Safety & Chemical Testing Laboratory',
    dateOrValidity: 'AZO-Free & REACH Compliant',
    statusBadge: 'SKIN-SAFE YARN',
    docPath: '/docs/oeko-tex-label-report.pdf',
    isUploaded: false,
    standardRef: 'OEKO-TEX Standard 100 Class 1 Safe',
    desc: 'Apparel neck labels, damask tags, and tagless heat transfers manufactured with non-carcinogenic AZO-free dyes. Zero skin irritation with ultrasonic soft sealed borders.',
    meta: [
      { label: 'Safety Standard', value: 'OEKO-TEX Standard 100 Class 1 Safe' },
      { label: 'Chemical Testing', value: 'REACH / RoHS Non-Toxic Compliant' },
      { label: 'Wash Durability', value: '50+ Industrial Washes with Zero Bleed' },
      { label: 'Cut Quality', value: 'Laser & Ultrasonic Non-Fray Edges' }
    ]
  }
];
