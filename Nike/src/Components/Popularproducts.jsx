import shoe4 from "../assets/shoe4.svg"
import shoe5 from "../assets/shoe5.svg"
import shoe6 from "../assets/shoe6.svg"
import shoe7 from "../assets/shoe7.svg"
import PopularProductsCard from "./PopularProductsCard"

const Popularproducts = () => {

   const products = [
      {
          imgURL: shoe4,
          name: "Nike Air Jordan-01",
          price: "$200.20",
      },
      {
          imgURL: shoe5,
          name: "Nike Air Jordan-10",
          price: "$210.20",
      },
      {
          imgURL: shoe6,
          name: "Nike Air Jordan-100",
          price: "$220.20",
      },
      {
          imgURL: shoe7,
          name: "Nike Air Jordan-001",
          price: "$230.20",
      },
  ];
  return (
    <section id="products" className="p-4 mt-10 max-sm:mt-12">
      <div className="flex flex-col justify-start gap-6">
        <h2 className="text-4xl font-montserrat font-bold">Our <span className="text-red-400">Popular</span> Products</h2>
        <p className="text-[1rem] lg:max-w-lg mt-2 text-gray-500 ">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value.</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product)=>(
          <PopularProductsCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default Popularproducts