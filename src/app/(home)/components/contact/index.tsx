"use client";
import In from "@svgs/social/in.svg";
import Github from "@svgs/social/github.svg";
import Mail from "@svgs/social/mail.svg";

const Contact = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-center text-4xl/tight font-bold">Contact Me</h2>
      <div className="flex items-center justify-center gap-x-8">
        <In height={35} width={35} className="h-[30px] w-[30px] fill-black dark:fill-white md:h-[35px] md:w-[35px]" />
        <Github height={35} width={35} className="h-[30px] w-[30px] fill-black dark:fill-white md:h-[35px] md:w-[35px]" />
        <Mail height={35} width={35} className="h-[30px] w-[30px] fill-black dark:fill-white md:h-[35px] md:w-[35px]" />
      </div>
    </div>
  );
};

export default Contact;
