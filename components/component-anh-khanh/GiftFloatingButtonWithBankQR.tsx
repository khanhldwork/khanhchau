"use client";

import { useState, useEffect } from "react";
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
    open: boolean;
    setOpen: (value: boolean) => void;
    groomInfo: BankInfo;
    brideInfo: BankInfo;
    title?: string;
    description?: string;
    initialTab?: "groom" | "bride"; // 💡 tab mặc định khi mở modal
}

const GiftFloatingButtonWithBankQR: React.FC<GiftFloatingButtonWithBankQRProps> = ({
    open,
    setOpen,
    groomInfo,
    brideInfo,
    title = "💝 Mừng cưới / Gửi quà",
    description = "Quét mã QR hoặc chuyển khoản trực tiếp",
    initialTab = "groom", // mặc định là tab chú rể
}) => {
    // 🎯 Quản lý tab đang chọn
    const [tab, setTab] = useState<"groom" | "bride">(initialTab);

    // Khi modal mở lại => reset về tab được truyền
    useEffect(() => {
        if (open) setTab(initialTab);
    }, [open, initialTab]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[450px] max-w-[90%] text-center p-6 rounded-2xl font-philosopher-noshadow">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
                    <DialogDescription className="text-sm text-gray-500">
                        {description}
                    </DialogDescription>
                </DialogHeader>

                <Tabs value={tab} onValueChange={(v) => setTab(v as "groom" | "bride")} className="w-full mt-3">
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
    );
};

export default GiftFloatingButtonWithBankQR;