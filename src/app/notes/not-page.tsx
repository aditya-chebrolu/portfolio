import path from "path";
import fs from "fs";
import React from "react";
import Content from "./components/content";
import PageWrapper from "@/components/page-wrapper";
import Title from "@/components/title";

export type DataObject = {
  title: string;
  url: string;
  tags: string[];
  mainTag: string;
};

const getNotes = async () => {
  const filePath = path.join(process.cwd(), "src", "data", "notes.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const arr = JSON.parse(fileContents) as DataObject[];
  const allTags = arr.map(note => note.mainTag);
  const uniqueTags = [...new Set(allTags)];
  return { notes: arr, tags: uniqueTags };
};

const NotesPage = async () => {
  const { notes, tags } = await getNotes();

  return (
    <PageWrapper>
      <Title>
        notes.
        <span className="align-middle text-4xl">📝</span>
      </Title>
      <Content notes={notes} tags={tags} />
    </PageWrapper>
  );
};

export default NotesPage;
