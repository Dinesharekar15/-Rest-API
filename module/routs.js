import express from "express";
import {student} from "./model.js";
// import {saveuser} from "./controllers.js";
const router = express.Router();

router.get("/",(req,res)=>{
    const stud=new student({
        name:"Rahul",
        rollno:1,
        catagory:"open"
    })
    stud.save();
    res.send(stud)
    console.log("success")
    
})

router.post("/students",async(req,res)=>{
    const body=req.body;
    const stud = await student.create({
        name: body.name,
        rollno: body.rollno,
        catagory: body.catagory
    });
    l;

    await stud.save();
    console.log(stud);
    return res.status(201).json({status:"success",message:"student created"})

})

export {router};

