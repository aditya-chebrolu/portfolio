"use client";
import React from "react";
import PageWrapper from "@/components/page-wrapper";
import Title from "@/components/title";
import experience from "@/data/experience.json";
import { useParams } from "next/navigation";
type ExperienceDataType = (typeof experience)[keyof typeof experience];

const ExperiencePage = () => {
  const { company } = useParams();
  const data = experience[company as keyof typeof experience];

  return (
    <PageWrapper>
      <div>
        <div className="text-muted-foreground dark:text-gray-400">My Experience @</div>
        <Title className="text-black dark:text-white">{data.name}</Title>
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
  return (
    <div className="flex flex-col gap-3">
      <div className="text-2xl font-semibold">At {data.shortName}, I have...</div>
      <div className="flex flex-col gap-2">
        {data.points.map((point, index) => (
          <div
            key={index}
            className="point text-md text-gray-800 dark:text-gray-400 md:font-medium"
            dangerouslySetInnerHTML={{ __html: point }}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
