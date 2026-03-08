import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://salesmansolutions.com"),
  title: {
    default: "Salesman Solutions | Platform Venture Architecture",
    template: "%s | Salesman Solutions",
  },
  description:
    "Salesman Solutions designs and deploys operational infrastructure through two platforms — IRIS for digital intelligence and ASSAN for applied systems. We build what runs.",
  keywords: [
    "operational infrastructure",
    "platform venture architecture",
    "Salesman Solutions",
    "IRIS digital systems",
    "ASSAN operations",
    "property operations Florida",
    "hospitality systems",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Salesman Solutions",
    title: "Salesman Solutions | Platform Venture Architecture",
    description:
      "Operational infrastructure through IRIS and ASSAN — we build what runs.",
    images: [{ url: "/images/landingpage.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cormorant.variable}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
