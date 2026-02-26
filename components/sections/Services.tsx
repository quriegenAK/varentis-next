"use client";

import { useBreakpoint, type ServiceData } from "./shared";
import { Reveal, SLabel, Tag } from "@/components/ui";

const fallbackServices = [
  {
    tier: "Tier I: Entry Point",
    title: "Architecture\nSprint",
    desc: "Current state assessment, target architecture design, structured roadmap, and a full Architecture Decision Record package. Clarity before commitment.",
    price: "$25K–$75K",
    per: "Fixed · 4–8 Weeks",
    tags: [
      "Current State Audit",
      "Target Architecture",
      "ADR Package",
      "Risk Register",
    ],
    flagship: false,
  },
  {
    tier: "Tier II: Core Engagement",
    title: "Platform Engineering\nPartnership",
    desc: "Embedded senior architecture and engineering leadership. We design, build, and deliver production-grade platforms. Milestone-based, fully handed off.",
    price: "$150K–$600K",
    per: "Milestone · 3–12 Months",
    tags: [
      "Architecture Lead",
      "Hands-on Build",
      "Team Enablement",
      "Regulated AI",
      "Data Platforms",
    ],
    flagship: true,
  },
  {
    tier: "Tier III: Ongoing",
    title: "Strategic Advisory\nRetainer",
    desc: "Ongoing CTO-level architectural advisory. Architecture review board participation, vendor evaluation, and a trusted senior voice on high-stakes decisions.",
    price: "$8K–$20K",
    per: "Per Month · Reserved",
    tags: ["Arch Review Board", "Vendor Evaluation", "Fractional CTO"],
    flagship: false,
  },
  {
    tier: "Specialized",
    title: "Regulated AI &\nScientific Platforms",
    desc: "Deep specialty at the intersection of AI, regulatory compliance, and scientific data at scale. From cyber insurance risk scoring to multi-omics analytics.",
    price: "Scoped",
    per: "Per Engagement",
    tags: [
      "AI Readiness Audit",
      "Compliance Arch",
      "Omics Platforms",
      "Risk Analytics",
    ],
    flagship: false,
  },
];

export function Services({ data }: { data: ServiceData[] | null }) {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const containerPadding = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px";
  const sectionPadding = isMobile ? "72px 0" : isTablet ? "100px 0" : "140px 0";
  const topGridCols = isMobile || isTablet ? "1fr" : "1fr 440px";
  const topGridGap = isMobile ? 48 : isTablet ? 48 : 80;
  const cardsGridCols = isMobile ? "1fr" : "1fr 1fr";
  const list = data ?? fallbackServices;

  return (
    <section
      id="services"
      style={{
        padding: sectionPadding,
        background: "var(--bg-0)",
        transition: "background 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: containerPadding }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: topGridCols,
            gap: topGridGap,
            alignItems: "end",
            marginBottom: 72,
          }}
        >
          <div>
            <Reveal>
              <SLabel n="02">Services</SLabel>
            </Reveal>
            <Reveal>
              <h2
                style={{
                  fontFamily: "var(--font-playfair),serif",
                  fontWeight: 400,
                  fontSize: "clamp(2.4rem,4.5vw,4rem)",
                  lineHeight: 1.1,
                  color: "var(--text-1)",
                }}
              >
                Three ways to
                <br />
                <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                  engage deeply.
                </em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p
              style={{
                fontFamily: "var(--font-inter),sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.72,
                color: "var(--text-2)",
              }}
            >
              We have three engagement models, each designed for a different
              stage of architectural need. All fixed-fee. None hourly. All
              outcome-committed from day one.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: cardsGridCols,
              gap: 1,
              background: "var(--border)",
            }}
          >
            {list.map((s, i) => {
              const desc = "description" in s ? (s.description ?? s.title) : (s as { desc: string }).desc;
              const isFlagship = (s as { flagship?: boolean }).flagship ?? s.tier?.includes("II");
              return (
                <ServiceCard
                  key={(s as { _id?: string })._id ?? s.title ?? i}
                  tier={s.tier}
                  title={s.title}
                  desc={desc}
                  price={s.price}
                  per={s.per}
                  tags={s.tags}
                  flagship={isFlagship}
                />
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCard({
  tier,
  title,
  desc,
  price,
  per,
  tags,
  flagship,
}: {
  tier: string;
  title: string;
  desc: string;
  price: string;
  per: string;
  tags: string[];
  flagship: boolean;
}) {
  return (
    <div
      style={{
        background: flagship ? "var(--bg-card)" : "var(--bg-0)",
        border: flagship ? "1px solid var(--border-gold)" : "none",
        padding: "48px 44px",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s ease",
      }}
    >
      {flagship && (
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            fontFamily: "var(--font-jetbrains),monospace",
            fontSize: "0.56rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
            padding: "4px 10px",
            border: "1px solid var(--border-gold)",
          }}
        >
          Flagship
        </div>
      )}
      <div
        style={{
          fontFamily: "var(--font-jetbrains),monospace",
          fontSize: "0.58rem",
          letterSpacing: "0.26em",
          textTransform: "uppercase",
          color: "var(--gold-lo)",
          marginBottom: 18,
        }}
      >
        {tier}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-playfair),serif",
          fontSize: "1.6rem",
          fontWeight: 400,
          lineHeight: 1.2,
          color: "var(--text-1)",
          marginBottom: 16,
          whiteSpace: "pre-line",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-inter),sans-serif",
          fontSize: "0.88rem",
          lineHeight: 1.65,
          color: "var(--text-2)",
          marginBottom: 28,
        }}
      >
        {desc}
      </p>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span
          style={{
            fontFamily: "var(--font-playfair),serif",
            fontSize: "1.15rem",
            fontWeight: 400,
            color: "var(--gold)",
          }}
        >
          {price}
        </span>
        <span
          style={{
            fontFamily: "var(--font-jetbrains),monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-3)",
          }}
        >
          {per}
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 22 }}>
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}
