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
  description: 'Automatically deploy canonical bridged ERC20 to an L2',
};

export default function RootLayout({ params, children }: Readonly<RootProps>) {
  return (
    <html lang={params.lang}>
      <body className="font-Bitform" suppressHydrationWarning={true}>
        <App locale={params}>{children}</App>
      </body>
    </html>
  );
}
