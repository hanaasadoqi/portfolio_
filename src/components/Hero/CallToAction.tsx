'use client'

import React from 'react'
import { LinkButton } from '@/components/shared'
import SocialMediaLinks from './SocialMediaLinks'
import Link from 'next/link'


const CallToAction: React.FC = () => (
  <div className="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
    <div className="flex flex-col items-center gap-4 md:flex-row md:gap-4">
      <Link
        href="#projects"
        aria-label="Explore my projects"
        scroll={true}
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-accent-one to-accent-two hover:shadow-lg hover:shadow-accent-one/30 transition-all duration-300 transform hover:scale-105 focus-visible:ring-2 ring-offset-2 dark:ring-offset-slate-900"
      >
        View My Work
      </Link>

      <Link
        href="/Hanaa_Sadoqi_Resume.pdf"
        download
        aria-label="Download my resume"
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-secondary-900 dark:text-secondary-50 border-2 border-secondary-300 dark:border-secondary-700 hover:border-accent-one/50 dark:hover:border-accent-one/50 hover:bg-secondary-100 dark:hover:bg-secondary-800/50 transition-all duration-300 focus-visible:ring-2 ring-offset-2 dark:ring-offset-slate-900"
      >
        Download Resume
      </Link>
    </div>
    <SocialMediaLinks />
  </div>
)

export default React.memo(CallToAction)
