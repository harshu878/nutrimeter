const express = require("express");
const Users = require('./auth.model')


const app = express.Router();

app.post("/login", async (req, res) => {
    let { email, password } = req.body;
    password = String(password)
    try {
        let user = await Users.findOne({ email, password });
        if (user) {
            if (password == user.password) {
                res.send({
                    token: `${email}_#_${user._id}_#_${password}`,
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        age: user.age,
                        createdAt: user.createdAt,
                    }
                })
            } else {
                res.status(401).send('Auth failure, incorrect password')
            }
        } else {
            res.status(401).send(`User with ${email} not found`);
        }
    } catch (err) {
        res.status(404).send(err.message);
    }
});

app.post("/register", async (req, res) => {
    let { email, password, name, age } = req.body;
    password = String(password)
    try {
        let existingUser = await Users.findOne({ email, password });
        if (existingUser) {
            res.status(401).send('cannot create an user with existing email')
        } else {
            let user = await Users.create({
                email, password, name, age
            })
            res.send({ token: `${user.email}_#_${user.password}` });
        }
    } catch (err) {
        res.status(401).send(err.message)
    }
});



module.exports = app;