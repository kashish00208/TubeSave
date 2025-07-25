"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { title: "Home", link: "/" },
    { title: "How it works", link: "#howItworks" },
    { title: "FAQ", link: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-300 dark:border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-black dark:text-white">
          Tube<span className="text-blue-600">Save</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full py-2 px-4 transition-colors duration-300 font-medium ${
                activeIndex === i
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200 dark:hover:bg-neutral-700 text-black dark:text-white"
              }`}
            >
              {item.title}
            </a>
          ))}
          
        </nav>
        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 bg-white dark:bg-[#111] border-t border-gray-300 dark:border-gray-800">
          <div className="flex flex-col gap-3">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={() => {
                  setActiveIndex(i);
                  setMobileOpen(false);
                }}
                className={`w-full block text-center py-2 rounded-full font-medium transition ${
                  activeIndex === i
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-800 text-black dark:text-white"
                }`}
              >
                {item.title}
              </a>
            ))}
            
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
