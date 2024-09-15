const express = require ('express');
const app = express();

app.get('/health-checkup',(req,res)=>{
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username!="umang" && password!="admin"){
        res.status(401).json({
            message: 'You are not authorized'
        });
    }
    if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({
            message: 'Invalid kidneyId'
        });
    }
    res.status(200).json({
        message: 'Health checkup is done'
    }); 
    
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

// http://localhost:3000/health-checkup?kidneyId=2
//headers: username:umang, password:admin
// this will run the program