const express  =require('express');
const fs = require('fs');

const app = express();

app.get("/:filename",(req,res)=>{
    const name = req.params.filename;
    fs.readFile(name,"utf-8",(err,data)=>{
        console.log(data)
        res.json({
            data
            
        });
    })

    console.log(name)

})

app.listen(3000)