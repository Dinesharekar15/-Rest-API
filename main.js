
import mongoose from "mongoose";
import express from "express";
import {student} from "./module/app.js"

const app=express();
const PORT=5000;

const connect=await mongoose.connect('mongodb://localhost:27017/class');

app.get("/",(req,res)=>{
    const stud=new student({
        name:"Rahul",
        rollno:1,
        catagory:"open"
    })
    stud.save();
    res.send(stud)
    
})
app.post("/students",async(req,res)=>{
    const body=req.body;
    const stud = await student.create({
        name: body.name,
        rollno: body.rollno,
        catagory: body.catagory
    });
    
    await stud.save();
    console.log(stud);
    return res.status(201).json({status:"success",message:"student created"})

})


app.listen(PORT,(req,res)=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
