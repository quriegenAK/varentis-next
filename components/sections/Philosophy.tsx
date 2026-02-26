"use client";

import { useBreakpoint } from "./shared";
import { Reveal, SLabel } from "@/components/ui";

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
