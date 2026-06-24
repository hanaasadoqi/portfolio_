'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroImage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative h-80 w-80 sm:h-96 sm:w-96 lg:h-[450px] lg:w-[450px]"
    >
      {/* Decorative accent circle behind image */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-accent-one to-accent-two rounded-2xl opacity-20 blur-2xl"></div>
      
      {/* Image container with refined border */}
      <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-accent-one/20 dark:border-accent-one/30 shadow-2xl bg-gradient-to-br from-accent-one/10 to-accent-two/10">
        {/* Fallback gradient behind image */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-one/20 to-accent-two/20"></div>
        
        <Image
          src="/api/placeholder"
          alt="Hanaa El Habbal - Senior Software Engineer"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-accent-one/20 to-accent-two/20 rounded-2xl blur-xl -z-20 opacity-50"></div>
    </motion.div>
  )
}

export default HeroImage
