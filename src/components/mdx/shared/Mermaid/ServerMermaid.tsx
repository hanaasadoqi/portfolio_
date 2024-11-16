// components/mdx/ServerMermaid.tsx
import mermaid from 'mermaid';
import React from 'react';

interface ServerMermaidProps {
  chart: string;
  id?: number;
}

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
});

const ServerMermaid: React.FC<ServerMermaidProps> = async ({ chart, id }) => {
  const uniqueId = `mermaid-chart-${id || Math.random().toString(36).substring(2, 9)}`;

  let svg = '';
  try {
    svg = await mermaid.render(uniqueId, chart) as unknown as string;
  } catch (error) {
    console.error('Error rendering Mermaid chart:', error);
    svg = `<p>Error rendering diagram. Please try again later.</p>`;
  }

  return (
    <div
      id={uniqueId}
      className="mermaid-chart-container"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default ServerMermaid;
