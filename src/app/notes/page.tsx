import path from "path";
import fs from "fs";
import React from "react";
import Content from "./components/notes";

export type DataObject = {
  title: string;
  url: string;
  tags: string[];
};

const getNotes = async () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "public",
    "data",
    "notes.json"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const arr = JSON.parse(fileContents) as DataObject[];
  const allTags = arr.flatMap((note) => note.tags);
  const uniqueTags = [...new Set(allTags)];
  return { notes: arr, tags: uniqueTags };
};

const NotesPage = async () => {
  const { notes, tags } = await getNotes();

  return (
    <main className="grid md:grid-cols-[1fr_600px_1fr] grid-cols-[20px_1fr_20px] wrapper gap-y-8 min-h-screen mt-[80px]">
      <h1 className="text-5xl font-bold select-none">
        notes.
        <span className="text-4xl align-middle">📝</span>
      </h1>
      <div className="border-b border-border col-span-full" />
      <Content notes={notes} tags={tags} />
    </main>
  );
};

export default NotesPage;
