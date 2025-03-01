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

    const youtubeUrlPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    if (!youtubeUrlPattern.test(url)) {
      return res.status(400).json({ error: 'Invalid YouTube URL.' });
    }

    try {
      const filePath = path.join(downloadDir, `downloaded_video_${Date.now()}.mp4`); 

      // Execute youtube-dl with required options
      const output = await youtubeDl(url, {
        output: filePath, // output file path
        dumpSingleJson: true,
        noCheckCertificates: true,
        noWarnings: true,
        preferFreeFormats: true,
        addHeader: ['referrer:youtube.com', 'user-agent:googlebot'],
      });

      // If successful, success message
      console.log(output);
      res.status(200).json({ message: 'Download successful', filePath });
    } catch (error: any) {
      console.error('Error in downloading video:', error);
      res.status(500).json({ error: error.message || 'Failed to download video' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}