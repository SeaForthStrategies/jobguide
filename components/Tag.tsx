interface TagProps {
  label: string;
  variant?: "default" | "accent" | "teal";
}

export default function Tag({ label, variant = "default" }: TagProps) {
  const styles = {
    default: "bg-[#1c1c2a] border-[#2a2a3d] text-[#6b6b8a]",
    accent: "bg-[rgba(232,255,74,0.07)] border-[rgba(232,255,74,0.3)] text-[#e8ff4a]",
    teal: "bg-[rgba(74,247,212,0.07)] border-[rgba(74,247,212,0.3)] text-[#4af7d4]",
  };

  return (
    <span
      className={`inline-flex px-3 py-1 rounded-full text-xs border ${styles[variant]}`}
      style={{ fontFamily: "'DM Mono', monospace" }}
    >
      {label}
    </span>
  );
}
