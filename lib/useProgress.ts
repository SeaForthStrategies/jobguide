"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "techguide_checks_v1";

export function useProgress(totalItems: number) {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setChecked(new Set(JSON.parse(stored)));
      }
    } catch {}
    setMounted(true);
  }, []);

  const toggle = useCallback((id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {}
      return next;
    });
  }, []);

  const isChecked = useCallback((id: string) => checked.has(id), [checked]);

  const count = checked.size;
  const pct = totalItems > 0 ? Math.round((count / totalItems) * 100) : 0;

  return { checked, toggle, isChecked, count, total: totalItems, pct, mounted };
}
