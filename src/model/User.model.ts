// src > model > UserSchema.ts
// Importing the required modules int the workspace 
import mongoose, { Schema, Document } from "mongoose";

// Creating the inteface for the Message 
export interface Message extends Document {
    content : string,
    createdAt : Date
}

// Creating the interface for the User 
export interface User extends Document {
    username : string;
    email : string;
    password : string;
    verifyCode : string;
    verifyCodeExpiry : Date;
    isVerified : boolean;
    isAcceptingMessage : boolean;
    messages : Message[]
}

// Schema definition for Message 
const messageSchema : Schema <Message> = new Schema({
    content : {
        type : String,
        required: true
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now
    }
});

// Schema definition for User 
const userSchema : Schema <User>  = new Schema({
    username : {
        type : String,
        required : [ true, "Username is required" ],
        trim : true,
        unique : true
    },  
    email : {
        type : String,
        required : [ true, "Email is required" ],
        unique : true,
        match : [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please provide a valid email to continue" ]
    },
    password : {
        type : String,
        required : [ true, "Password is required" ]
    },
    verifyCode : {
        type : String, 
        required : [ true, "Verification code is required" ]
    }, 
    verifyCodeExpiry : {
        type : Date,
        required : [ true, "Verification code expiry is required" ]
    }, 
    isVerified : {
        type : Boolean,
        default : false
    },  
    isAcceptingMessage : {
        type : Boolean,
        default : true
    },
    messages: [messageSchema]
}); 

// Creating model for the User 
const UserModel = (mongoose.models.User as mongoose.Model <User> ) || (mongoose.model <User> ("Users", userSchema)); 
export default UserModel;