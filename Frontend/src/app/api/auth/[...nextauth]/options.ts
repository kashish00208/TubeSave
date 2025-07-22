import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import Dbonnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export const authOption : NextAuthOptions = {
    providers:[
        CredentialsProvider({
            id:"Credentials",
            name:"Credentials"
            Credentials : {
                email : {lable:"Email",type:"text"},
                username : {lable:"Username",type:"text"},
                password : {lable:"Password",type:"text"}
            },
            async authorize(Credentials:any):Promise:<any>{
                await Dbonnect()
                try{
                    await UserModel.findOne({
                        $or : [
                            {email:cre},
                            
                            {}
                        ]
                    })
                }
                catch(err:any){
                    throw new Error(err)
                }
            }
        })
    ]
}
