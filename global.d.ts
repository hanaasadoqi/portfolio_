export { };

declare global {
  interface Window {
    mermaid: {
      initialize: (config: object) => void;
      contentLoaded: () => void;
      init: (config: any, className: string) => void;
    };
    handleClick: (id?: string) => void
    showTooltip: () => void
    __MERMAID_INITIALIZED__: boolean;
    __MERMAID_ICONS_REGISTERED__: boolean;
  }
}