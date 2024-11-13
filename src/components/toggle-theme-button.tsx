"use client";
import React from "react";
import { useTheme } from "next-themes";
import SunIcon from "@svgs/sun.svg";
import MoonIcon from "@svgs/moon.svg";

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!theme) return null;

  return (
    <div className="fixed bottom-4 right-4 cursor-pointer duration-100 md:hover:scale-110" onClick={toggleTheme}>
      {theme === "dark" ? <SunIcon className="h-[30px] w-[30px]" /> : <MoonIcon className="h-[30px] w-[30px]" />}
    </div>
  );
};

export default ToggleThemeButton;
