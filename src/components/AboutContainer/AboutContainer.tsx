import { FC } from 'react'
import AboutItemList from './AboutItemList'
import AboutItemCard from './AboutItemCard'
import aboutData from '@/app/lib/data/aboutData.json'

const AboutContainer: FC = async () => {
  const assets = aboutData

  return (
    <div className="relative mx-auto w-full text-left space-y-8">
      <div className="space-y-3 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-secondary-50">About Me</h2>
        <p className="text-base md:text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl">
          I&apos;m a software engineer passionate about building scalable systems, writing clean code, and creating great user experiences. With 5+ years of experience, I focus on technical depth and impactful product development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Key Stats Card */}
        <div className="rounded-xl border border-secondary-200 dark:border-accent-one/30 bg-white dark:bg-secondary-900/50 p-6 hover:shadow-lg transition-shadow">
          <div className="text-sm font-semibold text-accent-one uppercase tracking-wide mb-2">Experience</div>
          <div className="text-4xl font-bold text-secondary-900 dark:text-secondary-50 mb-1">5+</div>
          <div className="text-secondary-600 dark:text-secondary-400">Years building web applications</div>
        </div>

        <div className="rounded-xl border border-secondary-200 dark:border-accent-one/30 bg-white dark:bg-secondary-900/50 p-6 hover:shadow-lg transition-shadow">
          <div className="text-sm font-semibold text-accent-one uppercase tracking-wide mb-2">Location</div>
          <div className="text-2xl font-bold text-secondary-900 dark:text-secondary-50 mb-1">Morocco</div>
          <div className="text-secondary-600 dark:text-secondary-400">Working globally</div>
        </div>

        <div className="rounded-xl border border-secondary-200 dark:border-accent-one/30 bg-white dark:bg-secondary-900/50 p-6 hover:shadow-lg transition-shadow">
          <div className="text-sm font-semibold text-accent-one uppercase tracking-wide mb-2">Passion</div>
          <div className="text-2xl font-bold text-secondary-900 dark:text-secondary-50 mb-1">Learning</div>
          <div className="text-secondary-600 dark:text-secondary-400">Exploring new technologies</div>
        </div>
      </div>

      {assets.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-secondary-900 dark:text-secondary-50">Interests & Inspiration</h3>
          <AboutItemList>
            <div className="grid snap-x snap-mandatory auto-cols-max grid-flow-col items-center gap-4">
              {assets.map(item => (
                <AboutItemCard key={`${item.id}-${item.title}`} item={item} className="snap-center" />
              ))}
            </div>
          </AboutItemList>
        </div>
      )}
    </div>
  )
}

export default AboutContainer;


