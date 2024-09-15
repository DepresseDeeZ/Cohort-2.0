const express = require('express');
const zod = require('zod');
const app = express()
function validateInput(obj){
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })

    const response = schema.safeParse(obj)
    console.log(response)
    return response
}

app.use(express.json());

app.post('/health-checkup',(req,res)=>{
    const response = validateInput(req.body);
    if(!response.success){
        res.status(411).json({
            message:"Input is invalid"
        })
    }
    
    res.send(response)

})

app.listen(3000)