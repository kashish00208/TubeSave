import youtubedl from "youtube-dl-exec";
import type { NextApiRequest, NextApiResponse } from "next";
import path from 'path';
import fs from 'fs';

//checking downloads folder exists
const downloadDir = path.join(process.cwd(), 'downloads');
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { url } = req.body;  

    if (!url) {
      return res.status(400).json({ error: 'URL is required.' });
    }

    try {
      const output = path.join(downloadDir, 'downloaded_video.%(ext)s');
      
      const options = {
        output,
        noCheckCertificate: true,
      };
      //downloading the videos
      const result = await youtubedl(url, options);
      res.status(200).json({ message: 'Video downloaded successfully!', result });
    } catch (error) {
      console.error("Error in downloading video", error);
      res.status(500).json({ error: 'Failed to download video' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
