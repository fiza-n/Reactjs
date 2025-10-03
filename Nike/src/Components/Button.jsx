const Button = ({label, iconURL}) => {
  return (
    <button className=" flex justify-center items-center px-7 py-4 gap-2 border font-montserrat text-lg leading-one bg-red-500 rounded-full text-white">{label }
    <img src={iconURL} alt="" 
    className="ml-2 rounded-full w-5 h-5" /></button>
  )
}

export default Button