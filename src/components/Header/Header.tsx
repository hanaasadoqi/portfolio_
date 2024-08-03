import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="absolute left-0 flex w-full items-center justify-between border-b p-4 drop-shadow-md">
      <div id="logo-container">Logo</div>
      <nav role="navigation">
        <ul className="inline-flex space-x-12">
          <li className="rounded p-1 hover:outline hover:outline-offset-2 hover:outline-blue-300">
            <Link href="#about-me">About</Link>
          </li>
          <li className="rounded p-1 hover:outline hover:outline-offset-2 hover:outline-blue-300">
            <Link href="#featured">Featured</Link>
          </li>
          <li className="rounded p-1 hover:outline hover:outline-offset-2 hover:outline-blue-300">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="rounded p-1 hover:outline hover:outline-offset-2 hover:outline-blue-300">
            <Link href="#experience">Experience</Link>
          </li>
          <li className="roundel p-1 hover:outline hover:outline-offset-2 hover:outline-blue-300">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="roundel p-1 hover:outline hover:outline-offset-2 hover:outline-blue-300">
            <Link href="#writing">Writing</Link>
          </li>
          <li className="roundel p-1 hover:outline hover:outline-offset-2 hover:outline-blue-300">
            <Link href="#education">Education</Link>
          </li>
          <li className="roundel p-1 hover:outline hover:outline-offset-2 hover:outline-blue-300">
            <Link href="#contact-me">Contact</Link>
          </li>
        </ul>
      </nav>
      <div id="nav-icon-menu">
        <ul className="inline-flex space-x-4">
          <li>Contact</li>
          <li>Settings</li>
          <li>Dark Mode</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
