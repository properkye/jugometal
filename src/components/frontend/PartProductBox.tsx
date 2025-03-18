import Image from "next/image";
import React from "react";
import PartTopCard from "./PartTopCard";
import { Product } from "@/context/adminContext";
import Link from "next/link";

interface ProductBoxProps {
  product: Product;
  url: string;
}

const PartProductBox: React.FC<ProductBoxProps> = ({ product, url }) => {
  return (
    <div
      className="bg-white rounded-md min-h-[580px] max-h-fit w-full p-4 max-w-[450px] relative"
      // style={{ border: border ? "1px solid #cecece" : "" }}
    >
      <PartTopCard title={product.name} />
      <div className="relative w-[100%] h-[fit] my-[2rem]">
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

      
      <div className="mt-4">
        {product.regular_price && (
          <p
            className={product.action_price ? "line-through text-gray-500" : ""}
          >
            Cena: {product.regular_price} RSD
          </p>
        )}

        {product.action_price && (
          <p className="text-red-500 font-bold">
            Akcija: {product.action_price} RSD
          </p>
        )}
      </div>

      <Link href={`${url}/${product.url}`} className="">
        <button className="w-full py-2 px-4 border border-black mt-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
          Detaljnije
        </button>
      </Link>
    </div>
  );
};

export default PartProductBox;
