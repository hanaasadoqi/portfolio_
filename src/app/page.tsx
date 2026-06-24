import Nav from '@/components/portfolio/Nav'
import Hero from '@/components/portfolio/Hero'
import ImpactBand from '@/components/portfolio/ImpactBand'
import Experience from '@/components/portfolio/Experience'
import CaseStudies from '@/components/portfolio/CaseStudies'
import Systems from '@/components/portfolio/Systems'
import Writing from '@/components/portfolio/Writing'
import AboutContact from '@/components/portfolio/AboutContact'

export default function Home() {
  return (
    <div style={{ fontFamily: 'var(--font-inter)', backgroundColor: 'var(--bg)' }}>
      <Nav />
      <main id="main-content" className="space-y-0">
        <div className="pb-20">
          <Hero />
        </div>
        <div className="pb-20">
          <ImpactBand />
        </div>
        <div className="pb-20">
          <CaseStudies />
        </div>
        <div className="pb-20">
          <Systems />
        </div>
        <div className="pb-20">
          <Experience />
        </div>
        <div className="pb-20">
          <Writing />
        </div>
        <div>
          <AboutContact />
        </div>
      </main>
    </div>
  )
}
