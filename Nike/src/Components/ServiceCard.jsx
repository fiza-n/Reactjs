

const ServiceCard = ({imgURL,label,subtext}) => {
    
  return (
   <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-md flex justify-center items-center flex-col gap-4 shadow-lg px-10 py-16">
    <img src={imgURL} alt="icons" className="bg-red-400 rounded-full p-2" />
    <h3 className="mt-3 font-bold font-palanquin text-2xl">{label}</h3>
    <p className="text-gray-500 text-[1.1rem] text-center font-sans">{subtext}</p>
   </div>
  )
}

export default ServiceCard