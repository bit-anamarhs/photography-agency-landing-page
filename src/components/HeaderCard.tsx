"use client";

import React, { useState, useRef, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { carouselData } from "../../constants";

const HeaderCard = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalItems = carouselData.length;
  const scrollInterval = 5000; // Increase to 5 seconds for better visibility

  useEffect(() => {
    const updateIndex = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (maxScrollLeft > 0) {
          const scrollFraction = scrollLeft / maxScrollLeft;
          setScrollProgress(scrollFraction * 100);

          // Calculate index with better precision
          const index = Math.min(
            Math.floor((scrollLeft / clientWidth) + 0.5),
            totalItems - 1
          );
          setCurrentItemIndex(index);
        }
      }
    };

    const handleResize = () => updateIndex();

    const autoScroll = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const itemWidth = clientWidth; // Width of each carousel item

        // Check if we are at the last item
        if (scrollLeft + itemWidth >= scrollWidth - 1) {
          // Scroll back to the first item immediately
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
          setCurrentItemIndex(0); // Reset the current item index to 0 (first item)
        } else {
          // Scroll to the next item
          const nextScrollPosition = Math.min(scrollLeft + itemWidth, scrollWidth - clientWidth);
          carouselRef.current.scrollTo({ left: nextScrollPosition, behavior: "smooth" });

          // Update current item index
          setCurrentItemIndex((prevIndex) => (prevIndex + 1) % totalItems);
        }
      }
    }, scrollInterval);

    // Add event listeners
    window.addEventListener("resize", handleResize);
    updateIndex(); // Initial update

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(autoScroll); // Clear interval on unmount
    };
  }, [totalItems]);

  return (
    <>
      {/* Highlight section */}
      <div className="flex items-center justify-between w-full relative mb-4">
        <span className="text-sm font-medium text-white">
          {String(currentItemIndex + 1).padStart(2, '0')}
        </span>
        <div className="relative flex-1 mx-4">
          <hr className="absolute inset-0 border-t-2 border-gray-400" />
          {/* Highlight bar */}
          <div
            className="absolute bg-white h-[2px] rounded-full transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <span className="text-sm font-medium text-white">
          {String(totalItems).padStart(2, '0')}
        </span>
      </div>

      {/* Carousel */}
      <Carousel opts={{ align: "start" }} className="w-full max-w-[250px] md:max-w-[350px] h-44">
        <CarouselContent ref={carouselRef} className="carousel-container flex space-x-2">
          {carouselData.map((item, index) => (
            <CarouselItem key={index} className="w-[250px] md:w-[350px] flex-shrink-0 carousel-item">
              <div className="flex flex-col md:flex-row p-2 rounded-md h-32 btn_white cursor-pointer">
                {/* Image on the left side */}
                <div className="flex-shrink-0">
                  <img
                    src={item.imgSrc}
                    alt={`Image ${index + 1}: ${item.title}`}
                    className="aspect-square w-[98px] h-[98px] rounded-lg object-cover"
                    loading="lazy" // Lazy load the images
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
