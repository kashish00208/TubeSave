import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
import ytDlpExec from "youtube-dl-exec";

const downloadDir = path.join(process.cwd(), "public", "downloads");
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}
console.log("Download directory:", downloadDir);

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required." });
  }

  const youtubeUrlPattern =
    /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
  if (!youtubeUrlPattern.test(url)) {
    return res.status(400).json({ error: "Invalid YouTube URL." });
  }

  try {
    // Save the video to the downloads folder
    const filePath = path.join(downloadDir, `downloaded_video_${Date.now()}`);

    // Download the video
    const output = await ytDlpExec(url, {
      output: filePath,
      noCheckCertificates: true,
      noWarnings: true,
      preferFreeFormats: true,
      addHeader: ["referer:youtube.com", "user-agent:googlebot"],
      format: "bestvideo+bestaudio/best",
    });

    console.log("Downloaded video successfully:", output);

    const fileUrl = `/downloads/${path.basename(filePath)}`;
    res.status(200).json({ message: "Download successful", fileUrl });
  } catch (error) {
    console.error("Error in downloading video:", error);
    res.status(500).json({ 
      error: "Failed to download the content",
      details: error instanceof Error ? error.message : String(error)
    });
  }
}