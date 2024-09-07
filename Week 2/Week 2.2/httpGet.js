const express = require('express');
const app =express();
const port =3000;

app.get("/next",(req,res)=>{
    res.json({name:"Umang",age:20});    
})

app.get('/',(req,res)=>{
    res.send("Hello world");

});

app.listen(port,()=>{
    console.log("server is running");
    console.log(`http://localhost:${port}`)
});
