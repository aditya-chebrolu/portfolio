"use client";

import PageWrapper from "@/components/page-wrapper";
import Title from "@/components/title";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Spacer from "@/components/spacer";
export default function HomeV2() {
  return (
    <PageWrapper>
      <Title>hi! i&apos;m aditya &nbsp;👋</Title>
      <Experience />
      <Skills />
      <Spacer h={50} />
      <Contact />
      <a
        href="/resume.pdf"
        target="_blank"
        className="mx-auto w-fit bg-black px-5 py-2 text-center text-sm font-medium text-white transition-all duration-200 hover:scale-110 dark:bg-white dark:text-black"
      >
        resume
      </a>
      <Spacer h={150} />
    </PageWrapper>
  );
}
