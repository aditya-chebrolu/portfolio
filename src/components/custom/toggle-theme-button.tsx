"use client";
import React from "react";
import { useTheme } from "next-themes";

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="fixed bottom-4 right-4" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ToggleThemeButton;
