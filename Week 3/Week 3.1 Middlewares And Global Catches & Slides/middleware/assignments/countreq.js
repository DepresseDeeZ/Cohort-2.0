const express = require('express');
const app = express();
let count = 0;


function countRequest(req,res,next){
    count++;
    console.log(count);
    next();
}

app.use(express.json());
app.use(countRequest);

app.get('/count',(req,res)=>{
    res.status(200).json({
        message: 'Count is done'
    });
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});