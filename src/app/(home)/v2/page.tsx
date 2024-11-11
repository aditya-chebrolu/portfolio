"use client";

import PageWrapper from "@/components/custom/page-wrapper";
import Title from "@/components/custom/title";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Skills from "./components/skills";
export default function HomeV2() {
  return (
    <PageWrapper>
      <Title>hi!&nbsp; i&apos;m aditya &nbsp;&nbsp;👋</Title>
      <Experience />
      <Skills />
      <Contact />
      <a
        href="/resume.pdf"
        target="_blank"
        className="mx-auto w-fit bg-black px-5 py-2 text-center text-sm font-medium text-white transition-all duration-200 hover:scale-110 dark:bg-white dark:text-black"
      >
        resume
      </a>
      {/* <div className="full col-span-full border-t border-white"></div> */}
    </PageWrapper>
  );
}
