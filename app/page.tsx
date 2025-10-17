"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import FallingHearts from "@/components/FallingHearts";
import GuestbookWithComments from "@/components/GuestbookWithComments";

import EventCalendar from "@/components/EventCalendar";
import { WeddingGiftDrawer } from "@/components/WeddingGiftDrawer";
import { Button } from "@/components/ui/button";
import MusicToggleButton from "@/components/MusicToggleButton";
import FloatingMenu from "@/components/FloatingMenu";
import { CarouselSize } from "@/components/CarouselSize"


import { Section1 } from "@/components/component-anh-khanh/Section1";
import Section2 from "@/components/component-anh-khanh/Section2";
import Section3 from "@/components/component-anh-khanh/Section3";

export default function Page() {
  useEffect(() => { AOS.init(); }, []);



  return (
    <div className="max-w-[450px] md:max-w-[400px] overflow-hidden select-none">
      <FloatingMenu />

      <Section1
        slides={[
          { imageUrl: 'https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/4225f5f8-932a-4c8a-99b5-d00d61308c8a.webp' },
          { imageUrl: 'https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/26af4d86-620c-4fe5-8817-3b0daa1bc239.webp' },
          { imageUrl: 'https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/bf5d6cd3-b372-4de3-be9d-0aa50fc1d9f2.webp' },
        ]}
        title="Anh Tú & Thu Ngần"
        invitation={{
          weddingInviteText: "THƯ MỜI TIỆC CƯỚI",
          saturdayTime: "THỨ BẢY - 18:00",
          saturdayDate: "05 . 04 . 2026",
          sundayTime: "CHỦ NHẬT - 11:45",
          sundayDate: "06 . 04 . 2026",
          ceremonyText: "LỄ THÀNH HÔN",
        }}
        autoplay={3000}
      />


      <Section2
        title={
          <>
            Hôn nhân là chuyện cả đời,<br />
            Yêu người vừa ý, cưới người mình thương
          </>
        }
        galleryImages={[
          "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/77501014-78c3-4f0e-a2fc-25f01f7b6452.webp",
          "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/997031a1-7a3b-4e7b-aca0-2115c9917c7c.webp",
        ]}
        groom={{
          role: "Chú Rể",
          name: "Duy Khánh",
          address: "Đội 8, Thôn Diệt Pháp, Xã Thiện Phiến, Hưng Yên",
        }}
        bride={{
          role: "Cô Dâu",
          name: "Minh Châu",
          address: "Đội 8, Thôn Diệt Pháp, Xã Thiện Phiến, Hưng Yên",
        }}
      />


      <Section3
        invitation={{
          title: "Thư Mời",
          subtitle: "Bạn và Người thương",
          mainText: "THAM DỰ LỄ CƯỚI DUY KHÁNH & MINH CHÂU",
          images: [
            "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/a619703f-e248-4258-a0e0-77a289ed73fa.webp",
            "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/4225f5f8-932a-4c8a-99b5-d00d61308c8a.webp",
            "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/dd4a782a-cb2a-4d6f-b194-bcf2815bb54c.webp"
          ]
        }}
        events={[
          {
            title: "TIỆC CƯỚI NHÀ TRAI",
            dayOfWeek: "THỨ 7",
            time: "18:00",
            weddingDate: "05-04-2026",
            lunarDate: "(Tức ngày 08 Tháng 03 Năm Bính Ngọ)",
            locationName: "Tại Tư Gia Nhà Trai",
            address: "Thôn Đạo Tú, Xã Quảng Phú Cầu, Huyện Ứng Hoà, Thành phố Hà Nội",
            giftData: {
              imageUrl: "https://res.cloudinary.com/dpufemrnq/image/upload/v1740736020/2_x36xql.svg",
              name: "NGUYEN PHUONG NAM",
              accountNumber: "19035514534038",
              bankInfo: "TechcomBank CN HA DONG - PGD VAN QUAN"
            },
            mapCoords: { lat: 20.758595, lng: 105.787167 }
          },
          {
            title: "TIỆC CƯỚI NHÀ GÁI",
            dayOfWeek: "CHỦ NHẬT",
            time: "11:45",
            weddingDate: "06-04-2026",
            lunarDate: "(Tức ngày 09 Tháng 03 Năm Bính Ngọ)",
            locationName: "Tại Tư Gia Nhà Gái",
            address: "Thôn Tử Dương, Xã Cao Thành, Huyện Ứng Hoà, Thành phố Hà Nội",
            giftData: {
              imageUrl: "https://res.cloudinary.com/dpufemrnq/image/upload/v1740736026/1_wjfncb.svg",
              name: "NGUYEN HAI YEN",
              accountNumber: "100870601899",
              bankInfo: "VietinBank CN DONG DA"
            },
            mapCoords: { lat: 20.77225, lng: 105.7315278 }
          }
        ]}
      />





      <EventCalendar
        primaryDate="2025-10-25"        // Ngày chính hiển thị (chưa đến)
        secondaryDate="2025-10-24"      // Ngày phụ hiển thị (chưa đến)
        countdownTarget="2025-10-25T18:00:00"  // Ngày giờ bắt đầu sự kiện
        eventStart="2025-10-25T18:00:00"       // Bắt đầu sự kiện
        eventEnd="2025-10-25T23:59:59"         // Kết thúc sự kiện
      />



      <section className="bg-[#f2f5f4] py-8 px-6">
        <div className="w-[90%] mx-auto">
          <h2 className="text-center font-bold text-[28px] font-great-vibes">Album Hình Cưới</h2>
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

      <GuestbookWithComments />

      <section className="bg-primary py-10 px-7 flex gap-2 flex-col text-white items-center justify-center text-center">
        <h2 className="font-great-vibes font-bold zoom-text text-[46px]">Thank You</h2>
        <p>Chúng tôi vô cùng trân trọng và biết ơn sự hiện diện của bạn trong ngày đặc biệt này!</p>
      </section>
    </div>
  );
}
