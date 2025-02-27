'use client'
import {useState} from 'react'

const HomePage = () => {
  const [url,seturl] = useState("");
  const [message,SetMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!url) {
      SetMessage("Provide a URL");
      return; 
    }
  
    SetMessage(""); 
    try {
      const result = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
  
      const data = await result.json();
  
      if (data.success) {
        SetMessage(`Downloaded successfully: ${data.message}`);
      } else {
        SetMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      SetMessage("Error while downloading the video");
      console.error("Error details:", error); 
    }
  };
  
  return (
    <>
      <div>
        <form  onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter the youtube URL' value={url} onChange={(e)=>seturl(e.target.value)}/>
          <button type='submit'>Submit</button>
          <p>{message}</p>
        </form>
      </div>
    </>
  )
}

export default HomePage
