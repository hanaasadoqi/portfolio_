import React from 'react';
import Heading from './Heading';

export const CustomH1: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => <Heading level={1} {...props} />;
export const CustomH2: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => <Heading level={2} {...props} />;
export const CustomH3: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => <Heading level={3} {...props} />;
export const CustomH4: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ className, ...props }) => <Heading level={4} className="text-lg md:text-xl md:text-2xl text-primary-900" {...props} />;
export const CustomH5: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ className, ...props }) => <Heading level={5} className="text-base md:text-lg lg:text-xl text-primary-900" {...props} />;
export const CustomH6: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ className, ...props }) => <Heading level={6} className="text-sm md:text-base lg:text-lg text-primary-900" {...props} />;

export * from './List'
export * from './Blocks'
export * from './Folding'
export * from './Image'
export * from './CodeBlock'