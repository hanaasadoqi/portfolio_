'use client'

// import { useProjectContext } from '@/context/ProjectContext'

import React, { useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import ProjectCard from './ProjectCard'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { ProjectWithDetails, Article, Skill, Project } from '@/types/data'
import ScrollButton from '../shared/buttons/ScrollButton'
import { useData } from '@/context/DataContext'

const Slider = dynamic(() => import('react-slick'), { ssr: false })

interface ArrowProps {
  style?: React.CSSProperties
  className?: string
  onClick?: () => void
}

const commonButtonStyles =
  'bg-white text-secondary-800 dark:hover:text-secondary-900 dark:bg-secondary-900 text-primary-100 hover:bg-primary-700 active:bg-primary-800 dark:bg-primary-100 dark:hover:bg-primary-200 dark:active:bg-primary-300 dark:text-primary-100'

const CustomPrevArrow = (props: ArrowProps) => {
  return (
    <ScrollButton
      direction="left"
      {...props}
      visible={true}
      className={commonButtonStyles}
    />
  )
}

const CustomNextArrow = (props: ArrowProps) => {
  return (
    <ScrollButton
      direction="right"
      {...props}
      visible={true}
      className={commonButtonStyles}
    />
  )
}

const sliderSettings = {
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  touchMove: true, // Ensure touch movement is enabled
  draggable: true, // Allow dragging on desktop
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  centerPadding: '50px',
  responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        centerPadding: '0px',
      },
    },
    {
      breakpoint: 1424,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState([])
  const [filters, setFilters] = useState<string[]>([])

  useEffect(() => {
    fetch(`/api/projects`)
      .then(res => res.json())
      .then(data => setProjects(data))
  })
  // const { projects } = useData()

  // const {
  //   filteredProjects,
  //   filters,
  //   sortOption,
  //   setFilters,
  //   setSortOption,
  //   setSearchQuery,
  //   resetFiltersAndSort,
  // } = useProjectContext()

  const toggleFilter = (filter: string) => {
    //   setFilters(prevFilters =>
    //     prevFilters.includes(filter)
    //       ? prevFilters.filter(f => f !== filter)
    //       : [...prevFilters, filter]
    //   )
    console.log(filter)
  }

  const handleSortChange = (option: string) => {
    console.log(option)
    //   setSortOption(option)
  }

  return (
    <section
      id="projects"
      data-id="projects"
      className="my-48 flex min-h-screen w-screen flex-col items-center justify-center py-24"
    >
      <div className="slider-container relative mx-auto w-full max-w-7xl px-4 py-8">
        <h3 className="p-4 text-center text-2xl text-primary-900 md:text-left md:text-3xl lg:text-4xl">
          Projects
        </h3>
        <div className="mb-6 flex flex-col items-center justify-between space-y-2 md:flex-row">
          <div className="flex space-x-4">
            {['Frontend', 'Backend', 'Full-Stack'].map(filter => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-gray-800 dark:text-white ${filters.includes(filter)
                  ? 'bg-blue-600'
                  : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => handleSortChange('Date')}
              className="whitespace-nowrap rounded-full bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-200"
            >
              Sort by Date
            </button>
            <button
              onClick={() => handleSortChange('Title')}
              className="whitespace-nowrap rounded-full bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-200"
            >
              Sort by Title
            </button>
          </div>
        </div>
        <Slider {...sliderSettings}>
          {projects.map((project: any) => (
            <div key={project.id} className="px-2">
              <ProjectCard {...project} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Projects
