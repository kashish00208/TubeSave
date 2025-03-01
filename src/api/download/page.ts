import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import youtubeDl from 'youtube-dl-exec';

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
      const YTDLwrap = require('youtube-dl-exec');
      youtubeDl(url,{
        dumpSingleJson:true,
        noCheckCertificates:true,
        noWarnings:true,
        preferFreeFormats:true,
        addHeader:['referrer:youtube.com','user-agent:googlebot']
      }).then(output=>console.log(output))
    } catch (error: any) {
      console.error('Error in downloading video:', error);
      res.status(500).json({ error: error.message || 'Failed to download video' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
