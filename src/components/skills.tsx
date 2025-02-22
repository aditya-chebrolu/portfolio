"use client";
import { icons as allIcons, type SkillsType, type IconType } from "@/utils/icons";

const Skills = ({ skills }: { skills: string[] }) => {
  const icons: IconType[] = skills.map(skill => allIcons[skill as SkillsType]);

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {Object.values(icons).map(icon => {
        const { Icon, name } = icon;
        return (
          <div key={icon.name} className="flex items-center gap-1">
            <Icon className="h-[16px] w-[16px] fill-black dark:fill-white" />
            <span className="text-sm">{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
