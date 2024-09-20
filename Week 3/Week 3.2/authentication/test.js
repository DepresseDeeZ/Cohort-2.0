const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const jwtPassword = "1234456";

app.use(express.json());

const All_User = [
  {
    username:"umang123",
    password:"123",
    name:"umang"
  },
  {
    username:"raj123",
    password:"123",
    name:"raj"
  },
  {
    username:"krish123",
    password:"123",
    name:"krish"
  }
]

function userExist(username,password){
  let userExists = false;
  All_User.forEach((user)=>{
    if(user.username==username && user.password==password)
    {
      userExists = true;
    }
  })
  return userExists
}

app.post('/signin',(req,res)=>{
  const {username,password} = req.body;
  if(!userExist(username,password)){
    res.status(403).json({
      msg:"the user not exists in the database"
    })
  }

  var token  = jwt.sign({username:username},jwtPassword);

  return res.json({
    token,
  })


})

app.get('/users',(req,res)=>{
  const token = req.headers.authorization;

  try{

    const deccoded = jwt.verify(token,jwtPassword);
    const username = deccoded.username;

    return res.json({
      users:All_User.filter(user=>user.username != username)

    })


  }catch{
    res.status(403).json({
      msg:"invalid token bruhh!!!!"
    })
  }
  


})

app.listen(3000,()=>{
  console.log("it is runninng on port 3000")
})