"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import siteContent from "../content/site";
import InlineCompanyPill from "./InlineCompanyPill";

export default function Hero() {
  const { avatarSrc, name, title, bio, email, showCompanyLogo, showVerificationBadge } = siteContent;
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setTimeout(() => setCopied(false), 300);
    }, 1500);
  }, [email]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Handle both 'c' and 'C' keys
      if ((e.key === "c" || e.key === "C") && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement;
        // Don't trigger copy while typing in input/textarea/contenteditable
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

  // Parse bio text and handle "Harvard Business Review" with InlineCompanyPill
  const parseBio = (text: string) => {
    const parts: (string | React.ReactElement)[] = [];
    const companyName = "Harvard Business Review";
    
    // Check if company name exists in text
    if (text.includes(companyName)) {
      const index = text.indexOf(companyName);
      
      // Add text before company name
      if (index > 0) {
        parts.push(text.slice(0, index));
      }
      
      // Add company name as InlineCompanyPill
      parts.push(
        <InlineCompanyPill
          key="company-pill"
          label={companyName}
          logoSrc="/brands/hbr.png"
        />
      );
      
      // Add remaining text after company name
      if (index + companyName.length < text.length) {
        parts.push(text.slice(index + companyName.length));
      }
    } else {
      // No special handling needed, just return the text
      parts.push(text);
    }

    return parts;
  };

  return (
    <section className="mx-auto max-w-[560px] px-6 pt-2 pb-0">
      <div className="flex flex-col items-start text-left">
        {/* Avatar with online indicator - left-aligned */}
        <div className="relative inline-block mb-3">
          <img
            src={avatarSrc}
            alt={`${name} avatar`}
            width={56}
            height={56}
            className="w-14 h-14 rounded-[14px] object-cover"
          />
          {/* Green status dot - two layers: glow + dot with ring */}
          <div className="absolute -bottom-1 -right-1">
            {/* Outer layer: soft green glow */}
            <span className="absolute inset-0 rounded-full bg-green-500 blur-[6px] opacity-35 scale-150" />
            {/* Inner layer: dot with white ring */}
            <span className="relative block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
          </div>
        </div>

        {/* Name with verification badge - left-aligned */}
        <div className="mb-1.5 inline-flex items-center gap-2">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {name}
          </h1>
          {showVerificationBadge && (
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 shadow-sm">
              <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          )}
        </div>

        {/* Title - left-aligned, smaller, lighter */}
        <h2 className="mb-4 text-sm text-gray-500 font-normal">
          {title}
        </h2>

        {/* Description - left-aligned, proper line-height and max-width */}
        <div className="mb-3 max-w-full">
          <p className="text-[15px] leading-[1.6] text-gray-700">
            {parseBio(bio)}
          </p>
        </div>

        {/* Email Copy Section - left-aligned */}
        <div className="relative">
          <button
            onClick={copyEmail}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 rounded px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 inline-flex items-center gap-1.5"
            aria-label="Copy email address"
          >
            Press{" "}
            <kbd className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-mono bg-gray-100 border border-gray-300 rounded text-gray-700">
              C
            </kbd>{" "}
            to copy my email
          </button>

          {/* Copied badge - subtle fade in/out */}
          {showToast && (
            <div className="absolute left-0 top-7 animate-fade-in">
              <div className="px-2.5 py-1 bg-gray-900/90 text-white text-xs rounded-full shadow-sm backdrop-blur-sm">
                Copied
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}