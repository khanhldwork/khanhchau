import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",

  openGraph: {
    title: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761126706/demo/Thie%CC%82%CC%81t%20ke%CC%82%CC%81%20chu%CC%9Ba%20co%CC%81%20te%CC%82n.jpg.jpg",
        width: 1200,
        height: 630,
        alt: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
    images: ["https://res.cloudinary.com/dpufemrnq/image/upload/v1761126706/demo/Thie%CC%82%CC%81t%20ke%CC%82%CC%81%20chu%CC%9Ba%20co%CC%81%20te%CC%82n.jpg.jpg"],
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
        <meta property="fb:app_id" content="966242223397117" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {children}
        <Toaster position="top-center" duration={7000} closeButton />
      </body>
    </html>
  );
}
