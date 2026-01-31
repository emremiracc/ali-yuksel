"use client";

import siteContent from "../content/site";

export default function Testimonials() {
  const { testimonials } = siteContent as any;

  return (
    /* WorkGrid ve Experience ile aynı hiza: max-w-[640px] ve mx-auto px-6 */
    <section className="mx-auto max-w-[640px] px-6 py-16">
      
      {/* BAŞLIK: Tam dikey hizada başlaması için */}
      <div className="mb-10">
        <h2 className="text-xs uppercase tracking-widest font-medium text-gray-500 dark:text-gray-500">
          TESTIMONIALS
        </h2>
      </div>

      {/* KARTLARIN DİZİLİMİ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {testimonials.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 rounded-2xl bg-gray-50 dark:bg-[#0A0A0A] border border-gray-100 dark:border-gray-800 shadow-sm"
          >
            <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 mb-8 italic">
              "{item.quote}"
            </p>
            
            <div className="flex items-center gap-3">
              {/* Varsa profil fotoğrafı alanı */}
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex-shrink-0" />
              
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-50 truncate">
                  {item.author}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-500 truncate">
                  {item.role} at {item.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}