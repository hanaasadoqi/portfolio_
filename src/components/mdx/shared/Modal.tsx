'use client';

import { useEffect, useState, ReactNode, Suspense, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import LoadingComponent from '@/app/@modal/(.)skills/[id]/loading';
import clsx from 'clsx';
import { IconButton } from '@/components/shared';

interface ModalProps {
  onClose?: () => void;
  children: ReactNode;
  isModalOpen?: boolean;
  size?: 'sm' | 'md' | 'lg';
  headline?: string;
}

const Modal: React.FC<ModalProps> = ({ size = 'md', onClose, children, isModalOpen = false, headline }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen !== isOpen) {
      setIsOpen(isModalOpen);
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 h-full w-full">
      <div
        ref={modalRef}
        className={clsx(
          'relative rounded-lg p-6 w-full h-3/4 dark:bg-black/90 bg-white text-white',
          {
            'max-w-3xl': size === 'sm',
            'max-w-5xl': size === 'md',
            'max-w-7xl': size === 'lg',
          }
        )}
      >
        <div className="px-4 absolute top-0 left-0 right-0 h-24 bg-white dark:bg-black flex items-center justify-between z-[999]">
          <h3 className="m-2">{headline || ''}</h3>
          <IconButton
            onClick={handleClose}
            aria-label="Close"
            variant="ghost"
            icon={<IoMdClose size={24} />}
          />
        </div>
        <div className="relative w-full h-full overflow-y-auto p-2 mt-4 scrollbar-hide">
          <Suspense fallback={<LoadingComponent />}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
};

export default Modal;
