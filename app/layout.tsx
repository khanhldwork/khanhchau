import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Thiệp mời cưới Phương Nam ♥ Hải Yến",
  description: "Trân trọng kính mời bạn đến chung vui cùng chúng tôi trong ngày trọng đại của Phương Nam và Hải Yến. Hãy cùng nhau tạo nên những khoảnh khắc ý nghĩa và đáng nhớ!",
  metadataBase: new URL("https://weddingnamyen.vercel.app"),
  alternates: { canonical: "https://weddingnamyen.vercel.app" },
  openGraph: {
    title: "Thiệp mời cưới Phương Nam ♥ Hải Yến",
    description: "Trân trọng kính mời bạn đến chung vui cùng chúng tôi trong ngày trọng đại của Phương Nam và Hải Yến.",
    type: "website",
    url: "https://weddingnamyen.vercel.app",
    siteName: "Thiệp cưới Nam ♥ Yến",
    locale: "vi_VN",
    images: [
      {
        url: "https://res.cloudinary.com/dpufemrnq/image/upload/v1740504936/257A6768_olhw6i.jpg",
        width: 1200,
        height: 630,
        alt: "Thiệp mời cưới Phương Nam ♥ Hải Yến",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    creator: "@your_twitter_handle",
    title: "Thiệp mời cưới Phương Nam ♥ Hải Yến",
    description: "Trân trọng kính mời bạn đến chung vui cùng chúng tôi trong ngày trọng đại của Phương Nam và Hải Yến.",
    images: ["https://res.cloudinary.com/dpufemrnq/image/upload/v1740504936/257A6768_olhw6i.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" dir="ltr">
      <head>
        <meta name="theme-color" content="#ff4081" />
      </head>
      <body>
        {children}
        <Toaster position="top-center" duration={7000} closeButton />
      </body>
    </html>
  );
}
