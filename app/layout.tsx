import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { LangParamProp } from '@/config/internationalization/i18n';
import App from './[lang]/app';

interface RootProps {
  params: LangParamProp;
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Supermigrate',
  description: 'Your gateway to L2s',
  keywords: ['base', 'migrate', 'Migration', 'Layer 2', 'Layer 1', 'Ethereum', 'base migrate', 'erc20 token to base network', 'migrate erc20 tokens'],
  applicationName: 'Supermigrate',
  authors: [{ name: 'Justice Eziefule', url: 'https://github.com/meisterjustice' }],
  openGraph: {
    title: 'Supermigrate',
    description: 'Your gateway to L2s',
    url: 'https://supermigrate.xyz',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/djzeufu4j/image/upload/v1715019214/favicon_ihu7jb.png',
        width: 1200,
        height: 630,
      },
    ],
    siteName: 'supermigrate.xyz',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://supermigrate.xyz',
    title: 'Supermigrate',
    description: 'Your gateway to L2s',
    images: [
      {
        url: 'https://res.cloudinary.com/djzeufu4j/image/upload/v1715019214/favicon_ihu7jb.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ params, children }: Readonly<RootProps>) {
  return (
    <html lang={params.lang}>
      <body className="font-Aeonik" suppressHydrationWarning={true}>
        {/** Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KP3SGTMZQD" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-KP3SGTMZQD');
        `}
        </Script>
        <App locale={params}>{children}</App>
      </body>
    </html>
  );
}
