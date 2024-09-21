const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://umangraval749:efiShv9O7BjxgALE@cluster0.2wifg.mongodb.net/"
);

const UserProfileSchema = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

async function UserExists(username, password) {
  try {
    const data = await UserProfileSchema.findOne({ username: username });
    if (data) return true;
    else return false;
  } catch (err) {
    console.error(err);
    return false; // Handle errors appropriately
  }
}

const express = require("express");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const { name, username, password } = req.body;

  const userExists = await UserProfileSchema.findOne({ username: username });
  if (userExists) {
    return res.status(400).json({
      msg: "user already exists",
    });
  }

  const user = new UserProfileSchema({
    name: name,
    username: username,
    password: password,
  });

  user.save().catch((err) => console.log(err));

  res.status(200).json({
    msg:"user created succesfully"
  });
});

app.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const userExist = await UserExists(username,password)

  if (!userExist) {
    console.log();
    return res.status(403).json({
      msg: "user doesnt exists in database",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  res.json({
    token,
  });
});

app.get("/users", async (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    const users = await UserProfileSchema.find({
      users: {
        $ne: username,
      },
    });

    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(403).json({
      msg: "token is invalid",
    });
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
