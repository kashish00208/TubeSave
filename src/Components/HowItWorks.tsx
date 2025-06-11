import React from "react";

const steps = [
  {
    icon: "📋",
    title: "1. Copy Video Link",
    description: "Go to YouTube, right-click on the video, and copy its URL.",
  },
  {
    icon: "🔗",
    title: "2. Paste the Link",
    description: "Paste the copied YouTube link into the input field on this site.",
  },
  {
    icon: "⚙️",
    title: "3. Choose Format",
    description: "Select the video or audio format you want to download (MP4, MP3, etc.).",
  },
  {
    icon: "⬇️",
    title: "4. Download",
    description: "Click the download button to save the video or audio file to your device.",
  },
];

const StepCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow p-6 text-center border border-gray-200 dark:border-neutral-700 hover:shadow-md transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
  </div>
);

export function HowItWorks() {
  return (
    <div className="relative w-full flex items-center justify-center bg-white dark:bg-black overflow-hidden">
      <div
      />
      <div className="absolute inset-0 z-10 bg-white dark:bg-black pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <section className="relative z-20 py-20 px-4 sm:px-8 max-w-6xl w-full">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <StepCard key={idx} {...step} />
          ))}
        </div>
      </section>
    </div>
  );
}
