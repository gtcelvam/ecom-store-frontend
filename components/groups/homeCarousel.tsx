"use client";
import react, { FC, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CAROUSEL_IMAGE } from "@/utils/constants";
import Image from "next/image";
import { HomeCarouselType } from "@/types/component";

const HomeCarousel: FC<HomeCarouselType> = (props) => {
  //props
  const { bannerList = [] } = props;

  //plugin
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="w-full">
      <Carousel className="w-full" plugins={[plugin.current]}>
        <CarouselContent>
          {bannerList.map((item) => (
            <CarouselItem key={item}>
              <Image
                src={item}
                width={2600}
                height={300}
                alt="carousel-image"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
