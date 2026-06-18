import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ConfidentBuy | Know the Signal Before You Buy',
  description:
    'ConfidentBuy helps online shoppers understand merchant trust, product quality signals, reviews, and scam risk before checkout.',
  icons: {
    icon: '/adamremix-logo.png'
  },
  openGraph: {
    title: 'ConfidentBuy | Know the Signal Before You Buy',
    description:
      'A smart shopping signal for merchant trust, product quality, reviews, and scam risk.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
