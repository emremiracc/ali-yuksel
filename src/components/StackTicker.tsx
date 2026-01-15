"use client";

export default function StackTicker() {
  // Stack logos array - matching Jacob's site (5 logos only)
  const stack = [
    { name: "Framer", src: "/stack/framer.jpg", href: "https://www.framer.com" },
    { name: "Figma", src: "/stack/figma.jpg", href: "https://www.figma.com" },
    { name: "GitHub", src: "/stack/github.jpg", href: "https://github.com" },
    { name: "OpenAI", src: "/stack/openai.jpg", href: "https://openai.com" },
    { name: "Spotify", src: "/stack/spotify.jpg", href: "https://www.spotify.com" },
  ];

  return (
    <section className="py-16 px-4 sm:py-24 border-b border-gray-200 dark:border-gray-800">
      <div className="w-full max-w-[832px] mx-auto px-6 flex flex-col items-start">
        {/* STACK Label - same style as Work/Experience/Testimonials labels, left-aligned */}
        <h2 
          className="text-xs uppercase font-medium mb-5 text-left text-gray-400 dark:text-gray-500"
          style={{
            letterSpacing: '0.08em',
            fontSize: '12px',
          }}
        >
          STACK
        </h2>

        {/* Logo icon row - left-aligned, single row, 28px icons (h-7 w-7), 18px gap */}
        <div className="flex flex-nowrap justify-start items-center" style={{ gap: "18px" }}>
          {stack.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 ease-in-out opacity-90 hover:opacity-100"
              aria-label={item.name}
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-7 w-7 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
