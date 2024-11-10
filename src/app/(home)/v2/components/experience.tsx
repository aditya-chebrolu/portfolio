import data from "@/data/home.json";
import Link from "next/link";
import LinkIcon from "@svgs/link.svg";
import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl/tight font-semibold text-gray-500">Experience</div>
      {data.experience.map(exp => (
        <Link href={exp.url} className="flex items-center justify-between gap-2" key={exp.company}>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-sm/tight font-semibold">
              <span>{exp.company}</span>
              <LinkIcon className="h-4 w-4 stroke-black dark:stroke-white" />
            </div>
            <div className="text-sm/tight">{exp.role}</div>
          </div>
          <div className="text-sm text-gray-500">{formatDateRange(data.experience[0].startDate, data.experience[0].endDate)}</div>
        </Link>
      ))}
    </div>
  );
};

export const formatDateRange = (startDate: string, endDate?: string): string => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
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
