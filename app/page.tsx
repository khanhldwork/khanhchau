"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import SnowEffect from "@/components/SnowEffect";
import Guestbook from "@/components/Guestbook";
import CalendarMarch from "@/components/CalendarMarch";
import { DrawerDemo } from "@/components/DrawerDemo";
import { Button } from "@/components/ui/button";
import MusicToggleButton from "@/components/MusicToggleButton";
import ScrollToTop from "@/components/ScrollToTop";

export default function Page() {
  useEffect(() => { AOS.init(); }, []);
  useEffect(() => {
    const handleWheel = (event:any) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    const handleGesture = (event:any) => event.preventDefault();

    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("gesturestart", handleGesture);

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("gesturestart", handleGesture);
    };
  }, []);

  const handleOpenGoogleMaps = () => {
    const latitude = 20.758595;
    const longitude = 105.787167;
    const googleMapsAppUrl = `geo:${latitude},${longitude}`;
    const googleMapsWebUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  
    // Kiểm tra nếu đang chạy trên di động
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = googleMapsAppUrl;
    } else {
      window.open(googleMapsWebUrl, "_blank");
    }
  };
  
  

  return (
    <div className="max-w-[435px] overflow-hidden">
      <MusicToggleButton />
      <ScrollToTop />
      <section className="content relative flex flex-col items-center justify-center z-[20] py-14 bg-gray-300">
        <SnowEffect />
        <h2 className="font-extrabold text-[19px] font-playwrite">SAVE THE DATE</h2>
        <h3 className="font-bold text-[24px] font-Lobster mb-3 mt-3">Phương Nam & Hải Yến</h3>
        <div className="bg-[#f62259] w-[55%] p-2">
          <Image className="w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740565965/ch%E1%BB%8Dn_1_trong_2_seseul.svg" width={200} height={400} alt="Wedding" />
        </div>
        <div className="mt-4 mb-1 font-bold">09.03.2025</div>
        <p className="font-bold">(Tức ngày 10 Tháng 02 Năm Ất Tỵ)</p>
      </section>

      <section className="py-6 px-7 text-center">
          <h2 className="font-semibold text-[20px] font-Lobster mb-6">Hôn nhân là chuyện cả đời, Yêu người vừa ý, cưới người mình thương</h2>
        <div className="grid grid-cols-2">
          <div className="h-[200px] border"></div>
          <div className="h-[200px] border"></div>
          <div className="h-[200px] border"></div>
          <div className="h-[200px] border"></div>
        </div>
      </section>

      <section className="py-8 text-center bg-[#f2f5f4]">
        <div className="mx-5">
          <div className="w-[100px] h-[2px] bg-black rounded mx-auto mb-1"></div>
          <h2 className=" font-medium text-[26px]  text-black font-Lobster">Thư Mời</h2>
          <p className="text-sm font-semibold mb-5">THAM DỰ LỄ CƯỚI PHƯƠNG NAM & HẢI YẾN</p>
          <div className="grid grid-cols-[auto_40%_auto] items-center gap-4 px-2 rounded">
            <img data-aos="fade-left" data-aos-duration="1000" className="shadow-2xl rounded-md" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740504985/257A7142_hg6s9k.jpg" alt="Invitation 1" />
            <img data-aos="fade-top" data-aos-duration="1000" className="shadow-2xl rounded-md" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740504936/257A6768_olhw6i.jpg" alt="Invitation 2" />
            <img data-aos="fade-right" data-aos-duration="1000" className="shadow-2xl rounded-md" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740504830/257A6816_ssfl1y.jpg" alt="Invitation 3" />
          </div>
        </div>

        <div className="mx-7 flex flex-col gap-1 justify-center items-center mt-6 rounded-2xl py-5 px-5 bg-red-200">
          <h3 className="font-bold text-md">TIỆC MỪNG CƯỚI NHÀ TRAI</h3>
          <h4>CHỦ NHẬT</h4>
          <h3>09 . 03 . 2025</h3>
          <h3>Tại Tư Gia Nhà Trai</h3>
          <p className="text-sm">(Tức ngày 10 Tháng 02 Năm Ất Tỵ)</p>
          <Button className="mb-1 mt-2">Xác nhận tham dự</Button>
          <DrawerDemo />
          <Button onClick={handleOpenGoogleMaps}>Xem chỉ đường</Button>
        </div>
        <div className="mx-7 flex flex-col gap-1 justify-center items-center mt-6 rounded-2xl py-5 px-5 bg-red-200">
          <h3 className="font-bold text-md">TIỆC MỪNG CƯỚI NHÀ TRAI</h3>
          <h4>CHỦ NHẬT</h4>
          <h3>09 . 03 . 2025</h3>
          <h3>Tại Tư Gia Nhà Trai</h3>
          <p className="text-sm">(Tức ngày 10 Tháng 02 Năm Ất Tỵ)</p>
          <Button className="mb-1 mt-2">Xác nhận tham dự</Button>
          <DrawerDemo />
          <Button onClick={handleOpenGoogleMaps}>Xem chỉ đường</Button>
        </div>
      </section>

      <CalendarMarch />

      <section className="bg-[#f2f5f4] py-8 px-6">
        <div className="w-[90%] mx-auto">
          <h2 className="text-center font-medium text-[26px]">Album Hình Cưới</h2>
          <p className="text-center text-[15px] mb-6 mt-2">Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí.</p>
        </div>
        <div className="columns-2 gap-3 [&>*:not(:first-child)]:mt-3">
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740545310/257A6643_aj4knn.jpg" width={250} height={300} alt="Wedding" />
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505267/257A7196_z6igdl.jpg" width={250} height={500} alt="Wedding" />
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740545307/257A6610_senrnb.jpg" width={250} height={450} alt="Wedding" />
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505458/257A7238_rmrz7d.jpg" width={250} height={400} alt="Wedding" />
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505417/257A7203_bh9p5k.jpg" width={250} height={350} alt="Wedding" />
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740545311/257A6705_skzcgj.jpg" width={250} height={600} alt="Wedding" />
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740545311/257A6748_p6jdoh.jpg" width={250} height={350} alt="Wedding" />
          <Image className="rounded-md object-cover w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740545307/257A6610_senrnb.jpg" width={250} height={450} alt="Wedding" />
        </div>
      </section>
      <Guestbook />
    </div>
  );
}
