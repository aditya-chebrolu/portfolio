"use client";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main className="grid md:grid-cols-[1fr_600px_1fr] grid-cols-[20px_1fr_20px] wrapper gap-y-8">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none">
        {"hi, i'm aditya 👋"}
      </h1>
      {/* <Markdown className="text-balance text-muted-foreground dark:prose-invert"></Markdown> */}
      <h2 className="font-bold text-xl">Work Experience</h2>

      <h2 className="font-bold text-xl">Skills</h2>
    </main>
  );
}
