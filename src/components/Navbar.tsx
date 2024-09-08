"use client";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "../../constants";
import Link from "next/link";
import ButtonForm from "./ButtonForm";
import ProductPreview from "./product/ProductPreview";
import MobileProductPreview from "./product/MobileProductPreview";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  //product page
  const [isProductPreviewOpen, setIsProductPreviewOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsProductPreviewOpen(!isProductPreviewOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const previewElement = document.querySelector(".product-preview");
    if (previewElement && !previewElement.contains(e.target as Node)) {
      setIsProductPreviewOpen(false);
    }
  };

  useEffect(() => {
    if (isProductPreviewOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isProductPreviewOpen]);

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
        {NAV_LINKS.map((link, index) => (
          <li key={link.key} className="flex items-center relative">
            <Link
              href={link.href}
              className="pr-5 text-[#1C1A1F] hover:text-[#7f7f81] cursor-pointer flex items-center"
              onClick={link.key === 'Products' ? handleLinkClick : undefined}
            >
              {link.label}
              {link.key === 'Products' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform ${isProductPreviewOpen ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </Link>

            {index < NAV_LINKS.length - 1 && (
              <div className="w-[1px] h-6 bg-[#d1d0d0] mx-2"></div>
            )}
          </li>
        ))}
      </ul>

      {/* Product Preview */}
      {isProductPreviewOpen && (
        <div className="absolute top-[70%] left-32 mt-2 w-[28rem] shadow-lg product-preview">
          <ProductPreview />
        </div>
      )}

      {/* BOOK A CALL button */}
      <div className="lg:flex hidden items-center">
<<<<<<< HEAD
        <ButtonForm title="BOOK A CALL" variant="btn_dark_green" />
        {/* <div className="relative w-12 h-12 inline-flex items-center justify-center bg-white hover:bg-[#7f7f81] rounded-full shadow-md cursor-pointer focus:outline-none transform hover:scale-95 active:scale-95">
=======
        <ButtonForm
          title="BOOK A CALL"
          variant="btn_dark_green"
        />
        <div
          className="relative w-12 h-12 inline-flex items-center justify-center bg-white hover:bg-[#7f7f81] rounded-full shadow-md cursor-pointer focus:outline-none  transform hover:scale-95 active:scale-95"
        >
>>>>>>> fdc864845ed210032b7c921f77eb2c47d01e4c33
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-gray-800"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7l-10 10M17 7H6.5M17 7v10" />
          </svg>
<<<<<<< HEAD
        </div> */}
=======

        </div>
>>>>>>> fdc864845ed210032b7c921f77eb2c47d01e4c33
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
                  className={`block py-2 text-white hover:text-gray-300 transition-all ${link.key === 'Products' ? 'flex justify-center items-center' : ''
                    }`}
                  onClick={link.key === 'Products' ? handleLinkClick : handleMobileMenuToggle}
                >
                  {link.label}
                  {link.key === 'Products' && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ml-1 transition-transform ${isProductPreviewOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {link.key === 'Products' && isProductPreviewOpen && (
                  <div className="mt-2 shadow-lg product-preview">
                    <MobileProductPreview />
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-4">
            <ButtonForm title="BOOK A CALL" variant="btn_dark_green" />
            {/* <button className="w-12 h-12 inline-flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none">
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
            </button> */}
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;