"use client";

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid'
import DiagramModal from './DiagramModal'
import { IoReloadCircleSharp } from "react-icons/io5";
import { BaseButton } from '@/components/shared';

interface MermaidProps {
  chart: string;
  id?: number;
}

const Mermaid = ({ chart, id }: MermaidProps) => {
  const chartRef = useRef<HTMLPreElement | null>(null);
  const modalRef = useRef<HTMLPreElement | null>(null);
  const uniqueId = `mermaid-chart-${id || Math.random().toString(36).substring(2, 9)}`;
  const [showModal, setShowModal] = useState<boolean>(false)
  const [reload, setReload] = useState<boolean>(false)

  useEffect(() => {
    if (chartRef.current && chart) {
      const theme = `%%{ init: { theme: 'base', themeVariables: { fontSize: '10px' }}}%%`
      chartRef.current.innerHTML = chart.trim();
    }
  }, [chart]);

  useEffect(() => {
    if (showModal && modalRef.current) {
      const theme = `%%{ init: { 'theme': 'base', 'themeVariables': { 'fontSize': '18px' }}}%%`
      modalRef.current.innerHTML = theme + chart.trim()
      mermaid.run({ nodes: [modalRef.current] })
    }
  }, [chart, showModal])

  useEffect(() => {
    if (reload && chartRef.current) {
      mermaid.run({ nodes: [chartRef.current] })
    }
    setReload(false)
  }, [reload])

  return (
    <>
      <div className="relative cursor-zoom-in hover:shadow-lg transition-transform duration-300 ease-in-out w-full">
        <pre
          ref={chartRef}
          id={uniqueId}
          onClick={() => setShowModal(true)}
          className="mermaid flex justify-center items-center w-full h-full overflow-auto"
        />
        <BaseButton variant="icon" className="absolute top-0 right-0 opacity-15 hover:opacity-85 hover:text-white" onClick={() => setReload(true)}>
          <IoReloadCircleSharp size={40} />
        </BaseButton>
      </div>
      {
        showModal && (
          <DiagramModal isOpen={showModal} onClose={() => setShowModal(false)} modalRef={modalRef}>
            <pre ref={modalRef}
              id={uniqueId}
              className="mermaid flex justify-center items-center w-full h-full not-prose" />
          </DiagramModal>
        )
      }
    </>
  );
};

export default Mermaid;