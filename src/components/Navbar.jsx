import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <nav class="fixed w-full">
      <div class="w-full relative  bg-white">
        <div class="w-full px-5 md:px-10 flex items-center gap-[50px] lg:gap-[100px] xl:gap-[200px] py-1 ">
          <div class="w-[140px] flex-0 cursor-pointer">
            <img class="w-full" src="/flavorLogo.svg" alt="" />
          </div>

          <div class="flex-1 hidden lg:block py-2 ">
            <div class="flex lg:w-2/3 xl:w-1/2 gap-20 text-xs tracking-3">
              <li class="duration-200 hover:-translate-y-1 whitespace-nowrap hover:text-[#FF6244]">
                <a href="#hero">Home</a>
              </li>
              <li class="duration-200 hover:-translate-y-1 whitespace-nowrap  hover:text-[#FF6244]">
                <a href="#menu">Our Menu</a>
              </li>
              <li class="duration-200 hover:-translate-y-1 whitespace-nowrap hover:text-[#FF6244]">
                <a href="#hero">Contact Us</a>
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
            class="lg:hidden absolute top-[50%] -translate-y-[50%] right-[10px] cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div
          class={`lg:hidden ${
            isMobileMenuOpen ? "right-0" : "right-[-100%]"
          } fixed top-0  h-full w-full md:w-1/2 bg-white transition-all ease-in-out duration-300 z-50`}
        >
          <div class="p-4 mt-20 ">
            <a
              href="#hero"
              class="block py-2 hover:text-[#FF6244] cursor-pointer"
              onClick={toggleMobileMenu}
            >
              Home
            </a>
            <a
              href="#hero"
              class="block py-2 hover:text-[#FF6244] cursor-pointer"
              onClick={toggleMobileMenu}
            >
              Our Menu
            </a>
            <a
              href="#hero"
              class="block py-2 hover:text-[#FF6244] cursor-pointer"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </a>
            <div className="w-[200px] mt-10 cursor-pointer duration-200 hover:-translate-y-1">
              <img className="w-full" src="/whatsappBtn.svg" alt="" />
            </div>
          </div>

          <button
            class="absolute top-3 right-3 cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="w-full py-4 bg-[#FF6244]"></div>
    </nav>
  );
}

export default Navbar;
