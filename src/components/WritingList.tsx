"use client";

import Link from "next/link";

export default function WritingList() {
  // Writing data matching Jacob's format
  const writings = [
    {
      date: "21/02/25",
      title: "How to think like both a designer & engineer",
      readingTime: "2 m",
      url: "#",
    },
    {
      date: "16/02/25",
      title: "UI Performance",
      readingTime: "4 m",
      url: "#",
    },
    {
      date: "12/02/25",
      title: "How AI is changing my workflow",
      readingTime: "2 m",
      url: "#",
    },
    {
      date: "11/01/25",
      title: "Design tokens 101",
      readingTime: "2 m",
      url: "#",
    },
    {
      date: "01/01/25",
      title: "Hello world",
      readingTime: "1 m",
      url: "#",
    },
  ];

  // Clock icon SVG
  const ClockIcon = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="text-gray-500 dark:text-gray-400"
    >
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M7 3.5V7L9.5 9.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );

  return (
    <section className="py-16 px-4 sm:py-24 border-b border-gray-200 dark:border-gray-800">
      <div className="w-full max-w-[832px] mx-auto px-6 flex flex-col items-start">
        {/* WRITING Label - same style and alignment as STACK and VENTURES */}
        <h2 
          className="text-xs uppercase font-medium mb-5 text-left text-gray-400 dark:text-gray-500"
          style={{
            letterSpacing: '0.08em',
            fontSize: '12px',
          }}
        >
          WRITING
        </h2>

        {/* Writing list - 3-column grid layout */}
        <div className="w-full space-y-3">
          {writings.map((writing, index) => (
            <Link
              key={index}
              href={writing.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid w-full py-2 group transition-opacity duration-200 hover:opacity-70"
              style={{ gridTemplateColumns: "120px 1fr 80px", gap: "16px" }}
            >
              {/* LEFT: Date */}
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {writing.date}
              </span>

              {/* CENTER: Title */}
              <h3 className="text-base font-medium text-gray-900 dark:text-gray-50">
                {writing.title}
              </h3>

              {/* RIGHT: Reading time with clock icon */}
              <div className="flex items-center justify-end gap-1.5">
                <ClockIcon />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {writing.readingTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
