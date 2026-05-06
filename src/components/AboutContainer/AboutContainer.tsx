import { FC } from 'react'
import AboutItemList from './AboutItemList'
import { fetchAboutAssets } from '@/app/lib/actions/assets'
import AboutItemCard from './AboutItemCard'

const AboutContainer: FC = async () => {
  const assets = await fetchAboutAssets()

  return (
    <div className="relative mx-auto w-full text-left">
      <div className="section-header mb-8 px-4 text-center md:mb-12 md:px-12 md:text-left lg:mb-16">
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          A Little About <span className="gradient-text">Me</span>
        </h2>
        <p className="mt-3 text-base text-gray-400 md:text-lg">
          Snapshots of things that interest me, inspire me, or bring me joy.
        </p>
      </div>

      <AboutItemList>
        <div className="grid snap-x snap-mandatory auto-cols-max grid-flow-col items-center gap-4">
          {assets.map(item => (
            <AboutItemCard key={`${item.id}-${item.title}`} item={item} className="snap-center" />
          ))}
        </div>
      </AboutItemList>
    </div>
  )
}

export default AboutContainer;


