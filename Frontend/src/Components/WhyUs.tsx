const features = [
  {
    emoji: "🚀",
    title: "Lightning Fast Downloads",
    description: "Paste your link and get your video in seconds—no buffering, no wait.",
  },
  {
    emoji: "🧠",
    title: "Simple & Intuitive",
    description: "Zero learning curve. Just copy, paste, and download. That’s it.",
  },
  {
    emoji: "🔒",
    title: "Safe & Private",
    description: "No sign-ups or data tracking. We respect your privacy completely.",
  },
  {
    emoji: "💾",
    title: "High-Quality Downloads",
    description: "Choose the resolution and format that fits your need—HD, MP3, and more.",
  },
];

const FeatureCard = ({ emoji, title, description }: { emoji: string; title: string; description: string }) => (
  <div className="p-6 rounded-2xl bg-gray-100 dark:bg-neutral-900 shadow transition hover:shadow-md">
    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
      {emoji} {title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>
  </div>
);

const WhyUs = () => {
  return (
    <section className="w-full py-20 px-6 bg-white dark:bg-black flex flex-col items-center justify-center">
      <div className="max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-700 dark:from-white dark:to-gray-400 mb-6">
          Why Choose TubeSave?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12">
          Fast. Simple. No nonsense. TubeSave lets you download your favorite YouTube videos in just a few clicks—no ads, no sign-ups, no limits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
