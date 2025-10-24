"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Snowfall from "@/components/Snowfall";
import GuestbookWithComments from "@/components/GuestbookWithComments";
import FloatingMenu from "@/components/FloatingMenu";
import { useEffect } from "react";
import DoorOpenSimple from "@/components/DoorOpenSimple";


import Section1 from "@/components/component-anh-khanh/Section1";
import Section2 from "@/components/component-anh-khanh/Section2";
import Section3 from "@/components/component-anh-khanh/Section3";
import Section4 from "@/components/component-anh-khanh/Section4";
import Section5 from "@/components/component-anh-khanh/Section5";
import Section9 from "@/components/component-anh-khanh/Section9";
import Section7 from "@/components/component-anh-khanh/Section7";



export default function Page() {
  useEffect(() => { AOS.init(); }, []);

  return (
    <div className="max-w-[450px] md:max-w-[400px] overflow-hidden select-none relative">
      <DoorOpenSimple />
      <FloatingMenu />
      <Snowfall />

      <Section1
        slides={[
          { imageUrl: 'https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/4225f5f8-932a-4c8a-99b5-d00d61308c8a.webp' },
          { imageUrl: 'https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/26af4d86-620c-4fe5-8817-3b0daa1bc239.webp' },
          { imageUrl: 'https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/bf5d6cd3-b372-4de3-be9d-0aa50fc1d9f2.webp' },
        ]}
        title="Duy Khánh & Minh Châu"
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
          mainText: "THAM DỰ LỄ CƯỚI DUY KHÁNH & MINH CHÂU",
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
              name: "LÊ DUY KHÁNH",
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
              name: "NGUYỄN MINH CHÂU",
              accountNumber: "100870601899",
              bankInfo: "VietinBank CN DONG DA"
            },
            mapCoords: { lat: 20.77225, lng: 105.7315278 }
          }
        ]}
      />


      <Section4
        firstCeremony={{
          title: "LỄ THÀNH HÔN",
          time: "Vào Chủ Nhật - 11:45",
          month: "Tháng 4",
          day: "06",
          year: "2026",
          lunarDate: "(Tức ngày 08 Tháng 03 Năm Bính Ngọ)",
        }}
        secondCeremony={{
          title: "LỄ RƯỚC DÂU",
          time: "Vào Chủ Nhật - 11:00",
          month: "Tháng 4",
          day: "06",
          year: "2026",
          lunarDate: "(Tức ngày 08 Tháng 03 Năm Bính Ngọ)",
        }}
      />



      <Section5
        monthTitle="THÁNG 11 - 2025"
        primaryDate="2025-11-29"
        secondaryDate="2025-11-28"
        countdownTarget="2025-11-28T18:00:00"
        eventStart="2025-11-28T18:00:00"
        eventEnd="2025-11-29T12:00:00"
      />

      <Section7
        title="Kỷ Niệm Ngày Cưới"
        description="Khoảnh khắc yêu thương của chúng tôi."
        borderRadius={12}
        column1={[
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/26af4d86-620c-4fe5-8817-3b0daa1bc239.webp", height: 270 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/26af4d86-620c-4fe5-8817-3b0daa1bc239.webp", height: 270 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/4225f5f8-932a-4c8a-99b5-d00d61308c8a.webp", height: 270 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/e489a219-2df3-409e-bb23-304abd03318f.webp", height: 272 },
        ]}
        column2={[
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/a619703f-e248-4258-a0e0-77a289ed73fa.webp", height: 180 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/21895e2b-b3dd-4e4e-bab6-8980cbc6b131.webp", height: 180 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/27bfd4fa-46bf-4a84-8463-eb1f5e8f7563.webp", height: 270 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/6e884791-e1cb-4e43-b8b1-f1e37f423199.webp", height: 270 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/69bf4561-0e51-47ea-bb0f-061eeac87a42.webp", height: 170 },
        ]}
      />

      <GuestbookWithComments />


      <Section9
        backgroundImage="https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/dd4a782a-cb2a-4d6f-b194-bcf2815bb54c.webp"
        bottomText="Rất hân hạnh được đón tiếp!"
      />
    </div>
  );
}
