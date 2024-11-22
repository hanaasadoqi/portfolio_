'use client';

import { useState, ReactNode } from 'react';
import Modal from './Modal';
import React from 'react';

interface TileProps {
  label: string;
  children: ReactNode;
}

export const ModalTile: React.FC<TileProps & { isActive: boolean; onClick: () => void }> = ({
  label,
  children,
  isActive,
  onClick,
}) => (
  <>
    <div
      className="p-4 border rounded cursor-pointer bg-gray-100 hover:bg-primary-300 active:bg-primary-400 dark:bg-gray-800 dark:hover:ring-4 dark:hover:ring-offset-4 dark:hover:ring-primary-900 dark:hover:bg-primary-700 dark:active:bg-primary-800 shadow-md"
      onClick={onClick}
    >
      <h2 className="text-lg font-semibold">{label}</h2>
    </div>

    {isActive && (
      <Modal isModalOpen={isActive} onClose={onClick} headline={label}>
        {children}
      </Modal>
    )}
  </>
);

interface ModalTileGridProps {
  children: React.ReactNode;
}

export const ModalTileGrid: React.FC<ModalTileGridProps> = ({ children }) => {
  const [activeTileIndex, setActiveTileIndex] = useState<number | null>(null);

  const handleTileClick = (index: number) => {
    setActiveTileIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {React.Children.map(children, (child, index) => {
        if (!child || typeof child !== 'object' || !('props' in child)) return null;

        return (
          <ModalTile
            {...child.props}
            key={index}
            isActive={activeTileIndex === index}
            onClick={() => handleTileClick(index)}
          />
        );
      })}
    </div>
  );
};