const express = require ('express');
const app = express();

app.get('/health-checkup',(req,res)=>{
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username === 'umang' && password === 'admin'){
        if(kidneyId==1|| kidneyId==2){
            res.status(200).json({
                message: 'Health checkup is done'
            })
        }
    }else{
        res.status(401).json({
            message: 'You are not authorized'
        });
    }
    
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})