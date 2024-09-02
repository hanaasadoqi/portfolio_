'use client'
import React from 'react'
import { LinkButton } from '@/components/shared'
import dynamic from 'next/dynamic'

const DynamicFaGithub = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaGithub),
  { ssr: false }
)

const DynamicFaLinkedin = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaLinkedin),
  { ssr: false }
)

const DynamicFaTwitter = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaTwitter),
  { ssr: false }
)

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

      <div className="flex md:mt-0">
        <LinkButton
          href="https://www.linkedin.com/in/hanaasadoqi"
          ariaLabel="LinkedIn Profile"
          variant="icon"
          tooltip="LinkedIn"
          tooltipId="linkedin-tooltip"
          size="md"
        >
          <DynamicFaLinkedin size={32} />
        </LinkButton>
        <LinkButton
          href="https://www.github.com/hsadoqi"
          ariaLabel="GitHub Profile"
          variant="icon"
          tooltip="GitHub"
          tooltipId="github-tooltip"
          size="md"
        >
          <DynamicFaGithub size={32} />
        </LinkButton>
        <LinkButton
          href="https://www.twitter.com/hanaasadoqi"
          ariaLabel="Twitter Profile"
          variant="icon"
          tooltip="Twitter"
          tooltipId="twitter-tooltip"
          size="md"
        >
          <DynamicFaTwitter size={32} />
        </LinkButton>
      </div>
    </div>
  </div>
)

export default React.memo(CallToAction)
