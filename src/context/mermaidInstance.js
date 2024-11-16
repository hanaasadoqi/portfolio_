import mermaid from 'mermaid';

let isInitialized = false;

export function getMermaidInstance(isDarkMode) {
  if (!isInitialized && typeof window !== 'undefined') {
    console.log('Initializing Mermaid...');
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: 'base',
      darkMode: isDarkMode,
      // themeVariables: {
      //   primaryColor: isDarkMode ? '#1f2937' : '#f5f5f5',
      //   primaryBorderColor: isDarkMode ? '#4b4b4b' : '#bfbfbf',
      //   lineColor: isDarkMode ? '#9ca3af' : '#4d4d4d',
      //   mainBkg: isDarkMode ? '#333' : '#f0f0f0',
      // },
      elk: {
        mergeEdges: true,
        nodePlacementStrategy: 'LINEAR_SEGMENTS',
      },
      // themeVariables: {
      //   primaryColor: isDarkMode ? '#1f1f1f' : '#f5f5f5',
      //   primaryBorderColor: isDarkMode ? '#4b4b4b' : '#bfbfbf',
      //   lineColor: isDarkMode ? '#a3a3a3' : '#4d4d4d',
      //   mainBkg: isDarkMode ? '#1a1a1a' : '#f0f0f0',
      // },
      flowchart: {
        htmlLabels: true,
        useMaxWidth: true,
        diagramPadding: 50,
        curve: 'basis',
        titleTopMargin: 40,
      },
    });
    isInitialized = true;
  }
  return mermaid;
}

export function renderMermaidDiagram(targetElement, diagramContent) {
  if (targetElement) {
    try {
      console.log('Rendering Mermaid diagram...');

      // If a diagram is already present, avoid re-rendering
      if (targetElement.querySelector('svg')) {
        console.log('Diagram already rendered, skipping re-render');
        return;
      }

      // Set the new diagram content
      targetElement.innerHTML = diagramContent;

      // Run Mermaid on the specific container
      mermaid.run({ nodes: [targetElement] });
      console.log('Mermaid diagram rendered successfully.');
    } catch (error) {
      console.error('Mermaid diagram rendering failed:', error);
    }
  }
}




























// import mermaid from 'mermaid';

// let isInitialized = false;

// export function getMermaidInstance(isDarkMode) {
//   if (!isInitialized && typeof window !== 'undefined') {
//     console.log('Initializing Mermaid...');
//     mermaid.initialize({
//       startOnLoad: false,
//       securityLevel: 'loose',
//       theme: 'base',
//       darkMode: isDarkMode,
//       themeVariables: {
//         primaryColor: isDarkMode ? '#1f2937' : '#f5f5f5',
//         primaryBorderColor: isDarkMode ? '#4b4b4b' : '#bfbfbf',
//         lineColor: isDarkMode ? '#9ca3af' : '#4d4d4d',
//         mainBkg: isDarkMode ? '#333' : '#f0f0f0',
//       },
//       flowchart: {
//         htmlLabels: true,
//         useMaxWidth: true,
//         diagramPadding: 50,
//         curve: 'basis',
//         titleTopMargin: 40,
//       },
//     });
//     isInitialized = true;
//   }
//   return mermaid;
// }

// export async function renderMermaidDiagram(targetElement, diagramContent) {
//   if (targetElement) {
//     try {
//       console.log('Rendering Mermaid diagram...');

//       // Clear existing content to avoid rendering issues
//       targetElement.innerHTML = '';

//       // Set the new diagram content
//       targetElement.innerHTML = diagramContent;

//       // Run Mermaid on the specific container
//       await mermaid.run({ nodes: [targetElement] });
//       console.log('Mermaid diagram rendered successfully.');
//     } catch (error) {
//       console.error('Mermaid diagram rendering failed:', error);
//     }
//   }
// }































// import mermaid from 'mermaid';

// let isInitialized = false;

// export function getMermaidInstance(isDarkMode) {
//   if (!isInitialized && typeof window !== 'undefined') {
//     console.log('Initializing Mermaid...');
//     mermaid.initialize({
//       startOnLoad: false,
//       securityLevel: 'loose',
//       theme: 'base',
//       darkMode: isDarkMode,
//       themeVariables: {
//         primaryColor: isDarkMode ? '#1f2937' : '#f5f5f5',
//         primaryBorderColor: isDarkMode ? '#4b4b4b' : '#bfbfbf',
//         lineColor: isDarkMode ? '#9ca3af' : '#4d4d4d',
//         mainBkg: isDarkMode ? '#333' : '#f0f0f0',
//       },
//       flowchart: {
//         htmlLabels: true,
//         useMaxWidth: true,
//         diagramPadding: 50,
//         curve: 'basis',
//         titleTopMargin: 40,
//       },
//     });
//     isInitialized = true;
//   }
//   return mermaid;
// }

// export async function renderMermaidDiagram(targetElement, diagramContent) {
//   if (targetElement) {
//     try {
//       console.log('Rendering Mermaid diagram...');
//       // Set the innerHTML to the diagram content
//       targetElement.innerHTML = diagramContent;

//       // Run Mermaid on the specific container
//       await mermaid.run({ nodes: [targetElement] });
//       console.log('Mermaid diagram rendered successfully.');
//     } catch (error) {
//       console.error('Mermaid diagram rendering failed:', error);
//     }
//   }
// }
































// import mermaid from 'mermaid';

// let isInitialized = false;

// export function getMermaidInstance(isDarkMode) {
//   if (!isInitialized && typeof window !== 'undefined') {
//     mermaid.initialize({
//       startOnLoad: false,
//       securityLevel: 'loose',
//       theme: 'base',
//       darkMode: isDarkMode,
//       themeVariables: {
//         primaryColor: isDarkMode ? '#1f2937' : '#f5f5f5',
//         primaryBorderColor: isDarkMode ? '#4b5563' : '#bfbfbf',
//         lineColor: isDarkMode ? '#9ca3af' : '#4d4d4d',
//         mainBkg: isDarkMode ? '#333' : '#f0f0f0',
//       },
//       flowchart: {
//         htmlLabels: true,
//         useMaxWidth: true,
//         diagramPadding: 50,
//         curve: 'basis',
//         titleTopMargin: 40,
//       },
//     });
//     isInitialized = true;
//   }
//   return mermaid;
// }

// // Render a Mermaid diagram
// export async function renderMermaidDiagram(targetElement, diagramContent) {
//   if (targetElement) {
//     try {
//       // Set the innerHTML to the diagram content
//       targetElement.innerHTML = diagramContent;

//       // Run Mermaid on the specific container
//       await mermaid.run({ nodes: [targetElement] });
//     } catch (error) {
//       console.error('Mermaid diagram rendering failed:', error);
//     }
//   }
// }




















//  // import mermaid from 'mermaid';

// // // let isInitialized = false;


// // // export async function loadSpecificIcon(iconName) {
// // //   try {
// // //     let icon;
// // //     if (iconName.startsWith('logos:')) {
// // //       const logos = await import('@iconify-json/logos');
// // //       const iconKey = iconName.replace('logos:', '');
// // //       icon = logos.icons[iconKey];
// // //     } else if (iconName.startsWith('mdi:')) {
// // //       const mdi = await import('@iconify-json/mdi');
// // //       const iconKey = iconName.replace('mdi:', '');
// // //       icon = mdi.icons[iconKey];
// // //     } else if (iconName.startsWith('icons:')) {
// // //       const gridicons = await import('@iconify-json/gridicons');
// // //       const iconKey = iconName.replace('icons:', '');
// // //       icon = gridicons.icons[iconKey];
// // //     } else if (iconName.startsWith('carbon:')) {
// // //       const carbon = await import('@iconify-json/carbon');
// // //       const iconKey = iconName.replace('carbon:', '');
// // //       icon = carbon.icons[iconKey];
// // //     }

// // //     return icon;
// // //   } catch (err) {
// // //     console.error(`Error loading specific icon (${iconName}):`, err);
// // //     return null;
// // //   }
// // // }

// // // async function loadIcons() {
// // //   // try {
// // //   //   const icons = {};
// // //   //   icons['logos'] = await import('@iconify-json/logos').then(module => module.icons);
// // //   //   icons['icons'] = await import('@iconify-json/gridicons').then(module => module.icons);
// // //   //   icons['mdi'] = await import('@iconify-json/mdi').then(module => module.icons);
// // //   //   icons['carbon'] = await import('@iconify-json/carbon').then(module => module.icons);

// // //   //   mermaid.registerIconPacks([
// // //   //     { name: 'logos', icons: icons['logos'] },
// // //   //     { name: 'icons', icons: icons['icons'] },
// // //   //     { name: 'mdi', icons: icons['mdi'] },
// // //   //     { name: 'carbon', icons: icons['carbon'] },
// // //   //   ]);
// // //   // } catch (err) {
// // //   //   console.error('Error loading icons dynamically:', err);
// // //   // }

// // //     // Extract all the icons used in the diagram using regex
// // //     const iconRegex = /icon: "([a-zA-Z0-9:-]+)"/g;
// // //     const icons = [];
// // //     let match;
  
// // //     while ((match = iconRegex.exec(diagramContent)) !== null) {
// // //       icons.push(match[1]);
// // //     }
  
// // //     // Load each icon dynamically
// // //     const iconPromises = icons.map(iconName => loadSpecificIcon(iconName));
// // //     const loadedIcons = await Promise.all(iconPromises);
  
// // //     loadedIcons.forEach((icon, index) => {
// // //       if (icon) {
// // //         mermaid.registerIconPack({
// // //           name: icons[index].split(':')[0],
// // //           icons: {
// // //             [icons[index].split(':')[1]]: icon,
// // //           },
// // //         });
// // //       }
// // //     });
// // // }

// // // export function getMermaidInstance() {
// // //   if (!isInitialized && typeof window !== 'undefined') {
// // //     mermaid.initialize({
// // //       startOnLoad: false,
// // //       securityLevel: 'loose',
// // //       theme: 'base',
// // //       layout: 'elk',
// // //       darkMode: true,
// // //       elk: {
// // //         mergeEdges: true,
// // //         nodePlacementStrategy: 'LINEAR_SEGMENTS',
// // //       },
// // //     });

// // //     isInitialized = true;
// // //   }
// // //   return mermaid;
// // // }

// // // export async function renderMermaidDiagram(target) {
// // //   if (typeof window !== 'undefined') {
// // //     // Load icons dynamically
// // //     await loadIcons();

// // //     // Now render the diagram
// // //     mermaid.init(undefined, target);
// // //   }
// // // }
// // // Load only the specific icons you use in your Mermaid diagrams
// // import { proxy as mdiProxy, server as mdiServer, web as mdiWeb } from '@iconify-icons/mdi';
// // import { computer as iconsComputer, phone as iconsPhone, tablet as iconsTablet } from '@iconify-icons/gridicons';
// // import { server as carbonServer } from '@iconify-icons/carbon';
// // import mermaid from 'mermaid';




// // const availableIcons = {
// //   'mdi:proxy': mdiProxy,
// //   'mdi:server': mdiServer,
// //   'mdi:web': mdiWeb,
// //   'icons:computer': iconsComputer,
// //   'icons:phone': iconsPhone,
// //   'icons:tablet': iconsTablet,
// //   'carbon:server': carbonServer,
// // };

// // let isInitialized = false;

// // export function getMermaidInstance() {
// //   if (!isInitialized && typeof window !== 'undefined') {
// //     mermaid.registerIconPacks([
// //       {
// //         name: 'icons',
// //         icons: availableIcons,
// //       },
// //     ]);

// //     mermaid.initialize({
// //       startOnLoad: false,
// //       securityLevel: 'loose',
// //       theme: 'base',
// //       darkMode: true,
// //       layout: 'elk',
// //       elk: {
// //         mergeEdges: true,
// //         nodePlacementStrategy: 'LINEAR_SEGMENTS',
// //       },
// //       themeVariables: {
// //         primaryColor: '#1f2937',
// //         primaryBorderColor: '#4b5563',
// //         lineColor: '#9ca3af',
// //         mainBkg: '#333',
// //       },
// //       flowchart: {
// //         htmlLabels: true,
// //         useMaxWidth: true,
// //         diagramPadding: 50,
// //         curve: 'basis',
// //         titleTopMargin: 40,
// //       },
// //     });

// //     isInitialized = true;
// //   }
// //   return mermaid;
// // }





// // import mermaid from 'mermaid';

// // let isInitialized = false;

// // export function getMermaidInstance() {
// //   if (!isInitialized && typeof window !== 'undefined') {
// //     mermaid.initialize({
// //       startOnLoad: false,
// //       securityLevel: 'loose',
// //       theme: 'base',
// //       darkMode: true,
// //       themeVariables: {
// //         primaryColor: '#1f2937',
// //         primaryBorderColor: '#4b5563',
// //         lineColor: '#9ca3af',
// //         mainBkg: '#333',
// //       },
// //       flowchart: {
// //         htmlLabels: true,
// //         useMaxWidth: true,
// //         diagramPadding: 50,
// //         curve: 'basis',
// //         titleTopMargin: 40,
// //       },
// //     });

// //     isInitialized = true;
// //   }
// //   return mermaid;
// // }

// // // Render a Mermaid diagram with Iconify icons using Tailwind
// // export async function renderMermaidDiagram(targetRef, diagramContent) {
// //   if (targetRef?.current) {
// //     try {
// //       const mermaidInstance = getMermaidInstance();
// //       await mermaidInstance.contentLoaded();
      
// //       // Add the diagram
// //       targetRef.current.innerHTML = diagramContent;

// //       // // Inject icons with Tailwind classes
// //       // const icons = targetRef.current.querySelectorAll('.icon');
// //       // icons.forEach(icon => {
// //       //   // Apply Tailwind CSS styling or classes as needed
// //       //   icon.classList.add('inline-block', 'h-6', 'w-6', 'text-gray-700');
// //       // });

// //     } catch (error) {
// //       console.error('Mermaid diagram rendering failed:', error);
// //     }
// //   }
// // }
