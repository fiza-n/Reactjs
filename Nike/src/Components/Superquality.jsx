import Button from "./Button"
import shoe8 from "../assets/shoe8.svg"
const Superquality = () => {
  return (
    <section id="aboutus" className="flex justify-between items-center max-lg:flex-col w-full gap-10 max-container">
      
     <div className=" flex flex-1 flex-col gap-3 ml-4">
         
    <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold leading-tight">
      We Provide You <span className="text-red-400">Super <br /> Quality</span> Shoes
     </h2>
     <p className="mt-3 w-[80%] font-montserrat text-gray-500 sm:max-w-sm">Our Super Quality Shoes redefine comfort, durability, and style. Designed with premium-grade materials and advanced craftsmanship, these shoes ensure a perfect blend of elegance and performance.</p>
     <p className="mt-6 lg:max-w-lg  w-[80%] font-montserrat text-gray-500 sm:max-w-sm">Our dedication to the details and excellence ensures your satisfaction</p>
    <div className="mt-11">
       <Button label="View details"/>
    </div>
        </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} width={500} height={500} className="object-contain"/>
      </div>
    </section>
  )
}

export default Superquality