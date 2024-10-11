import React from "react";

const Section = ({ children, title }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-6">
      <h2 className="text-2xl font-bold tracking-tight">{title}.</h2>
      {children}
    </div>
  );
};

export default Section;
