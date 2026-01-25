"use client";

import { useEffect, useState } from "react";
import siteContent from "../content/site";

export default function TopBar() {
  const { establishedYear } = siteContent;
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    function updateTime() {
      // Get current time in GMT+3 (Türkiye saati / Europe/Istanbul)
      const now = new Date();
      
      // Format as HH:MM:SS GMT+3 using Intl.DateTimeFormat
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Istanbul",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      
      const timeString = formatter.format(now);
      setTimeStr(`${timeString} GMT+3`);
    }
    
    updateTime();
    // Update every second
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  // Clock icon SVG
  const ClockIcon = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="w-3.5 h-3.5"
      style={{ color: "#9CA3AF" }}
    >
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M7 3.5V7L9.5 9.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div className="w-full pt-12 pb-0 text-xs" style={{ color: "#9CA3AF" }}>
      <div className="w-full max-w-[560px] mx-auto px-6 flex justify-between items-center">
        <span className="text-xs" style={{ color: "#9CA3AF" }}>
          EST. {establishedYear}
        </span>
        <div className="flex items-center gap-1.5">
          <ClockIcon />
          <span className="text-xs" style={{ color: "#9CA3AF" }}>
            {timeStr}
          </span>
        </div>
      </div>
    </div>
  );
}
