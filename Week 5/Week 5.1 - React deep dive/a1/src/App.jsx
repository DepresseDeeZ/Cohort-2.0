import { useState } from 'react'

function App() {
  const [count,setCount] = useState(0);

  return ( 
    <div>
      {/* resuable component */}
      <CustomBtn count={count} setCount={setCount}/>
      <CustomBtn count={count+1} setCount={setCount}/>
      <CustomBtn count={count-1} setCount={setCount}/>
      <CustomBtn count={count*100} setCount={setCount}/>

    </div>
  );

}

//component 
function CustomBtn(props){
  return (
    <button onClick={()=>props.setCount((count)=>count+1)}>
    count is {props.count}
  </button>
  )
}
//component 
function CustomBtn1(props){
  function onClickHandler(){
    props.setCount(props.count+1);
  }

  return <button onClick={onClickHandler}>
    counter is {props.count}
  </button>

  
}
export default App
