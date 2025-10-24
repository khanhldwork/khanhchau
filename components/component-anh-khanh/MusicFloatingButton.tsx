"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Howl } from "howler";

interface MusicFloatingButtonProps {
    url?: string; // Cho phép truyền link nhạc động
}

const MusicFloatingButton: React.FC<MusicFloatingButtonProps> = ({
    url = "/audio/baihat.mp3",
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const soundRef = useRef<Howl | null>(null);

    useEffect(() => {
        // Khởi tạo Howl
        soundRef.current = new Howl({
            src: [url],
            loop: true,
            html5: true, // đảm bảo hoạt động ổn định trên iOS/Safari
        });

        const startMusic = () => {
            if (!hasStarted && soundRef.current) {
                try {
                    soundRef.current.play();
                    setIsPlaying(true);
                    setHasStarted(true);
                } catch (err) {
                    console.warn("Autoplay bị chặn:", err);
                }
                // Gỡ event sau khi đã kích hoạt
                window.removeEventListener("scroll", startMusic);
                window.removeEventListener("click", startMusic);
                window.removeEventListener("touchstart", startMusic);
            }
        };

        // Gắn event cho mọi hành động người dùng đầu tiên
        window.addEventListener("scroll", startMusic);
        window.addEventListener("click", startMusic);
        window.addEventListener("touchstart", startMusic);

        return () => {
            window.removeEventListener("scroll", startMusic);
            window.removeEventListener("click", startMusic);
            window.removeEventListener("touchstart", startMusic);
            soundRef.current?.stop();
        };
    }, [hasStarted, url]);

    const toggleMusic = () => {
        if (!soundRef.current) return;

        if (isPlaying) {
            soundRef.current.pause();
            setIsPlaying(false);
        } else {
            soundRef.current.play();
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
                    src={
                        isPlaying
                            ? "https://mehappy.vn/icons/pause.jpg"
                            : "https://mehappy.vn/icons/play.png"
                    }
                    alt={isPlaying ? "Pause" : "Play"}
                    width={28}
                    height={28}
                    className={`w-7 h-7 transition-all duration-300 ${isPlaying ? "animate-spin-slow" : ""
                        }`}
                />
            </button>

            {/* Animation quay chậm */}
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
