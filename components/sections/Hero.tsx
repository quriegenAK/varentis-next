"use client";

import { useBreakpoint } from "./shared";
import { Reveal, BtnGold, SLabel, ArrowRight } from "@/components/ui";

export function Hero() {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
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
        <source src="/videos/abasinco-hero.mp4" type="video/mp4" />
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
