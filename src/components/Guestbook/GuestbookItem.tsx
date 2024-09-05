import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const DynamicAvatar = dynamic(() => import('../shared/Avatar'), {
  ssr: true,
})

const DynamicIconButton = dynamic(
  () => import('../shared/Buttons/IconButton/IconButton'),
  {
    ssr: false,
  }
)

const DynamicArrowUpIcon = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaChevronUp),
  { ssr: false }
)
const DynamicArrowDownIcon = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaChevronDown),
  { ssr: false }
)

interface GuestbookItemProps {
  entry: {
    id: number
    name: string
    message: string
    user_id?: string
    avatar?: string
    created_at: string
    likes?: number
    dislikes?: number
  }
}

const GuestbookItem: React.FC<GuestbookItemProps> = ({ entry }) => {
  return (
    <div className="flex w-full items-center justify-between border-2 border-primary-700 p-4">
      <div>
        <div className="mb-2 flex items-center">
          <DynamicAvatar avatar={entry.avatar} name={entry.name} />
          {entry.user_id ? (
            <Link
              href={`https://github.com/${entry.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              {entry.name}
            </Link>
          ) : (
            <p className="text-lg font-bold text-gray-800 dark:text-white">
              {entry.name}
            </p>
          )}
        </div>
        <p className="text-gray-900 dark:text-gray-300">{entry.message}</p>
        <p className="truncate text-sm text-gray-500">
          {new Date(entry.created_at).toLocaleString()}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <DynamicIconButton
          aria-label="Like"
          onClick={() => console.log(entry.id, 'like')}
          variant="ghost"
          className="text-green-600 hover:text-green-500 active:text-green-700 dark:text-green-400 dark:hover:text-green-300 dark:active:text-green-500"
          icon={<DynamicArrowUpIcon />}
        />
        <p className="mb-0 text-gray-900 dark:text-white">
          {entry.likes || 0} / {entry.dislikes || 0}
        </p>
        <DynamicIconButton
          aria-label="Dislike"
          onClick={() => console.log(entry.id, 'dislike')}
          variant="ghost"
          className="text-red-600 hover:text-red-500 active:text-red-700 dark:text-red-400 dark:hover:text-red-300 dark:active:text-red-500"
          icon={<DynamicArrowDownIcon />}
        />
      </div>
    </div>
  )
}

export default GuestbookItem
