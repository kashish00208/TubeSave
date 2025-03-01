"use client";
import { useState } from "react";

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
        setMessage(`Error: ${errorData.error || 'Failed to download video'}`);
        return;
      }

      const data = await response.json();
      if (data.message) {
        setMessage("Video Downloaded");
      } else {
        setMessage("Error while downloading video");
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      setMessage("An unexpected error occurred");
    }
  };

  return (
    <div>
      <form onSubmit={handleInputChange}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter the URL"
        />
        <button type="submit">Submit</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default HomePage;