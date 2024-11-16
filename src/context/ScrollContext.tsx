// // // 'use client'

// // // import React, {
// // //   createContext,
// // //   useContext,
// // //   useState,
// // //   useCallback,
// // //   useEffect,
// // //   useRef,
// // // } from 'react'

// // // interface ScrollContextProps {
// // //   currentSection: string
// // //   setCurrentSection: (section: string) => void
// // // }

// // // const ScrollContext = createContext<ScrollContextProps>({
// // //   currentSection: '',
// // //   setCurrentSection: () => { },
// // // })

// // // export const useScrollContext = () => useContext(ScrollContext)

// // // export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
// // //   children,
// // // }) => {
// // //   const [currentSection, setCurrentSection] = useState<string>('')
// // //   const observerRef = useRef<IntersectionObserver | null>(null)

// // //   const handleIntersection = useCallback(
// // //     (entries: IntersectionObserverEntry[]) => {
// // //       const visibleSections = entries
// // //         .filter(entry => entry.isIntersecting)
// // //         .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

// // //       if (visibleSections.length > 0) {
// // //         const topSectionId = `#${visibleSections[0].target.id}`
// // //         console.log('Intersecting Section:', topSectionId)
// // //         setCurrentSection(topSectionId)
// // //       }
// // //     },
// // //     []
// // //   )

// // //   useEffect(() => {
// // //     const observerOptions: IntersectionObserverInit = {
// // //       root: null,
// // //       rootMargin: '0px 0px -50px 0px',
// // //       threshold: [0.2, 0.4, 0.6, 0.8],
// // //     }

// // //     observerRef.current = new IntersectionObserver(
// // //       handleIntersection,
// // //       observerOptions
// // //     )
// // //     const sections = document.querySelectorAll('section')

// // //     sections.forEach(section => observerRef.current?.observe(section))

// // //     return () => {
// // //       observerRef.current?.disconnect()
// // //     }
// // //   }, [handleIntersection])

// // //   return (
// // //     <ScrollContext.Provider value={{ currentSection, setCurrentSection }}>
// // //       {children}
// // //     </ScrollContext.Provider>
// // //   )
// // // // }
// // // import React, {
// // //   createContext,
// // //   useContext,
// // //   useState,
// // //   useCallback,
// // //   useEffect,
// // //   useRef,
// // // } from 'react'

// // // interface ScrollContextProps {
// // //   currentSection: string
// // //   setCurrentSection: (section: string) => void
// // //   lockScroll: () => void
// // //   unlockScroll: () => void
// // // }

// // // const ScrollContext = createContext<ScrollContextProps>({
// // //   currentSection: '',
// // //   setCurrentSection: () => { },
// // //   lockScroll: () => { },
// // //   unlockScroll: () => { },
// // // })

// // // export const useScrollContext = () => useContext(ScrollContext)

// // // export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
// // //   children,
// // // }) => {
// // //   const [currentSection, setCurrentSection] = useState<string>('')
// // //   const observerRef = useRef<IntersectionObserver | null>(null)

// // //   const handleIntersection = useCallback(
// // //     (entries: IntersectionObserverEntry[]) => {
// // //       const visibleSections = entries
// // //         .filter(entry => entry.isIntersecting)
// // //         .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

// // //       if (visibleSections.length > 0) {
// // //         const topSectionId = `#${visibleSections[0].target.id}`
// // //         console.log('Intersecting Section:', topSectionId)
// // //         setCurrentSection(topSectionId)
// // //       }
// // //     },
// // //     []
// // //   )

// // //   const lockScroll = useCallback(() => {
// // //     document.documentElement.classList.add('scroll-locked')
// // //   }, [])

// // //   const unlockScroll = useCallback(() => {
// // //     document.documentElement.classList.remove('scroll-locked')
// // //   }, [])

// // //   useEffect(() => {
// // //     const observerOptions: IntersectionObserverInit = {
// // //       root: null,
// // //       rootMargin: '0px 0px -50px 0px',
// // //       threshold: [0.2, 0.4, 0.6, 0.8],
// // //     }

// // //     observerRef.current = new IntersectionObserver(
// // //       handleIntersection,
// // //       observerOptions
// // //     )
// // //     const sections = document.querySelectorAll('section')

// // //     sections.forEach(section => observerRef.current?.observe(section))

// // //     return () => {
// // //       observerRef.current?.disconnect()
// // //     }
// // //   }, [handleIntersection])

// // //   return (
// // //     <ScrollContext.Provider
// // //       value={{
// // //         currentSection,
// // //         setCurrentSection,
// // //         lockScroll,
// // //         unlockScroll,
// // //       }}
// // //     >
// // //       {children}
// // //     </ScrollContext.Provider>
// // //   )
// // // }'





// // 'use client'

// // import React, {
// //   createContext,
// //   useContext,
// //   useState,
// //   useCallback,
// //   useEffect,
// //   useRef,
// // } from 'react'
// // import { usePathname } from 'next/navigation'
// // import { debounce } from 'lodash'
// // import useTOC from '@/hooks/useTOC'

// // interface ScrollContextProps {
// //   observedSections: { [key: string]: string }
// //   setObservedSections: (key: string, section: string) => void
// //   registerObserver: (key: string, selector: any[]) => void
// //   unregisterObserver: (key: string) => void
// //   lockScroll: () => void;
// //   unlockScroll: () => void;
// // }

// // const ScrollContext = createContext<ScrollContextProps>({
// //   observedSections: {},
// //   setObservedSections: () => { },
// //   registerObserver: () => { },
// //   unregisterObserver: () => { },
// //   lockScroll: () => { },
// //   unlockScroll: () => { }
// // })

// // export const useScrollContext = () => useContext(ScrollContext)

// // export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
// //   children,
// // }) => {
// //   const [observedSections, setObservedSectionsState] = useState<{ [key: string]: string }>({})
// //   const observersRef = useRef<{ [key: string]: IntersectionObserver }>({})
// //   const pathname = usePathname()
// //   const { tocItems } = useTOC();

// //   const lockScroll = useCallback(() => {
// //     document.documentElement.classList.add('scroll-locked')
// //   }, [])

// //   const unlockScroll = useCallback(() => {
// //     document.documentElement.classList.remove('scroll-locked')
// //   }, [])


// //   // const setObservedSections = useCallback((key: string, section: string) => {
// //   //   setObservedSectionsState(prev => {
// //   //     if (prev[key] === section) return prev
// //   //     console.log(prev, section)
// //   //     return { ...prev, [key]: section }
// //   //   })
// //   // }, [])



// //   const setObservedSections = useCallback(
// //     (key: string, section: string) => {
// //       setObservedSectionsState((prev) => {
// //         if (prev[key] === section) return prev;
// //         const updated = { ...prev, [key]: section };
// //         console.log("Updated observedSections:", updated); // Debugging log
// //         return updated;
// //       });
// //     },
// //     []
// //   );


// //   const handleIntersection = useCallback(
// //     (entries: IntersectionObserverEntry[], key: string) => {
// //       const visibleSections = entries
// //         .filter(entry => entry.isIntersecting)
// //         .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

// //       if (visibleSections.length > 0) {
// //         const topSectionId = `#${visibleSections[0].target.id}`
// //         setObservedSections(key, topSectionId)
// //       }
// //     },
// //     [setObservedSections]
// //   )

// //   // const registerObserver = useCallback(
// //   //   (key: string, selector: string) => {
// //   //     const elements = document.querySelectorAll(selector)
// //   //     if (!elements.length) return

// //   //     const debouncedIntersectionHandler = debounce(
// //   //       (entries: IntersectionObserverEntry[]) => handleIntersection(entries, key),
// //   //       100 // Debounce delay
// //   //     )

// //   //     const observerOptions: IntersectionObserverInit = {
// //   //       root: null,
// //   //       rootMargin: '0px 0px -50px 0px',
// //   //       threshold: [0.5],
// //   //     }

// //   //     const observer = new IntersectionObserver(debouncedIntersectionHandler, observerOptions)
// //   //     elements.forEach(element => observer.observe(element))
// //   //     observersRef.current[key] = observer
// //   //   },
// //   //   [handleIntersection]
// //   // )

// //   // const unregisterObserver = useCallback((key: string) => {
// //   //   observersRef.current[key]?.disconnect()
// //   //   delete observersRef.current[key]
// //   // }, [])


// //   // const registerObserver = useCallback(
// //   //   (key: string, selector: string) => {
// //   //     const elements = document.querySelectorAll(selector);
// //   //     if (!elements.length) {
// //   //       console.warn(`No elements found for selector: ${selector}`);
// //   //       return;
// //   //     }

// //   //     console.log("Registering observer for elements:", elements); // Debugging log

// //   //     const debouncedIntersectionHandler = debounce(
// //   //       (entries: IntersectionObserverEntry[]) => handleIntersection(entries, key),
// //   //       100 // Debounce delay
// //   //     );

// //   //     const observerOptions: IntersectionObserverInit = {
// //   //       root: null,
// //   //       rootMargin: '0px 0px -50px 0px',
// //   //       threshold: [0.5],
// //   //     };

// //   //     const observer = new IntersectionObserver(
// //   //       debouncedIntersectionHandler,
// //   //       observerOptions
// //   //     );
// //   //     elements.forEach((element) => observer.observe(element));
// //   //     observersRef.current[key] = observer;
// //   //   },
// //   //   [handleIntersection]
// //   // );

// //   // const registerObserver = useCallback(
// //   //   (key: string, selector: string) => {
// //   //     const elements = document.querySelectorAll(selector);
// //   //     if (!elements.length) return;

// //   //     console.log(`Registering observer for elements:`, elements);

// //   //     const observerOptions: IntersectionObserverInit = {
// //   //       root: null,
// //   //       rootMargin: '0px 0px -50% 0px', // Adjust to ensure heading enters viewport fully
// //   //       threshold: [0.25, 0.5, 0.75], // Track at different visibility percentages
// //   //     };

// //   //     const observer = new IntersectionObserver((entries) => {
// //   //       entries.forEach(entry => {
// //   //         if (entry.isIntersecting) {
// //   //           const id = entry.target.getAttribute('id') || '';
// //   //           console.log(`Visible heading ID: ${id}`);
// //   //           setObservedSections(key, `#${id}`);
// //   //         }
// //   //       });
// //   //     }, observerOptions);

// //   //     elements.forEach(element => observer.observe(element));
// //   //     observersRef.current[key] = observer;
// //   //   },
// //   //   [setObservedSections]
// //   // );


// //   const registerObserver = useCallback(
// //     (key: string, tocItems: any[]) => {
// //       // Loop over each TOC item and create a selector for its ID
// //       tocItems.forEach(item => {
// //         const sanitizedId = item.id.replace(/[^a-zA-Z0-9-_]/g, ''); // Remove invalid characters
// //         const element = document.getElementById(sanitizedId);

// //         if (!element) {
// //           console.warn(`Element with ID ${sanitizedId} not found.`);
// //           return;
// //         }

// //         // Log the element to verify observation
// //         console.log(`Observing element with ID: ${sanitizedId}`, element);

// //         const observerOptions: IntersectionObserverInit = {
// //           root: null,
// //           rootMargin: '0px 0px -50% 0px', // Adjust based on requirements
// //           threshold: [0.25, 0.5, 0.75],   // Detect at multiple visibility thresholds
// //         };

// //         const observer = new IntersectionObserver((entries) => {
// //           entries.forEach(entry => {
// //             if (entry.isIntersecting) {
// //               const id = entry.target.getAttribute('id') || '';
// //               console.log(`Visible heading ID: ${id}`);
// //               setObservedSections(key, `#${id}`);
// //             }
// //           });
// //         }, observerOptions);

// //         observer.observe(element); // Observe the element directly
// //         observersRef.current[key] = observer;
// //       });
// //     },
// //     [setObservedSections]
// //   );



// //   const unregisterObserver = useCallback((key: string) => {
// //     observersRef.current[key]?.disconnect();
// //     delete observersRef.current[key];
// //   }, []);

// //   useEffect(() => {
// //     // Clean up observers on unmount or route change
// //     return () => {
// //       Object.keys(observersRef.current).forEach((key) => {
// //         observersRef.current[key].disconnect();
// //       });
// //       observersRef.current = {};
// //     };
// //   }, [pathname]);


// //   // useEffect(() => {
// //   //   if (tocItems.length > 0) {
// //   //     // Sanitize each ID using CSS.escape if available, or the custom sanitize function
// //   //     const sanitizedSelector = tocItems
// //   //       .map(item => `#${CSS.escape ? CSS.escape(item.id) : item.id}`)
// //   //       .join(", ");
// //   //     registerObserver('toc', sanitizedSelector);
// //   //   }

// //   //   return () => {
// //   //     unregisterObserver('toc');
// //   //   };
// //   // }, [tocItems, registerObserver, unregisterObserver]);

// //   useEffect(() => {
// //     if (tocItems.length > 0) {
// //       registerObserver('toc', tocItems);
// //     }

// // //     return () => {
// // //       unregisterObserver('toc');
// // //     };
// // //   }, [tocItems, registerObserver, unregisterObserver]);

// // //   // useEffect(() => {
// // //   //   if (tocItems.length > 0) {
// // //   //     const selector = tocItems.map(item => `#${item.id}`).join(", ");
// // //   //     registerObserver('toc', selector);
// // //   //   }

// // //   //   return () => {
// // //   //     unregisterObserver('toc');
// // //   //   };
// // //   // }, [tocItems, registerObserver, unregisterObserver]);

// // //   // // useEffect(() => {
// // //   //   return () => {
// // //   //     Object.keys(observersRef.current).forEach(key => {
// // //   //       observersRef.current[key].disconnect()
// // //   //     })
// // //   //     observersRef.current = {}
// // //   //   }
// // //   // }, [pathname])


// // //   // useEffect(() => {
// // //   //   registerObserver('toc', 'h1, h2, h3, h4, h5, h6');
// // //   //   return () => unregisterObserver('toc');
// // //   // }, [tocItems, registerObserver, unregisterObserver]);

// // //   // useEffect(() => {
// // //   //   if (pathname.startsWith('/blog')) {
// // //   //     lockScroll();
// // //   //   }
// // //   // }, [pathname])

// // //   return (
// // //     <ScrollContext.Provider
// // //       value={{
// // //         observedSections,
// // //         setObservedSections,
// // //         registerObserver,
// // //         unregisterObserver,
// // //         lockScroll,
// // //         unlockScroll
// // //       }}
// // //     >
// // //       {children}
// // //     </ScrollContext.Provider>
// // //   )
// // // }

// // // 'use client'

// // // import React, {
// // //   createContext,
// // //   useContext,
// // //   useState,
// // //   useCallback,
// // //   useEffect,
// // //   useRef,
// // // } from 'react'
// // // import { usePathname } from 'next/navigation'
// // // import { debounce } from 'lodash'
// // // import useTOC from '@/hooks/useTOC'

// // // interface ScrollContextProps {
// // //   observedSections: { [key: string]: string }
// // //   setObservedSections: (key: string, section: string) => void
// // //   registerObserver: (key: string, selector: any[]) => void
// // //   unregisterObserver: (key: string) => void
// // //   lockScroll: () => void
// // //   unlockScroll: () => void
// // // }

// // // const ScrollContext = createContext<ScrollContextProps>({
// // //   observedSections: {},
// // //   setObservedSections: () => { },
// // //   registerObserver: () => { },
// // //   unregisterObserver: () => { },
// // //   lockScroll: () => { },
// // //   unlockScroll: () => { },
// // // })

// // // export const useScrollContext = () => useContext(ScrollContext)

// // // export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
// // //   children,
// // // }) => {
// // //   const [observedSections, setObservedSectionsState] = useState<{ [key: string]: string }>({})
// // //   const observersRef = useRef<{ [key: string]: IntersectionObserver }>({})
// // //   const pathname = usePathname()
// // //   const { tocItems } = useTOC()

// // //   const lockScroll = useCallback(() => {
// // //     document.documentElement.classList.add('scroll-locked')
// // //   }, [])

// // //   const unlockScroll = useCallback(() => {
// // //     document.documentElement.classList.remove('scroll-locked')
// // //   }, [])

// // //   // Helper function to update the observed sections
// // //   const setObservedSections = useCallback((key: string, section: string) => {
// // //     setObservedSectionsState(prev => {
// // //       if (prev[key] === section) return prev
// // //       const updated = { ...prev, [key]: section }
// // //       console.log("Updated observedSections:", updated)
// // //       return updated
// // //     })
// // //   }, [])

// // //   // Register an observer for each TOC item
// // //   const registerObserver = useCallback(
// // //     (key: string, tocItems: any[]) => {
// // //       tocItems.forEach(item => {
// // //         // Sanitizing IDs for valid CSS selectors
// // //         const sanitizedId = item.id.replace(/[^a-zA-Z0-9-_]/g, '')
// // //         const element = document.getElementById(sanitizedId)

// // //         if (!element) {
// // //           console.warn(`Element with ID ${sanitizedId} not found.`)
// // //           return
// // //         }

// // //         console.log(`Observing element with ID: ${sanitizedId}`, element)

// // //         const observerOptions: IntersectionObserverInit = {
// // //           root: null,
// // //           rootMargin: '0px 0px -50% 0px',
// // //           threshold: [0.25, 0.5, 0.75], // Detect at multiple visibility thresholds
// // //         }

// // //         const observer = new IntersectionObserver((entries) => {
// // //           entries.forEach(entry => {
// // //             if (entry.isIntersecting) {
// // //               const id = entry.target.getAttribute('id') || ''
// // //               console.log(`Visible heading ID: ${id}`)
// // //               setObservedSections(key, `#${id}`)
// // //             }
// // //           })
// // //         }, observerOptions)

// // //         observer.observe(element)
// // //         observersRef.current[key] = observer
// // //       })
// // //     },
// // //     [setObservedSections]
// // //   )

// // //   const unregisterObserver = useCallback((key: string) => {
// // //     if (observersRef.current[key]) {
// // //       observersRef.current[key].disconnect()
// // //       delete observersRef.current[key]
// // //     }
// // //   }, [])

// // //   // Clean up observers on unmount or route change
// // //   useEffect(() => {
// // //     return () => {
// // //       Object.keys(observersRef.current).forEach((key) => {
// // //         observersRef.current[key].disconnect()
// // //       })
// // //       observersRef.current = {}
// // //     }
// // //   }, [pathname])

// // //   useEffect(() => {
// // //     if (tocItems.length > 0) {
// // //       registerObserver('toc', tocItems)
// // //     }

// // //     return () => {
// // //       unregisterObserver('toc')
// // //     }
// // //   }, [tocItems, registerObserver, unregisterObserver])

// // //   return (
// // //     <ScrollContext.Provider
// // //       value={{
// // // //         observedSections,
// // // //         setObservedSections,
// // // //         registerObserver,
// // // //         unregisterObserver,
// // // //         lockScroll,
// // // //         unlockScroll
// // // //       }}
// // // //     >
// // // //       {children}
// // // //     </ScrollContext.Provider>
// // // //   )
// // // // }








// // 'use client'

// // // import { useRef, useState, useEffect, useCallback } from 'react';
// // import useTOC from '@/hooks/useTOC';
// // import React, {
// //   createContext,
// //   useContext,
// //   useState,
// //   useEffect,
// //   useCallback,
// //   useRef
// // } from 'react';

// // // interface ScrollContextProps {
// // //   currentSection: string;
// // //   setCurrentSection: (section: string) => void;
// // //   updateCurrentHeading: (headingId: string) => void;
// // //   activePath: string[];
// // //   setActivePath: (path: string[]) => void;
// // // }

// // interface TOCItemType {
// //   id: string;
// //   value: string;
// //   depth: number;
// //   parentId?: string;
// //   children?: TOCItemType[];
// //   dataset: { id: number }
// // }
// // interface ScrollContextProps {
// //   activePath: string[];
// //   setActivePath: (path: string[]) => void;
// //   currentSection: string;
// //   updateCurrentHeading: (id: string) => void;
// //   updateActiveDataId: (id: number) => void;

// //   activeDataId: number;
// // }

// // const ScrollContext = createContext<ScrollContextProps>({
// //   currentSection: '',
// //   updateCurrentHeading: () => { },
// //   updateActiveDataId: () => { },
// //   activeDataId: 0,
// //   activePath: [],
// //   setActivePath: () => { },
// // });


// // export const useScrollContext = () => useContext(ScrollContext);

// // export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
// //   const [currentSection, setCurrentSection] = useState<string>('');
// //   const [activePath, setActivePath] = useState<string[]>([]);
// //   const [activeDataId, setActiveDataId] = useState<number>(1)
// //   // const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
// //   //   const visibleEntries = entries
// //   //     .filter(entry => entry.isIntersecting)
// //   //     .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

// //   //   if (visibleEntries.length > 0) {
// //   //     const topSectionId = visibleEntries[0].target.id;
// //   //     setCurrentSection(topSectionId);

// //   //   }
// //   // }, []);

// //   // useEffect(() => {
// //   //   const observer = new IntersectionObserver(handleIntersection, {
// //   //     rootMargin: '0px 0px -50% 0px',
// //   //     threshold: [0.5],
// //   //   });

// //   //   const headings = document.querySelectorAll('#mdx-content h2,#mdx-content h3, h4, h5, h6');
// //   //   headings.forEach(heading => observer.observe(heading));
// //   //   console.log([...headings])
// //   //   return () => observer.disconnect();
// //   // }, [handleIntersection]);
// //   const updateCurrentHeading = useCallback((headingId: string) => {
// //     setCurrentSection(headingId);
// //   }, []);

// //   const updateActiveDataId = useCallback((active: number) => {
// //     setActiveDataId(active);
// //   }, []);



// //   return (
// //     <ScrollContext.Provider value={{ currentSection, updateCurrentHeading, activePath, setActivePath, updateActiveDataId, activeDataId }}>
// //       {children}
// //     </ScrollContext.Provider>
// //   );
// // };

// // // "use client"




// // export const useTOCObserver = (tocItems: TOCItemType[], setActivePath: (path: string[]) => void, setActiveDataId: (id: number) => void, activeDataId: number) => {
// //   const observerRef = useRef<IntersectionObserver | null>(null);

// //   const buildPath = (id: string) => {
// //     const path = [];
// //     let currentItem = tocItems.find(item => item.id === id);
// //     while (currentItem) {
// //       path.unshift(currentItem.id);
// //       currentItem = tocItems.find(item => item.id === currentItem?.parentId);
// //     }
// //     return path;
// //   };

// //   const handleIntersection = (entries: IntersectionObserverEntry[]) => {
// //     const visibleSections = entries
// //       .filter(entry => entry.isIntersecting)
// //       .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

// //     if (visibleSections.length > 0) {
// //       const id = visibleSections[0].target.getAttribute('id');
// //       const dataId = visibleSections[0].target.getAttribute(
// //         'data-id'
// //       )
// //       if (id) {
// //         setActivePath(buildPath(id));
// //       }

// //       if (dataId && activeDataId !== parseInt(dataId)) {
// //         setActiveDataId(parseInt(dataId))
// //       }
// //     }
// //   };

// //   useEffect(() => {
// //     const observerOptions = {
// //       root: null,
// //       rootMargin: '0px 0px -60% 0px', // Adjust for better triggering near viewport center
// //       threshold: [0.1, 0.5, 0.9], // Trigger at various points of visibility
// //     };

// //     observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);
// //     tocItems.forEach(item => {
// //       const element = document.getElementById(item.id);
// //       if (element) observerRef.current!.observe(element);
// //     });

// //     return () => observerRef.current?.disconnect();
// //   }, [tocItems, setActivePath, setActiveDataId]);
// // };

// // // TOC.tsx




























// 'use client';


// // import { useEffect, useRef } from 'react';
// import { TOCItem } from '@/hooks/useTOC';
// // import { useScrollContext } from '@/context/ScrollContext';

// import React, {
//   createContext,
//   useContext,
//   useState,
//   useCallback,
//   useRef,
//   useEffect,
// } from 'react';

// interface ScrollContextProps {
//   activePath: string[];
//   setActivePath: (path: string[]) => void;
//   expandedSections: Set<string>;
//   toggleSection: (id: string) => void;
//   // toggleSection: (id: string) => void;
//   activeId: string;
// }

// const ScrollContext = createContext<ScrollContextProps>({
//   activePath: [],
//   setActivePath: () => { },
//   activeId: '',
//   // setActiveId: () => { },
//   expandedSections: new Set(),
//   toggleSection: () => { },
// });

// export const useScrollContext = () => useContext(ScrollContext);

// export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [activePath, setActivePath] = useState<string[]>([]);
//   const [activeId, setActiveId] = useState<string>('');
//   const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

//   const toggleSection = useCallback((id: string) => {
//     setExpandedSections(prev => {
//       const newExpanded = new Set(prev);
//       newExpanded.has(id) ? newExpanded.delete(id) : newExpanded.add(id);
//       return newExpanded;
//     });
//   }, []);

//   return (
//     <ScrollContext.Provider
//       value={{
//         activePath,
//         setActivePath,
//         expandedSections,
//         toggleSection,
//         activeId,
//       }}
//     >
//       {children}
//     </ScrollContext.Provider>
//   );
// };



// const useTOCObserver = (tocItems: TOCItem[]) => {
//   const { setActivePath, expandedSections, toggleSection, activeId } = useScrollContext();
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   const buildPath = (id: string) => {
//     const path: string[] = [];
//     let currentItem = tocItems.find(item => item.id === id);
//     while (currentItem) {
//       path.unshift(currentItem.id);
//       currentItem = tocItems.find(item => item.dataset.dataId === currentItem?.dataset?.dataId);
//     }
//     return path;
//   };

//   const handleIntersection = (entries: IntersectionObserverEntry[]) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const id = entry.target.getAttribute('id');
//         if (id) {
//           setActivePath(buildPath(id));
//           // toggleSection(id)
//           if (!expandedSections.has(id)) {
//             toggleSection(id);
//           }
//         }
//       }
//     });
//   };

//   useEffect(() => {
//     if (observerRef.current) observerRef.current.disconnect();

//     observerRef.current = new IntersectionObserver(handleIntersection, {
//       rootMargin: '0px 0px -50% 0px',
//       threshold: 0.5,
//     });

//     tocItems.forEach(item => {
//       const element = document.getElementById(item.id);
//       if (element) observerRef.current?.observe(element);
//     });

//     return () => observerRef.current?.disconnect();
//   }, [tocItems, setActivePath, expandedSections, toggleSection, activeId]);
// };

// export {
//   useTOCObserver
// }




















// "use client"

// import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
// import Link from 'next/link';
// import clsx from 'clsx';

// // TOC Item Interface
// interface TOCItemType {
//   id: string;
//   value: string;
//   depth: number;
//   parentId?: string;
//   children?: TOCItemType[];
//   dataset?: { id: number; }
// }

// // Context for Scroll and Active Path Tracking
// interface ScrollContextProps {
//   activePath: string[];
//   setActivePath: (path: string[]) => void;
//   activeDataId: number;
//   setActiveDataId: (dataId: number) => void;
// }

// const ScrollContext = createContext<ScrollContextProps>({
//   activePath: [],
//   setActivePath: () => { },
//   activeDataId: 1,
//   setActiveDataId: () => { }
// });

// export const useScrollContext = () => useContext(ScrollContext);

// // Scroll Provider to Manage Active TOC Path
// export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [activePath, setActivePath] = useState<string[]>([]);
//   const [activeDataId, setActiveDataId] = useState(1)

//   return (
//     <ScrollContext.Provider value={{ activePath, setActivePath, activeDataId, setActiveDataId }}>
//       {children}
//     </ScrollContext.Provider>
//   );
// };

// // Hook for Managing Intersection Observations of TOC Items
// const useTOCObserver = (tocItems: TOCItemType[], setActivePath: (path: string[]) => void, setActiveDataId: (id: number) => void) => {
//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px 0px -60% 0px',
//       threshold: [0.1, 0.5, 0.9],
//     };

//     const observer = new IntersectionObserver((entries) => {
//       const visibleSections = entries
//         .filter(entry => entry.isIntersecting)
//         .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

//       if (visibleSections.length > 0) {
//         const id = visibleSections[0].target.getAttribute('data-id');
//         if (id) {
//           const buildPath = (id: string) => {
//             const path = [];
//             let currentItem = tocItems.find(item => item.id === id);
//             setActiveDataId(id as unknown as number)
//             while (currentItem) {
//               path.unshift(currentItem.id);
//               currentItem = tocItems.find(item => item.id === currentItem?.parentId);
//             }
//             return path;
//           };

//           setActivePath(buildPath(id));
//         }
//       }
//     }, observerOptions);

//     tocItems.forEach((item, index) => {
//       const element = document.getElementById(item.id);
//       if (element) {
//         element.setAttribute('data-id', index.toString());
//         observer.observe(element);
//       }
//     });

//     return () => observer.disconnect();
//   }, [tocItems, setActivePath, setActiveDataId]);
// };

// // Recursive TOC Item Component
// const TOCItem: React.FC<{ dataId: number; item: TOCItemType; expandedSections: number[]; toggleSection: (index: number) => void }> = ({ item, expandedSections, toggleSection, dataId }) => {
//   const { activePath, activeDataId, setActiveDataId } = useScrollContext();
//   const index = parseInt(item.id.replace(/\D/g, ''), 10);
//   const isActive = activePath.includes(item.id) || dataId === activeDataId
//   const hasChildren = item.children && item.children.length > 0;
//   const isExpanded = expandedSections.includes(index) || activeDataId === dataId

//   useEffect(() => {
//     if (!isExpanded && isActive) {
//       toggleSection(dataId)
//     }
//   }, [isActive])

//   return (
//     <li className={`ml-${item.depth * 2}`} data-id={dataId}>
//       <div className={clsx('flex items-center justify-between', { 'font-bold': isActive })}>
//         <Link href={`#${item.id}`} scroll={true}>
//           {item.value}
//         </Link>
//         {hasChildren && (
//           <button onClick={() => toggleSection(index)}>
//             {isExpanded ? '[-]' : '[+]'}
//           </button>
//         )}
//       </div>
//       {isExpanded && hasChildren && (
//         <ul>
//           {item.children!.map((child) => (
//             <TOCItem key={child.id} dataId={child.dataset?.id as number} item={child} expandedSections={expandedSections} toggleSection={toggleSection} />
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// };

// // Main TOC Component Rendering TOC Items
// const TOC: React.FC<{ tocItems: TOCItemType[] }> = ({ tocItems }) => {
//   const [expandedSections, setExpandedSections] = useState<number[]>([]);
//   const { setActivePath, setActiveDataId } = useScrollContext();

//   const toggleSection = useCallback((index: number) => {
//     setExpandedSections(prev => {
//       const updated = prev.includes(index)
//         ? prev.filter(i => i !== index)
//         : [...prev, index];
//       return updated;
//     });
//   }, []);

//   useTOCObserver(tocItems, setActivePath, setActiveDataId);

//   return (
//     <nav>
//       <ul>
//         {tocItems.map((item, index) => (
//           <TOCItem key={item.id} dataId={index} item={item} expandedSections={expandedSections} toggleSection={toggleSection} />
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default TOC;

// ScrollContext.tsx

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

interface ScrollContextProps {
  activePath: string[];
  setActivePath: (path: string[]) => void;
  expandedSections: Set<string>;
  toggleSection: (id: string) => void;
}

const ScrollContext = createContext<ScrollContextProps>({
  activePath: [],
  setActivePath: () => { },
  expandedSections: new Set(),
  toggleSection: () => { },
});

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activePath, setActivePath] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = useCallback((id: string) => {
    setExpandedSections(prev => {
      const newExpanded = new Set(prev);
      newExpanded.has(id) ? newExpanded.delete(id) : newExpanded.add(id);
      return newExpanded;
    });
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        activePath,
        setActivePath,
        expandedSections,
        toggleSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

