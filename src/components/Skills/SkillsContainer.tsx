'use client'

import React, { useState } from 'react'
import SkillCard from './SkillCard'
import Modal from '../UI/Modal'
import Button from '@/components/UI/Button'
import IconButton from '@/components/shared/Buttons/IconButton/IconButton'
import SkillControlsDisplay from './SkillControlsDisplay'
import { Skill } from '@/types/data'
import SkillModal from './SkillModal'
import dynamic from 'next/dynamic'
import { useSkillsContext } from '@/context/SkillsContext'

const DynamicFaFilter = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaFilter),
  { ssr: false }
)
const DynamicFaSort = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaSort),
  { ssr: false }
)
const DynamicFaSearch = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaSearch),
  { ssr: false }
)
const DynamicFaRedo = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaRedo),
  { ssr: false }
)

const SkillsContainer: React.FC = () => {
  const { filteredSkills: skills, resetFiltersAndSort } = useSkillsContext() // Access normalized data from context
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null) // State to track selected skill ID
  const [displayedSkillsCount, setDisplayedSkillsCount] = useState(8) // State for pagination
  const [currentControl, setCurrentControl] = useState<string | null>(null) // State to track current control being displayed

  const openModal = (skill: Skill) => setSelectedSkill(skill)

  const closeModal = () => setSelectedSkill(null)

  const handleShowMore = () =>
    setDisplayedSkillsCount(prevCount => prevCount + 8)

  const resetControls = () => {
    setCurrentControl(null)
    resetFiltersAndSort()
  }

  const toggleControl = (control: string) => {
    setCurrentControl(currentControl === control ? null : control)
  }

  return (
    <section
      id="skills"
      data-id="skills"
      className="my-48 flex min-h-screen w-screen flex-col items-center justify-center md:px-12"
    >
      <SkillControlsDisplay
        currentControl={currentControl}
        resetControls={resetControls}
      />

      <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-between p-2 md:flex-row">
          <h3 className="text-2xl md:text-3xl lg:text-4xl">Skills</h3>

          <div className="flex space-x-2">
            <IconButton
              size="sm"
              icon={<DynamicFaFilter />}
              onClick={() => toggleControl('filter')}
              ariaLabel="Toggle filter"
              variant={currentControl === 'filter' ? 'outline' : 'icon'}
            />
            <IconButton
              size="sm"
              icon={<DynamicFaSort />}
              onClick={() => toggleControl('sort')}
              ariaLabel="Toggle sort"
              variant={currentControl === 'sort' ? 'outline' : 'icon'}
            />
            <IconButton
              size="sm"
              icon={<DynamicFaSearch />}
              onClick={() => toggleControl('search')}
              ariaLabel="Toggle search"
              variant={currentControl === 'search' ? 'outline' : 'icon'}
            />
            <IconButton
              size="sm"
              icon={<DynamicFaRedo />}
              onClick={resetFiltersAndSort}
              ariaLabel="Reset filters and sort"
              variant="danger"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="translate-transform grid w-full auto-rows-auto grid-cols-2 justify-items-stretch gap-1 text-white duration-300 ease-linear sm:grid-cols-3 md:grid-cols-4 md:gap-2 lg:gap-6 xl:grid-cols-5">
          {Object.values(skills)
            .slice(0, displayedSkillsCount)
            .map(skill => (
              <SkillCard key={skill.id} skill={skill} handleClick={openModal} />
            ))}
        </div>

        {/* Show More Button */}
        {Object.keys(skills).length > displayedSkillsCount && (
          <div className="mt-6 flex justify-center">
            <Button onClick={handleShowMore} variant="primary" fullWidth>
              Show More
            </Button>
          </div>
        )}
      </div>

      <Modal isOpen={!!selectedSkill} onClose={closeModal}>
        {selectedSkill && (
          <SkillModal skill={selectedSkill} onLinkClick={closeModal} />
        )}
      </Modal>
    </section>
  )
}

export default SkillsContainer
