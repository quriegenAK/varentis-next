// Inline SVG logos — rendered directly in DOM so page fonts apply

export function LogoDark() {
  return (
    <svg
      width="260"
      height="52"
      viewBox="0 0 260 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Varentis"
    >
      <path d="M4 6 L20 44 L36 6" stroke="#c49e4e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 6 L20 28 L29 6" stroke="#8a6e30" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="4" y1="49" x2="36" y2="49" stroke="#c49e4e" strokeWidth="0.75" opacity="0.45" />
      <text x="50" y="34" fontFamily="var(--font-playfair), 'Playfair Display', Georgia, serif" fontSize="28" fontWeight="400" letterSpacing="-0.3" fill="#f2ede4">Varentis</text>
      <text x="52" y="47" fontFamily="var(--font-jetbrains), 'JetBrains Mono', monospace" fontSize="6.5" fontWeight="400" letterSpacing="3" fill="#8a6e30">AI · DATA · ARCHITECTURE</text>
    </svg>
  )
}

export function LogoLight() {
  return (
    <svg
      width="260"
      height="52"
      viewBox="0 0 260 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Varentis"
    >
      <path d="M4 6 L20 44 L36 6" stroke="#96740a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 6 L20 28 L29 6" stroke="#c4a44e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="4" y1="49" x2="36" y2="49" stroke="#96740a" strokeWidth="0.75" opacity="0.4" />
      <text x="50" y="34" fontFamily="var(--font-playfair), 'Playfair Display', Georgia, serif" fontSize="28" fontWeight="400" letterSpacing="-0.3" fill="#0f1012">Varentis</text>
      <text x="52" y="47" fontFamily="var(--font-jetbrains), 'JetBrains Mono', monospace" fontSize="6.5" fontWeight="400" letterSpacing="3" fill="#c4a44e">AI · DATA · ARCHITECTURE</text>
    </svg>
  )
}
