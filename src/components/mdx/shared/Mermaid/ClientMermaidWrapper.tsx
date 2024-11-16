"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import DiagramModal from '../DiagramModal';
import { IoReloadCircleSharp } from 'react-icons/io5';
import { BaseButton } from '@/components/shared';
import { useMermaid } from '@/context/MermaidContext';

interface ClientMermaidWrapperProps {
  chart: string;
  id: string;
}

const ClientMermaidWrapper: React.FC<ClientMermaidWrapperProps> = ({ chart, id }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (chartRef.current) {
      renderMermaidChart(chartRef, chart);
    }
  }, [chart, renderMermaidChart]);

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
            id={id}
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
            id={`${id}-modal`}
            className="mermaid flex justify-center items-center w-full h-full not-prose"
          />
        </DiagramModal>
      )}
    </>
  );
};

export default ClientMermaidWrapper;