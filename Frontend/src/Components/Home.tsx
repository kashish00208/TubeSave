import React from "react";
const MainPage = () => {
  return (
    <>
      <div className="relative w-full flex items-center justify-center bg-black overflow-hidden">
        <div
        />

        <div className="absolute inset-0 z-10 bg-black pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]" />
        <section className="flex items-center justify-center w-svw flex-col px-4 cursor">
          <div className="relative z-20 bg-black bg-opacity-90 p-6 rounded-lg">
            <h2 className="bg-clip-text text-center bg-gradient-to-b text-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 font-bold tracking-tight">
              Link. Click. Download. <br /> Your YouTube Shortcut.
            </h2>
            <p className="max-w-xl mx-auto text-white text-opacity-50 text-sm font-bold text-center">
              Instantly download any YouTube video—just paste the link. Fast,
              fuss-free, and perfect for non-premium users.
            </p>
          </div>
          <button className="p-2 bg-white  z-20 text-black rounded-md">Get started</button>
        </section>
      </div>
    </>
  );
};

export default MainPage;
