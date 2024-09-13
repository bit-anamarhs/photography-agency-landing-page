import React from 'react'; 
import Contact from './Contact';

const Footer = () => {
  return (
    <div className="py-10 lg:w-full lg:max-w-7xl md:px-5 sm:px-5">
      <div className="bg-[#363733] text-gray-300 py-5 rounded-2xl">
        <Contact />
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row lg:flex-row sm:items-center justify-between space-y-5 sm:space-y-5">
            {/* Logo and text */}
            <div className="flex items-center space-x-2 text-white text-lg">
              <img src='/logo.png' className='w-12 h-12 rounded-2xl' alt="Logo" /> 
              <p className="text-center sm:text-left">CeelestialUI</p>
            </div>
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-96">
              <a href="#" className="hover:underline">About Us</a>
              <a href="#" className="hover:underline">Project</a>
              <a href="#" className="hover:underline">Services</a>
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </div>
            {/* Address */}
            <p className="text-sm text-center sm:text-left w-full sm:w-auto">
              ©CeelestialUI 2023. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
