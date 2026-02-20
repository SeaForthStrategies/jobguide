import { RESOURCE_SECTIONS } from "@/lib/data";

const TYPE_STYLES = {
  free: "bg-[rgba(74,247,212,0.1)] text-[#4af7d4]",
  paid: "bg-[rgba(255,107,107,0.1)] text-[#ff6b6b]",
  community: "bg-[rgba(232,255,74,0.1)] text-[#e8ff4a]",
};

export default function ResourcesPanel() {
  return (
    <div className="panel-enter">
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.15em] text-[#4af7d4] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
          Study Materials
        </p>
        <h2 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
          Essential Resources
        </h2>
        <p className="text-[#6b6b8a] text-sm mt-2 leading-relaxed">
          Curated tools, platforms, and communities for the tech job seeker.
        </p>
      </div>

      {RESOURCE_SECTIONS.map((section) => (
        <div key={section.id} className="mb-10 last:mb-0">
          <p
            className="text-xs uppercase tracking-widest text-[#6b6b8a] mb-4"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {section.tag}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {section.items.map((item) => (
              <div
                key={item.id}
                className="bg-[#13131c] border border-[#2a2a3d] rounded-xl p-5 hover:border-[#4af7d4] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span
                  className={`inline-block text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 ${TYPE_STYLES[item.type]}`}
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {item.type}
                </span>
                <h4 className="font-bold text-[15px] mb-1.5 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {item.title}
                </h4>
                <p className="text-[13px] text-[#6b6b8a] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
