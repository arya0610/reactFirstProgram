import { useState } from "react"

function App(){
  let [counter,setCounter]=useState(15)

const addValue =()=>{
  setCounter(counter+1)
}

const removeValue=()=>{
  setCounter(counter-1)

}

  return (
    <>
        <h1>Counter Value: </h1>
       <button onClick={addValue}>Add value {counter}</button>
       <p>AND</p>
       <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
