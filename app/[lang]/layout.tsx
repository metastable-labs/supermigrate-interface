import './globals.css';
import type { Metadata } from 'next';
import { LangParamProp } from '@/config/internationalization/i18n';
import App from './app';

interface RootProps {
  params: LangParamProp;
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Supermigrate',
  description: 'Your gateway to L2s',
};

export default function RootLayout({ params, children }: Readonly<RootProps>) {
  return (
    <html lang={params.lang}>
      <body className="font-Aeonik" suppressHydrationWarning={true}>
        <App locale={params}>{children}</App>
      </body>
    </html>
  );
}
