"use client";
import { DataObject } from "../page";
import useSelectedNotes from "../hooks/use-selected-notes";
import AllTags from "./all-tags";
import Notes from "./notes";

const Content = ({ notes: inputNotes, tags }: { notes: DataObject[]; tags: string[] }) => {
  const { selectedNotes: notes, toggleTag, selectedTags, onSearch, search } = useSelectedNotes(inputNotes);

  return (
    <>
      <AllTags tags={tags} toggleTag={toggleTag} selectedTags={selectedTags} />
      <input
        type="search"
        placeholder="Search Tags, Title, etc..."
        className="rounded-lg border bg-accent p-1.5 px-2 focus:outline-none dark:bg-[#0F0F0F]"
        onChange={onSearch}
        value={search}
      />
      <Notes notes={notes} selectedTags={selectedTags} toggleTag={toggleTag} />
    </>
  );
};

export default Content;
