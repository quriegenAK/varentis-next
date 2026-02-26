"use client";

import { useState } from "react";
import Image from "next/image";
import { useBreakpoint, type IndustryData } from "./shared";
import { Reveal, BtnText, SLabel } from "@/components/ui";

const fallbackIndustries = [
  { name: "Insurance & Risk", cos: "AAA · Resilience Cyber", badge: "Regulated AI", logo: null as string | null },
  { name: "Pharma & Bioinformatics", cos: "Quriegen · Single-cell · Multi-omics", badge: "Scientific Data", logo: null as string | null },
  { name: "Retail & Commerce", cos: "Gap Inc · Safeway · Albertsons", badge: "High-Scale", logo: null as string | null },
  { name: "Xenio Systems", cos: "IoT · Indoor Positioning · Retail", badge: "IoT · Spatial Data", logo: null as string | null },
  { name: "Enterprise Technology", cos: "Cisco Systems", badge: "Internal Platforms", logo: null as string | null },
  { name: "Energy & Infrastructure", cos: "Intertrust · Wind · EV", badge: "Infrastructure", logo: null as string | null },
  { name: "Geminus.ai", cos: "Industrial AI · Digital Twins · Energy", badge: "Industrial AI", logo: null as string | null },
  { name: "Cyber Security", cos: "Risk Analytics · Compliance", badge: "Compliance", logo: null as string | null },
  { name: "Resilience", cos: "Formerly Arceo.ai · Cyber Insurance · Risk Quantification", badge: "Cyber Insurance", logo: null as string | null },
  { name: "Media & Consumer", cos: "TiVo · Consumer-Scale", badge: "Performance", logo: null as string | null },
  { name: "Scientific Research", cos: "Quriegen · Genomics · Analytics", badge: "Data Pipelines", logo: null as string | null },
];

export function Industries({ data }: { data: IndustryData[] | null }) {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const containerPadding = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px";
  const sectionPadding = isMobile ? "72px 0" : isTablet ? "100px 0" : "160px 0";
  const gridCols = isMobile || isTablet ? "1fr" : "360px 1fr";
  const gridGap = isMobile ? 32 : isTablet ? 48 : 100;
  const list = data ?? fallbackIndustries;

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
