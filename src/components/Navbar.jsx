import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <nav className="fixed w-full">
      <div className="w-full relative  bg-white">
        <div className="w-full px-5 md:px-10 flex items-center gap-[50px] lg:gap-[100px] xl:gap-[200px] py-1 ">
          <div className="w-[140px] flex-0 cursor-pointer">
            <img className="w-full" src="/flavorLogo.svg" alt="" />
          </div>

          <div className="flex-1 hidden lg:block py-2 ">
            <div className="flex lg:w-2/3 xl:w-1/2 gap-20 text-xs tracking-3">
              <li className="duration-200 hover:-translate-y-1 whitespace-nowrap hover:text-[#FF6244]">
                <a href="#hero">Home</a>
              </li>
              <li className="duration-200 hover:-translate-y-1 whitespace-nowrap  hover:text-[#FF6244]">
                <a href="#menu">Our Menu</a>
              </li>
              <li className="duration-200 hover:-translate-y-1 whitespace-nowrap hover:text-[#FF6244]">
                <a href="#contact">Contact Us</a>
              </li>
            </div>
          </div>
          <a
            href="https://wa.me/8146586857?text=I'd like to place an order?"
            target="_blank"
            className="w-[150px] lg:w-[200px] cursor-pointer duration-200 hover:-translate-y-1"
          >
            <img className="w-full" src="/whatsappBtn.svg" alt="" />
          </a>

          <button
            className="lg:hidden absolute top-[50%] -translate-y-[50%] right-[10px] cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`lg:hidden ${
            isMobileMenuOpen ? "right-0" : "right-[-100%]"
          } fixed top-0  h-full w-full md:w-1/2 bg-white transition-all ease-in-out duration-300 z-50`}
        >
          <div className="p-4 mt-20 ">
            <a
              href="#hero"
              className="block py-2 hover:text-[#FF6244] cursor-pointer"
              onClick={toggleMobileMenu}
            >
              Home
            </a>
            <a
              href="#hero"
              className="block py-2 hover:text-[#FF6244] cursor-pointer"
              onClick={toggleMobileMenu}
            >
              Our Menu
            </a>
            <a
              href="#hero"
              className="block py-2 hover:text-[#FF6244] cursor-pointer"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </a>
            <div className="w-[200px] mt-10 cursor-pointer duration-200 hover:-translate-y-1">
              <img className="w-full" src="/whatsappBtn.svg" alt="" />
            </div>
          </div>

          <button
            className="absolute top-3 right-3 cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full py-4 bg-[#FF6244]"></div>
    </nav>
  );
}

export default Navbar;
