import React from 'react'

interface BlogHeaderProps {
  title: string
  subtitle: string
  backgroundImage?: string
  description?: string
  publishedDate?: string
  tags?: string[]
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title, subtitle, backgroundImage, description, publishedDate, tags
}) => {
  return (
    <header className="z-10 mb-4 dark:drop-shadow-xl relative w-full bg-cover bg-center min-h-64 text-white flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-transparent opacity-70" />
      <div className="relative w-full h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 id="article-title" className="mb-3 dark:text-gray-100 text-gray-900 font-semibold text-2xl md:text-3xl lg:text-4xl">{title}</h1>
        <h3 id="article-subtitle" className="mb-3 dark:text-gray-200 text-gray-800 font-semibold text-base md:text-xl">{subtitle}</h3>
        {publishedDate && <time className="mb-2 text-base lg:text-lg dark:text-gray-300 text-gray-800">{publishedDate}</time>}
      </div>
      <div className="scrollbar-hide overflow-x-scroll flex w-full flex-nowrap md:flex-wrap md:justify-center gap-1 mx-6 max-w-lg">
        {tags && tags.map(tag => (
          <span key={tag} className="whitespace-nowrap bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}

export default BlogHeader;