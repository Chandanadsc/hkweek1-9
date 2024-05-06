const { name } = require("ejs");
const express = require("express");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://Chandanadsc:Chandana27072005@cluster0.utwrbxl.mongodb.net/test");

const User = mongoose.model('Users',{name: String, email: String, password : String});

app.post('/signup',async function(req,res){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const exitsingUser = await User.findOne({email: username});
    if(exitsingUser){
        return res.status(400).send("Username already exists");
    }
    const user = new User({
        name: name,
        email: username,
        password: password
    });

    user.save();
    res.json({
        "msg": "user created successfully"
    })
})

app.listen(3000);
