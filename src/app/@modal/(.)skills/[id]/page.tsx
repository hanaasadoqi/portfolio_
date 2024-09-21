import React from 'react'
import { getSkillById } from '../../../skills/actions'
import ModalContainer from '../../components/ModalContainer'
import { SkillModal as SkillModalType } from '../../../skills/types'
import SkillContent from './components/SkillContent'

export default async function Page({
  params,
}: Readonly<{ params: { id: string } }>) {
  const { id } = params
  const skill = (await getSkillById(id)) as SkillModalType

  return (
    <ModalContainer title={skill.name} icon={skill.icon}>
      <SkillContent skill={skill} />
    </ModalContainer>
  )
}
