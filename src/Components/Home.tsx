"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Link2, ShieldCheck, Sparkles, Zap } from "lucide-react";

const MainPage = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    if (!url.trim()) return;
    setLoading(true);
    setTimeout(() => {
      router.push(`/Video?url=${encodeURIComponent(url)}`);
    }, 500);
  };

  return (
    <main className="relative w-full overflow-hidden bg-[#090b0d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.11),transparent_36%),linear-gradient(180deg,#151515_0%,#090909_75%)]" />
      <section className="relative z-10 mx-auto flex min-h-[650px] w-full max-w-6xl flex-col items-center justify-center px-5 py-24 sm:px-8 lg:min-h-[690px]">
       
        <div className="max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Save the videos you love.
            <span className="block bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent">
              Keep it wonderfully simple.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Paste a YouTube link and download your video or audio in just a few
            clicks. No account, no clutter, no complicated setup.
          </p>
        </div>

        <form
          className="mt-10 w-full max-w-2xl"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="relative flex w-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-2 shadow-2xl shadow-black/30 backdrop-blur sm:flex-row sm:rounded-xl">
            <input
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#0d0d0d] px-12 py-4 text-base text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-white/50 focus:ring-4 focus:ring-white/10 disabled:opacity-50 sm:rounded-lg sm:text-lg"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste your YouTube URL"
              autoFocus
              disabled={loading}
              aria-label="YouTube URL"
            />
            <button
              type="submit"
              className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-white px-7 text-base font-semibold text-black transition hover:bg-slate-200 active:scale-[0.98] disabled:cursor-wait disabled:opacity-50 sm:rounded-lg sm:text-lg"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Loading...
                </div>
              ) : (
                <>
                  Download now
                  <ArrowRight size={19} />
                </>
              )}
            </button>
            <span className="pointer-events-none absolute left-6 top-7 text-slate-500">
              <Link2 size={19} />
            </span>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500 sm:text-sm">
            Supports standard YouTube video links
          </p>
        </form>

        <div className="mt-14 grid w-full max-w-2xl grid-cols-1 gap-3 border-t border-white/10 pt-6 text-center sm:grid-cols-3 sm:gap-0">
            <div className="flex items-center justify-center gap-2 text-sm text-slate-300 sm:border-r sm:border-white/10">
            <Zap size={16} className="text-white" /> Fast and straightforward
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-300 sm:border-r sm:border-white/10">
            <ShieldCheck size={16} className="text-white" /> No sign-up required
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
            <Link2 size={16} className="text-white" /> Video and audio options
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
