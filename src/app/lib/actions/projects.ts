import prisma from '@/app/lib/prismaClient'
import { ProjectPage, ProjectPreview } from '@/types'
import { toTitleCaseBasic } from '@/utils/toTitleCase';

export async function fetchProjects(): Promise<any[]> {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      image: true,
      title: true,
      description: true,
      status: true,
      slug: true,
      tags: true,
      skills: {
        select: {
          id: true,
          name: true,
          icon: true,
        }
      },
      frontendRepo: true,
      backendRepo: true,
      codeRepo: true,
      demoUrl: true,
      videoDemo: true
    }
  })

  const newProjects = projects.map(project => {
    return {
      id: project.id,
      image: project.image,
      title: project.title,
      description: project.description,
      status: project.status,
      tags: project.tags,
      skills: project.skills,
      details: {
        demoUrl: project.demoUrl ?? undefined,
        frontendRepo: project.frontendRepo ?? undefined,
        backendRepo: project.backendRepo ?? undefined,
        codeRepo: project.codeRepo ?? undefined,
        videoDemo: project.videoDemo ?? undefined
      },

    }
  })

  return newProjects;
}

export async function fetchProjectById(projectId: string): Promise<any> {
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: {
      id: true,
      image: true,
      title: true,
      description: true,
      category: true,
      demoUrl: true,
      frontendRepo: true,
      backendRepo: true,
      codeRepo: true,
      videoDemo: true,
      launchDate: true,
      status: true,
      slug: true,
      fileContent: true,
      tags: true,
      viewCount: true,
      likeCount: true,
      comments: {
        select: {
          id: true,
          author: true,
          message: true,
        }
      },
      skills: {
        select: {
          id: true,
          name: true,
          icon: true,
          documentation: true
        }
      },
      assets: {
        select: {
          title: true,
          description: true,
          src: true,
          alt: true,
          aspectRatio: true,
          srcSet: true
        }
      },
      articles: {
        select: {
          id: true,
          title: true,
          subtitle: true,
          slug: true,
          image: true
        }
      }
    }
  })

  if (!project) {
    throw new Error(`Project with ID ${projectId} not found`);
  }

  const finalProject = {
    id: project.id,
    image: project.image,
    title: project.title,
    description: project.description,
    category: project.category,
    launchDate: project.launchDate,
    status: project.status,
    slug: project.slug,
    fileContent: project.fileContent,
    tags: project.tags.map((tag: string) => tag.toLowerCase()),
    viewCount: project.viewCount,
    likeCount: project.likeCount,
    details: {
      demoUrl: project.demoUrl ?? undefined,
      frontendRepo: project.frontendRepo ?? undefined,
      backendRepo: project.backendRepo ?? undefined,
      codeRepo: project.codeRepo ?? undefined,
      videoDemo: project.videoDemo ?? undefined
    },
    comments: project.comments,
    skills: project.skills,
    assets: project.assets,
    articles: project.articles,
  };

  return finalProject
}

export async function fetchProjectsByQuery(query: string): Promise<ProjectPreview[]> {
  const normalizedQuery = query.toLowerCase();
  const titleCaseQuery = toTitleCaseBasic(query);

  const projects = await prisma.project.findMany({
    where: {
      OR: [
        {
          tags: {
            has: titleCaseQuery
          }
        },
        {
          title: {
            contains: normalizedQuery,
            mode: 'insensitive'
          }
        },
        {
          skills: {
            some: {
              name: {
                contains: normalizedQuery,
                mode: 'insensitive'
              }
            }
          }
        }
      ]
    },
    select: {
      id: true,
      image: true,
      title: true,
      description: true,
      status: true,
      slug: true,
      tags: true
    }
  });

  return projects;
}



export async function fetchProjectSuggestions(query: string): Promise<any[]> {
  const normalizedQuery = query.toLowerCase();
  const titleCaseQuery = toTitleCaseBasic(query);

  const suggestions = await prisma.project.findMany({
    where: {
      OR: [
        {
          tags: {
            has: titleCaseQuery
          }
        },
        {
          title: {
            contains: normalizedQuery,
            mode: 'insensitive'
          }
        },
        {
          description: {
            contains: normalizedQuery,
            mode: 'insensitive'
          }
        },
        {
          skills: {
            some: {
              name: {
                contains: normalizedQuery,
                mode: 'insensitive'
              }
            }
          }
        },

      ]
    },
    select: {
      title: true,
      id: true
    }
  })

  return suggestions.map(project => {
    return {
      slug: project.id,
      title: project.title
    }
  })
}

export async function fetchProjectsByCategory(category: string): Promise<ProjectPreview[]> {
  return await prisma.project.findMany({
    where: {
      OR: [
        {
          category: {
            equals: category
          }
        },
      ]
    },
    select: {
      id: true,
      image: true,
      title: true,
      description: true,
      status: true,
      slug: true,
      tags: true
    }
  });
}
