import SectionLayout from '@/app/shared/SectionLayout'
import Education from '@/components/Education/Education'
import CurvedDivider from '@/components/CurvedDivider/CurvedDivider'
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
      <div className="flex w-full flex-col items-center bg-transparent z-20">
        <Hero />
        <CurvedDivider height={100} />
        <SectionLayout id="about" screen>
          <About />
        </SectionLayout>
        <CurvedDivider height={100} flip={true} />
        <SectionLayout id="skills">
          <SkillsContainer searchParams={searchParams} />
        </SectionLayout>
        <CurvedDivider height={100} />
        <SectionLayout id="experience">
          <ExperienceContainer />
        </SectionLayout>
        <CurvedDivider height={100} flip={true} />
        <SectionLayout id="projects">
          <ProjectGalleryContainer />
        </SectionLayout>
        <CurvedDivider height={100} />
        <SectionLayout id="writing">
          <ArticlesListContainer />
        </SectionLayout>
        <CurvedDivider height={100} flip={true} />
        <SectionLayout id="education">
          <Education />
        </SectionLayout>
      </div>
    </>
  )
}
