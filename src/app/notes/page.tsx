import path from "path";
import fs from "fs";
import React from "react";
import Content from "./components/content";
import PageWrapper from "@/components/custom/page-wrapper";

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
    "notes.json",
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
    <PageWrapper>
      <h1 className="select-none text-5xl font-bold">
        notes.
        <span className="align-middle text-4xl">📝</span>
      </h1>
      <Content notes={notes} tags={tags} />
    </PageWrapper>
  );
};

export default NotesPage;
