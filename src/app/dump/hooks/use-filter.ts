import { useState } from "react";
// import Fuse from "fuse.js";

export const useFilter = () => {
  const [search, setSearch] = useState("");
  const [selectedNotes, setSelectedNotes] = useState<[]>(notes);
  const selectedTags = useRef<Set<string>>(new Set());

  //   const fuse = useRef(
  //     new Fuse(notes, {
  //       keys: ["title", "tags"],
  //       ignoreLocation: true,
  //       threshold: 0,
  //       minMatchCharLength: 3
  //     })
  //   );
};
