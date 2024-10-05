import { useState } from 'react'
import "./App.css"
function App() {
  const [todos,setTodos] = useState([{
    title:"Got to Gym",
    description:"go to gym form 7-10",
    completed:false
  },{
    title:"Do DSA",
    description:"Do DSA from 8-10",
    completed:true
  },{
    title:"Do React",
    description:"Do React from 10-12",
    completed:false
  },{
    title:"Do Swimminh",
    description:"Swimming from 10-12",
    completed:false
  }]);

  function addTodo(){
    setTodos([...todos,{
      title:"New Todo",
      description:"New Description",
      completed:false
    }])
  }
  function addTodo1(){
    setTodos([...todos,{
      title:"New Todo",
      description:"New Description",
      completed:false
    }])
  }



  return (
    <div>
      {/* {JSON.stringify(todos)} */}
      {/* using brute force */}
      {/* <Todo title={todos[0].title} description={todos[0].description} ></Todo>
      <Todo title={todos[1].title} description={todos[1].description} ></Todo> */}

      {/* using map */}
      <button onClick={addTodo}>add todos</button>
      {
        todos.map((todo,index)=>{
          return <Todo key={index} title={todo.title} description={todo.description}></Todo>
        })
      }
    </div>
  )
}

function Todo(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App
