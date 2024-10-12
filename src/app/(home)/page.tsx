"use client";
import PageWrapper from "@/components/custom/page-wrapper";
import WorkExperience from "./components/experience";
import Title from "@/components/custom/title";
import Skills from "./components/skills";
import Markdown from "react-markdown";
import { data } from "@/data/home";
import Contact from "./components/contact";

export default function Home() {
  return (
    <PageWrapper>
      <Title>hi, i&apos;m aditya 👋</Title>
      {/* <div className="col-span-full flex min-h-[1px] w-full justify-center gap-x-10 border-y bg-accent px-[20px] py-2 text-sm dark:border-[#343434] dark:bg-[#0F0F0F] md:px-[calc((100vw-600px)/2)]">
        <In height={25} width={25} className="fill-black dark:fill-white" />
        <Github height={25} width={25} className="fill-black dark:fill-white" />
        <Mail height={25} width={25} className="fill-black dark:fill-white" />
      </div> */}
      <div className="col-span-full h-[1px] bg-[#343434] bg-border" />
      <WorkExperience />
      <Skills />
      <div className="h-10" />
      <div className="flex flex-col gap-4">
        <div className="self-center rounded-lg bg-foreground px-4 py-[4px] text-sm/tight text-background">notes</div>
        <h2 className="text-center text-4xl/tight font-bold">Checkout my notes.</h2>
        <Markdown className="text-center text-muted-foreground [&_a]:text-foreground [&_a]:underline">{data.notes}</Markdown>
      </div>
      <div className="h-10" />
      <Contact />
    </PageWrapper>
  );
}
