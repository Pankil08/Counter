import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setcounter]=useState(0);
  const counterup = () => {
    setcounter(counter+1)
    console.log(counter);
  }

  const counterdown =()=>{
    if(counter>0)
    setcounter(counter-1);
    console.log(counter);
  }
  const reset=()=>{
    setcounter(0)
  }

  return (
    <>
      <h1>Counter by Pankil </h1>
      <h2>Counter {counter}</h2>
      <button onClick={counterup}>Counter up</button>
      { "  "}
      <button onClick={counterdown}>Counter down</button>


      <h2>footer {counter}</h2>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
