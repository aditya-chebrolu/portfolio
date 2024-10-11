import React from "react";
import Icon from "@svgs/bajaj.svg";
import Section from "@/components/custom/section";

const experience = [
  {
    logo: "/bajaj.png",
    company: "Amgen",
    designations: [
      {
        name: "Software Engineer 2",
        duration: "Dec'24 - Present"
      }
    ]
  },
  {
    logo: "/bajaj.png",
    company: "Bajaj Finserv Health",
    designations: [
      {
        name: "Software Engineer 2",
        duration: "Oct'23 - Nov'24"
      },
      {
        name: "Software Engineer 1",
        duration: "Jun'22 - Oct'23"
      }
    ]
  }
];

const WorkExperience = () => {
  return (
    <Section title="work experience">
      {experience.map(exp => (
        <ExperienceStrip key={exp.company} {...exp} />
      ))}
    </Section>
  );
};

const ExperienceStrip = ({ company, designations }: (typeof experience)[number]) => {
  return (
    <div className="flex items-start gap-x-4">
      <div className="overflow-hidden rounded-full">
        <Icon height={40} width={40} />
      </div>
      <div className="flex flex-1 flex-col gap-y-1">
        <h3 className="mb-1.5 text-sm/tight font-bold">{company}</h3>
        {designations.map(({ name, duration }, idx) => (
          <div key={idx} className="flex items-center text-sm/tight">
            <h4>{name}</h4>
            <div className="ml-auto text-muted-foreground">{duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
