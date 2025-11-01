import React from 'react'
import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {

    const data = useLoaderData();
    // const [data,setData] = useState([]);
    //  useEffect(() =>{
    //     fetch('https://api.github.com/users/fiza-n')
    //     .then(res=> res.json())
    //     .then(data=> setData(data)) 
    // },[])

  return (
    <>
    <div className='bg-gray-700 text-center text-3xl p-4 text-white'>Followers: {data.followers}
   
    </div>
    <div className='flex justify-center items-center flex-col mt-10 gap-5 bg-gray-200 p-10 rounded-lg'>
     <img src={data.avatar_url} width={500} height={500} className='rounded-full object-contain' />
   </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/fiza-n');
    return response.json();
}