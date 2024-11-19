// "use client";

// import React, { memo, useCallback, useEffect, useMemo } from 'react';
// import {
//   FaSun,
//   FaMoon,
//   FaProjectDiagram,
//   FaNewspaper,
//   FaBriefcase,
//   FaPlus,
//   FaTimes,
// } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useDarkMode } from '@/context/styling/DarkModeContext';
// import { Tooltip as ReactTooltip } from 'react-tooltip';

// const FabMenu: React.FC = () => {
//   const { isDarkMode, toggleDarkMode } = useDarkMode();
//   const [isOpen, setIsOpen] = React.useState(false);

//   const toggleMenu = useCallback(() => {
//     setIsOpen((prev) => !prev);
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       const handleScroll = () => {
//         setIsOpen(false);
//       };

//       window.addEventListener('scroll', handleScroll, { passive: true });
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }
//   }, [isOpen]);


//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }

//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isOpen]);


//   const items = useMemo(
//     () => [
//       {
//         id: 'dark-mode-toggle',
//         icon: isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />,
//         label: 'Toggle Dark Mode',
//         onClick: toggleDarkMode,
//       },
//       {
//         id: 'projects',
//         icon: <FaProjectDiagram size={20} />,
//         label: 'Projects',
//         link: '/projects'
//       },
//       {
//         id: 'articles',
//         icon: <FaNewspaper size={20} />,
//         label: 'Articles',
//         link: '/blog'
//       },
//       {
//         id: 'portfolio',
//         icon: <FaBriefcase size={20} />,
//         label: 'Portfolio',
//         link: '/'
//       },
//     ],
//     [isDarkMode, toggleDarkMode]
//   );

//   return (
//     <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-4">
//       <AnimatePresence>
//         {isOpen &&
//           items.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.3, delay: 0.05 * index }}
//             >
//               {item.onClick ? (
//                 <motion.button
//                   onClick={item.onClick}
//                   data-tooltip-id={`${item.id}-tooltip`}
//                   data-tooltip-content={item.label}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="flex pointer-events-auto items-center justify-center rounded-full bg-primary-700 text-primary-100 dark:text-primary-900 dark:bg-primary-100 p-3 shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-primary-800 dark:hover:bg-primary-200"
//                   aria-label={item.label}
//                 >
//                   {item.icon}
//                 </motion.button>
//               ) : (
//                 <motion.a
//                   href={item.link}
//                   data-tooltip-id={`${item.id}-tooltip`}
//                   data-tooltip-content={item.label}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="flex items-center justify-center rounded-full bg-primary-700 text-primary-100 dark:text-primary-900 dark:bg-primary-100 p-3 shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-primary-800 dark:hover:bg-primary-200"
//                   aria-label={item.label}
//                 >
//                   {item.icon}
//                 </motion.a>
//               )}
//               {item && (
//                 <ReactTooltip id={`${item.id}-tooltip`} place="left" />
//               )}
//             </motion.div>
//           ))}
//       </AnimatePresence>

//       <motion.button
//         onClick={toggleMenu}
//         data-tooltip-id="main-fab-tooltip"
//         data-tooltip-content={isOpen ? 'Close Menu' : 'Open Menu'}
//         className="z-[999px] pointer-events-auto inline-flex items-center justify-center rounded-full bg-primary-700 p-4 shadow-lg transition-colors duration-300 dark:bg-primary-100 text-white dark:text-primary-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-primary-800 dark:hover:bg-primary-200"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
//       >
//         {isOpen ? <FaTimes size={24} /> : <FaPlus size={24} />}
//       </motion.button>
//       <ReactTooltip id="main-fab-tooltip" place="left" />
//     </div>
//   );
// };

// export default memo(FabMenu);


// "use client"


// import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
// import {
//   FaSun,
//   FaMoon,
//   FaProjectDiagram,
//   FaNewspaper,
//   FaBriefcase,
//   FaPlus,
//   FaTimes,
// } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useDarkMode } from '@/context/styling/DarkModeContext';
// import { Tooltip as ReactTooltip } from 'react-tooltip';

// const FabMenu = () => {
//   const { isDarkMode, toggleDarkMode } = useDarkMode();
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);

//   const handleClickOutside = useCallback((event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//       return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//       };
//     }
//   }, [isOpen, handleClickOutside]);

//   const toggleMenu = useCallback(() => {
//     setIsOpen((prev) => !prev);
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       const handleScroll = () => {
//         setIsOpen(false);
//       };

//       window.addEventListener('scroll', handleScroll, { passive: true });
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }

//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isOpen]);

//   const items = useMemo(
//     () => [
//       {
//         id: 'dark-mode-toggle',
//         icon: isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />,
//         label: 'Toggle Dark Mode',
//         onClick: toggleDarkMode,
//       },
//       {
//         id: 'projects',
//         icon: <FaProjectDiagram size={20} />,
//         label: 'Projects',
//         link: '/projects',
//       },
//       {
//         id: 'articles',
//         icon: <FaNewspaper size={20} />,
//         label: 'Articles',
//         link: '/blog',
//       },
//       {
//         id: 'portfolio',
//         icon: <FaBriefcase size={20} />,
//         label: 'Portfolio',
//         link: '/',
//       },
//     ],
//     [isDarkMode, toggleDarkMode]
//   );

//   return (
//     <div
//       ref={menuRef}
//       className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-4"
//     >
//       <AnimatePresence>
//         {isOpen &&
//           items.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.3, delay: 0.05 * index }}
//             >
//               {item.onClick ? (
//                 <motion.button
//                   onClick={item.onClick}
//                   data-tooltip-id={`${item.id}-tooltip`}
//                   data-tooltip-content={item.label}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="flex pointer-events-auto items-center justify-center rounded-full bg-primary-700 text-primary-100 dark:text-primary-900 dark:bg-primary-100 p-3 shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-primary-800 dark:hover:bg-primary-200"
//                   aria-label={item.label}
//                 >
//                   {item.icon}
//                 </motion.button>
//               ) : (
//                 <motion.a
//                   href={item.link}
//                   data-tooltip-id={`${item.id}-tooltip`}
//                   data-tooltip-content={item.label}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="flex items-center justify-center rounded-full bg-primary-700 text-primary-100 dark:text-primary-900 dark:bg-primary-100 p-3 shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-primary-800 dark:hover:bg-primary-200"
//                   aria-label={item.label}
//                 >
//                   {item.icon}
//                 </motion.a>
//               )}
//               {item && (
//                 <ReactTooltip id={`${item.id}-tooltip`} place="left" />
//               )}
//             </motion.div>
//           ))}
//       </AnimatePresence>

//       <motion.button
//         onClick={toggleMenu}
//         data-tooltip-id="main-fab-tooltip"
//         data-tooltip-content={isOpen ? 'Close Menu' : 'Open Menu'}
//         className="z-50 pointer-events-auto inline-flex items-center justify-center rounded-full bg-primary-700 p-4 shadow-lg transition-colors duration-300 dark:bg-primary-100 text-white dark:text-primary-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-primary-800 dark:hover:bg-primary-200"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
//       >
//         {isOpen ? <FaTimes size={24} /> : <FaPlus size={24} />}
//       </motion.button>
//       <ReactTooltip id="main-fab-tooltip" place="left" />
//     </div>
//   );
// };

// export default FabMenu;






"use client"

// import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
// import {
//   FaSun,
//   FaMoon,
//   FaProjectDiagram,
//   FaNewspaper,
//   FaBriefcase,
//   FaPlus,
//   FaTimes,
// } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useDarkMode } from '@/context/styling/DarkModeContext';
// import { Tooltip as ReactTooltip } from 'react-tooltip';

// const FabMenu = () => {
//   const { isDarkMode, toggleDarkMode } = useDarkMode();
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);

//   const handleClickOutside = useCallback((event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//       return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//       };
//     }
//   }, [isOpen, handleClickOutside]);

//   const toggleMenu = useCallback(() => {
//     setIsOpen((prev) => !prev);
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       const handleScroll = () => {
//         setIsOpen(false);
//       };

//       window.addEventListener('scroll', handleScroll, { passive: true });
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }

//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isOpen]);

//   const items = useMemo(
//     () => [
//       {
//         id: 'dark-mode-toggle',
//         icon: isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />,
//         label: 'Toggle Dark Mode',
//         onClick: toggleDarkMode,
//       },
//       {
//         id: 'projects',
//         icon: <FaProjectDiagram size={20} />,
//         label: 'Projects',
//         link: '/projects',
//       },
//       {
//         id: 'articles',
//         icon: <FaNewspaper size={20} />,
//         label: 'Articles',
//         link: '/blog',
//       },
//       {
//         id: 'portfolio',
//         icon: <FaBriefcase size={20} />,
//         label: 'Portfolio',
//         link: '/',
//       },
//     ],
//     [isDarkMode, toggleDarkMode]
//   );

//   return (
//     <div
//       ref={menuRef}
//       className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-4"
//     >
//       <AnimatePresence>
//         {isOpen &&
//           items.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.3, delay: 0.05 * index }}
//             >
//               {item.onClick ? (
//                 <motion.button
//                   onClick={item.onClick}
//                   data-tooltip-id={`${item.id}-tooltip`}
//                   data-tooltip-content={item.label}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="flex pointer-events-auto items-center justify-center rounded-full bg-primary-700 text-primary-100 dark:text-primary-900 dark:bg-primary-100 p-3 shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-primary-800 dark:hover:bg-primary-200"
//                   aria-label={item.label}
//                 >
//                   {item.icon}
//                 </motion.button>
//               ) : (
//                 <motion.a
//                   href={item.link}
//                   data-tooltip-id={`${item.id}-tooltip`}
//                   data-tooltip-content={item.label}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="flex items-center justify-center rounded-full bg-primary-700 text-primary-100 dark:text-primary-900 dark:bg-primary-100 p-3 shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-primary-800 dark:hover:bg-primary-200"
//                   aria-label={item.label}
//                 >
//                   {item.icon}
//                 </motion.a>
//               )}
//               {item && (
//                 <ReactTooltip id={`${item.id}-tooltip`} place="left" />
//               )}
//             </motion.div>
//           ))}
//       </AnimatePresence>

//       <motion.button
//         onClick={toggleMenu}
//         data-tooltip-id="main-fab-tooltip"
//         data-tooltip-content={isOpen ? 'Close Menu' : 'Open Menu'}
//         className="z-50 pointer-events-auto inline-flex items-center justify-center rounded-full bg-primary-700 p-4 shadow-lg transition-colors duration-300 dark:bg-primary-100 text-white dark:text-primary-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-primary-800 dark:hover:bg-primary-200"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
//       >
//         {isOpen ? <FaTimes size={24} /> : <FaPlus size={24} />}
//       </motion.button>
//       <ReactTooltip id="main-fab-tooltip" place="left" />
//     </div>
//   );
// };

// export default FabMenu;


import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import {
  FaSun,
  FaMoon,
  FaProjectDiagram,
  FaNewspaper,
  FaBriefcase,
  FaPlus,
  FaTimes,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '@/context/styling/DarkModeContext';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const FabMenu = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !(menuRef.current as Node).contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);


  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, handleClickOutside]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const handleScroll = () => {
        setIsOpen(false);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const items = useMemo(
    () => [
      {
        id: 'dark-mode-toggle',
        icon: isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />,
        label: 'Toggle Dark Mode',
        onClick: toggleDarkMode,
      },
      {
        id: 'projects',
        icon: <FaProjectDiagram size={20} />,
        label: 'Projects',
        link: '/projects',
      },
      {
        id: 'articles',
        icon: <FaNewspaper size={20} />,
        label: 'Articles',
        link: '/blog',
      },
      {
        id: 'portfolio',
        icon: <FaBriefcase size={20} />,
        label: 'Portfolio',
        link: '/',
      },
    ],
    [isDarkMode, toggleDarkMode]
  );

  return (
    <div
      ref={menuRef}
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-4"
    >
      <AnimatePresence>
        {isOpen &&
          items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
            >
              {item.onClick ? (
                <motion.button
                  onClick={item.onClick}
                  data-tooltip-id={`${item.id}-tooltip`}
                  data-tooltip-content={item.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex pointer-events-auto items-center justify-center rounded-full bg-primary-700 text-primary-100 dark:text-primary-900 dark:bg-primary-100 p-3 shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-primary-800 dark:hover:bg-primary-200"
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.button>
              ) : (
                <motion.a
                  href={item.link}
                  data-tooltip-id={`${item.id}-tooltip`}
                  data-tooltip-content={item.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center rounded-full bg-primary-700 text-primary-100 dark:text-primary-900 dark:bg-primary-100 p-3 shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-primary-800 dark:hover:bg-primary-200"
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.a>
              )}
              {item && (
                <ReactTooltip id={`${item.id}-tooltip`} place="left" />
              )}
            </motion.div>
          ))}
      </AnimatePresence>

      <motion.button
        onClick={toggleMenu}
        data-tooltip-id="main-fab-tooltip"
        data-tooltip-content={isOpen ? 'Close Menu' : 'Open Menu'}
        className="z-50 pointer-events-auto inline-flex items-center justify-center rounded-full bg-primary-700 p-4 shadow-lg transition-colors duration-300 dark:bg-primary-100 text-white dark:text-primary-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-primary-800 dark:hover:bg-primary-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
      >
        {isOpen ? <FaTimes size={24} /> : <FaPlus size={24} />}
      </motion.button>
      <ReactTooltip id="main-fab-tooltip" place="left" />
    </div>
  );
};

export default FabMenu;
