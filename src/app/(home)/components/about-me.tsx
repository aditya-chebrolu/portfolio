import Section from "@/components/section";
import React from "react";

const calculateExperience = () => {
  const startDate = new Date(2022, 0, 1);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  let experienceString = years > 0 ? `${years} years` : "";
  experienceString += months > 0 ? (experienceString ? ` and ${months} months` : `${months} months`) : "";

  return experienceString;
};

const AboutMe = () => {
  const experience = calculateExperience();
  const formattedText = `I’m a <span class="mark">software developer</span> with <span class="font-medium text-blue-700 dark:text-blue-500">${experience} of experience</span> in both <span class="mark">front-end</span> and <span class="mark">back-end technologies</span>, passionate about crafting <span class="mark">clean</span>, <span class="mark">efficient code</span>. Currently, I’m exploring the power of <span class="mark">AI</span> to <span class="mark">enhance my projects</span> and staying at the forefront of <span class="mark">industry trends</span>.`;

  return (
    <Section>
      <p
        className="text-md border-l-4 pl-2 text-justify text-muted-foreground dark:text-gray-400 [&>.mark]:text-black dark:[&>.mark]:text-white"
        dangerouslySetInnerHTML={{ __html: formattedText }}
      />
    </Section>
  );
};

export default AboutMe;
