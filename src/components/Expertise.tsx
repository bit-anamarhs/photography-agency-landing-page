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
import MobileExpertise from "./MobileExpertise";

const Expertise = () => {
  // Image URLs
  const images = [
    "https://images.unsplash.com/photo-1590053404184-ce4ee04f3d58?q=80&w=1616&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?q=80&w=1614&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <>
      {/* Mobile view */}
      <div className="block md:hidden">
        <MobileExpertise />
      </div>

      {/* Desktop view */}
      <div className="hidden md:block gap-10 py-8">
        <div className="bg-[#363733] text-gray-300 md:ps-8 ps-2 py-6 rounded-2xl">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-4/5 w-full text-left">
              <p>(02)</p>
              <p>Our Expertise</p>
              <div className="text-2xl md:text-3xl md:w-[40%] w-full mt-2">
                When moments captured every dreams crafted into beautiful
                reality
              </div>
            </div>

            <div className="md:w-1/5 w-full mt-4 md:mt-0">
              {/* Optional: Add more content if needed */}
            </div>
          </div>
          <div className="md:mt-4 mt-6 grid grid-cols-4 gap-2">
            <div className="md:col-span-1 col-span-4">
              <div className="relative top-[60%]">
                <p className="text-xl md:text-2xl">
                  Chasing Clouds at Mont Blanc's Pinnacle.
                </p>
                <p className="address text-sm md:text-base text-[#9c9c9c]">
                  Mont Blanc, France
                </p>
              </div>
            </div>
            <div className="md:col-span-3 col-span-4 md:mt-4 mt-8">
              <div className="relative">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {images.map((data, index) => (
                      <CarouselItem
                        key={index}
                        className="flex justify-center items-center mt-10"
                      >
                        <div className="p-0">
                          <Card className="w-[90%] h-[46vw] mx-1 ms-14">
                            <CardContent className="flex items-center justify-center p-0">
                              <img
                                src={data}
                                className="w-full h-full object-cover rounded-xl carousel-image"
                                alt={`Expertise ${index}`}
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="relative transform -translate-y-1/2 translate-x-14 h-10 w-10 text-white bg-gray-700 p-2 rounded-full" />
                  <CarouselNext className="relative transform -translate-y-1/2 translate-x-10 h-10 w-10 text-white bg-gray-700 p-2 rounded-full" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
