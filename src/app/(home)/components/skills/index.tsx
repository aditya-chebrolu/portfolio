import React from "react";
import { technologies } from "@/utils/icons";
import Section from "@/components/custom/section";
import { useTheme } from "next-themes";

const Skills = () => {
  const { theme } = useTheme();
  return (
    <Section title="skills">
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
        {technologies.map(({ Icon, DarkIcon, name }) => (
          <div key={name} className="flex items-center gap-x-2 *:flex-shrink-0 md:gap-x-3">
            {!!DarkIcon && theme === "dark" ? <DarkIcon height={18} width={18} /> : <Icon height={18} width={18} />}
            <div className="text-sm">{name}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
