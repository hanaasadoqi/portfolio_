"use client";
import Section from "@/components/Section/Section";
import styles from "../components/Section/Section.module.scss";
import dynamic from "next/dynamic";

import Header from "@/components/Header/Header";

const Hero = dynamic(() => import("@/components/Hero/Hero"), {
  ssr: true,
});
const About = dynamic(() => import("@/components/About/About"), {
  ssr: false,
});

export default function Home() {
  const handleModal = () => {
    console.log("open");
  };
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="">
        <Section
          id="hero"
          label="Welcome to My Portfolio"
          className="bg-hero-gradient"
        >
          <Hero />
        </Section>
        <Section
          id="about"
          label="A Little About Me"
          subtitle="Snapshots of the things that bring me joy and define who I am."
          description="These images represent the places, experiences, and people that shape my journey. I hope this small glimpse into my world brings a smile to your face."
          className="bg-about-gradient"
        >
          <About />
        </Section>
        <Section
          id="skills"
          label="Skills"
          className="bg-skills-gradient"
        ></Section>
        <Section id="experience" label="Work Experience"></Section>
        <Section id="projects" label="Projects"></Section>
        <Section id="writing" label="Writing"></Section>
        <Section id="education" label="Education"></Section>
        <Section id="contact" label="Contact Me"></Section>
      </div>
    </main>
  );
}
