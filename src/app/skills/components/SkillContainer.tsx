import SkillControlsDisplay from './SkillsControls/ControlsDisplay'
import { memo, Suspense } from 'react'
import SkillsList from './SkillsList'
import { LoadingOverlay } from '@/components/shared'

const SkillsContainer: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="md:relative flex h-3/4 w-full items-center justify-between md:p-4 flex-col md:flex-row">
          <h3 className="mb-0 text-center md:text-left text-2xl md:text-3xl lg:text-4xl">Skills</h3>
          <SkillControlsDisplay />
        </div>
      </div>
      <div className="relative overflow-auto">
        <Suspense fallback={<LoadingOverlay />}>
          <SkillsList />
        </Suspense>
      </div>
    </div>
  )
}

export default memo(SkillsContainer)
