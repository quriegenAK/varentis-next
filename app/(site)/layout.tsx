import { Nav } from '@/components/nav/Nav'
import { Cursor } from '@/components/ui/Cursor'
import { Footer } from '@/components/ui/Footer'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Cursor />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
