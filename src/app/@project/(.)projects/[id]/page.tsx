import React, { memo, Suspense } from 'react'
import { getProjectById } from '../../../projects/actions'
import ModalContainer from '../../../@skill/components/ModalContainer'
import { Project } from '../../../projects/types'
import Content from '../components/Content'
import ProjectModal from '../components/ProjectModal'

function LoadingComponent() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-70 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary-500"></div>
        <p className="text-white text-sm">Loading content, please wait...</p>
      </div>
    </div>
  )
}
export default async function Page({
  params,
}: Readonly<{ params: { id: string } }>) {
  const { id } = params
  const project = (await getProjectById(id)) as Project

  return <ProjectModal project={project} />
}

