import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { LangParamProp } from "@/config/internationalization/i18n";
import App from "./app";

interface RootProps {
  params: LangParamProp;
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Superbridge",
  description: "",
};

export default function RootLayout({ params, children }: Readonly<RootProps>) {
  return (
    <html lang={params.lang}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <App locale={params}>{children}</App>
      </body>
    </html>
  );
}
