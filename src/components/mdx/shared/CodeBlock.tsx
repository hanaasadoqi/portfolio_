'use client'

import { BaseButton, IconButton } from "@/components/shared";
import clsx from "clsx";
import { useState, useRef } from "react";
import { FaClipboardCheck, FaClipboard } from "react-icons/fa";

export const CodeBlock = ({ children, language, className }: { children: React.ReactNode, className?: string, language?: string }) => {
  const [copied, setCopied] = useState(false)
  const codeRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    if (codeRef.current) {
      try {
        const text = codeRef.current.innerText;
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy code: ', err);
        alert('Failed to copy code.');
      }
    }
  };

  return className ? (
    <>
      <div className="bg-transparent contain-inline-size">
        <div className="flex items-center justify-between text-white">
          <span className="bg-gray-950 px-3 py-1.5 text-xs font-sans rounded-md h-8 shadow-md">
            {language?.replace(' code-highlight', '')}
          </span>
        </div>
      </div>
      <div className="sticky top-9 md:top-12 z-20">
        <div className="absolute bottom-0 right-0 flex h-9 items-center">
          <div className="flex items-center rounded px-2 font-sans text-xs text-gray-100">
            <span>
              <BaseButton
                onClick={handleCopy}
                size="xs"
                variant="ghost"
                className="flex gap-1 items-center opacity-10 hover:opacity-100 bg-gray-700 hover:!bg-gray-600 text-white rounded-lg focus:outline-none shadow-md"
                ariaLabel={'Copy Code Block'}>{copied ? (<><FaClipboardCheck size={16} />Copied</>) : (<><FaClipboard size={16} />Copy</>)}</BaseButton>
            </span>
          </div>
        </div>
      </div>
      <div className="relative w-full p-2 transition-transform transform-whitespace ease-in-out duration-300 overflow-contain overflow-y-auto">
        <code ref={codeRef} className={`md:!whitespace-pre-wrap w-full language-${language} bg-gray-700 text-gray-200 rounded-lg overflow-x-scroll md:overflow-x-auto scrollbar-thin`} data-id="code-block">
          {children}
        </code>
      </div>
    </>
  ) : (
    <span data-id="inline-code" className={clsx(`bg-gray-200 dark:bg-gray-800 dark:text-red-200 text-red-600 py-1.5 px-2 m-1 rounded-md`, className)}>{children}</span>
  )
}
