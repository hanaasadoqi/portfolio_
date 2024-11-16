'use client'

import { useState, RefObject } from "react";
import { BaseButton } from "@/components/shared";
import dynamic from "next/dynamic";

const FaClipboardCheck = dynamic(() => import('react-icons/fa').then((mod) => mod.FaClipboardCheck), {
  ssr: false
})
const FaClipboard = dynamic(() => import('react-icons/fa').then((mod) => mod.FaClipboard), {
  ssr: false
})

export const CopyButton = ({ ref }: { ref: RefObject<any> }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (ref.current) {
      try {
        const text = ref.current.innerText;
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy code: ', err);
        alert('Failed to copy code.');
      }
    }
  };

  return (
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
  );
}
