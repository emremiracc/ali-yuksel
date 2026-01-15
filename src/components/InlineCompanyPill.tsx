interface InlineCompanyPillProps {
  label: string;
  logoSrc?: string;
}

export default function InlineCompanyPill({ label, logoSrc }: InlineCompanyPillProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-gray-900 dark:text-gray-100">
      {logoSrc ? (
        <img
          src={logoSrc}
          alt=""
          width={14}
          height={14}
          className="rounded object-cover"
        />
      ) : (
        <div className="w-3.5 h-3.5 rounded bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 flex-shrink-0"></div>
      )}
      <span className="text-[15px] sm:text-base font-medium">{label}</span>
    </span>
  );
}
