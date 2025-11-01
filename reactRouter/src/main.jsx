import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, Route, RouterProvider,createRoutesFromElements} from "react-router-dom";
import './index.css'
import Layout from './Layout'
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import Github from './components/Github';
import {githubInfoLoader} from './components/Github';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout />,
//     children: [
//       {
//         path: "",
//         element:<Hero />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]
//   }
// ])

//another way to create routes
const router = createBrowserRouter(
 createRoutesFromElements(
   <Route path='/' element={<Layout />}>
    <Route path='/' element={<Hero />} />
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='user/:userId' element={<User />}/>//No nav link for this just changes in url
    <Route loader={githubInfoLoader} path='github' element = {<Github />} />

  </Route>
 )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
