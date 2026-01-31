"use client";

import Link from "next/link";
import Image from "next/image";
import siteContent from "../content/site";

export default function ExperienceTimeline() {
  // Yeni verilerin: HBR, CoinDesk ve Twin Science
  const experiences = [
    {
      start: "2022",
      end: "Now",
      role: "Sales & Business Development Director",
      company: "Harvard Business Review Türkiye",
      companyLink: "https://hbrturkiye.com",
      logo: "/logos/hbr.png", 
      description: `Leading sales and business development initiatives for HBR Türkiye, focusing on branded events, executive programs, and strategic content partnerships with local and global organizations.
      Driving long-term sponsorship models, high-level collaborations, and revenue growth across multiple industry verticals.`
    },
    {
      start: "2022",
      end: "2025",
      role: "Business Development Director",
      company: "CoinDesk",
      companyLink: "https://www.coindesk.com",
      logo: "/logos/coindesk.png",
      description: `Managed business development and commercial partnerships for CoinDesk. Built sponsorship models, partnerships, and market entry strategies within the crypto and Web3 ecosystem, collaborating with startups, enterprises, and financial institutions.`
    },
    {
      start: "2020",
      end: "2021",
      role: "Product Manager",
      company: "Twin Science & Robotics",
      companyLink: "https://www.twinscience.com",
      logo: "/logos/twin.png",
      description: `Worked closely with the Product Manager and cross-functional teams on digital and physical products used by 400,000+ children. Focused on product analytics, stakeholder communication, and user-centered development for the Twing mobile application.`
    }
  ];

  const intro = `Throughout my career, I’ve worked at the intersection of business development, product strategy, and content-driven growth. I focus on building partnerships, scalable revenue models, and products that connect ideas with decision-makers.`;

  const formatYearRange = (start: string, end?: string) => {
    if (!end || end === "Now" || end === "Present") return `${start} – Now`;
    return `${start} – ${end}`;
  };

  const renderParagraphs = (text?: string) => {
    if (!text) return null;
    const blocks = text.split(/\n/g).map((b) => b.trim()).filter(Boolean);
    return blocks.map((block, i) => (
      <p key={i} className="text-[15px] sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
        {block}
      </p>
    ));
  };

  return (
    /* WorkGrid ile aynı dikey hiza: max-w-[640px] */
    <div className="mx-auto max-w-[640px] px-6 pb-16">
      
      {/* BAŞLIK VE INTRO: Turuncu çizgi hizası korundu */}
      <div className="mb-10">
        <h2 className="text-xs uppercase tracking-widest font-medium text-gray-500 dark:text-gray-500 mb-3">
          EXPERIENCE
        </h2>
        <p className="text-[15px] sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          {intro}
        </p>
      </div>

      {/* DENEYİM LİSTESİ */}
      <div className="space-y-12">
        {experiences.map((exp: any, index: number) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-x-6"
          >
            {/* Sol Kolon: Tarih Aralığı */}
            <div className="pt-1">
              <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 tabular-nums">
                {formatYearRange(exp.start, exp.end)}
              </span>
            </div>

            {/* Sağ Kolon: Rol, Şirket ve Açıklama */}
            <div className="min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mb-3">
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-50">
                  {exp.role}
                </h4>
                
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">at</span>
                  
                  {/* Logoları daha sonra ekleyeceğimiz için alanı hazırladım */}
                  {exp.logo && (
                    <div className="relative w-5 h-5 overflow-hidden rounded-md flex-shrink-0">
                      <Image 
                        src={exp.logo} 
                        alt={exp.company} 
                        fill 
                        className="object-contain"
                        // Henüz logolar klasörde yoksa hata vermemesi için:
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                      />
                    </div>
                  )}

                  <span className="text-[15px] sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                    {exp.companyLink ? (
                      <Link
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4 hover:decoration-gray-900 transition-colors"
                      >
                        {exp.company}
                      </Link>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                  </span>
                </div>
              </div>

              {/* Açıklama metni paragrafları */}
              <div className="space-y-3">
                {renderParagraphs(exp.description)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}