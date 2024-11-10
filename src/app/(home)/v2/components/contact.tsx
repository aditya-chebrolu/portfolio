import React from "react";
import In from "@svgs/social/in.svg";
import Github from "@svgs/social/github.svg";
import Mail from "@svgs/social/mail.svg";
import Link from "next/link";
import data from "@/data/home.json";

const Contact = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl/tight font-semibold text-gray-500">Contact</div>
      <div className="flex gap-4 [&_svg]:h-[20px] [&_svg]:w-[20px] [&_svg]:fill-black dark:[&_svg]:fill-white">
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
    </div>
  );
};

export default Contact;
