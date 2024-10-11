"use client";
import React, { useEffect, useState } from "react";
import In from "@svgs/social/in.svg";
import Github from "@svgs/social/github.svg";
import Mail from "@svgs/social/mail.svg";
import { useTheme } from "next-themes";

const Contact = () => {
  const { theme } = useTheme();
  const [fillClass, setFillClass] = useState("");

  useEffect(() => {
    setFillClass(theme === "dark" ? "fill-white" : "fill-black");
  }, [theme]);

  return (
    <div className="flex flex-col gap-8">
      {/* <div className="self-center rounded-lg bg-foreground px-4 py-[4px] text-sm/tight text-background">contact</div> */}
      <h2 className="text-center text-4xl/tight font-bold">Contact Me</h2>
      <div className="flex items-center justify-center gap-x-8">
        <In className={`h-[35px] w-[35px] ${fillClass}`} />
        <Github className={`h-[35px] w-[35px] ${fillClass}`} />
        <Mail className={`h-[35px] w-[35px] ${fillClass}`} />
      </div>
    </div>
  );
};

export default Contact;
