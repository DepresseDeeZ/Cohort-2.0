const express = require('express');
const app = express();

app.get('/health-checkup',(req,res,next)=>{
    console.log('Health checkup is done by 1st middleware');
    next();
    
},(req,res)=>{
    console.log('Health checkup is done by 2nd middleware');
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});