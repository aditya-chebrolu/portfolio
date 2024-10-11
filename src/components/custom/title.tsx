import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="font-inter text-[2.9rem] font-extrabold leading-tight tracking-tight md:text-6xl/tight">{children}</h1>;
};

export default Title;
