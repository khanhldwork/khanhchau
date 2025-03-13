import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SheetSide } from "@/components/SheetSide";

export const metadata: Metadata = {
  title: "Thiệp mời cưới Phương Nam ♥ Hải Yến",
  description: "Trân trọng kính mời bạn đến chung vui cùng chúng tôi trong ngày trọng đại của Phương Nam và Hải Yến. Hãy cùng nhau tạo nên những khoảnh khắc ý nghĩa và đáng nhớ!",
  openGraph: {
    title: "Thiệp mời cưới Phương Nam ♥ Hải Yến",
    description: "Trân trọng kính mời bạn đến chung vui cùng chúng tôi trong ngày trọng đại của Phương Nam và Hải Yến. Hãy cùng nhau tạo nên những khoảnh khắc ý nghĩa và đáng nhớ!",
    url: "https://wedly.info",
    siteName: "Thiệp mời cưới Phương Nam ♥ Hải Yến",
    images: ["https://res.cloudinary.com/dpufemrnq/image/upload/v1740504936/257A6768_olhw6i.jpg"],
    locale: "vi_VN",
    type: "website",
  },
  alternates: {
    canonical: "https://wedly.info",
  }
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
    <html lang="en">
      <body>
        <header className="h-[60px] bg-white fixed top-0 z-50 shadow-md w-full flex items-center justify-between px-4">
        <SheetSide />
        </header>
        {children}
        <Toaster position="top-center" duration={7000} closeButton />
      </body>
    </html>
  );
}
