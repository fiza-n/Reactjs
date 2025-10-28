import { useCallback, useState } from 'react'



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
    for(let i=1; i<=str.length; i++){
      let char =Math.floor(Math.random() * str.length +1);
      pass= str.charAt(char)
    }
    

setPassword(pass);

  },[length,includeNumbers,includeCharacters,setPassword])
 return (
 <section className='w-full h-screen bg-[#101010] flex  justify-center items-center'>
  <div className='flex justify-center flex-col p-6 items-center rounded-3xl bg-gray-700'>
    <h2 className='font-bold text-2xl text-white'>Password Generator</h2>
    <div className='flex justify-between items-center '>
      <input type="text" className='p-2 mt-2 w-[100%] border rounded-xl border-black' />
      <button className='bg-blue-500 p-2 m-2 text-white font-bold'>Copy</button>
    </div>
    <div className='flex gap-2.5'>
      
      <input type="range" className='p-2 m-2 w-full border border-black' />
      <p>Length(16)</p>
      <input type="checkbox" className='w-[50px]' />
      <p>Numbers</p>
      <input type="checkbox" className='w-[50px]' />
      <p>Characters</p>

    </div>
  </div>
 </section>
 )
}

export default App
