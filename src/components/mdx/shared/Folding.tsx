'use client'

import { BaseButton } from "@/components/shared";
import { useState } from "react";

export const CodeFolding: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div data-id="code-folding">
        <BaseButton
          size="md"
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
        >
          {isOpen ? 'Hide' : 'Show'}
        </BaseButton>
      </div>

      {isOpen && children}
    </>
  );
};
