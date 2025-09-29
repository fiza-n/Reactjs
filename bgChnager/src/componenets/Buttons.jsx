import React from 'react'
import { useState } from 'react'

function Buttons(){
    const [color, setColor] = useState("black")
    return (
      <>
      <div className='w-full h-screen flex justify-center items-end ' style={{backgroundColor: color}}>
          <div className='flex justify-center items-center gap-3 flex-wrap mt-10 bg-white p-5 rounded-md w-[50%] mb-3' >
            <button onClick={()=> setColor('red')} className='rounded-md p-2 w-[15%] bg-red-600 cursor-pointer transition-all hover:transform-[scale(1.1)]'>Red</button>
            <button onClick={()=> setColor('blue')} className='rounded-md p-2 w-[15%] bg-blue-600 cursor-pointer transition-all hover:transform-[scale(1.1)]'>Blue</button>
            <button onClick={()=> setColor('green')} className='rounded-md p-2 w-[15%] bg-green-600 cursor-pointer transition-all hover:transform-[scale(1.1)]'>Green</button>  
            <button onClick={()=> setColor('yellow')} className='rounded-md p-2 w-[15%] bg-yellow-600 cursor-pointer transition-all hover:transform-[scale(1.1)]'>Yellow</button>
            <button onClick={()=> setColor('black')} className='rounded-md p-2 w-[15%] text-white bg-black cursor-pointer transition-all hover:transform-[scale(1.1)]'> Black</button>
            <button  onClick={()=> setColor('white')}className='rounded-md p-2 w-[15%] bg-white cursor-pointer transition-all hover:transform-[scale(1.1)]'>White</button>
            <button onClick={()=> setColor('orange')} className='rounded-md p-2 w-[15%] bg-orange-600 cursor-pointer transition-all hover:transform-[scale(1.1)]'>Orange</button>
            <button onClick={()=> setColor('pink')} className='rounded-md p-2 w-[15%] bg-pink-300 cursor-pointer transition-all hover:transform-[scale(1.1)]'>Pink</button>
            <button onClick={()=> setColor('purple')} className='rounded-md p-2 w-[15%] bg-purple-600 cursor-pointer transition-all hover:transform-[scale(1.1)]'> lavender</button>
        </div>
      </div>
      </>
    )
}
export default Buttons