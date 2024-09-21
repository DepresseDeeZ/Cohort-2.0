const mongoose = require('mongoose');

const express = require('express');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://umangraval749:efiShv9O7BjxgALE@cluster0.2wifg.mongodb.net/');

const User = mongoose.model('Users',{name: String, username:String,password:String});


app.post('/signup',async (req,res)=>{

    const {username,password,name} = req.body
    //if the user already exist
    const userExists = await User.findOne({username: username});
    if(userExists){
        return res.status(400).json({
            msg:"user already exists"
        })
    }

    //this are enough to save data into database
    const user = new User({
        name:name,
        username:username,
        password:password
    })
    user.save();
    res.json({
        msg:"user created successfully"
    })
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})