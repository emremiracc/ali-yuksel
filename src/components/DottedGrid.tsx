interface DottedGridProps {
  className?: string;
}

export default function DottedGrid({ className = "" }: DottedGridProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.07) 0.8px, transparent 0.8px)",
        backgroundSize: "6px 6px",
      }}
    >
      {/* Soft fade at the top for light mode */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none dark:hidden" />
      {/* Soft fade at the top for dark mode */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent pointer-events-none hidden dark:block" />
    </div>
  );
}
