import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


export const metadata = {
  title: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
  openGraph: {
    title: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
    url: "https://wedly.info",
    siteName: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://wedly.info/og-image.png",
        secureUrl: "https://wedly.info/og-image.png",
        width: 1200,
        height: 630,
        alt: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
    images: [
      "https://wedly.info/og-image.png",
    ],
  },
  alternates: {
    canonical: "https://wedly.info",
  },
  metadataBase: new URL("https://wedly.info"),
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:image" content="https://wedly.info/og-image.png" />
        <meta property="og:image:secure_url" content="https://wedly.info/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU" />
      </head>
      <body>
        {children}
        <Toaster position="top-center" duration={7000} closeButton />
      </body>
    </html>
  );
}
