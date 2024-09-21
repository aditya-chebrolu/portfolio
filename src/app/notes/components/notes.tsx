"use client";
import Link from "next/link";
import { DataObject } from "../page";
import useSelectedNotes from "../hooks/use-selected-notes";
import { cn } from "@/lib/utils";

const Content = ({
  notes: inputNotes,
  tags,
}: {
  notes: DataObject[];
  tags: string[];
}) => {
  const {
    selectedNotes: notes,
    toggleTag,
    selectedTags,
    onSearch,
    search,
  } = useSelectedNotes(inputNotes);

  return (
    <>
      <input
        type="search"
        placeholder="Search Tags, Title, etc..."
        className="border focus:outline-none px-2 p-1.5 rounded-lg"
        onChange={onSearch}
        value={search}
        // onClick={toggleTheme}
      />
      {/* <div className="flex gap-x-2 text-md overflow-scroll no-scrollbar">
        {tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              "text-gray-400 flex-shrink-0 cursor-pointer transition-all",
              selectedTags.has(tag) && "text-yellow-400"
            )}
            onClick={toggleTag(tag)}
          >
            #{tag}
          </span>
        ))}
      </div> */}
      <Rows notes={notes} selectedTags={selectedTags} toggleTag={toggleTag} />
      {/* <div className="bg-[#0F0F0F] py-10 col-span-full border-t border-[#343434]">
        <div className="w-[600px] mx-auto mb-10 text-3xl font-bold text-center">
          all tags
        </div>
        <div className="w-[600px] mx-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "flex-shrink-0 cursor-pointer transition-all text-sm",
                selectedTags.has(tag) && "text-yellow-400"
              )}
              onClick={toggleTag(tag)}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div> */}
    </>
  );
};

const Rows = ({
  notes,
  selectedTags,
  toggleTag,
}: {
  notes: DataObject[];
  selectedTags: Set<string>;
  toggleTag: (tag: string) => () => void;
}) => {
  return (
    <div className={"flex flex-col gap-y-2"}>
      {notes.map((note, idx) => (
        <div
          key={note.url}
          className="grid grid-cols-[2ch_1fr] gap-x-2 gap-y-1"
        >
          <div className="w-[2ch]">{idx + 1}.</div>
          <Link
            href={`https://github.com/aditya-chebrolu/notes/blob/master/${note.url}`}
            target="_blank"
            className="underline justify-self-start"
          >
            {note.title}
          </Link>
          <div className="flex gap-x-2 col-[2/3] row-[2/3] text-sm">
            {note.tags.map((tag) => (
              <div
                key={tag}
                className={cn(
                  "text-gray-400 cursor-pointer hover:text-gray-100",
                  selectedTags.has(tag) && "text-yellow-400"
                )}
                onClick={toggleTag(tag)}
              >
                #{tag}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
