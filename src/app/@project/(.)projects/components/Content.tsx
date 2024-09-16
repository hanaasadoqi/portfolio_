'use client'

import React, { memo, Suspense } from 'react'
import { Project } from '../../../projects/types'
import Image from 'next/image'
import Link from 'next/link'
import SkeletonSkillCard from '@/app/skills/components/SkillCard/SkeletonCard'
import { Icon, IconLibrary } from '@/components/shared'
import Tabs from './Tabs'
import { FaCode, FaLaptopCode, FaPlay, FaServer } from 'react-icons/fa'
import { MdOpenInBrowser } from 'react-icons/md'
import clsx from 'clsx'

// SkillCard Component
// const SkillCard: React.FC<{ id: string; name: string; icon: string | null; documentation?: string }> = ({ id, icon, name, documentation }) => {
//   const IconComponent = icon && icon in IconLibrary ? IconLibrary[icon as keyof typeof IconLibrary] : IconLibrary.Loading

//   return (
//     <div className="flex flex-col items-center justify-between gap-2 w-24 h-32 bg-gray-100 p-4 rounded-md shadow-md hover:bg-gray-200 transition-colors">
//       <h6 className="mb-0 text-sm font-semibold text-gray-700 text-center">{name}</h6>
//       {icon && (
//         <Icon icon={<IconComponent className="text-gray-600 w-6 h-6" aria-hidden="true" />} />
//       )}
//       {documentation && (
//         <Link href={documentation} className="text-xs text-blue-500 underline hover:text-blue-600">
//           Docs
//         </Link>
//       )}
//     </div>
//   )
// }


const SkillCard: React.FC<{ id: string; name: string; icon: string | null; documentation?: string }> = ({ id, icon, name, documentation }) => {
  const IconComponent = icon && icon in IconLibrary ? IconLibrary[icon as keyof typeof IconLibrary] : IconLibrary.Loading

  return (
    <div className="flex flex-col items-center justify-between text-primary-900 gap-3 w-20 h-32 md:w-28 md:h-36 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h6 className="mb-0 text-xs font-semibold text-center">{name}</h6>
      <Link href="/skills/[id]" as={`/skills/${id}`} scroll={false}>
        {icon && <Icon icon={<IconComponent />} className="text-primary-900" aria-hidden="true" />}
      </Link>
      {documentation && (
        <Link href={documentation} className="text-xs text-blue-500 underline hover:text-blue-600">
          Docs
        </Link>
      )}
    </div>
  )
}


const dummySections = {
  'overview': {
    compiledSource: '<p>This project was built to showcase a dynamic UI using Next.js and TailwindCSS. It includes a fully interactive layout and expandable sections.</p>'
  },
  'lessons-learned': {
    compiledSource: '<p>During the development of this project, I learned how to efficiently manage state across components and optimize performance using server-side rendering.</p>'
  },
  'technologies': {
    compiledSource: '<ul><li>React</li><li>Next.js</li><li>TailwindCSS</li></ul>'
  }
}


// Content Component
interface ContentProps {
  project: Project

  showSkills?: boolean
  handleSkills?: () => void
}

// const Content: React.FC<ContentProps> = ({ project }) => {
//   return (
//     <div className="h-full w-full mx-auto p-8 relative overflow-scroll">
//       <div className="flex justify-center">
//         <Image
//           src={project.image}
//           alt={`${project.title} Image`}
//           width={600}
//           height={400}
//           className="rounded-lg shadow-lg"
//         />
//       </div>

//       {project.skills && project.skills.length > 0 && (
//         <div className="skills-section mt-8">
//           {/* <h2 className="text-xl font-semibold mb-4 text-center">Skills Used</h2> */}
//           <ul className="flex overflow-scroll justify-center gap-6 p-4">
//             {project.skills.map((skill, index) => (
//               <li key={index}>
//                 <Suspense fallback={<SkeletonSkillCard />}>
//                   {/* <Link href={`/skills/[id]`} as={`/skills/${skill.id}`} scroll={false}> */}
//                   <SkillCard
//                     id={skill.id}
//                     name={skill.name}
//                     icon={skill.icon}
//                     documentation={skill.documentation}
//                   />
//                   {/* </Link> */}
//                 </Suspense>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <div className="w-full" id="modal-content">
//       </div>
//       <Tabs sections={dummySections} />
//     </div>
//   )
// }
const Content: React.FC<ContentProps> = ({ project, handleSkills, showSkills }) => {
  const { demoUrl, backendRepo, frontendRepo, codeRepo, videoDemo } = project.details
  return (
    <div className="h-full w-full mx-auto md:p-2 lg:p-8 overflow-y-auto overflow-scroll bg-white">
      {project.skills && project.skills?.length > 0 && (
        <div className="skills-section lg:mt-8">
          <ul className={clsx("flex-wrap md:overflow-x-scroll justify-center md:gap-2 lg:gap-6 md:p-2 lg:p-4", {
            'hidden': !showSkills,
            'flex': showSkills
          })}>
            {project.skills.map((skill, index) => (
              <li key={index}>
                <Suspense fallback={<SkeletonSkillCard />}>
                  <SkillCard
                    id={skill.id}
                    name={skill.name}
                    icon={skill.icon}
                    documentation={skill.documentation}
                  />
                </Suspense>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex justify-center">
        <Image
          src={project.image}
          alt={`${project.title} Image`}
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="flex justify-center items-center p-4 gap-2">
        {videoDemo && (
          <Link
            href={videoDemo}
            data-tooltip-id="link-tooltip"
            data-tooltip-content="Live Demo"
            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-500 dark:hover:bg-blue-600"
            aria-label={`${project.title} Live Demo`}
          >
            <FaPlay />
          </Link>
        )}

        {backendRepo && backendRepo !== 'N/A' && (
          <Link
            href={backendRepo}
            data-tooltip-id="link-tooltip"
            data-tooltip-content="Backend Code"
            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
            aria-label={`${project.title} Backend Repository`}
          >
            <FaServer />
          </Link>
        )}

        {frontendRepo && frontendRepo !== 'N/A' && (
          <Link
            href={frontendRepo}
            data-tooltip-id="link-tooltip"
            data-tooltip-content="Frontend Code"
            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
            aria-label={`${project.title} Frontend Repository`}
          >
            <FaLaptopCode />
          </Link>
        )}

        {codeRepo && codeRepo !== 'N/A' && (
          <Link
            href={codeRepo}
            data-tooltip-id="link-tooltip"
            data-tooltip-content="Code Repository"
            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
            aria-label={`${project.title} Code Repository`}
          >
            <FaCode />
          </Link>
        )}

        {demoUrl && (
          <Link
            href={demoUrl}
            data-tooltip-id="link-tooltip"
            data-tooltip-content="Demo"
            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
            aria-label={`${project.title} Demo`}
          >
            <MdOpenInBrowser />
          </Link>
        )}
      </div>
      <Tabs sections={dummySections} />
    </div>
  )
}


export default Content


// 'use client'

// import React, { memo, Suspense } from 'react'
// import { Project } from '../projects/types'
// import Image from 'next/image'
// import Link from 'next/link'
// // import SkillCard from '@/app/skills/components/SkillCard/SkillCard'
// import SkeletonSkillCard from '@/app/skills/components/SkillCard/SkeletonCard'
// import { IconButton } from '@/components/shared/Buttons/IconButton'
// import { IconLibrary, LinkButton } from '@/components/shared'


// const SkillCard: React.FC<{ id: string; name: string; icon: string | null; documentation?: string }> = ({ id, icon, name, documentation }) => {
//   const IconComponent = icon && icon in IconLibrary
//     ? IconLibrary[icon as keyof typeof IconLibrary]
//     : IconLibrary.Loading

//   return (
//     <div className="w-12 h-12">
//       <h6>{name}</h6>
//       {/* <LinkButton icon={<IconComponent />} variant="ghost" href={documentation} ariaLabel={`${name} documentation`} /> */}
//     </div>
//   )
// }

// interface ContentProps {
//   project: Project
// }

// const Content: React.FC<ContentProps> = ({ project }) => {
//   return (
//     <div className="max-w-lg flex flex-col items-center justify-center overflow-scroll">
//       <h1>{project.title}</h1>
//       <Image src={project.image} alt={`${project.title} Image`} width={500} height={500} />
//       {project.skills && project.skills.length > 0 && (
//         <ul className='flex overflow-scroll justify-center items-center gap-4 size-full'>
//           {project.skills.map((skill, index) => (
//             <li key={index}>
//               {/* {skill.name} */}
//               <Suspense key={index} fallback={<SkeletonSkillCard />} >
//                 <Link key={index} href={`/skills/[id]`} as={`/skills/${skill.id}`} scroll={false}>
//                   <SkillCard id={skill.id} name={skill.name} icon={skill.icon} documentation={skill.documentation} />
//                 </Link>
//               </Suspense>
//             </li>
//           ))}
//         </ul>
//       )
//       }
//     </div >
//   )
// }

// export default Content;