import { TIPS } from "@/lib/data";

export default function TipsPanel() {
  return (
    <div className="panel-enter">
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.15em] text-[#4af7d4] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
          Insider Knowledge
        </p>
        <h2 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
          12 Tips That Actually Work
        </h2>
        <p className="text-[#6b6b8a] text-sm mt-2 leading-relaxed">
          Advice tailored to your background — the builder + marketer who&apos;s ready for tech.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {TIPS.map((tip) => (
          <div
            key={tip.id}
            className="bg-[#13131c] border border-[#2a2a3d] border-l-[3px] border-l-[#e8ff4a] rounded-xl p-5 pl-6 grid grid-cols-[auto_1fr] gap-4 items-start hover:border-l-[#4af7d4] transition-colors duration-200"
          >
            <div
              className="text-[28px] font-extrabold text-[rgba(232,255,74,0.18)] leading-none w-8"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {tip.num}
            </div>
            <div>
              <h3 className="font-bold text-[15px] mb-1.5 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                {tip.title}
              </h3>
              <p className="text-[13.5px] text-[#6b6b8a] leading-relaxed">{tip.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
