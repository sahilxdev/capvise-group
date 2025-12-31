import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Force dark mode on mobile browsers
export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://capvise.group'),
  title: {
    default: 'Capvise Group | The Rooms That Matter',
    template: '%s | Capvise Group',
  },
  description: 'Invite-driven events at TOKEN2049, Devconnect, and Coinfest Asia. We turn attention into infrastructure.',
  keywords: ['Web3', 'Venture Capital', 'Crypto Events', 'Token2049', 'Capvise', 'Networking'],
  authors: [{ name: 'Capvise Group' }],
  creator: 'Capvise Group',
  
  // ROBOTS: Ensures Google indexes you correctly
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // OPEN GRAPH: Controls how the link looks on Facebook, LinkedIn, Discord, iMessage
  openGraph: {
    title: 'Capvise Group | The Rooms That Matter',
    description: 'We build the rooms everyone wants into. Invite-driven events turning attention into infrastructure.',
    url: 'https://capvise.group',
    siteName: 'Capvise Group',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Capvise Group - Global Events',
      },
    ],
  },

  // TWITTER: Controls how the link looks on X (Critical for Web3)
  twitter: {
    card: 'summary_large_image',
    title: 'Capvise Group',
    description: 'The rooms that matter. TOKEN2049 • Devconnect • Coinfest Asia.',
    site: '@capviseofficial',
    creator: '@capviseofficial',
    images: ['/og-image.png'],
  },
  
  // ICONS: Complete favicon setup for all devices
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  
  // MANIFEST: For Android/PWA support
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full">
      <body className={`${inter.className} bg-black text-white antialiased h-full overflow-hidden selection:bg-neutral-700 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}