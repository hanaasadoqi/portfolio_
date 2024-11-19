'use server'

import SectionLayout from '@/app/shared/SectionLayout'
import SkillsContainer from './components/SkillContainer'

const Page = async ({ searchParams }: { searchParams: Record<string, string | undefined> }) => {
  return (

    <SectionLayout id="skills">
      <SkillsContainer searchParams={searchParams} />
    </SectionLayout>
  )
}

export default Page