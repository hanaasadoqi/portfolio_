'use server'

import SectionLayout from '@/app/shared/SectionLayout'
import SkillsContainer from './components/SkillContainer'

const Page = async () => {
  return (
    <SectionLayout id="skills">
      <SkillsContainer />
    </SectionLayout>
  )
}

export default Page