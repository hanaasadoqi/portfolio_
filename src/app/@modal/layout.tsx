import ErrorBoundary from '../shared/ErrorBoundary';
import React from 'react';
import ModalProvider from './ModalProvider';
import MDXComponentsProvider from '@/components/mdx/mdxComponents';

interface LayoutProps {
  children: React.ReactNode;
}

const ModalLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <div className="modal-wrapper">
        <ModalProvider>
          <div className="modal-content">
            {children}
          </div>
        </ModalProvider>
      </div>
    </ErrorBoundary>
  );
};
export default ModalLayout;
