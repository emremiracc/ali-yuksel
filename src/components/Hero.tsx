"use client";

import React, { useCallback, useEffect, useState } from "react";
import siteContent from "../content/site";
import InlineCompanyPill from "./InlineCompanyPill";

export default function Hero() {
  const { avatarSrc, name, title, bio, email, showVerificationBadge } = siteContent as any;
  const [showToast, setShowToast] = useState(false);

  const copyEmail = useCallback(() => {
    if (!email) return;
    navigator.clipboard.writeText(email);
    setShowToast(true);
    const t = setTimeout(() => setShowToast(false), 1500);
    return () => clearTimeout(t);
  }, [email]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "c" || e.key === "C") && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement as HTMLElement | null;
        const isEditable =
          activeElement?.tagName === "INPUT" ||
          activeElement?.tagName === "TEXTAREA" ||
          activeElement?.getAttribute("contenteditable") === "true";

        if (!isEditable) {
          e.preventDefault();
          copyEmail();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [copyEmail]);

  const parseBio = (text: string) => {
    const parts: (string | React.ReactElement)[] = [];
    const companyName = "Harvard Business Review";

    if (text.includes(companyName)) {
      const index = text.indexOf(companyName);
      if (index > 0) parts.push(text.slice(0, index));

      parts.push(
        <InlineCompanyPill 
          key="company-pill" 
          label={companyName} 
          logoSrc="/images/hbr-logo.png" // Sadece burayı güncelledik patron
        />
      );

      if (index + companyName.length < text.length) {
        parts.push(text.slice(index + companyName.length));
      }
    } else {
      parts.push(text);
    }

    return parts;
  };

  return (
    <section className="mx-auto max-w-[640px] px-6 pt-4 pb-0">
      <div className="flex flex-col items-start text-left">
        {/* Avatar with online indicator */}
        <div className="relative inline-block mb-3">
          <img
            src={avatarSrc}
            alt={`${name} avatar`}
            width={56}
            height={56}
            className="w-14 h-14 rounded-[14px] object-cover ring-1 ring-black/10 dark:ring-white/10"
          />
          <span className="absolute -bottom-0.5 -right-0.5 block h-3 w-3 rounded-full bg-[#22c55e] ring-2 ring-white dark:ring-[#0a0a0a]" />
        </div>

        {/* Name with verification badge */}
        <div className="mb-2 inline-flex items-center gap-2">
          <h1 className="text-[24px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#171717] dark:text-[#ededed]">
            {name}
          </h1>

          {!!showVerificationBadge && (
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#3b82f6]">
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          )}
        </div>

        {/* Subtitle */}
        <h2 className="mb-5 text-[15px] leading-tight text-neutral-500 dark:text-neutral-400 font-normal">
          {title}
        </h2>

        {/* Description with inline pill */}
        <div className="mb-8">
          <p className="text-[16.5px] leading-[26px] text-[#737373] dark:text-[#a3a3a3]">
            {parseBio(bio)}
          </p>
        </div>

        {/* Email Copy Section */}
        <div className="relative mb-0">
          <button
            onClick={() => copyEmail()}
            className="text-[14px] leading-[1.4] text-[#737373] dark:text-[#a3a3a3] hover:text-[#171717] dark:hover:text-[#ededed] transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none"
            aria-label="Copy email address"
          >
            Press{" "}
            <kbd className="inline-flex items-center justify-center h-5 px-1.5 text-[11px] font-medium bg-[#f5f5f5] dark:bg-[#262626] border border-[#e5e5e5] dark:border-[#404040] rounded-[4px] text-[#171717] dark:text-[#ededed]">
              C
            </kbd>{" "}
            to copy my email
          </button>

          {showToast && (
            <div className="absolute left-0 top-7 animate-fade-in">
              <div className="px-2.5 py-1 bg-[#171717] dark:bg-[#ededed] text-white dark:text-[#171717] text-[12px] rounded-full">
                Copied
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}