import React from "react";

const Section = ({ children, title }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-4">
      {/* {title && <h2 className="text-2xl font-bold tracking-tight">{title}.</h2>} */}
      {title && (
        <h2 className="text-md/tight font-medium uppercase tracking-tight text-muted-foreground dark:text-gray-400">
          {/* <WordPullUp words={`${title}.`} className="text-[45px] font-bold tracking-[-1.5px]" /> */}
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default Section;
