"use client";

import { CHECKLIST_CARDS } from "@/lib/data";
import { useProgress } from "@/lib/useProgress";

const ICON_VARIANTS = {
  yellow: "bg-[rgba(232,255,74,0.12)]",
  teal: "bg-[rgba(74,247,212,0.12)]",
  red: "bg-[rgba(255,107,107,0.12)]",
  purple: "bg-[rgba(147,51,234,0.12)]",
};

const totalItems = CHECKLIST_CARDS.reduce((acc, card) => acc + card.items.length, 0);

interface ChecklistPanelProps {
  onProgressChange: (count: number, total: number, pct: number, mounted: boolean) => void;
}

export default function ChecklistPanel({ onProgressChange }: ChecklistPanelProps) {
  const { toggle, isChecked, count, total, pct, mounted } = useProgress(totalItems);

  // Notify parent of progress changes
  const prevCount = mounted ? count : 0;
  onProgressChange(prevCount, total, pct, mounted);

  return (
    <div className="panel-enter">
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.15em] text-[#4af7d4] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
          Action Items
        </p>
        <h2 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
          Complete Job Hunt Checklist
        </h2>
        <p className="text-[#6b6b8a] text-sm mt-2 leading-relaxed">
          Check off tasks as you complete them. Progress is saved automatically.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {CHECKLIST_CARDS.map((card) => (
          <div
            key={card.id}
            className="bg-[#13131c] border border-[#2a2a3d] rounded-xl p-6 hover:border-[rgba(232,255,74,0.2)] transition-colors duration-200"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center text-xl flex-shrink-0 ${ICON_VARIANTS[card.iconVariant]}`}>
                {card.icon}
              </div>
              <h3 className="font-bold text-base tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                {card.title}
              </h3>
            </div>

            {card.items.map((item) => (
              <div
                key={item.id}
                onClick={() => toggle(item.id)}
                className="flex items-start gap-3 py-2.5 border-b border-[#2a2a3d] last:border-0 cursor-pointer group transition-opacity duration-150 hover:opacity-80"
              >
                <div
                  className={`w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center mt-0.5 transition-all duration-200 ${
                    isChecked(item.id)
                      ? "bg-[#e8ff4a] border-[#e8ff4a]"
                      : "border-[#2a2a3d]"
                  }`}
                >
                  {isChecked(item.id) && (
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                      <path d="M1 4L4 7L10 1" stroke="#0a0a0f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-[13.5px] leading-relaxed transition-all duration-200 ${
                    isChecked(item.id) ? "text-[#6b6b8a] line-through" : "text-[#e8e8f0]"
                  }`}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
