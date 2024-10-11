import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="font-inter text-5xl/tight font-extrabold tracking-tight">{children}</h1>;
};

export default Title;
