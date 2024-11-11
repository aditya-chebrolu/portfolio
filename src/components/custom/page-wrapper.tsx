import { cn } from "@/lib/utils";
import React from "react";

const PageWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <main
      className={cn(
        "my-[var(--block-spacing)] grid grid-cols-[25px_1fr_25px] grid-rows-[auto] gap-y-10 md:grid-cols-[1fr_600px_1fr] md:gap-y-12 [&>*:not(.col-span-full)]:col-[2/3]",
        className
      )}
    >
      {children}
    </main>
  );
};

export default PageWrapper;
