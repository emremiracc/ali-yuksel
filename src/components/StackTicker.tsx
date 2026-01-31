"use client";

import Image from "next/image";
import Link from "next/link";

export default function Stack() {
  const stackItems = [
    { name: "Framer", logo: "/stack/framer.jpg", url: "https://framer.com" },
    { name: "Figma", logo: "/stack/figma.jpg", url: "https://figma.com" },
    { name: "GitHub", logo: "/stack/github.jpg", url: "https://github.com" },
    { name: "OpenAI", logo: "/stack/openai.jpg", url: "https://openai.com" },
    { name: "Spotify", logo: "/stack/spotify.jpg", url: "https://spotify.com" },
    { name: "Arc", logo: "/stack/arc.jpg", url: "https://arc.net" },
    { name: "Raycast", logo: "/stack/raycast.jpg", url: "https://raycast.com" },
    { name: "Cursor", logo: "/stack/cursor.jpg", url: "https://cursor.com" },
    { name: "Stripe", logo: "/stack/stripe.jpg", url: "https://stripe.com" },
    { name: "Superhuman", logo: "/stack/superhuman.jpg", url: "https://superhuman.com" },
  ];

  return (
    /* WorkGrid ve Experience ile dikey hiza: max-w-[640px] */
    <section className="mx-auto max-w-[640px] px-6 py-16">
      
      {/* BAŞLIK: Turuncu çizgi hizası korunuyor */}
      <div className="mb-10">
        <h2 className="text-xs uppercase tracking-widest font-medium text-gray-400 dark:text-gray-500">
          STACK
        </h2>
      </div>

      {/* İKON DİZİLİMİ: justify-between ile turuncu çizgiler arası tam doluyor */}
      <div className="flex flex-row items-center justify-between w-full">
        {stackItems.map((item, index) => (
          <Link 
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            /* 48px boyut referans görselle tam uyumlu duracaktır */
            className="group relative w-12 h-12 transition-all duration-300 hover:scale-110 active:scale-95 flex-shrink-0"
            title={item.name}
          >
            {/* İkon Çerçevesi */}
            <div className="relative w-full h-full overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-black">
              <Image
                src={item.logo}
                alt={item.name}
                fill
                sizes="48px"
                className="object-cover transition-all duration-300"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}