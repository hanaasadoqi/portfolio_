import { Heading } from "@/context/TOCContext"


export const buildTOC = (headings: Heading[]): Heading[] => {
  const toc: Heading[] = []
  const stack: Heading[] = []

  Array.from(headings).forEach(heading => {
    heading.children = heading.children || []

    while (stack.length && stack[stack.length - 1].depth >= heading.depth) {
      stack.pop()
    }

    if (stack.length === 0) {
      toc.push(heading)
    } else {
      const parent = stack[stack.length - 1]
      parent.children = parent.children || []
      if (!parent.children?.find(child => child.id === heading.id)) {
        parent.children = [...parent.children, heading]
      }
    }

    stack.push(heading)
  })
  return toc
}