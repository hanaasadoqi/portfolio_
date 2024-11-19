'use client'

import React, { useState, useEffect } from 'react'
import SocialMediaButton from './SocialMediaButton'
import { SocialMediaTooltip } from './Tooltip'

const StickySocialMediaLinks: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const heroSection = document.getElementById('hero')
    if (!heroSection) {
      console.warn('Hero section not found for StickySocialMediaLinkButtons')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    )

    observer.observe(heroSection)

    return () => {
      observer.unobserve(heroSection)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-40 hidden md:flex">
      <SocialMediaButton
        href="https://www.linkedin.com/in/hanaasadoqi"
        ariaLabel="LinkedIn Profile"
        tooltip="LinkedIn"
        icon="linkedin"
      />
      <SocialMediaButton
        href="https://www.github.com/hsadoqi"
        ariaLabel="GitHub Profile"
        tooltip="GitHub"
        icon="github"
      />
      <SocialMediaButton
        href="https://www.twitter.com/hanaasadoqi"
        ariaLabel="Twitter Profile"
        tooltip="Twitter"
        icon="twitter"
      />
      <SocialMediaTooltip />
    </div>
  )
}

export default StickySocialMediaLinks
