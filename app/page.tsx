"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Snowfall from "@/components/ui-custom/Snowfall";
import { useState, useEffect } from "react";

import Section1 from "@/components/ui-custom/Section1";
import Section2 from "@/components/ui-custom/Section2";
import Section3 from "@/components/ui-custom/Section3";
import Section4 from "@/components/ui-custom/Section4";
import Section5 from "@/components/ui-custom/Section5";
import Section7 from "@/components/ui-custom/Section7";
import Section8 from "@/components/ui-custom/Section8";
import Section9 from "@/components/ui-custom/Section9";

import MusicFloatingButton from "@/components/ui-custom/MusicFloatingButton";
import GiftFloatingButtonWithBankQR from "@/components/ui-custom/GiftFloatingButtonWithBankQR";
import DoorOpenSimple from "@/components/ui-custom/DoorOpenSimple";

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [open, setOpen] = useState(false);
  const [initialTab, setInitialTab] = useState<"groom" | "bride">("groom");

  return (
    <div className="max-w-[450px] md:max-w-[400px] overflow-hidden select-none relative">
      <DoorOpenSimple />

      {/* Nút mở modal cố định góc phải */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-50"
      >
        <Image src="/images/giftbox.png" alt="Gift" width={26} height={26} />
      </button>

      {/* Modal mừng cưới */}
      <GiftFloatingButtonWithBankQR
        open={open}
        setOpen={setOpen}
        initialTab={initialTab}
        groomInfo={{
          qrUrl: "https://res.cloudinary.com/dww4orwkv/image/upload/v1761917679/z7175957995700_21598e4bec7b6790fb3e47b664f39d3b_z3ntg6.jpg",
          bankName: "MB Bank",
          accountName: "LE DUY KHANH",
          accountNumber: "0393906184",
        }}
        brideInfo={{
          qrUrl: "https://img.vietqr.io/image/ACB-1234567890-compact2.png",
          bankName: "MB Bank",
          accountName: "PHAM THI MINH CHAU",
          accountNumber: "1234567890",
        }}
      />

      <Snowfall />
      <MusicFloatingButton />

      <Section1
        slides={[
          { imageUrl: "https://res.cloudinary.com/dww4orwkv/image/upload/v1761749554/XXX07855_rtull6.jpg" },
          { imageUrl: "https://res.cloudinary.com/dww4orwkv/image/upload/v1761749555/XXX07722_ner6nu.jpg" },
          { imageUrl: "https://res.cloudinary.com/dww4orwkv/image/upload/v1761749555/XXX08519_hposvb.jpg" },
        ]}
        title="Duy Khánh & Minh Châu"
        invitation={{
          weddingInviteText: "LỄ NẠP TÀI",
          saturdayTime: "THỨ BA - 09:00",
          saturdayDate: "25 . 11 . 2025",
          sundayTime: "THỨ BẢY - 10:30",
          sundayDate: "29 . 11 . 2025",
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
          "https://res.cloudinary.com/dww4orwkv/image/upload/v1761747536/XXX08083_uoi25w.jpg",
          "https://res.cloudinary.com/dww4orwkv/image/upload/v1761747479/z7168928568544_1b1431ae8078b64e1f1a8ca259406b52_qv5ror.jpg",
        ]}
        groom={{
          role: "Chú Rể",
          name: "Duy Khánh",
          address: "Số 10 Trần Nhân Tông, Sầm Sơn, Thanh Hoá",
        }}
        bride={{
          role: "Cô Dâu",
          name: "Minh Châu",
          address: "Phố Thống Nhất, Phường Đông Sơn, Thanh Hoá",
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
            "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/dd4a782a-cb2a-4d6f-b194-bcf2815bb54c.webp",
          ],
        }}
        events={[
          {
            title: "TIỆC CƯỚI NHÀ GÁI",
            dayOfWeek: "Thứ Ba",
            time: "10:30 AM",
            weddingDate: "25-11-2025",
            lunarDate: "Ngày 06 tháng 10 năm Ất Tỵ",
            locationName: "TT Tổ chức sự kiện Anyla Dining",
            address: "2A Hàng Sứ, Phường Hạc Thành, Thanh Hoá",
            mapCoords: { lat: 19.8023052, lng: 105.7819901 },
          },
          {
            title: "TIỆC CƯỚI NHÀ TRAI",
            dayOfWeek: "Thứ Bảy",
            time: "11:00 AM",
            weddingDate: "29-11-2025",
            lunarDate: "Ngày 10 tháng 10 năm Ất Tỵ",
            locationName: "Nhà Hàng Hồng Thanh",
            address: "Số 13 Trần Nhân Tông, Hồng Thắng, Sầm Sơn, Thanh Hoá",
            mapCoords: { lat: 19.7588406, lng: 105.9129768 },
          },
        ]}
        textSettings={{
          giftButton: "Hộp quà mừng",
          giftTitle: "Gửi lời chúc & mừng cưới",
          giftDescription: "Xin cảm ơn bạn đã gửi lời chúc phúc trong ngày đặc biệt này ❤️",
          googleMapButton: "Xem vị trí trên bản đồ",
        }}
        open={open}
        setOpen={setOpen}
        setInitialTab={setInitialTab} // ✅ thêm dòng này
      />

      <Section4
        firstCeremony={{
          title: "LỄ THÀNH HÔN",
          time: "Vào Thứ Bảy - 10:30",
          month: "Tháng 11",
          day: "29",
          year: "2025",
          lunarDate: "(Tức ngày 10 Tháng 10 Năm Ất Tỵ)",
        }}
        secondCeremony={{
          title: "LỄ NẠP TÀI",
          time: "Vào Thứ Ba - 09:00",
          month: "Tháng 11",
          day: "25",
          year: "2025",
          lunarDate: "(Tức ngày 06 Tháng 10 Năm Ất Tỵ)",
        }}
      />

      <Section5
        monthTitle="THÁNG 11 - 2025"
        primaryDate="2025-11-29"
        secondaryDate="2025-11-25"
        countdownTarget="2025-11-29T10:30:00"
        eventStart="2025-11-29T10:30:00"
        eventEnd="2025-11-29T10:30:00"
      />

      <Section7
        title="Album Ảnh Cưới"
        description="We got married!"
        borderRadius={12}
        column1={[
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/26af4d86-620c-4fe5-8817-3b0daa1bc239.webp", height: 270 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/26af4d86-620c-4fe5-8817-3b0daa1bc239.webp", height: 270 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/4225f5f8-932a-4c8a-99b5-d00d61308c8a.webp", height: 270 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/e489a219-2df3-409e-bb23-304abd03318f.webp", height: 270 },
        ]}
        column2={[
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/a619703f-e248-4258-a0e0-77a289ed73fa.webp", height: 180 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/21895e2b-b3dd-4e4e-bab6-8980cbc6b131.webp", height: 180 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/27bfd4fa-46bf-4a84-8463-eb1f5e8f7563.webp", height: 270 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/6e884791-e1cb-4e43-b8b1-f1e37f423199.webp", height: 270 },
          { src: "https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/69bf4561-0e51-47ea-bb0f-061eeac87a42.webp", height: 170 },
        ]}
      />

      <Section8
        title="Lời chúc phúc cho vợ chồng mình nhé"
        description="Giúp vợ chồng mình lưu giữ 1 chút kỷ niệm nhé!"
        placeholders={{
          name: "Tên bạn là gì?",
          message: "Lời chúc của bạn dành cho cô dâu chú rể",
        }}
        buttonText="Gửi lời chúc"
        showMoreText="Xem thêm"
        loadingText="Đang gửi lời chúc..."
        successMessage="Cảm ơn bạn! Lời chúc của bạn đã được gửi thành công 🎉"
        errorMessage="Có lỗi xảy ra, vui lòng thử lại!"
      />


      <Section9
        backgroundImage="https://s3-hcm-r2.s3cloud.vn/thiepcuoi-mehappy/admin/assets/dd4a782a-cb2a-4d6f-b194-bcf2815bb54c.webp"
        bottomText="Rất hân hạnh được đón tiếp!"
      />
    </div>
  );
}