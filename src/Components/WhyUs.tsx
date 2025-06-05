const WhyUs = () => {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-800 dark:from-neutral-200 dark:to-white mb-6">
          Why Choose TubeSave?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-12">
          Fast. Simple. No nonsense. TubeSave lets you download your favorite
          YouTube videos in just a few clicks—no ads, no sign-ups, no limits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-gray-100 dark:bg-neutral-900 shadow-sm">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              🚀 Lightning Fast Downloads
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Paste your link and get your video in seconds—no buffering, no
              wait.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-100 dark:bg-neutral-900 shadow-sm">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              🧠 Simple & Intuitive
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Zero learning curve. Just copy, paste, and download. That’s it.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-100 dark:bg-neutral-900 shadow-sm">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              🔒 Safe & Private
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              No sign-ups or data tracking. We respect your privacy completely.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-100 dark:bg-neutral-900 shadow-sm">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              💾 High-Quality Downloads
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Choose the resolution and format that fits your need—HD, MP3, and
              more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
