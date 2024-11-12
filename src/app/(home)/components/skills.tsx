"use client";
import React from "react";
import Section from "@/components/section";
import { icons } from "@/utils/icons";

const Skills = () => {
  return (
    <Section title="Skills">
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {Object.values(icons).map(icon => {
          const { Icon, name } = icon;
          return (
            <div key={icon.name} className="flex gap-1">
              <Icon className="h-[14px] w-[14px] fill-black dark:fill-white" />
              <span className="text-sm">{name}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
