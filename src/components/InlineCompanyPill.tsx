interface InlineCompanyPillProps {
  label: string;
  logoSrc?: string;
}

export default function InlineCompanyPill({ label, logoSrc }: InlineCompanyPillProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-gray-50 border border-gray-200 rounded-full text-gray-900">
      {logoSrc ? (
        <img
          src={logoSrc}
          alt=""
          width={16}
          height={16}
          className="h-4 w-auto rounded object-contain flex-shrink-0"
        />
      ) : (
        <div className="w-3.5 h-3.5 rounded bg-gray-200 border border-gray-300 flex-shrink-0"></div>
      )}
      <span className="text-[15px] sm:text-base font-medium">{label}</span>
    </span>
  );
}
