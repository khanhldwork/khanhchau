import React from "react";

const CalendarMarch = () => {
  const daysInMarch = 31;
  const days = Array.from({ length: daysInMarch }, (_, i) => i + 1);

  return (
    <div className="w-80 p-4 border rounded-lg shadow-md text-center">
      <h2 className="text-lg font-bold mb-2">Tháng 03 năm 2025</h2>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <div
            key={day}
            className={`p-2 border rounded ${day === 9 ? "bg-red-500 text-white" : "bg-gray-100"}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarMarch;
