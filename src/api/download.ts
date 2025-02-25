import ytdlp from "yt-dlp-wrap"
import { NextResponse , NextRequest } from "next/server";
import { format } from "path";
export default function handler(req:NextRequest , res:NextResponse){
    const url = req.body;
    if(!url){
        return res.status(400).json({error:"NO URL PROVIDED"})
    }
    try{
        
    }
    catch(error){

    }
    

}