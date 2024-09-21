'use client'

import React from 'react'
import { LinkButton } from '@/components/shared'
import SocialMediaLinks from './SocialMediaLinks'


const CallToAction: React.FC = () => (
  <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-left">
    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 lg:text-xl">
      {"Looking to collaborate? Let's connect!"}
    </h3>
    <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      <LinkButton
        href="#projects"
        variant="primary"
        ariaLabel="Explore my projects"
        size="lg"
        scroll={true}
      >
        Explore My Projects
      </LinkButton>

      <LinkButton
        href="/Hanaa_Sadoqi_Resume.pdf"
        download
        size="lg"
        ariaLabel="Download my resume"
        variant="link"
      >
        Download Resume
      </LinkButton>
      <SocialMediaLinks />
    </div>
  </div>
)

export default React.memo(CallToAction)
