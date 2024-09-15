const express= require('express');
const zod = require('zod');
const app = express();

const schema = zod.array(zod.number()); //schema for array of numbers

const schemauser = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
});


app.use(express.json());

app.post('/health-checkup',(req,res)=>{

    // const {kidneys} = req.body;
    // const response = schema.safeParse(kidneys);//parse the kidneys array
    // if(!response.success){
    //     res.status(411).json({msg:"input is invalid"});
    // }
    // res.send("your kidney length is "+kidneyLength);

    //for userschema 
    const {email,password} = req.body;
    const responseuser = schemauser.safeParse({email,password});
    if(!responseuser.success){
        res.status(411).json({msg:"input is invalid"});
    }

    res.send({
        responseuser
    });
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});