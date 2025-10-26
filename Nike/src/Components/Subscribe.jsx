import Button from "./Button"
const Subscribe = () => {
  return (
    <section className="flex max-container justify-between items-center max-lg:flex-col gao-10" id="contactus">
      <h2 className="font-bold text-4xl font-palanquin lg:max-w-md">Sign Up for <span className="text-red-400">Updates</span> & Newsletter</h2>
      <div  className="lg:max-w-[40%] w-full flex items-center gap-4 p-2.5 sm:border sm:border-gray-300 rounded-full bg-white shadow-sm">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  )
}

export default Subscribe