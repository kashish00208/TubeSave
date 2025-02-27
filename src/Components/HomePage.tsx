"use client";
import { use, useState } from "react";
const HomePage = () => {
  const [url, SetUrl] = useState("");
  const [message, setMessage] = useState("");
  const handleInputChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      setMessage("Provid a url");
    }
    setMessage("");
    try {
      const responce = fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(url),
      });
      const data = await (await responce).json();
      if (data.success) {
        setMessage("Video Downloaded");
      } else {
        setMessage("Error while downloading vdos");
      }
    } catch (error) {
      console.log(`Error:${error}`);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleInputChange}
      >
        <input type="text" value={url} onChange={(e)=>SetUrl(e.target.value)} placeholder="Enter the URl"/>
        <button>Submit</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default HomePage;
