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
import { MdArrowRightAlt } from "react-icons/md";

const Expertise = () => {
  // image urls
  const images = [
    "https://images.unsplash.com/photo-1590053404184-ce4ee04f3d58?q=80&w=1616&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?q=80&w=1614&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  return (
    <>
      <div className="gap-20 py-10">
        <div className="bg-[#363733] text-gray-300 md:ps-10 ps-4 py-7 rounded-2xl">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-4/5 w-full text-left">
              <p>(02)</p>
              <p>Our Expertise</p>
              <div className="text-3xl md:w-[40%] w-full">
                When moments captured every dreams crafted into beautiful
                reality
              </div>
            </div>

            <div className="md:w-1/5 w-full mt-8">
              <ul className="leading-10 text-2xl">
                <li>Landscapes</li>
                <li>WildLife</li>
                <li>Architectural</li>
                <li>Travel</li>
                <li>Portrait</li>
              </ul>
            </div>
          </div>
          <div className="md:mt-3 mt-2 grid grid-cols-4">
            <div className="md:col-span-1 col-span-4">
              <div className="relative top-[60%]">
                <p className="text-[24px]">
                  Chasing Clouds at Mont Blanc's Pinnacle.
                </p>
                <p className="address text-[16px]">Mont Blanc, France</p>
              </div>
            </div>
            <div className="md:col-span-3 col-span-4 mt-12">
              <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent>
                  {images.map((data, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="">
                        <Card className="transform transition-transform duration-300 hover:scale-105">
                          <CardContent className="flex aspect-square items-center justify-center p-2">
                            <img src={data} className="h-full w-full rounded-xl" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="mt-12 flex flex-row align-middle">
                <span className="text-[25px]">See all</span>
                <span>
                  <MdArrowRightAlt className="h-10 w-16" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
