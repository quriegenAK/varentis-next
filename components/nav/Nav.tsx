"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { LogoDark, LogoLight } from "@/components/nav/LogoSvg";

const NAV_LINKS = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Expertise" },
  { href: "#pov", label: "POV" },
  { href: "#founder", label: "Founder" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [pinned, setPinned] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const { theme, setTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // Scroll handler
    const onScroll = () => setPinned(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Resize handler — detect mobile
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize(); // run immediately on mount
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Lock body scroll when menu open, reset scroll on open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      if (menuRef.current) menuRef.current.scrollTop = 0;
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu when resizing to desktop
  useEffect(() => {
    if (isMobile === false) setMenuOpen(false);
  }, [isMobile]);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* ─── Nav bar — always fixed at top, never scrolls away ─── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 72,
          zIndex: 1000,
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-0)",
          transition: "background 0.4s ease, border-color 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1220,
            margin: "0 auto",
            padding: isMobile === true ? "0 20px" : "0 48px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo — full SVG wordmark */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              maxWidth: isMobile === true ? 160 : 260,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                transform: isMobile === true ? "scale(0.62)" : "scale(1)",
                transformOrigin: "left center",
                flexShrink: 0,
              }}
            >
              {!mounted || theme === "dark" ? <LogoDark /> : <LogoLight />}
            </div>
          </Link>

          {/* ─── Desktop: links + theme + CTA ─── */}
          {isMobile === false && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 36,
              }}
            >
              {NAV_LINKS.slice(0, 5).map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="nav-link"
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-2)",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </a>
              ))}

              {mounted && (
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="nav-theme-btn"
                  style={{
                    width: 40,
                    height: 40,
                    background: "var(--bg-3)",
                    border: "1px solid var(--border)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "var(--text-2)",
                  }}
                >
                  {theme === "dark" ? (
                    <Sun size={15} strokeWidth={1.5} />
                  ) : (
                    <Moon size={15} strokeWidth={1.5} />
                  )}
                </button>
              )}

              <NavCta />
            </div>
          )}

          {/* ─── Mobile: theme toggle + hamburger ─── */}
          {isMobile === true && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexShrink: 0,
                zIndex: 2,
              }}
            >
              {mounted && (
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  style={{
                    width: 36,
                    height: 36,
                    background: "var(--bg-3)",
                    border: "1px solid var(--border)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "var(--text-2)",
                  }}
                >
                  {theme === "dark" ? (
                    <Sun size={14} strokeWidth={1.5} />
                  ) : (
                    <Moon size={14} strokeWidth={1.5} />
                  )}
                </button>
              )}

              {/* Hamburger button */}
              <button
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                style={{
                  width: 40,
                  height: 40,
                  background: "none",
                  border: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: menuOpen ? 0 : 5,
                  cursor: "pointer",
                  padding: "10px",
                  transition: "border-color 0.2s",
                  position: "relative",
                }}
              >
                {menuOpen ? (
                  // X — two rotated lines
                  <>
                    <span
                      style={{
                        width: 18,
                        height: 1.5,
                        background: "var(--text-1)",
                        display: "block",
                        transform: "rotate(45deg) translateY(0.75px)",
                        transition: "transform 0.2s",
                      }}
                    />
                    <span
                      style={{
                        width: 18,
                        height: 1.5,
                        background: "var(--text-1)",
                        display: "block",
                        transform: "rotate(-45deg) translateY(-0.75px)",
                        transition: "transform 0.2s",
                      }}
                    />
                  </>
                ) : (
                  // Three lines
                  <>
                    <span
                      style={{
                        width: 18,
                        height: 1.5,
                        background: "var(--text-1)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: 18,
                        height: 1.5,
                        background: "var(--text-1)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: 12,
                        height: 1.5,
                        background: "var(--text-1)",
                        display: "block",
                        alignSelf: "flex-start",
                        marginLeft: 3,
                      }}
                    />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* ─── Mobile menu overlay — starts at 72px, below nav ─── */}
      {isMobile === true && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: 72,
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--bg-0)",
            zIndex: 999,
            overflowY: "auto",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            padding: "32px 20px 48px",
            // Slide in/out
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s ease",
            // Always rendered but off-screen when closed
            // This prevents layout shift on open
            pointerEvents: menuOpen ? "auto" : "none",
          }}
        >
          {/* Nav links */}
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="mobile-nav-link"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "var(--text-1)",
                textDecoration: "none",
                padding: "20px 0",
                textAlign: "left",
                borderBottom: "1px solid var(--border)",
                transition: "color 0.2s",
                display: "block",
              }}
            >
              {label}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              marginTop: 40,
              display: "block",
              textAlign: "center",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "16px 22px",
              border: "1px solid var(--gold)",
              color: "var(--gold)",
              textDecoration: "none",
            }}
          >
            Start a Conversation
          </a>
        </div>
      )}
    </>
  );
}

function NavCta() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        fontFamily: "var(--font-jetbrains), monospace",
        fontSize: "0.66rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        padding: "10px 22px",
        border: "1px solid var(--gold-lo)",
        color: hovered ? "var(--text-inv)" : "var(--gold)",
        background: hovered ? "var(--gold)" : "transparent",
        textDecoration: "none",
        transition: "color 0.25s, background 0.25s",
        whiteSpace: "nowrap",
        cursor: "pointer",
      }}
    >
      Start a Conversation
    </a>
  );
}
