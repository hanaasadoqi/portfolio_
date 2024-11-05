"use client";

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const MermaidRenderer = ({ children }: { children: React.ReactNode }) => {
  const mermaidInitialized = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!mermaidInitialized.current) {

        try {
          // Register necessary icon packs for architecture diagrams
          mermaid.registerIconPacks([
            {
              name: 'logos',
              loader: () =>
                import('@iconify-json/logos').then((module) => module.icons),
            },
            {
              name: 'icons',
              loader: () =>
                import('@iconify-json/gridicons').then((module) => module.icons),
            },
            {
              name: 'mdi',
              loader: () =>
                import('@iconify-json/mdi').then((module) => module.icons),
            },
            {
              name: 'carbon',
              loader: () =>
                import('@iconify-json/carbon').then((module) => module.icons),
            },
          ]);

          // // Initialize Mermaid configuration
          mermaid.initialize({
            startOnLoad: false, // Disable automatic rendering to control rendering manually
            securityLevel: 'loose',
            theme: 'base',
            layout: 'elk',
            elk: {
              mergeEdges: true,
              nodePlacementStrategy: 'LINEAR_SEGMENTS'
            },
            themeVariables: {
              fontSize: '16px',
              primaryBorderColor: '#00FFFF',
              background: '#1e1e1e',          // Background color for dark mode
              primaryColor: '#2d2d2d',        // Primary node background color
              primaryTextColor: '#ffffff',    // Primary node text color
              secondaryColor: '#3a3a3a',      // Secondary node background color
              tertiaryColor: '#4b4b4b',       // Tertiary node background color
              textColor: '#c5c6c7',           // General text color
              lineColor: '#4b4b4b',           // Line color for edges
              edgeLabelBackground: '#333333', // Background for labels on edges
              clusterBkg: '#262626',          // Cluster background color
              clusterBorder: '#00FFFF',       // Cluster border color
              titleColor: '#ffffff',          // Color for diagram title text
              fontFamily: 'inherit',
            },
            flowchart: {
              htmlLabels: true,
              useMaxWidth: true,
              diagramPadding: 50,
              curve: 'basis',
              titleTopMargin: 40
            },
          });

          mermaid.contentLoaded()
          mermaidInitialized.current = true;
        } catch (error) {
          console.error('Error initializing Mermaid:', error);
        }
      }

      // Render Mermaid after ensuring that the content is loaded
      const timer = setTimeout(() => {
        try {
          // Select elements with the `mermaid` class and run Mermaid
          mermaid.run();
        } catch (error) {
          console.error('Error rendering Mermaid diagram:', error);
        }
      }, 300); // Delay to ensure the DOM is fully updated

      // Cleanup timer on unmount
      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <div>
      {children}
    </div>
  );
};


export default MermaidRenderer
