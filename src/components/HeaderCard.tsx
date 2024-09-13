"use client";

import React, { useState, useRef, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { carouselData } from "../../constants";

const HeaderCard = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalItems = carouselData.length;

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (maxScrollLeft > 0) {
          const scrollFraction = scrollLeft / maxScrollLeft;
          setScrollProgress(scrollFraction * 100);

          const visibleItemIndex = Math.min(
            Math.floor((scrollLeft / maxScrollLeft) * (totalItems - 1)),
            totalItems - 1
          );
          setCurrentItemIndex(visibleItemIndex);
        }
      }
    };

    const carouselElement = carouselRef.current;
    const handleResize = () => handleScroll();

    const handleImageLoad = () => {
      handleScroll(); 
    };

    if (carouselElement) {
      carouselElement.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      const images = carouselElement.querySelectorAll("img");
      images.forEach((img) => img.addEventListener("load", handleImageLoad));
    }
    handleScroll();

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [totalItems]);

  return (
    <>
      <div className="flex items-center justify-between w-full relative mb-4">
        <span className="text-sm font-medium text-white">
          {String(currentItemIndex + 1).padStart(2, '0')}
        </span>
        <div className="relative flex-1 mx-4">
          <hr className="absolute inset-0 border-t-2 border-gray-400" />

          <div
            className="absolute bg-white h-[2px] rounded-full transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <span className="text-sm font-medium text-white">
          {String(totalItems).padStart(2, '0')}
        </span>
      </div>

      <Carousel opts={{ align: "start" }} className="w-full max-w-[250px] md:max-w-[350px] h-44">
        <CarouselContent ref={carouselRef} className="carousel-container flex space-x-2">
          {carouselData.map((item, index) => (
            <CarouselItem key={index} className="w-[250px] md:w-[350px] flex-shrink-0 carousel-item">
              <div className="flex flex-col md:flex-row p-2 rounded-md h-32 btn_white cursor-pointer">
  
                <div className="flex-shrink-0">
                  <img
                    src={item.imgSrc}
                    alt={`Image ${index + 1}: ${item.title}`}
                    className="aspect-square w-[98px] h-[98px] rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col justify-center ml-4 h-full">
                  <h2 className="text-lg font-medium mb-1">{item.title}</h2>
                  <p className="mt-4 text-white">{item.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default HeaderCard;
