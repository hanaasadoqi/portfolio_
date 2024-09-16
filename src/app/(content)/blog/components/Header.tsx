import React from 'react'

interface HeaderProps {
  title: string
  subtitle: string
  backgroundImage?: string
  description?: string
  publishedDate?: string
  tags?: string[]
}

const Header: React.FC<HeaderProps> = ({
  title, subtitle, backgroundImage, description, publishedDate, tags
}) => {
  return (
    <header className="relative w-full bg-cover bg-center h-80 text-white flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-wrap w-full justify-center gap-2">
        {tags && tags.map(tag => (
          <span key={tag} className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="relative w-full h-full flex flex-col items-center px-6 pt-24">
        <div className="max-w-4xl space-y-6 flex-1 text-center mb-4">
          <h1 id="article-title" className="mb-4 text-gray-100 font-semibold text-2xl md:text-3xl lg:text-4xl">{title}</h1>
          <h3 id="article-subtitle" className="mb-3 text-gray-200 font-semibold text-base md:text-xl lg:text-2xl">{subtitle}</h3>
          {publishedDate && <time className="mb-2 text-base lg:text-lg text-gray-300">{publishedDate}</time>}
        </div>
      </div>
    </header>
  );
}

export default Header;