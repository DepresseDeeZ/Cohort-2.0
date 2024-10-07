// write a basic express boiler plate code
// with express.json() middleware
//use zod for validation

const express =  require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();


app.use(express.json());

app.get("/todo",async (req,res)=>{

    const todos = await todo.find({});
    console.log(todos)

    res.json({
        todos
    })
    

})


app.post("/todos", async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            mgs:"You sent the wrong inputs",
        })
        return;
    }

    //put it in mongodb
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed: false
    })

    res.json({
        msg:"todo Created"
    })
})


app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the worng inputs",
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })
})

app.listen(3000);