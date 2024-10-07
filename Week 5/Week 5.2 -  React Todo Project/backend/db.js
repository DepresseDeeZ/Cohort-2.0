//create the schema for our project
const mongoose =  require('mongoose');
const { boolean } = require('zod');

/*
    Todo {
        title:string,
        description:string,
        completedLboolean
    
    }

*/

//using mongodb url

//connect the db to the mongo db server
mongoose.connect('mongodb+srv://umangraval749:efiShv9O7BjxgALE@cluster0.2wifg.mongodb.net/todos');

//creating a schema 
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

//creating a model 
const todo = mongoose.model('todos',todoSchema);

//exporting the module
module.exports = {
    todo
}