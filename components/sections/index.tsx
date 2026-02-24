"use client";

import { useState, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { urlFor } from "@/sanity/image";
/* Shared scroll reveal wrapper */
import {
  Reveal,
  BtnGold,
  BtnText,
  SLabel,
  ArrowRight,
  Tag,
} from "@/components/ui";
import { MarqueeTile } from "@/components/ui/MarqueeTile";

function useBreakpoint() {
  const [bp, setBp] = useState<"mobile" | "tablet" | "desktop" | null>(null);

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

/* ══════════════════════════════════════════════
   HERO
══════════════════════════════════════════════ */
export function Hero() {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const isMobileOrTablet = bp === "mobile" || bp === "tablet";
  const containerPadding = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px";
  const sectionPadding = isMobile ? "140px 0 100px" : isTablet ? "100px 0" : "160px 0 120px";

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        padding: sectionPadding,
        background: "var(--bg-0)",
        transition: "background 0.4s ease",
        overflow: "hidden",
      }}
    >
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.4,
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div
        className="hero-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(4,6,12,0.72) 0%, rgba(4,6,12,0.45) 50%, rgba(4,6,12,0.85) 100%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1220,
          margin: "0 auto",
          padding: containerPadding,
        }}
      >
        <Reveal>
          <SLabel n="00">Abasin Co.</SLabel>
        </Reveal>
        <Reveal>
          <h1
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 400,
              fontSize: isMobile ? "clamp(2.8rem, 8vw, 4rem)" : "clamp(3rem, 6vw, 5.5rem)",
              lineHeight: 1.05,
              color: "var(--text-1)",
              marginTop: 16,
              marginBottom: 28,
            }}
          >
            Architecture at the
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              inflection point.
            </em>
          </h1>
        </Reveal>
        <Reveal>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "1.15rem",
              lineHeight: 1.7,
              color: "var(--text-2)",
              maxWidth: 520,
              marginBottom: 40,
            }}
          >
            We design and deliver the systems beneath everything that matters,
            from regulated AI to scientific platforms. Fixed-fee.
            Outcome-committed.
          </p>
        </Reveal>
        <Reveal>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? 12 : 0,
              alignItems: isMobile ? "stretch" : "center",
            }}
          >
            <BtnGold href="#contact" style={isMobile ? { width: "100%", justifyContent: "center" } : undefined}>
              Start a conversation <ArrowRight />
            </BtnGold>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   MARQUEE
══════════════════════════════════════════════ */
const marqueeClients = [
  { name: "AAA Insurance", logoKey: "aaa" },
  { name: "Cisco Systems", logoKey: "cisco" },
  { name: "Gap Inc", logoKey: "gap" },
  { name: "Safeway", logoKey: "safeway" },
  { name: "Albertsons", logoKey: "albertsons" },
  { name: "Resilience Cyber", logoKey: "resilience" },
  { name: "Intertrust", logoKey: "intertrust" },
  { name: "TiVo", logoKey: "tivo" },
  { name: "Geminus.ai", logoKey: "geminus" },
  { name: "Xenio Systems", logoKey: "xenio" },
  { name: "Arceo.ai", logoKey: "arceo" },
  { name: "Quriegen", logoKey: "quriegen" },
];

export function Marquee() {
  const doubled = [...marqueeClients, ...marqueeClients];
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isLight = mounted && resolvedTheme === "light";
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const tilePadding = isMobile ? "0 32px" : "0 52px";

  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "32px 0",
        background: "var(--bg-1)",
        transition: "background 0.4s ease",
        overflow: "hidden",
      }}
    >
      {/* Label */}
      <div
        style={{
          textAlign: "center",
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: "0.54rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--text-3)",
          marginBottom: 28,
        }}
      >
        Client History
      </div>

      {/* Scrolling track */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "max-content",
          animation: "marquee 48s linear infinite",
          willChange: "transform",
        }}
      >
        {doubled.map((client, i) =>
          client.logoKey === "quriegen" ? (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: tilePadding,
                minWidth: isMobile ? 100 : 120,
                flexShrink: 0,
                opacity: 0.85,
                transition: "opacity 0.3s ease",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/clientLogos/logo-quriegen.png"
                  alt="Quriegen"
                  style={{
                    height: "28px",
                    width: "auto",
                    opacity: 0.85,
                    filter: isLight ? "brightness(0) invert(0.15)" : "brightness(1.1)",
                    verticalAlign: "middle",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: isMobile ? "0.65rem" : "0.58rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                  whiteSpace: "nowrap",
                }}
              >
                {client.name}
              </span>
            </div>
          ) : (
            <MarqueeTile key={i} name={client.name} logoKey={client.logoKey} />
          )
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   PHILOSOPHY
══════════════════════════════════════════════ */
const principles = [
  {
    n: "01",
    title: "Architecture First",
    body: "Every engagement begins with deep architectural assessment. We don't write code before we understand the system boundary, failure modes, and five-year trajectory.",
  },
  {
    n: "02",
    title: "Delivery Credibility",
    body: "We have production deployments across eleven industries. We advise from experience, not theory. Shipped at scale in regulated environments where uptime is non-negotiable.",
  },
  {
    n: "03",
    title: "Outcome-Based Pricing",
    body: "Fixed-fee milestones. Defined deliverables. We price on value, not hours. If you're asking for an hourly rate, we'll tell you directly: we're not the right fit.",
  },
  {
    n: "04",
    title: "High-Trust Only",
    body: "We take fewer clients. Every engagement gets the full depth of senior architectural leadership. We build relationships that last years, not projects that end at handoff.",
  },
];

export function Philosophy() {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const containerPadding = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px";
  const sectionPadding = isMobile ? "72px 0" : isTablet ? "100px 0" : "140px 0";
  const gridCols = isMobile ? "1fr" : "1fr 1fr";
  const gridGap = isMobile || isTablet ? 48 : 100;

  return (
    <section
      id="philosophy"
      style={{
        padding: sectionPadding,
        background: "var(--bg-1)",
        transition: "background 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: containerPadding }}>
        <Reveal>
          <SLabel n="01">Philosophy</SLabel>
        </Reveal>
        <Reveal>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 400,
              fontSize: "clamp(2.4rem,4.5vw,4rem)",
              lineHeight: 1.1,
              color: "var(--text-1)",
            }}
          >
            Architecture is a<br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              consequence
            </em>{" "}
            of conviction.
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridCols,
            gap: gridGap,
            marginTop: 72,
            alignItems: "start",
          }}
        >
          {/* Left */}
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-inter),sans-serif",
                fontSize: "1.3rem",
                fontWeight: 400,
                lineHeight: 1.75,
                color: "var(--text-2)",
                marginBottom: 24,
              }}
            >
              Most technology transformations fail not because of bad strategy. It fails because the{" "}
              <strong style={{ color: "var(--text-1)", fontWeight: 500 }}>
                architecture doesn&apos;t survive contact with reality.
              </strong>
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter),sans-serif",
                fontSize: "1.3rem",
                lineHeight: 1.75,
                color: "var(--text-2)",
                marginBottom: 24,
              }}
            >
              We exist at the inflection point between &ldquo;AI strategy
              deck&rdquo; and{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                &ldquo;production AI system.&rdquo;
              </em>
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter),sans-serif",
                fontSize: "1.3rem",
                lineHeight: 1.75,
                color: "var(--text-2)",
                marginBottom: 32,
              }}
            >
              We are not a dev shop. We don&apos;t sell slide decks. We are the
              firm you engage when the stakes are too high for generalists.
            </p>
            {/* Terminal */}
            <div
              style={{
                background: "var(--bg-0)",
                border: "1px solid var(--border)",
                transition: "background 0.4s ease",
              }}
            >
              <div
                style={{
                  height: 32,
                  background: "var(--bg-2)",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 14px",
                  gap: 7,
                  transition: "background 0.4s ease",
                }}
              >
                {[
                  ["#ff5f57", "r"],
                  ["#febc2e", "y"],
                  ["#28c840", "g"],
                ].map(([c, k]) => (
                  <div
                    key={k}
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      background: c,
                    }}
                  />
                ))}
              </div>
              <div style={{ padding: "20px 22px" }}>
                {[
                  { cmd: true, text: "// We reject three things" },
                  { cmd: false, text: '$ disqualify --type "hourly billing"' },
                  {
                    cmd: false,
                    text: '$ disqualify --type "slides without delivery"',
                  },
                  {
                    cmd: false,
                    text: '$ disqualify --type "generic software shops"',
                  },
                  { cmd: true, text: "// We commit to one thing" },
                  {
                    cmd: false,
                    text: '$ commit --to "mission-critical outcomes"',
                    blink: true,
                  },
                ].map((l, i) => (
                  <span
                    key={i}
                    style={{
                      display: "block",
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "0.75rem",
                      lineHeight: 2,
                      color: l.cmd ? "var(--text-3)" : "var(--gold)",
                      opacity: l.cmd ? 0.6 : 1,
                    }}
                  >
                    {l.text}
                    {l.blink && (
                      <span
                        style={{
                          display: "inline-block",
                          width: 7,
                          height: 13,
                          background: "var(--gold)",
                          verticalAlign: "text-bottom",
                          marginLeft: 4,
                          animation: "blink 1s step-end infinite",
                        }}
                      />
                    )}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — principles */}
          <Reveal delay={0.2}>
            {principles.map(({ n, title, body }) => (
              <div
                key={n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "36px 1fr",
                  gap: 20,
                  padding: "28px 0",
                  borderBottom: "1px solid var(--border)",
                }}
                className="principle-row"
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "0.62rem",
                    color: "var(--gold-lo)",
                    letterSpacing: "0.08em",
                    paddingTop: 3,
                  }}
                >
                  {n}
                </span>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-inter),sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--text-1)",
                      marginBottom: 9,
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-inter),sans-serif",
                      fontSize: "0.88rem",
                      lineHeight: 1.65,
                      color: "var(--text-2)",
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SERVICES
══════════════════════════════════════════════ */
type ServiceData = {
  _id?: string
  tier: string
  title: string
  description?: string
  desc?: string
  price: string
  per: string
  tags: string[]
  flagship?: boolean
}
// FALLBACK — live data from Sanity. Only used if Sanity fetch fails.
const services = [
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
  const list = data ?? services;

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

/* ══════════════════════════════════════════════
   INDUSTRIES
══════════════════════════════════════════════ */
type IndustryData = {
  _id?: string
  name: string
  companies?: string
  cos?: string
  badge: string
  logo?: string | null
}
// FALLBACK — live data from Sanity. Only used if Sanity fetch fails.
const industries = [
  {
    name: "Insurance & Risk",
    cos: "AAA · Resilience Cyber",
    badge: "Regulated AI",
    logo: null as string | null,
  },
  {
    name: "Pharma & Bioinformatics",
    cos: "Quriegen · Single-cell · Multi-omics",
    badge: "Scientific Data",
    logo: null as string | null,
  },
  {
    name: "Retail & Commerce",
    cos: "Gap Inc · Safeway · Albertsons",
    badge: "High-Scale",
    logo: null as string | null,
  },
  {
    name: "Xenio Systems",
    cos: "IoT · Indoor Positioning · Retail",
    badge: "IoT · Spatial Data",
    logo: null as string | null,
  },
  {
    name: "Enterprise Technology",
    cos: "Cisco Systems",
    badge: "Internal Platforms",
    logo: null as string | null,
  },
  {
    name: "Energy & Infrastructure",
    cos: "Intertrust · Wind · EV",
    badge: "Infrastructure",
    logo: null as string | null,
  },
  {
    name: "Geminus.ai",
    cos: "Industrial AI · Digital Twins · Energy",
    badge: "Industrial AI",
    logo: null as string | null,
  },
  {
    name: "Cyber Security",
    cos: "Risk Analytics · Compliance",
    badge: "Compliance",
    logo: null as string | null,
  },
  {
    name: "Resilience",
    cos: "Formerly Arceo.ai · Cyber Insurance · Risk Quantification",
    badge: "Cyber Insurance",
    logo: null as string | null,
  },
  {
    name: "Media & Consumer",
    cos: "TiVo · Consumer-Scale",
    badge: "Performance",
    logo: null as string | null,
  },
  {
    name: "Scientific Research",
    cos: "Quriegen · Genomics · Analytics",
    badge: "Data Pipelines",
    logo: null as string | null,
  },
];

export function Industries({ data }: { data: IndustryData[] | null }) {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const containerPadding = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px";
  const sectionPadding = isMobile ? "72px 0" : isTablet ? "100px 0" : "160px 0";
  const gridCols = isMobile || isTablet ? "1fr" : "360px 1fr";
  const gridGap = isMobile ? 32 : isTablet ? 48 : 100;
  const list = data ?? industries;

  return (
    <section
      id="industries"
      style={{
        padding: sectionPadding,
        background: "var(--bg-1)",
        transition: "background 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: containerPadding }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridCols,
            gap: gridGap,
            marginTop: 0,
            alignItems: "start",
          }}
        >
          <Reveal style={isMobile || isTablet ? undefined : { position: "sticky", top: "calc(72px + 40px)" }}>
            <SLabel n="03">Expertise</SLabel>
            <h2
              style={{
                fontFamily: "var(--font-playfair),serif",
                fontWeight: 400,
                fontSize: "clamp(2.8rem,5.5vw,5rem)",
                lineHeight: 1.07,
                color: "var(--text-1)",
              }}
            >
              Eleven industries.
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                One pattern.
              </em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter),sans-serif",
                fontSize: "0.92rem",
                lineHeight: 1.72,
                color: "var(--text-2)",
                margin: "22px 0 32px",
              }}
            >
              Complex data. High stakes. Regulated environments. Cross-industry
              pattern recognition across eleven industries is a structural moat. Solutions from one domain that solve problems in another before
              your competitors even frame the question.
            </p>
            <BtnText href="#contact">Discuss your domain</BtnText>
          </Reveal>
          <Reveal delay={0.15}>
            {list.map((ind, i) => (
              <IndRow
                key={(ind as { _id?: string })._id ?? ind.name ?? i}
                name={ind.name}
                cos={("companies" in ind ? ind.companies : (ind as { cos?: string }).cos) ?? ""}
                badge={ind.badge}
                logo={"logo" in ind ? (ind as { logo: string | null }).logo : undefined}
                first={i === 0}
                isMobile={isMobile}
              />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function IndRow({
  name,
  cos,
  badge,
  first,
  logo,
  isMobile,
}: {
  name: string;
  cos: string;
  badge: string;
  first?: boolean;
  logo?: string | null;
  isMobile?: boolean;
}) {
  const [imgError, setImgError] = useState(false);
  const gridCols = isMobile
    ? logo
      ? "48px 1fr auto"
      : "1fr auto"
    : logo
      ? "48px 1fr auto auto"
      : "1fr auto auto";
  const gap = isMobile ? 16 : 28;

  return (
    <div
      className="industries-row-hover"
      style={{
        display: "grid",
        gridTemplateColumns: gridCols,
        alignItems: "center",
        gap,
        padding: "30px 0",
        borderBottom: "1px solid var(--border)",
        borderTop: first ? "1px solid var(--border)" : "none",
        transition: "padding 0.25s ease",
      }}
    >
      {logo && !imgError && (
        <div
          style={{
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg-2)",
            border: "1px solid var(--border)",
            borderRadius: 4,
            overflow: "hidden",
            flexShrink: 0,
            padding: 4,
          }}
        >
          <Image
            src={logo}
            alt={name}
            width={28}
            height={28}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              filter: "var(--logo-filter)",
            }}
            onError={() => setImgError(true)}
            unoptimized
          />
        </div>
      )}
      {logo && imgError && (
        <div style={{ width: 36, height: 36, flexShrink: 0 }} />
      )}
      <span
        style={{
          fontFamily: "var(--font-inter),sans-serif",
          fontSize: "0.82rem",
          fontWeight: 500,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "var(--text-2)",
        }}
      >
        {name}
      </span>
      <span
        style={{
          fontFamily: "var(--font-jetbrains),monospace",
          fontSize: "0.68rem",
          color: "var(--text-3)",
        }}
      >
        {cos}
      </span>
      {!isMobile && (
        <span
          style={{
            fontFamily: "var(--font-jetbrains),monospace",
            fontSize: "0.56rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "4px 10px",
            background: "var(--gold-glow)",
            color: "var(--gold-lo)",
            border: "1px solid var(--border-gold)",
            whiteSpace: "nowrap",
          }}
        >
          {badge}
        </span>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════
   POV
══════════════════════════════════════════════ */
const povItems = [
  {
    n: "I",
    title: "AI transformations fail at the data layer, not the model layer.",
    body: 'Every enterprise CTO is under board pressure to "do AI." Most don\'t realize their data architecture is the bottleneck. You cannot LLM your way out of a broken data foundation. We fix the foundation first.',
  },
  {
    n: "II",
    title: "Regulated industries need architecture, not just compliance.",
    body: "Compliance is table stakes. The real question: does your architecture allow you to move fast while staying compliant? We design systems where regulatory constraints become structural advantages, not speed limiters.",
  },
  {
    n: "III",
    title:
      "The platform you build in year one is the ceiling you hit in year five.",
    body: "Architectural debt compounds faster than technical debt. We've seen it across eleven industries. The firms that dominate their markets in five years are making the right architectural bets today.",
  },
];

export function Pov() {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const containerPadding = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px";
  const sectionPadding = isMobile ? "72px 0" : isTablet ? "100px 0" : "140px 0";
  const gridCols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3,1fr)";

  return (
    <section
      id="pov"
      style={{
        padding: sectionPadding,
        background: "var(--bg-0)",
        transition: "background 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: containerPadding }}>
        <Reveal>
          <SLabel n="04">Point of View</SLabel>
        </Reveal>
        <Reveal>
          <h2
            style={{
              fontFamily: "var(--font-playfair),serif",
              fontWeight: 400,
              fontSize: "clamp(2.4rem,4.5vw,4rem)",
              lineHeight: 1.1,
              color: "var(--text-1)",
              marginBottom: 72,
            }}
          >
            Opinions worth
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              paying for.
            </em>
          </h2>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridCols,
            gap: 1,
            background: "var(--border)",
          }}
        >
          {povItems.map(({ n, title, body }, i) => (
            <Reveal key={n} delay={i * 0.1}>
              <div
                style={{
                  background: "var(--bg-0)",
                  padding: "44px 38px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "background 0.25s ease",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 20,
                    fontFamily: "var(--font-playfair),serif",
                    fontSize: "5.5rem",
                    fontWeight: 400,
                    lineHeight: 1,
                    color: "var(--gold-glow)",
                    pointerEvents: "none",
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    width: 28,
                    height: 1,
                    background: "var(--gold)",
                    marginBottom: 20,
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-playfair),serif",
                    fontSize: "1.35rem",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    color: "var(--text-1)",
                    marginBottom: 16,
                    position: "relative",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter),sans-serif",
                    fontSize: "0.86rem",
                    lineHeight: 1.68,
                    color: "var(--text-2)",
                    position: "relative",
                  }}
                >
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   PROCESS
══════════════════════════════════════════════ */
const steps = [
  {
    n: "01",
    title: "Discovery & Diagnosis",
    dur: "Week 1–2",
    body: "Deep architectural assessment of your current state, constraints, team capabilities, and business outcomes that matter most.",
  },
  {
    n: "02",
    title: "Architecture Design",
    dur: "Week 2–4",
    body: "Target state architecture, technology decisions, risk register, and ADR package. All decision rationale documented and defensible.",
  },
  {
    n: "03",
    title: "Milestone Delivery",
    dur: "Month 1–12",
    body: "Phased build with defined deliverables at each milestone gate. No scope drift. No surprise invoices. Outcome-committed.",
  },
  {
    n: "04",
    title: "Enable & Exit",
    dur: "Final Phase",
    body: "Full knowledge transfer, documentation, and team enablement. We design ourselves out. Your team owns what we built.",
  },
];

export function Process() {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const containerPadding = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px";
  const sectionPadding = isMobile ? "72px 0" : isTablet ? "100px 0" : "140px 0";
  const gridCols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4,1fr)";

  return (
    <section
      id="process"
      style={{
        padding: sectionPadding,
        background: "var(--bg-1)",
        transition: "background 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: containerPadding }}>
        <Reveal>
          <SLabel n="05">Process</SLabel>
        </Reveal>
        <Reveal>
          <h2
            style={{
              fontFamily: "var(--font-playfair),serif",
              fontWeight: 400,
              fontSize: "clamp(2.4rem,4.5vw,4rem)",
              lineHeight: 1.1,
              color: "var(--text-1)",
              marginBottom: 72,
            }}
          >
            From ambiguity
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              to production.
            </em>
          </h2>
        </Reveal>
        <Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: gridCols,
              gap: 1,
              background: "var(--border)",
            }}
          >
            {steps.map(({ n, title, dur, body }) => (
              <div
                key={n}
                style={{
                  background: "var(--bg-1)",
                  padding: "44px 36px",
                  transition: "background 0.25s ease",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 28,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "0.62rem",
                      color: "var(--gold)",
                    }}
                  >
                    {n}
                  </span>
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-inter),sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: "var(--text-1)",
                    marginBottom: 12,
                  }}
                >
                  {title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-inter),sans-serif",
                    fontSize: "0.86rem",
                    lineHeight: 1.65,
                    color: "var(--text-2)",
                  }}
                >
                  {body}
                </p>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--gold-lo)",
                    marginTop: 18,
                  }}
                >
                  {dur}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FOUNDER
══════════════════════════════════════════════ */
type FounderData = {
  name: string
  title: string
  credentials: string
  experience: string
  bio1: string
  bio2: string
  bio3: string
  skills: string[]
  photo?: unknown
}
// FALLBACK — live data from Sanity. Only used if Sanity fetch fails.
const chips = [
  "AAA",
  "Cisco",
  "Gap Inc",
  "Safeway",
  "Albertsons",
  "Resilience",
  "Intertrust",
  "TiVo",
  "Geminus.ai",
  "Xenio",
  "Arceo.ai",
  "Quriegen",
]

const defaultBio1 =
  "I've been the senior architect in the room when a platform fails at scale, when a compliance audit surfaces a structural flaw, when a data pipeline collapses under scientific data volumes nobody anticipated. I've built the systems that didn't fail, and diagnosed the ones that did."
const defaultBio2 =
  "Across eleven industries, the pattern is always the same: architectural decisions made in the first six months define the ceiling for the next five years. Abasin Co. exists to give more organizations access to the level of architectural thinking that previously existed only inside the largest firms."
const defaultBio3 =
  "I take a small number of engagements per year. Every client works directly with me."

export function Founder({ data }: { data: FounderData | null }) {
  const f = data
  const name = f?.name ?? "Ash Khan"
  const founderTitle = f?.title ?? "Founder & Principal Architect"
  const credentials = f?.credentials ?? "MSc · MS Computer Science"
  const experience = f?.experience ?? "20+ Years · 11 Industries · F500 Clients"
  const bio1 = f?.bio1 ?? defaultBio1
  const bio2 = f?.bio2 ?? defaultBio2
  const bio3 = f?.bio3 ?? defaultBio3
  const skillChips = f?.skills ?? chips

  const bp = useBreakpoint()
  const isMobile = bp === "mobile"
  const isTablet = bp === "tablet"
  const containerPadding = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px"
  const sectionPadding = isMobile ? "72px 0" : isTablet ? "100px 0" : "140px 0"
  const gridCols = isMobile ? "1fr" : "1fr 1fr"
  const gridGap = isMobile || isTablet ? 48 : 100

  return (
    <section
      id="founder"
      style={{
        padding: sectionPadding,
        background: "var(--bg-0)",
        transition: "background 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: containerPadding }}>
        <Reveal>
          <SLabel n="06">The Founder</SLabel>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridCols,
            gap: gridGap,
            marginTop: 72,
            alignItems: "center",
          }}
        >
          {/* Founder portrait — first on mobile so image above text */}
          <Reveal>
            <div
              style={{
                position: "relative",
                width: "100%",
                ...(isMobile ? { maxHeight: 420, aspectRatio: "3 / 4" } : { aspectRatio: "3 / 4" }),
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              {f?.photo ? (
                <Image
                  src={urlFor(f.photo).width(600).height(800).url()}
                  alt={name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <Image
                  src="/images/founder.png"
                  alt={`${name}, Founder, Abasin Co.`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>
            <div style={{ marginTop: 24 }}>
              <div
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "2rem",
                  fontWeight: 400,
                  lineHeight: 1.25,
                  color: "var(--text-1)",
                  marginBottom: 6,
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  color: "var(--gold)",
                  marginBottom: 14,
                }}
              >
                {founderTitle}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-2)",
                  marginBottom: 6,
                }}
              >
                {credentials}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "0.60rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                }}
              >
                {experience}
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal delay={0.2}>
            <h3
              style={{
                fontFamily: "var(--font-playfair),serif",
                fontSize: "2rem",
                fontWeight: 400,
                lineHeight: 1.25,
                color: "var(--text-1)",
                marginBottom: 28,
              }}
            >
              20 years building the systems
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                beneath
              </em>{" "}
              everything that matters.
            </h3>
            <p
              style={{
                fontFamily: "var(--font-inter),sans-serif",
                fontSize: "0.92rem",
                lineHeight: 1.75,
                color: "var(--text-2)",
                marginBottom: 18,
              }}
            >
              {bio1}
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter),sans-serif",
                fontSize: "0.92rem",
                lineHeight: 1.75,
                color: "var(--text-2)",
                marginBottom: 18,
              }}
            >
              {bio2}
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter),sans-serif",
                fontSize: "0.92rem",
                lineHeight: 1.75,
                color: "var(--text-2)",
              }}
            >
              {bio3}
            </p>
            <div
              style={{
                width: 48,
                height: 1,
                background: "var(--gold)",
                margin: "28px 0",
              }}
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
              {skillChips.map((c) => (
                <span
                  key={c}
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "7px 13px",
                    border: "1px solid var(--border)",
                    color: "var(--text-3)",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   ENGAGE
══════════════════════════════════════════════ */
const rules = [
  {
    icon: "I",
    title: "You need an outcome, not a vendor",
    body: "Our best clients come with a hard problem and the authority to act on the solution. They don't need us to manage up. They need us to think deeply and deliver precisely.",
  },
  {
    icon: "II",
    title: "You operate in a complex domain",
    body: "Regulated data. Scientific scale. Enterprise compliance. High-stakes infrastructure. The more complex your domain, the more our cross-industry pattern recognition compounds.",
  },
  {
    icon: "III",
    title: "You're investing, not spending",
    body: "Our engagements start at $25K. Clients who see architecture as an investment, not a cost center, are the clients we do our best work with.",
  },
  {
    icon: "IV",
    title: "You want a long-term partner",
    body: "The firms that benefit most keep us close: retainer, review board seat, or successive platform investments.",
  },
];
const disqualifiers = [
  "You're seeking the lowest hourly rate",
  "You need staff augmentation",
  "No clear decision-making authority",
  "You want slides without delivery",
];

export function Engage() {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const containerPadding = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px";
  const sectionPadding = isMobile ? "72px 0" : isTablet ? "100px 0" : "140px 0";
  const mainGridCols = isMobile || isTablet ? "1fr" : "1fr 440px";
  const mainGridGap = isMobile ? 32 : isTablet ? 48 : 100;
  const itemGridCols = isMobile ? "40px 1fr" : "56px 1fr";

  return (
    <section
      id="engage"
      style={{
        padding: sectionPadding,
        background: "var(--bg-1)",
        transition: "background 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: containerPadding }}>
        <Reveal>
          <SLabel n="07">Engagement</SLabel>
        </Reveal>
        <Reveal>
          <h2
            style={{
              fontFamily: "var(--font-playfair),serif",
              fontWeight: 400,
              fontSize: "clamp(2.4rem,4.5vw,4rem)",
              lineHeight: 1.1,
              color: "var(--text-1)",
              marginBottom: 72,
            }}
          >
            We are selective.
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              You should be too.
            </em>
          </h2>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mainGridCols,
            gap: mainGridGap,
            alignItems: "start",
          }}
        >
          <Reveal>
            {rules.map(({ icon, title, body }, i) => (
              <div
                key={icon}
                style={{
                  display: "grid",
                  gridTemplateColumns: itemGridCols,
                  gap: 22,
                  padding: "30px 0",
                  borderBottom: "1px solid var(--border)",
                  borderTop: i === 0 ? "1px solid var(--border)" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair),serif",
                    fontSize: "1.6rem",
                    fontWeight: 400,
                    color: "var(--gold)",
                    lineHeight: 1,
                    paddingTop: 2,
                  }}
                >
                  {icon}
                </span>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-inter),sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--text-1)",
                      marginBottom: 9,
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-inter),sans-serif",
                      fontSize: "0.88rem",
                      lineHeight: 1.65,
                      color: "var(--text-2)",
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.2}>
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                padding: "44px 40px",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.4s ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background:
                    "linear-gradient(90deg,transparent,var(--gold),transparent)",
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-playfair),serif",
                  fontSize: "1.7rem",
                  fontWeight: 400,
                  lineHeight: 1.25,
                  color: "var(--text-1)",
                  marginBottom: 14,
                }}
              >
                Start with a<br />
                <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                  conversation.
                </em>
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter),sans-serif",
                  fontSize: "0.88rem",
                  lineHeight: 1.65,
                  color: "var(--text-2)",
                  marginBottom: 32,
                }}
              >
                30 minutes. No pitch, no proposal, no sales process. We listen
                to your situation and tell you directly whether we can help.
              </p>
              <BtnGold
                href="https://cal.com/ash-khan"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Request a Call <ArrowRight />
              </BtnGold>
              <div
                style={{
                  marginTop: 28,
                  paddingTop: 24,
                  borderTop: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--text-3)",
                    marginBottom: 13,
                  }}
                >
                  Not right for us if:
                </div>
                {disqualifiers.map((d) => (
                  <div
                    key={d}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontFamily: "var(--font-inter),sans-serif",
                      fontSize: "0.84rem",
                      color: "var(--text-3)",
                      marginBottom: 8,
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        color: "#c44",
                        fontSize: "0.75rem",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      ×
                    </span>
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CONTACT
══════════════════════════════════════════════ */
function ContactCard({
  icon,
  heading,
  body,
  buttonLabel,
  href,
  primary,
  target,
}: {
  icon: ReactNode;
  heading: string;
  body: string;
  buttonLabel: ReactNode;
  href: string;
  primary: boolean;
  target?: string;
}) {
  const [cardHov, setCardHov] = useState(false);
  const [btnHov, setBtnHov] = useState(false);
  const isGold = primary;
  return (
    <div
      onMouseEnter={() => setCardHov(true)}
      onMouseLeave={() => setCardHov(false)}
      style={{
        background: isGold ? "rgba(196,158,78,0.04)" : "var(--bg-card)",
        border: `1px solid ${isGold ? "var(--gold)" : "var(--border)"}`,
        borderRadius: 4,
        padding: 36,
        transition: "border-color 0.2s ease, transform 0.2s ease",
        transform: cardHov ? "translateY(-2px)" : "none",
        borderColor: cardHov && isGold ? "var(--gold-hi)" : cardHov ? "var(--text-3)" : undefined,
      }}
    >
      <div style={{ marginBottom: 20 }}>{icon}</div>
      <h3
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "1.35rem",
          fontWeight: 400,
          color: "var(--text-1)",
          marginBottom: 12,
          lineHeight: 1.25,
        }}
      >
        {heading}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.88rem",
          lineHeight: 1.65,
          color: "var(--text-2)",
          marginBottom: 24,
        }}
      >
        {body}
      </p>
      {isGold ? (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          onMouseEnter={() => setBtnHov(true)}
          onMouseLeave={() => setBtnHov(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "16px 36px",
            background: btnHov ? "var(--gold-hi)" : "var(--gold)",
            color: "var(--text-inv)",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            textDecoration: "none",
            transform: btnHov ? "translateY(-2px)" : "none",
            boxShadow: btnHov ? "var(--shadow-gold)" : "none",
            transition: "all 0.25s ease",
          }}
        >
          {buttonLabel} <ArrowRight />
        </a>
      ) : (
        <a
          href={href}
          onMouseEnter={() => setBtnHov(true)}
          onMouseLeave={() => setBtnHov(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: btnHov ? "var(--text-1)" : "var(--text-2)",
            textDecoration: "none",
            border: "1px solid var(--border)",
            padding: "12px 24px",
            borderRadius: 0,
            transition: "color 0.2s ease, border-color 0.2s ease",
            borderColor: btnHov ? "var(--text-2)" : "var(--border)",
          }}
        >
          {buttonLabel}
        </a>
      )}
    </div>
  );
}

type FormStatus = "idle" | "sending" | "sent" | "error";

const inputBase = {
  width: "100%",
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  color: "var(--text-1)",
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: "0.88rem",
  padding: "12px 16px",
  borderRadius: 4,
  outline: "none",
  transition: "border-color 0.2s ease",
} as const;

function ContactFormBlock() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xpqjynkg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, company, message }),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const disabled = status === "sending";

  return (
    <>
      <span
        style={{
          display: "block",
          marginTop: 24,
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: "0.62rem",
          color: "var(--text-3)",
        }}
      >
        or
      </span>
      <div style={{ marginTop: 40, maxWidth: 480 }}>
        {status === "sent" ? (
          <div>
            <div style={{ marginBottom: 16, color: "var(--gold)", fontSize: "1.5rem" }}>✓</div>
            <h3
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "1.35rem",
                fontWeight: 400,
                color: "var(--text-1)",
                marginBottom: 12,
                lineHeight: 1.25,
              }}
            >
              Message received.
            </h3>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.88rem",
                lineHeight: 1.65,
                color: "var(--text-2)",
                marginBottom: 20,
              }}
            >
              We&apos;ll respond within 48 hours. In the meantime, feel free to book a call directly.
            </p>
            <a
              href="https://cal.com/ash-khan"
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--gold)",
                textDecoration: "none",
                borderBottom: "1px solid transparent",
                paddingBottom: 2,
              }}
            >
              Book on Cal.com
            </a>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div style={{ marginBottom: 20 }}>
              <label
                htmlFor="contact-name"
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                  marginBottom: 8,
                  display: "block",
                }}
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={disabled}
                style={{
                  ...inputBase,
                  boxShadow: "none",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(196,158,78,0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label
                htmlFor="contact-company"
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                  marginBottom: 8,
                  display: "block",
                }}
              >
                Company
              </label>
              <input
                id="contact-company"
                type="text"
                name="company"
                required
                placeholder="Company or organisation"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                disabled={disabled}
                style={{
                  ...inputBase,
                  boxShadow: "none",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(196,158,78,0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label
                htmlFor="contact-message"
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                  marginBottom: 8,
                  display: "block",
                }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="What are you building and what's blocking you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={disabled}
                style={{
                  ...inputBase,
                  minHeight: 120,
                  resize: "vertical",
                  boxShadow: "none",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(196,158,78,0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>
            <button
              type="submit"
              disabled={disabled}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "16px 36px",
                background: disabled ? "var(--gold)" : "var(--gold)",
                color: "var(--text-inv)",
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                border: "none",
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.5 : 1,
                transition: "all 0.25s ease",
              }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "error" && (
              <p
                style={{
                  marginTop: 12,
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.88rem",
                  color: "#c44",
                }}
              >
                Something went wrong. Please try again or book a call directly.
              </p>
            )}
          </form>
        )}
      </div>
    </>
  );
}

export function Contact() {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const containerPadding = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px";
  const sectionPadding = isMobile ? "72px 0" : isTablet ? "100px 0" : "140px 0";
  const gridCols = isMobile ? "1fr" : "1fr 1fr";
  const gridGap = isMobile ? 32 : isTablet ? 48 : 100;

  return (
    <section
      id="contact"
      style={{
        padding: sectionPadding,
        background: "var(--bg-0)",
        transition: "background 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1220,
          margin: "0 auto",
          padding: containerPadding,
        }}
      >
        <div
          className="contact-section-grid"
          style={{
            display: "grid",
            gridTemplateColumns: gridCols,
            gap: gridGap,
            alignItems: "start",
            marginTop: 0,
          }}
        >
          {/* Left column — context and copy */}
          <Reveal>
            <div
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 24,
              }}
            >
              Start a Conversation
            </div>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 400,
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                lineHeight: 1.07,
                color: "var(--text-1)",
                marginBottom: 28,
              }}
            >
              If the architecture matters,
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>let&apos;s talk.</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.98rem",
                lineHeight: 1.72,
                color: "var(--text-2)",
                marginBottom: 32,
              }}
            >
              We take a small number of engagements per year. If you&apos;re
              facing a complex platform challenge: AI adoption, data
              infrastructure at scale, regulated system modernization, or a
              transformation that has stalled, reach out directly.
            </p>
            <div
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-2)",
              }}
            >
              <div>
                <span style={{ opacity: 0.8 }}>Response</span>
                {"\u00A0\u00A0"}
                Within 48 hours
              </div>
            </div>
          </Reveal>

          {/* Right column — action cards */}
          <Reveal delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <ContactCard
                primary
                icon={
                  <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                }
                heading="Book a Call"
                body="30-minute architecture conversation. No pitch. No deck. Just a direct discussion about your problem."
                buttonLabel="Schedule on Cal.com"
                href="https://cal.com/ash-khan"
                target="_blank"
              />
              <ContactFormBlock />
            </div>
            <p
              style={{
                marginTop: 32,
                textAlign: "center",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.75rem",
                lineHeight: 1.6,
                color: "var(--text-3)",
              }}
            >
              Engagements start at $25K.
              <br />
              Every client works directly with Ash.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
