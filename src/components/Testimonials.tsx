"use client";

import Image from "next/image";
import siteContent from "../content/site";

export default function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section 
      className="w-full max-w-[832px] mx-auto px-6 py-[72px] border-b border-gray-200"
    >
      {/* Grid layout matching Experience - TESTIMONIALS label in left column, cards in right column */}
      <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-x-10">
        {/* Left column - TESTIMONIALS label (same position as Experience date column) */}
        <div>
          <div className="text-[11px] tracking-[0.22em] uppercase text-neutral-400 mb-6 sm:mb-0">
            TESTIMONIALS
          </div>
        </div>

        {/* Right column - testimonial cards */}
        <div className="min-w-0">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl border border-black/10 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.06)] flex flex-col justify-between min-h-[220px]"
              >
                {/* Quote text */}
                <blockquote className="flex-1">
                  <p className="text-[16px] leading-[1.65] text-black/70">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Footer - Avatar + Name/Role */}
                <div className="mt-5 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                    <Image
                      src={testimonial.avatar || "/avatar.jpg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600 text-sm font-medium">${testimonial.name.charAt(0)}</div>`;
                        }
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-semibold text-black/85">
                      {testimonial.name}
                    </p>
                    <p className="text-[13px] text-black/55 mt-0.5">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
