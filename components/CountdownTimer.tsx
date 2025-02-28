import { useState, useEffect } from "react";

interface CountdownTimerProps {
  date: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ date }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(date).getTime() - new Date().getTime();
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
  }, [date]);

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);

  return (
    <div className="grid grid-cols-4 gap-12 py-4 p-10 text-xl font-bold bg-[#ffe2f0] rounded-lg justify-center">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-Lobster text-primary font-extrabold">{formatNumber(timeLeft.days)}</span>
        <span className="text-sm">Ngày</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-Lobster text-primary font-extrabold">{formatNumber(timeLeft.hours)}</span>
        <span className="text-sm">Giờ</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-Lobster text-primary font-extrabold">{formatNumber(timeLeft.minutes)}</span>
        <span className="text-sm">Phút</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-Lobster text-primary font-extrabold">{formatNumber(timeLeft.seconds)}</span>
        <span className="text-sm">Giây</span>
      </div>
    </div>
  );
};

export default CountdownTimer;