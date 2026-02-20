"use client";

import { TABS, type TabId } from "@/lib/data";

interface TabBarProps {
  active: TabId;
  onChange: (tab: TabId) => void;
}

export default function TabBar({ active, onChange }: TabBarProps) {
  return (
    <div className="flex gap-1 flex-wrap bg-[#13131c] border border-[#2a2a3d] rounded-xl p-1.5 mb-10">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex-1 min-w-[110px] flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
            active === tab.id
              ? "bg-[#e8ff4a] text-[#0a0a0f] font-bold"
              : "text-[#6b6b8a] hover:text-[#e8e8f0] hover:bg-[#1c1c2a]"
          }`}
        >
          <span>{tab.icon}</span>
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
