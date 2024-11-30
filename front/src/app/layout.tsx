import { draftMode } from "next/headers";
import { Noto_Sans_JP } from "next/font/google";

import "@/app/globals.css";

import Navigation from "@/components/Globals/Navigation/Navigation";
import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";

const notoSansJP = Noto_Sans_JP({
  display: 'swap',
  weight: ['300','400','500','700'],
  preload: false
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>
        {isEnabled && <PreviewNotice />}
        <Navigation />
        {children}
      </body>
    </html>
  );
}
