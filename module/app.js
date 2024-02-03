


import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:String,
    
    rollno:Number,

    catagory:String
})

export const student=new mongoose.model("student",studentSchema);