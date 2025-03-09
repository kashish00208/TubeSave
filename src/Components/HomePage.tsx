"use client";
import { useState } from "react";

const HomePage = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

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

      console.log("it works fine until here");

      if (!response.ok) {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error || "Failed to download video"}`);
        return;
      }

      const data = await response.json();
      if (data.fileUrl) {
        setMessage("Video Downloaded");
        setDownloadLink(data.fileUrl);
      } else {
        setMessage("Error while downloading video");
        setDownloadLink("");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setMessage("An unexpected error occurred");
      setDownloadLink("");
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-slate-500 to-stone-700 flex items-center justify-center" >
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
        {downloadLink && (
          <a href={downloadLink} target="_blank" rel="noopener noreferrer">
            Download your video here
          </a>
        )}
      </div>
    </div>
  );
};

export default HomePage;
