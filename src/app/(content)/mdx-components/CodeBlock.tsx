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
        console.log(codeRef.current)
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
    <div className="relative m-0">
      <pre ref={codeRef} className={`bg-gray-700 text-gray-200 rounded-lg`} data-id="code-block">
        <code className={`language-${language} bg-gray-700 w-full`} >
          {children}
        </code>
      </pre>
      <IconButton
        onClick={handleCopy}
        size="xs"
        variant="ghost"
        className="absolute right-0 top-0 bg-gray-700 text-white p-1 rounded-md hover:bg-gray-300 hover:text-gray-900 focus:outline-none"
        icon={copied ? <FaClipboardCheck /> : <FaClipboard />} ariaLabel={'Copy Code Block'} />
    </div>
  ) : (
    <code data-id="inline-code" className={clsx(`bg-gray-200 text-red-600 py-1.5 px-2 m-1 rounded-md`, className)}>{children}</code>
  )
}