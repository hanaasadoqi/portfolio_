import React, { useMemo } from "react";
import Link from "next/link";
import { extractTextFromChildren, createIdFromText } from "@/utils/extractTextFromChildren";

export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  level: number;
}

const Heading: React.FC<HeadingProps> = ({ level, children, ...rest }) => {
  const text = extractTextFromChildren(children);
  const id = useMemo(() => createIdFromText(text), [text]);

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <>
      {id && (
        <Link href={`#${id}`} passHref>
          {React.createElement(Tag, { id, ...rest }, children)}
        </Link>
      )}
      {!id && React.createElement(Tag, { ...rest }, children)}
    </>
  );
};

export default Heading;
