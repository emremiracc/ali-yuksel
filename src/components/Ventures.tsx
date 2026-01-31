"use client";

import Image from "next/image";
import Link from "next/link";

export default function Ventures() {
  const ventures = [
    {
      name: "CMD Supply",
      description: "Framer Template Store",
      logo: "/ventures/cmd.png", // Doğru yol: /public yazılmaz
      url: "https://cmdsupply.com",
    },
    {
      name: "Best Websites",
      description: "Website Directory",
      logo: "/ventures/websites.png", // Düzeltildi: /public kaldırıldı
      url: "https://www.framer.com/gallery/",
    },
    {
      name: "Great Fonts",
      description: "Font Directory",
      logo: "/ventures/fonts.png", // Düzeltildi: /public kaldırıldı
      url: "https://greatfonts.com/lander", // İstediğin spesifik link
    }
  ];

  return (
    /* Diğer tüm bölümlerle milimetrik dikey hiza: max-w-[640px] */
    <section className="mx-auto max-w-[640px] px-6 py-16">
      
      {/* BAŞLIK: Turuncu çizgi hizası */}
      <div className="mb-10 text-left">
        <h2 className="text-xs uppercase tracking-widest font-medium text-gray-400 dark:text-gray-500">
          VENTURES
        </h2>
      </div>

      {/* VENTURES LİSTESİ */}
      <div className="flex flex-col gap-4">
        {ventures.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-2xl bg-gray-50/50 dark:bg-[#0A0A0A] border border-gray-100 dark:border-gray-800 hover:bg-white dark:hover:bg-black hover:shadow-md transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
          >
            <div className="flex items-center gap-4">
              {/* LOGO ÇERÇEVESİ: w-11 h-11 premium duruş */}
              <div className="relative w-11 h-11 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow-sm flex items-center justify-center">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  sizes="44px"
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                  unoptimized // Localhost'ta anlık görmek için en garantisi
                />
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-[15px] font-semibold text-gray-900 dark:text-gray-50 mb-0.5">
                  {item.name}
                </h3>
                {/* Hydration hatası almamak için div kullanıyoruz */}
                <div className="text-[13px] text-gray-500 dark:text-gray-400 leading-snug">
                  {item.description}
                </div>
              </div>
            </div>

            {/* Dışa Bağlantı İkonu */}
            <div className="text-gray-300 dark:text-gray-700 group-hover:text-gray-900 dark:group-hover:text-gray-400 transition-colors pr-1">
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}