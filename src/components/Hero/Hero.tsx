import React from 'react'
import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle: string
  greeting?: string
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, greeting }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:flex-row md:space-x-8">
      <div className="mb-6 transform transition-transform hover:scale-110 md:mb-0">
        <Image
          src="/images/profile_picture.png"
          alt="Profile Picture"
          width={300}
          height={300}
          priority
          className="border-primary-100 rounded-full border-4 shadow-lg"
        />
      </div>

      <div className="relative p-12">
        <div className="absolute right-0 top-0 -mr-6 -mt-6 animate-pulse rounded-full bg-green-500 px-4 py-2 text-white shadow-lg">
          Open to Work
        </div>
        {greeting && <p className="mb-4 text-lg text-primary50">{greeting}</p>}
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-primary90 lg:text-6xl">
          {title}
        </h1>
        <p className="mb-8 text-xl text-primary60">{subtitle}</p>
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <a
            href="#projects"
            className="relative overflow-hidden whitespace-nowrap rounded-full bg-white px-8 py-2 font-medium text-gray-800 shadow-lg duration-300 hover:scale-105 hover:bg-gray-200"
          >
            View My Work
          </a>
          <a
            href="/Hanaa_Sadoqi_Resume.pdf"
            download
            className="relative overflow-hidden whitespace-nowrap rounded-full bg-gray-900 px-6 py-2 font-medium text-white shadow-lg transition-transform hover:scale-105 hover:bg-gray-800"
          >
            Download My Resume
          </a>
          <a
            href="https://www.linkedin.com/in/hanaasadoqi"
            className="text-gray-800 underline hover:text-blue-500 active:text-blue-700"
          >
            Connect with me on LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
