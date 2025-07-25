"use client"
import React from "react";
import { useRouter } from "next/navigation";
const MainPage = () => {
  const router = useRouter();
  const handlesubmit = () =>{
    router.push("/Audio")
  }
  return (
    <>
      <div className="relative w-full flex items-center justify-center bg-black overflow-hidden mt-16">
        <div />
        <div className="absolute inset-0 z-10 bg-black pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]" />
        <section className="flex items-center justify-center w-svw flex-col px-4 cursor ">
          <div className="relative z-20 bg-black bg-opacity-90 p-6 rounded-lg">
            <h2 className="bg-clip-text text-center bg-gradient-to-b text-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 font-bold tracking-tight">
              Link. Click. Download. <br /> Your YouTube Shortcut.
            </h2>
            <p className="max-w-xl mx-auto text-white text-opacity-50 text-sm font-bold text-center">
              Instantly download any YouTube video—just paste the link. Fast,
              fuss-free, and perfect for non-premium users.
            </p>
          </div>
          <button onClick={handlesubmit} className="z-20 mt-6 px-8 py-4 bg-white text-black rounded-md font-semibold text-base transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-400 hover:text-white shadow-lg flex items-center gap-3">
            Try it out
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
          </button>
        </section>
      </div>
    </>
  );
};

export default MainPage;
