/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import data from "@data/experience.json";

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { company: key } = params;
  const name = process.env.NAME;
  const res = data[key as keyof typeof data];

  return {
    title: `${name} | Experience at ${res.name}`,
    description: `An in-depth look at ${name}'s work and accomplishments at ${res.name}, highlighting key projects and contributions to the team..`,
    keywords: res.meta.keywords,
    openGraph: {
      title: `Experience at ${res.name}`,
      description: `An in-depth look at my professional journey with ${res.name}.`,
      url: `${process.env.SITE_URL}/experience/${res.name}`
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

const ExperiencePageLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default ExperiencePageLayout;
