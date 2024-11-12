import Section from "@/components/section";
import React from "react";

const formattedText = `I’m a <span class="mark">software developer</span> with experience in both <span class="mark">front-end</span> and <span class="mark">back-end technologies</span>, passionate about crafting <span class="mark">clean</span>, <span class="mark">efficient code</span>. Currently, I’m exploring the power of <span class="mark">AI</span> to <span class="mark">enhance my projects</span> and staying at the forefront of <span class="mark">industry trends</span>.`;
const AboutMe = () => {
  return (
    <Section>
      <p
        className="text-pretty border-l-4 pl-2 text-[15px] text-muted-foreground dark:text-gray-400 [&>.mark]:text-white"
        dangerouslySetInnerHTML={{ __html: formattedText }}
      />
    </Section>
  );
};

export default AboutMe;
