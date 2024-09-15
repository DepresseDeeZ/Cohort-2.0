const express = require('express');
const app = express();

//middlewares functions
function userMiddleware(req,res,next){
    const {username,password} = req.headers;
    if(username!="umang" && password!="admin"){
        res.status(401).json({
            message: 'You are not authorized'
        });
    }else{
        next();
    }
};

function kidneyMiddleware(req,res,next){
    const {kidneyId} = req.query;
    if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({
            message: 'Invalid kidneyId'
        });
    }else{
        next();
    }
};
app.use(express.json()); //middleware to parse the incoming request for POST, PUT, PATCH

app.use(userMiddleware); //using middleware globally after this line every route will use this middleware
app.use(kidneyMiddleware); //using middleware globally after this line every route will use this middleware

//using middlewares in the route
app.get('/health-checkup',(req,res)=>{   
    res.status(200).json({
        message: 'Health checkup is done this time'
    });
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});