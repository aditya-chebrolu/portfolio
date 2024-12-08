import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
const TitleWithImage = ({
  children,
  image,
  titleClassName
}: {
  children: React.ReactNode;
  image: {
    src: StaticImageData;
    alt: string;
    className?: string;
  };
  titleClassName?: string;
}) => {
  return (
    <div>
      <div className={cn("mr-1.5 inline-block align-[1px] md:mr-2", image.className)}>
        <Image src={image.src} alt={image.alt} className={image.className} />
      </div>
      <h1 className={cn("inline text-[2.7rem] font-extrabold leading-tight tracking-tight md:text-6xl", titleClassName)}>
        {children}
      </h1>
    </div>
  );
};

export default TitleWithImage;
