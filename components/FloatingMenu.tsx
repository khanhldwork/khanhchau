import { useState } from "react";
import { Menu, Plus, Settings } from "lucide-react";

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
        <div className="fixed bottom-6 right-4 flex flex-col items-center gap-2 z-50">
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <button className="w-11 h-11 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">
                    <Plus size={20} />
                </button>
            </div>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <button className="w-11 h-11 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg">
                    <Settings size={20} />
                </button>
            </div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center shadow-lg"
            >
                <Menu size={20} />
            </button>
        </div>
    );
}
