"use client";

import Image from "next/image";
import Link from "next/link";
import siteContent from "../content/site";

export default function WorkCollage() {
  const { works } = siteContent;

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

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .work-collage-wrapper {
          position: relative;
          width: min(1100px, 92vw);
          height: clamp(380px, 42vw, 520px);
          margin-top: 0;
          left: 50%;
          transform: translateX(calc(-50% - 18px)) translateY(-54px);
          --s: 0.92; /* Scale variable - slightly smaller */
        }
        .work-collage-card {
          position: absolute;
          width: clamp(200px, 24vw, 300px);
          aspect-ratio: 4 / 3;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.10);
          background: #fff;
          transform-origin: center;
          transition: all 0.3s ease-out;
          transform: scale(var(--s));
          transform-style: preserve-3d;
        }
        .work-collage-card:hover {
          transform: scale(calc(var(--s) * 1.02)) translateY(-8px) !important;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.14);
          z-index: 50 !important;
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
            .work-collage-card-${index} {
              left: calc(50% + ${config.mobileXOffset});
              top: calc(50% + ${config.mobileYOffset});
              transform: scale(var(--s)) rotate(${config.rotate * 0.8}deg) translate(${offset.x * 0.6}px, ${offset.y * 0.6}px);
              z-index: ${config.zIndex};
            }
            @media (min-width: 641px) {
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
            <Link
              key={index}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`work-collage-card work-collage-card-${index} group cursor-pointer`}
            >
              <Image
                src={work.imageSrc}
                alt={work.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 24vw, 300px"
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
