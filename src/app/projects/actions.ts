import prisma from '@/lib/prismaClient'

export async function fetchProjects() {
  const projects = await prisma.project.findMany({
    include: {
      skills: {
        select: {
          id: true,
          name: true,
          icon: true,
        }
      }
    }
  })

  const finalProjects = projects.map(project => {
    return {
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image,
      category: project.category,
      launchDate: project.launchDate,
      status: project.status,
      details: {
        backendRepo: project.backendRepo,
        frontendRepo: project.frontendRepo,
        codeRepo: project.codeRepo,
        demoUrl: project.demoUrl,
        videoDemo: project.videoDemo,
      },
      tags: project.tags,
      skills: project.skills
    }
  })

  return finalProjects;
}

export async function getProjectById(id: string) {
  const project = await prisma.project.findUnique({
    where: { id },
    include: {
      skills: {
        select: {
          id: true,
          name: true,
          icon: true,
          documentation: true
        }
      }
    }
  })

  return {
    id: project?.id,
    title: project?.title,
    description: project?.description,
    image: project?.image,
    category: project?.category,
    launchDate: project?.launchDate,
    status: project?.status,
    details: {
      backendRepo: project?.backendRepo,
      frontendRepo: project?.frontendRepo,
      codeRepo: project?.codeRepo,
      demoUrl: project?.demoUrl,
      videoDemo: project?.videoDemo,
    },
    tags: project?.tags,
    skills: project?.skills
  }

  // return { skill}
}
