"use client";

import { useState } from "react";
import { useBreakpoint } from "./shared";
import { Reveal, SLabel, ArrowRight } from "@/components/ui";

/* ─── SVG Icons ──────────────────────────────── */
function LinkedInIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ color: "var(--gold)" }}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--gold)" }}
    >
      <rect x={2} y={2} width={20} height={20} rx={5} />
      <circle cx={12} cy={12} r={5} />
      <circle cx={17.5} cy={6.5} r={1.5} fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ─── Platform panel ─────────────────────────── */
function PlatformPanel({
  icon,
  label,
  heading,
  body,
  cta,
  href,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  heading: string;
  body: string;
  cta: string;
  href: string;
  delay: number;
}) {
  const [hov, setHov] = useState(false);
  const [ctaHov, setCtaHov] = useState(false);

  return (
    <Reveal delay={delay}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: "block",
          textDecoration: "none",
          background: "var(--bg-card)",
          border: `1px solid ${hov ? "var(--border-gold)" : "var(--border)"}`,
          padding: "44px 40px",
          position: "relative",
          overflow: "hidden",
          transform: hov ? "translateY(-2px)" : "none",
          boxShadow: hov
            ? "0 0 40px rgba(125,211,252,0.06)"
            : "none",
          transition:
            "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease, background 0.4s ease",
          minHeight: 180,
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: hov
              ? "linear-gradient(90deg, transparent, var(--gold), transparent)"
              : "transparent",
            transition: "background 0.25s ease",
          }}
        />

        {/* Icon + Label row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 20,
          }}
        >
          {icon}
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-3)",
            }}
          >
            {label}
          </span>
        </div>

        {/* Heading */}
        <h3
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "1.35rem",
            fontWeight: 400,
            color: "var(--text-1)",
            lineHeight: 1.25,
            marginBottom: 12,
          }}
        >
          {heading}
        </h3>

        {/* Body */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.88rem",
            lineHeight: 1.65,
            color: "var(--text-2)",
            marginBottom: 28,
          }}
        >
          {body}
        </p>

        {/* CTA */}
        <span
          onMouseEnter={() => setCtaHov(true)}
          onMouseLeave={() => setCtaHov(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: ctaHov || hov ? "var(--gold)" : "var(--text-2)",
            transition: "color 0.2s ease",
          }}
        >
          {cta}
          <span
            style={{
              display: "inline-block",
              transition: "transform 0.2s ease",
              transform: hov ? "translateX(4px)" : "none",
            }}
          >
            <ArrowRight size={13} />
          </span>
        </span>
      </a>
    </Reveal>
  );
}

/* ─── Connect section ────────────────────────── */
export function Connect() {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const containerPadding = isMobile
    ? "0 20px"
    : isTablet
      ? "0 32px"
      : "0 48px";
  const sectionPadding = isMobile
    ? "72px 0"
    : isTablet
      ? "100px 0"
      : "140px 0";
  const gridCols = isMobile ? "1fr" : "1fr 1fr";
  const gridGap = isMobile ? 20 : isTablet ? 24 : 32;

  return (
    <section
      id="connect"
      style={{
        padding: sectionPadding,
        background: "var(--bg-1)",
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
        <Reveal>
          <SLabel n="08">Connect</SLabel>
        </Reveal>

        <Reveal>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 400,
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
              lineHeight: 1.1,
              color: "var(--text-1)",
              marginBottom: 56,
            }}
          >
            Follow the{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              Architecture.
            </em>
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridCols,
            gap: gridGap,
          }}
        >
          <PlatformPanel
            icon={<LinkedInIcon />}
            label="Network & Professional Insights"
            heading="Join the Architectural Discourse"
            body="Deep dives into data architecture patterns, platform engineering strategy, and the structural decisions behind scalable systems."
            cta="Follow on LinkedIn"
            href="https://www.linkedin.com/company/112414745/"
            delay={0}
          />
          <PlatformPanel
            icon={<InstagramIcon />}
            label="Visual Systems & Process"
            heading="See the Systems in Motion"
            body="Behind-the-scenes process, system visualizations, and the visual language of complex infrastructure made tangible."
            cta="Follow on Instagram"
            href="https://www.instagram.com/abasinarchitecture/"
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}
