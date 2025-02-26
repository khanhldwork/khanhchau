import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Thiệp mời cưới Phương Nam ♥ Hải Yến",
  description: "Trân trọng kính mời bạn đến chung vui cùng chúng tôi trong ngày trọng đại của Phương Nam và Hải Yến. Hãy cùng nhau tạo nên những khoảnh khắc ý nghĩa và đáng nhớ!"
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
