
import { useState } from 'react'
import './App.css'
let counter =4;

//using key for todos
function App() {

  const [todo,setTodo]= useState([{
    id:1,
    title:"Go to Gym",
    description:"going to to gym at 9"
  },{
    id:2,
    title:"Go to College",
    description:"going to to College at 9"
  },{
    id:3,
    title:"Go Eat Food",
    description:"going to to dinner at 9"
  }])

  function addTodo(){
    setTodo([...todo,{
      id:counter++,
      title:`${Math.random()} title`,
      description:`${Math.random()} description`
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todo.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
      
    </div>
  )
}


function Todo({title,description}){
  return (
    <div>

      <h1>
        {title}
      </h1>

      <h2>
        {description}
      </h2>

    </div>
  )
}

export default App
