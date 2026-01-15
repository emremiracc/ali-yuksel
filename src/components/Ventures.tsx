"use client";

import Link from "next/link";

export default function Ventures() {
  // Ventures data matching Jacob's reference
  const ventures = [
    {
      title: "CMD Supply",
      subtitle: "Framer Template Store",
      href: "https://cmdsupply.co",
      icon: "cmd",
    },
    {
      title: "Best Websites",
      subtitle: "Website Directory",
      href: "https://bestwebsites.app",
      icon: "globe",
    },
    {
      title: "Great Fonts",
      subtitle: "Font Directory",
      href: "https://greatfonts.co",
      icon: "plus",
    },
  ];

  // Icon SVG components
  const IconSVG = ({ type }: { type: string }) => {
    const iconClass = "text-gray-700 dark:text-gray-300";
    switch (type) {
      case "cmd":
        // Command/⌘ icon
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={iconClass}>
            <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case "globe":
        // Globe icon
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={iconClass}>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M3 12H21M12 3C14.5 6 16.5 9 12 12C7.5 9 9.5 6 12 3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        );
      case "plus":
        // Plus icon
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={iconClass}>
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 px-4 sm:py-24 border-b border-gray-200 dark:border-gray-800">
      <div className="w-full max-w-[832px] mx-auto px-6 flex flex-col items-start">
        {/* VENTURES Label - same style and alignment as STACK */}
        <h2 
          className="text-xs uppercase font-medium mb-5 text-left text-gray-400 dark:text-gray-500"
          style={{
            letterSpacing: '0.08em',
            fontSize: '12px',
          }}
        >
          VENTURES
        </h2>

        {/* Ventures list - vertical list matching reference */}
        <div className="w-full space-y-3">
          {ventures.map((venture, index) => (
            <Link
              key={index}
              href={venture.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-4 bg-white dark:bg-gray-900 rounded-lg hover:bg-neutral-50 dark:hover:bg-gray-800/50 transition-all duration-200 cursor-pointer group"
              style={{ 
                boxShadow: "0 0 0 0px transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 0px transparent";
              }}
            >
              {/* Left: Icon + Text */}
              <div className="flex items-center gap-4">
                {/* Icon box - 32px rounded square, soft gray bg, no border */}
                <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <IconSVG type={venture.icon} />
                </div>

                {/* Title and subtitle stacked */}
                <div className="flex flex-col min-w-0">
                  <h3 className="text-base font-semibold leading-tight text-gray-900 dark:text-gray-100">
                    {venture.title}
                  </h3>
                  <p className="text-sm leading-tight mt-0.5 text-gray-600 dark:text-gray-400">
                    {venture.subtitle}
                  </p>
                </div>
              </div>

              {/* Right: External link arrow icon */}
              <div 
                className="transition-colors duration-200 flex-shrink-0 ml-4 group-hover:opacity-75"
                style={{ color: "#9CA3AF" }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-5 h-5"
                >
                  <path
                    d="M7 5L13 5M13 5V11M13 5L5 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
