import { ROADMAP } from "@/lib/data";
import Tag from "./Tag";

export default function RoadmapPanel() {
  return (
    <div className="panel-enter">
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.15em] text-[#4af7d4] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
          Phase Plan
        </p>
        <h2 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
          12-Week Job Hunt Roadmap
        </h2>
        <p className="text-[#6b6b8a] text-sm mt-2 leading-relaxed">
          A structured timeline from foundation to offer letter, tailored to your background.
        </p>
      </div>

      <div className="relative pl-10">
        {/* Timeline line */}
        <div className="absolute left-[14px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#e8ff4a] via-[#4af7d4] to-transparent" />

        {ROADMAP.map((item, i) => (
          <div key={item.id} className="relative mb-8 last:mb-0">
            {/* Dot */}
            <div className="absolute -left-[33px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#e8ff4a] bg-[#0a0a0f]" />

            <p className="text-[11px] uppercase tracking-widest text-[#e8ff4a] mb-1.5" style={{ fontFamily: "'DM Mono', monospace" }}>
              {item.week}
            </p>
            <h3 className="text-lg font-bold mb-2 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              {item.title}
            </h3>
            <p className="text-[#6b6b8a] text-sm leading-relaxed mb-3">{item.body}</p>
            <div className="flex gap-2 flex-wrap">
              {item.tags.map((tag) => (
                <Tag key={tag.label} label={tag.label} variant={tag.variant} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
