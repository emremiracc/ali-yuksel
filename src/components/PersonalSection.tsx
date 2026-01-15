"use client";

import Image from "next/image";

export default function PersonalSection() {
  // Photo data
  const photos = [
    { src: "/personal/photo-1.jpg", alt: "Photo 1" },
    { src: "/personal/photo-2.jpg", alt: "Photo 2" },
    { src: "/personal/photo-3.jpg", alt: "Photo 3" },
    { src: "/personal/photo-4.jpg", alt: "Photo 4" },
  ];

  // Spotify icon SVG
  const SpotifyIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.299.181-.539.479-.659 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.18 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );

  // Instagram icon SVG
  const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );

  return (
    <section className="py-16 px-4 sm:py-24 border-b border-gray-200 dark:border-gray-800">
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 640px) {
          .photo-item-0 {
            transform: translate(calc(-50% + -190px), calc(-50% + 0px)) rotate(-8deg) !important;
          }
          .photo-item-1 {
            transform: translate(calc(-50% + -70px), calc(-50% + 6px)) rotate(-3deg) !important;
          }
          .photo-item-2 {
            transform: translate(calc(-50% + 70px), calc(-50% + 0px)) rotate(3deg) !important;
          }
          .photo-item-3 {
            transform: translate(calc(-50% + 190px), calc(-50% + 8px)) rotate(8deg) !important;
          }
        }
      `}} />
      <div className="w-full max-w-[832px] mx-auto px-6">
        {/* Content column - label above description */}
        <div className="space-y-6">
          {/* Row 1: PERSONAL Label */}
          <h2 
            className="text-xs uppercase font-medium text-left text-gray-400 dark:text-gray-500"
            style={{
              letterSpacing: '0.08em',
              fontSize: '12px',
            }}
          >
            PERSONAL
          </h2>

          {/* Row 2: Description text */}
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            In my spare time, I enjoy listening to music and taking photos with my iPhone 16 Pro
          </p>

          {/* Spotify Card */}
          <div className="rounded-2xl bg-[#F3F4F6] dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4">
              {/* Album Image */}
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-300 dark:bg-gray-700 flex-shrink-0">
                <Image
                  src="/personal/album.jpg"
                  alt="Luna album cover"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>

              {/* Track Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-1">
                  Luna
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Pascal Schumacher, Echo Collective
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Most replayed this month
                  </span>
                  <a
                    href="https://open.spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    <span>Listen on Spotify</span>
                    <SpotifyIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Cluster - overlapping stack matching Spotify card width */}
          <div className="flex flex-col items-center w-full">
            {/* Overlapping Polaroid Stack - match Spotify card width */}
            <div className="relative w-full mx-auto" style={{ height: "clamp(240px, 60vw, 320px)", padding: 0 }}>
              {photos.map((photo, index) => {
                // Wider spread offsets - photos extend to Spotify card edges while overlapping
                const rotations = [-8, -3, 3, 8];
                const xOffsetsMobile = [-95, -35, 35, 95]; // Overlap on mobile with wider spread
                const yOffsetsMobile = [0, 6, 0, 8]; // Slight vertical offsets
                // Center photos forward (higher z-index)
                const zIndexes = [1, 3, 4, 2]; // Middle photos in front
                
                return (
                  <div
                    key={index}
                    className={`absolute top-1/2 left-1/2 photo-item-${index}`}
                    style={{
                      transform: `translate(calc(-50% + ${xOffsetsMobile[index]}px), calc(-50% + ${yOffsetsMobile[index]}px)) rotate(${rotations[index] * 0.6}deg)`,
                      zIndex: zIndexes[index],
                    }}
                  >
                    {/* Polaroid-style card */}
                    <div className="w-40 h-48 sm:w-48 sm:h-60 md:w-52 md:h-64 bg-white dark:bg-gray-900 rounded-lg p-2 shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="relative w-full h-[calc(100%-3rem)] rounded overflow-hidden bg-gray-200 dark:bg-gray-800">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 208px"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      </div>
                      {/* Polaroid bottom margin */}
                      <div className="h-12"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Captions below photo cluster */}
            <div className="flex items-center justify-between w-full mt-6 text-xs text-gray-500 dark:text-gray-400">
              <span>Shot with iPhone 16 Pro</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                <span>See more on IG</span>
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
