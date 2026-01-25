"use client";

import Link from "next/link";
import siteContent from "../content/site";

export default function ExperienceTimeline() {
  const { experiences } = siteContent;

  const formatYearRange = (start: string, end?: string) => {
    if (!end || end === "Present") {
      return `${start} — Present`;
    }
    return `${start} — ${end}`;
  };

  return (
    <div 
      className="w-full max-w-[832px] mx-auto px-6 pb-16 border-b border-gray-200"
    >
      {/* Experience label - same style as WORK label */}
      <div className="grid grid-cols-1 sm:grid-cols-[var(--timeline-col)_1fr] gap-x-10 mb-3">
        <div className="hidden sm:block"></div>
        <div>
          <h2 className="text-xs uppercase tracking-widest font-medium text-gray-500">
            EXPERIENCE
          </h2>
        </div>
      </div>
      
      {/* Experience title - same style as hero name/heading */}
      <div className="grid grid-cols-1 sm:grid-cols-[var(--timeline-col)_1fr] gap-x-10 mb-6">
        <div className="hidden sm:block"></div>
        <div>
          <h3 className="text-2xl font-semibold leading-tight text-gray-900">
            Experience
          </h3>
        </div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[var(--timeline-col)_1fr] gap-x-10"
          >
            {/* Year range - left column */}
            <div className="flex-shrink-0">
              <span className="text-xs text-gray-500">
                {formatYearRange(exp.start, exp.end)}
              </span>
            </div>

            {/* Content - right column */}
            <div className="min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 gap-1 mb-2">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  {exp.role}
                </h4>
                <span className="text-[15px] sm:text-base text-gray-600">
                  at{" "}
                  {exp.companyLink ? (
                    <Link
                      href={exp.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 underline decoration-gray-300 underline-offset-2 hover:decoration-gray-600 transition-colors"
                    >
                      {exp.company}
                    </Link>
                  ) : (
                    <span>{exp.company}</span>
                  )}
                </span>
              </div>
              {/* Description - same style as hero bio paragraph */}
              <p className="text-[15px] sm:text-base text-gray-600 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
