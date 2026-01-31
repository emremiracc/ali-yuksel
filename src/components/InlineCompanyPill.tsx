interface InlineCompanyPillProps {
  label: string;
  logoSrc?: string;
}

export default function InlineCompanyPill({ label, logoSrc }: InlineCompanyPillProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-[3px] bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-md transition-all hover:border-neutral-300 dark:hover:border-neutral-700 cursor-default">
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={`${label} logo`}
          width={14}
          height={14}
          className="w-3.5 h-3.5 rounded-[2px] object-contain flex-shrink-0"
          // Logo metne göre çok yukarıda kalırsa aşağıdaki değeri 0.5px artırabilirsin
          style={{ marginTop: '0.5px' }} 
        />
      ) : (
        <div className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-700 flex-shrink-0"></div>
      )}
      <span className="text-[14px] font-medium text-neutral-800 dark:text-neutral-200 leading-none">
        {label}
      </span>
    </span>
  );
}