import SimpleHeader from '@/components/SimpleHeader'
import Footer from '@/components/Footer'

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SimpleHeader />
      {children}
      <Footer />
    </>
  )
}
