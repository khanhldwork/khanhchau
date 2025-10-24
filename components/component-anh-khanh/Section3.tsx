'use client';

import * as React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WeddingGiftDrawer } from "@/components/WeddingGiftDrawer";

interface WeddingEvent {
    title: string;
    dayOfWeek: string;
    time: string;
    weddingDate: string; // "dd-mm-yyyy"
    lunarDate?: string;
    locationName: string;
    address: string;
    giftData: {
        imageUrl: string;
        name: string;
        accountNumber: string;
        bankInfo: string;
    };
    mapCoords: { lat: number; lng: number };
}

interface InvitationProps {
    title: string;
    subtitle?: string;
    mainText: string;
    images: string[];
}

interface Section3Props {
    invitation: InvitationProps;
    events: WeddingEvent[];
}

const Section3: React.FC<Section3Props> = ({ invitation, events }) => {
    const handleOpenGoogleMaps = (latitude: number, longitude: number) => {
        const googleMapsWebUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const googleMapsAppUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = googleMapsAppUrl;
        } else {
            window.open(googleMapsWebUrl, "_blank");
        }
    };

    return (
        <section className="text-center px-4 my-5 py-5">
            {/* Thư mời */}
            <div>
                <div className="w-[150px] h-[2px] bg-black rounded mx-auto mb-4"></div>
                <h2 className="font-bold text-[28px] text-black font-great-vibes">{invitation.title}</h2>
                {invitation.subtitle && <p className="mt-1 text-base">{invitation.subtitle}</p>}
                <p className="text-[16px] mb-5 font-philosopher-noshadow mt-3">{invitation.mainText}</p>

                <div className="grid grid-cols-[auto_36%_auto] items-center gap-2 px-2 rounded">
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
            </div>

            {/* Events */}
            {events.map((event, idx) => (
                <div
                    key={idx}
                    className="mx-4 flex flex-col gap-1 justify-center items-center mt-6 rounded-2xl py-6 px-5 bg-white shadow-xl border"
                >
                    <h3 className="font-medium text-[18px] font-oswald">{event.title}</h3>
                    <h4 className="font-bold font-dm-serif-display mt-2 text-lg">
                        {event.dayOfWeek} | {event.time}
                    </h4>
                    <h3 className="font-dm-serif-display text-primary zoom-text font-bold text-2xl my-[3px]">
                        {event.weddingDate.split('-').reverse().join(' . ')}
                    </h3>
                    {event.lunarDate && <p className="text-[13px] mt-2">{event.lunarDate}</p>}
                    <h3 className="text-[20px] font-semibold mt-3">{event.locationName}</h3>
                    <p className="text-[15px] mb-2.5 leading-6 mt-2">{event.address}</p>
                    <WeddingGiftDrawer data={event.giftData} />
                    <Button
                        className="mt-1 text-sm shake"
                        onClick={() => handleOpenGoogleMaps(event.mapCoords.lat, event.mapCoords.lng)}
                    >
                        Xem chỉ đường
                    </Button>
                </div>
            ))}
        </section>
    );
};

export default Section3;
