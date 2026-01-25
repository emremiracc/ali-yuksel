"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import siteContent from "../content/site";
import "../styles/work-collage.css";

export default function WorkCollage() {
  const { works } = siteContent;
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  // Handle ESC key to close preview
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setPreviewIndex(null);
      }
    }
    if (previewIndex !== null) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [previewIndex]);

  const handleCardClick = (index: number) => {
    setPreviewIndex(index);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setPreviewIndex(null);
    }
  };

  const previewWork = previewIndex !== null ? works[previewIndex] : null;

  return (
    <>
      <div className="relative w-full overflow-visible">
        <div className="relative mx-auto w-full max-w-[1100px] h-[clamp(340px,40vw,520px)] overflow-visible work-collage-mobile-adj">
          {/* 1 */}
          <button
            type="button"
            onClick={() => handleCardClick(0)}
            className="absolute z-[1] cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[28px] transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-2"
            style={{ left: "6%", top: "32%", transform: "rotate(-10deg) scale(1)" }}
            aria-label={`Preview ${works[0]?.title}`}
          >
            <Image
              src={works[0]?.imageSrc || "/works/work-1.png"}
              alt={works[0]?.title || "work-1"}
              width={520}
              height={420}
              className="rounded-[28px] shadow-[0_18px_40px_rgba(0,0,0,.12)] pointer-events-none"
              priority
            />
          </button>

          {/* 2 (en önde) */}
          <button
            type="button"
            onClick={() => handleCardClick(1)}
            className="absolute z-[3] cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[28px] transition-transform duration-300 hover:scale-[1.07] hover:-translate-y-2"
            style={{ left: "26%", top: "38%", transform: "rotate(0deg) scale(1.05)" }}
            aria-label={`Preview ${works[1]?.title}`}
          >
            <Image
              src={works[1]?.imageSrc || "/works/work-2.png"}
              alt={works[1]?.title || "work-2"}
              width={520}
              height={420}
              className="rounded-[28px] shadow-[0_18px_40px_rgba(0,0,0,.12)] pointer-events-none"
              priority
            />
          </button>

          {/* 3 */}
          <button
            type="button"
            onClick={() => handleCardClick(2)}
            className="absolute z-[2] cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[28px] transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-2"
            style={{ left: "48%", top: "30%", transform: "rotate(10deg) scale(1)" }}
            aria-label={`Preview ${works[2]?.title}`}
          >
            <Image
              src={works[2]?.imageSrc || "/works/work-3.png"}
              alt={works[2]?.title || "work-3"}
              width={520}
              height={420}
              className="rounded-[28px] shadow-[0_18px_40px_rgba(0,0,0,.12)] pointer-events-none"
              priority
            />
          </button>

          {/* 4 (en arkada) */}
          <button
            type="button"
            onClick={() => handleCardClick(3)}
            className="absolute z-[0] cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[28px] transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-2"
            style={{ left: "70%", top: "36%", transform: "rotate(6deg) scale(1)" }}
            aria-label={`Preview ${works[3]?.title}`}
          >
            <Image
              src={works[3]?.imageSrc || "/works/work-4.png"}
              alt={works[3]?.title || "work-4"}
              width={520}
              height={420}
              className="rounded-[28px] shadow-[0_18px_40px_rgba(0,0,0,.12)] pointer-events-none"
              priority
            />
          </button>
        </div>
      </div>

      {/* Preview Overlay */}
      {previewIndex !== null && previewWork && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-[8px] opacity-0 work-preview-fade-in"
          onClick={handleBackdropClick}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] w-auto h-auto rounded-[28px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] scale-90 work-preview-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={previewWork.imageSrc}
              alt={previewWork.title}
              width={1200}
              height={900}
              className="object-contain w-full h-full"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
