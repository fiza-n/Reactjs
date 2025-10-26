import star from "../assets/star.svg"

const PopularProductsCard = ({imgURL, name ,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
    <div className="mt-8 flex flex-col  justify-start gap-2.5">

      <div className="flex gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
       <p className="font-montserrat  text-xl leading-normal text-gray-500">(4.5)</p>
      </div>
       <h3 className="font-semibold mt-2 font-palanquin text-2xl">{name}</h3>
       <p className="text-red-400 font-montserrat font-semibold mt-3">{price}</p>

     </div>
    </div>
  )
}

export default PopularProductsCard