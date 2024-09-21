// import React from 'react';
// import Image from 'next/image';
// import { ProjectPreview } from '@/types';

// interface Project {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   alt: string;
// }

// const ProjectGallery: React.FC<{
//   featuredProject: ProjectPreview;
//   rightProjects: ProjectPreview[];
//   bottomProjects: ProjectPreview[];
// }> = ({ featuredProject, rightProjects, bottomProjects }) => {
//   return (
//     <div className="w-full max-w-7xl mx-auto grid grid-cols-3 grid-rows-2 gap-4">
//       {/* Featured project on the top-left 2/3rds */}
//       <div className="col-span-2 row-span-2">
//         <Image
//           image={featuredProject.image}
//           alt={`Image for ${featuredProject.title}`}
//           width={800}
//           height={500}
//           className="w-full h-full object-cover"
//           sizes="(max-width: 788px) 60vw, 800px"
//         />
//       </div>

//       {/* Two stacked project cards on the right */}
//       <div className="col-span-1 row-span-2 flex flex-col space-y-4">
//         {rightProjects.map((project, idx) => (
//           <div key={project.id} className="h-1/2">
//             <Image
//               image={project.image}
//               alt={`Image for ${project.title}`}
//               width={400}
//               height={250}
//               className="w-full h-full object-cover"
//               sizes="(max-width: 788px) 30vw, 400px"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Three project cards along the bottom */}
//       <div className="col-span-3 flex space-x-4">
//         {bottomProjects.map(project => (
//           <div key={project.id} className="w-1/3">
//             <Image
//               image={project.image}
//               alt={`Image for ${project.title}`}
//               width={300}
//               height={200}
//               className="w-full h-full object-cover"
//               sizes="(max-width: 788px) 30vw, 300px"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectGallery;

import React from 'react';
import Image from 'next/image';
import { ProjectPreview } from '@/types';
import { toId } from '@/utils/toId';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ProjectGallery: React.FC<{
  featuredProject: ProjectPreview;
  rightProjects: ProjectPreview[];
  bottomProjects: ProjectPreview[];
}> = ({ featuredProject, rightProjects, bottomProjects }) => {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4">
      {/* Featured project on the top-left 2/3rds */}
      <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 relative group">
        <Image
          src={`/images/${toId(featuredProject.title)}.jpg`}
          alt={`Image for ${featuredProject.title}`}
          width={800}
          height={500}
          className="w-full h-full object-cover shadow-md rounded-md group-hover:shadow-lg group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 800px"
        />
        {/* Hover overlay */}
        <Link href="/projects/id" as={`/projects/${featuredProject.id}`}>
          <div className="absolute inset-0 bg-white/80 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center shadow-lg rounded-md group-hover:shadow-xl group-hover:scale-105">
            <div className="text-white text-center p-4">
              <h2 className="text-2xl font-bold">{featuredProject.title}</h2>
              <p className="mt-2">{featuredProject.description}</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Two stacked project cards on the right */}
      <div className="col-span-1 row-span-1 md:row-span-2 flex flex-col space-y-4">
        {rightProjects.map((project, idx) => (
          <div key={project.id} className="h-1/2 relative group">
            <Image
              src={`/images/${toId(project.title)}.jpg`}
              alt={`Image for ${project.title}`}
              width={400}
              height={250}
              className="w-full h-full object-cover shadow-md rounded-md group-hover:shadow-lg group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 30vw, 400px"
            />
            {/* Hover overlay */}
            <Link href="/projects/id" as={`/projects/${project.id}`}>
              <div className="absolute inset-0 bg-white/80 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center shadow-lg rounded-md group-hover:shadow-xl group-hover:scale-105">
                <div className="text-white text-center p-4">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="mt-2">{project.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Three project cards along the bottom */}
      <div className="col-span-1 md:col-span-3 flex space-x-4">
        {bottomProjects.map(project => (
          <div key={project.id} className="w-full md:w-1/3 relative group">
            <Image
              src={`/images/${toId(project.title)}.jpg`}
              alt={`Image for ${project.title}`}
              width={300}
              height={200}
              className="w-full h-full max-h-72 object-cover shadow-md rounded-md group-hover:shadow-lg group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 30vw, 300px"
            />
            {/* Hover overlay */}
            <Link href="/projects/id" as={`/projects/${project.id}`}>
              <div className="absolute inset-0 bg-white/80 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center shadow-lg rounded-md group-hover:shadow-xl group-hover:scale-105">
                <div className="text-white text-center p-4">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="mt-2">{project.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;

