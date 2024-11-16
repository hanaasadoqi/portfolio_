"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import DiagramModal from './DiagramModal';
import { IoReloadCircleSharp } from 'react-icons/io5';
import { BaseButton } from '@/components/shared';
import { useMermaid } from '@/context/MermaidContext';
import { useDarkMode } from '@/context/styling/DarkModeContext';

const Mermaid = ({ chart, id }: { chart: string; id?: number }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const uniqueId = `mermaid-chart-${id || Math.random().toString(36).substring(2, 9)}`;
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const { triggerRerender } = useMermaid();

  const renderMermaidChart = useCallback(
    (targetRef: React.RefObject<HTMLDivElement>, diagramContent: string) => {
      if (targetRef.current && diagramContent) {
        console.log('Attempting to render Mermaid chart...');
        try {
          triggerRerender(targetRef, diagramContent);
        } catch (err) {
          console.error('Error rendering Mermaid:', err);
          setError(true);
        }
      }
    },
    [triggerRerender]
  );

  // Render the chart initially
  useEffect(() => {
    if (chartRef.current) {
      renderMermaidChart(chartRef, chart);
    }
  }, [chart, renderMermaidChart]);

  // Render the chart when modal is opened
  useEffect(() => {
    if (showModal && modalRef.current) {
      renderMermaidChart(modalRef, chart);
    }
  }, [showModal, renderMermaidChart]);

  const handleReload = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setError(false);
    if (chartRef.current) {
      renderMermaidChart(chartRef, chart);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {error ? (
        <div className="mermaid-error">
          <p>Error rendering diagram. Please try reloading.</p>
          <BaseButton
            variant="icon"
            onClick={handleReload}
            className="hover:opacity-85 hover:text-white mt-2 z-40"
          >
            <IoReloadCircleSharp size={24} />
            <span className="ml-2">Reload</span>
          </BaseButton>
        </div>
      ) : (
        <div className="relative cursor-zoom-in hover:shadow-lg transition-transform duration-300 ease-in-out w-full">
          <div
            ref={chartRef}
            id={uniqueId}
            onClick={() => setShowModal(true)}
            className="mermaid flex justify-center items-center w-full h-full overflow-auto"
          />
          <BaseButton
            variant="icon"
            className="absolute top-0 right-0 opacity-15 hover:opacity-85 hover:text-white z-40"
            onClick={handleReload}
          >
            <IoReloadCircleSharp size={40} />
          </BaseButton>
        </div>
      )}
      {showModal && (
        <DiagramModal isOpen={showModal} onClose={handleCloseModal} modalRef={modalRef}>
          <div
            ref={modalRef}
            id={`${uniqueId}-modal`}
            className="mermaid flex justify-center items-center w-full h-full not-prose relative"
          />
        </DiagramModal>
      )}
    </>
  );
};

export default Mermaid;


























// "use client";

// import { useEffect, useRef, useState, useCallback } from 'react';
// import DiagramModal from './DiagramModal';
// import { IoReloadCircleSharp } from 'react-icons/io5';
// import { BaseButton } from '@/components/shared';
// import { useMermaid } from '@/context/MermaidContext';

// const Mermaid = ({ chart, id }: { chart: string; id?: number }) => {
//   const chartRef = useRef<HTMLDivElement>(null);
//   const modalRef = useRef<HTMLDivElement>(null);
//   const uniqueId = `mermaid-chart-${id || Math.random().toString(36).substring(2, 9)}`;
//   const [showModal, setShowModal] = useState(false);
//   const [error, setError] = useState(false);
//   const { mermaidLoading, triggerRerender } = useMermaid();

//   const renderMermaidChart = useCallback(
//     (targetRef: React.RefObject<HTMLDivElement>, diagramContent: string) => {
//       if (mermaidLoading) {
//         console.warn('Mermaid is still loading. Skipping rendering.');
//         return;
//       }

//       if (targetRef.current && diagramContent) {
//         console.log('Attempting to render Mermaid chart...');
//         try {
//           triggerRerender(targetRef, diagramContent);
//         } catch (err) {
//           console.error('Error rendering Mermaid:', err);
//           setError(true);
//         }
//       }
//     },
//     [triggerRerender, mermaidLoading]
//   );

//   // Render the chart initially
//   useEffect(() => {
//     if (chartRef.current && !mermaidLoading) {
//       renderMermaidChart(chartRef, chart);
//     }
//   }, [chart, renderMermaidChart, mermaidLoading]);

//   // Render the chart when modal is opened
//   useEffect(() => {
//     if (showModal && modalRef.current && !mermaidLoading) {
//       renderMermaidChart(modalRef, chart);
//     }
//   }, [showModal, renderMermaidChart, mermaidLoading]);

//   const handleReload = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     if (!mermaidLoading) {
//       setError(false);
//       renderMermaidChart(chartRef, chart);
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       {mermaidLoading && <p>Loading...</p>}
//       {error ? (
//         <div className="mermaid-error">
//           <p>Error rendering diagram. Please try reloading.</p>
//           <BaseButton
//             variant="icon"
//             onClick={handleReload}
//             className="hover:opacity-85 hover:text-white mt-2 z-40"
//           >
//             <IoReloadCircleSharp size={24} />
//             <span className="ml-2">Reload</span>
//           </BaseButton>
//         </div>
//       ) : (
//         <div className="relative cursor-zoom-in hover:shadow-lg transition-transform duration-300 ease-in-out w-full">
//           <div
//             ref={chartRef}
//             id={uniqueId}
//             onClick={() => setShowModal(true)}
//             className="mermaid flex justify-center items-center w-full h-full overflow-auto"
//           />
//           <BaseButton
//             variant="icon"
//             className="absolute top-0 right-0 opacity-15 hover:opacity-85 hover:text-white z-40"
//             onClick={handleReload}
//           >
//             <IoReloadCircleSharp size={40} />
//           </BaseButton>
//         </div>
//       )}
//       {showModal && (
//         <DiagramModal isOpen={showModal} onClose={handleCloseModal} modalRef={modalRef}>
//           <div
//             ref={modalRef}
//             id={`${uniqueId}-modal`}
//             className="mermaid flex justify-center items-center w-full h-full not-prose"
//           />
//         </DiagramModal>
//       )}
//     </>
//   );
// };

// export default Mermaid;





































// "use client";

// import { useEffect, useRef, useState, useCallback } from 'react';
// import DiagramModal from './DiagramModal';
// import { IoReloadCircleSharp } from 'react-icons/io5';
// import { BaseButton } from '@/components/shared';
// import { useMermaid } from '@/context/MermaidContext';

// const Mermaid = ({ chart, id }: { chart: string; id?: number }) => {
//   const chartRef = useRef<HTMLDivElement>(null);
//   const modalRef = useRef<HTMLDivElement>(null);
//   const uniqueId = `mermaid-chart-${id || Math.random().toString(36).substring(2, 9)}`;
//   const [showModal, setShowModal] = useState(false);
//   const [error, setError] = useState(false);
//   const { mermaidLoading, triggerRerender } = useMermaid();

//   const renderMermaidChart = useCallback(
//     (targetRef: React.RefObject<HTMLDivElement>, diagramContent: string) => {
//       if (mermaidLoading) {
//         console.warn('Mermaid is still loading. Skipping rendering.');
//         return;
//       }

//       if (targetRef.current && diagramContent) {
//         console.log('Attempting to render Mermaid chart...');
//         try {
//           triggerRerender(targetRef, diagramContent);
//         } catch (err) {
//           console.error('Error rendering Mermaid:', err);
//           setError(true);
//         }
//       }
//     },
//     [triggerRerender, mermaidLoading]
//   );

//   useEffect(() => {
//     if (chartRef.current && !mermaidLoading) {
//       renderMermaidChart(chartRef, chart);
//     }
//   }, [chart, renderMermaidChart, mermaidLoading]);

//   useEffect(() => {
//     if (showModal && modalRef.current && !mermaidLoading) {
//       renderMermaidChart(modalRef, chart);
//     }
//   }, [showModal, renderMermaidChart, mermaidLoading]);

//   const handleReload = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     if (!mermaidLoading) {
//       setError(false);
//       renderMermaidChart(chartRef, chart);
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       {mermaidLoading && <p>Loading...</p>}
//       {error ? (
//         <div className="mermaid-error">
//           <p>Error rendering diagram. Please try reloading.</p>
//           <BaseButton
//             variant="icon"
//             onClick={handleReload}
//             className="hover:opacity-85 hover:text-white mt-2 z-40"
//           >
//             <IoReloadCircleSharp size={24} />
//             <span className="ml-2">Reload</span>
//           </BaseButton>
//         </div>
//       ) : (
//         <div className="relative cursor-zoom-in hover:shadow-lg transition-transform duration-300 ease-in-out w-full">
//           <div
//             ref={chartRef}
//             id={uniqueId}
//             onClick={() => setShowModal(true)}
//             className="mermaid flex justify-center items-center w-full h-full overflow-auto"
//           />
//           <BaseButton
//             variant="icon"
//             className="absolute top-0 right-0 opacity-15 hover:opacity-85 hover:text-white z-40"
//             onClick={handleReload}
//           >
//             <IoReloadCircleSharp size={40} />
//           </BaseButton>
//         </div>
//       )}
//       {showModal && (
//         <DiagramModal isOpen={showModal} onClose={handleCloseModal} modalRef={modalRef}>
//           <div
//             ref={modalRef}
//             id={`${uniqueId}-modal`}
//             className="mermaid flex justify-center items-center w-full h-full not-prose"
//           />
//         </DiagramModal>
//       )}
//     </>
//   );
// };

// export default Mermaid;
























// "use client";

// import { useEffect, useRef, useState, useCallback } from 'react';
// import DiagramModal from './DiagramModal';
// import { IoReloadCircleSharp } from 'react-icons/io5';
// import { BaseButton } from '@/components/shared';
// import { useMermaid } from '@/context/MermaidContext';

// const Mermaid = ({ chart, id }: { chart: string; id?: number }) => {
//   const chartRef = useRef<HTMLDivElement>(null);
//   const modalRef = useRef<HTMLDivElement>(null);
//   const uniqueId = `mermaid-chart-${id || Math.random().toString(36).substring(2, 9)}`;
//   const [showModal, setShowModal] = useState(false);
//   const [error, setError] = useState(false);
//   const { mermaidLoading, triggerRerender } = useMermaid();

//   const renderMermaidChart = useCallback(
//     (targetRef: React.RefObject<HTMLDivElement>, diagramContent: string) => {
//       if (mermaidLoading) {
//         console.warn('Mermaid is still loading. Skipping rendering.');
//         return;
//       }

//       if (targetRef.current && diagramContent) {
//         try {
//           triggerRerender(targetRef, diagramContent);
//         } catch (err) {
//           console.error('Error rendering Mermaid:', err);
//           setError(true);
//         }
//       }
//     },
//     [triggerRerender, mermaidLoading]
//   );

//   useEffect(() => {
//     if (chartRef.current && !mermaidLoading) {
//       renderMermaidChart(chartRef, chart);
//     }
//   }, [chart, renderMermaidChart, mermaidLoading]);

//   useEffect(() => {
//     if (showModal && modalRef.current && !mermaidLoading) {
//       renderMermaidChart(modalRef, chart);
//     }
//   }, [showModal, renderMermaidChart, mermaidLoading]);

//   const handleReload = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     if (!mermaidLoading) {
//       setError(false);
//       renderMermaidChart(chartRef, chart);
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       {mermaidLoading && <p>Loading...</p>}
//       {error ? (
//         <div className="mermaid-error">
//           <p>Error rendering diagram. Please try reloading.</p>
//           <BaseButton
//             variant="icon"
//             onClick={handleReload}
//             className="hover:opacity-85 hover:text-white mt-2 z-40"
//           >
//             <IoReloadCircleSharp size={24} />
//             <span className="ml-2">Reload</span>
//           </BaseButton>
//         </div>
//       ) : (
//         <div className="relative cursor-zoom-in hover:shadow-lg transition-transform duration-300 ease-in-out w-full">
//           <div
//             ref={chartRef}
//             id={uniqueId}
//             onClick={() => setShowModal(true)}
//             className="mermaid flex justify-center items-center w-full h-full overflow-auto"
//           />
//           <BaseButton
//             variant="icon"
//             className="absolute top-0 right-0 opacity-15 hover:opacity-85 hover:text-white z-40"
//             onClick={handleReload}
//           >
//             <IoReloadCircleSharp size={40} />
//           </BaseButton>
//         </div>
//       )}
//       {showModal && (
//         <DiagramModal isOpen={showModal} onClose={handleCloseModal} modalRef={modalRef}>
//           <div
//             ref={modalRef}
//             id={`${uniqueId}-modal`}
//             className="mermaid flex justify-center items-center w-full h-full not-prose"
//           />
//         </DiagramModal>
//       )}
//     </>
//   );
// };

// export default Mermaid;



















// "use client";

// import { useEffect, useRef, useState, useCallback } from 'react';
// import DiagramModal from './DiagramModal';
// import { IoReloadCircleSharp } from 'react-icons/io5';
// import { BaseButton } from '@/components/shared';
// import { useDarkMode } from '@/context/styling/DarkModeContext';
// import { useMermaid } from '@/context/MermaidContext';

// const Mermaid = ({ chart, id }: { chart: string; id?: number }) => {
//   const chartRef = useRef<HTMLDivElement>(null);
//   const modalRef = useRef<HTMLDivElement>(null);
//   const uniqueId = `mermaid-chart-${id || Math.random().toString(36).substring(2, 9)}`;
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const { isDarkMode } = useDarkMode();
//   const { mermaidLoading, mermaid } = useMermaid();

//   // Guard clause to ensure all dependencies are loaded before rendering
//   const isReadyToRender = useCallback(() => {
//     return (
//       !loading &&
//       !mermaidLoading &&
//       chart &&
//       mermaid &&
//       typeof mermaid.run === 'function' &&
//       chartRef.current
//     );
//   }, [loading, mermaidLoading, chart, mermaid]);

//   const renderMermaidChart = useCallback(
//     (targetRef: React.RefObject<HTMLDivElement>) => {
//       if (!isReadyToRender() || !targetRef.current) {
//         return;
//       }

//       setLoading(true);
//       setError(false);

//       try {
//         const theme = `%%{ init: { 
//           'theme': 'base',
//           'themeVariables': {
//             'primaryColor': '${isDarkMode ? '#1f1f1f' : '#f5f5f5'}',
//             'primaryBorderColor': '${isDarkMode ? '#4b4b4b' : '#bfbfbf'}',
//             'lineColor': '${isDarkMode ? '#a3a3a3' : '#4d4d4d'}',
//             'mainBkg': '${isDarkMode ? '#1a1a1a' : '#f0f0f0'}',
//             'labelTextColor': '${isDarkMode ? '#ffffff' : '#333333'}',
//             'noteTextColor': '${isDarkMode ? '#ffffff' : '#333333'}',
//             'primaryTextColor': '${isDarkMode ? '#ffffff' : '#333333'}'
//           }
//         }}%%`;

//         const completeChart = theme + chart.trim();
//         targetRef.current.innerHTML = completeChart;

//         // Use mermaid.run with an additional readiness check
//         if (typeof mermaid.run === 'function') {
//           mermaid
//             .run({ nodes: [targetRef.current] })
//             .then(() => {
//               setLoading(false);
//             })
//             .catch((err) => {
//               console.error('Error rendering Mermaid diagram:', err);
//               setLoading(false);
//               setError(true);
//             });
//         } else {
//           console.error('Mermaid run function is not ready.');
//           setLoading(false);
//           setError(true);
//         }
//       } catch (err) {
//         console.error('Error rendering Mermaid diagram:', err);
//         setLoading(false);
//         setError(true);
//       }
//     },
//     [mermaid, isDarkMode, chart, isReadyToRender]
//   );

//   // Trigger render on initial load if ready
//   useEffect(() => {
//     if (isReadyToRender()) {
//       renderMermaidChart(chartRef);
//     }
//   }, [chart, renderMermaidChart, isReadyToRender]);

//   // Render in modal if modal is opened and diagram is ready to be rendered
//   useEffect(() => {
//     if (showModal && isReadyToRender() && modalRef.current) {
//       renderMermaidChart(modalRef);
//     }
//   }, [showModal, renderMermaidChart, isReadyToRender]);

//   const handleReload = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(false);
//     if (isReadyToRender()) {
//       renderMermaidChart(chartRef);
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       {(loading || mermaidLoading) && <p>Loading...</p>}
//       {error ? (
//         <div className="mermaid-error">
//           <p>Error rendering diagram. Please try reloading.</p>
//           <BaseButton
//             variant="icon"
//             onClick={handleReload}
//             className="hover:opacity-85 hover:text-white mt-2 z-40"
//           >
//             <IoReloadCircleSharp size={24} />
//             <span className="ml-2">Reload</span>
//           </BaseButton>
//         </div>
//       ) : (
//         <div className="relative cursor-zoom-in hover:shadow-lg transition-transform duration-300 ease-in-out w-full">
//           <div
//             ref={chartRef}
//             id={uniqueId}
//             onClick={() => setShowModal(true)}
//             className="mermaid flex justify-center items-center w-full h-full overflow-auto"
//           />
//           <BaseButton
//             variant="icon"
//             className="absolute top-0 right-0 opacity-15 hover:opacity-85 hover:text-white z-40"
//             onClick={handleReload}
//           >
//             <IoReloadCircleSharp size={40} />
//           </BaseButton>
//         </div>
//       )}
//       {showModal && (
//         <DiagramModal isOpen={showModal} onClose={handleCloseModal} modalRef={modalRef}>
//           <div
//             ref={modalRef}
//             id={`${uniqueId}-modal`}
//             className="mermaid flex justify-center items-center w-full h-full not-prose"
//           />
//         </DiagramModal>
//       )}
//     </>
//   );
// };

// export default Mermaid;











// "use client";

// import { useEffect, useRef, useState, useCallback } from 'react';
// import DiagramModal from './DiagramModal';
// import { IoReloadCircleSharp } from 'react-icons/io5';
// import { BaseButton } from '@/components/shared';
// import { useDarkMode } from '@/context/styling/DarkModeContext';
// import { useMermaid } from '@/context/MermaidContext';

// const Mermaid = ({ chart, id }: { chart: string; id?: number }) => {
//   const chartRef = useRef<HTMLDivElement>(null);
//   const modalRef = useRef<HTMLDivElement>(null);
//   const uniqueId = `mermaid-chart-${id || Math.random().toString(36).substring(2, 9)}`;
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const { isDarkMode } = useDarkMode();
//   const { mermaidLoading, mermaid } = useMermaid();

//   // Guard clause to ensure all dependencies are loaded before rendering
//   const isReadyToRender = useCallback(() => {
//     return !loading && !mermaidLoading && chart && mermaid && chartRef.current;
//   }, [loading, mermaidLoading, chart, mermaid, chartRef]);

//   const renderMermaidChart = useCallback(
//     (targetRef: React.RefObject<HTMLDivElement>) => {
//       if (isReadyToRender() && targetRef.current) {
//         setLoading(true);
//         setError(false);

//         try {
//           const theme = `%%{ init: { 
//             'theme': 'base',
//             'themeVariables': {
//               'primaryColor': '${isDarkMode ? '#1f1f1f' : '#f5f5f5'}',
//               'primaryBorderColor': '${isDarkMode ? '#4b4b4b' : '#bfbfbf'}',
//               'lineColor': '${isDarkMode ? '#a3a3a3' : '#4d4d4d'}',
//               'mainBkg': '${isDarkMode ? '#1a1a1a' : '#f0f0f0'}',
//               'labelTextColor': '${isDarkMode ? '#ffffff' : '#333333'}',
//               'noteTextColor': '${isDarkMode ? '#ffffff' : '#333333'}',
//               'primaryTextColor': '${isDarkMode ? '#ffffff' : '#333333'}'
//             }
//           }}%%`;

//           const completeChart = theme + chart.trim();
//           targetRef.current.innerHTML = completeChart;

//           mermaid
//             .run({ nodes: [targetRef.current] })
//             .then(() => {
//               setLoading(false);
//             })
//             .catch((err: any) => {
//               console.error('Error rendering Mermaid diagram:', err);
//               setLoading(false);
//               setError(true);
//             });
//         } catch (err) {
//           console.error('Error rendering Mermaid diagram:', err);
//           setLoading(false);
//           setError(true);
//         }
//       }
//     },
//     [mermaid, isDarkMode, chart, isReadyToRender]
//   );

//   // Trigger render on initial load if ready
//   useEffect(() => {
//     if (isReadyToRender()) {
//       renderMermaidChart(chartRef);
//     }
//   }, [chart, renderMermaidChart, isReadyToRender]);

//   // Render in modal if modal is opened and diagram is ready to be rendered
//   useEffect(() => {
//     if (showModal && isReadyToRender() && modalRef.current) {
//       renderMermaidChart(modalRef);
//     }
//   }, [showModal, renderMermaidChart, isReadyToRender]);

//   const handleReload = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(false);
//     if (isReadyToRender()) {
//       renderMermaidChart(chartRef);
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       {(loading || mermaidLoading) && <p>Loading...</p>}
//       {error ? (
//         <div className="mermaid-error">
//           <p>Error rendering diagram. Please try reloading.</p>
//           <BaseButton
//             variant="icon"
//             onClick={handleReload}
//             className="hover:opacity-85 hover:text-white mt-2 z-40"
//           >
//             <IoReloadCircleSharp size={24} />
//             <span className="ml-2">Reload</span>
//           </BaseButton>
//         </div>
//       ) : (
//         <div className="relative cursor-zoom-in hover:shadow-lg transition-transform duration-300 ease-in-out w-full">
//           <div
//             ref={chartRef}
//             id={uniqueId}
//             onClick={() => setShowModal(true)}
//             className="mermaid flex justify-center items-center w-full h-full overflow-auto"
//           />
//           <BaseButton
//             variant="icon"
//             className="absolute top-0 right-0 opacity-15 hover:opacity-85 hover:text-white z-40"
//             onClick={handleReload}
//           >
//             <IoReloadCircleSharp size={40} />
//           </BaseButton>
//         </div>
//       )}
//       {showModal && (
//         <DiagramModal isOpen={showModal} onClose={handleCloseModal} modalRef={modalRef}>
//           <div
//             ref={modalRef}
//             id={`${uniqueId}-modal`}
//             className="mermaid flex justify-center items-center w-full h-full not-prose"
//           />
//         </DiagramModal>
//       )}
//     </>
//   );
// };

// export default Mermaid;




























// "use client";

// import { useEffect, useRef, useState, useCallback } from 'react';
// import DiagramModal from './DiagramModal';
// import { IoReloadCircleSharp } from 'react-icons/io5';
// import { BaseButton } from '@/components/shared';
// import { useDarkMode } from '@/context/styling/DarkModeContext';
// import { useMermaid } from '@/context/MermaidContext';

// const Mermaid = ({ chart, id }: { chart: string; id?: number }) => {
//   const chartRef = useRef<HTMLDivElement>(null);
//   const modalRef = useRef<HTMLDivElement>(null);
//   const uniqueId = `mermaid-chart-${id || Math.random().toString(36).substring(2, 9)}`;
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const { isDarkMode } = useDarkMode();
//   const { mermaidLoading, mermaid } = useMermaid();

//   const renderMermaidChart = useCallback(
//     (targetRef: React.RefObject<HTMLDivElement>) => {
//       if (targetRef.current && !loading && !mermaidLoading) {
//         setLoading(true);
//         setError(false);

//         const theme = `%%{ init: { 
//           'theme': 'base',
//           'themeVariables': {
//             'primaryColor': '${isDarkMode ? '#1f1f1f' : '#f5f5f5'}',
//             'primaryBorderColor': '${isDarkMode ? '#4b4b4b' : '#bfbfbf'}',
//             'lineColor': '${isDarkMode ? '#a3a3a3' : '#4d4d4d'}',
//             'mainBkg': '${isDarkMode ? '#1a1a1a' : '#f0f0f0'}',
//             'labelTextColor': '${isDarkMode ? '#ffffff' : '#333333'}',
//             'noteTextColor': '${isDarkMode ? '#ffffff' : '#333333'}',
//             'primaryTextColor': '${isDarkMode ? '#ffffff' : '#333333'}'
//           }
//         }}%%`;

//         const completeChart = theme + chart.trim();

//         targetRef.current.innerHTML = completeChart;

//         if (targetRef.current) {
//           // setTimeout(() => {
//           mermaid
//             .run({ nodes: [targetRef.current] })
//             .then(() => {
//               setLoading(false);
//             })
//             .catch((err: any) => {
//               console.error('Error rendering Mermaid diagram:', err);
//               setLoading(false);
//               setError(true);
//             });
//           // }, 100)
//         }
//       }
//     },
//     [mermaid, isDarkMode, loading, mermaidLoading]
//   );

//   useEffect(() => {
//     if (chartRef.current) {
//       // setTimeout(() => {
//       renderMermaidChart(chartRef);
//       // }, 100)
//     }
//   }, [chart, renderMermaidChart]);

//   useEffect(() => {
//     if (showModal && modalRef.current) {
//       renderMermaidChart(modalRef);
//     }
//   }, [showModal, renderMermaidChart]);

//   const handleReload = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(false);
//     renderMermaidChart(chartRef);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       {(loading || mermaidLoading) && <p>Loading...</p>}
//       {error ? (
//         <div className="mermaid-error">
//           <p>Error rendering diagram. Please try reloading.</p>
//           <BaseButton
//             variant="icon"
//             onClick={handleReload}
//             className="hover:opacity-85 hover:text-white mt-2 z-40"
//           >
//             <IoReloadCircleSharp size={24} />
//             <span className="ml-2">Reload</span>
//           </BaseButton>
//         </div>
//       ) : (
//         <div className="relative cursor-zoom-in hover:shadow-lg transition-transform duration-300 ease-in-out w-full">
//           <div
//             ref={chartRef}
//             id={uniqueId}
//             onClick={() => setShowModal(true)}
//             className="mermaid flex justify-center items-center w-full h-full overflow-auto"
//           />
//           <BaseButton
//             variant="icon"
//             className="absolute top-0 right-0 opacity-15 hover:opacity-85 hover:text-white z-40"
//             onClick={handleReload}
//           >
//             <IoReloadCircleSharp size={40} />
//           </BaseButton>
//         </div>
//       )}
//       {showModal && (
//         <DiagramModal isOpen={showModal} onClose={handleCloseModal} modalRef={modalRef}>
//           <div
//             ref={modalRef}
//             id={`${uniqueId}-modal`}
//             className="mermaid flex justify-center items-center w-full h-full not-prose"
//           />
//         </DiagramModal>
//       )}
//     </>
//   );
// };

// export default Mermaid;











































// "use client";

// import { useEffect, useRef, useState, useCallback } from 'react';
// import DiagramModal from './DiagramModal';
// import { IoReloadCircleSharp } from 'react-icons/io5';
// import { BaseButton } from '@/components/shared';
// import { useDarkMode } from '@/context/styling/DarkModeContext';
// import { useMermaid } from '@/context/MermaidContext';

// const Mermaid = ({ chart, id, reloadContent }: { chart: string; id?: number; reloadContent: () => void; }) => {
//   const chartRef = useRef<HTMLDivElement>(null);
//   const modalRef = useRef<HTMLDivElement>(null);
//   const uniqueId = `mermaid-chart-${id || Math.random().toString(36).substring(2, 9)}`;
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [svgContent, setSvgContent] = useState<string | null>(null);
//   const { isDarkMode } = useDarkMode();
//   const { mermaidLoading, mermaid, triggerRerender } = useMermaid();

//   const renderMermaidChart = useCallback((targetRef: React.RefObject<HTMLDivElement>, chartContent: string) => {
//     if (targetRef.current && !loading && !mermaidLoading) {
//       setLoading(true)
//       setError(false)
//       try {
//         const theme = `%%{ init: { 
//           'theme': 'base',
//           'themeVariables': {
//             'primaryColor': '${isDarkMode ? '#1f1f1f' : '#f5f5f5'}',
//             'primaryBorderColor': '${isDarkMode ? '#4b4b4b' : '#bfbfbf'}',
//             'lineColor': '${isDarkMode ? '#a3a3a3' : '#4d4d4d'}',
//             'mainBkg': '${isDarkMode ? '#1a1a1a' : '#f0f0f0'}',
//             'labelTextColor': '${isDarkMode ? '#ffffff' : '#333333'}',
//             'noteTextColor': '${isDarkMode ? '#ffffff' : '#333333'}',
//             'primaryTextColor': '${isDarkMode ? '#ffffff' : '#333333'}'
//           }
//         }}%%`;


//         if (svgContent) {
//           if (targetRef?.current) {
//             targetRef.current.innerHTML = svgContent
//           } else {
//             targetRef.current.innerHTML = '';
//           }
//         }

//         const completeChart = theme + chartContent.trim();
//         targetRef.current.innerHTML = completeChart;

//         setTimeout(() => {
//           if (targetRef.current) {
//             mermaid.run({ nodes: [targetRef.current] }).then(() => {
//               const svgElement = targetRef.current?.firstChild
//               if (svgElement) {
//                 setSvgContent(svgElement as unknown as string);
//               }
//             });
//           }
//         }, 100);
//         const observer = new MutationObserver((mutations) => {
//           for (const mutation of mutations) {
//             if (mutation.type === 'childList' && targetRef.current?.firstChild?.nodeName === 'svg') {
//               setLoading(false);
//               observer.disconnect();
//             }
//           }
//         });

//         observer.observe(targetRef.current, { childList: true });

//         setTimeout(() => {
//           if (loading) {
//             setLoading(false);
//             setError(true);
//             observer.disconnect();
//           }
//         }, 5000);
//       } catch (err) {
//         console.error('Error rendering Mermaid diagram:', err);
//         setLoading(false);
//         setError(true);
//       }
//     } else {
//       console.error('Target ref is null, cannot render Mermaid diagram');
//     }
//   }, [mermaid, isDarkMode, loading, mermaidLoading, svgContent]);

//   useEffect(() => {
//     if (chartRef.current && !svgContent) {
//       renderMermaidChart(chartRef, chart);
//     }
//   }, [chart, renderMermaidChart, svgContent]);

//   useEffect(() => {
//     const targetRef = showModal && modalRef.current ? modalRef : chartRef;
//     setLoading(true)
//     if (targetRef.current && !svgContent) {
//       try {
//         renderMermaidChart(targetRef, chart);
//       } catch (err) {
//         setLoading(false)
//         setError(true)
//         console.error(`Error initializing ref: ${err}`)
//       } finally {
//         setLoading(false)
//       }
//     }
//   }, [chart, showModal, renderMermaidChart, svgContent]);

//   const handleReload = (event?: React.MouseEvent<HTMLButtonElement>, targetRef?: React.RefObject<HTMLDivElement>) => {
//     event?.preventDefault()
//     setLoading(true)
//     try {
//       triggerRerender(targetRef)
//     } catch (err) {
//       setLoading(false)
//       setError(true)
//       console.error(`Error reloading chart: ${err}`)
//     } finally {
//       setLoading(false)
//     }
//   };

//   const handleCloseModal = () => {
//     setLoading(true)
//     try {
//       triggerRerender(chartRef)
//       setShowModal(false)
//     } catch (err) {
//       setLoading(false)
//       setError(true)
//       console.error(`Error reloading after modal: ${err}`)
//     } finally {
//       setLoading(false)
//     }

//   }

//   useEffect(() => {
//     if (showModal && modalRef.current) {
//       setLoading(true)
//       try {
//         // renderMermaidChart(modalRef, chart)
//         triggerRerender(modalRef)
//         setShowModal(true)
//       } catch (err) {
//         setLoading(false)
//         setError(true)
//         console.error(`Error rendering chart in modal: ${err}`)
//       } finally {
//         setLoading(false)
//       }
//     }

//   }, [showModal, renderMermaidChart, chart]);

//   return (
//     <>
//       {(loading || mermaidLoading) ?? (
//         <p>Loading...</p>
//       )}
//       {error ? (
//         <div className="mermaid-error">
//           <p>Error rendering diagram. Please try reloading.</p>
//           <BaseButton
//             variant="icon"
//             onClick={(e) => handleReload(e, chartRef)}
//             className="hover:opacity-85 hover:text-white mt-2 z-40"
//           >
//             <IoReloadCircleSharp size={24} />
//             <span className="ml-2">Reload</span>
//           </BaseButton>
//         </div>
//       ) : (
//         <div className="relative cursor-zoom-in hover:shadow-lg transition-transform duration-300 ease-in-out w-full">
//           <div
//             ref={chartRef}
//             id={uniqueId}
//             onClick={() => setShowModal(true)}
//             className="mermaid flex justify-center items-center w-full h-full overflow-auto"
//           />
//           <BaseButton
//             variant="icon"
//             className="absolute top-0 right-0 opacity-15 hover:opacity-85 hover:text-white z-40"
//             onClick={(e) => handleReload(e, modalRef)}
//           >
//             <IoReloadCircleSharp size={40} />
//           </BaseButton>
//         </div>
//       )}
//       {showModal && (
//         <DiagramModal isOpen={showModal} onClose={handleCloseModal} modalRef={modalRef}>
//           <div
//             ref={modalRef}
//             id={`${uniqueId}-modal`}
//             className="mermaid flex justify-center items-center w-full h-full not-prose"
//           />
//         </DiagramModal>
//       )}
//     </>
//   );
// };

// export default Mermaid;







































// "use client";

// import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
// import { getMermaidInstance } from './mermaidInstance';
// import { useDarkMode } from '@/context/styling/DarkModeContext';

// interface MermaidContextProps {
//   mermaid: any;
//   triggerRerender: (targetRef?: React.RefObject<HTMLDivElement>) => void;
//   renderTrigger: number;
//   mermaidLoading: boolean;
// }

// const MermaidContext = createContext<MermaidContextProps | undefined>(undefined);

// export const MermaidProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { isDarkMode } = useDarkMode();
//   const [renderTrigger, setRenderTrigger] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const mermaid = useMemo(() => {
//     const instance = getMermaidInstance();
//     instance.initialize({
//       startOnLoad: false,
//       securityLevel: 'loose',
//       theme: 'base',
//       darkMode: isDarkMode,
//       layout: 'elk',
//       elk: {
//         mergeEdges: true,
//         nodePlacementStrategy: 'LINEAR_SEGMENTS',
//       },
//       themeVariables: {
//         primaryColor: isDarkMode ? '#1f1f1f' : '#f5f5f5',
//         primaryBorderColor: isDarkMode ? '#4b4b4b' : '#bfbfbf',
//         lineColor: isDarkMode ? '#a3a3a3' : '#4d4d4d',
//         mainBkg: isDarkMode ? '#1a1a1a' : '#f0f0f0',
//       },
//     });

//     instance.registerIconPacks([
//       {
//         name: 'mdi',
//         loader: () => import('./mdi.json').then((mod) => mod)
//       },
//       {
//         name: 'carbon',
//         loader: () => import('./carbon.json').then((mod) => mod)
//       }
//     ])
//     return instance;
//   }, [isDarkMode]);

//   const triggerRerender = useCallback(async (targetRef?: React.RefObject<HTMLDivElement>) => {
//     if (targetRef?.current) {
//       try {
//         setLoading(true);
//       } catch (err) {
//         setLoading(false)
//         console.error('Error reloading Mermaid:', err);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setRenderTrigger(prev => prev + 1);
//     }
//   }, [mermaid, targetRef]);

//   return (
//     <MermaidContext.Provider value={{ mermaid, triggerRerender, renderTrigger, mermaidLoading: loading }}>
//       {children}
//     </MermaidContext.Provider>
//   );
// };

// export const useMermaid = (): MermaidContextProps => {
//   const context = useContext(MermaidContext);
//   if (!context) {
//     throw new Error('useMermaid must be used within a MermaidProvider');
//   }
//   return context;
// };
