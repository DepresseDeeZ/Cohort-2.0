import './App.css'
import {useState} from 'react'

function ReREnderProb() {
  const [title,setTitle] = useState("My name is Umang")
  
  function updateTitle(){
    setTitle(`My name is ${Math.random()}`)
  }

  return (
    <div>
      
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title={"hello"}></Header>
      <Header title={"hello"}></Header>
      <Header title={"hello"}></Header>
      <Header title={"hello"}></Header>
      <Header title={"hello"}></Header>
  
    </div>
  ) 
}

function Header({title}){
  return (
    <h1>{title}</h1>
  )
}

