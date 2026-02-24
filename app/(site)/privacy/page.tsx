import Link from 'next/link'

export default function PrivacyPage() {
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
          Privacy Policy
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
          <h2 style={{ marginTop: 32, marginBottom: 12 }}>1. Overview</h2>
          <p>
            Abasin Co. (operated by Ignitable Inc.) takes your privacy seriously. This policy explains what information we collect and how we use it.
          </p>

          <h2 style={{ marginTop: 32, marginBottom: 12 }}>2. Information We Collect</h2>
          <ul>
            <li><strong>Contact form submissions:</strong> name, company, message</li>
            <li><strong>Analytics:</strong> page views and general usage patterns (no personal data stored)</li>
            <li>No cookies beyond essential session data</li>
          </ul>

          <h2 style={{ marginTop: 32, marginBottom: 12 }}>3. How We Use Your Information</h2>
          <p>
            We use submitted information solely to respond to your enquiry. We do not sell, share, or distribute your data to third parties.
          </p>

          <h2 style={{ marginTop: 32, marginBottom: 12 }}>4. Third-Party Services</h2>
          <ul>
            <li><strong>Formspree:</strong> processes contact form submissions</li>
            <li><strong>Cal.com:</strong> manages scheduling (governed by their own privacy policy)</li>
            <li><strong>Vercel:</strong> hosts this website</li>
          </ul>

          <h2 style={{ marginTop: 32, marginBottom: 12 }}>5. Contact</h2>
          <p>
            For any privacy concerns, contact us at{' '}
            <Link href="/#contact" style={{ color: 'var(--gold)', textDecoration: 'none', borderBottom: '1px solid var(--gold-lo)', paddingBottom: 1, transition: 'color 0.2s' }}>abasinco.com/contact</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
