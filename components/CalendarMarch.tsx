import React from "react";

const CalendarMarch = () => {
    const year = 2025;
    const month = 2;
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const weekdays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptyCells = Array.from({ length: (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1) }, () => null);

    return (
        <section className="text-center py-5 w-full">
            <h2 className="text-[20px] font-playwrite font-bold">SAVE THE DATE</h2>
            <h2 className="text-lg font-playwrite mb-2 font-semibold">THÁNG 3 - 2025</h2>
            <div className="grid grid-cols-7 gap-2 text-[13px] items-center h-[30px] rounded-sm font-bold bg-blue-500 text-white px-2">
                {weekdays.map((day, index) => (
                    <div key={index} className="px-2">{day}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-2 gap-y-3 mt-1.5 px-2 text-[14px] font-semibold">
                {emptyCells.map((_, index) => (
                    <div key={"empty-" + index} className="h-[35px] flex justify-center items-center"></div>
                ))}
                {days.map((day) => (
                    <div
                        key={day}
                        className={`h-[35px] flex justify-center items-center rounded ${day === 9 ? "bg-red-500 text-white" : ""}`}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CalendarMarch;
