import ServerMermaid from './ServerMermaid';
import ClientMermaidWrapper from './ClientMermaidWrapper';

interface CombinedMermaidProps {
  chart: string;
  id?: number;
}

export default function CombinedMermaid({ chart, id }: CombinedMermaidProps) {
  const uniqueId = `mermaid-chart-${id || Math.random().toString(36).substring(2, 9)}`;

  return (
    <>
      <ServerMermaid chart={chart} id={id} />
      <ClientMermaidWrapper chart={chart} id={uniqueId} />
    </>
  );
}
