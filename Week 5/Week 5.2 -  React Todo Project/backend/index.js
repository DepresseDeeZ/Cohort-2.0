// write a basic express boiler plate code
// with express.json() middleware
//use zod for validation

const express =  require('express');
const app = express();



app.use(express.json());

app.get("/todo",(req,res)=>{

})
app.post("/todos",(req,res)=>{

})

app.put("/completed",(req,res)=>{

})

app.listen(3000);