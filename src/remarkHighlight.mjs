// import { visit } from 'unist-util-visit';

// export default function remarkHighlight() {
//   return (tree) => {
//     visit(tree, (node) => {
//       if (node.value) {
//       const highlightPattern = /<!--highlight-(\d+)-->/g;
//       node.value = node.value.replace(highlightPattern, (_, id) => {
//         const newValue = `[[highlight-${id}]]`;
//         return newValue;
//       });
//     }
//     });
//   };
// }

// import { visit } from 'unist-util-visit';

// export default function remarkHighlight() {
//   return (tree) => {
//     visit(tree, 'code', (node) => {
//       if (node.value) {
//         // Regular expression to find the highlight markers
//         // const highlightPattern = /<!--highlight-(\d+)-->/g;
//         const highlightPattern = /\/\/\s*highlight-(\d+)|\[\[highlight-(\d+)\]\]|\#\s*highlight-(\d+)/g;

//         console.log('value before', node.value)
//         // Check the language of the code block (e.g., 'javascript', 'scss')
//         const lang = node.lang || ''; // Handle cases where lang might be undefined

//         // Modify the highlight markers based on the language
//         if (lang === 'javascript') {
//           // For JavaScript, output JavaScript-style comments
//           node.value = node.value.replace(highlightPattern, (_, id) => {
//             return `// highlight-${id}`;
//           });
//         } else if (lang === 'scss') {
//           // For SCSS, keep using the same marker
//           node.value = node.value.replace(highlightPattern, (_, id) => {
//             return `/* highlight-${id} */`;
//           });
//         } else if (lang === 'python') {
//           node.value = node.value.replace(highlightPattern, (_, id) => {
//             return `# highlight-${id}`;
//           })
//         } else {
//           // For other languages, use the default marker (or customize further)
//           node.value = node.value.replace(highlightPattern, (_, id) => {
//             return `[[highlight-${id}]]`;
//           });
//         }
//         console.log('value after', node.value)
//       }
//     });
//   };
// }
// import { visit } from 'unist-util-visit';

// export default function remarkHighlight() {
//   return (tree) => {
//     visit(tree, 'code', (node) => {
//       if (node.value) {
//         // Regular expression to find the highlight markers
//         // This captures the number after `highlight-`, regardless of the comment style
//         const highlightPattern = /(?:\/\/|\#|\[\[)\s*highlight-(\d+)(?:\]\])?/g;

//         // Replace highlight markers in the code block
//         node.value = node.value.replace(highlightPattern, (_, id) => {
//           // Return a unified format regardless of the style
//           return `<!--highlight-${id}-->`;
//         });
//       }
//     });
//   };
// }

// import { visit } from 'unist-util-visit';

// export default function remarkHighlight() {
//   return (tree) => {
//     visit(tree, 'code', (node) => {
//       if (node.value) {
//         // Regular expression to find the highlight markers
//         const highlightPattern = /\/\/\s*highlight-(\d+)|\[\[highlight-(\d+)\]\]|\#\s*highlight-(\d+)/g;

//         // Check the language of the code block (e.g., 'javascript', 'scss', 'python')
//         const lang = node.lang || ''; // Handle cases where lang might be undefined

//         // Modify the highlight markers based on the language
//         if (lang === 'javascript') {
//           // For JavaScript, output JavaScript-style comments
//           node.value = node.value.replace(highlightPattern, (_, id) => {
//             return `// highlight-${id}`;
//           });
//         } else if (lang === 'scss') {
//           // For SCSS, use SCSS-style comments
//           node.value = node.value.replace(highlightPattern, (_, id) => {
//             return `/* highlight-${id} */`;
//           });
//         } else if (lang === 'python') {
//           // For Python, use Python-style comments
//           node.value = node.value.replace(highlightPattern, (_, id) => {
//             return `# highlight-${id}`;
//           });
//         } else {
//           // For other languages, you can keep the default marker
//           node.value = node.value.replace(highlightPattern, (_, id) => {
//             return `[[highlight-${id}]]`;
//           });
//         }
//       }
//     });
//   };
// }
import { visit } from 'unist-util-visit';

export default function remarkHighlight() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if (node.value) {
        // Regular expression to find the highlight markers
        // const highlightPattern = /\/\/\s*highlight-(\d+)|\[\[highlight-(\d+)\]\]|\#\s*highlight-(\d+)|<!--highlight-(\d+)-->/g;
        const highlightPattern = /(?:\/\/|\/\*|\#|\[\[|\<!--)\s*highlight-(\d+)(?:\]\]|\*\/|\-->)?/g;

        // Check the language of the code block (e.g., 'javascript', 'scss', 'python')
        const lang = node.lang || '';

        // Modify the highlight markers based on the language
        if (lang === 'javascript') {
          node.value = node.value.replace(highlightPattern, (_, id) => {
            return `// highlight-${id}`;
          });
        } else if (lang === 'scss') {
          node.value = node.value.replace(highlightPattern, (_, id) => {
            return `/* highlight-${id} */`;
          });
        } else if (lang === 'python') {
          node.value = node.value.replace(highlightPattern, (_, id) => {
            return `# highlight-${id}`;
          });
        } else {
          node.value = node.value.replace(highlightPattern, (_, id) => {
            return `<!--highlight-${id}-->`;
          });
        }
      }
    });
  };
}