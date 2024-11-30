import { draftMode } from "next/headers";
import { Noto_Sans_JP } from "next/font/google";

import '@unocss/reset/tailwind.css'
import "@/app/globals.css";

import Header from "@/components/Globals/Header/Header";
import Navigation from "@/components/Globals/Navigation/Navigation";
import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";

const notoSansJP = Noto_Sans_JP({
  display: 'swap',
  preload: false,
  variable: '--font-noto-sans-jp',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif']
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>
        {isEnabled && <PreviewNotice />}
        <Header />
        {children}
      </body>
    </html>
  );
}
