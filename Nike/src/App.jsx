import Nav from './Components/Navbar'
import Hero from './Components/Hero'
import PopularProducts from './Components/Popularproducts'
import Superquality from './Components/Superquality'
import Services from './Components/Services'
import Specialoffers from './Components/Specialoffers'
import Customerreviews from './Components/CustomerReviews'
import Subscribe from './Components/Subscribe'
import Footer from './Components/Footer'

function App() {
  return (
    <main className='relative'>
      <section><Nav /></section>

      {/* use standard Tailwind padding classes */}
      <section className='xl:pr-6 pr-4 pb-6'><Hero /></section>

      <section className='sm:px-10 px-8 sm:py-24'><PopularProducts /></section>
      <section className='sm:px-10 px-8 sm:py-24 py-10'><Superquality /></section>
      <section className='sm:px-10 px-8 sm:py-24'><Services /></section>
      <section className='sm:px-10 px-8 sm:py-24'><Specialoffers /></section>

      <section className='sm:px-10 px-8 sm:py-24 bg-blue-200'><Customerreviews /></section>
      <section className='sm:px-10 px-8 sm:py-32 py-16 w-full'><Subscribe /></section>
      <section className='sm:px-10 px-8 bg-black pt-8 pb-8'><Footer /></section>
    </main>
  )
}

export default App
