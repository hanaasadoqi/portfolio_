import { FC } from 'react'
import ScrollButtons from './ScrollButtons'
import AboutItemList from './AboutItemList'
import { fetchAboutAssets } from '@/app/lib/actions/assets'

const AboutContainer: FC = async () => {
  const assets = await fetchAboutAssets()

  return (
    <div className="relative mx-auto w-full text-left">
      <div className="mb-4 space-y-2 px-4 text-center md:my-8 md:px-12 md:text-left lg:my-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl">A Little About Me</h2>
        <h4 className="text-lg md:text-xl lg:text-2xl">
          Snapshots of things that interest me, inspire me, or bring me joy.
        </h4>
      </div>

      <ScrollButtons />
      <AboutItemList about={assets} />
    </div>
  )
}

export default AboutContainer;
