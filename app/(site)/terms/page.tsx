import Link from 'next/link'

export default function TermsPage() {
  return (
    <div
      style={{
        paddingTop: 72,
        minHeight: '100vh',
        background: 'var(--bg-0)',
      }}
    >
      <div
        style={{
          maxWidth: 1220,
          margin: '0 auto',
          padding: '48px clamp(20px, 5vw, 48px) 80px',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'inline-block',
            marginBottom: 32,
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-3)',
            textDecoration: 'none',
          }}
        >
          ← Back to Abasin Co.
        </Link>

        <h1
          style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: '2rem',
            fontWeight: 600,
            color: 'var(--text-1)',
            marginBottom: 8,
          }}
        >
          Terms of Service
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            color: 'var(--text-3)',
            marginBottom: 40,
          }}
        >
          Last updated: February 2026
        </p>

        <div className="prose-abasin" style={{ maxWidth: 720 }}>
          <h2 style={{ marginTop: 32, marginBottom: 12 }}>1. Services</h2>
          <p>
            Abasin Co. provides software architecture consulting and platform engineering services through Ignitable Inc.
          </p>

          <h2 style={{ marginTop: 32, marginBottom: 12 }}>2. Engagements</h2>
          <p>
            All engagements are governed by a separate Statement of Work (SOW) and Master Services Agreement (MSA) agreed upon prior to commencement.
          </p>

          <h2 style={{ marginTop: 32, marginBottom: 12 }}>3. Intellectual Property</h2>
          <p>
            All work product delivered under an engagement becomes the property of the client upon full payment, unless otherwise specified in the SOW.
          </p>

          <h2 style={{ marginTop: 32, marginBottom: 12 }}>4. Limitation of Liability</h2>
          <p>
            Abasin Co. liability is limited to the fees paid under the applicable engagement. We are not liable for indirect or consequential damages.
          </p>

          <h2 style={{ marginTop: 32, marginBottom: 12 }}>5. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of California.
          </p>

          <h2 style={{ marginTop: 32, marginBottom: 12 }}>6. Contact</h2>
          <p>
            For any questions, contact us at{' '}
            <Link href="/#contact" style={{ color: 'var(--gold)', textDecoration: 'none', borderBottom: '1px solid var(--gold-lo)', paddingBottom: 1, transition: 'color 0.2s' }}>abasinco.com/contact</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
