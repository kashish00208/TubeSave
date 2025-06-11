"use client";
import React, { useState } from "react";

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navItems = [
    { title: "Home", link: "#home" },
    { title: "How it works", link: "#howItworks" },
    { title: "FAQ", link: "#faq" },
    { title: "About", link: "#about" },
  ];

  return (
    <div className="dark:bg-black transition-colors duration-300">
      <div className="">
        <div className="mx-5 top-5 rounded-2xl px-6 py-4 text-sm bg-white dark:bg-neutral-900 bg-opacity-95 text-black dark:text-white shadow-md">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-xl font-bold">TubeSave</div>

            {/* Desktop nav links */}
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

            {/* Auth buttons */}
            <div className="flex items-center gap-3 text-sm">
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
