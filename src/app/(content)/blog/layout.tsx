import React, { Suspense } from 'react'
import Background from '@/components/shared/common/Background';
import { LoadingOverlay } from '@/components';
import 'prism-themes/themes/prism-vsc-dark-plus.css'
import './articleStyles.scss'
import '@/styles/globals.scss';

export default function BlogsLayout({ children }: { children: React.ReactNode; }) {

  return (
    <Background id="writing" >
      <section className="w-screen min-h-screen relative">
        <Suspense fallback={<LoadingOverlay />}>
          {children}
        </Suspense>
      </section>
    </Background>
  );
}
