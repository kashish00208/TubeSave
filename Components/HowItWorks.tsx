import React from "react";
import { cn } from '../src/lib/utils';

const steps = [
  {
    icon: "📋",
    title: "1. Copy Video Link",
    description: "Go to YouTube, right-click on the video, and copy its URL.",
  },
  {
    icon: "🔗",
    title: "2. Paste the Link",
    description:
      "Paste the copied YouTube link into the input field on this site.",
  },
  {
    icon: "⚙️",
    title: "3. Choose Format",
    description:
      "Select the video or audio format you want to download (MP4, MP3, etc.).",
  },
  {
    icon: "⬇️",
    title: "4. Download",
    description:
      "Click the download button to save the video or audio file to your device.",
  },
];

export function HowItWorks() {
  return (
    <div className="relative w-full flex items-center justify-center bg-white overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
        )}
      />

      <div className="absolute inset-0 z-10 bg-white pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]" />

      <section className="relative z-20 py-16 px-4 sm:px-8 max-w-6xl w-full">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-900">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 text-center border border-slate-300 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
