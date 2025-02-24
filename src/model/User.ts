import mongoose , {Schema,Document} from "mongoose";
export interface User extends Document {
    email:String,
    password:String,
    username:String,                       
}
const UserSchema : Schema<User> = new Schema ({
    email:{
        type:String,
        required:[true,"Email is required please enter you email ID"],
        unique:true,
        match:[/^[^@\s]+@[^@\s]+\.[^@\s]+$/,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    username:{
        type:String,
        required:[true,"Enter a valid username"]
    }
})