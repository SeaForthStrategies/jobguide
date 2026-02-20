"use client";

interface ProgressBarProps {
  count: number;
  total: number;
  pct: number;
  mounted: boolean;
}

export default function ProgressBar({ count, total, pct, mounted }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-6 flex-wrap bg-[#13131c] border border-[#2a2a3d] rounded-xl px-7 py-5 mb-12">
      <span
        className="text-[11px] uppercase tracking-widest text-[#6b6b8a] whitespace-nowrap"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        Overall Progress
      </span>
      <div className="flex-1 min-w-[200px] bg-[#1c1c2a] rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#e8ff4a] to-[#4af7d4] transition-all duration-700 ease-out"
          style={{ width: mounted ? `${pct}%` : "0%" }}
        />
      </div>
      <span
        className="text-sm text-[#e8ff4a] whitespace-nowrap"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {mounted ? count : 0} / {total} tasks
      </span>
    </div>
  );
}
