"use client";
import { useState } from "react";
import NavBar from "./NavBar";

const HomePage = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      setMessage("Provide a URL");
      return;
    }
    setMessage("");

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error || "Failed to download video"}`);
        return;
      }

      const data = await response.json();
      if (data.fileUrl) {
        setMessage("Video Downloaded");
        setUrl("");
      } else {
        setMessage("Error while downloading video");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setMessage("An unexpected error occurred");
    }
  };

  return (
    <>
      <div className="h-screen w-screen bg-gray-900 ">
        <NavBar />
        <div className="flex items-center justify-center flex-col sm:mt-10 lg:mt-20 md:mt-20 m-10">
          <h1 className="text-white font-bold text-xl">
          YouTube Video Downloader
          </h1>
          <div className="rounded-md">
            <form onSubmit={handleInputChange}>
              <input
                type="text"
                value={url}
                className=" border-2 border-black rounded-md w-full min-w-96 shadow-2xl bg-slate-700 my-4 p-2"
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter the URL to download the video"
              />
              <br />
              <button className="rounded-md w-full bg-blue-500 text-white p-1 shad" type="submit">Submit</button>
            </form>

            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
