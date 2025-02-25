import { error } from "console";
import { NextResponse , NextRequest } from "next/server";
export default function handler(req:NextRequest , res:NextResponse){
    const url = req.body;
    if(!url){
        return res.status(400).json({error:"NO URL PROVIDED"})
    }
    try{
        const video = await 
    }
    catch(error){

    }
    

}