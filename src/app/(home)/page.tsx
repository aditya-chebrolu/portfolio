import PageWrapper from "@/components/page-wrapper";
import meta from "@data/home/meta.json";
import Title from "@/components/title";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Spacer from "@/components/spacer";
import { Metadata } from "next";
import AboutMe from "./components/about-me";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  authors: [{ name: "Aditya Chebrolu" }],
  robots: { index: true, follow: true },
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: false
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website"
  },
  appleWebApp: {
    capable: true,
    title: "AC Portfolio",
    statusBarStyle: "black"
  },
  alternates: {
    canonical: "https://www.adityachebrolu.com"
  }
};

export default function Home() {
  return (
    <PageWrapper>
      <Title>hi! i&apos;m aditya &nbsp;👋</Title>
      <AboutMe />
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
