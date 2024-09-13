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

const MobileExpertise = () => {
  // Image URLs
  const images = [
    "https://images.unsplash.com/photo-1590053404184-ce4ee04f3d58?q=80&w=1616&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?q=80&w=1614&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

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
              {images.map((data, index) => (
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
            <CarouselPrevious className="absolute -bottom-2 transform -translate-y-1 text-white bg-gray-700 p-3 rounded-full shadow-lg z-10" />
            <CarouselNext className="absolute  -bottom-2 transform -translate-y-1 text-white bg-gray-700 p-3 rounded-full shadow-lg z-10" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MobileExpertise;
