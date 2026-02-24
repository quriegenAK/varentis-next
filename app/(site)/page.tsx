import { client } from '@/sanity/client'
import {
  servicesQuery,
  industriesQuery,
  founderQuery,
} from '@/sanity/queries'
import {
  Hero,
  Marquee,
  Philosophy,
  Services,
  Industries,
  Pov,
  Process,
  Founder,
  Engage,
  Contact,
} from '@/components/sections'

export const revalidate = 60

export default async function Home() {
  const [services, industries, founder] = await Promise.all([
    client.fetch(servicesQuery).catch(() => null),
    client.fetch(industriesQuery).catch(() => null),
    client.fetch(founderQuery).catch(() => null),
  ])

  return (
    <>
      <Hero />
      <Marquee />
      <Philosophy />
      <Services data={services} />
      <Industries data={industries} />
      <Pov />
      <Process />
      <Founder data={founder} />
      <Engage />
      <Contact />
    </>
  )
}
