import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { libraryConfig } from '@/lib/site-config';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  metadataBase: new URL('https://brightstarlibrary.example'),
  title: 'Bright Star Library | Study Library in Jhabrera, Uttarakhand',
  description: 'Bright Star Library on Iqbalpur Road, Opp. Royal Petrol Pump, Jhabrera, Uttarakhand offers 120+ seats, Wi-Fi, a separate female section and 24-hour access for focused study.',
  keywords: ['Bright Star Library', 'study library Jhabrera', 'library Iqbalpur Road', '24 hour library Uttarakhand'],
  openGraph: {
    title: 'Bright Star Library | Your space to study, focus & grow',
    description: 'A peaceful and comfortable study environment on Iqbalpur Road, Opp. Royal Petrol Pump, Jhabrera with 120+ seats and 24-hour access.',
    type: 'website',
  },
  icons: {
    icon: '/images/ChatGPT_Image_Aug_8,_2026,_01_53_42_PM.png',
    apple: '/images/ChatGPT_Image_Aug_8,_2026,_01_53_42_PM.png',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Library',
  name: libraryConfig.name,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Iqbalpur Road, Opp. Royal Petrol Pump, Jhabrera',
    addressLocality: 'Jhabrera',
    addressRegion: 'Uttarakhand',
    postalCode: '247665',
    addressCountry: 'IN',
  },
  telephone: `+${libraryConfig.phoneDigits}`,
  openingHours: 'Mo-Su 00:00-24:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: libraryConfig.rating,
    reviewCount: '4',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
