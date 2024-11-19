'use client'

import React from 'react'
import { LinkButton } from '@/components/shared'
import SocialMediaLinks from './SocialMediaLinks'
import Link from 'next/link'


const CallToAction: React.FC = () => (
  <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-left">
    <h3 className="my-0 ml-3 text-lg font-medium text-gray-800 dark:text-gray-200 lg:text-xl">
      {"Looking to collaborate? Let's connect!"}
    </h3>
    <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
      <Link
        href="#projects"
        aria-label="Explore my projects"
        scroll={true}
        className='px-3 py-1.5 rounded-md text-primary-500 border-transparent hover:bg-primary-100 dark:hover:bg-primary-900 hover:border-primary-700 dark:hover:border-primary-300 hover:text-primary-700 dark:hover:text-white hover:shadow-md focus-visible:ring-primary-100 dark:focus-visible:ring-primary-900 active:bg-primary-200 dark:active:bg-primary-800'
      >
        Explore My Projects
      </Link>

      <Link
        href="/Hanaa_Sadoqi_Resume.pdf"
        download
        aria-label="Download my resume"
        className='rounded-sm bg-transparent text-primary-800 dark:hover:text-secondary-300 dark:focus-visible:text-secondary-400 dark:active:text-secondary-400 hover:text-secondary-600 focus-visible:text-secondary-700 active:text-secondary-700'
      >
        Download Resume
      </Link>
      <SocialMediaLinks />
    </div>
  </div>
)

export default React.memo(CallToAction)
