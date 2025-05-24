import React from "react";
import { BackgroundLines } from "./background-lines";

const MainPage = () => {
  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-svw flex-col px-4 cursor">
        <h2 className="bg-clip-text text-center bg-gradient-to-b from-black to-neutral-800 dark:from-neutral-200 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Link. Click. Download. <br /> Your YouTube Shortcut.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-black dark:text-neutral-900 text-center">
          Instantly download any YouTube video—just paste the link. Fast,
          fuss-free, and perfect for non-premium users.
        </p>
        <button className="justify-center text-center p-2 m-10 rounded-xl border-3 bg-black text-white">Sign up to get started </button>
      </BackgroundLines>
    </>
  );
};

export default MainPage;
