import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


export const metadata = {
  title: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
  openGraph: {
    title: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
    url: "https://duykhanhminhchau.vercel.app",
    siteName: "THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
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
      "/og-image.png",
    ],
  },
  alternates: {
    canonical: "https://duykhanhminhchau.vercel.app",
  },
  metadataBase: new URL("https://duykhanhminhchau.vercel.app"),
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
      <body>
        {children}
        <Toaster position="top-center" duration={7000} closeButton />
      </body>
    </html>
  );
}
