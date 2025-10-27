import Button from "./Button"
const Subscribe = () => {
  return (
    <section className="flex max-container justify-between items-center max-lg:flex-col gao-10" id="contactus">
      <h2 className="font-bold text-4xl font-palanquin lg:max-w-md">Sign Up for <span className="text-red-400">Updates</span> & Newsletter</h2>
      <div  className="lg:max-w-[60%] w-full flex justify-between items-center gap-4 px py sm:border sm:border-gray-300 rounded-full bg-white sm:mt-6 shadow-sm">
        <input type="text" placeholder="subscribe@nike.com" className=" px-4 py-3 rounded-full bg-transparent placeholder-gray-400 text-gray-700 focus:outline-none  focus:ring-opacity-50 transition"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  )
}

export default Subscribe