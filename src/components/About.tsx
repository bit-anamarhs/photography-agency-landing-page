import React from "react";
import { MdArrowForward } from 'react-icons/md';
import Link from "next/link";
import Image from "next/image";


const About = () => {
  return (
    <>
      <div className="py-16 ">
        <div className="flex md:flex-row flex-col md:justify-center  md:align-middle align-top text-[#d0d0d0]">

          <div className="left-box md:w-1/2 w-full">
            <div className=" text-left md:h-32 h-20 md:mt-10 mt-2">
              <p className="text-[#808080]">(01)</p>
              <p>About Us</p>
            </div>
            <div className="md:w-[60%] w-full md:py-10 py-0 text-justify text-[#969595]">
              At CelestialUI, we pride ourselves on offering a personalized approach, ensuring every design resonates with your unique brand identity. Our team of experienced designers keeps up with the latest trends and technologies to provide modern, user-centric interfaces that not only look stunning but also enhance user engagement and drive results. From intuitive dashboards to immersive e-commerce layouts, we design with the end-user in mind, creating seamless interactions that leave a lasting impression. Backed by the expertise of Anamarhs Web Solutions, we leverage industry best practices to deliver solutions that are not only aesthetically pleasing but also optimized for performance across all platforms and devices. Our designs are crafted to be responsive, accessible, and future-proof, ensuring your digital presence stays relevant in a constantly evolving landscape. Choose CelestialUI to transform your digital vision into reality, where creativity meets functionality, and innovation knows no bounds. Let us elevate your brand to celestial heights with design excellence that speaks for itself.
            </div>
          </div>

          <div className="right-box md:w-1/2 w-full">
            <article className=" text-left text-[40px] mt-10  mb-5 leading-snug text-[#808080]">
              <span className="text-[#e7e7e7]">Photography</span> is driven by a deep passion for <span className="text-[#e7e7e7]"> capturing life's </span> most
              <span className="text-[#e7e7e7]"> precious moments </span> with artistry and a touch of magic.
            </article>
            <Link href="https://fstoppers.com/">
              <div className="buttons flex flex-row">
                <button className="capitalize border-2 border-[#8f8f8f] rounded-[50px] px-6 py-2 hover:bg-[#808080] hover:text-black hover:border-[#808080] focus:outline-none transform hover:scale-95 active:scale-95 transition-all shadow-md">Learn More </button>
              </div>
            </Link>
            <img src="/templates/about-us.jpeg" className="mt-10 rounded-2xl" alt="IMG" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
