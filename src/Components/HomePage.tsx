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
      <div className="h-screen w-screen bg-gray-900">
      <NavBar />
        <div className="flex items-center justify-center">
          <h1>Watch Offline - Download YouTube Videos Now!</h1>
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
