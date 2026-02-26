"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useBreakpoint } from "./shared";
import { MarqueeTile } from "@/components/ui/MarqueeTile";

const marqueeClients = [
  { name: "AAA Insurance", logoKey: "aaa" },
  { name: "Cisco Systems", logoKey: "cisco" },
  { name: "Gap Inc", logoKey: "gap" },
  { name: "Safeway", logoKey: "safeway" },
  { name: "Albertsons", logoKey: "albertsons" },
  { name: "Resilience Cyber", logoKey: "resilience" },
  { name: "Intertrust", logoKey: "intertrust" },
  { name: "TiVo", logoKey: "tivo" },
  { name: "Geminus.ai", logoKey: "geminus" },
  { name: "Xenio Systems", logoKey: "xenio" },
  { name: "Arceo.ai", logoKey: "arceo" },
  { name: "Quriegen", logoKey: "quriegen" },
];

export function Marquee() {
  const doubled = [...marqueeClients, ...marqueeClients];
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isLight = mounted && resolvedTheme === "light";
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const tilePadding = isMobile ? "0 32px" : "0 52px";

  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "32px 0",
        background: "var(--bg-1)",
        transition: "background 0.4s ease",
        overflow: "hidden",
      }}
    >
      {/* Label */}
      <div
        style={{
          textAlign: "center",
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: "0.54rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--text-3)",
          marginBottom: 28,
        }}
      >
        Client History
      </div>

      {/* Scrolling track */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "max-content",
          animation: "marquee 48s linear infinite",
          willChange: "transform",
        }}
      >
        {doubled.map((client, i) =>
          client.logoKey === "quriegen" ? (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: tilePadding,
                minWidth: isMobile ? 100 : 120,
                flexShrink: 0,
                opacity: 0.85,
                transition: "opacity 0.3s ease",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/clientLogos/logo-quriegen.png"
                  alt="Quriegen"
                  style={{
                    height: "28px",
                    width: "auto",
                    opacity: 0.85,
                    filter: isLight ? "brightness(0) invert(0.15)" : "brightness(1.1)",
                    verticalAlign: "middle",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: isMobile ? "0.65rem" : "0.58rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                  whiteSpace: "nowrap",
                }}
              >
                {client.name}
              </span>
            </div>
          ) : (
            <MarqueeTile key={i} name={client.name} logoKey={client.logoKey} />
          )
        )}
      </div>
    </div>
  );
}
