"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const MainPage = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const handleSubmit = () => {
    router.push(`/Video?url=${encodeURIComponent(url)}`);
  };
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
          <form
            className="flex flex-col gap-4 w-full max-w-xl mx-auto mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="relative flex w-full">
              <input
                className="pl-12 pr-4 py-4 w-full rounded-l-xl border border-zinc-700 bg-black/60 text-slate-100 placeholder:text-zinc-500 text-lg shadow-inner focus:outline-none focus:border-indigo-500/80 focus:bg-zinc-900 transition-all duration-150"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste YouTube URL..."
                autoFocus
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 rounded-r-xl text-white font-semibold text-lg hover:from-indigo-400 hover:to-purple-400 active:scale-95 transition-all duration-150"
              >
                Download
              </button>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12h16m-7-7l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <p className="text-lg text-white text-center">
              Paste the full YouTube link, e.g., https://youtube.com/watch?v=...
            </p>
          </form>
        </section>
      </div>
    </>
  );
};

export default MainPage;
