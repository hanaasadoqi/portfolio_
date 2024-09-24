import { FC, memo } from 'react'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import { AboutAsset } from '@/types/asset.types'
import { LoadingOverlay } from '@/components/shared'
import { Video as DynamicVideo } from '@/components/shared'

const DynamicImage = dynamic(() => import('next/image'), {
  ssr: false,
  loading: () => <LoadingOverlay />
})

const AboutBack: FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <figcaption className="absolute inset-0 h-full w-full rounded-xl opacity-85 bg-white dark:bg-gray-950 p-4 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
    <div className="flex h-full w-full items-center justify-center overflow-hidden whitespace-nowrap text-wrap text-white">
      <div className="p-4 text-center rounded-2xl relative w-full">
        <div className="blur-md absolute inset-0"></div>
        <h5 className="text-gray-900">{title}</h5>
        <h6 className="text-gray-900 font-semibikd">{description}</h6>
      </div>
    </div>
  </figcaption>
)

const AboutFront: React.FC<{
  sizes?: string | null
  srcSet?: string | null
  src: string | null
  alt?: string | null
  poster?: string | null
  type?: string | null
}> = ({ src = '', alt = '', poster = '', type = 'image', srcSet, sizes }) => (
  <div className="absolute inset-0 overflow-hidden rounded-xl ">
    {type === 'image' ? (
      <DynamicImage
        src={srcSet || src || ''}
        alt={alt || ''}
        fill
        className="rounded-xl object-cover transition duration-500 group-hover:brightness-90"
        sizes={sizes || "(max-width: 500px) 100vw, (max-width: 750px) 50vw, 33vw"}
        loading="lazy"
        quality={75}
        onError={e => (e.currentTarget.style.display = 'none')}
      />
    ) : (
      <DynamicVideo
        src={src || ''}
        poster={poster || ''}
        className="h-full w-full rounded-xl object-cover transition duration-500 group-hover:brightness-90"
      />
    )}
  </div>
)

const AboutItemCard: React.FC<{ item: AboutAsset; className?: string }> = ({
  item,
  className,
}) => {
  const determineType = (src: string) => {
    const fileExtension = src.split('.').pop()?.toLowerCase();
    return fileExtension === 'mp4' ? 'video' : 'image';
  };

  const type = item.type || determineType(item.src || '');

  const width = (aspectRatio: string) => {
    switch (aspectRatio) {
      case 'vertical':
        return '400px'
      case 'portrait':
        return '400px'
      case 'landscape':
        return '500px'
      case 'square':
        return '400px'
      default:
        return '300px'
    }
  }

  const height = (aspectRatio: string) => {
    switch (aspectRatio) {
      case 'vertical':
        return '500px'
      case 'portrait':
        return '600px'
      case 'landscape':
        return '400px'
      case 'square':
        return '400px'
      default:
        return '400px'
    }
  }

  return (
    <figure
      className={clsx(
        'relative flex-shrink-0 rounded-xl p-2 transition-transform duration-1000 hover:z-10 hover:scale-105',
        className
      )}
      style={{
        width: width(item.aspectRatio || ''),
        height: height(item.aspectRatio || ''),
      }}
    >
      <div className="group relative h-full w-full [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl ring-offset-secondary transition-all duration-1000 [transform-style:preserve-3d] group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-offset-4 group-hover:[transform:rotateY(180deg)]">
          <AboutFront
            {...item}
            type={type}
          />
          <AboutBack title={item.title} description={item.description} />
        </div>
      </div>
    </figure>
  )
}

export default memo(AboutItemCard);