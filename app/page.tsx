import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import BusinessSolutions from '@/components/sections/BusinessSolutions'
import QuickServices from '@/components/sections/QuickServices'
import ValueProposition from '@/components/sections/ValueProposition'
import AboutPreview from '@/components/sections/AboutPreview'
import ServicesShowcase from '@/components/sections/ServicesShowcase'
import PartnershipCTA from '@/components/sections/PartnershipCTA'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BusinessSolutions />
        <QuickServices />
        <ValueProposition />
        <AboutPreview />
        <ServicesShowcase />
        <PartnershipCTA />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
