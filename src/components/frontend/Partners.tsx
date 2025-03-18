"use client";
import Autoplay from "embla-carousel-autoplay";
import { partneri } from "@/data";
import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const PartnersCarousel: React.FC = () => {
  return (
    <div className="my-10">
      <div className="wrapper">
        <Carousel
          className="w-full"
          plugins={[Autoplay({ delay: 3000 })]}
          opts={{ loop: true }}
        >
          <CarouselContent className="-ml-1 md:-ml-6 lg:-ml-8 xl:-ml-10">
            {partneri.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-1/3 md:pl-6 lg:pl-8 xl:pl-10 md:basis-1/5 lg:basis-1/6 xl:basis-1/5 2xl:basis-1/5"
              >
                <div className=" relative w-[100px] h-[100px] xl:w-[150px] xl:h-[150px]">
                  <Image
                    alt={item.alt}
                    src={item.image}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, 200px"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default PartnersCarousel;
