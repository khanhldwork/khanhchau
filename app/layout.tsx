import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

// export const metadata: Metadata = {
//   title: "Thiệp mời cưới Phương Nam ♥ Hải Yến",
//   description: "Trân trọng kính mời bạn đến chung vui cùng chúng tôi trong ngày trọng đại của Phương Nam và Hải Yến. Hãy cùng nhau tạo nên những khoảnh khắc ý nghĩa và đáng nhớ!"
// };

export const metadata: Metadata = {
  title: "Thiệp mời cưới Phương Nam ♥ Hải Yến",
  description: "Trân trọng kính mời bạn đến chung vui cùng chúng tôi trong ngày trọng đại của Phương Nam và Hải Yến. Hãy cùng nhau tạo nên những khoảnh khắc ý nghĩa và đáng nhớ!",
  openGraph: {
    title: "Thiệp mời cưới Phương Nam ♥ Hải Yến",
    description: "Trân trọng kính mời bạn đến chung vui cùng chúng tôi trong ngày trọng đại của Phương Nam và Hải Yến.",
    type: "website",
    url: "https://weddingnamyen.vercel.app", // Đổi thành URL thật của bạn
    images: [
      {
        url: "https://res.cloudinary.com/dpufemrnq/image/upload/v1740504936/257A6768_olhw6i.jpg", // Đường dẫn ảnh SEO
        width: 1200,
        height: 630,
        alt: "Thiệp mời cưới Phương Nam ♥ Hải Yến"
      }
    ]
  }
};


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center"/>
      </body>
    </html>
  );
}
