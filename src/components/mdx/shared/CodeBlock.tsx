"use client"

import { useEffect, useRef } from "react";
import clsx from "clsx";
import { CopyButton } from "./CopyButton";
import { loadKaTeXStyles, loadPrismStyles, loadSyntaxHighlighterStyles } from "@/app/(content)/blog/MDX/utils/dynamicImportStyles";

export const CodeBlock = ({ children, className }: { children?: React.ReactNode, className?: string, }) => {
  const codeRef = useRef<HTMLPreElement>(null);
  const language = className?.replace('language-', '') || 'text';

  useEffect(() => {
    if (window !== undefined) {
      loadSyntaxHighlighterStyles(language)
      loadKaTeXStyles();
      loadPrismStyles();
    }
  }, [])

  return className ? (
    <>
      <div className="bg-transparent contain-inline-size relative">
        <div className="flex items-center justify-between text-white">
          <span className="bg-gray-950 px-3 py-1.5 text-xs font-sans rounded-md h-8 shadow-md">
            {language?.replace(' code-highlight', '')}
          </span>
        </div>
      </div>
      <CopyButton ref={codeRef} />
      <div className="relative w-full p-2 transition-transform transform-whitespace ease-in-out duration-300 overflow-contain overflow-y-auto">
        <code ref={codeRef} className={`md:!whitespace-pre-wrap w-full language-${language} text-gray-200 rounded-lg overflow-x-scroll md:overflow-x-auto scrollbar-thin`} data-id="code-block">
          {children}
        </code>
      </div>
    </>
  ) : (
    <span data-id="inline-code" className={clsx(`whitespace-nowrap bg-gray-200 dark:bg-gray-800 dark:text-red-200 text-red-600 py-1.5 px-2 m-1 rounded-md`, className)}>{children}</span>
  )
}
