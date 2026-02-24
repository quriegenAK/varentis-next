import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'n7klxe0y',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function seed() {
  console.log('Seeding Sanity...')

  // ── Homepage ──────────────────────────────────
  await client.createOrReplace({
    _id: 'homepage',
    _type: 'homepage',
    heroHeadline: 'Architecture at the inflection point.',
    heroSubheadline: 'We design and deliver the systems beneath everything that matters, from regulated AI to scientific platforms. Fixed-fee. Outcome-committed.',
    heroCtaLabel: 'Start a Conversation',
    philosophyHeading: 'Architecture is a consequence of conviction.',
    philosophyBody: 'Most technology transformations fail not because of bad strategy - but because the architecture does not survive contact with reality. We exist at the inflection point between "AI strategy deck" and "production AI system." We are not a dev shop. We do not sell slide decks. We are the firm you engage when the stakes are too high for generalists.',
    contactHeading: 'The right architecture conversation is worth having.',
    contactBody: 'If your organization is facing a complex platform challenge - AI adoption, data infrastructure at scale, regulated system modernization, or a transformation that has stalled - let\'s talk.',
  })
  console.log('Homepage done')

  // ── Founder ───────────────────────────────────
  await client.createOrReplace({
    _id: 'founder',
    _type: 'founder',
    name: 'Ash Khan',
    title: 'Founder & Principal Architect',
    credentials: '20+ Years · 11 Industries · F500',
    experience: 'Senior software architect with 20+ years building the systems that do not fail.',
    bio1: 'I have been the senior architect in the room when a platform fails at scale, when a compliance audit surfaces a structural flaw, when a data pipeline collapses under scientific data volumes nobody anticipated. I have built the systems that did not fail - and diagnosed the ones that did.',
    bio2: 'Across eleven industries, the pattern is always the same: architectural decisions made in the first six months define the ceiling for the next five years. Varentis exists to give more organizations access to the level of architectural thinking that previously existed only inside the largest firms.',
    bio3: 'I take a small number of engagements per year. Every client works directly with me.',
    skills: [
      'AAA', 'Cisco', 'Gap Inc', 'Safeway', 'Albertsons',
      'Resilience', 'Intertrust', 'TiVo',
      'Geminus.ai', 'Xenio', 'Arceo.ai', 'Quriegen'
    ],
  })
  console.log('Founder done')

  // ── Services ──────────────────────────────────
  const services = [
    {
      _id: 'service-1',
      _type: 'service',
      order: 1,
      tier: 'Tier I: Entry Point',
      title: 'Architecture Sprint',
      description: 'Current state assessment, target architecture design, structured roadmap, and a full Architecture Decision Record package. Clarity before commitment.',
      price: '$25K-$75K',
      per: 'Fixed · 4-8 Weeks',
      tags: ['Current State Audit', 'Target Architecture', 'ADR Package', 'Risk Register'],
      flagship: false,
    },
    {
      _id: 'service-2',
      _type: 'service',
      order: 2,
      tier: 'Tier II: Core Engagement',
      title: 'Platform Engineering Partnership',
      description: 'Embedded senior architecture and engineering leadership. We design, build, and deliver production-grade platforms. Milestone-based, fully handed off.',
      price: '$150K-$600K',
      per: 'Milestone · 3-12 Months',
      tags: ['Architecture Lead', 'Hands-on Build', 'Team Enablement', 'Regulated AI', 'Data Platforms'],
      flagship: true,
    },
    {
      _id: 'service-3',
      _type: 'service',
      order: 3,
      tier: 'Tier III: Ongoing',
      title: 'Strategic Advisory Retainer',
      description: 'Ongoing CTO-level architectural advisory. Architecture review board participation, vendor evaluation, and a trusted senior voice on high-stakes decisions.',
      price: '$8K-$20K',
      per: 'Per Month · Reserved',
      tags: ['Arch Review Board', 'Vendor Evaluation', 'Fractional CTO'],
      flagship: false,
    },
    {
      _id: 'service-4',
      _type: 'service',
      order: 4,
      tier: 'Specialized',
      title: 'Regulated AI & Scientific Platforms',
      description: 'Deep specialty at the intersection of AI, regulatory compliance, and scientific data at scale. From cyber insurance risk scoring to multi-omics analytics.',
      price: 'Scoped',
      per: 'Per Engagement',
      tags: ['AI Readiness Audit', 'Compliance Arch', 'Omics Platforms', 'Risk Analytics'],
      flagship: false,
    },
  ]

  for (const s of services) {
    await client.createOrReplace(s)
    console.log('Service done:', s.title)
  }

  // ── Industries (all 11) ───────────────────────
  const industries = [
    {
      _id: 'industry-1',
      order: 1,
      name: 'Insurance & Risk',
      companies: 'AAA · Resilience Cyber',
      badge: 'Regulated AI',
    },
    {
      _id: 'industry-2',
      order: 2,
      name: 'Pharma & Bioinformatics',
      companies: 'Quriegen · Single-cell · Multi-omics',
      badge: 'Scientific Data',
    },
    {
      _id: 'industry-3',
      order: 3,
      name: 'Retail & Commerce',
      companies: 'Gap Inc · Safeway · Albertsons',
      badge: 'High-Scale',
    },
    {
      _id: 'industry-4',
      order: 4,
      name: 'Enterprise Technology',
      companies: 'Cisco Systems',
      badge: 'Internal Platforms',
    },
    {
      _id: 'industry-5',
      order: 5,
      name: 'Energy & Infrastructure',
      companies: 'Intertrust · Wind · EV',
      badge: 'Infrastructure',
    },
    {
      _id: 'industry-6',
      order: 6,
      name: 'Cyber Security',
      companies: 'Risk Analytics · Compliance',
      badge: 'Compliance',
    },
    {
      _id: 'industry-7',
      order: 7,
      name: 'Media & Consumer',
      companies: 'TiVo · Consumer-Scale',
      badge: 'Performance',
    },
    {
      _id: 'industry-8',
      order: 8,
      name: 'Scientific Research',
      companies: 'Quriegen · Genomics · Analytics',
      badge: 'Data Pipelines',
    },
    {
      _id: 'industry-9',
      order: 9,
      name: 'AI Platforms',
      companies: 'Geminus.ai · Industrial AI · Digital Twins',
      badge: 'Industrial AI',
    },
    {
      _id: 'industry-10',
      order: 10,
      name: 'Risk & Compliance',
      companies: 'Arceo.ai · Resilience · Cyber Insurance',
      badge: 'Cyber Insurance',
    },
    {
      _id: 'industry-11',
      order: 11,
      name: 'IoT & Spatial Data',
      companies: 'Xenio Systems · Indoor Positioning · Retail',
      badge: 'IoT · Spatial Data',
    },
  ].map(i => ({ ...i, _type: 'industry' }))

  for (const i of industries) {
    await client.createOrReplace(i)
    console.log('Industry done:', i.name)
  }

  // ── Articles ──────────────────────────────────
  const articles = [
    {
      _id: 'article-1',
      _type: 'article',
      title: 'AI transformations fail at the data layer - not the model layer.',
      slug: { _type: 'slug', current: 'ai-transformations-fail-data-layer' },
      publishedAt: '2026-01-15T00:00:00.000Z',
      excerpt: 'Every enterprise CTO is under board pressure to "do AI." Most do not realize their data architecture is the bottleneck. You cannot LLM your way out of a broken data foundation. We fix the foundation first.',
      readTime: 6,
      category: 'ai-data',
    },
    {
      _id: 'article-2',
      _type: 'article',
      title: 'Regulated industries need architecture, not just compliance.',
      slug: { _type: 'slug', current: 'regulated-industries-architecture-not-compliance' },
      publishedAt: '2026-01-28T00:00:00.000Z',
      excerpt: 'Compliance is table stakes. The real question: does your architecture allow you to move fast while staying compliant? We design systems where regulatory constraints become structural advantages, not speed limiters.',
      readTime: 5,
      category: 'regulated',
    },
    {
      _id: 'article-3',
      _type: 'article',
      title: 'The platform you build in year one is the ceiling you hit in year five.',
      slug: { _type: 'slug', current: 'platform-year-one-ceiling-year-five' },
      publishedAt: '2026-02-10T00:00:00.000Z',
      excerpt: 'Architectural debt compounds faster than technical debt. We have watched this pattern play out across eleven industries over two decades. The firms that dominate their markets in five years are making the right architectural bets today.',
      readTime: 8,
      category: 'architecture',
    },
  ]

  for (const a of articles) {
    await client.createOrReplace(a)
    console.log('Article done:', a.title)
  }

  console.log('\nSeeding complete!')
}

seed().catch(err => {
  console.error('Seed failed:', err.message)
  process.exit(1)
})
