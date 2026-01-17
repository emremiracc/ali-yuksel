"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import siteContent from "../content/site";

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
      // Prevent body scroll when preview is open
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [previewIndex]);

  // Collage configuration matching Jacob's Framer layout
  // Increased overlap for more "interlocked" feel
  const collageConfigs = [
    {
      // Left card (back-left) - slightly more overlap
      xOffset: "-42%",
      yOffset: "-6%",
      rotate: -10,
      zIndex: 1,
      // Mobile adjustments
      mobileXOffset: "-45%",
      mobileYOffset: "-5%",
    },
    {
      // Center-right card (back-right) - slightly more overlap
      xOffset: "10%",
      yOffset: "-10%",
      rotate: 6,
      zIndex: 2,
      mobileXOffset: "5%",
      mobileYOffset: "-10%",
    },
    {
      // Center-left card (front-left) - slightly more overlap
      xOffset: "-18%",
      yOffset: "6%",
      rotate: -4,
      zIndex: 3,
      mobileXOffset: "-23%",
      mobileYOffset: "6%",
    },
    {
      // Right card (front-right) - slightly more overlap
      xOffset: "32%",
      yOffset: "2%",
      rotate: 12,
      zIndex: 4,
      mobileXOffset: "22%",
      mobileYOffset: "5%",
    },
  ];

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
      <style dangerouslySetInnerHTML={{ __html: `
        /* Mobile: vertical stack (normal flow) */
        .work-collage-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          overflow-x: hidden;
        }
        .work-collage-card {
          position: relative;
          width: 100%;
          max-width: 520px;
          aspect-ratio: 4 / 3;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.10);
          background: #fff;
          transform: none;
          transition: all 0.3s ease-out;
        }
        .work-collage-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.14);
        }
        /* Desktop: collage layout (absolute positioning) */
        @media (min-width: 768px) {
          .work-collage-wrapper {
            width: min(1100px, 92vw);
            height: clamp(380px, 42vw, 520px);
            margin-top: 0;
            left: 50%;
            transform: translateX(calc(-50% - 18px)) translateY(-54px);
            display: block;
            --s: 0.92; /* Scale variable - slightly smaller */
          }
          .work-collage-card {
            position: absolute;
            width: clamp(200px, 24vw, 300px);
            max-width: none;
            transform-origin: center;
            transform: scale(var(--s));
            transform-style: preserve-3d;
          }
          .work-collage-card:hover {
            transform: scale(calc(var(--s) * 1.02)) translateY(-8px) !important;
            box-shadow: 0 24px 70px rgba(0, 0, 0, 0.14);
            z-index: 50 !important;
          }
        }
        .work-preview-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          opacity: 0;
          animation: fadeIn 0.25s ease-in-out forwards;
        }
        .work-preview-image {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          width: auto;
          height: auto;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
          transform: scale(0.9);
          animation: zoomIn 0.25s ease-in-out forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        @keyframes zoomIn {
          to {
            transform: scale(1);
          }
        }
        ${works.slice(0, 4).map((_, index) => {
          const config = collageConfigs[index];
          // Pixel offsets for more overlap: all cards moved closer horizontally
          const pixelOffsets = [
            { x: 14, y: 0 },   // Card 0 (leftmost): +14px X (moved right)
            { x: -28, y: 0 },  // Card 1 (center-right): -28px X (moved left)
            { x: 20, y: -6 },  // Card 2 (center-left): +20px X, -6px Y (moved right)
            { x: -18, y: 0 },  // Card 3 (rightmost): -18px X (moved left)
          ];
          const offset = pixelOffsets[index];
          return `
            /* Desktop: absolute positioning with transforms */
            @media (min-width: 768px) {
              .work-collage-card-${index} {
                left: calc(50% + ${config.xOffset});
                top: calc(50% + ${config.yOffset});
                transform: scale(var(--s)) rotate(${config.rotate}deg) translate(${offset.x}px, ${offset.y}px);
                z-index: ${config.zIndex};
              }
            }
          `;
        }).join('\n')}
        @media (prefers-color-scheme: dark) {
          .work-collage-card {
            background: #111;
            border-color: rgba(255, 255, 255, 0.1);
          }
        }
      `}} />

      <div className="work-collage-wrapper">
        {works.slice(0, 4).map((work, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`work-collage-card work-collage-card-${index} group cursor-pointer`}
              onClick={() => handleCardClick(index)}
              aria-label={`Preview ${work.title}`}
            >
              <Image
                src={work.imageSrc}
                alt={work.title}
                fill
                className="object-cover pointer-events-none"
                sizes="(max-width: 767px) 520px, (max-width: 1024px) 24vw, 300px"
              />
            </button>
          );
        })}
      </div>

      {/* Preview Overlay */}
      {previewIndex !== null && previewWork && (
        <div
          className="work-preview-overlay"
          onClick={handleBackdropClick}
        >
          <div className="work-preview-image" onClick={(e) => e.stopPropagation()}>
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
