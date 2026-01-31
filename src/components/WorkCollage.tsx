"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom"; // Portal eklendi
import Image from "next/image";
import siteContent from "../content/site";

export default function WorkCollage() {
  const { works } = siteContent;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Client-side render kontrolü (Portal için şart)
  useEffect(() => {
    setMounted(true);
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  const collageConfigs = [
    {
      left: "22%",
      transform: "translate(-50%, -50%) translateY(-34px) rotate(-12deg) scale(0.92)",
      zIndex: 1,
      mobileLeft: "18%",
      mobileTransform: "translate(-50%, -50%) translateY(-22px) rotate(-10deg) scale(0.90)",
    },
    {
      left: "43%",
      transform: "translate(-50%, -50%) translateY(26px) rotate(-2deg) scale(1.02)",
      zIndex: 4,
      mobileLeft: "38%",
      mobileTransform: "translate(-50%, -50%) translateY(18px) rotate(-1deg) scale(0.98)",
    },
    {
      left: "61%",
      transform: "translate(-50%, -50%) translateY(-18px) rotate(6deg) scale(0.98)",
      zIndex: 2,
      mobileLeft: "60%",
      mobileTransform: "translate(-50%, -50%) translateY(-10px) rotate(5deg) scale(0.95)",
    },
    {
      left: "80%",
      transform: "translate(-50%, -50%) translateY(34px) rotate(14deg) scale(0.96)",
      zIndex: 3,
      mobileLeft: "84%",
      mobileTransform: "translate(-50%, -50%) translateY(24px) rotate(12deg) scale(0.93)",
    },
  ];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .work-collage-wrapper {
            position: relative;
            width: 100%;
            max-width: 1200px;
            height: clamp(300px, 35vw, 450px);
            margin: 0 auto;
            overflow: visible;
          }

          .work-collage-card {
            position: absolute;
            top: 60%;
            width: clamp(216px, 25vw, 324px);
            height: clamp(144px, 17vw, 216px);
            border-radius: 22px;
            overflow: hidden;
            background: #fff;
            border: 1px solid rgba(255,255,255,0.85);
            box-shadow: 0 18px 55px rgba(0,0,0,0.14);
            transform: var(--t);
            left: var(--l);
            z-index: var(--z);
            cursor: zoom-in;
            transition: transform 220ms ease;
          }

          /* PORTAL LIGHTBOX - SAYFANIN EN ÜSTÜNE ÇIKAR */
          .lightbox-portal {
            position: fixed;
            inset: 0;
            width: 100vw;
            height: 100vh;
            background-color: #ffffff !important; /* Beyaz modda tam opak */
            z-index: 2147483647 !important;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: zoom-out;
          }

          .dark .lightbox-portal {
            background-color: #000000 !important; /* Dark modda tam opak */
          }

          @keyframes zoomIn {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }

          ${works.slice(0, 4).map((_, index) => {
            const c = collageConfigs[index];
            return `
              .work-collage-card-${index} {
                --l: ${c.mobileLeft}; --t: ${c.mobileTransform}; --z: ${c.zIndex};
              }
              @media (min-width: 641px) {
                .work-collage-card-${index} {
                  --l: ${c.left}; --t: ${c.transform}; --z: ${c.zIndex};
                }
              }
            `;
          }).join("\n")}
        `,
        }}
      />

      <div className="work-collage-wrapper">
        {works.slice(0, 4).map((work, index) => (
          <div
            key={index}
            className={`work-collage-card work-collage-card-${index}`}
            onClick={() => setSelectedImage(work.imageSrc)}
          >
            <Image
              src={work.imageSrc}
              alt={work.title}
              fill
              className="object-cover"
              sizes="324px"
              priority={index === 1}
            />
          </div>
        ))}
      </div>

      {/* PORTAL KULLANIMI: Arkadaki 'WORK' yazısının sızmasını fiziksel olarak engeller */}
      {selectedImage && mounted && createPortal(
        <div className="lightbox-portal" onClick={() => setSelectedImage(null)}>
          <div className="relative w-[85vw] h-[85vh] animate-[zoomIn_0.2s_ease-out]">
            <Image
              src={selectedImage}
              alt="Project View"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}