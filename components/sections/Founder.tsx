"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/image";
import { useBreakpoint, type FounderData } from "./shared";
import { Reveal, SLabel } from "@/components/ui";

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
];

const defaultBio1 =
  "I've been the senior architect in the room when a platform fails at scale, when a compliance audit surfaces a structural flaw, when a data pipeline collapses under scientific data volumes nobody anticipated. I've built the systems that didn't fail, and diagnosed the ones that did.";
const defaultBio2 =
  "Across eleven industries, the pattern is always the same: architectural decisions made in the first six months define the ceiling for the next five years. Abasin Co. exists to give more organizations access to the level of architectural thinking that previously existed only inside the largest firms.";
const defaultBio3 =
  "I take a small number of engagements per year. Every client works directly with me.";

export function Founder({ data }: { data: FounderData | null }) {
  const f = data;
  const name = f?.name ?? "Ash Khan";
  const founderTitle = f?.title ?? "Founder & Principal Architect";
  const credentials = f?.credentials ?? "MSc · MS Computer Science";
  const experience = f?.experience ?? "20+ Years · 11 Industries · F500 Clients";
  const bio1 = f?.bio1 ?? defaultBio1;
  const bio2 = f?.bio2 ?? defaultBio2;
  const bio3 = f?.bio3 ?? defaultBio3;
  const skillChips = f?.skills ?? chips;

  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const containerPadding = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px";
  const sectionPadding = isMobile ? "72px 0" : isTablet ? "100px 0" : "140px 0";
  const gridCols = isMobile ? "1fr" : "1fr 1fr";
  const gridGap = isMobile || isTablet ? 48 : 100;

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
          {/* Founder portrait */}
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
