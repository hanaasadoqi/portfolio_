import { fetchProjectById } from "@/app/lib/actions/projects";
import ProjectContent from "../components/ProjectContent";
import { Suspense } from 'react';
import { Params } from '../../blog/[...slug]/types';
import { notFound } from "next/navigation";

import UniversalFallback from "@/context/UniversalFallbackContext";
import { FileLoader } from "../../blog/MDX/FileLoader";
import { MDXSource } from "../../blog/MDX/MDXRenderer";

const contentSource = '/src/content/projects';

export default async function ProjectDocsPage({ params }: Params) {
  const { id } = await params;

  const project = id ? await fetchProjectById(id) : null;

  if (!project) {
    return notFound()
  }

  const source = await FileLoader({ slug: project.slug as string, contentSource }) as string

  const { content } = await MDXSource({ source });

  return (
    <Suspense fallback={<UniversalFallback />}>
      <ProjectContent project={project} content={content} />
    </Suspense>

  )
}