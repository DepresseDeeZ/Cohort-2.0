const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, Course, User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username:username,
        password:password
    })
    res.json({
        message:'User created successfully'
    })

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
  const password = req.body.password;
  console.log(JWT_SECRET);
  const user = await User.find({
    username,
    password,
  });

  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      msg: "Incorrect Username or Password",
    });
  }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const getCourses = await Course.find({});
    res.json({
        courses:getCourses
    })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const id = req.params.courseId;
    const username  =req.username;
    try {
        await User.updateOne({
            username:username
        },{
            //this is wrong
            // purchasedCourses:{
            //     "$push":id
            // }
            //here it was not able to convert this 

            //the right way  
            "$push":{
                purchasedCourses:id
            }

        });  
    } catch (error) {
        console.log(error);
        
    }
    res.json({
        message:"Purchase Complete"
    })
 

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username  =req.username;

    const user = await User.findOne({
        username: username,
    })
    // console.log(user.purchasedCourses);
    const course = await Course.find({
        _id:{
            "$in":user.purchasedCourses //to find in where array type shii
        }
    })
    res.status(200).json({
        courses:course
    })

});

module.exports = router