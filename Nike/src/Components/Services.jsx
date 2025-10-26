import truckFast from "../assets/truck-fast.svg"
import shieldTick from "../assets/shield-tick.svg"
import support from "../assets/support.svg"
import ServiceCard from "./ServiceCard"

const Services = () => {
   const services = [
      {
          imgURL: truckFast,
          label: "Free shipping",
          subtext: "Enjoy seamless shopping with our complimentary shipping service."
      },
      {
          imgURL: shieldTick,
          label: "Secure Payment",
          subtext: "Experience worry-free transactions with our secure payment options."
      },
      {
          imgURL: support,
          label: "Love to help you",
          subtext: "Our dedicated team is here to assist you every step of the way."
      },
  ];
  
  return (
    <section className="flex flex-wrap  justify-center gap-9 max-container">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>          
  )
}

export default Services