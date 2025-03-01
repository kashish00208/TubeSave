import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import youtubeDl from 'youtube-dl-exec';

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
      // Setting the download path to save the video to the server
      const filePath = path.join(downloadDir, 'downloaded_video.mp4'); 

      // Execute youtube-dl with required options
      youtubeDl(url, {
        output: filePath, //  output file path
        dumpSingleJson: true,
        noCheckCertificates: true,
        noWarnings: true,
        preferFreeFormats: true,
        addHeader: ['referrer:youtube.com', 'user-agent:googlebot'],
      })
        .then((output) => {
          // If successful, respond with the file path or success message
          console.log(output);
          res.status(200).json({ message: 'Download successful', filePath });
        })
        .catch((error: any) => {
          console.error('Error in downloading video:', error);
          res.status(500).json({ error: error.message || 'Failed to download video' });
        });
    } catch (error: any) {
      console.error('Error in downloading video:', error);
      res.status(500).json({ error: error.message || 'Failed to download video' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
