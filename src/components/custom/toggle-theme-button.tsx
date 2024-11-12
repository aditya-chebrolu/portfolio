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

  return (
    <div className="fixed bottom-4 right-4" onClick={toggleTheme}>
      {theme === "dark" ? <SunIcon className="h-[35px] w-[35px]" /> : <MoonIcon className="h-[35px] w-[35px]" />}
    </div>
  );
};

export default ToggleThemeButton;
