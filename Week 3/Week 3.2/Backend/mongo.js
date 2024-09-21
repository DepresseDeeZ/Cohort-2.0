const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://umangraval749:efiShv9O7BjxgALE@cluster0.2wifg.mongodb.net/');

const User = mongoose.model('Users',{name: String, email:String,password:String});

const user = new User({
    name:"Umang Raval",
    email:"umangraval0365@gmail.com",
    password:"Umang123"
})
user.save();
//this are enough to save data into database
