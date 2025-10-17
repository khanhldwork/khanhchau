import React, { useState, useEffect } from "react";

interface EventCalendarProps {
  primaryDate: string;
  secondaryDate?: string;
  countdownTarget: string;
  eventStart: string;
  eventEnd: string;
}

const EventCalendar: React.FC<EventCalendarProps> = ({
  primaryDate,
  secondaryDate,
  countdownTarget,
  eventStart,
  eventEnd,
}) => {
  const year = 2025;
  const month = 2; // Tháng 3 (chỉ số tháng bắt đầu từ 0)
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weekdays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyCells = Array.from(
    { length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 },
    () => null
  );

  const primaryDay = new Date(primaryDate).getDate();
  const secondaryDay = secondaryDate ? new Date(secondaryDate).getDate() : null;

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetTime = new Date(countdownTarget).getTime();
    const difference = targetTime - now;
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [countdownTarget]);

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);

  const now = new Date();
  const eventStartDate = new Date(eventStart);
  const eventEndDate = new Date(eventEnd);

  let eventStatus = "";
  if (now < eventStartDate) {
    eventStatus = "Sự kiện sắp diễn ra";
  } else if (now >= eventStartDate && now <= eventEndDate) {
    eventStatus = "Sự kiện đang diễn ra";
  } else {
    eventStatus = "Sự kiện đã diễn ra";
  }

  return (
    <section className="text-center py-3 px-5 w-full">
      <div className="border-[5px] border-gray-200 py-5 px-4 rounded">
        <h2 className="text-lg font-dm-serif-display mb-4 font-semibold">
          THÁNG 3 - 2025
        </h2>
        <div className="grid grid-cols-7 gap-2 text-[12px] items-center h-[36px] rounded-sm font-bold bg-primary text-white px-2">
          {weekdays.map((day, index) => (
            <div key={index} className="px-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 gap-y-4 mt-2 px-2 text-[14px] font-semibold border-b mb-5 pb-4">
          {emptyCells.map((_, index) => (
            <div
              key={"empty-" + index}
              className="h-[28px] flex justify-center items-center"
            ></div>
          ))}
          {days.map((day) => (
            <div
              key={day}
              className={`h-[28px] flex justify-center items-center rounded 
                ${day === primaryDay ? "bg-primary text-white rotate" : ""} 
                ${day === secondaryDay ? "bg-gray-200 rotate" : ""}`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="py-4 p-10 text-xl font-bold bg-gray-200 rounded-lg justify-center">
          {eventStatus === "Sự kiện sắp diễn ra" ? (
            <div className="grid grid-cols-4 gap-12">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xl font-dm-serif-display text-primary font-bold">
                  {formatNumber(timeLeft.days)}
                </span>
                <span className="text-sm">Ngày</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-xl font-dm-serif-display text-primary font-bold">
                  {formatNumber(timeLeft.hours)}
                </span>
                <span className="text-sm">Giờ</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-xl font-dm-serif-display text-primary font-bold">
                  {formatNumber(timeLeft.minutes)}
                </span>
                <span className="text-sm">Phút</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-xl font-dm-serif-display text-primary font-bold">
                  {formatNumber(timeLeft.seconds)}
                </span>
                <span className="text-sm">Giây</span>
              </div>
            </div>
          ) : (
            <div className="text-xl text-primary font-bold">
              {eventStatus}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;
 