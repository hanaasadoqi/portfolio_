import { LinkButton } from "@/components";
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

export const ProjectLinksBar: React.FC<ProjectLinks> = memo(({ title, details, iconOnly = false }) => {
  return (
    <div className="flex justify-center md:items-start items-center p-1 md:p-4 md:gap-2">
      {linkDetails.map(({ key, Icon, label }) => {
        const href = details[key as keyof Links];
        if (href && href !== "N/A") {
          return (
            <Link href={href!}>
              <Icon size={24} className="text-current" />
              {!iconOnly && <span className="hidden md:block">{label}</span>}
            </Link>
          );
        }
        return null;
      })}
    </div>
  );
});

ProjectLinksBar.displayName = "ProjectLinksBar";






// // <LinkButton
// //   key={key}
// //   href={href!}
// //   // tooltipId={`${key}-tooltip`}
// //   tooltip={label}
// //   // tooltipPlace="bottom-start"
// //   className="md:gap-2 px-3 py-2"
// //   variant="ghost"
// //   aria-label={`${title} ${label}`}
// // >
//   {/* Directly render the imported icon */}
//   {/* <Icon size={24} className="text-current" /> */}
//   {/* {!iconOnly && <span className="hidden md:block">{label}</span>} */}
// // </LinkButton>














// import { LinkButton } from "@/components";
// import { memo } from "react";
// import IconComponent from "./IconComponent";

// interface ProjectLinks {
//   details: Links;
//   title?: string;
//   iconOnly?: boolean;
// }

// interface Links {
//   videoDemo?: string | null;
//   demoUrl?: string | null;
//   frontendRepo?: string | null;
//   backendRepo?: string | null;
//   codeRepo?: string | null;
// }

// const linkDetails = [
//   { key: "videoDemo", icon: "FaPlay", label: "Video Demo" },
//   { key: "backendRepo", icon: "FaServer", label: "Backend" },
//   { key: "frontendRepo", icon: "FaLaptopCode", label: "Frontend" },
//   { key: "codeRepo", icon: "FaCode", label: "Code" },
//   { key: "demoUrl", icon: "MdOpenInBrowser", label: "Live Demo" },
// ];

// export const ProjectLinksBar: React.FC<ProjectLinks> = memo(({ title, details, iconOnly = false }) => {
//   return (
//     <div className="flex justify-center md:items-start items-center p-1 md:p-4 md:gap-2">
//       {linkDetails.map(({ key, icon, label }) => {
//         const href = details[key as keyof Links];
//         if (href && href !== "N/A") {
//           return (
//             <LinkButton
//               key={key}
//               href={href!}
//               tooltipId={`${key}-tooltip`}
//               tooltip={label}
//               tooltipPlace="bottom-start"
//               className="md:gap-2 px-3 py-2"
//               variant="ghost"
//               aria-label={`${title} ${label}`}
//             >
//               {/* Use the dynamically loaded IconComponent */}
//               <IconComponent icon={icon} />
//               {!iconOnly && <span className="hidden md:block">{label}</span>}
//             </LinkButton>
//           );
//         }
//         return null;
//       })}
//     </div>
//   );
// });

// ProjectLinksBar.displayName = "ProjectLinksBar";





















// import { LinkButton } from "@/components";
// import { memo } from "react";

// // Import only the required icons
// import { FaPlay, FaServer, FaLaptopCode, FaCode } from "react-icons/fa";
// import { MdOpenInBrowser } from "react-icons/md";

// interface ProjectLinks {
//   details: Links;
//   title?: string;
//   iconOnly?: boolean;
// }

// interface Links {
//   videoDemo?: string | null;
//   demoUrl?: string | null;
//   frontendRepo?: string | null;
//   backendRepo?: string | null;
//   codeRepo?: string | null;
// }

// const linkDetails = [
//   { key: "videoDemo", Icon: FaPlay, label: "Video Demo" },
//   { key: "backendRepo", Icon: FaServer, label: "Backend" },
//   { key: "frontendRepo", Icon: FaLaptopCode, label: "Frontend" },
//   { key: "codeRepo", Icon: FaCode, label: "Code" },
//   { key: "demoUrl", Icon: MdOpenInBrowser, label: "Live Demo" },
// ];

// export const ProjectLinksBar: React.FC<ProjectLinks> = memo(({ title, details, iconOnly = false }) => {
//   return (
//     <div className="flex justify-center md:items-start items-center p-1 md:p-4 md:gap-2">
//       {linkDetails.map(({ key, Icon, label }) => {
//         const href = details[key as keyof Links];
//         if (href && href !== "N/A") {
//           return (
//             <LinkButton
//               key={key}
//               href={href!}
//               tooltipId={`${key}-tooltip`}
//               tooltip={label}
//               tooltipPlace="bottom-start"
//               className="md:gap-2 px-3 py-2"
//               variant="ghost"
//               aria-label={`${title} ${label}`}
//             >
//               <Icon className="w-5 h-5" />
//               {!iconOnly && <span className="hidden md:block">{label}</span>}
//             </LinkButton>
//           );
//         }
//         return null;
//       })}
//     </div>
//   );
// });

// ProjectLinksBar.displayName = "ProjectLinksBar";





// import { LinkButton } from "@/components";
// // import dynamic from "next/dynamic";
// import { memo } from "react";
// import IconComponent from "./IconComponent";

// interface ProjectLinks {
//   details: Links;
//   title?: string;
//   iconOnly?: boolean;
// }

// interface Links {
//   videoDemo?: string | null;
//   demoUrl?: string | null;
//   frontendRepo?: string | null;
//   backendRepo?: string | null;
//   codeRepo?: string | null;
// }

// const linkDetails = [
//   { key: "videoDemo", icon: "FaPlay", label: "Video Demo" },
//   { key: "backendRepo", icon: "FaServer", label: "Backend" },
//   { key: "frontendRepo", icon: "FaLaptopCode", label: "Frontend" },
//   { key: "codeRepo", icon: "FaCode", label: "Code" },
//   { key: "demoUrl", icon: "MdOpenInBrowser", label: "Live Demo" },
// ];

// export const ProjectLinksBar: React.FC<ProjectLinks> = memo(({ title, details, iconOnly = false }) => {
//   return (
//     <div className="flex justify-center md:items-start items-center p-1 md:p-4 md:gap-2">
//       {linkDetails.map(({ key, icon, label }) => {
//         const href = details[key as keyof Links];
//         if (href && href !== "N/A") {
//           return (
//             <LinkButton
//               key={key}
//               href={href!}
//               tooltipId={`${key}-tooltip`}
//               tooltip={label}
//               tooltipPlace="bottom-start"
//               className="md:gap-2 px-3 py-2"
//               variant="ghost"
//               aria-label={`${title} ${label}`}
//             >
//               <IconComponent icon={icon} />
//               {!iconOnly && <span className="hidden md:block">{label}</span>}
//             </LinkButton>
//           );
//         }
//         return null;
//       })}
//     </div>
//   );
// });

// ProjectLinksBar.displayName = "ProjectLinksBar";











// import { LinkButton } from "../../../../components"
// import { memo } from "react";
// import IconComponent from "./IconComponent";

// interface ProjectLinks {
//   details: Links;
//   title?: string;
//   iconOnly?: boolean;
// }

// interface Links {
//   videoDemo?: string | null;
//   demoUrl?: string | null;
//   frontendRepo?: string | null;
//   backendRepo?: string | null;
//   codeRepo?: string | null;
// }

// export const ProjectLinksBar: React.FC<ProjectLinks> = memo(({
//   title,
//   details,
//   iconOnly = false
// }) => {
//   const { frontendRepo, backendRepo, videoDemo, demoUrl, codeRepo } = details;
//   return (
//     <div className="flex justify-center md:items-start items-center p-1 md:p-4 md:gap-2">
//       {videoDemo && (
//         <LinkButton
//           href={videoDemo}
//           tooltipId="link-tooltip"
//           tooltip="Video Demo"
//           tooltipPlace="bottom-start"
//           className="md:gap-2 px-3 py-2"
//           variant="ghost"
//           aria-label={`${title} Video Demo`}
//         >
//           <IconComponent icon="FaPlay" />
//           {!iconOnly && <span className="hidden md:block">Video Demo</span>}
//         </LinkButton>
//       )}

//       {backendRepo && backendRepo !== 'N/A' && (
//         <LinkButton
//           href={backendRepo}
//           tooltipId="link-tooltip"
//           tooltip="Backend Code"
//           tooltipPlace="bottom-start"
//           className="md:gap-2 px-3 py-2"
//           variant="ghost"
//           aria-label={`${title} Backend Repository`}
//         >
//           <IconComponent icon="FaServer" />
//           {!iconOnly && <span className="hidden md:block">Backend</span>}
//         </LinkButton>
//       )}

//       {frontendRepo && frontendRepo !== 'N/A' && (
//         <LinkButton
//           href={frontendRepo}
//           tooltipId="frontend-tooltip"
//           tooltip="Frontend Repository"
//           tooltipPlace="bottom-start"
//           className="md:gap-2 px-3 py-2"
//           variant="ghost"
//           aria-label={`${title} Frontend Repository`}
//         >
//           <IconComponent icon="FaLaptopCode" />
//           {!iconOnly && <span className="hidden md:block">Frontend</span>}
//         </LinkButton>
//       )}

//       {codeRepo && codeRepo !== 'N/A' && (
//         <LinkButton
//           href={codeRepo}
//           tooltipId="code-tooltip"
//           tooltip="Code Repository"
//           tooltipPlace="right"
//           className="md:gap-2 px-3 py-2"
//           variant="ghost"
//           aria-label={`${title} Code Repository`}
//         >
//           <IconComponent icon="FaCode" />
//           {!iconOnly && <span className="hidden md:block">Code</span>}
//         </LinkButton>
//       )}

//       {demoUrl && (
//         <LinkButton
//           href={demoUrl}
//           tooltipId="link-tooltip"
//           tooltip="Demo"
//           tooltipPlace="top-start"
//           className="md:gap-2 px-3 py-2"
//           variant="ghost"
//           aria-label={`${title} Demo`}
//         >
//           <IconComponent icon="MdOpenInBrowser" />
//           {!iconOnly && <span className="hidden md:block">Live Demo</span>}
//         </LinkButton>
//       )}
//     </div>
//   )
// })

// ProjectLinksBar.displayName = "ProjectLinksBar"