"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { label: "Email", value: "aliyuks@outlook.com", url: "mailto:aliyuks@outlook.com" },
    { label: "X.com", value: "@AliYukse1", url: "https://x.com/AliYukse1" },
    /* LinkedIn URL'sinin başına https:// ekleyerek dış bağlantı sorununu çözdük */
    { label: "LinkedIn", value: "/in/aliyuksl", url: "https://linkedin.com/in/aliyuksl" },
  ];

  return (
    <footer className="mx-auto max-w-[640px] px-6 pt-0 pb-12">
      <div className="flex flex-col pt-2">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-3 hover:bg-gray-50/50 dark:hover:bg-[#0A0A0A] -mx-4 px-4 rounded-xl transition-all"
          >
            <span className="text-[14px] text-gray-400 dark:text-gray-500 font-medium tracking-tight">
              {link.label}
            </span>

            <div className="flex items-center gap-1.5 text-[14px] text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
              <span>{link.value}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <div className="text-[11px] text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] font-medium opacity-90">
          © 2026 Core by Emre Miraç Çakır
        </div>
        
        <div className="flex items-center justify-between w-full text-[10px] text-gray-400 dark:text-gray-700 uppercase tracking-[0.15em] font-semibold">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>İstanbul, TR</span>
          </div>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}