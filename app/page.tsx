"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import SnowEffect from "@/components/SnowEffect";

export default function Page() {
  useEffect(() => { AOS.init(); }, []);

  return (
    <div className="max-w-[435px]">
      <section className="content relative flex items-center justify-center z-[20] max-w-[435px]">
        <SnowEffect />
        <Image src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740504884/257A6873_m1d4b9.jpg" width={500} height={700} alt="Wedding" />
        <div className="absolute flex flex-col justify-center items-center text-center gap-6">
          <h2 data-aos="fade-down" data-aos-duration="1000" className="text-white text-[28px]" style={{ textShadow: "4px 4px 5px rgba(0, 0, 0, 0.5)" }}>
            -SAVE THE DATE-
          </h2>
          <h2 data-aos="fade" data-aos-duration="1000" className="font-dancing text-white text-[26px] font-medium text-center" style={{ textShadow: "4px 4px 5px rgba(0, 0, 0, 0.5)" }}>
            Phương Nam <br /> ♥ <br /> Hải Yến
          </h2>
          <span className="w-[100px] h-[4px] bg-[#d4f622] my-5 rounded"></span>
          <p data-aos="fade-up" data-aos-duration="1000" className="font-dancing font-medium text-white text-[30px] zoom-text" style={{ textShadow: "4px 4px 5px rgba(0, 0, 0, 0.3)" }}>
            09/03/2025
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" className="font-dancing text-white text-[16px]" style={{ textShadow: "4px 4px 5px rgba(0, 0, 0, 0.5)" }}>
            (Tức Ngày 10 Tháng 02 Năm Ất Tỵ)
          </p>
        </div>
      </section>

      <section className="py-6 ">
        <h2 className="text-center font-medium text-[26px] mb-6" data-aos="fade" data-aos-duration="1000">Một hành trình mới bắt đầu</h2>
        <div className="grid grid-cols-2 px-2">
          <div className="flex flex-col justify-center items-center text-center" data-aos="fade-down-right" data-aos-duration="1000">
            <h5 className="font-extrabold text-[15px] leading-8">Nhà Gái <br /> Ông Nguyễn Danh Hào <br /> Bà Nguyễn Thị Phương</h5>
            <p className="text-sm mt-2 leading-8">Thôn Tử Dương - Cao Thành - Ứng Hoà - Hà Nội</p>
          </div>
          <div data-aos="fade-down-left" data-aos-duration="1000">
            <Image src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505226/257A6945_xfkcni.jpg" width={250} height={400} alt="Wedding" />
          </div>
          <div data-aos="fade-up-right" data-aos-duration="1000">
            <Image src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505075/257A6958_voyspn.jpg" width={250} height={400} alt="Wedding" />
          </div>
          <div className="flex flex-col justify-center items-center text-center" data-aos="fade-up-left" data-aos-duration="1000">
            <h5 className="font-extrabold text-[15px] leading-8">Nhà Trai <br /> Ông Nguyễn Hữu Cầu <br /> Bà Nguyễn Thị Kế</h5>
            <p className="text-sm mt-2 leading-8">Thôn Đạo Tú - Quảng Phú Cầu - Ứng Hoà - Hà Nội</p>
          </div>
        </div>
      </section>

      <section className="py-5 my-2">
        <div className="w-[180px] h-[3px] bg-black rounded mx-auto mb-3"></div>
        <h2 className="text-center font-medium text-[26px] mb-4" data-aos="fade" data-aos-duration="1000">Thư Mời</h2>
        <div className="grid grid-cols-[auto_37%_auto] items-center gap-4 px-2 rounded">
          <img data-aos="fade-left" data-aos-duration="1000" className="shadow-2xl" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740504985/257A7142_hg6s9k.jpg" alt="Invitation 1" />
          <img data-aos="fade-top" data-aos-duration="1000" className="shadow-2xl" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740504936/257A6768_olhw6i.jpg" alt="Invitation 2" />
          <img data-aos="fade-right" data-aos-duration="1000" className="shadow-2xl" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740504830/257A6816_ssfl1y.jpg" alt="Invitation 3" />
        </div>
      </section>

      <section className="pt-9" data-aos="fade-up" data-aos-duration="1000">
        <div className="border border-black px-6 mx-4 rounded-xl flex flex-col items-center py-8">
          <h6 className="mb-5">NGÀY TỔ CHỨC TIỆC</h6>
          <h6 className="mb-1">THỨ 7 | 15H30</h6>
          <h3 className="text-[32px] font-extrabold">09 . 03 . 2025</h3>
          <p className="font-dancing font-medium text-[14px] mt-4">(Tức Ngày 10 Tháng 02 Năm Ất Tỵ)</p>
          <button className="px-10 py-4 bg-red-500 mt-6 text-white rounded-2xl">Gửi Mừng Cưới</button>
        </div>
      </section>

      <section className="py-6 mt-2">
        <h2 className="text-center font-medium text-[26px] mb-6" data-aos="fade" data-aos-duration="1000">Album Hình Cưới</h2>
        <div className="grid grid-cols-2 px-2 gap-4">
          <Image src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505267/257A7196_z6igdl.jpg" width={250} height={400} alt="Wedding" />
          <Image src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505226/257A6945_xfkcni.jpg" width={250} height={400} alt="Wedding" />
          <Image src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505458/257A7238_rmrz7d.jpg" width={250} height={400} alt="Wedding" />
          <Image src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505438/257A7288_ivhhnv.jpg" width={250} height={400} alt="Wedding" />
          <Image src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505417/257A7203_bh9p5k.jpg" width={250} height={400} alt="Wedding" />
          <Image src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740505267/257A7196_z6igdl.jpg" width={250} height={400} alt="Wedding" />
        </div>
      </section>
    </div>
  );
}
