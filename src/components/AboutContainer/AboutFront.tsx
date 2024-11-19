const AboutFront = ({
  src = '',
  alt = '',
  poster = '',
  type = 'image',
  srcSet,
  sizes,
}: {
  sizes?: string | null
  srcSet?: string | null
  src: string | null
  alt?: string | null
  poster?: string | null
  type?: string | null
}) => (
  <div className="relative overflow-hidden rounded-xl [backface-visibility:hidden]">
    {type === 'image' ? (
      <img
        src={srcSet || src || ''}
        alt={alt || ''}
        className="w-full h-auto max-w-full max-h-[400px] rounded-xl object-cover"
        sizes={sizes || '(max-width: 500px) 100vw, (max-width: 750px) 50vw, 33vw'}
        loading="lazy"
      />
    ) : (
      <video
        src={src || ''}
        poster={poster || ''}
        className="w-full h-auto max-w-full max-h-[400px] rounded-xl object-cover"
        autoPlay
        muted
        loop
      />
    )}
  </div>
)

export default AboutFront
