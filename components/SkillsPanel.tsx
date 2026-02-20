"use client";

import { useEffect, useRef, useState } from "react";
import { SKILL_CATEGORIES } from "@/lib/data";

export default function SkillsPanel() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="panel-enter" ref={ref}>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.15em] text-[#4af7d4] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
          Skill Map
        </p>
        <h2 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
          What Tech Companies Actually Want
        </h2>
        <p className="text-[#6b6b8a] text-sm mt-2 leading-relaxed">
          Skill importance ratings based on your background and target tech roles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="bg-[#13131c] border border-[#2a2a3d] rounded-xl p-6 hover:border-[rgba(232,255,74,0.25)] transition-colors duration-200"
          >
            <h3
              className="text-base font-bold mb-5 flex items-center gap-2.5 tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span>{cat.icon}</span>
              {cat.title}
            </h3>

            {cat.skills.map((skill) => (
              <div key={skill.name} className="mb-4 last:mb-0">
                <div className="flex justify-between text-[13px] mb-1.5">
                  <span className="text-[#e8e8f0]">{skill.name}</span>
                  <span className="text-[#6b6b8a]" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {skill.level}
                  </span>
                </div>
                <div className="bg-[#1c1c2a] rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#e8ff4a] to-[#4af7d4] transition-all duration-1000 ease-out"
                    style={{ width: animated ? `${skill.width}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
