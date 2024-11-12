import { cn } from "@/lib/utils";
import React from "react";

const Title = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h1 className={cn("text-[2.7rem] font-extrabold leading-tight tracking-tight md:text-6xl", className)}>{children}</h1>;
};

export default Title;
