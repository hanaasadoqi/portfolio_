import fs from 'fs'
import path from 'path'
import dynamic from 'next/dynamic'

// Dynamically import client components
const Hero = dynamic(() => import('@/components/Hero/Hero'), { ssr: true })
const About = dynamic(() => import('@/components/About/About'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills/Skills'), {
  ssr: false,
})
const Section = dynamic(() => import('@/components/Section/Section'), {
  ssr: true,
})
const Carousel = dynamic(() => import('@/components/Experience/Carousel'), {
  ssr: false,
})
const Projects = dynamic(() => import('@/components/Projects/Projects'), {
  ssr: true,
})
const Education = dynamic(() => import('@/components/Education/Education'), {
  ssr: true,
})
const Writing = dynamic(() => import('@/components/Writing/Writing'), {
  ssr: true,
})
import Contact from '@/components/Contact/Contact'

// Helper function to read data directly from the file system
function fetchData(fileName: string) {
  const filePath = path.join(process.cwd(), 'src/data', fileName)
  const fileData = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(fileData)
}

// Main server component for the home page
export default function Home() {
  // Read data directly from JSON files during the build step
  const aboutData = fetchData('aboutData.json')
  const experienceData = fetchData('experience.json')
  const skillsData = fetchData('skillsData.json')
  const projectsData = fetchData('projects.json')
  const writingData = fetchData('writing.json')
  const educationData = fetchData('education.json')

  // Server component function
  return (
    <main className="flex min-h-screen w-full flex-col items-center overflow-hidden">
      <div className="h-full w-full">
        <Section id="hero" className="bg-hero-gradient">
          <Hero
            title="Welcome to My Portfolio"
            subtitle="Full-Stack Developer | UI/UX Enthusiast | Lifelong Learner"
            greeting="Hi, I'm Hanaa Sadoqi, a Full-Stack Developer passionate about creating high-quality, user-friendly web applications. Let's connect and build something amazing together."
          />
        </Section>
        <Section
          id="about"
          label="A Little About Me"
          subtitle="Snapshots of some things that interest me, inspire me or bring me joy."
          className="bg-about-gradient"
        >
          <About aboutData={aboutData} />
        </Section>
        <Section
          id="skills"
          label="Skills"
          className="bg-skills-gradient py-96"
        >
          <Skills skillsData={skillsData} />
        </Section>
        <Section
          id="experience"
          label="Work Experience"
          className="bg-experience-gradient py-96"
        >
          <Carousel experienceData={experienceData} />
        </Section>
        <Section
          id="projects"
          label="Projects"
          className="bg-projects-gradient"
        >
          <Projects projectsData={projectsData} />
        </Section>
        <Section id="writing" label="Writing" className="bg-writing-gradeint">
          <Writing writingData={writingData} />
        </Section>
        <Section
          id="education"
          label="Education"
          className="bg-education-gradient"
        >
          <Education educationData={educationData} />
        </Section>
        <Section
          id="contact"
          label="Contact Me"
          className="bg-contact-gradient"
        >
          <Contact />
        </Section>
      </div>
    </main>
  )
}
