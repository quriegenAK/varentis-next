export const articlesQuery = `
  *[_type == "article"] | order(publishedAt desc) {
    _id, title, slug, publishedAt, excerpt,
    readTime, category
  }
`

export const articleBySlugQuery = `
  *[_type == "article" && slug.current == $slug][0] {
    _id, title, slug, publishedAt, excerpt,
    readTime, category, body, coverImage
  }
`

export const servicesQuery = `
  *[_type == "service"] | order(order asc) {
    _id, tier, title, description, price, per, tags
  }
`

export const industriesQuery = `
  *[_type == "industry"] | order(order asc) {
    _id, name, companies, badge
  }
`

export const founderQuery = `
  *[_type == "founder"][0] {
    name, title, credentials, experience,
    bio1, bio2, bio3, photo, skills
  }
`

export const homepageQuery = `
  *[_type == "homepage"][0] {
    heroHeadline, heroSubheadline, heroCtaLabel,
    philosophyHeading, philosophyBody,
    contactHeading, contactBody
  }
`
