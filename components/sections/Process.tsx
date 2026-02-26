"use client";

import { useBreakpoint } from "./shared";
import { Reveal, SLabel } from "@/components/ui";

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
