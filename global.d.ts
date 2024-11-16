export { };

declare module 'remark-sectionize';
declare global {
  interface Window {
    mermaid: {
      initialize: (config: object) => void;
      contentLoaded: () => void;
      init: (config: any, className: string) => void;
      run: any;
    };
    handleClick: (id?: string) => void
    showTooltip: () => void
    __MERMAID_INITIALIZED__: boolean;
    __MERMAID_ICONS_REGISTERED__: boolean;
  }
}

declare module '@mdx-js/runtime';
declare module 'remark-extract-toc';
