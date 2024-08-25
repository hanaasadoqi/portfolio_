import React from 'react'
import WritingCard, { WritingItemProps } from './WritingCard'

interface WritingProps {
  writingData: WritingItemProps[]
}

const Writing: React.FC<WritingProps> = ({ writingData: articles }) => {
  return (
    <section className="from-primary-100 to-secondary-100 bg-gradient-to-b px-4 py-16">
      {/* <h2 className="mb-12 text-center text-4xl font-bold">Writing</h2> */}
      <div className="mx-auto grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {articles.map(article => (
          <WritingCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  )
}

export default Writing
