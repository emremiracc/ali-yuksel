interface DottedGridProps {
  className?: string;
}

export default function DottedGrid({ className = "" }: DottedGridProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
        backgroundSize: "10px 10px",
      }}
    >
      {/* Soft fade at the top */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none" />
    </div>
  );
}
