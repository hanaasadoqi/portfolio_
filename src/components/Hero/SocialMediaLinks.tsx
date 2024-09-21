"use client"

import React, { memo } from 'react';
import { LinkButton } from '../shared';
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

const SocialMediaLinks: React.FC = () => {
  return (
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
  )
}

export default memo(SocialMediaLinks);