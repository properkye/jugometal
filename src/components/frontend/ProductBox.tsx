"use client";
import { Product } from "@/context/adminContext";
import Image from "next/image";
import React from "react";
import TopCard from "./TopCard";
import Link from "next/link";

interface ProductBoxProps {
  product: Product;
  url:string,
  border?:boolean
}

const ProductBox: React.FC<ProductBoxProps> = ({ product, url, border }) => {
  return (
    <div className="bg-white rounded-md min-h-[580px] max-h-fit w-full p-4 max-w-[450px] relative"
    style={{border:border ? '1px solid #cecece' : ''}}>
      <TopCard title={product.name} brand={product.brand} />
      <div className="relative w-[100%] h-[300px] my-[2rem]">
        <Image
          src={product.images[0]}
          priority={true}
          alt={product.description_one}
          width={200}
          height={200}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <p>{product.description_one}</p>
      <Link href={`${url}/${product.url}`} className="absolute bottom-4 left-4 right-4">
        <button
          className="w-full py-2 px-4 border border-black mt-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
        >
          Detaljnije
        </button>
      </Link>
    </div>
  );
};
export default ProductBox;
