"use client";

import Link from "next/link";

export default function Writing() {
  const posts = [
    {
      date: "21/02/25",
      title: "Bitcoin ETF’leri ne anlama geliyor?",
      readTime: "2 m",
      url: "#",
    },
    {
      date: "21/02/25",
      title: "Bitcoin ETF’leri ne anlama geliyor?",
      readTime: "2 m",
      url: "#",
    },
    {
      date: "21/02/25",
      title: "Bitcoin ETF’leri ne anlama geliyor?",
      readTime: "2 m",
      url: "#",
    },
    {
      date: "21/02/25",
      title: "Bitcoin ETF’leri ne anlama geliyor?",
      readTime: "2 m",
      url: "#",
    },
  ];

  return (
    /* Dikey hiza: max-w-[640px] ile Ventures ve Stack bölümleriyle tam uyumlu */
    <section className="mx-auto max-w-[640px] px-6 py-16">
      
      {/* BAŞLIK: Turuncu dikey çizgi hizası */}
      <div className="mb-10 text-left">
        <h2 className="text-xs uppercase tracking-widest font-medium text-gray-400 dark:text-gray-500">
          WRITING
        </h2>
      </div>

      {/* YAZI LİSTESİ */}
      <div className="flex flex-col">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={post.url}
            className="group flex items-center justify-between py-5 border-b border-gray-50 dark:border-neutral-900 last:border-0 hover:bg-gray-50/50 dark:hover:bg-[#0A0A0A] transition-all duration-300 -mx-4 px-4 rounded-xl"
          >
            {/* SOL TARAF: Tarih ve Başlık */}
            <div className="flex items-center gap-6 sm:gap-12 min-w-0">
              {/* Tarih: Sabit genişlik (w-16) ile başlıkların hizasını korur */}
              <div className="text-[13px] text-gray-400 dark:text-gray-600 font-medium tabular-nums flex-shrink-0 w-16">
                {post.date}
              </div>
              <div className="text-[15px] font-medium text-gray-900 dark:text-gray-100 truncate group-hover:text-black dark:group-hover:text-white transition-colors">
                {post.title}
              </div>
            </div>

            {/* SAĞ TARAF: Okuma Süresi ve İkon */}
            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600 flex-shrink-0 ml-4">
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="opacity-60"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div className="text-[13px] tabular-nums font-medium">
                {post.readTime}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}