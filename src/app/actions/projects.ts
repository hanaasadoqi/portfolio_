import prisma from '@/lib/prismaClient'
import { ProjectPage, ProjectPreview } from '@/types'
import { toTitleCaseBasic } from '@/utils/toTitlecase';

export async function fetchProjects(): Promise<ProjectPreview[]> {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      image: true,
      title: true,
      description: true,
      status: true,
      slug: true
    }
  })

  return projects;
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
    tags: project.tags.map(tag => tag.toLowerCase()),
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
      slug: true
    }
  });

  return projects;
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
      slug: true
    }
  });
}

// export async function fetchProjects(query: {
//   filterTags?: string[],
//   filterCategory?: string,
//   filterSkills?: string[],
//   filterTitle?: string,
//   sortBy?: 'title' | 'date',
//   searchQuery?: string
// }): Promise<ProjectPreview[]> {
//   const whereConditions: Prisma.ProjectWhereInput = {
//     AND: []
//   };

//   if (query.filterTags) {
//     whereConditions.AND.push({
//       tags: {
//         hasSome: query.filterTags
//       }
//     });
//   }
//   if (query.filterCategories) {
//     whereConditions.AND.push({
//       category: {
//         equals: query.filterCategory
//       }
//     });
//   }

//   if (query.filterSkills) {
//     whereConditions.AND.push({
//       skills: {
//         some: {
//           name: {
//             in: query.filterSkills
//           }
//         }
//       }
//     });
//   }

//   if (query.filterTitle) {
//     whereConditions.AND.push({
//       title: {
//         contains: query.filterTitle,
//         mode: 'insensitive'
//       }
//     });
//   }

//   const orderBy = query.sortBy ? { [query.sortBy]: 'asc' } : undefined;

//   const projects = await prisma.project.findMany({
//     where: whereConditions,
//     orderBy,
//     select: {
//       id: true,
//       image: true,
//       title: true,
//       description: true,
//       status: true,
//       slug: true
//     }
//   });

//   return projects;
// }
