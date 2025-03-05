import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import ytDlpExec from 'youtube-dl-exec' 

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

      const output = await ytDlpExec(url, {
        output: filePath,
        noCheckCertificates: true,
        noWarnings: true,
        preferFreeFormats:true,
      });

      console.log('Downloaded video successfully:', output);

      const fileUrl = `/downloads/${path.basename(filePath)}`;
      res.status(200).json({ message: 'Download successful', fileUrl });
    } catch (error: any) {
      console.error('Error in downloading video:', error);
      res.status(500).json({
        error: error.message || 'Failed to download video',
        stack: error.stack,
        code: error.code, 
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
