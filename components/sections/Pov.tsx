"use client";

import { useBreakpoint } from "./shared";
import { Reveal, SLabel } from "@/components/ui";

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
