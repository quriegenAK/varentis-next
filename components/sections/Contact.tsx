"use client";

import { useState, type ReactNode } from "react";
import { useBreakpoint } from "./shared";
import { Reveal, BtnGold, ArrowRight } from "@/components/ui";

/* ─── Contact card ──────────────────────────────── */
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
        background: isGold ? "var(--gold-glow)" : "var(--bg-card)",
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

/* ─── Contact form ──────────────────────────────── */
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
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
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
                className="contact-input"
                style={{ ...inputBase, boxShadow: "none" }}
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
                className="contact-input"
                style={{ ...inputBase, boxShadow: "none" }}
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
                className="contact-input"
                style={{ ...inputBase, minHeight: 120, resize: "vertical", boxShadow: "none" }}
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
                background: "var(--gold)",
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

/* ─── Contact section ───────────────────────────── */
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
          {/* Left column */}
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

          {/* Right column */}
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
