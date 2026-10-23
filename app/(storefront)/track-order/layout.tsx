import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Track Your Packaging Consignment & Order Status | AS Print Gallery',
  description:
    'Real-time order tracking for corrugated box dispatches, custom stickers, and woven label consignments. Check live production stage and delivery status.',
  alternates: {
    canonical: '/track-order'
  }
};

export default function TrackOrderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
