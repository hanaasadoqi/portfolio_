// "use client"

// import { MDXRemote } from "next-mdx-remote";
// import { useMDXComponents } from "use-mdx-components";
// import { MDXComponents } from "mdx/types";
// import { Suspense } from "react";
// import { BeatLoader } from 'react-spinners';

// interface MDXProps {
//   content: any;
//   components: MDXComponents;
// }

// export default async function MDXContent({ content }: MDXProps) {
//   const components = useMDXComponents()
//   return (
//     <Suspense fallback={<BeatLoader color="#36d7b7" />}>
//       <MDXRemote {...content} components={components} />
//     </Suspense>
//   )

// }