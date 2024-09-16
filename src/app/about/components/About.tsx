import React, { memo } from 'react'
import ScrollButtons from './ScrollButtons'
import AboutItemList from './AboutItemList'
import { fetchAssets } from '../actions'

const About: React.FC = async () => {
  const assets = await fetchAssets()
  return (
    <div className="relative mx-auto w-full text-left">
      <div className="mb-4 space-y-2 px-4 text-center md:mb-8 md:px-12 md:text-left lg:mb-12">
        <h3>A Little About Me</h3>
        <h4>
          Snapshots of things that interest me, inspire me, or bring me joy.
        </h4>
      </div>

      <ScrollButtons />
      <AboutItemList about={assets} />
    </div>
  )
}

export default About
