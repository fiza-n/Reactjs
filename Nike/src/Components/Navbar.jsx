import headerlogo from '../assets/header-logo.svg'
import hamburger from '../assets/hamburger.svg'

const Navbar = () => {
  const links = [
    {
      href: '#home',lable:'Home'
    },
     {
      href: '#aboutus',lable:'About Us'
    },
     {
      href: '#products',lable:'Products'
    },
     {
      href: '#conatctus',lable:'Contact Us'
    }
  ]
  return (
    <header className='sm:px-10 px-8 z-10 w-full py-8 flex justify-center items-center'>
        <nav className='flex justify-between items-center max-w-[1440px] mx-auto gap-50'>
            <a href='/'>
                <img src ={headerlogo}
                width={130}
                height={29} alt="logo" />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
             {links.map((link)=>(
              <li key={link.lable}>
                <a href={link.href} className='font-inter leading-lg text-lg text-gray-500'>{link.lable}</a>
              </li>
             ))}
              {links.lable}
            </ul>
            <div className='hidden max-lg:block cursor-pointer'>
              <img src={hamburger} alt="Hamburger" width={25}
              height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar