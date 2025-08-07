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
