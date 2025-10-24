"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

// 💍 Kiểu dữ liệu cho từng sự kiện cưới
interface WeddingEvent {
    title: string;
    dayOfWeek: string;
    time: string;
    weddingDate: string; // "dd-mm-yyyy"
    lunarDate?: string;
    locationName: string;
    address: string;
    giftData?: {
        imageUrl?: string;
        name?: string;
        accountNumber?: string;
        bankInfo?: string;
    };
    mapCoords: { lat: number; lng: number };
}

// 💌 Kiểu dữ liệu cho phần thư mời
interface InvitationProps {
    title: string;
    subtitle?: string;
    mainText: string;
    images: string[];
}

// 🎁 Kiểu dữ liệu text động cho hộp quà và map
interface TextSettings {
    giftButton?: string; // nút “Hộp mừng cưới”
    giftTitle?: string; // tiêu đề trong Drawer
    giftDescription?: string; // mô tả cảm ơn
    googleMapButton?: string; // nút “Google Maps”
}

// 📦 Props chính của component
interface Section3Props {
    invitation: InvitationProps;
    events: WeddingEvent[];
    textSettings?: TextSettings; // thêm props text động
}

const Section3: React.FC<Section3Props> = ({ invitation, events, textSettings }) => {
    const {
        giftButton = "Hộp mừng cưới",
        giftTitle = "GỬI MỪNG CƯỚI",
        giftDescription = "Chúng tôi xin gửi lời cảm ơn chân thành đến bạn vì đã chia sẻ niềm vui trong ngày trọng đại của chúng tôi",
        googleMapButton = "Google Maps",
    } = textSettings || {};

    // Mở Google Maps (app hoặc web)
    const handleOpenGoogleMaps = (latitude: number, longitude: number) => {
        const googleMapsWebUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const googleMapsAppUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = googleMapsAppUrl;
        } else {
            window.open(googleMapsWebUrl, "_blank");
        }
    };

    // 🎁 Drawer "Hộp mừng cưới"
    const WeddingGiftDrawer = ({ data }: { data?: WeddingEvent["giftData"] }) => {
        if (!data) return null;

        return (
            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2 mt-2 rounded-xl px-3 text-[13px] font-medium">
                        <Image src="/images/giftbox.png" alt="Gift box" width={20} height={20} />
                        {giftButton}
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="flex justify-center items-center flex-col px-7 py-8 pb-10 text-center">
                        <h3 className="font-dm-serif-display text-[28px] font-bold">{giftTitle}</h3>
                        <p className="text-[15px] mb-3 mt-2 text-sm leading-6">{giftDescription}</p>
                        {data.imageUrl && (
                            <Image
                                className="w-[76%] md:w-[300px] mt-2"
                                src={data.imageUrl}
                                width={100}
                                height={100}
                                alt="Wedding gift"
                            />
                        )}
                        <h2 className="mt-4 font-bold font-dm-serif-display">{data.name || "Không có tên"}</h2>
                        <p className="text-sm mt-3">{data.accountNumber || "Chưa có số tài khoản"}</p>
                        <p className="text-sm mt-2">{data.bankInfo || "Chưa có thông tin ngân hàng"}</p>
                    </div>
                </DrawerContent>
            </Drawer>
        );
    };

    return (
        <section className="text-center my-5 py-5">
            {/* 🎀 Thư mời */}
            <div className="w-[88%] mx-auto ">
                <div className="w-[150px] h-[2px] bg-black rounded mx-auto mb-4"></div>
                {invitation.title && (
                    <h2 className="font-bold text-[28px] text-black font-great-vibes">
                        {invitation.title}
                    </h2>
                )}
                {invitation.subtitle && (
                    <p className="mt-1 text-sm font-philosopher-noshadow">{invitation.subtitle}</p>
                )}
                {invitation.mainText && (
                    <p className="text-[16px] mb-5 font-philosopher-noshadow mt-3">{invitation.mainText}</p>
                )}

                {invitation.images?.length > 0 && (
                    <div className="grid grid-cols-[auto_36%_auto] items-center gap-2 px-1 rounded">
                        {invitation.images.map((url, idx) => (
                            <Image
                                key={idx}
                                data-aos={idx === 0 ? "fade-right" : idx === 1 ? "fade-down" : "fade-left"}
                                data-aos-duration="1000"
                                className="shadow-2xl rounded-md"
                                src={url}
                                width={250}
                                height={300}
                                alt={`Invitation ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {events?.map((event, idx) => (
                <div
                    key={idx}
                    className="w-[86%] mx-auto flex flex-col gap-1 justify-center items-center mt-6 py-6 px-5 bg-[#fff2f2] rounded-2xl"
                >
                    <h3 className="font-semibold text-[19px] font-philosopher-noshadow">{event.title}</h3>
                    <h4 className="font-medium font-philosopher-noshadow mt-2 mb-1 text-md">
                        {event.dayOfWeek} | {event.time}
                    </h4>
                    <h3 className="font-rajdhani text-primary zoom-text font-bold text-xl my-[3px]">
                        {event.weddingDate.split("-").reverse().join(" . ")}
                    </h3>
                    {event.lunarDate && <p className="text-[13.5px] mt-2">{event.lunarDate}</p>}
                    <h3 className="text-[18px] font-semibold mt-3 font-philosopher-noshadow">{event.locationName}</h3>
                    <p className="text-[14px] mb-2.5 leading-6 mt-2">{event.address}</p>

                    <WeddingGiftDrawer data={event.giftData} />

                    <Button
                        variant={"outline"}
                        className="mt-1 text-[13px] px-3 py-4 flex items-center gap-1 rounded-xl font-medium "
                        onClick={() => handleOpenGoogleMaps(event.mapCoords.lat, event.mapCoords.lng)}
                    >
                        <Image src="/images/map-icon.png" alt="Google Maps" width={24} height={24} />
                        {googleMapButton}
                    </Button>
                </div>
            ))}
        </section>
    );
};

export default Section3;
