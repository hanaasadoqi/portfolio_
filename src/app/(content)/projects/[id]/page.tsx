import { fetchProjectById } from "@/app/lib/actions/projects";
import ProjectContent from "../components/ProjectContent";
import { LoadingOverlay } from '@/components';
import { Suspense } from 'react';
import { Params } from '../../blog/[...slug]/types';
import { notFound } from "next/navigation";


export default async function ProjectDocsPage({ params }: Params) {
  const { id } = await params;

  const project = id ? await fetchProjectById(id) : null;

  if (!project) {
    return notFound()
  }

  return (
    <Suspense fallback={<LoadingOverlay />}>
      <ProjectContent project={project} />
    </Suspense>
  )
}