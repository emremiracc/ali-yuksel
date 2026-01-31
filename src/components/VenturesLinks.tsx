"use client";

import Link from "next/link";

export default function VenturesLinks() {
  const ventures = [
    {
      name: "CMD Supply",
      description: "Framer Template Store",
      logo: "/ventures/cmd.png",
      url: "https://cmdsupply.com",
    },
    {
      name: "Best Websites",
      description: "Website Directory",
      logo: "/ventures/websites.png",
      url: "https://www.framer.com/gallery/", // Framer Gallery linki buraya çakıldı
    },
    {
      name: "Great Fonts",
      description: "Font Directory",
      logo: "/ventures/fonts.png",
      url: "https://greatfonts.com/lander",
    }
  ];

  return (
    /* Dikey hiza: 640px */
    <section className="mx-auto max-w-[640px] px-6 py-16">
      
      <div className="mb-10 text-left">
        <h2 className="text-xs uppercase tracking-widest font-medium text-gray-400 dark:text-gray-500">
          VENTURES
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {ventures.map((venture, index) => (
          <Link
            key={index}
            href={venture.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 bg-gray-50/50 dark:bg-[#0A0A0A] border border-gray-100 dark:border-gray-800 rounded-2xl transition-all duration-300 hover:bg-white dark:hover:bg-black hover:shadow-md hover:scale-[1.01] active:scale-[0.99]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                
                {/* LOGO ALANI: img etiketi ile doğrudan public klasöründen çekiyoruz */}
                <div className="relative w-11 h-11 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow-sm flex items-center justify-center">
                  <img
                    src={venture.logo}
                    alt={venture.name}
                    className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="min-w-0">
                  {/* Hata almamak için <div> kullanıyoruz, <p> yasak */}
                  <div className="text-[15px] font-semibold text-gray-900 dark:text-gray-50 mb-0.5">
                    {venture.name}
                  </div>
                  <div className="text-[13px] text-gray-500 dark:text-gray-400 leading-snug">
                    {venture.description}
                  </div>
                </div>
              </div>

              {/* SAĞ OK İKONU */}
              <div className="text-gray-300 dark:text-gray-700 group-hover:text-gray-900 dark:group-hover:text-gray-400 transition-colors pr-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}