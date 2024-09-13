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
import {ExpertiseImages} from "../../constants/index"

const Expertise = () => {  

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
                    {ExpertiseImages.map((data, index) => (
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
