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
        <div className="flex items-center justify-center flex-col px-8 pt-12">
          <h1 className="text-white font-bold text-4xl">
            Watch Offline - Download YouTube Videos Now!
          </h1>
          <p className="text-white  text-2xl text-center p-4">
            Download YouTube videos instantly and watch offline anytime.
            Convert, save, and manage your favorite videos effortlessly—all in
            one place.
          </p>
          <div className="bg-white ">
            <form onSubmit={handleInputChange}>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter the URL"
              />
              <button type="submit">Submit</button>
            </form>

            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
