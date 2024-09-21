'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.url !== window.location.pathname) {
        router.push('/');
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router]);

  return (
    <>
      {children}
      <style jsx>{`
        .modal-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.5);
          z-index: 20;
        }
        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          max-width: 600px;
          width: 100%;
          z-index: 10;
        }
      `}</style>
    </>
  );
};

export default ModalProvider;
