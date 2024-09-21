import ErrorBoundary from '../shared/ErrorBoundary';
import React from 'react';
import ModalProvider from './ModalProvider';
import MDXComponentsProvider from '@/components/mdx/MDXComponentsProvider';

interface LayoutProps {
  children: React.ReactNode;
}

const ModalLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <MDXComponentsProvider>
        <div className="modal-wrapper">
          <ModalProvider>
            <div className="modal-content">
              {children}
            </div>
          </ModalProvider>
        </div>
      </MDXComponentsProvider>
    </ErrorBoundary>
  );
};
export default ModalLayout;
