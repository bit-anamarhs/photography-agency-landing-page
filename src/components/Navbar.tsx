"use client";
import { useState } from "react";
import { NAV_LINKS } from "../../constants";
import Link from "next/link";
import ButtonForm from "./ButtonForm";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flexBetween max-container px-10 py-5 relative top-0 left-0 right-0 z-30 bg-gradient-to-b from-transparent to-transparent">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <img src="/logo.png" alt="CeelestialUI" className="rounded-2xl w-12 h-12" />
        </Link>
        <p className="text-[#ffffff] text-lg font-semibold">CeelestialUI</p>
      </div>

      {/* Desktop Links */}
      <ul className="hidden lg:flex gap-6 items-center rounded-full bg-[#bebebedc] p-3 px-4">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="flex items-center relative">
            <Link
              href={link.href}
              className="pr-5 text-[#1C1A1F] hover:text-[#7f7f81] cursor-pointer flex items-center"
            >
              {link.label}
            </Link>

            <div className="w-[1px] h-6 bg-[#d1d0d0] mx-2"></div>
          </li>
        ))}
      </ul>

      {/* BOOK A CALL button */}
      <div className="lg:flex hidden items-center">
        <ButtonForm title="BOOK A CALL" variant="btn_dark_green" />
        <div
          className="relative w-12 h-12 inline-flex items-center justify-center bg-white hover:bg-[#7f7f81] rounded-full shadow-md cursor-pointer focus:outline-none transform hover:scale-95 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-gray-800"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7l-10 10M17 7H6.5M17 7v10" />
          </svg>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={handleMobileMenuToggle}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Links */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center py-5 overflow-y-auto">
          <button
            className="absolute top-14 right-14 text-white focus:outline-none"
            onClick={handleMobileMenuToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col items-center gap-6 mb-8">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="w-full text-center">
                <Link
                  href={link.href}
                  className="block py-2 text-white hover:text-gray-300 transition-all"
                  onClick={handleMobileMenuToggle}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-4">
            <ButtonForm title="BOOK A CALL" variant="btn_dark_green" />
            <button className="w-12 h-12 inline-flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 7l-10 10M17 7H6.5M17 7v10"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
