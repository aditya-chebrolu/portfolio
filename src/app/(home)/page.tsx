"use client";
import PageWrapper from "@/components/custom/page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none">
        {"hi, i'm aditya 👋"}
      </h1>
      <h2 className="text-xl">Work Experience</h2>
      <h2 className="text-xl">Skills</h2>
    </PageWrapper>
  );
}
