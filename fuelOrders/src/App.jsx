import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddOrders from './components/AddOrders'
import OrdersList from './components/OrdersList'

function App() {
 

  return (
    <>
     <AddOrders />
     <OrdersList />
    </>
  )
}

export default App
