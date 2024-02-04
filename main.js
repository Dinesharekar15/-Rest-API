

import express from "express";

import {connect} from "./module/connection.js";
import { router } from "./module/routs.js";

const app=express();
const PORT=5000;

connect('mongodb://localhost:27017/class');

app.use("/",router);

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
