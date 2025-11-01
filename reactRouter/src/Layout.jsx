import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header />
     <main className="max-w-4xl mx-auto px-4"> {/* constrain width */}
        <Outlet />
      </main>
    <Footer />
    </>
  )
}

export default Layout