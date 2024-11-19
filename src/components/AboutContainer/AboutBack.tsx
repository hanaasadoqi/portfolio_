const AboutBack = ({
  title,
  description,
}: {
  title: string
  description: string
}) => (
  <figcaption className="absolute inset-0 flex items-center justify-center rounded-xl bg-white dark:bg-gray-950 p-4 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
    <div className="p-4">
      <h5 className="font-bold text-gray-900 dark:text-gray-100">{title}</h5>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-wrap text-sm md:text-base">{description}</p>
    </div>
  </figcaption>
)

export default AboutBack
