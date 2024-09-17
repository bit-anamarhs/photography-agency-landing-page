"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {ExpertiseImages} from "../../constants/index"

const MobileExpertise = () => {

  return (
    <div className="gap-4 py-6 px-2">
      <div className="bg-[#363733] text-gray-300 px-4 py-4 rounded-2xl relative">
        <div className="text-center mb-4">
          <p className="text-lg font-semibold">Our Expertise</p>
          <h2 className="text-xl md:text-2xl mt-2">
            When moments captured every dreams crafted into beautiful reality
          </h2>
        </div>
        <div className="mb-4">
          <p className="text-base font-semibold text-center">
            Chasing Clouds at Mont Blanc's Pinnacle.
          </p>
          <p className="text-sm text-center text-[#9c9c9c]">
            Mont Blanc, France
          </p>
        </div>
        <div className="relative">
          <Carousel opts={{ align: "start" }} className="w-full ">
            <CarouselContent>
              {ExpertiseImages.map((data, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center items-center overflow-visible"
                >
                  <Card className="w-full h-[67vw] mx-2">
                    <CardContent className="flex items-center justify-center p-0">
                      <img
                        src={data}
                        className="w-full h-full rounded-xl carousel-image"
                        alt={`Expertise ${index}`}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -bottom-2 transform -translate-y-1 mt-4 text-white bg-gray-700 p-3 rounded-full shadow-lg z-10" />
            <CarouselNext className="absolute  -bottom-2 transform -translate-y-1 mt-4 text-white bg-gray-700 p-3 rounded-full shadow-lg z-10" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MobileExpertise;
