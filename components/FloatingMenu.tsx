import { useState } from "react";
import { Menu, Plus, Settings, Info } from "lucide-react";

export default function FloatingMenu() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="fixed bottom-6 right-4 flex flex-col items-center gap-2">
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <button className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg">
                    <Info size={20} />
                </button>
            </div>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <button className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">
                    <Plus size={20} />
                </button>
            </div>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <button className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg">
                    <Settings size={20} />
                </button>
            </div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg"
            >
                <Menu size={20} />
            </button>
        </div>
    );
}
