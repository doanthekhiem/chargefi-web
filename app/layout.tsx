import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const priego = localFont({
  src: [
    {
      path: "../public/font/Priego-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/Priego-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/Priego-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/Priego-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-priego",
});

export const metadata: Metadata = {
  title: "ChargeFi - Charge. Earn. Repeat.",
  description: "Turn Everyday Charging into Crypto Rewards. Earn $CHARGE Tokens By Simply Charging your Phone Or EV.",
  openGraph: {
    url: "https://www.chargefi.org/",
    type: "website",
    title: "ChargeFi - Charge. Earn. Repeat.",
    description: "Turn Everyday Charging into Crypto Rewards. Earn $CHARGE Tokens By Simply Charging your Phone Or EV.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/c15af51c-d291-482f-ad7d-cdbaa3e570fc.png?token=MfMLoIp7dnVExnPo62K37Hsxh39dGbV-F9ZMnW0j0Wg&height=1000&width=1000&expires=33291010606",
        width: 1000,
        height: 1000,
        alt: "ChargeFi - Charge. Earn. Repeat.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChargeFi - Charge. Earn. Repeat.",
    description: "Turn Everyday Charging into Crypto Rewards. Earn $CHARGE Tokens By Simply Charging your Phone Or EV.",
    images: [
      "https://opengraph.b-cdn.net/production/images/c15af51c-d291-482f-ad7d-cdbaa3e570fc.png?token=MfMLoIp7dnVExnPo62K37Hsxh39dGbV-F9ZMnW0j0Wg&height=1000&width=1000&expires=33291010606",
    ],
  },
  other: {
    "twitter:domain": "chargefi.org",
    "twitter:url": "https://www.chargefi.org/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${priego.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
