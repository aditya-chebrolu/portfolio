import React from "react";
import In from "@svgs/social/in.svg";
import Github from "@svgs/social/github.svg";
import Mail from "@svgs/social/mail.svg";
import Link from "next/link";
import data from "@/data/home.json";

const Contact = () => {
  return (
    <div className="mt-10 flex justify-center gap-6 [&_svg:hover]:scale-150 [&_svg]:h-[20px] [&_svg]:w-[20px] [&_svg]:fill-black [&_svg]:transition-transform [&_svg]:duration-100 dark:[&_svg]:fill-white">
      <Link href={data.contact.linkedin}>
        <In />
      </Link>
      <Link href={data.contact.github}>
        <Github />
      </Link>
      <Link href={data.contact.mail}>
        <Mail />
      </Link>
    </div>
  );
};

export default Contact;
