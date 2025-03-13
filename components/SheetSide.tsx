"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"

export function SheetSide() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="w-[38px] h-[38px]">
                    <AlignJustify />
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <p>This is a simple sheet with text content.</p>
            </SheetContent>
        </Sheet>
    )
}
