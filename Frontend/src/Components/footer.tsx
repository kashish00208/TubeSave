import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold">TubeSave</h2>
          <p className="text-sm text-gray-400">
            Download your favorite YouTube videos — fast, free, and easy.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-6">
          <a
            href="/privacy"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Terms of Service
          </a>
          <a
            href="mailto:support@TubeSave.com"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-700">
        &copy; {new Date().getFullYear()} TubeSave. Built with ❤️ by 404.
      </div>
    </footer>
  );
};

export default Footer;
