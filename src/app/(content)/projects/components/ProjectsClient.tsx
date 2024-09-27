"use client"

import { SearchBar } from "@/components";
import { ProjectPreview, Suggestion } from "@/types";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsClientProps {
  initialProjects: ProjectPreview[];
  projectTitles: Suggestion[];
}

const ProjectsClient: React.FC<ProjectsClientProps> = ({ initialProjects, projectTitles }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [projects, setProjects] = useState<ProjectPreview[]>();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const loadProjects = async () => {
      try {
        setProjects(initialProjects);
      } catch (error) {
        console.error('Error fetching projects', error);
      } finally {
        setIsLoading(false)
      }
    };

    loadProjects();
  }, [searchQuery, projects, initialProjects]);

  const filteredProjects = useMemo(() => {
    if (!searchQuery) return initialProjects;
    const query = searchQuery.toLowerCase();
    return initialProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.join(" ").toLowerCase().includes(query)
    );
  }, [searchQuery, initialProjects]);


  return (
    <main className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto bg-white/60 dark:bg-black/60 rounded-xl shadow-md p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center md:text-left">Projects</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Explore my collection of projects. Click on a project to learn more.
          </p>
        </header>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search Projects..."
          />
        </div>

        {isLoading ? (
          <div className="text-center text-gray-500 dark:text-gray-400">Loading projects...</div>
        ) : (
          <section>
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Link key={project.id} href={`/projects/${project.id}`} className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    <ProjectCard project={project} />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-300 text-center">No projects found.</p>
            )}
          </section>
        )}
      </div>
    </main >
  );
};

export default ProjectsClient