'use client'

import { BaseButton, LoadingOverlay } from "@/components/shared";
import { Suspense, useState } from "react";

export const CodeFolding: React.FC<{ children: React.ReactNode; show?: string; hide?: string }> = ({ children, show = "Show", hide = "Hide", ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div data-id="code-folding">
        <BaseButton
          size="md"
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
        >
          {isOpen ? hide : show}
        </BaseButton>
      </div>

      {isOpen && (
        <div>
          <Suspense fallback={<LoadingOverlay />}>
            {children}
          </Suspense>
        </div>
      )}
    </>
  );
};