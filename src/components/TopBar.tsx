"use client";

import { useEffect, useState } from "react";
import siteContent from "../content/site";

export default function TopBar() {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();
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
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  const ClockIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3">
      <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M6 3V6L8 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );

  const establishedYear = (siteContent as any).establishedYear;
  const established = (siteContent as any).established;
  const establishedText =
    (typeof established === "string" && established.trim()) ||
    (typeof establishedYear === "number" ? `EST. ${establishedYear}` : `EST. ${establishedYear ?? ""}`);

  return (
    <div className="w-full">
      {/* max-w'yi Hero ile aynı yapıyoruz */}
      <div className="mx-auto max-w-[640px] px-6 pt-8 pb-4">
        <div
          className="flex items-center justify-between text-[13px] leading-none"
          style={{ color: "#9CA3AF" }}
        >
          <span className="text-[13px] leading-none">{establishedText}</span>

          <div className="flex items-center gap-1.5">
            <ClockIcon />
            <span>{timeStr}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
