"use client";

import { useState, useCallback } from "react";
import { type TabId, CHECKLIST_CARDS } from "@/lib/data";
import TabBar from "@/components/TabBar";
import ProgressBar from "@/components/ProgressBar";
import RoadmapPanel from "@/components/RoadmapPanel";
import SkillsPanel from "@/components/SkillsPanel";
import ChecklistPanel from "@/components/ChecklistPanel";
import ResourcesPanel from "@/components/ResourcesPanel";
import TipsPanel from "@/components/TipsPanel";

const TOTAL_ITEMS = CHECKLIST_CARDS.reduce((acc, c) => acc + c.items.length, 0);

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabId>("roadmap");
  const [progress, setProgress] = useState({ count: 0, total: TOTAL_ITEMS, pct: 0, mounted: false });

  const handleProgressChange = useCallback(
    (count: number, total: number, pct: number, mounted: boolean) => {
      setProgress((prev) => {
        if (prev.count === count && prev.mounted === mounted) return prev;
        return { count, total, pct, mounted };
      });
    },
    []
  );

  return (
    <div className="min-h-screen grid-bg relative">
      {/* Glow blobs */}
      <div className="fixed w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,255,74,0.06) 0%, transparent 70%)", top: "-200px", right: "-100px", zIndex: 0 }} />
      <div className="fixed w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,247,212,0.05) 0%, transparent 70%)", bottom: "-100px", left: "-100px", zIndex: 0 }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <header className="pt-12 pb-0">
          <div className="inline-flex items-center gap-2 bg-[rgba(232,255,74,0.08)] border border-[rgba(232,255,74,0.2)] rounded-full px-4 py-1.5 mb-7">
            <span className="pulse-dot w-2 h-2 rounded-full bg-[#e8ff4a] inline-block" />
            <span className="text-[11px] uppercase tracking-widest text-[#e8ff4a]"
              style={{ fontFamily: "'DM Mono', monospace" }}>
              Launch Ready — Tech Job Guide
            </span>
          </div>

          <h1 className="text-[clamp(42px,7vw,80px)] font-extrabold leading-[0.95] tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Get Hired at a<br />
            <span className="text-[#e8ff4a]">Tech Company</span>
          </h1>
          <p className="text-[18px] text-[#6b6b8a] max-w-lg leading-relaxed mb-10">
            A complete study guide and action plan — built around your skills as a digital marketer,
            web builder, and startup operator.
          </p>
        </header>

        {/* Progress */}
        <ProgressBar
          count={progress.count}
          total={progress.total}
          pct={progress.pct}
          mounted={progress.mounted}
        />

        {/* Hidden checklist to load progress on mount */}
        <div className="hidden">
          <ChecklistPanel onProgressChange={handleProgressChange} />
        </div>

        {/* Tabs */}
        <TabBar active={activeTab} onChange={setActiveTab} />

        {/* Panels */}
        <main className="pb-24">
          {activeTab === "roadmap" && <RoadmapPanel />}
          {activeTab === "skills" && <SkillsPanel />}
          {activeTab === "checklist" && (
            <ChecklistPanel onProgressChange={handleProgressChange} />
          )}
          {activeTab === "resources" && <ResourcesPanel />}
          {activeTab === "tips" && <TipsPanel />}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#2a2a3d] py-8 text-center relative z-10">
        <p className="text-[13px] text-[#6b6b8a]" style={{ fontFamily: "'DM Mono', monospace" }}>
          Launch Ready — Tech Job Guide &nbsp;·&nbsp; Built for Abigail Lehr
        </p>
      </footer>
    </div>
  );
}
