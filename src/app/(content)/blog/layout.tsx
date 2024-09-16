import React from 'react'
import 'prism-themes/themes/prism-vsc-dark-plus.css'
import './articleStyles.scss'
import '../../../styles/globals.scss'
import AutocompleteSearchBar from "./components/AutocompleteSearch";

export default function MdxLayout({ children, header, content }: { children: React.ReactNode; header: React.ReactNode; content: React.ReactNode }) {
  return (
    <section className="min-h-screen w-screen bg-gray-950">
      <AutocompleteSearchBar />
      {children}
    </section>
  );
}