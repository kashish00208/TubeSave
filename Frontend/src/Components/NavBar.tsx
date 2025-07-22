"use client";
import React, { useState } from "react";

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navItems = [
    { title: "Home", link: "/" },
    { title: "How it works", link: "#howItworks" },
    { title: "FAQ", link: "#faq" },
  ];

  return (
    <div className="dark:bg-black transition-colors duration-300 w-full fixed top-0 left-0 z-30">
      <div className="w-full">
        <div className="
          w-full
          rounded-none
          px-6
          py-3
          text-lg
          bg-white
          dark:bg-neutral-900
          bg-opacity-95
          text-black
          dark:text-white
          shadow-md
          border-b
          border-neutral-800/60
        ">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="text-xl font-bold">TubeSave</div>
            <div className="gap-4 hidden md:flex">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full py-2 px-4 transition-colors duration-300 font-medium ${
                    activeIndex === i
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-200 dark:hover:bg-neutral-700"
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3 text-lg">
              <button className="text-blue-600 dark:text-blue-400 hover:underline">
                Sign Up
              </button>
              <span className="text-gray-400 dark:text-gray-600">|</span>
              <button className="text-blue-600 dark:text-blue-400 hover:underline">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
