"use client";
import data from "@/data/home.json";
import Link from "next/link";
import LinkIcon from "@svgs/link.svg";
import Section from "@/components/custom/section";
import { companyLogos } from "@/utils/icons";
import useMediaQuery from "@/hooks/use-media-query";

const Experience = () => {
  const isPhone = useMediaQuery("(max-width: 600px)");
  return (
    <Section title="Experience">
      {data.experience.map(exp => {
        if (!exp.display) return null;
        const Icon = companyLogos[exp.logo as keyof typeof companyLogos];
        return (
          <div className="flex items-center gap-2 [&:not(:last-child)]:border-b [&:not(:last-child)]:pb-4" key={exp.company}>
            <Icon className="aspect-square h-10" />
            <div className="flex flex-col">
              <Link href={exp.url} className="text-md/tight flex items-center gap-1 font-semibold">
                <span>{exp.company}</span>
                <LinkIcon className="h-4 w-4 stroke-black dark:stroke-white" />
              </Link>
              <div className="text-sm/tight">{exp.role}</div>
            </div>
            <div className="ml-auto text-sm text-gray-500">
              {formatDateRange({ startDate: exp.startDate, endDate: exp.endDate, isPhone })}
            </div>
          </div>
        );
      })}
    </Section>
  );
};

export const formatDateRange = ({
  startDate,
  endDate,
  isPhone
}: {
  startDate: string;
  endDate?: string;
  isPhone: boolean;
}): string => {
  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    if (isPhone) {
      // Format as "MMM'YY" for phone
      const year = dateObj.getFullYear().toString().slice(-2);
      return dateObj.toLocaleDateString("en-US", { month: "short" }) + "'" + year;
    }
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
