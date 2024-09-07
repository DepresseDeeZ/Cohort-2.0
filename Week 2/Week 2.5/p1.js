const express = require('express');
const port = 3000;
const app = express();

function CalculateSum(n){
    let ans =0;
    for(i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}


app.get("/",(req,res)=>{
    const n = req.query.n;
    const ans = CalculateSum(n);
    res.send(`Your answer of ${n} is ${ans.toString()}`)
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})