'use client';

import React, { useState, useEffect } from 'react';
import { LinkButton } from '@/components';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import clsx from 'clsx';

const ReactTooltip = dynamic(
  () => import('react-tooltip').then(mod => mod.Tooltip),
  {
    ssr: false,
  }
)

const DynamicFaLinkedin = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaLinkedin),
  { ssr: false }
);

const DynamicFaGithub = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaGithub),
  { ssr: false }
);

const DynamicFaTwitter = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaTwitter),
  { ssr: false }
);

const StickySocialMediaLinks: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) {
      console.warn('Hero section not found for StickySocialMediaLinkButtons');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroSection);

    return () => {
      observer.unobserve(heroSection);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className={clsx(
            'fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-40',
            'hidden md:flex'
          )}
        >
          {/* LinkedIn */}
          <LinkButton href="https://www.linkedin.com/in/hanaasadoqi"
            className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            aria-label="LinkButtonedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
            tooltip='LinkedIn'
            tooltipId='social-media-tooltip'
            tooltipPlace='top-end'
            variant="icon"
          >
            <DynamicFaLinkedin size={24} />
          </LinkButton>

          {/* GitHub */}
          <LinkButton href="https://www.github.com/hsadoqi"
            className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            aria-label="GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
            tooltip='GitHub'
            tooltipId='social-media-tooltip'
            tooltipPlace='top-end'
            variant="icon"
          >
            <DynamicFaGithub size={24} />
          </LinkButton>

          {/* Twitter */}
          <LinkButton href="https://www.twitter.com/hanaasadoqi"
            className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            aria-label="Twitter Profile"
            target="_blank"
            rel="noopener noreferrer"
            tooltip='Twitter'
            tooltipId='social-media-tooltip'
            tooltipPlace='top-end'
            variant="icon"
          >
            <DynamicFaTwitter size={24} />
          </LinkButton>
          <ReactTooltip id="social-media-tooltip" place="left" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickySocialMediaLinks;
