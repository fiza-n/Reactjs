import Button from "./Button"
import arrowRight from "../assets/arrow-right.svg"

const Hero = () => {
  return (
    <section className>
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-10 px-8 ">
        <p className="text-lg font-montserrat text-red-400">Our Summer Collections</p>
        <h1 className="mt-10 font-palanquin text-6xl font-bold leading-tight max-sm:text-[72px] max-sm:leading-[82px]">
          <span>The New Arrivals </span>
          <br />
          <span>Nike Shoes</span>
        </h1>
        <p>Discover Stylish Nike arrivals, quality comfort and innovation for your active life</p>
        <Button label="Shop Now" iconURL={arrowRight} />
      </div>
      <div className="flex flex-row justify-start items-start gap-20 ml-20 flex-wrap ">
        <div>
          <h2 className="font-bold text-3xl font-montserrat">1k+</h2>
          <p className="text-gray-500  font-montserrat">Brands</p>
        </div>
        <div>
          <h2 className="font-bold text-3xl  font-montserrat">500+</h2>
          <p className="text-gray-500  font-montserrat">Shops</p>
        </div>
        <div>
          <h2 className="font-bold text-3xl  font-montserrat">250k+</h2>
          <p className="text-gray-500  font-montserrat">Customers</p>
        </div>
      </div>
    </section>
  )
}

export default Hero