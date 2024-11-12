"use client";
import data from "@/data/home.json";
import Link from "next/link";
import LinkIcon from "@svgs/link.svg";
import Section from "@/components/section";
import { companyLogos } from "@/utils/icons";

const Experience = () => {
  return (
    <Section title="Experience">
      {data.experience.map(exp => {
        if (!exp.display) return null;
        const Icon = companyLogos[exp.logo as keyof typeof companyLogos];
        return (
          <div className="flex items-center gap-2 [&:not(:last-child)]:border-b [&:not(:last-child)]:pb-4" key={exp.company}>
            <Icon className="aspect-square h-10 content-center" />
            <div className="grid flex-1 md:grid-cols-[1fr_auto]">
              <Link href={exp.url} className="text-md/tight flex items-center gap-1 font-semibold [grid-area:1/1/2/2]">
                <span>{exp.company}</span>
                <LinkIcon className="h-4 w-4 stroke-black dark:stroke-white" />
              </Link>
              <div className="text-sm/tight [grid-area:2/1/3/2]">{exp.role}</div>
              <div className="text-sm text-gray-500 md:content-center md:[grid-area:1/2/3/3]">
                {formatDateRange({ startDate: exp.startDate, endDate: exp.endDate })}
              </div>
            </div>
          </div>
        );
      })}
    </Section>
  );
};

export const formatDateRange = ({ startDate, endDate }: { startDate: string; endDate?: string }): string => {
  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    // Original format for larger screens
    return dateObj.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric"
    });
  };

  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = endDate ? formatDate(endDate) : "Present";

  return `${formattedStartDate} - ${formattedEndDate}`;
};

export const calculateOverallDuration = (startDate: string, endDate?: string): number => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const diffInMilliseconds = end.getTime() - start.getTime();
  const years = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  return Math.round(years * 10) / 10; // Round to 1 decimal place
};

export default Experience;