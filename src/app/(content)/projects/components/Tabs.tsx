// "use client";

// import React, { useState, useEffect } from 'react';
// import { useMDXComponents } from 'mdx-components';
// import { Heading, useTOC } from '@/context/TOCContext';
// import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
// import clsx from 'clsx';

// type Section = {
//   compiledSource: string;
// };

// type Sections = {
//   [key: string]: Section;
// };
// interface TabsProps {
//   sections: { [key: string]: { compiledSource: MDXRemoteSerializeResult } };
//   toc: Heading[]
// }

// const Tabs: React.FC<TabsProps> = ({ sections, toc }) => {
//   const components = useMDXComponents();
//   const { headings, registerHeading, setActiveHeading, activeRef } = useTOC();
//   const sectionKeys = Object.keys(sections);
//   const [activeTab, setActiveTab] = useState(sectionKeys[0] || '');
//   const [expanded, setExpanded] = useState(false);
//   const [compiledContent, setCompiledContent] = useState<MDXRemoteSerializeResult>();

//   useEffect(() => {
//     const registeredIds = new Set(headings.map(heading => heading.id));

//     toc.forEach(item => {
//       if (!registeredIds.has(item.id)) {
//         registerHeading({
//           id: item.id,
//           text: item.text,
//           depth: item.depth,
//           ref: item.ref,
//         });
//       }
//     });
//   }, [toc, headings, registerHeading]);

//   useEffect(() => {
//     if (activeTab && sections[activeTab]) {
//       setActiveHeading(sections[activeTab]);
//       setCompiledContent(sections[activeTab].compiledSource);
//     }
//   }, [activeTab, sections, setActiveHeading]);

//   const handleTab = (key: string) => {
//     if (activeTab !== key) {
//       setActiveTab(key);
//       setExpanded(!!key);
//       setActiveHeading(key);
//     }
//   };

//   useEffect(() => {
//     if (activeRef) {
//       setActiveTab(activeTab);
//       setExpanded(true);
//     }
//   }, [activeRef]);

//   return (
//     <div className="max-w-sm md:max-w-3xl lg:max-w-5xl">
//       <div className="sm:hidden w-full m-4">
//         <label htmlFor="tabs" className="sr-only">Read More</label>
//         <select
//           id="tabs"
//           className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           onChange={(e) => handleTab(e.target.value)}
//         >
//           <option value={''}>Reset</option>
//           {sectionKeys.map((section, index) => (
//             <option key={`${section}-${index}`} value={section}>
//               {section}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="md:flex">
//         <ul className="not-prose hidden md:flex flex-col space-y-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
//           {sectionKeys.map((section, index) => (
//             <li className="w-full focus-within:z-10" key={`${section}-${index}`}>
//               <button
//                 onClick={() => handleTab(section)}
//                 className={clsx('not-prose inline-flex items-center px-4 py-2 rounded-l-lg w-full md:max-w-5/6 transition-all duration-200 text-left bg-gray-100 border-r border-gray-200 whitespace-nowrap dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white', {
//                   'bg-primary-600 text-white': activeTab === section,
//                   'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700': activeTab !== section,
//                 })}
//                 aria-current="page"
//               >
//                 {section}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div className="flex flex-col w-full space-y-4 md:px-0 px-12">
//           {expanded && activeTab && compiledContent && (
//             <div className="relative w-full max-w-full md:max-w-5/6 px-6 md:px-12 bg-white dark:bg-gray-900 rounded-lg shadow">
//               <div className="prose prose-2xl mx-auto py-12">
//                 <MDXRemote {...compiledContent} components={components} />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tabs;








// "use client";

// import React, { useState, useEffect } from "react";
// import { useMDXComponents } from "mdx-components";
// import { useTOC, Heading } from "@/context/TOCContext";
// import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
// import clsx from "clsx";

// type TabsProps = {
//   sections: {
//     [key: string]: {
//       compiledSource: MDXRemoteSerializeResult;
//       ref?: HTMLHeadingElement;
//     };
//   };
//   toc: Heading[];
// };

// const Tabs: React.FC<TabsProps> = ({ sections, toc }) => {
//   const components = useMDXComponents();
//   const { headings, registerHeading, setActiveHeading, activeRef } = useTOC();

//   const sectionKeys = Object.keys(sections);
//   const [activeTab, setActiveTab] = useState(sectionKeys[0] || "");
//   const [compiledContent, setCompiledContent] = useState<MDXRemoteSerializeResult>();

//   // Register TOC headings
//   useEffect(() => {
//     const registeredIds = new Set(headings.map((heading) => heading.id));

//     toc.forEach((item) => {
//       if (!registeredIds.has(item.id)) {
//         registerHeading(item);
//       }
//     });
//   }, [toc, headings, registerHeading]);

//   // Update active tab's content and TOC state
//   useEffect(() => {
//     if (activeTab && sections[activeTab]) {
//       const section = sections[activeTab];
//       setActiveHeading(section.ref as HTMLHeadingElement); // Set TOC active ref
//       setCompiledContent(section.compiledSource);
//     }
//   }, [activeTab, sections, setActiveHeading]);

//   // Handle tab change
//   const handleTabChange = (key: string) => {
//     setActiveTab(key);
//     if (sections[key]) {
//       setActiveHeading(sections[key].ref as HTMLHeadingElement);
//     }
//   };

//   return (
//     <div className="max-w-sm md:max-w-3xl lg:max-w-5xl">
//       {/* Mobile Dropdown */}
//       <div className="sm:hidden w-full m-4">
//         <label htmlFor="tabs" className="sr-only">
//           Select Section
//         </label>
//         <select
//           id="tabs"
//           className="block w-full p-2 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           onChange={(e) => handleTabChange(e.target.value)}
//           value={activeTab}
//         >
//           <option value="">Select a section</option>
//           {sectionKeys.map((section) => (
//             <option key={section} value={section}>
//               {section}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="md:flex">
//         {/* Tab Navigation */}
//         <ul className="hidden md:flex flex-col space-y-2 text-sm text-gray-500 dark:text-gray-400">
//           {sectionKeys.map((section) => (
//             <li key={section}>
//               <button
//                 onClick={() => handleTabChange(section)}
//                 className={clsx(
//                   "w-full px-4 py-2 text-left transition-all rounded-l-lg focus:outline-none",
//                   activeTab === section
//                     ? "bg-primary-600 text-white"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
//                 )}
//               >
//                 {section}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Tab Content */}
//         <div className="flex-grow">
//           {compiledContent && (
//             <div className="prose dark:prose-dark mx-auto">
//               <MDXRemote {...compiledContent} components={components} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tabs;















// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { useMDXComponents } from "mdx-components";
// import { useTOC, Heading } from "@/context/TOCContext";
// import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
// import clsx from "clsx";

// type TabsProps = {
//   sections: {
//     [key: string]: {
//       compiledSource: MDXRemoteSerializeResult;
//       ref?: React.RefObject<HTMLHeadingElement | HTMLLIElement>;
//     };
//   };
//   toc: Heading[];
// };

// const Tabs: React.FC<TabsProps> = ({ sections, toc }) => {
//   const components = useMDXComponents();
//   const { headings, registerHeading, setActiveHeading, activeRef } = useTOC();

//   const sectionKeys = Object.keys(sections);
//   const [activeTab, setActiveTab] = useState(sectionKeys[0] || "");
//   const [compiledContent, setCompiledContent] = useState<MDXRemoteSerializeResult>();

//   const refs = useRef<{ [key: string]: React.RefObject<HTMLHeadingElement | HTMLLIElement> }>(
//     sectionKeys.reduce((acc, key) => {
//       acc[key] = React.createRef();
//       return acc;
//     }, {} as { [key: string]: React.RefObject<HTMLHeadingElement | HTMLLIElement> })
//   );

//   // Register TOC headings
//   useEffect(() => {
//     const registeredIds = new Set(headings.map((heading) => heading.id));

//     toc.forEach((item) => {
//       if (!registeredIds.has(item.id)) {
//         const ref = refs.current[item.id] || React.createRef();
//         refs.current[item.id] = ref;

//         registerHeading({
//           ...item,
//           ref: ref.current,
//           children: []
//         });
//       }
//     });
//   }, [toc, headings, registerHeading]);

//   // Update active tab's content and TOC state
//   useEffect(() => {
//     if (activeTab && sections[activeTab]) {
//       const section = sections[activeTab];
//       setActiveHeading(section.ref?.current as HTMLHeadingElement | HTMLLIElement); // Set TOC active ref
//       setCompiledContent(section.compiledSource);
//     }
//   }, [activeTab, sections, setActiveHeading]);

//   // Handle tab change
//   const handleTabChange = (key: string) => {
//     setActiveTab(key);
//     if (sections[key]) {
//       setActiveHeading(sections[key].ref?.current as HTMLLIElement);
//     }
//   };

//   return (
//     <div className="max-w-sm md:max-w-3xl lg:max-w-5xl">
//       {/* Mobile Dropdown */}
//       <div className="sm:hidden w-full m-4">
//         <label htmlFor="tabs" className="sr-only">
//           Select Section
//         </label>
//         <select
//           id="tabs"
//           className="block w-full p-2 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           onChange={(e) => handleTabChange(e.target.value)}
//           value={activeTab}
//         >
//           <option value="">Select a section</option>
//           {sectionKeys.map((section) => (
//             <option key={section} value={section}>
//               {section}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="md:flex">
//         {/* Tab Navigation */}
//         <ul className="hidden md:flex flex-col space-y-2 text-sm text-gray-500 dark:text-gray-400">
//           {sectionKeys.map((section) => (
//             <li key={section} ref={refs.current[section] as unknown as HTMLLIElement}>
//               <button
//                 onClick={() => handleTabChange(section)}
//                 className={clsx(
//                   "w-full px-4 py-2 text-left transition-all rounded-l-lg focus:outline-none",
//                   activeTab === section
//                     ? "bg-primary-600 text-white"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
//                 )}
//               >
//                 {section}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Tab Content */}
//         <div className="flex-grow">
//           {compiledContent && (
//             <div className="prose dark:prose-dark mx-auto">
//               <MDXRemote {...compiledContent} components={components} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tabs;




"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTOC, Heading } from "@/context/TOCContext";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import clsx from "clsx";
import MDXCompiler from "../../blog/MDX/MDXCompiler";

type TabsProps = {
  sections: {
    [key: string]: {
      compiledSource: MDXRemoteSerializeResult;
      ref?: React.RefObject<HTMLHeadingElement | HTMLLIElement>;
    };
  };
  toc: Heading[];
  content: MDXRemoteSerializeResult;
};

const Tabs: React.FC<TabsProps> = ({ sections, toc, content }) => {
  const { headings, registerHeading, setActiveHeading } = useTOC();

  const sectionKeys = Object.keys(sections);
  const [activeTab, setActiveTab] = useState(sectionKeys[0] || "");
  const [compiledContent, setCompiledContent] = useState<MDXRemoteSerializeResult>();

  const refs = useRef<{ [key: string]: React.RefObject<HTMLLIElement> }>(
    sectionKeys.reduce((acc, key) => {
      acc[key] = React.createRef<HTMLLIElement>();
      return acc;
    }, {} as { [key: string]: React.RefObject<HTMLLIElement> })
  );

  useEffect(() => {
    const registeredIds = new Set(headings.map((heading) => heading.id));

    toc.forEach((item) => {
      if (!registeredIds.has(item.id)) {
        const ref = refs.current[item.id] || React.createRef<HTMLLIElement>();
        refs.current[item.id] = ref;

        registerHeading({
          ...item,
          ref: ref.current,
          children: [],
        });
      }
    });
  }, [toc, headings, registerHeading]);

  useEffect(() => {
    if (activeTab && sections[activeTab]) {
      const section = sections[activeTab];
      setActiveHeading(section.ref?.current as HTMLLIElement || null);
      setCompiledContent(section.compiledSource);
    }
  }, [activeTab, sections, setActiveHeading]);

  const handleTabChange = (key: string) => {
    setActiveTab(key);
    if (sections[key]) {
      setActiveHeading(sections[key].ref?.current as HTMLLIElement || null);
    }
  };

  return (
    <div className="max-w-sm md:max-w-3xl lg:max-w-5xl">
      {/* Mobile Dropdown */}
      <div className="sm:hidden w-full m-4">
        <label htmlFor="tabs" className="sr-only">
          Select Section
        </label>
        <select
          id="tabs"
          className="block w-full p-2 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          onChange={(e) => handleTabChange(e.target.value)}
          value={activeTab}
        >
          <option value="">Select a section</option>
          {sectionKeys.map((section) => (
            <option key={section} value={section}>
              {section}
            </option>
          ))}
        </select>
      </div>

      <div className="md:flex">
        {/* Tab Navigation */}
        <ul className="hidden md:flex flex-col space-y-2 text-sm text-gray-500 dark:text-gray-400">
          {sectionKeys.map((section) => (
            <li key={section} ref={refs.current[section]}>
              <button
                onClick={() => handleTabChange(section)}
                className={clsx(
                  "w-full px-4 py-2 text-left transition-all rounded-l-lg focus:outline-none",
                  activeTab === section
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
                )}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="flex-grow">
          {compiledContent && (
            <MDXCompiler frontmatter={content.frontmatter} mdxSource={compiledContent} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
