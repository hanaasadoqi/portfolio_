'use client';

import { useState } from 'react';
import Modal from './Modal';
import { useTabs } from '../hooks/useTabs';

interface TileProps {
  title: string;
  children: React.ReactNode;
}

export const Tile: React.FC<TileProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeTab } = useTabs();

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <>
      <div
        className="p-4 border rounded cursor-pointer bg-gray-100 hover:bg-gray-200 active:bg-gray-50 active:shadow-inner dark:bg-gray-900 dark:hover:bg-gray-800 dark:active:bg-gray-700" onClick={() => setIsOpen(true)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <div>{children}</div>
      </div>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          {childrenArray[activeTab] || (
            <p className="text-gray-500">No content available for this tab.</p>
          )}
        </Modal>
      )}
    </>
  );
};

export default Tile;
