"use client";
import React from "react";
import Link from "next/link";
import data from "@/data/home/contact.json";
import { socialLogos as icons } from "@/utils/icons";
const Contact = () => {
  const animClass =
    "*:h-[25px] *:w-[25px] *:fill-black *:dark:fill-white hover:scale-150 duration-100 hover-has-sibling:scale-75 has-hover-sibling:scale-75";
  return (
    <div className="flex justify-center gap-6">
      {data.map(obj => {
        const Icon = icons[obj.label];
        return (
          <Link href={obj.url} className={animClass} key={obj.label}>
            <Icon />
          </Link>
        );
      })}
    </div>
  );
};

export default Contact;
