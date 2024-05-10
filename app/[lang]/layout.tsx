import { LangParamProp } from '@/config/internationalization/i18n';
import App from './app';

interface RootProps {
  params: LangParamProp;
  children: React.ReactNode;
}

export default function RootLayout({ params, children }: Readonly<RootProps>) {
  return <App locale={params}>{children}</App>;
}
