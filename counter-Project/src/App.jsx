import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [value, setValue] = useState(0)
  // let value = 0;

  const addvalue = ()=>{
    console.log("Button Clicked", value);
    value = value+1;
    if(value === 20){
      alert("Value is 20, You can't add more than 20")
      value = 20
    }
    setValue(value)
  }

  const reomveValue = ()=>{
    value = value-1;
    if(value < 0){
      value = 0
    }
    setValue(value)
  }
    return (
    <>
     <h1>Counter Project</h1>
     <h3>Counter Value: {value}</h3>

     <button
     onClick={addvalue}>Add Value</button>
     <br></br>
     <br></br>
     <button
     onClick={reomveValue}>Delete Value</button>
    </>

  )
}

export default App
