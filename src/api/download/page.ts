import YTDlpWrap from 'yt-dlp-wrap';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

interface Progress {
  eta: number;          
  downloaded: number;   
  total: number;        
  speed: number;       
  percentage: number;  
  current_file: string; 
}

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
      // Define output path
      const output = path.join(downloadDir, 'downloaded_video.%(ext)s');
      
      // Download the video using yt-dlp-wrap
      const result = await YTDlpWrap.execPromise([
        url,
        '-f',  
        'best', 
        '-o',
        output 
      ])
      .on('progress', (progress: Progress) => {
        console.log(progress); 
      });

      console.log(result); 

      res.status(200).json({ message: 'Video downloaded successfully!', result });
    } catch (error: any) {
      console.error('Error in downloading video:', error);
      res.status(500).json({ error: error.message || 'Failed to download video' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
