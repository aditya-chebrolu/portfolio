import Link from "next/link";
import { DataObject } from "../not-page";

const Notes = ({ notes }: { notes: DataObject[]; selectedTags: Set<string>; toggleTag: (tag: string) => () => void }) => {
  return (
    <div className={"flex flex-col gap-y-4"}>
      {notes.map((note, idx) => (
        <div key={note.url} className="grid grid-cols-[2ch_1fr] gap-x-2">
          <div className="w-[2ch]">{idx + 1}.</div>
          <Link
            href={`https://github.com/aditya-chebrolu/notes/blob/master/${note.url}`}
            target="_blank"
            className="justify-self-start text-sm underline"
          >
            {note.title}
          </Link>
          {/* <div className="tag-container col-[2/3] row-[2/3] flex gap-x-2 text-sm">
            {note.tags.map((tag) => (
              <div
                key={tag}
                className={cn(
                  "tag text-gray-400",
                  selectedTags.has(tag) && "selected",
                )}
                onClick={toggleTag(tag)}
              >
                #{tag}
              </div>
            ))}
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Notes;
