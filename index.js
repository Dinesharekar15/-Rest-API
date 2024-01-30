const express = require('express');
const app = express();
const fs = require('fs');
const users = require('./MOCK_DATA.json');

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {

    fs.appendFile("./logs.txt", `Request Method: ${req.method} Request URL: ${req.url}    Time: ${new Date().toLocaleString()}\n`, (err, data) => {
        return next();
    })


})




app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if(id>users.length){
            return res.status(404).json({status:"error",message:"user not found"})
        }
        return res.status(201).json(user);
    })
    .patch((req, res) => {
        return res.send({ status: "pending" });
    })
    .delete((req, res) => {
        return res.send({ status: "pending" });
    })


app.route("/api/users")
    .get((req, res) => {

        res.setHeader("name","dienshexress")
        console.log(req.headers)
        res.json(users);
    })
    .post((req, res) => {

        const body = req.body;
        if(!body||!body.first_name||!body.last_name||!body.email||!body.gender||!body.job_title){
            res.status(400).json({staus:"error",Meassage:"please provoid all the information in the body"})
        }
        users.push({ id: users.length + 1, ...body })
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
            return res.status(201).json({ status: "pending", message: "User created" });
        })
    })




app.listen(7000, () => console.log('Server is running on port 7000'));