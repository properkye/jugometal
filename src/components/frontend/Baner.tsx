import { BanerProps } from "@/models/types";
import Image from "next/image";
import React from "react";
import HeroSection from "./HeroSection";

const Baner: React.FC<BanerProps> = ({ imgSrc, alt, title, subtitle, href }) => {
  return (
    <section className="w-full relative h-[500px]">
      <Image src={imgSrc} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <HeroSection title={title} subtitle={subtitle} href={href} />
    </section>
  );
};

export default Baner;
