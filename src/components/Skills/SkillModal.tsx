import React, { useMemo } from 'react'
import { SkillWithDetails } from '@/types/data'
import clsx from 'clsx'
import Link from 'next/link'
import { Icon, IconLibrary } from '../shared'
import { LinkButton } from '../shared'

interface SkillModalContentProps {
  skill: SkillWithDetails
  onLinkClick?: () => void // For linking to other sections
}

// ModalCard component for displaying items
interface ModalCardProps {
  children: React.ReactNode
  onClick?: () => void // Handle clicks for links
}

const ModalCard: React.FC<ModalCardProps> = React.memo(
  ({ children, onClick }) => {
    return (
      <div
        className={clsx(
          'flex items-center space-x-3 rounded-md p-3 transition-colors hover:bg-blue-100 dark:hover:bg-gray-700'
        )}
      >
        <h6 className="m-0 text-lg font-medium text-gray-800 dark:text-gray-200">
          {children}
        </h6>
      </div>
    )
  }
)

ModalCard.displayName = 'ModalCard'

// ModalContent component for displaying a list of items
interface ModalContentProps {
  title: string
  items: Array<{
    company?: string
    title?: string
    school?: string
    id?: number
  }>
  onItemLinkClick?: () => void // Handle item clicks
}

const ModalContent: React.FC<ModalContentProps> = React.memo(
  ({ title, items, onItemLinkClick }) => {
    if (!items || items.length === 0) return null
    return (
      <div className="flex flex-col space-y-4">
        <h5 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h5>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className="m-1 rounded-md text-sm ring-2 ring-primary-200"
            >
              <Link href={`#${title.toLowerCase()}`} onClick={onItemLinkClick}>
                <ModalCard onClick={onItemLinkClick}>
                  {item.company || item.title || item.school}
                </ModalCard>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
)

ModalContent.displayName = 'ModalContent'

const SkillModal: React.FC<SkillModalContentProps> = ({
  skill,
  onLinkClick,
}) => {
  // Memoized skill details to prevent recalculation on every render
  const experienceItems = useMemo(
    () =>
      skill.experienceDetails?.map(exp => ({
        company: exp.company,
        id: exp.id, // Include ID for direct linking
      })) || [],
    [skill.experienceDetails]
  )

  const projectItems = useMemo(
    () =>
      skill.projectDetails?.map(proj => ({
        title: proj.title,
        id: proj.id, // Include ID for direct linking
      })) || [],
    [skill.projectDetails]
  )

  const educationItems = useMemo(
    () =>
      skill.educationDetails?.map(edu => ({
        school: edu.school,
        id: edu.id, // Include ID for direct linking
      })) || [],
    [skill.educationDetails]
  )

  const articleItems = useMemo(
    () =>
      skill.articleDetails?.map(article => ({
        title: article.title,
        id: article.id,
      })) || [],
    [skill.articleDetails]
  )

  const itemDetails = [
    {
      title: 'Experience',
      items: experienceItems,
    },
    {
      title: 'Projects',
      items: projectItems,
    },
    {
      title: 'Education',
      items: educationItems,
    },
    {
      title: 'Articles',
      items: articleItems,
    },
  ]

  const IconComponent = skill.icon
    ? IconLibrary[skill.icon as keyof typeof IconLibrary]
    : IconLibrary['Loading']
  return (
    <div>
      <div className="mb-8 flex w-full items-center justify-between space-x-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center justify-center rounded-full bg-transparent">
            <Icon
              icon={<IconComponent />}
              ariaLabel={skill.name}
              size="md"
              className="text-3xl text-primary-800 transition-transform duration-300 group-hover:scale-110 dark:text-primary-200 md:text-3xl lg:text-4xl"
            />
          </div>
          <h2
            id="skill-modal-title"
            className="m-0 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {skill.name}
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <LinkButton
            icon={<IconLibrary.externalLink />}
            ariaLabel={`Link to official ${skill.name} documentation`}
            tooltip="View Documentation"
            tooltipId="view-documentation-tooltip"
            href={skill.documentation}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="ghost"
            iconOnly
          />
        </div>
      </div>
      <div className="space-y-8 text-gray-900 dark:text-white">
        {itemDetails.map(({ title, items }, index) => (
          <ModalContent
            key={`modal-content-${index + 1}`}
            title={title}
            items={items}
            onItemLinkClick={onLinkClick}
          />
        ))}
      </div>
    </div>
  )
}

export default React.memo(SkillModal)
