// import Image from 'next/image';
import { CategoryBoxProps } from "@/models/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryItemBox: React.FC<CategoryBoxProps> = ({
  alt,
  quantity,
  link,
  image,
}) => {
  return (
    <Link href={link}>
      <section className=" my-8 bg-white h-[400px] w-[full] rounded-lg overflow-hidden relative cursor-pointer ">
        <div className="relative w-[70%] h-full  mx-auto">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 40vw"
            style={{ objectFit: "contain" }}
          />
        </div>
        <h3 className="absolute top-4 left-4">
          <span className="font-bold text-[1.5rem]">{quantity}</span>
        </h3>
        <h1 className="absolute bottom-4 left-4">Pogledajte proizvode</h1>
      </section>
    </Link>
  );
};

export default CategoryItemBox;
