"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowDownToLine, Github, Menu, Star, X } from "lucide-react";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="TubeSave home"
        >
          <span className="text-xl font-bold tracking-tight">
            <span className="mr-3 inline-flex h-9 w-9 translate-y-2 items-center justify-center rounded-lg bg-white text-black transition-transform group-hover:-rotate-6">
              <ArrowDownToLine size={19} strokeWidth={2.5} />
            </span>
            Tube<span className="text-slate-400">Save</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center">
          <a
            href="https://github.com/kashish00208/TubeSave"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.06] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            <Github size={17} />
            <span>GitHub</span>
            <Star
              size={14}
              className="text-slate-400 transition group-hover:text-white"
            />
          </a>
        </nav>

        <button
          className="rounded-lg border border-white/15 p-2 text-slate-300 transition hover:border-white/40 hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black px-5 pb-5 pt-4 md:hidden sm:px-8">
          <div className="mx-auto max-w-6xl">
            <a
              href="https://github.com/kashish00208/TubeSave"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/[0.06] py-3 font-medium text-slate-200 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              <Github size={18} />
              Visit TubeSave on GitHub
              <Star size={15} className="text-slate-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
