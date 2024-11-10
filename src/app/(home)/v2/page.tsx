"use client";

import PageWrapper from "@/components/custom/page-wrapper";
import Title from "@/components/custom/title";
import Contact from "./components/contact";
import Experience from "./components/experience";

export default function HomeV2() {
  return (
    <PageWrapper>
      <Title>hi, i&apos;m aditya 👋</Title>
      <Experience />
      <Contact />
      {/* <div className="full col-span-full border-t border-white"></div> */}
    </PageWrapper>
  );
}
