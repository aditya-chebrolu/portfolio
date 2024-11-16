import { cn } from "@/lib/utils";
import React from "react";
import contact from "@data/home/contact.json";
import Link from "next/link";

const PageWrapper = ({
  children,
  className,
  showFooter = true
}: {
  children: React.ReactNode;
  className?: string;
  showFooter?: boolean;
}) => {
  return (
    <>
      <main
        className={cn(
          "my-[var(--block-spacing)] grid grid-cols-[25px_1fr_25px] grid-rows-[auto] gap-y-10 md:grid-cols-[1fr_600px_1fr] md:gap-y-12 [&>*:not(.col-span-full)]:col-[2/3]",
          className
        )}
      >
        {children}
      </main>
      {showFooter && (
        <footer className="mt-auto flex flex-col items-center gap-1 border-t bg-accent py-[40px] text-sm dark:border-[#343434] dark:bg-[#0F0F0F]">
          <div>Aditya Chebrolu</div>
          <div className="border-b pb-4 text-xs">Hyderabad, Telangana, India, 500085</div>
          <div className="mt-2 flex gap-4">
            {contact.map(obj => (
              <Link
                key={obj.label}
                href={obj.url}
                className="cursor-pointer text-muted-foreground duration-200 hover:scale-110 hover:text-black hover:underline has-hover-sibling:text-muted-foreground/50 hover-has-sibling:text-muted-foreground/50 dark:text-gray-400 dark:hover:text-white dark:has-hover-sibling:text-gray-400/50 dark:hover-has-sibling:text-gray-400/50"
              >
                {obj.label}
              </Link>
            ))}
          </div>
        </footer>
      )}
    </>
  );
};

export default PageWrapper;
