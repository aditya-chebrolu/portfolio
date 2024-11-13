"use client";
import React from "react";
import In from "@svgs/social/in.svg";
import Github from "@svgs/social/github.svg";
import Mail from "@svgs/social/mail.svg";
import Link from "next/link";
import data from "@/data/home/contact.json";

const Contact = () => {
  const animClass =
    "*:h-[25px] *:w-[25px] *:fill-black *:dark:fill-white hover:scale-150 duration-150 [&:hover~*]:scale-75 has-sibling-hover:scale-75";
  return (
    // <div className="*:hover:scale-150 flex justify-center gap-6 [&_svg]:h-[25px] [&_svg]:w-[25px] [&_svg]:fill-black [&_svg]:transition-transform [&_svg]:duration-200 dark:[&_svg]:fill-white">
    <div className="flex justify-center gap-6">
      <Link href={data.linkedin} className={animClass}>
        <In />
      </Link>
      <Link href={data.github} className={animClass}>
        <Github />
      </Link>
      <Link href={data.mail} className={animClass}>
        <Mail />
      </Link>
    </div>
  );
};

export default Contact;
