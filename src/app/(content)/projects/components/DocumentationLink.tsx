"use client"

import Link from "next/link"

const DocumentationLink = ({ documentation }: { documentation: string }) => (
  <Link
    href={documentation}
    className="hidden md:block text-xs text-blue-500 underline hover:text-blue-600"
    target="_blank"
  >
    Docs
  </Link>
)

export default DocumentationLink