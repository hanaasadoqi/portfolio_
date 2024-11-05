import { Fragment } from "react";

// Utility to split the content into text and code
const splitContent = (content: string) => {
  // Regex to match anything wrapped in backticks
  const parts = content.split(/(`[^`]+`)/g);
  return parts.map(part => {
    // If it starts and ends with backticks, it's code
    if (part.startsWith('`') && part.endsWith('`')) {
      return { type: 'code', value: part.slice(1, -1) };
    }
    return { type: 'text', value: part };
  });
};

export const renderContent = (content: string) => {
  const parts = splitContent(content); // Split into code and text parts

  // Adjust map to handle the object with { type, value } structure
  return parts.map((part, index) => {
    if (part.type === 'code') {
      // If the part is code, render it in <code>
      return (
        <code key={index} className="before:content-none after:content-none bg-gray-100 dark:bg-gray-900 px-2 my-1 rounded">
          {part.value}
        </code>
      );
    } else {
      // Otherwise, it's just plain text
      return <Fragment key={index}>{part.value}</Fragment>;
    }
  });
};