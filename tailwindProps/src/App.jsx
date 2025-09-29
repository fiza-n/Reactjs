// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <div>
//       <h1 className='text-amber-200 font-bold text-7xl'>Hello fiza</h1>
//      </div>
//     </>
//   )
// }

// export default App
"use client";
import { useState } from "react";
import './App.css'
import Card from './components/Card'

export default function Card5() {
   const [isHovered, setIsHovered] = useState(false);

  
     return(
    <>
    <Card username= "fizanoor" />
    <Card username="Mehak" />
    <Card username="nandni" btnText="Signup" />
    </>
   
    
  )
}

