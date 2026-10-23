import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive 3D Box Customizer & Live Packaging Studio | AS Print Gallery',
  description:
    'Design, rotate, and customize 3-ply and 5-ply corrugated cartons in 3D. Add custom logos, live dimensions, and calculate factory wholesale rates from our Ghaziabad plant.',
  alternates: {
    canonical: '/3d-box-builder'
  }
};

export default function BoxBuilderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
