// Middleware for handling auth
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    //this will get token instead of username or password
    const token = req.headers.authorization;
    //bearer hdfsdhfhdsfqshfhhlala2q34jj get back token from string
    const words = token.split(" ");
    //split bearer and string: jskdfkjs2343
    const jwtToken = words[1];
    try {
        const decodedValue = jwt.verify(jwtToken,JWT_SECRET);//(token,secret-key)
    if(decodedValue.username){
        next();
    }else{
        res.status(403).json({
            msg:"You are not authenticated"
        })
    }
    //jwt save the database call
     
        
    } catch (error) {
        res.status(411).json({
            msg:"Incorrect Input"
        })
    }
    
}

module.exports = adminMiddleware;