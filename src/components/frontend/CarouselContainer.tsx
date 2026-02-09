"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import HeroSection from "./HeroSection";

import { CarouselContainerProps } from "@/models/types";

const CarouselContainer: React.FC<CarouselContainerProps> = ({ items }) => {
  return (
    <section>
      <Carousel
        className="w-full relative"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 3000 })]} // Automatsko okretanje na svakih 3 sekunde
      >
        <CarouselContent className="h-[500px]">
          {items.map((item, i) => (
            <CarouselItem key={i}>
              <div className="w-full h-full relative">
                <Image
                  src={item.imgSrc}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
                <HeroSection
                  title={item.title}
                  subtitle={item.subtitle}
                  href={item.href}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default CarouselContainer;
