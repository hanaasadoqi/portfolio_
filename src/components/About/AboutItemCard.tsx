import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import clsx from 'clsx'
import { About } from '@/types/data'

const DynamicVideo = dynamic(
  () => import('../shared/Media').then(mod => mod.Video),
  {
    ssr: false,
    loading: () => <p>Loading video...</p>,
  }
)

// Memoized AboutItemCard Component
const AboutItemCard: React.FC<{ item: About; className?: string }> = ({
  item,
  className,
}) => (
  <figure
    className={clsx(
      'relative flex-shrink-0 rounded-xl p-2 transition-transform duration-300 hover:z-10 hover:scale-105',
      className
    )}
    style={{
      width: `${item.columns * 100}px`,
      height: `${item.rows * 100}px`,
    }}
  >
    <div className="group relative h-full w-full [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl ring-offset-secondary transition-all duration-700 [transform-style:preserve-3d] group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-offset-4 group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 h-full w-full overflow-hidden rounded-xl">
          {item.type === 'image' ? (
            <Image
              src={item.src}
              alt={item.alt || ''}
              fill
              className="rounded-xl object-cover transition duration-300 group-hover:brightness-90"
              sizes="(max-width: 500px) 100vw, (max-width: 750px) 50vw, 33vw"
              loading="lazy"
              quality={75}
              onError={e => (e.currentTarget.style.display = 'none')}
            />
          ) : (
            <DynamicVideo
              src={item.src}
              poster={item.poster}
              className="h-full w-full rounded-xl object-cover transition duration-300 group-hover:brightness-90"
            />
          )}
        </div>
        <figcaption className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-purple-700 to-indigo-500 p-4 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full w-full items-center justify-center overflow-hidden whitespace-nowrap text-wrap text-white">
            <div className="px-4 text-center">
              <h6 className="text-white">{item.title}</h6>
              <p className="text-white">{item.description}</p>
            </div>
          </div>
        </figcaption>
      </div>
    </div>
  </figure>
)

export default memo(AboutItemCard)
