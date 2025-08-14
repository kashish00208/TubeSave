"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Star } from "lucide-react";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-300 dark:border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-black dark:text-white">
          Tube<span className="text-blue-600">Save</span>
        </Link>

        <nav className="hidden md:flex items-center">
          <a
            href="https://github.com/kashish00208/TubeSave"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2 px-5 font-medium flex items-center gap-2 transition-colors duration-300"
          >
            <Star size={18} className="text-black fill-black" />
            Start it on GitHub
          </a>
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
            <a
              href="https://github.com/kashish00208/TubeSave"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full  text-center py-2 rounded-full font-medium bg-blue-600 hover:bg-blue-700 text-white transition flex items-center justify-center gap-2"
            >
              <Star size={18} className="text-black fill-black" />
              Star it on GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
