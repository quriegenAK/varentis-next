"use client";

import { useState, useEffect } from "react";

/* ─── Responsive breakpoint hook ────────────────── */
export type Breakpoint = "mobile" | "tablet" | "desktop";

export function useBreakpoint(): Breakpoint | null {
  const [bp, setBp] = useState<Breakpoint | null>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setBp(w < 768 ? "mobile" : w < 1024 ? "tablet" : "desktop");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return bp;
}

/* ─── Shared section types ──────────────────────── */
export type ServiceData = {
  _id?: string;
  tier: string;
  title: string;
  description?: string;
  desc?: string;
  price: string;
  per: string;
  tags: string[];
  flagship?: boolean;
};

export type IndustryData = {
  _id?: string;
  name: string;
  companies?: string;
  cos?: string;
  badge: string;
  logo?: string | null;
};

export type FounderData = {
  name: string;
  title: string;
  credentials: string;
  experience: string;
  bio1: string;
  bio2: string;
  bio3: string;
  skills: string[];
  photo?: unknown;
};
