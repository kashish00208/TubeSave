import ytDlp from 'yt-dlp-wrap';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

// Check if downloads folder exists
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

      // Options for yt-dlp
      const options = {
        output,        // Define output path
        noCheckCertificate: true, // Disable certificate verification (you may need this for certain sites)
      };

      // Download the video using yt-dlp-wrap
      const result = await ytDlp(url, options);

      // Return success message along with download details
      res.status(200).json({ message: 'Video downloaded successfully!', result });
    } catch (error: any) {
      console.error("Error in downloading video", error);
      res.status(500).json({ error: error.message || 'Failed to download video' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
