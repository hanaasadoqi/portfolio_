'use client'

import { BaseButton } from "@/components/shared";
import { useState } from "react";

export const CodeFolding: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div data-id="code-folding">
        <BaseButton
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
        >
          {isOpen ? 'Hide Code' : 'Show Code'}
        </BaseButton>
      </div>

      {isOpen && children}
    </>
  );
};
