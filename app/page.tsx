"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import SnowEffect from "@/components/SnowEffect";
import CountdownTimer from "@/components/CountdownTimer";
import Guestbook from "@/components/Guestbook";

export default function Page() {
  useEffect(() => { AOS.init(); }, []);

  return (
    <div className="max-w-[435px] overflow-hidden bg-[#FDF7F3] text-[#69431C]">
      <section className="content relative flex items-center justify-center z-[20]">
        <SnowEffect />
        <Image className="w-full" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740565965/ch%E1%BB%8Dn_1_trong_2_seseul.svg" width={200} height={400} alt="Wedding" />
      </section>

      <section>
        <Image className=" w-[90%] mx-auto" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740565962/3_q65hsl.svg" width={200} height={400} alt="Wedding" />
      </section>

      {/* <section className="py-5 my-2">
        <div className="w-[180px] h-[3px] bg-black rounded mx-auto mb-3"></div>
        <h2 className="text-center font-medium text-[26px] mb-4" data-aos="fade" data-aos-duration="1000">Thư Mời</h2>
        <div className="grid grid-cols-[auto_37%_auto] items-center gap-4 px-2 rounded">
          <img data-aos="fade-left" data-aos-duration="1000" className="shadow-2xl" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740504985/257A7142_hg6s9k.jpg" alt="Invitation 1" />
          <img data-aos="fade-top" data-aos-duration="1000" className="shadow-2xl" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740504936/257A6768_olhw6i.jpg" alt="Invitation 2" />
          <img data-aos="fade-right" data-aos-duration="1000" className="shadow-2xl" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740504830/257A6816_ssfl1y.jpg" alt="Invitation 3" />
        </div>
      </section> */}

      <section className="py-9">
        <div className="border bg-white border-black px-6 w-[90%] mx-auto rounded-xl flex flex-col items-center py-8">
          <h6 className="mb-5">NGÀY TỔ CHỨC TIỆC</h6>
          <h6 className="mb-1">THỨ 7 | 15H30</h6>
          <h3 className="text-[32px] font-extrabold">09 . 03 . 2025</h3>
          <p className="font-dancing font-medium text-[14px] mt-4 mb-7">(Tức Ngày 10 Tháng 02 Năm Ất Tỵ)</p>
          <CountdownTimer date="2025-03-08T07:30:00" />
        </div>
      </section>

      <section className="bg-[#fff] py-8">
        <div className="w-[90%] mx-auto">
          <h2 className="text-center font-medium text-[26px]">Album Hình Cưới</h2>
          <p className="text-center text-[15px] mb-6 mt-2">Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí.</p>
        </div>
        <div className="w-[90%] mx-auto columns-2 gap-3 [&>*:not(:first-child)]:mt-3">
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

      <section className="bg-[#F3F3F1] py-8">
        <div className="mx-auto w-[90%]">
          <h3 className="text-center text-2xl font-extrabold">Tiệc Cưới và Lễ Thành Hôn</h3>
        </div>
        <div className="mx-auto mt-6 grid w-[90%] grid-cols-1 gap-6">
          <div className="relative rounded-sm bg-[#83858A] p-5 text-white">
            <h3 className="text-[17px] font-extrabold text-yellow-400">Tiệc Cưới Nhà Trai</h3>
            <p className="mt-3 flex items-center gap-2 text-[13px]">11h00 Chủ Nhật, ngày 19/01/2025</p>
            <p className="mt-3 flex items-center gap-2 text-[13px]">Xóm Gò, Hải Minh, Hải Hậu, Nam Định</p>
          </div>
          <div className="relative rounded-sm bg-[#83858A] p-5 text-white">
            <h3 className="text-[17px] font-extrabold text-yellow-400">Tiệc Cưới Nhà Trai</h3>
            <p className="mt-3 flex items-center gap-2 text-[13px]">11h00 Chủ Nhật, ngày 19/01/2025</p>
            <p className="mt-3 flex items-center gap-2 text-[13px]">Xóm Gò, Hải Minh, Hải Hậu, Nam Định</p>
          </div>
          <div className="relative rounded-sm bg-[#83858A] p-5 text-white">
            <h3 className="text-[17px] font-extrabold text-yellow-400">Tiệc Cưới Nhà Trai</h3>
            <p className="mt-3 flex items-center gap-2 text-[13px]">11h00 Chủ Nhật, ngày 19/01/2025</p>
            <p className="mt-3 flex items-center gap-2 text-[13px]">Xóm Gò, Hải Minh, Hải Hậu, Nam Định</p>
          </div>
          {/* <div className="relative rounded-sm bg-[#83858A] p-5 text-white">
            <div className="w-[60%]">
              <h3 className="text-[20px] font-bold text-yellow-400">Tiệc Cưới Nhà Trai</h3>
              <p className="mt-2 flex items-center gap-2 text-[13px]">11h00 Chủ Nhật, ngày 19/01/2025</p>
              <p className="mt-2 flex items-center gap-2 text-[13px]">Xóm Gò, Hải Minh, Hải Hậu, Nam Định</p>
            </div>
            <img className="absolute top-[-25px] right-0 z-6 w-[135px] rounded" src="https://w.ladicdn.com/s450x400/5c728619c417ab07e5194baa/22-20240427063945-kdhmq.jpg" alt="" />
          </div> */}
        </div>
      </section>


      <section className="py-6 mt-2 bg-white">
        <h2 className="text-center font-medium text-[26px] mb-6">Tiệc cưới và lễ thành thôn</h2>
        <p>Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!</p>
        <div className="grid grid-cols-1 px-2 gap-3 w-[90%] mx-auto">
          nọid ung
        </div>
      </section>

      <section className="">
        <Guestbook />
      </section>



      <section className="py-6 mt-2">
        <h2 className="text-center font-medium text-[26px] mb-6">Hộp Mừng Cưới</h2>
        <div className="grid grid-cols-2 px-2 gap-3 w-[90%] mx-auto">
          <Image className="w-full rounded-md" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740545270/055ef0877716c9489007_faj05b.jpg" width={250} height={400} alt="Wedding" />
          <Image className="w-full rounded-md" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740545149/aad15f11c3877dd92496_shlso1.jpg" width={250} height={400} alt="Wedding" />
        </div>
      </section>

      <section>
        <Image className=" w-[90%] mx-auto" src="https://res.cloudinary.com/dpufemrnq/image/upload/v1740565969/10_yawgmq.svg" width={500} height={700} alt="Wedding" />
      </section>

    </div>
  );
}
