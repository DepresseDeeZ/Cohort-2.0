import './App.css'
import {useState} from 'react'
//pushing down the state to the child component
function App() {

  return (
    <div>
      <HeaderWithBtn></HeaderWithBtn>
      <Header title={"My name is Raaj"} ></Header>
    </div>
  ) 
}

function HeaderWithBtn(){
  const [title,setTitle] = useState("My name is Umang");
  function updateTitle(){
    setTitle(`My name is ${Math.random()}`);
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
    </div>
  )
}

function Header({title}){
  return (
    <h1>{title}</h1>
  )
}

