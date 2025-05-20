import Link from "next/link";
import Image from "next/image";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const MenuBar = () => setIsOpen(!isOpen);

  return (
    <div className="custom-container">
      <div className="flex items-center justify-between py-6">
        <div className="w-auto h-auto">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={180}
            height={60}
            className="max-w-[200px] max-h-[60px]"
          />
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <Link href="/aboutus">
            <button className="text-[#000000] font-normal group cursor-pointer">
              About Us
              <p className="w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300"></p>
            </button>
          </Link>
          <Link href="/services">
            <button className="text-[#000000] font-normal group cursor-pointer">
              Services
              <p className="w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300"></p>
            </button>
          </Link>
          <Link href="/usecases">
            <button className="text-[#000000] font-normal group cursor-pointer">
              UseCases
              <p className="w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300"></p>
            </button>
          </Link>
          <Link href="/pricing">
            <button className="text-[#000000]  font-normal group cursor-pointer">
              Pricing
              <p className="w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300"></p>
            </button>
          </Link>
          <Link href="/blog">
            <button className="text-[#000000] group font-normal cursor-pointer">
              Blog
              <p className="w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300"></p>
            </button>
          </Link>
          <button className="text-black border cursor-pointer border-black rounded-xl px-4 py-2 hover:bg-black hover:text-white transition duration-300">
            Request a quote
          </button>
        </div>
        <div className="lg:hidden">
          <button onClick={MenuBar} className="cursor-pointer">
            <RiMenuFill className="text-black font-extrabold" size={28} />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-slate-800 bg-opacity-90 text-white fixed px-20 top-0 left-0 h-screen z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={MenuBar}
          className="absolute top-4 right-4 text-white text-3xl"
        >
          <RxCross2 />
        </button>

        <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
          <Link href="/aboutus" onClick={MenuBar}>
            <button className="group rounded-2xl p-3 w-full text-center">
              About Us
              <p className="w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300"></p>
            </button>
          </Link>
          <Link href="/services" onClick={MenuBar}>
            <button className="group rounded-2xl p-3 w-full text-center">
              Services
              <p className="w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300"></p>
            </button>
          </Link>
          <Link href="/usecases" onClick={MenuBar}>
            <button className="group rounded-2xl p-3 w-full text-center">
              UseCases
              <p className="w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300"></p>
            </button>
          </Link>
          <Link href="/pricing" onClick={MenuBar}>
            <button className="group rounded-2xl p-3 w-full text-center">
              Pricing
              <p className="w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300"></p>
            </button>
          </Link>
          <Link href="/blog" onClick={MenuBar}>
            <button className="group rounded-2xl p-3 w-full text-center">
              Blog
              <p className="w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300"></p>
            </button>
          </Link>
          <button className="border border-white hover:bg-white hover:text-black cursor-pointer rounded-xl mt-2 transition duration-300 px-4 py-2 ">
            Request a quote
          </button>
        </div>
      </div>
    </div>
  );
}
