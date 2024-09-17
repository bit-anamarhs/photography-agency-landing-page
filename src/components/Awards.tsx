import React, { useState } from "react";
import { Headline, CardTitle, CardDescription } from "@/components/ui/WorkCard";
import { MdArrowForward } from "react-icons/md";
import { awardsData } from "../../constants";
import { Award as AwardType } from "../../constants/types";

const Award = () => {
    const [selectedAward, setSelectedAward] = useState<AwardType>(awardsData[0]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); 

    const handleAwardClick = (award: AwardType, index: number) => {
        setSelectedAward(award);
        setHoveredIndex(null); 
    };

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index); 
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null); 
    };

    return (
        <section className="bg-[#1C1A1F] pt-10 text-white mt-20">
            <CardDescription className="py-4 text-[#808080]">(04) <br /> Awards</CardDescription>
            <div className="flex flex-col lg:flex-row justify-end items-start mb-12">
                <div className="max-w-xl">
                    <Headline className="text-left">
                        <span className="text-white font-bold">Award</span> is a pixel that <span className="text-white font-bold">reflecting</span> our ongoing <span className="text-white font-bold">dedication</span> to innovation and excellence
                    </Headline>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-14">
                <div className="flex flex-col lg:w-3/5 ">
                    {awardsData.map((award, index) => (
                        <div
                            key={index}
                            onClick={() => handleAwardClick(award, index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            className={`group relative cursor-pointer ${award === selectedAward ? "bg-[#363733] text-[#808080]" : ""}`}
                        >
                            <hr className={`absolute top-0 left-0 right-0 border-t border-[#363733] transition-colors duration-200 ${award === selectedAward ? "border-transparent" : ""}`} />
                            <div className={`p-4 rounded-lg transition-colors text-[#808080] ${award === selectedAward ? "bg-[#363733]" : hoveredIndex === index ? "bg-[#363733]" : "hover:bg-[#363733]"} h-28`}>
                                <div className="flex flex-row justify-between items-center">
                                    <p className="text-2xl font-bold">{award.year}</p>
                                    <p className="text-2xl w-2/5">{award.title}</p>
                                    <button
                                        className={`w-10 h-10 flex items-center justify-center border border-[#808080] rounded-full transition-all duration-200 ${award === selectedAward
                                                ? "bg-white border-white text-black rotate-[-45deg]"
                                                : hoveredIndex === index
                                                    ? "bg-white border-white text-black rotate-[-45deg]"
                                                    : "group-hover:bg-white group-hover:border-white group-hover:text-black group-hover:rotate-[-45deg]"
                                            }`}
                                    >
                                        <MdArrowForward size={24} className={`transition-all duration-200 ${award === selectedAward || hoveredIndex === index ? "text-black" : "text-[#808080]"}`} />
                                    </button>
                                </div>
                            </div>
                            <hr className={`absolute bottom-0 left-0 right-0 border-t border-[#363733] ${award === selectedAward ? "border-transparent" : ""} transition-colors duration-200`} />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:w-1/2 text-left">
                    <div className="relative w-full h-3/4 overflow-hidden rounded-2xl mx-auto">
                        <img
                            src={selectedAward.image} 
                            alt={selectedAward.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <CardTitle className="py-4">{selectedAward.title}</CardTitle>
                    <CardDescription className="text-[#808080]">
                        {selectedAward.description}
                    </CardDescription>
                </div>
            </div>
        </section>
    );
};

export default Award;