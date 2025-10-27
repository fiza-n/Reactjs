const Button = ({label, iconURL}) => {
  return (
   <section>
     <button className=" flex justify-center items-center max-sm:ml-18 mt-5 px-7 py-4 gap-2 border font-montserrat text-lg leading-one  bg-red-400 rounded-full text-white">{label }
    {iconURL &&<img src={iconURL} alt="" 
    className="ml-2 rounded-full w-5 h-5" />}</button>
    
   </section>
    
  )
}

export default Button