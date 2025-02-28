"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface DrawerDemoProps {
  imageUrl: string;
}

export function DrawerDemo({ imageUrl }: DrawerDemoProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Gửi mừng cưới</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex justify-center items-center flex-col px-7 py-8">
          <h3 className="font-Lobster text-[26px]">GỬI MỪNG CƯỚI</h3>
          <p className="text-[16px] text-gray text-center mb-3 mt-2 text-sm leading-6">
            Chúng tôi xin gửi lời cảm ơn chân thành đến bạn vì đã chia sẻ niềm vui trong ngày trọng đại của chúng tôi
          </p>
          <img src={imageUrl} alt="Hình ảnh" className="w-[76%]" />
          <h2 className="mt-4 font-bold">NGUYEN HAI YEN</h2>
          <p className="text-sm mt-2 font-semibold">100870601899</p>
          <p className="text-sm mt-2 font-semibold">VietinBank CN DONG DA - PGD CAT LINK</p>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
