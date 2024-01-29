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

        return res.json(user);
    })
    .patch((req, res) => {
        return res.send({ status: "pending" });
    })
    .delete((req, res) => {
        return res.send({ status: "pending" });
    })


app.route("/api/users")
    .get((req, res) => {
        res.json(req.query);
    })
    .post((req, res) => {

        const body = req.body;
        users.push({ id: users.length + 1, ...body })
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
            return res.send({ status: "pending", message: "User created" });
        })
    })




app.listen(7000, () => console.log('Server is running on port 7000'));