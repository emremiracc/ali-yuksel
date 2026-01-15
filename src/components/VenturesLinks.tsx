"use client";

import Link from "next/link";
import siteContent from "../content/site";

export default function VenturesLinks() {
  const { ventures } = siteContent;

  return (
    <section className="py-16 px-4 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-50">
          Ventures
        </h2>
        <div className="space-y-4">
          {ventures.map((venture, index) => (
            <Link
              key={index}
              href={venture.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-200 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-50">
                {venture.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {venture.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}