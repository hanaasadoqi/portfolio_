import React, { memo } from 'react'
import { motion } from 'framer-motion'
import ProfileBadge from '@/components/Hero/ProfileBadge'
import CallToAction from '@/components/Hero/CallToAction'
import AnimatedBlob from '@/components/AnimatedBlob/AnimatedBlob'

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section
      id="hero"
      data-id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-12 md:px-12"
      aria-labelledby="hero-heading"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Animated Blobs */}
      <AnimatedBlob position="top-right" size="lg" color="cyan" opacity={0.25} delay={0} />
      <AnimatedBlob position="bottom-left" size="md" color="cyan" opacity={0.2} delay={1} />

      <motion.div
        className="flex flex-col items-center space-y-8 lg:items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="parallax-float">
          <ProfileBadge />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col space-y-6 text-center">
          <motion.header
            className="space-y-4"
            id="hero-heading"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-white transition-all duration-300 md:text-6xl lg:text-7xl"
            >
              <span className="gradient-text rotating-gradient">Hi, I&apos;m Hanaa</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl font-medium text-cyan-300 md:text-2xl"
            >
              Full-Stack Developer • Creative Problem Solver
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-2xl text-base text-gray-400 md:text-lg"
            >
              Building elegant digital experiences with modern web technologies. Passionate about clean code, performance, and user-centric design.
            </motion.p>
          </motion.header>

          <motion.div variants={itemVariants}>
            <CallToAction />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default memo(Hero)
