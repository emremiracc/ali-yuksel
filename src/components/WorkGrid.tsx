"use client";

import WorkCollage from "./WorkCollage";

export default function WorkGrid() {

  return (
    <section className="pt-0 pb-8 overflow-visible">
      {/* Work intro - same container as hero, left-aligned */}
      <div className="mx-auto max-w-[560px] px-6">
        <h2 className="text-xs uppercase tracking-widest font-medium mb-3 text-gray-500">
          WORK
        </h2>
        <p className="text-[15px] sm:text-base text-gray-600 leading-relaxed">
          Below are some select projects, full walkthroughs on request
        </p>
      </div>

      {/* Dotted grid background wrapper - full width */}
      <div className="relative min-h-[500px] pb-8 mt-0 overflow-visible">
        {/* Dotted grid background - full width, matching Jacob's style */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "8.5px 8.5px",
          }}
        >
          {/* Soft fade at the top */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        </div>

        {/* Work collage - floating overlapping images */}
        <div className="relative z-10 pt-0 pb-8 overflow-visible">
          <WorkCollage />
        </div>
      </div>
    </section>
  );
}
