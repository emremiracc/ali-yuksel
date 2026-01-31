"use client";

import React from "react";

export default function ContactForm() {
  return (
    /* pt-16 yerine pt-4 veya pt-6 kullanarak PERSONAL bölümüne iyice yaklaştırıyoruz */
    /* pb-24 ile sayfa sonu ferahlığını koruyoruz */
    <section className="mx-auto max-w-[640px] px-6 pt-6 pb-24">
      
      {/* BAŞLIK: Hizayı bozmuyoruz */}
      <div className="mb-8 text-left">
        <h2 className="text-xs uppercase tracking-widest font-medium text-gray-400 dark:text-gray-500">
          CONTACT
        </h2>
      </div>

      {/* AÇIKLAMA METNİ */}
      <div className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 mb-10">
        You can contact me using the form or via the links below.
      </div>

      {/* FORM ALANI */}
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-2xl bg-gray-50/50 dark:bg-[#0A0A0A] border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all text-[14px]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-2xl bg-gray-50/50 dark:bg-[#0A0A0A] border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all text-[14px]"
          />
        </div>

        <textarea
          placeholder="Message"
          rows={5}
          className="w-full p-4 rounded-2xl bg-gray-50/50 dark:bg-[#0A0A0A] border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all text-[14px] resize-none"
        ></textarea>

        <button
          type="submit"
          className="w-full sm:w-auto px-10 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-[14px] hover:opacity-90 transition-opacity active:scale-[0.98]"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}