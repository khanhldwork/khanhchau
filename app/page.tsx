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
          qrUrl: "https://res.cloudinary.com/dww4orwkv/image/upload/v1763107160/z7223328265834_e88e4846d01f637aa9c539bbb6e3e7c8_qhsmav.jpg",
          bankName: "MB Bank",
          accountName: "LE DUY KHANH",
          accountNumber: "0393906184",
        }}
        brideInfo={{
          qrUrl: "https://res.cloudinary.com/dww4orwkv/image/upload/v1763260686/z7228906051458_df71f80ee8d688a91d1859712bd31ae4_dtjfde.jpg",
          bankName: "MB Bank",
          accountName: "PHAM THI MINH CHAU",
          accountNumber: "5261020036868",
        }}
      />

      <Snowfall />
      <MusicFloatingButton />

      <Section1
        slides={[
          { imageUrl: "https://res.cloudinary.com/dww4orwkv/image/upload/v1763109480/Untitled_design_1_mbaa2v.jpg" },
          { imageUrl: "https://res.cloudinary.com/dww4orwkv/image/upload/v1763109290/Untitled_design_jdxvsk.jpg" },
          { imageUrl: "https://res.cloudinary.com/dww4orwkv/image/upload/v1763109605/Untitled_design_2_nk21xh.jpg" },
          { imageUrl: "https://res.cloudinary.com/dww4orwkv/image/upload/v1763260792/z7228839311173_9ae311e39416652d292888145352a2ed_v1soma.jpg" },
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
          "https://res.cloudinary.com/dww4orwkv/image/upload/v1763260612/z7228839304897_e9dbd1b5b0e109085ca3ba596dc1165f_lxbxdh.jpg",
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
            "https://res.cloudinary.com/dww4orwkv/image/upload/v1763111098/1_1_fzfru3.jpg",
            "https://res.cloudinary.com/dww4orwkv/image/upload/v1763110619/Untitled_design_4_jifwml.jpg",
            "https://res.cloudinary.com/dww4orwkv/image/upload/v1763110710/Untitled_design_5_ulfgcs.jpg",
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
          { src: "https://res.cloudinary.com/dww4orwkv/image/upload/v1763111098/1_1_fzfru3.jpg", height: 270 },
          { src: "https://res.cloudinary.com/dww4orwkv/image/upload/v1763111233/Untitled_design_6_p794w6.jpg", height: 270 },
          { src: "https://res.cloudinary.com/dww4orwkv/image/upload/v1763111411/Untitled_design_7_xo4vfw.jpg", height: 270 },
          { src: "https://res.cloudinary.com/dww4orwkv/image/upload/v1763111463/Untitled_design_8_zd5lmf.jpg", height: 270 },
        ]}
        column2={[
          { src: "https://res.cloudinary.com/dww4orwkv/image/upload/v1763106044/12_pnhv2d.png", height: 180 },
          { src: "https://res.cloudinary.com/dww4orwkv/image/upload/v1763106045/16_jco99x.png", height: 180 },
          { src: "https://res.cloudinary.com/dww4orwkv/image/upload/v1763111622/Untitled_design_10_jpmmeo.jpg", height: 270 },
          { src: "https://res.cloudinary.com/dww4orwkv/image/upload/v1763111554/Untitled_design_9_ecw5hj.jpg", height: 270 },
          { src: "https://res.cloudinary.com/dww4orwkv/image/upload/v1763260896/z7228839315916_1a6ccc7097a08afc19c03eccf519a50a_xxbdyl.jpg", height: 170 },
        ]}
      />

      <Section8
        title="Lời chúc phúc cho vợ chồng mình"
        description="Cùng chúng mình lưu giữ 1 chút kỷ niệm nhé!"
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
        backgroundImage="https://res.cloudinary.com/dww4orwkv/image/upload/v1763108034/Untitled_design_ffdw02.png"
        bottomText="Rất hân hạnh được đón tiếp!"
      />
    </div>
  );
}