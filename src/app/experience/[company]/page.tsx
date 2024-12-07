"use client";
import React from "react";
import PageWrapper from "@/components/page-wrapper";
import experience from "@/data/experience.json";
import { useParams } from "next/navigation";
type ExperienceDataType = (typeof experience)[keyof typeof experience];
import { companyLogos } from "@/utils/icons";
import TitleWithImage from "@/components/title-with-image";

const ExperiencePage = () => {
  const { company } = useParams();
  const data = experience[company as keyof typeof experience];
  const logo = companyLogos[data.logo as keyof typeof companyLogos];
  return (
    <PageWrapper>
      <div>
        <div className="text-muted-foreground dark:text-gray-400">My Experience @</div>
        <TitleWithImage
          image={{ src: logo, alt: data.name, className: "relative aspect-square h-[33px] md:h-[44px] align-text-middle" }}
        >
          {data.name}
        </TitleWithImage>
      </div>
      <div
        className="text-md text-pretty border-l-4 pl-2 text-muted-foreground dark:text-gray-400 [&>_.highlight]:text-black dark:[&>_.highlight]:text-white"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
      <ExperiencePoints data={data} />
    </PageWrapper>
  );
};

const ExperiencePoints = ({ data }: { data: ExperienceDataType }) => {
  if (data.stuffDone.length === 0) return null;
  return (
    <div className="flex flex-col gap-3">
      <div className="text-xl font-semibold dark:text-white">At {data.shortName}, I have...</div>
      {data.stuffDone.map(obj => (
        <div
          className="flex flex-col gap-2 border-gray-300 pb-3 dark:border-[#343434] [&:not(:last-child)]:border-b"
          key={obj.title}
        >
          <h2 className="text-sm font-semibold uppercase dark:text-white">{obj.title}</h2>
          {obj.points.map((point, index) => (
            <div
              key={index}
              className="point text-md text-gray-800 dark:text-gray-400"
              dangerouslySetInnerHTML={{ __html: point }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExperiencePage;
