"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"


export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Gửi mừng cưới</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="h-[500px]">
           Mã qr
        </div>
      </DrawerContent>
    </Drawer>
  )
}
