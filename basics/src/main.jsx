import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Hello My react</h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children:'Click Me'
// }

const anotherElement  = (
  <a href='https://www.google/com' target='_blank'>Click Me</a>
)
//MAKING REACT ELEMENT USING REACT.CREATEELEMENT AND RENDERING IT USING REACTDOM
const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click Me to Visit Google'
)

createRoot(document.getElementById('root')).render(

    <App />

)
