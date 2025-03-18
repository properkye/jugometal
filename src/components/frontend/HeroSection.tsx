'use client'
import { HeroSectionProps } from "@/models/types";
import Link from "next/link";

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, href }) => {

  return (
    <section className="absolute inset-0 flex items-end z-20 w-full h-full py-10 text-white lg:w-[70%] xl:w-full ">
      <div className="wrapper">
        <h1 className="text-[1.5rem] md:text-[2rem] xl:text-[3rem] font-semibold tracking-tighter leading-16 mb-4">
          {title}
        </h1>
        <h5 className="text-[18px] font-extralight leading-[1.5] xl:w-[40%] mb-6">{subtitle}</h5>
        <Link href={href} className="border border-black py-2 px-8 bg-white text-black">Pogledajte proizvode</Link>
      </div>
    </section>
  );
};

export default HeroSection;
