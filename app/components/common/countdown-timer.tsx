"use client";

import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  initialMinutes: number;
  onComplete?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialMinutes,
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const containerShadowStyle = {
    filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6))",
  };

  useEffect(() => {
    const endTime: number = Date.now() + initialMinutes * 60 * 1000;

    const timer: NodeJS.Timeout = setInterval(() => {
      const now: number = Date.now();
      const difference: number = endTime - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        onComplete?.();
        return;
      }

      const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours: number = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes: number = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds: number = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialMinutes, onComplete]);

  const padNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  const splitNumber = (num: number): number[] => {
    return padNumber(num).split("").map(Number);
  };

  const TimeDigit: React.FC<{ digit: number }> = ({ digit }) => (
    <div className="w-6 h-8 lg:w-8 lg:h-10 xxl:w-8 xxl:h-10 bg-red-950 z-50 rounded flex items-center justify-center">
      <span
        className="text-gradient text-lg lg:text-2xl font-bold font-cinzel"
        style={containerShadowStyle}
      >
        {digit}
      </span>
    </div>
  );

  const TimeUnit: React.FC<{ value: number; label: string }> = ({
    value,
    label,
  }) => (
    <div className="flex flex-col items-center gap-1">
      <div
        className="text-gradient text-center font-semibold text-xs"
        style={containerShadowStyle}
      >
        {label}
      </div>
      <div className="flex gap-1 justify-center">
        {splitNumber(value).map((digit, idx) => (
          <TimeDigit key={`${label}-${idx}`} digit={digit} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-xl">
      <div className="rounded-lg">
        <div className="grid grid-cols-4 gap-2">
          <TimeUnit value={timeLeft.days} label="DAYS" />
          <TimeUnit value={timeLeft.hours} label="HOURS" />
          <TimeUnit value={timeLeft.minutes} label="MINUTES" />
          <TimeUnit value={timeLeft.seconds} label="SECONDS" />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
