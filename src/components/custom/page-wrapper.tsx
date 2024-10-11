import React from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="my-[var(--block-spacing)] grid grid-cols-[30px_1fr_30px] gap-y-10 md:grid-cols-[1fr_600px_1fr] md:gap-y-12 [&>*.full]:col-[1/-1] [&>*:not(.col-span-full)]:col-[2/3]">
      {children}
    </main>
  );
};

export default PageWrapper;
