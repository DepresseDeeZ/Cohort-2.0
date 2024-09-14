// make a doctor website backend where patients can remove and add kidney
const express = require('express');
const app = express();
const port =3000;
const bodyParser  = require('body-parser')

app.use(express.json());
var users = [{
    name: "john",
    kidneys : [{
        healthy: false
    },{
        healthy:true
    }]
}];

//get
app.get("/",(req,res)=>{
    

    //write logic how many kidney are ther how many healthy or not
    const johnKidneys = users[0].kidneys;
    const numberOfKidney = johnKidneys.length;

    let numberOfHelthyKidney = 0;
    for(let i=0;i<numberOfKidney;i++){
        if(johnKidneys[i].healthy){
            numberOfHelthyKidney+=1;
        }
    }
    const numberOfunhelthyKidney = numberOfKidney - numberOfHelthyKidney;

    res.json({
        numberOfKidney,numberOfunhelthyKidney,numberOfHelthyKidney
    })
})

//post 
app.post("/",(req,res)=>{
    //unhealty kidney when post request
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg : "Done!"
    })
})


//put
app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

//delete
app.delete("/",(req,res)=>{
    // //now what if patient has 0  kidney then
    // let atLeastoneUnhealtyKidney = false;
    // for(let i=0;i<users[0].kidneys.length;i++){
    //     if(!users[0].kidneys[i].healthy){
    //         atLeastoneUnhealtyKidney =true;
    //     }
    // }
    
    if(isthereatLeastoneUnhealtyKidney()){
        const newKidney = [];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidney.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys = newKidney;
        res.json({
            msg:"done"
        })
    }else{
        res.status(411).json({
            msg:"you have no bad kidney"
        })
    }
    
})


function isthereatLeastoneUnhealtyKidney(){
       //now what if patient has 0  kidney then
       let atLeastoneUnhealtyKidney = false;
       for(let i=0;i<users[0].kidneys.length;i++){
           if(!users[0].kidneys[i].healthy){
               atLeastoneUnhealtyKidney =true;
           }
       }
    return atLeastoneUnhealtyKidney;
} 

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})

