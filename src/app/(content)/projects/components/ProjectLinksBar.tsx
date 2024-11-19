import Link from "next/link";
import { memo } from "react";
import { FaPlay, FaServer, FaLaptopCode, FaCode } from "react-icons/fa";
import { MdOpenInBrowser } from "react-icons/md";

interface ProjectLinks {
  details: Links;
  title?: string;
  iconOnly?: boolean;
}

interface Links {
  videoDemo?: string | null;
  demoUrl?: string | null;
  frontendRepo?: string | null;
  backendRepo?: string | null;
  codeRepo?: string | null;
}

const linkDetails = [
  { key: "videoDemo", Icon: FaPlay, label: "Video Demo" },
  { key: "backendRepo", Icon: FaServer, label: "Backend" },
  { key: "frontendRepo", Icon: FaLaptopCode, label: "Frontend" },
  { key: "codeRepo", Icon: FaCode, label: "Code" },
  { key: "demoUrl", Icon: MdOpenInBrowser, label: "Live Demo" },
];

const ProjectLinksBar: React.FC<ProjectLinks> = memo(({ title, details, iconOnly = false }) => {
  return (
    <div className="flex justify-center md:items-start items-center p-1 md:p-4 md:gap-2">
      {linkDetails.map(({ key, Icon, label }) => {
        const href = details[key as keyof Links];
        if (href && href !== "N/A") {
          return (
            <Link key={key} href={href!} className="w-full flex flex-col items-center justify-center gap-2 dark:hover:bg-primary-800 hover:bg-primary-300 dark:hover:shadow-inner p-2 rounded-md">
              <Icon size={24} className="text-current" />
              {!iconOnly && <span className="hidden md:block whitespace-nowrap">{label}</span>}
            </Link>
          );
        }
        return null;
      })}
    </div>
  );
});

export default ProjectLinksBar;

ProjectLinksBar.displayName = "ProjectLinksBar";
