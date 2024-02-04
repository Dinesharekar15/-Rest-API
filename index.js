const express = require('express');
const app = express();


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myApp').then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log("mongo error",err)
})

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobtitle: {
        type: String,
    },
    gender: {
        type: String,
    }
});

const user = mongoose.model("user",userSchema);
// app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {

//     fs.appendFile("./logs.txt", `Request Method: ${req.method} Request URL: ${req.url}    Time: ${new Date().toLocaleString()}\n`, (err, data) => {
//         return next();
//     })


// })




// app.route("/api/users/:id")
//     .get((req, res) => {
//         const id = Number(req.params.id);
//         const user = users.find((user) => user.id === id);
//         if(id>user.length){
//             return res.status(404).json({status:"error",message:"user not found"})
//         }
//         return res.status(201).json(user);
//     })
//     .patch((req, res) => {
//         return res.send({ status: "pending" });
//     })
//     .delete((req, res) => {
//         return res.send({ status: "pending" });
//     })


app.route("/api/users")
    .get((req, res) => {

        // res.setHeader("name","dienshexress")
        // console.log(req.headers)
        res.json(users);
    })
    .post( async (req, res) => {

        const body = req.body;
        if(!body||!body.firstname||!body.lastname||!body.email||!body.gender||!body.jobtitle){
            res.status(400).json({staus:"error",Meassage:"please provoid all the information in the body"})
        }
        
        const result= await user.create({
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            jobtitle: body.jobtitle,
            gender: body.gender
        })
        console.log(result)

        return res.status(201).json({ status: "success", message: "user created" });
    })




app.listen(7000, () => console.log('Server is running on port 7000'));