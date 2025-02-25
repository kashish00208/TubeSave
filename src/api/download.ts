import youtubedl from "youtube-dl-exec";
import type { NextApiResponse , NextApiRequest } from "next";
import path from 'path'
export default async function handler(req:NextApiRequest , res:NextApiResponse){
    if(req.method==='POST'){
        const url = req.body;
        if(!url){
            return res.status(400).json({ error: 'URL is required.' });
        }
        try{
            //path of video to be saved
            const output = path.join(process.cwd(),'downloads','downloaded_video.%(ext)s')
            const options = {
                output,
                noCheckCertificate:true
            };
            const result = await youtubedl(url,options);
            res.status(200).json({message:"vedeo downloaded susscefully"})
        }catch(error){
            console.error("Error in downloading video",error)
            res.status(500).json({error:"failed to download video"})
        }
    }else{
        res.status(405).json({error:"Method not allowed"})
    }

}
