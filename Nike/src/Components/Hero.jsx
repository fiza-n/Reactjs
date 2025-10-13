import Button from "./Button"
import { useState } from "react"  
import arrowRight from "../assets/arrow-right.svg"
import bigShoe1 from "../assets/big-shoe1.png"
import bigShoe2 from "../assets/big-shoe2.png"
import bigShoe3 from "../assets/big-shoe3.png"
import thumbnailShoe1 from "../assets/thumbnail-shoe1.svg"
import thumbnailShoe2 from "../assets/thumbnail-shoe2.svg"
import thumbnailShoe3 from "../assets/thumbnail-shoe3.svg"
import ShoeCard from "./ShoeCard"

const Hero = () => {
 
 const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  
  const shoe = [

    {
      thumbnail: thumbnailShoe1,
       bigShoe: bigShoe1
   },
    {
         thumbnail: thumbnailShoe2,
         bigShoe: bigShoe2
   },
      {
          thumbnail: thumbnailShoe3,
           bigShoe: bigShoe3
    },
  ]


  return (
    <section className=" ml-20 mt-10">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-10 px-8 ">
        <p className="text-lg font-montserrat text-red-400">Our Summer Collections</p>
        <h1 className="mt-10 font-palanquin text-6xl font-bold leading-tight max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">The New <span>Arrival</span> </span>
          <br />
          <span className="text-red-400 mt-3 inline-block">Nike </span> Shoes
        </h1>
        <p className="mt-3 w-[80%] font-montserrat text-gray-500 sm:max-w-sm">Discover Stylish Nike arrivals, quality comfort and innovation for your active life</p>
        <Button label="Shop Now" iconURL={arrowRight} />
      </div>
      <div className="flex flex-row justify-start items-start gap-20 ml-10 flex-wrap mt-10 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="font-bold text-4xl font-palanquin">1k+</h2>
          <p className="text-gray-600  font-montserrat">Brands</p>
        </div>
        <div  className="flex flex-col justify-center items-center gap-2">
          <h2 className="font-bold text-4xl  font-palanquin">500+</h2>
          <p className="text-gray-600  font-montserrat">Shops</p>
        </div>
        <div  className="flex flex-col justify-center items-center gap-2">
          <h2 className="font-bold text-4xl  font-palanquin">250k+</h2>
          <p className="text-gray-600  font-montserrat">Customers</p>
        </div>
      </div>
      <div className="absolute  flex justify-center items-start right-0 top-0 z-0 max-xl:hidden w-[60%] h-[700px] bg-blue-50 bg-cover bg-hero bg-center">
     <div className="relative top-20">
         <img src={bigShoeImg} alt="Shoe1"  width={500} height={500}  className="top-30"/>
     </div>
     <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
      {shoe.map((shoe) => (
        <div key={shoe} >
          <ShoeCard 
          imgURL = {shoe}
          changetoBigshoe ={(shoe)=>{setBigShoeImg(shoe)}}
          bigShoeImg ={bigShoeImg}/>
        </div>
      ))}

     </div>
      </div>
    </section>
  )
}

export default Hero