const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  //using Async Await
  await Admin.create({
    username: username,
    password: password,
  });
  res.json({
    msg: "Admin created successfully",
  });

  //check if a user with this same username already exists

  // using only .then and waiting
  // Admin.create({
  //     username:username,
  //     password:password
  // }).then(()=>{

  //     res.json({
  //         "msg":"Admin created successfully"
  //     })
  // })
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imgaeLink = req.body.imgaeLink;
  const price = req.body.price;
  // in real world you should add zod
  const newCourse = await Course.create({
    title: title,
    description: description,
    imageLink: imgaeLink,
    price: price,
  });
  console.log(newCourse);
  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const allCourses = await Course.find({});
  res.json({
    courses:allCourses
  });
});

module.exports = router;
