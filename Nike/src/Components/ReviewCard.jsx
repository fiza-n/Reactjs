import star from "../assets/star.svg"

const ReviewCard = ({imgURL ,customerName, rating,feedback}) => {
  return (
    <section className="flex justify-center items-center flex-col gap-6 max-w-sm text-center">
        <img src={imgURL} alt={customerName} className="object-cover rounded-full w-[120px] h-[120px]" />
        <p className="text-gray-500 text-xl">{feedback}</p>
       <div className="flex gap-2">
         <img src={star} alt="ratings" width={24} height={24} className="object-contain m-0" />
         <p className="text-gray-500 text-xl">({rating})</p>
        
       </div>
       <p className="text-xl font-bold font-palanquin">{customerName}</p>
    </section>
  )
}

export default ReviewCard