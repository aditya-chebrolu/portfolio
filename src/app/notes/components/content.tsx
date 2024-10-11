"use client";
import { DataObject } from "../page";
import useSelectedNotes from "../hooks/use-selected-notes";
import AllTags from "./all-tags";
import Notes from "./notes";
import { useTheme } from "next-themes";

const Content = ({ notes: inputNotes, tags }: { notes: DataObject[]; tags: string[] }) => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
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
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};

export default Content;
