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
      // logoSrc can be added later when logo is available
      parts.push(
        <InlineCompanyPill
          key="company-pill"
          label={companyName}
          logoSrc={undefined} // Placeholder for future logo
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
    <section className="mx-auto max-w-[560px] px-6 pt-32 pb-8">
      <div className="flex flex-col items-start text-left">
        {/* Avatar with online indicator */}
        <div className="relative inline-block">
          <img
            src={avatarSrc}
            alt={`${name} avatar`}
            width={64}
            height={64}
            className="w-16 h-16 rounded-xl object-cover"
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
        <div className="mt-4 inline-flex items-center gap-2">
          <h1 className="text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-50">
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

        {/* Title - left-aligned */}
        <h2 className="mt-1 mb-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 font-normal">
          {title}
        </h2>

        {/* Description */}
        <div className="mb-6">
          <p className="text-[15px] sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {parseBio(bio)}
          </p>
        </div>

        {/* Email Copy Section */}
        <div className="relative">
          <button
            onClick={copyEmail}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200 rounded px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600 focus-visible:ring-offset-2 inline-flex items-center gap-1.5"
            aria-label="Copy email address"
          >
            Press{" "}
            <kbd className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-mono bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded text-gray-700 dark:text-gray-300">
              C
            </kbd>{" "}
            to copy my email
          </button>

          {/* Copied badge - subtle fade in/out */}
          {showToast && (
            <div className="absolute left-0 top-7 animate-fade-in">
              <div className="px-2.5 py-1 bg-gray-900/90 dark:bg-gray-100/90 text-white dark:text-gray-900 text-xs rounded-full shadow-sm backdrop-blur-sm">
                Copied
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}