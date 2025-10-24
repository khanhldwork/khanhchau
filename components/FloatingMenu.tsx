"use client";

import { useState } from "react";
import { Menu, Gift, HeartHandshake } from "lucide-react";

export default function FloatingMenu() {
    const [isOpen, setIsOpen] = useState(true);

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
        <div className="fixed bottom-6 right-4 flex flex-col items-center gap-3 z-50">
            {/* Nút Gửi Mừng Cưới */}
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
            >
                <button
                    onClick={() => alert("🎁 Gửi mừng cưới")}
                    className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                    <Gift size={22} />
                </button>
            </div>

            {/* Nút Chúc Mừng */}
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
            >
                <button
                    onClick={() => alert("💐 Gửi lời chúc mừng!")}
                    className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                    <HeartHandshake size={22} />
                </button>
            </div>

            {/* Nút chính mở/đóng menu */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:rotate-90 transition-transform"
            >
                <Menu size={22} />
            </button>
        </div>
    );
}
