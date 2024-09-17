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
      },
      articles: {
        select: {
          id: true,
          title: true,
          description: true,
          image: true,
        }
      }
    }
  })

  const finalProjects = projects.map(project => {
    return {
      ...project,
      details: {
        backendRepo: project.backendRepo,
        frontendRepo: project.frontendRepo,
        codeRepo: project.codeRepo,
        demoUrl: project.demoUrl,
        videoDemo: project.videoDemo,
      },
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
      },
      articles: {
        select: {
          id: true,
          title: true,
          subtitle: true,
          image: true,
          slug: true,
        }
      },
      assets: true
    }
  })

  const finalProject = {
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
    skills: project?.skills,
    articles: project?.articles
  }

  return finalProject
}
