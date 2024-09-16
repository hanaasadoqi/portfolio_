import React from 'react';
import { fetchProjects } from './actions';
import Card from './components/Card';
import { Project } from './types';
import SectionLayout from '@/app/shared/SectionLayout';
import Search from '../skills/components/SkillsControls/Search';
import Filter from '../skills/components/SkillsControls/Filter';
import Link from 'next/link';

const Page: React.FC = async () => {
  const projects: Project[] = await fetchProjects();

  return (
    <SectionLayout id="projects-container" full>

      <div className="min-h-screen bg-white/50 flex flex-col items-center justify-center max-w-7xl">
        <h1 className="text-center">Projects</h1>
        <div className='flex flex-col justify-center items-center md:flex-row w-full'>
          <Search />
          {/* <Filter /> */}

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map((project, index) => {
            return (
              <Link key={index} href={`/projects/${project.id}`}>
                <Card project={project} />
              </Link>
            )
          })}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Page;
