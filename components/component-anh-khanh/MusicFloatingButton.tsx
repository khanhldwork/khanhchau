"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const MusicFloatingButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Khởi tạo audio
        audioRef.current = new Audio("/audio/baihat.mp3"); // 👉 thay link nhạc tại đây
        audioRef.current.loop = true;

        const handleScroll = () => {
            if (!hasStarted && audioRef.current) {
                audioRef.current.play().catch(() => { });
                setIsPlaying(true);
                setHasStarted(true);
                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            audioRef.current?.pause();
        };
    }, [hasStarted]);

    const toggleMusic = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch(() => { });
            setIsPlaying(true);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={toggleMusic}
                className="fixed bottom-5 left-5 z-50 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            >
                <Image
                    src={isPlaying ? "https://mehappy.vn/icons/play.png" : "https://mehappy.vn/icons/pause.jpg"}
                    alt={isPlaying ? "Music On" : "Music Off"}
                    width={28}
                    height={28}
                    className={`w-7 h-7 transition-all duration-300 ${isPlaying ? "animate-spin-slow" : ""
                        }`}
                />
            </button>

            {/* Thêm animation quay chậm */}
            <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
        </>
    );
};

export default MusicFloatingButton;
