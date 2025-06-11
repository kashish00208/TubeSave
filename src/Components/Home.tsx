import React from "react";
import { cn } from "@/lib/utils";

const MainPage = () => {
  return (
    <div className="relative w-full flex items-center justify-center bg-white dark:bg-black overflow-hidden">
      <div
      />
      <div className="absolute inset-0 z-10 bg-white dark:bg-black pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <section className="relative z-20 flex items-center justify-center flex-col w-full px-4 text-center py-20">
        <div className="bg-white dark:bg-neutral-900 bg-opacity-90 dark:bg-opacity-90 p-6 rounded-xl shadow-lg max-w-3xl w-full">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-800 dark:from-white dark:to-neutral-300 text-3xl md:text-5xl lg:text-7xl font-bold font-sans tracking-tight mb-6">
            Link. Click. Download. <br /> Your YouTube Shortcut.
          </h2>
          <p className="text-sm md:text-base font-medium text-black dark:text-gray-300 max-w-xl mx-auto">
            Instantly download any YouTube video—just paste the link. Fast, fuss-free, and perfect for non-premium users.
          </p>
        </div>

        <button className="mt-8 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md text-sm font-semibold shadow transition hover:scale-105">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default MainPage;
