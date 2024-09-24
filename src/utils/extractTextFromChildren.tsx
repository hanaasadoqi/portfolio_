import React from "react";

const createIdFromText = (text: string) =>
  (text || '').toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

const extractTextFromChildren = (children: React.ReactNode): string => {
  if (typeof children === 'string') {
    return children;
  }

  if (React.isValidElement(children) && children.props.children) {
    return extractTextFromChildren(children.props.children);
  }

  if (Array.isArray(children)) {
    return children.map(child => extractTextFromChildren(child)).join('');
  }

  return '';
};

export {
  createIdFromText,
  extractTextFromChildren
}