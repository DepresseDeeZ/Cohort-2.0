const express= require('express');
const app = express();

app.use(express.json());

app.post('/health-checkup',(req,res)=>{
    //do somethign with kidney here
    // //input validation basic example
    // const kidneys =  req.body.kidneys;
    // if(!kidneys){
    //     res.status(400).json({error:"kidneys is required"});
    // }
    // const kidneyLength = kidneys.length;

    // res.send("your kidney length is "+kidneyLength);
    //........................................................

    //GLOBAL CATCHES EXAMPLE
    const {kidneys} = req.body;
    const kidneyLength = kidneys.length;
    res.send("your kidney length is "+kidneyLength);

});

//global error handling using global catches
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});