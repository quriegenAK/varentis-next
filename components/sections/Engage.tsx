"use client";

import { useBreakpoint } from "./shared";
import { Reveal, BtnGold, SLabel, ArrowRight } from "@/components/ui";

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
