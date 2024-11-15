import { ChangeEvent, useRef, useState } from "react";
import { DataObject } from "../page";
import Fuse from "fuse.js";

const useSelectedNotes = (notes: DataObject[]) => {
  const [search, setSearch] = useState("");
  const [selectedNotes, setSelectedNotes] = useState<DataObject[]>(notes);
  const selectedTags = useRef<Set<string>>(new Set());

  const fuse = useRef(
    new Fuse(notes, {
      keys: ["title", "tags"],
      ignoreLocation: true,
      threshold: 0,
      minMatchCharLength: 3
    })
  );

  const toggleTag = (tag: string) => () => {
    setSearch("");
    if (selectedTags.current.has(tag)) selectedTags.current.delete(tag);
    else selectedTags.current.add(tag);

    if (selectedTags.current.size === 0) {
      setSelectedNotes(notes);
      return;
    }
    setSelectedNotes(
      notes.filter(note => {
        return note.tags.some(t => selectedTags.current.has(t));
      })
    );
  };

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    selectedTags.current.clear();
    if (!searchValue) {
      setSelectedNotes(notes);
    } else {
      const results = fuse.current.search(e.target.value);
      setSelectedNotes(results.map(result => result.item));
    }
    setSearch(e.target.value);
  };

  return {
    selectedNotes,
    toggleTag,
    selectedTags: selectedTags.current,
    onSearch,
    search
  };
};

export default useSelectedNotes;
