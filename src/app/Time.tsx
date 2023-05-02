"use client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useEffect, useState } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);

export const Time = () => {
  const [time, setTime] = useState("");
  const [tz, setTz] = useState("");

  useEffect(() => {
    setTime(dayjs().format("HH:mm:ss"));
    setTz(dayjs.tz.guess());
    const interval = setInterval(() => {
      setTime(dayjs().format("HH:mm:ss"));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h2 className="text-center text-lg font-semibold lg:text-xl">
      La hora actual es{" "}
      <span className="inline-block w-24 text-center font-bold text-pink-400">{time}</span> en{" "}
      <span className="text-pink-400">({tz})</span>
    </h2>
  );
};
