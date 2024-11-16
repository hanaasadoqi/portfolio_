export async function loadKaTeXStyles() {
  if (typeof window !== 'undefined') {
    await import('katex/dist/katex.min.css');
  }
}

export async function loadPrismStyles() {
  if (typeof window !== 'undefined') {
    await import('prism-themes/themes/prism-vsc-dark-plus.css');
  }
}

export async function loadSyntaxHighlighterStyles(language: string) {
  switch (language.toLowerCase()) {
    case 'html':
      await import('react-syntax-highlighter/dist/cjs/languages/prism/markup');
      break;
    case 'javascript':
    case 'js':
      await import('react-syntax-highlighter/dist/cjs/languages/prism/javascript');
      break;
    case 'md':
    case 'markdown':
      await import('react-syntax-highlighter/dist/cjs/languages/prism/markdown');
      break;
    case 'typescript':
    case 'ts':
      await import('react-syntax-highlighter/dist/esm/languages/prism/typescript');
      break;
    case 'tsx':
      await import('react-syntax-highlighter/dist/cjs/languages/prism/tsx');
      break;
    case 'jsx':
      await import('react-syntax-highlighter/dist/cjs/languages/prism/jsx');
      break;
    case 'json':
      await import('react-syntax-highlighter/dist/cjs/languages/prism/json');
      break;
    case 'css':
      await import('react-syntax-highlighter/dist/cjs/languages/prism/css');
      break;
    case 'scss':
      await import('react-syntax-highlighter/dist/cjs/languages/prism/scss');
      break;
    case 'bash':
      await import('react-syntax-highlighter/dist/cjs/languages/prism/bash');
      break;
    case 'python':
      await import('react-syntax-highlighter/dist/cjs/languages/prism/python');
      break;
    case 'latex':
      await import('react-syntax-highlighter/dist/cjs/languages/prism/latex');
      break;
    default:
      await import('react-syntax-highlighter/dist/cjs/default-highlight');
      break;
  }
}
