"use client";
import React from "react";
import In from "@svgs/social/in.svg";
import Github from "@svgs/social/github.svg";
import Mail from "@svgs/social/mail.svg";
import Link from "next/link";
import data from "@/data/home/contact.json";

const Contact = () => {
  return (
    <div className="flex justify-center gap-6 [&_svg:hover]:scale-150 [&_svg]:h-[25px] [&_svg]:w-[25px] [&_svg]:fill-black [&_svg]:transition-transform [&_svg]:duration-200 dark:[&_svg]:fill-white">
      <Link href={data.linkedin}>
        <In />
      </Link>
      <Link href={data.github}>
        <Github />
      </Link>
      <Link href={data.mail}>
        <Mail />
      </Link>
    </div>
  );
};

export default Contact;
