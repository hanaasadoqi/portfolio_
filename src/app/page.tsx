import SectionLayout from '@/app/shared/SectionLayout'
import Education from '@/components/Education/Education'
import dynamic from 'next/dynamic';

const ArticlesListContainer = dynamic(() => import("@/components/ArticlesListContainer/ArticlesListContainer"), {
  ssr: true,
  loading: () => <div>Loading...</div>,
});

const ProjectGalleryContainer = dynamic(() => import("@/app/(content)/projects/components/ProjectGalleryContainer"), {
  ssr: true,
  loading: () => <div>Loading...</div>,
});

const ExperienceContainer = dynamic(() => import("@/components/Experience/ExperienceContainer"), {
  ssr: true,
  loading: () => <div>Loading...</div>,
});
const SkillsContainer = dynamic(() => import("@/app/skills/components/SkillContainer"), {
  ssr: true,
  loading: () => <div>Loading...</div>,
});

const Hero = dynamic(() => import("@/components/Hero/Hero"), {
  ssr: true,
  loading: () => <div>Loading...</div>,
})
const About = dynamic(() => import("@/components/AboutContainer/AboutContainer"), {
  ssr: true,
  loading: () => <div>Loading...</div>,
});

const StickySocialMediaLinks = dynamic(() => import("@/components/shared/StickySocialMediaLinks"), {
  ssr: true,
  loading: () => <div>Loading...</div>,
});

export default async function Home({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  return (
    <>
      <StickySocialMediaLinks />
      <div className="flex h-full w-full flex-col items-center overflow-y-auto overscroll-contain bg-transparent z-20">
        <Hero />
        <SectionLayout id="about" screen>
          <About />
        </SectionLayout>
        <SectionLayout id="skills">
          <SkillsContainer searchParams={searchParams} />
        </SectionLayout>
        <SectionLayout id="experience">
          <ExperienceContainer />
        </SectionLayout>
        <SectionLayout id="projects">
          <ProjectGalleryContainer />
        </SectionLayout>
        <SectionLayout id="writing">
          <ArticlesListContainer />
        </SectionLayout>
        <SectionLayout id="education">
          <Education />
        </SectionLayout>
      </div>
    </>
  )
}