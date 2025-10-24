"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BankInfo {
    qrUrl: string;
    bankName: string;
    accountName: string;
    accountNumber: string;
}

interface GiftFloatingButtonWithBankQRProps {
    groomInfo: BankInfo;
    brideInfo: BankInfo;
    title?: string;
    description?: string;
    giftIcon?: string;
    position?: "left" | "right" | "center";
    size?: "small" | "medium" | "large";
}

const GiftFloatingButtonWithBankQR: React.FC<GiftFloatingButtonWithBankQRProps> = ({
    groomInfo,
    brideInfo,
    title = "💝 Mừng cưới / Gửi quà",
    description = "Quét mã QR hoặc chuyển khoản trực tiếp",
    giftIcon = "/images/giftbox.png",
    position = "right",
    size = "medium",
}) => {
    const [open, setOpen] = useState(false);

    // Xử lý vị trí nút
    const positionClasses = {
        left: "left-5",
        right: "right-5",
        center: "left-1/2 -translate-x-1/2",
    }[position];

    // Xử lý kích thước nút
    const sizeClasses = {
        small: "w-[40px] h-[40px]",
        medium: "w-[50px] h-[50px]",
        large: "w-[60px] h-[60px]",
    }[size];

    const iconSize = size === "small" ? 20 : size === "large" ? 32 : 26;

    return (
        <>
            {/* 🎁 Floating Button */}
            <button
                onClick={() => setOpen(true)}
                className={`fixed bottom-5 ${positionClasses} z-50 ${sizeClasses} bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105`}
            >
                <Image
                    src={giftIcon}
                    alt="Gift Icon"
                    width={iconSize}
                    height={iconSize}
                    className="object-contain"
                />
            </button>

            {/* 💳 Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[450px] max-w-[90%] text-center p-6 rounded-2xl font-philosopher-noshadow">
                    <DialogHeader>
                        <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
                        <DialogDescription className="text-sm text-gray-500">
                            {description}
                        </DialogDescription>
                    </DialogHeader>

                    <Tabs defaultValue="groom" className="w-full mt-3">
                        <TabsList className="flex justify-center space-x-2 bg-gray-100 rounded-full p-1 mb-4">
                            <TabsTrigger
                                value="groom"
                                className="px-4 py-1.5 text-sm rounded-full data-[state=active]:bg-white data-[state=active]:shadow"
                            >
                                🤵 Chú rể
                            </TabsTrigger>
                            <TabsTrigger
                                value="bride"
                                className="px-4 py-1.5 text-sm rounded-full data-[state=active]:bg-white data-[state=active]:shadow"
                            >
                                👰 Cô dâu
                            </TabsTrigger>
                        </TabsList>

                        {/* === Chú rể === */}
                        <TabsContent value="groom">
                            <div className="flex flex-col items-center gap-4 mt-2">
                                <div className="relative w-[300px] h-[300px]">
                                    <Image
                                        src={groomInfo.qrUrl}
                                        alt="QR Groom"
                                        fill
                                        className="object-contain rounded-xl border border-gray-200 shadow-sm"
                                    />
                                </div>
                                <div className="text-sm text-gray-700 mt-3 space-y-1">
                                    <p><strong>Ngân hàng:</strong> {groomInfo.bankName}</p>
                                    <p><strong>Tên:</strong> {groomInfo.accountName}</p>
                                    <p><strong>Số tài khoản:</strong> {groomInfo.accountNumber}</p>
                                </div>
                            </div>
                        </TabsContent>

                        {/* === Cô dâu === */}
                        <TabsContent value="bride">
                            <div className="flex flex-col items-center gap-4 mt-2">
                                <div className="relative w-[300px] h-[300px]">
                                    <Image
                                        src={brideInfo.qrUrl}
                                        alt="QR Bride"
                                        fill
                                        className="object-contain rounded-xl border border-gray-200 shadow-sm"
                                    />
                                </div>
                                <div className="text-sm text-gray-700 mt-3 space-y-1">
                                    <p><strong>Ngân hàng:</strong> {brideInfo.bankName}</p>
                                    <p><strong>Tên:</strong> {brideInfo.accountName}</p>
                                    <p><strong>Số tài khoản:</strong> {brideInfo.accountNumber}</p>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>

                    <DialogFooter className="mt-5">
                        <DialogClose asChild>
                            <Button variant="outline" onClick={() => setOpen(false)}>
                                Đóng
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default GiftFloatingButtonWithBankQR;