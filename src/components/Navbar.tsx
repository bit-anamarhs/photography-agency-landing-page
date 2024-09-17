"use client";
import { useState } from "react";
import { NAV_LINKS } from "../../constants";
import Link from "next/link";
import ButtonForm from "./ButtonForm";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductPreviewOpen, setIsProductPreviewOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (key: string) => {
    if (key === "Products") {
      setIsProductPreviewOpen(!isProductPreviewOpen);
    }
  };

  return (
    <nav className="fixed rounded-full top-10 left-0 right-0 z-50 flexBetween max-w-screen-xl mx-auto px-5 lg:px-5 py-2 bg-white/30 backdrop-blur-md">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <img
            src="/logo.png"
            alt="CeelestialUI"
            className="rounded-2xl w-12 h-12"
          />
        </Link>
        <p className="text-[#ffffff] text-lg font-semibold">CeelestialUI</p>
      </div>

      {/* Desktop Links */}
      <ul className="hidden lg:flex gap-4 items-center rounded-full bg-[#bebebedc] p-3 px-4 lg:ml-10">
        {NAV_LINKS.map((link, index) => (
          <li key={link.key} className="flex items-center relative">
            <Link
              href={link.href}
              className="pr-5 text-[#1C1A1F] hover:text-[#7f7f81] cursor-pointer flex items-center"
              onClick={() => handleLinkClick(link.key)}
            >
              {link.label}
            </Link>

            {index < NAV_LINKS.length - 1 && (
              <div className="w-[1px] h-6 bg-[#d1d0d0] mx-2"></div>
            )}
          </li>
        ))}
      </ul>

      <div className="lg:flex hidden items-center ml-11">
        <ButtonForm title="BOOK A CALL" variant="btn_dark_green" />
      </div>

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

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-gray-500 flex flex-col py-5 px-4">
          <button
            className="absolute top-5 right-5 text-white"
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

          <div className="flex justify-start px-4 mb-4">
            <ButtonForm title="BOOK A CALL" variant="btn_dark_green" />
          </div>

          <ul className="flex flex-col items-center gap-6 mb-8 flex-grow">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="w-full text-center">
                <Link
                  href={link.href}
                  className="block py-3 text-white text-lg hover:text-gray-300 transition-all"
                  onClick={handleMobileMenuToggle}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-4 px-4 mb-4"></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
