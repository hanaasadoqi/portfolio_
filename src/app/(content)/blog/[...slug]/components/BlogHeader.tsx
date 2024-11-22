import React from 'react'

interface BlogHeaderProps {
  title: string
  subtitle: string
  backgroundImage?: string
  description?: string
  publishedDate?: string
  tags?: string[]
  frontmatter?: { [key: string]: any }
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title, subtitle, publishedDate, tags, frontmatter
}) => {
  return (
    <header className="z-10 mb-4 dark:drop-shadow-xl relative w-full mx-auto bg-cover bg-center min-h-64 max-w-7xl text-white flex flex-col justify-center items-center">
      {/* // style={{ backgroundImage: `url(${backgroundImage})` }}> */}
      <div className="absolute inset-0 bg-transparent opacity-70" />
      <div className="relative w-full h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 id="article-title" className="mb-3 dark:text-gray-100 text-gray-900 font-semibold text-4xl md:text-5xl">{title}</h1>
        <h2 id="article-subtitle" className="hidden md:block mb-3 dark:text-gray-200 text-gray-800 font-semibold text-base md:text-xl">{subtitle}</h2>
        <p className="text-gray-500 text-sm">
          {frontmatter?.wordCount} words · {frontmatter?.readingTime}
        </p>
        {publishedDate && <time className="mb-2 text-base lg:text-lg dark:text-gray-300 text-gray-800">{publishedDate}</time>}
      </div>
      <div className="scrollbar-hide overflow-x-scroll flex w-full flex-nowrap md:flex-wrap md:justify-center gap-1 mx-6 max-w-lg">
        {tags && tags.map((tag: string) => (
          <span key={tag} className="whitespace-nowrap bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}

export default BlogHeader;