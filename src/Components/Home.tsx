import React from "react";
import { cn } from "@/lib/utils";
const MainPage = () => {
  return (
    <>
      <div className="relative w-full flex items-center justify-center bg-white overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 z-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
          )}
        />

        <div className="absolute inset-0 z-10 bg-white pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]" />
        <section className="flex items-center justify-center w-svw flex-col px-4 cursor">
          <div className="relative z-20 bg-white bg-opacity-90 p-6 rounded-lg">
            <h2 className="bg-clip-text text-center bg-gradient-to-b from-black to-neutral-800 dark:from-neutral-200 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 font-bold tracking-tight">
              Link. Click. Download. <br /> Your YouTube Shortcut.
            </h2>
            <p className="max-w-xl mx-auto text-black text-sm font-bold text-center">
              Instantly download any YouTube video—just paste the link. Fast,
              fuss-free, and perfect for non-premium users.
            </p>
          </div>
          <button className="p-2 bg-black  z-20 text-white rounded-md">Get started</button>
        </section>
      </div>
    </>
  );
};

export default MainPage;
