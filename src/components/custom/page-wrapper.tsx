import React from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="my-[var(--block-spacing)] grid grid-cols-[20px_1fr_20px] gap-y-8 md:grid-cols-[1fr_600px_1fr] [&>*.full]:col-[1/-1] [&>*:not(.col-span-full)]:col-[2/3]">
      {children}
    </main>
  );
};

export default PageWrapper;
