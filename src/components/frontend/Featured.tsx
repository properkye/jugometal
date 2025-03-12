'use client'
import { Product } from "@/context/adminContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import ProductBox from "./ProductBox";

interface FeaterudProps {
  products: Product[] | null;
}

const Featured: React.FC<FeaterudProps> = ({ products }) => {
  return (
    <div className="my-14">
      <div className="wrapper">
        <Carousel className="w-full relative">
          <CarouselContent className="-ml-1 md:-ml-6 lg:-ml-8 xl:-ml-10">
            {products &&
              products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:pl-6 lg:pl-8 xl:pl-10 md:basis-1/2 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3"
                >
                  <ProductBox
                    product={product}
                    url={`/${product.category}/${product.subcategory}`}
                    border={true}
                  />
                </CarouselItem>
              ))}
          </CarouselContent>

          <div className="absolute top-[-2rem] right-[3rem]">
          <CarouselPrevious />
          <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Featured;
