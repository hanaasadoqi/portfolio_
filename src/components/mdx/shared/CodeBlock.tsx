'use client'

import { IconButton } from "@/components/shared";
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
    <div className="relative p-2">
      <code ref={codeRef} className={`language-${language} bg-gray-700 text-gray-200 rounded-lg w-full overflow-x-auto scrollbar-thin`} data-id="code-block">
        {children}
      </code>
      <IconButton
        onClick={handleCopy}
        size="xs"
        variant="ghost"
        className="absolute opacity-10 hover:opacity-100 -right-3 -top-3 bg-gray-700 text-white p-1 rounded-md hover:bg-gray-300 hover:text-gray-900 focus:outline-none"
        icon={copied ? <FaClipboardCheck size={16} /> : <FaClipboard size={16} />} ariaLabel={'Copy Code Block'} />
    </div>
  ) : (
    <code data-id="inline-code" className={clsx(`bg-gray-200 dark:bg-gray-800 dark:text-red-200 text-red-600 py-1.5 px-2 m-1 rounded-md`, className)}>{children}</code>
  )
}
