'use client'

import React, { useState, useEffect, useRef } from 'react'
import Icon from '../shared/Icon/Icon'
import { IconLibrary } from '../shared'
import Modal from '../shared/Modal/Modal'
import SkillModalContent from './SkillModalContent'
import useSkills from './useSkills'
import SearchBar from './SearchBar'
import Filter from './Filter'
import Sort from './Sort'

export interface SkillProps {
  id: number
  name: string
  icon: keyof typeof IconLibrary | string
  startYear: number
  experience: string[]
  projects: string[]
  tags: string[]
  documentation: string
}

interface SkillCardProps extends SkillProps {
  handleClick: (skill: SkillProps) => void
}

const SkillCard: React.FC<SkillCardProps> = ({
  id,
  name,
  icon,
  startYear,
  experience,
  tags,
  projects,
  documentation,
  handleClick,
}) => {
  const IconComponent = icon
    ? IconLibrary[icon as keyof typeof IconLibrary]
    : IconLibrary['Loading']

  return (
    <div
      className="relative transform cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-indigo-500 hover:shadow-2xl"
      style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
      onClick={() =>
        handleClick({
          id,
          name,
          icon,
          startYear,
          experience,
          tags,
          projects,
          documentation,
        })
      }
      role="button"
      tabIndex={0}
    >
      <div className="flex flex-col items-center space-y-4 p-6">
        <Icon
          icon={<IconComponent />}
          ariaLabel={name}
          className="text-4xl transition-transform duration-300 hover:scale-110"
        />
        <h3 className="text-center text-2xl font-medium">{name}</h3>
        <div className="flex flex-col justify-center space-x-4 lg:flex-row">
          <span className="flex items-center whitespace-nowrap rounded-full bg-green-500 px-3 py-1 text-sm text-white">
            Experience: {experience.length}
          </span>
          <span className="flex items-center whitespace-nowrap rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
            Projects: {projects.length}
          </span>
          <span className="flex items-center whitespace-nowrap rounded-full bg-purple-500 px-3 py-1 text-sm text-white">
            Years: {new Date().getFullYear() - startYear}
          </span>
        </div>
      </div>
    </div>
  )
}

interface SkillsProps {
  skillsData: SkillProps[]
}

const Skills: React.FC<SkillsProps> = ({ skillsData: skills }) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillProps | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const {
    filteredSkills,
    filters,
    sortOption,
    searchQuery,
    setFilters,
    setSortOption,
    setSearchQuery,
    resetFiltersAndSort,
  } = useSkills(skills)

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
    if (isSortOpen) setIsSortOpen(false)
    if (isSearchOpen) setIsSearchOpen(false)
  }

  const toggleSort = () => {
    setIsSortOpen(!isSortOpen)
    if (isFilterOpen) setIsFilterOpen(false)
    if (isSearchOpen) setIsSearchOpen(false)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (isFilterOpen) setIsFilterOpen(false)
    if (isSortOpen) setIsSortOpen(false)
  }

  const openModal = (skill: SkillProps) => {
    setSelectedSkill(skill)
  }

  const closeModal = () => {
    setSelectedSkill(null)
  }

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex space-x-4">
          <button
            onClick={toggleFilter}
            aria-expanded={isFilterOpen}
            className={`rounded-full bg-gradient-to-r from-gray-700 to-gray-500 px-4 py-2 text-white shadow-md hover:from-gray-600 hover:to-gray-400 dark:from-gray-600 dark:to-gray-400 dark:hover:from-gray-500 dark:hover:to-gray-300 ${
              isFilterOpen ? 'bg-opacity-80' : ''
            }`}
          >
            Filter
          </button>
          <button
            onClick={toggleSort}
            aria-expanded={isSortOpen}
            className={`rounded-full bg-gradient-to-r from-gray-700 to-gray-500 px-4 py-2 text-white shadow-md hover:from-gray-600 hover:to-gray-400 dark:from-gray-600 dark:to-gray-400 dark:hover:from-gray-500 dark:hover:to-gray-300 ${
              isSortOpen ? 'bg-opacity-80' : ''
            }`}
          >
            Sort
          </button>
          <button
            onClick={toggleSearch}
            aria-expanded={isSearchOpen}
            className="rounded-full bg-gradient-to-r from-gray-700 to-gray-500 px-4 py-2 text-white shadow-md hover:from-gray-600 hover:to-gray-400 dark:from-gray-600 dark:to-gray-400 dark:hover:from-gray-500 dark:hover:to-gray-300"
            title="Search Skills"
          >
            <Icon icon={<IconLibrary.search />} ariaLabel="Search" />
          </button>
          <button
            onClick={resetFiltersAndSort}
            className="rounded-full bg-red-600 px-4 py-2 text-white shadow-md hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-400"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSearchOpen={isSearchOpen}
        toggleSearch={toggleSearch}
      />

      {/* Filter Accordion */}
      {isFilterOpen && <Filter filters={filters} setFilters={setFilters} />}

      {/* Sort Accordion */}
      {isSortOpen && (
        <Sort sortOption={sortOption} setSortOption={setSortOption} />
      )}

      <div className="grid auto-rows-auto grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredSkills.map(skill => {
          const {
            id,
            name,
            icon: iconName,
            startYear,
            experience,
            projects,
            tags,
            documentation,
          } = skill
          return (
            <SkillCard
              id={id}
              key={name}
              name={name}
              icon={iconName}
              startYear={startYear}
              experience={experience}
              projects={projects}
              tags={tags}
              documentation={documentation}
              handleClick={openModal}
            />
          )
        })}
      </div>
      <Modal isOpen={!!selectedSkill} onClose={closeModal}>
        {selectedSkill && <SkillModalContent skill={selectedSkill} />}
      </Modal>
    </>
  )
}

export default Skills

// <div
// key={name}
// className="relative transform cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-indigo-500 hover:shadow-2xl"
// style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
// onClick={() => openModal(skill)}
// role="button"
// tabIndex={0}
// >
// <div className="flex flex-col items-center space-y-4 p-6">
//   <Icon
//     icon={<IconLibrary[iconName as keyof typeof IconLibrary] />}
//     ariaLabel={name}
//     className="text-4xl transition-transform duration-300 hover:scale-110"
//   />
//   <h3 className="text-center text-2xl font-medium">{name}</h3>
//   <div className="flex justify-center space-x-4">
//     <span className="flex items-center rounded-full bg-green-500 px-3 py-1 text-sm text-white">Experience: {experience.length}</span>
//     <span className="flex items-center rounded-full bg-blue-500 px-3 py-1 text-sm text-white">Projects: {projects.length}</span>
//     <span className="flex items-center rounded-full bg-purple-500 px-3 py-1 text-sm text-white">Years: {new Date().getFullYear() - startYear}</span>
//   </div>
// </div>
// </div>
// )
//           );
//         })}
//       </div>
//       <Modal isOpen={!!selectedSkill} onClose={closeModal}>
//         {selectedSkill && <SkillModalContent skill={selectedSkill} />}
//       </Modal>
//     </>
//   );
// };

// export default Skills;
