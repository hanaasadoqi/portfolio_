import React from 'react'
import Hero from '@/components/Hero/Hero'
import SkillsContainer from './skills/components/SkillContainer'
import About from './about/components/About'
import { ContactForm } from './contact'
import { Project } from './projects/types'
import Link from 'next/link'
import Card from './projects/components/Card'
import { fetchProjects } from './projects/actions'
import Writing from '@/components/Writing/Writing'
import { FaCode, FaLaptopCode, FaPlay, FaServer } from 'react-icons/fa'
import { MdOpenInBrowser } from 'react-icons/md'
import { LinkButton } from '@/components/shared'
import Image from 'next/image'
import SectionLayout from '@/app/shared/SectionLayout'

export default async function Home() {
  const projects: Project[] = await fetchProjects();

  return (
    <div className="flex h-full w-full flex-col items-center overflow-hidden bg-transparent">
      <SectionLayout id="hero" full>
        <Hero />
      </SectionLayout>
      <SectionLayout id="about">
        <About />
      </SectionLayout>
      <SectionLayout id="skills">
        <SkillsContainer />
      </SectionLayout>
      {/* <SectionLayout id="projects">
        <ul className='flex overflow-scroll justify-center items-center'>
          {projects.map((project: Project) => (
            <li key={project.id} className="mr-4">
              <Link href={`/projects/${project.id}`}>
                <Card project={project} />
              </Link>
            </li>
          ))}
        </ul>
      </SectionLayout> */}
      {/* <SectionLayout id="projects">
        <div className="flex flex-wrap justify-between gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative w-full md:w-1/3 lg:w-1/4 rounded-lg overflow-hidden shadow-lg group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                <p className="text-sm text-gray-600 line-clamp-3">{project.description}</p>
              </div>
              <div className="absolute inset-0 bg-gray-900 bg-opacity-80 text-white p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  {project.details.demoUrl && (
                    <Link href={project.details.demoUrl} className="text-blue-400">
                      Live Demo
                    </Link>
                  )}
                  {project.details.codeRepo && (
                    <Link href={project.details.codeRepo} className="text-blue-400">
                      Code Repo
                    </Link>
                  )}
                  {project.details.videoDemo && (
                    <Link href={project.details.videoDemo} className="text-blue-400">
                      Video
                    </Link>
                  )}
                </div>
                <div className="mt-2">
                  {project.skills?.map((tech, index) => (
                    <span key={index} className="inline-block bg-gray-700 rounded-full px-2 py-1 text-xs font-semibold text-white mr-2">
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionLayout> */}

      <SectionLayout id="projects">
        <div className="flex flex-wrap justify-between">
          <div className="flex h-full w-full">
            <div className="w-full md:w-2/3 h-full relative">
              <div className="h-full rounded-lg overflow-hidden shadow-lg group relative">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-full bg-gray-900 bg-opacity-80 text-white p-4 flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-white">{projects[0].title}</h3>
                  <p className="mb-4 text-white">{projects[0].description}</p>

                  <div className="flex justify-center items-center p-4 gap-2">
                    {projects[0].details.videoDemo && (
                      <Link
                        href={projects[0].details.videoDemo}
                        data-tooltip-id="link-tooltip"
                        data-tooltip-content="Live Demo"
                        className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-500 dark:hover:bg-blue-600"
                        aria-label={`${projects[0].title} Live Demo`}
                      >
                        <FaPlay />
                      </Link>
                    )}

                    {projects[0].details.backendRepo && projects[0].details.backendRepo !== 'N/A' && (
                      <Link
                        href={projects[0].details.backendRepo}
                        data-tooltip-id="link-tooltip"
                        data-tooltip-content="Backend Code"
                        className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
                        aria-label={`${projects[0].title} Backend Repository`}
                      >
                        <FaServer />
                      </Link>
                    )}

                    {projects[0].details.frontendRepo && projects[0].details.frontendRepo !== 'N/A' && (
                      <Link
                        href={projects[0].details.frontendRepo}
                        data-tooltip-id="link-tooltip"
                        data-tooltip-content="Frontend Code"
                        className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
                        aria-label={`${projects[0].title} Frontend Repository`}
                      >
                        <FaLaptopCode />
                      </Link>
                    )}

                    {projects[0].details.codeRepo && projects[0].details.codeRepo !== 'N/A' && (
                      <Link
                        href={projects[0].details.codeRepo}
                        data-tooltip-id="link-tooltip"
                        data-tooltip-content="Code Repository"
                        className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
                        aria-label={`${projects[0].title} Code Repository`}
                      >
                        <FaCode />
                      </Link>
                    )}

                    {projects[0].details.demoUrl && (
                      <Link
                        href={projects[0].details.demoUrl}
                        data-tooltip-id="link-tooltip"
                        data-tooltip-content="Demo"
                        className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
                        aria-label={`${projects[0].title} Demo`}
                      >
                        <MdOpenInBrowser />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-col md:order-2">
              {projects.slice(1, 3).map((project, index) => (
                <div key={index} className="relative h-full rounded-lg overflow-hidden shadow-lg group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute bottom-0 w-full bg-gray-900 bg-opacity-80 text-white p-4 flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-300">
                    <h4 className="text-base text-white">{project.title}</h4>
                    <p className="mb-2 line-clamp-5 text-wrap truncate text-white">{project.description}</p>
                    <div className="flex justify-center items-center p-4 gap-2">
                      {project.details.videoDemo && (
                        <Link
                          href={project.details.videoDemo}
                          data-tooltip-id="link-tooltip"
                          data-tooltip-content="Live Demo"
                          className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-500 dark:hover:bg-blue-600"
                          aria-label={`${project.title} Live Demo`}
                        >
                          <FaPlay />
                        </Link>
                      )}

                      {project.details.backendRepo && project.details.backendRepo !== 'N/A' && (
                        <Link
                          href={project.details.backendRepo}
                          data-tooltip-id="link-tooltip"
                          data-tooltip-content="Backend Code"
                          className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
                          aria-label={`${project.title} Backend Repository`}
                        >
                          <FaServer />
                        </Link>
                      )}

                      {project.details.frontendRepo && project.details.frontendRepo !== 'N/A' && (
                        <Link
                          href={project.details.frontendRepo}
                          data-tooltip-id="link-tooltip"
                          data-tooltip-content="Frontend Code"
                          className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
                          aria-label={`${project.title} Frontend Repository`}
                        >
                          <FaLaptopCode />
                        </Link>
                      )}

                      {project.details.codeRepo && project.details.codeRepo !== 'N/A' && (
                        <Link
                          href={project.details.codeRepo}
                          data-tooltip-id="link-tooltip"
                          data-tooltip-content="Code Repository"
                          className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
                          aria-label={`${project.title} Code Repository`}
                        >
                          <FaCode />
                        </Link>
                      )}

                      {project.details.demoUrl && (
                        <Link
                          href={project.details.demoUrl}
                          data-tooltip-id="link-tooltip"
                          data-tooltip-content="Demo"
                          className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
                          aria-label={`${project.title} Demo`}
                        >
                          <MdOpenInBrowser />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-full w-full">
            <div className="w-full flex">
              {projects.slice(3, 6).map((project, index) => (
                <div key={index} className="relative w-1/3 h-72 rounded-lg overflow-hidden shadow-lg group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute bottom-0 w-full bg-white bg-opacity-90 text-gray-900 p-4 flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-300">
                    <h4 className="text-base">{project.title}</h4>
                    <p className="mb-2 line-clamp-5 truncate text-wrap">{project.description}</p>
                    <div className="flex space-x-2">
                      {/* {project.details.codeRepo && (
                        <Link href={project.details.codeRepo} className="text-blue-400 text-sm">
                          Code Repo
                        </Link>
                      )}
                      {project.details.videoDemo && (
                        <Link href={project.details.videoDemo} className="text-blue-400 text-sm">
                          Video
                        </Link>
                      )}
                      {project.details.backendRepo && (
                        <Link href={project.details.backendRepo} className="text-blue-400 text-sm">
                          Backend Repo
                        </Link>
                      )}
                      {project.details.frontendRepo && (
                        <Link href={project.details.frontendRepo} className="text-blue-400 text-sm">
                          Frontend Repo
                        </Link>
                      )}
                      {project.details.demoUrl && (
                        <Link href={project.details.demoUrl} className="text-blue-400 text-sm">
                          Demo
                        </Link>
                      )} */}
                      <div className="flex justify-center items-center p-4 gap-2">
                        {project.details.videoDemo && (
                          <Link
                            href={project.details.videoDemo}
                            data-tooltip-id="link-tooltip"
                            data-tooltip-content="Live Demo"
                            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-500 dark:hover:bg-blue-600"
                            aria-label={`${project.title} Live Demo`}
                          >
                            <FaPlay />
                          </Link>
                        )}

                        {project.details.backendRepo && project.details.backendRepo !== 'N/A' && (
                          <Link
                            href={project.details.backendRepo}
                            data-tooltip-id="link-tooltip"
                            data-tooltip-content="Backend Code"
                            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
                            aria-label={`${project.title} Backend Repository`}
                          >
                            <FaServer />
                          </Link>
                        )}

                        {project.details.frontendRepo && project.details.frontendRepo !== 'N/A' && (
                          <Link
                            href={project.details.frontendRepo}
                            data-tooltip-id="link-tooltip"
                            data-tooltip-content="Frontend Code"
                            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
                            aria-label={`${project.title} Frontend Repository`}
                          >
                            <FaLaptopCode />
                          </Link>
                        )}

                        {project.details.codeRepo && project.details.codeRepo !== 'N/A' && (
                          <Link
                            href={project.details.codeRepo}
                            data-tooltip-id="link-tooltip"
                            data-tooltip-content="Code Repository"
                            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
                            aria-label={`${project.title} Code Repository`}
                          >
                            <FaCode />
                          </Link>
                        )}

                        {project.details.demoUrl && (
                          <Link
                            href={project.details.demoUrl}
                            data-tooltip-id="link-tooltip"
                            data-tooltip-content="Demo"
                            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
                            aria-label={`${project.title} Demo`}
                          >
                            <MdOpenInBrowser />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionLayout >
      <SectionLayout id="writing">
        <Writing />
      </SectionLayout>
      <SectionLayout id="contact-me" full>
        <ContactForm />
      </SectionLayout>
    </div >
  )
}