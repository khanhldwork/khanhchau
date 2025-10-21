import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


export const metadata = {
  title: "Thiệp mời cưới Duy Khánh ♥ Minh Châu",
  description:
    "Trân trọng kính mời bạn đến chung vui cùng chúng tôi trong ngày trọng đại của Duy Khánh và Minh Châu. Hãy cùng nhau tạo nên những khoảnh khắc ý nghĩa và đáng nhớ!",
  openGraph: {
    title: "Thiệp mời cưới Duy Khánh ♥ Minh Châu",
    description:
      "Trân trọng kính mời bạn đến chung vui cùng chúng tôi trong ngày trọng đại của Duy Khánh và Minh Châu. Hãy cùng nhau tạo nên những khoảnh khắc ý nghĩa và đáng nhớ!",
    url: "https://duykhanhminhchau.vercel.app",
    siteName: "Thiệp mời cưới Duy Khánh ♥ Minh Châu",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761015791/demo/2.png.png",
        width: 1200,
        height: 630,
        alt: "Thiệp mời cưới Duy Khánh ♥ Minh Châu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiệp mời cưới Duy Khánh ♥ Minh Châu",
    description:
      "Trân trọng kính mời bạn đến chung vui cùng chúng tôi trong ngày trọng đại của Duy Khánh và Minh Châu.",
    images: [
      "https://res.cloudinary.com/dpufemrnq/image/upload/v1761015791/demo/2.png.png",
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
