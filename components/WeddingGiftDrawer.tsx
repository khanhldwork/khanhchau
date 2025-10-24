"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image";

interface WeddingGiftDrawerProps {
  data?: {
    imageUrl: string;
    name: string;
    accountNumber: string;
    bankInfo: string;
  };
}

export function WeddingGiftDrawer({ data }: WeddingGiftDrawerProps) {
  if (!data) {
    return null;
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Image src="/images/giftbox.png" alt="Google Maps" width={20} height={20} />
          Hộp mừng cưới
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex justify-center items-center flex-col px-7 py-8 pb-10">
          <h3 className="font-dm-serif-display text-[28px] font-bold">GỬI MỪNG CƯỚI</h3>
          <p className="text-[15px] text-center mb-3 mt-2 text-sm leading-6">
            Chúng tôi xin gửi lời cảm ơn chân thành đến bạn vì đã chia sẻ niềm vui trong ngày trọng đại của chúng tôi
          </p>
          {data.imageUrl && (
            <Image className="w-[76%] md:w-[300px]" src={data.imageUrl} width={100} height={100} alt="Invitation 3" />
          )}
          <h2 className="mt-4 font-bold font-dm-serif-display">{data.name || "Không có tên"}</h2>
          <p className="text-sm mt-3 text-center">
            {data.accountNumber || "Chưa có số tài khoản"}
          </p>
          <p className="text-sm mt-2 text-center">
            {data.bankInfo || "Chưa có thông tin ngân hàng"}
          </p>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
