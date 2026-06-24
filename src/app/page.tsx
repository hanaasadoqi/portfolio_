import Nav from '@/components/portfolio/Nav'
import Hero from '@/components/portfolio/Hero'
import Experience from '@/components/portfolio/Experience'
import CaseStudies from '@/components/portfolio/CaseStudies'
import Systems from '@/components/portfolio/Systems'
import Writing from '@/components/portfolio/Writing'
import AboutContact from '@/components/portfolio/AboutContact'

export default function Home() {
  return (
      <div>
      <Nav />
      <main id="main-content">
        <Hero />
        <CaseStudies />
        <Systems />
        <Experience />
        <Writing />
        <AboutContact />
      </main>
    </div>
  )
}
