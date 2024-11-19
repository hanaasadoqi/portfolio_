import { icons } from './SocialMediaIcons'
import Link from 'next/link';

const SocialMediaButton: React.FC<{
  href: string
  ariaLabel: string
  tooltip: string
  icon: keyof typeof icons
}> = ({ href, ariaLabel, tooltip, icon }) => {
  const IconSvg = icons[icon]

  return (
    <Link
      href={href}
      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      data-tooltip-content={tooltip}
      data-tooltip-id="social-media-tooltip"
      data-tooltip-place="right"
    >
      {IconSvg}
    </Link>
  )
}

export default SocialMediaButton