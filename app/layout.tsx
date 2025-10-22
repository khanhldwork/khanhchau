import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
  keywords: "thiệp cưới, đám cưới, thư mời, Duy Khánh, Minh Châu",
  openGraph: {
    title: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
    url: "https://wedly.info",
    siteName: "Wedly",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://wedly.info/og-image.png", // ảnh trong thư mục public
        width: 1200,
        height: 630,
        alt: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
    images: ["https://wedly.info/og-image.png"],
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
      </head>
      <body>
        {children}
        <Toaster position="top-center" duration={7000} closeButton />
      </body>
    </html>
  );
}
