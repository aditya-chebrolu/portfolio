import React from "react";
import WordPullUp from "../ui/word-pull-up";

const Section = ({ children, title }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-10">
      {/* {title && <h2 className="text-2xl font-bold tracking-tight">{title}.</h2>} */}
      {title && (
        <h2>
          <WordPullUp words={`${title}.`} className="text-[45px] font-bold tracking-[-1.5px]" />
          {/* {title}. */}
        </h2>
      )}
      {children}
    </div>
  );
};

export default Section;
