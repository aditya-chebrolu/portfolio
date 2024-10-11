"use client";
import PageWrapper from "@/components/custom/page-wrapper";
import WorkExperience from "./components/experience";
import Title from "@/components/custom/title";
import Skills from "./components/skills";
import Markdown from "react-markdown";
import { data } from "@/data/home";

export default function Home() {
  return (
    <PageWrapper>
      <Title>hi, i&apos;m aditya 👋</Title>
      {/* <div className="col-span-full flex min-h-[1px] w-full justify-center gap-x-10 border-y bg-accent px-[20px] py-2 text-sm dark:border-[#343434] dark:bg-[#0F0F0F] md:px-[calc((100vw-600px)/2)]">
        <div>github</div>
        <div>linkedin</div>
        <div>mail</div>
      </div> */}
      <WorkExperience />
      <Skills />
      <div className="flex flex-col gap-y-32 py-16">
        <div className="flex flex-col gap-4">
          <div className="self-center rounded-lg bg-foreground px-4 py-[4px] text-sm/tight text-background">notes</div>
          <h2 className="text-center text-4xl/tight font-bold">Checkout my notes.</h2>
          <Markdown className="text-center text-muted-foreground [&_a]:text-foreground [&_a]:underline">{data.notes}</Markdown>
        </div>
        <div className="flex flex-col gap-4">
          <div className="self-center rounded-lg bg-foreground px-4 py-[4px] text-sm/tight text-background">resume</div>
          <h2 className="text-center text-4xl/tight font-bold">
            <a href="resume.pdf" target="_blank">
              Checkout my resume.
            </a>
          </h2>
        </div>
      </div>
    </PageWrapper>
  );
}
