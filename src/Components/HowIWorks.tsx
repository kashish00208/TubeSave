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

const HowItWorks = () => {
  return (
    <section className="py-10 bg-gray-50 rounded-lg">
      <h2 className="text-center text-3xl font-bold mb-8">How It Works</h2>
      <div className="flex justify-center gap-6 flex-wrap ">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 w-[250px] text-center flex flex-col items-center hover:shadow-lg transition-shadow border-2 border-slate-300 hover:border-slate-500 "
          >
            <div className="text-4xl mb-3">{step.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
