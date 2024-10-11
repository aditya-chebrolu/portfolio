"use client";
import { cn } from "@/lib/utils";

const AllTags = ({
  tags,
  toggleTag,
  selectedTags
}: {
  tags: string[];
  toggleTag: (tag: string) => () => void;
  selectedTags: Set<string>;
}) => {
  return (
    <div
      className={
        "tag-container no-scrollbar col-span-full flex gap-x-2 overflow-x-auto border-y bg-accent px-[20px] py-2 text-sm dark:border-[#343434] dark:bg-[#0F0F0F] md:px-[calc((100vw-600px)/2)]"
      }
    >
      {tags.map(tag => (
        <span key={tag} className={cn("tag flex-shrink-0", selectedTags.has(tag) && "selected")} onClick={toggleTag(tag)}>
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default AllTags;
