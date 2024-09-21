import { FC } from 'react'
import ScrollButtons from './ScrollButtons'
import AboutItemList from './AboutItemList'
import { fetchAboutAssets } from '@/app/lib/actions/assets'

const AboutContainer: FC = async () => {
  const assets = await fetchAboutAssets()

  return (
    <div className="relative mx-auto w-full text-left">
      <div className="mb-4 space-y-2 px-4 text-center md:my-8 md:px-12 md:text-left lg:my-12">
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

export default AboutContainer;
