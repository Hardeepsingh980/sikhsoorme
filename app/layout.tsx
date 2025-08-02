import Header from '@/components/layouts/Header';
import './globals.css';
import { ReactNode } from 'react';
import Footer from '@/components/layouts/Footer';
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata = {
  title: 'SikhSoorme - Discover Sikh Heroes',
  description: 'Explore the lives and legacies of Sikh warriors, gurus, and scholars who shaped history through their courage, wisdom, and devotion.',
  keywords: 'Sikh, Warriors, Gurus, History, Sikhism, Punjab, Khalsa, Martyr',
  authors: [{ name: 'SikhSoorme Team' }],
  themeColor: '#d97706',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'SikhSoorme - Discover Sikh Heroes',
    description: 'Explore the lives and legacies of Sikh warriors, gurus, and scholars.',
    url: 'https://sikhsoorme.com',
    siteName: 'SikhSoorme',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SikhSoorme - Discover Sikh Heroes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SikhSoorme - Discover Sikh Heroes',
    description: 'Explore the lives and legacies of Sikh warriors, gurus, and scholars.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col font-sans text-gray-900 bg-white antialiased">
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
        <div className="h-2 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600"></div>
        <Header />
          {children}
        <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="GTM-KJSDXDZC" />
    </html>
  );
}
