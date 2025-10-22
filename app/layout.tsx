import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
  description:
    "Trân trọng kính mời bạn đến chung vui cùng Duy Khánh & Minh Châu trong ngày trọng đại của chúng tôi.",
  keywords: "thiệp cưới, đám cưới, thư mời, Duy Khánh, Minh Châu",

  openGraph: {
    title: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
    description:
      "Trân trọng kính mời bạn đến chung vui cùng Duy Khánh & Minh Châu trong ngày trọng đại của chúng tôi.",
    url: "https://wedly.info",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761127055/demo/2.jpg.jpg",
        width: 1200,
        height: 630,
        alt: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
    description:
      "Trân trọng kính mời bạn đến chung vui cùng Duy Khánh & Minh Châu trong ngày trọng đại của chúng tôi.",
    images: ["https://res.cloudinary.com/dpufemrnq/image/upload/v1761127055/demo/2.jpg.jpg"],
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
