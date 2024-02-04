import mongoose from 'mongoose';

async function connect(url){
    const connect = await mongoose.connect(url);
    console.log("connected to database");
}

export {connect};