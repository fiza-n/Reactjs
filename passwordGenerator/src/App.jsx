import { useCallback, useEffect, useState,useRef } from 'react'



function App() {
  const [length,setLength] = useState(8)
  const [includeNumbers,setIncludeNumbers] = useState(false)
  const [includeCharacters,setIncludeCharacters] = useState(false)
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(includeNumbers) str+= "0123456789"
      if(includeCharacters) str+= "!@#$%^&*()_+~`|}{[]:;?><,./-="
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char)
    }
    

setPassword(pass);

  },[length,includeNumbers,includeCharacters,setPassword])

  const copypasswordtoClipboard= useCallback(()=>{
    Reference.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,includeCharacters,includeNumbers,passwordGenerator])

  const Reference = useRef(null);
 return (
 <section className='w-full h-screen bg-[#101010] flex  justify-center items-center'>
  <div className='flex justify-center flex-col p-6 items-center rounded-3xl bg-gray-700'>
    <h2 className='font-bold text-2xl text-white'>Password Generator</h2>
    <div className='flex justify-between items-center '>
      <input type="text" value={password} readOnly
       ref={Reference} className='p-2 mt-2 w-full border rounded-xl border-black' />
      <button onClick={copypasswordtoClipboard} className='bg-blue-500 p-2 m-2 text-white font-bold'>Copy</button>
    </div>
    <div className='flex gap-2.5'>
      <div className='flex justify-center items-center'>
        <input type="range"
         min={6}
          max={50}
          onChange={(e)=>{setLength(e.target.value)}}
            value={length}
           className='p-2 m-2  border border-black'
           />
        <label>Length:{length}</label>
      </div>
      <div className='flex justify-center items-center'>
        <input type="checkbox"
          id='numbers'
        defaultChecked={includeNumbers} 
        onChange={()=>{setIncludeNumbers((prev)=>!prev)}}/>
      <label htmlFor='numbers'>Numbers</label>
      </div>
      <div className='flex justify-center items-center'>
        <input type="checkbox"
         id='characters'
          defaultChecked={includeCharacters}
           onChange={()=>{setIncludeCharacters((prev)=>! prev)}} />
      <label htmlFor='characters'>Characters</label>
      </div>

    </div>
  </div>
 </section>
 )
}

export default App
