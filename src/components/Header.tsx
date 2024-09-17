import React from "react";
import HeaderButton from "./ui/HeaderButton";
import HeaderCard from "./HeaderCard";

const Header = () => {
  return (
    <section className="max-container px-4 sm:px-6 md:px-10 flex flex-col gap-10 sm:gap-16 md:gap-20 py-6 sm:py-8 md:py-10 pb-16 sm:pb-24 md:pb-32 lg:gap-28 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7px text-white leading-tight mt-44">
          Capturing beautiful <br className="hidden sm:inline" />
          moment inside lens and <br className="hidden sm:inline" />
          shutterspeed
        </h1>
        <div className="flex flex-col w-full sm:w-auto mt-10 sm:mt-16 md:mt-24 lg:mt-30 xlg:mt-10">
        
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <HeaderButton
              type="button"
              title="Landscape"
              variant="btn_white_text transform transition-all duration-500 ease-in-out hover:bg-white hover:text-[#7f7f81] hover:scale-105 hover:translate-y-1"
            />
            <HeaderButton
              type="button"
              title="Wildlife"
              variant="btn_white_text transform transition-all duration-500 ease-in-out hover:bg-white hover:text-[#7f7f81] hover:scale-105 hover:translate-y-1"
            />
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 sm:mt-3">
            <HeaderButton
              type="button"
              title="Architectural"
              variant="btn_white_text transform transition-all duration-500 ease-in-out hover:bg-white hover:text-[#7f7f81] hover:scale-105 hover:translate-y-1"
            />
            <HeaderButton
              type="button"
              title="Travel"
              variant="btn_white_text transform transition-all duration-500 ease-in-out hover:bg-white hover:text-[#7f7f81] hover:scale-105 hover:translate-y-1"
            />
            <HeaderButton
              type="button"
              title="Portrait"
              variant="btn_white_text transform transition-all duration-500 ease-in-out hover:bg-white hover:text-[#7f7f81] hover:scale-105 hover:translate-y-1"
            />
          </div>
        </div>
      </div>

      <div className="mt-80 hidden xl:block">
        <HeaderCard />
      </div>
    </section>
  );
};

export default Header;
