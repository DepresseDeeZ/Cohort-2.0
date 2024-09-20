const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());
//in memory db
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "umang0365@gmail.com",
    password: "123321",
    name: "Umang Raval",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
    // // using  find method to check if user exists then true else false
    // const user = ALL_USERS.find((user) => {
    //     return user.username === username && user.password === password;
    // });
    // return user ? true : false;


  let userExists = false;
//easy way to check if user exists or not
//   for(let i=0;i<ALL_USERS.length;i++){
//     if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
//       userExists = true;
//     }
//   }

  ALL_USERS.forEach((user)=>{
    if(user.username === username && user.password === password){
      userExists = true;
    }
  });
  return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000,()=>{
    console.log("Server started at port 3000");
})