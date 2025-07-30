"use client";
import { useState } from "react";


const page = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [toastActive, setToastActive] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Strated working and downloading vdos")
    e.preventDefault();
    setMessage("");
    setToastActive(false);
    setLoading(true);

    if (!url) {
      setMessage("Please provide a YouTube video URL.");
      setToastActive(true);
      setLoading(false);
      return;
    }
    console.log("URL",url)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/download`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(`❌ ${data.error || "Failed to download video"}`);
        setToastActive(true);
        setLoading(false);
        return;
      }

      console.log("okay that now got the responses")
      if (data.fileUrl) {
        setMessage("✅ Download successful! 🎉");
        setToastActive(true);
        setUrl("");
      } else {
        setMessage("❌ Error while downloading video");
        setToastActive(true);
      }
    } catch (error) {
      setMessage("❌ An unexpected error occurred. Try again later.");
      setToastActive(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-black via-neutral-900 to-black">
      {toastActive && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center px-6 py-3 rounded-2xl shadow-xl text-zinc-100 font-semibold text-lg
            ${
              message.startsWith("✅")
                ? "bg-gradient-to-r from-emerald-700/80 to-green-900/80 backdrop-blur-lg animate-bounceIn"
                : "bg-gradient-to-r from-neutral-700 to-red-900/80 backdrop-blur-xl animate-shake"
            }
          `}
          onAnimationEnd={() => setToastActive(false)}
        >
          <span>{message}</span>
        </div>
      )}

      <div className="backdrop-blur-2xl bg-zinc-900/80 border border-zinc-800/80 shadow-2xl rounded-2xl px-8 pt-8 pb-6 w-full max-w-lg relative">
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-slate-100 tracking-tight mb-7 font-mono select-none drop-shadow">
          <span className="bg-gradient-to-r from-zinc-200 via-slate-400/60 to-indigo-400 bg-clip-text text-transparent">
            YouTube <span className="font-normal text-slate-400 opacity-70">Downloader</span>
          </span>
        </h1>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 12h16m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <input
              className="pl-11 pr-4 py-3 w-full rounded-xl border border-zinc-800 bg-black/60 text-slate-100 placeholder:text-zinc-500 text-lg shadow-inner focus:outline-none focus:border-indigo-500/80 focus:bg-zinc-900 transition-all duration-150"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste YouTube URL..."
              autoFocus
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`
              relative flex items-center justify-center gap-2 px-6 py-3 rounded-xl shadow-md text-lg font-bold 
              bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-900
              hover:from-neutral-800 hover:to-indigo-900 hover:scale-[1.03] hover:shadow-xl
              focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2
              transition-all active:scale-[0.98]
              ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : "text-slate-100"
              }
            `}
          >
            {loading && (
              <span className="animate-spin w-5 h-5 border-2 border-indigo-400 border-r-zinc-800 border-t-transparent rounded-full" />
            )}
            {loading ? "Downloading..." : "Download Video"}
          </button>
        </form>

        <div className="absolute bottom-3 right-5 text-xs text-zinc-600 select-none">
          &copy; 2025 YourDownloader
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounceIn {
          0% { transform: scale(0.9) translateY(-32px); opacity: 0.5; }
          80% { transform: scale(1.05) translateY(6px); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-bounceIn {
          animation: bounceIn 0.5s;
        }
        @keyframes shake {
          10%, 90% { transform: translateX(-1px); }
          20%, 80% { transform: translateX(2px); }
          30%, 50%, 70% { transform: translateX(-4px); }
          40%, 60% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.4s;
        }
      `}</style>
    </div>
  );
};

export default page;
