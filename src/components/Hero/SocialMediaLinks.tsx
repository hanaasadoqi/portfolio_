"use client"

import React, { memo } from 'react';
import { LinkButton } from '../shared';
import dynamic from 'next/dynamic'
import Link from 'next/link';

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

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="flex md:mt-0 gap-4">
      <Link
        href="https://www.linkedin.com/in/hanaasadoqi"
        aria-label="LinkedIn Profile"
        className='rounded-sm bg-transparent text-primary-800 hover:text-secondary-700 focus-visible:text-secondary-900 active:text-secondary-900 dark:hover:text-secondary-700 dark:focus-visible:text-secondary-900 dark:active:text-secondary-900'
        data-tooltip-content="LinkedIn"
        data-tooltip-id="linkedin-tooltip"
      >
        <DynamicFaLinkedin size={32} />
      </Link>
      <Link
        href="https://www.github.com/hsadoqi"
        aria-label="GitHub Profile"
        className='rounded-sm bg-transparent text-primary-800 hover:text-secondary-700 focus-visible:text-secondary-900 active:text-secondary-900 dark:hover:text-secondary-700 dark:focus-visible:text-secondary-900 dark:active:text-secondary-900'
        data-tooltip-content="GitHub"
        data-tooltip-id="github-tooltip"
      >
        <DynamicFaGithub size={32} />
      </Link>
      <Link
        href="https://www.twitter.com/hanaasadoqi"
        aria-label="Twitter Profile"
        className='rounded-sm bg-transparent text-primary-800 hover:text-secondary-700 focus-visible:text-secondary-900 active:text-secondary-900 dark:hover:text-secondary-700 dark:focus-visible:text-secondary-900 dark:active:text-secondary-900'
        data-tooltip-content="Twitter"
        data-tooltip-id="twitter-tooltip"
      >
        <DynamicFaTwitter size={32} />
      </Link>
    </div>
  )
}

export default memo(SocialMediaLinks);