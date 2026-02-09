'use client'
import { BanerProps } from "@/models/types";
import Image from "next/image";
import React from "react";


const Baner: React.FC<BanerProps> = ({ imgSrc, alt, title, subtitle }) => {
  return (
    <section className="w-full relative h-[500px]">
      <Image src={imgSrc} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <section className="absolute inset-0 flex items-end z-20 w-full h-full py-10 text-white lg:w-[70%] xl:w-full ">
      <div className="wrapper">
        <h1 className="text-[1.5rem] md:text-[2rem] xl:text-[3rem] font-semibold tracking-tighter leading-16 mb-4">
          {title}
        </h1>
        <h3 className="text-[18px] font-extralight leading-[1.5] xl:w-[40%] mb-6">{subtitle}</h3>
    
      </div>
    </section>
    </section>
  );
};

export default Baner;
