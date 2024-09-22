"use client";
import { cn } from "@/lib/utils";

const AllTags = ({
  tags,
  toggleTag,
  selectedTags,
}: {
  tags: string[];
  toggleTag: (tag: string) => () => void;
  selectedTags: Set<string>;
}) => {
  return (
    <div
      className={`flex gap-x-2 text-sm overflow-x-auto no-scrollbar py-2 px-[calc((100vw-600px)/2)] bg-accent dark:bg-[#0F0F0F] border-y dark:border-[#343434] col-span-full tag-container`}
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "flex-shrink-0 tag",
            selectedTags.has(tag) && "selected"
          )}
          onClick={toggleTag(tag)}
        >
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default AllTags;
