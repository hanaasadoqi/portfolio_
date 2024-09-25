// import React from 'react'
// import { Skill } from '@/app/skills/types'
// import Link from 'next/link'
// import Image from 'next/image'
// import { toId } from '@/utils/toId'

// interface SkillContentProps {
//   skill: Skill
// }

// const SkillContent: React.FC<SkillContentProps> = ({ skill }) => {
//   return (
//     <div className="h-full w-full mx-auto md:p-2 lg:p-8 overflow-y-auto bg-white">

//       {/* Projects Section */}
//       {skill.projects && skill.projects.length > 0 && (
//         <>
//           <h3 className="text-xl font-semibold text-center mb-4">Projects</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {skill.projects.map((project, index) => (
//               <div key={project.id} className="relative w-full rounded-lg overflow-hidden shadow-lg group py-4 cursor-pointer">
//                 <Link
//                   href="/projects/[id]"
//                   as={`/projects/${project.id}`}
//                   aria-label={`View details for project ${project.title}`}
//                 >
//                   <Image
//                     src={`/images/${toId(project.title)}.jpg`}
//                     alt={project.title}
//                     width={192}
//                     height={192}
//                     className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                 </Link>
//                 <div className="absolute inset-0 bg-gray-900 bg-opacity-80 text-white p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <h4 className="text-lg font-semibold">{project.title}</h4>
//                   <p className="mb-4">{project.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       )}

//       {/* Articles Section */}
//       {skill.articles && skill.articles.length > 0 && (
//         <>
//           <h3 className="text-xl font-semibold text-center mb-4">Articles</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
//             {skill.articles.map((article) => (
//               <div key={article.id} className="relative w-full rounded-lg overflow-hidden shadow-lg group py-4 cursor-pointer">
//                 <Link
//                   href="/blog/[slug]"
//                   as={`/blog/${article.slug}`}
//                   aria-label={`Read article titled ${article.title}`}
//                 >
//                   <Image
//                     src={article.image}
//                     alt={article.title}
//                     width={192}
//                     height={192}
//                     className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                 </Link>
//                 <div className="absolute inset-0 bg-gray-900 bg-opacity-80 text-white p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <h4 className="text-lg font-semibold">{article.title}</h4>
//                   <p className="mb-4">{article.subtitle}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>

//   )
// }

// export default SkillContent
// SkillContent.tsx

"use client"
// import React from 'react';
// import { Skill } from '@/app/skills/types';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './SkillContent.module.css';

// interface SkillContentProps {
//   skill: any;
// }

// const SkillContent: React.FC<SkillContentProps> = ({ skill }) => {
//   return (
//     <div className={styles.skillContent}>
//       {/* Skill Name and Documentation */}
//       <h2 className={styles.skillName}>{skill.name}</h2>
//       {skill.documentation && (
//         <p className={styles.skillDocumentation}>{skill.documentation}</p>
//       )}

//       {/* Projects Section */}
//       {skill.projects && skill.projects.length > 0 && (
//         <section className={styles.section}>
//           <h3 className={styles.sectionTitle}>Projects</h3>
//           <div className={styles.cardGrid}>
//             {skill.projects.map((project: any) => (
//               <Link key={project.id} href={`/projects/${project.id}`} className={styles.card}>
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   width={300}
//                   height={200}
//                   className={styles.cardImage}
//                 />
//                 <div className={styles.cardContent}>
//                   <h4 className={styles.cardTitle}>{project.title}</h4>
//                   <p className={styles.cardDescription}>
//                     {project.description}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Articles Section */}
//       {skill.articles && skill.articles.length > 0 && (
//         <section className={styles.section}>
//           <h3 className={styles.sectionTitle}>Articles</h3>
//           <div className={styles.cardGrid}>
//             {skill.articles.map((article: any) => (
//               <Link key={article.id} href={`/blog/${article.slug}`} className={styles.card}>
//                 <Image
//                   src={article.image}
//                   alt={article.title}
//                   width={300}
//                   height={200}
//                   className={styles.cardImage}
//                 />
//                 <div className={styles.cardContent}>
//                   <h4 className={styles.cardTitle}>{article.title}</h4>
//                   <p className={styles.cardDescription}>
//                     {article.subtitle}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Experiences Section */}
//       {skill.experiences && skill.experiences.length > 0 && (
//         <section className={styles.section}>
//           <h3 className={styles.sectionTitle}>Experiences</h3>
//           <ul className={styles.experienceList}>
//             {skill.experiences.map((experience: any) => (
//               <li key={experience.id} className={styles.experienceItem}>
//                 <h4 className={styles.experienceRole}>
//                   {experience.role} at {experience.company}
//                 </h4>
//                 {experience.description && (
//                   <p className={styles.experienceDescription}>
//                     {experience.description}
//                   </p>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </section>
//       )}
//     </div>
//   );
// };

// export default SkillContent;
// SkillContent.tsx
import React from 'react';
import { Skill } from '@/app/skills/types';
import Link from 'next/link';
import Image from 'next/image';

interface SkillContentProps {
  skill: Skill;
}

const SkillContent: React.FC<SkillContentProps> = ({ skill }) => {
  return (
    <div className="p-4 bg-white dark:bg-black/70 rounded-lg h-1/2 overflow-y-auto min-h-1/2 w-1/2">
      <h2 className="text-3xl font-bold mb-6 text-center">{skill.name}</h2>

      {/* Projects Section */}
      {skill.projects && skill.projects.length > 0 && (
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skill.projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="block bg-white dark:bg-black/80 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-500 mt-2">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Articles Section */}
      {skill.articles && skill.articles.length > 0 && (
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Articles</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skill.articles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`} className="block bg-white dark:bg-black/80 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{article.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-500 mt-2">{article.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Experiences Section */}
      {skill.experiences && skill.experiences.length > 0 && (
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Experiences</h3>
          <ul className="space-y-4">
            {skill.experiences.map((experience) => (
              <li key={experience.id} className="bg-white dark:bg-black/80 p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold">
                  {experience.role} at {experience.company}
                </h4>
                {experience.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-500 mt-2">{experience.description}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default SkillContent;
