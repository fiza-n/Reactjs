import Button from "./Button"
import arrowRight from "../assets/arrow-right.svg"
import offer from "../assets/offer.svg"
const Specialoffers = () => {
  return (
  <section className="flex justify-between flex wrap items-center max-lg:flex-col-reverse gap-10 max-container">
    <div className="flex-1">
      <img src={offer} alt="" width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex-1 flex flex-col gap-6 mb-20">
       <h2 className="font-bold text-4xl "><span className="text-red-400">Special</span> Offers</h2>
      <p className="text-gray-500 text-[1.1rem]">Get ready to step up your style with our exclusive special offers on shoes! Enjoy incredible discounts on premium-quality footwear that combines comfort, durability, and fashion in one perfect pair.From sleek casuals to high-performance sneakers, every style is available at unbeatable prices for a limited time. </p>
      <p className="text-gray-500 text-[1.1rem">Don’t miss the chance to upgrade your collection and experience luxury without breaking the bank — because great shoes shouldn’t come with a heavy price tag. Shop now and walk your way to savings!</p>
      <div className="flex gap-2">
        <Button label="Shop Now" iconURL={arrowRight} />
        <button className=" flex justify-center items-center max-sm:ml-18 mt-5 px-7 py-4 gap-2 border font-montserrat text-lg leading-one rounded-full text-gray-500">Learn more</button>
     </div>
    </div>
  </section>
  )
}

export default Specialoffers