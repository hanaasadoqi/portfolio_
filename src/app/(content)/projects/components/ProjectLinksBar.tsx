import { LinkButton } from "../../../../components"
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

export const ProjectLinksBar: React.FC<ProjectLinks> = memo(({
  title,
  details,
  iconOnly = false
}) => {
  const { frontendRepo, backendRepo, videoDemo, demoUrl, codeRepo } = details;
  return (
    <div className="flex justify-center md:items-start items-center p-1 md:p-4 md:gap-2">
      {videoDemo && (
        <LinkButton
          href={videoDemo}
          tooltipId="link-tooltip"
          tooltip="Video Demo"
          tooltipPlace="bottom-start"
          className="md:gap-2 px-3 py-2"
          variant="ghost"
          aria-label={`${title} Video Demo`}
        >
          <FaPlay />
          {!iconOnly && <span className="hidden md:block">Video Demo</span>}
        </LinkButton>
      )}

      {backendRepo && backendRepo !== 'N/A' && (
        <LinkButton
          href={backendRepo}
          tooltipId="link-tooltip"
          tooltip="Backend Code"
          tooltipPlace="bottom-start"
          className="md:gap-2 px-3 py-2"
          variant="ghost"
          aria-label={`${title} Backend Repository`}
        >
          <FaServer />
          {!iconOnly && <span className="hidden md:block">Backend</span>}
        </LinkButton>
      )}

      {frontendRepo && frontendRepo !== 'N/A' && (
        <LinkButton
          href={frontendRepo}
          tooltipId="frontend-tooltip"
          tooltip="Frontend Repository"
          tooltipPlace="bottom-start"
          className="md:gap-2 px-3 py-2"
          variant="ghost"
          aria-label={`${title} Frontend Repository`}
        >
          <FaLaptopCode />
          {!iconOnly && <span className="hidden md:block">Frontend</span>}
        </LinkButton>
      )}

      {codeRepo && codeRepo !== 'N/A' && (
        <LinkButton
          href={codeRepo}
          tooltipId="code-tooltip"
          tooltip="Code Repository"
          tooltipPlace="right"
          className="md:gap-2 px-3 py-2"
          variant="ghost"
          aria-label={`${title} Code Repository`}
        >
          <FaCode />
          {!iconOnly && <span className="hidden md:block">Code</span>}
        </LinkButton>
      )}

      {demoUrl && (
        <LinkButton
          href={demoUrl}
          tooltipId="link-tooltip"
          tooltip="Demo"
          tooltipPlace="top-start"
          className="md:gap-2 px-3 py-2"
          variant="ghost"
          aria-label={`${title} Demo`}
        >
          <MdOpenInBrowser />
          {!iconOnly && <span className="hidden md:block">Live Demo</span>}
        </LinkButton>
      )}
    </div>
  )
})

ProjectLinksBar.displayName = "ProjectLinksBar"