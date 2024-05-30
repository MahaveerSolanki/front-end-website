import { useState,useContext } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Coursepage from './components/Coursepage/Coursepage' 
import Blog from './components/blogpage/Blog'
import Event from './components/eventpage/Event'
import Contact from './components/contactpage/Contact'
import { MyContext } from './components/mycontext/context'
import Id from './components/courseid/Id'

function App() {
   const colours = {
    bg:'white',
    text:'black',
    primary:'#6d55be',
    secondary:'#987bf4',
    accent:'#9384c7'

  }
  const router = createBrowserRouter([
      { path: '/', element: <div className={'overflow-y-scroll h-svh bg-bg'}>
      <Navbar/>
      <Homepage/>
      <Footer/>
      </div>},
      { path: '/courses', element:<div className='overflow-y-scroll h-svh bg-bg'>
      <Navbar />
      <Coursepage/>
      <Footer/>
      </div>},
      { path: '/courses/:index', element:<div className='overflow-y-scroll h-svh bg-bg'>
      <Navbar />
      <Id/>
      </div>},
      { path: '/blog', element:<div className='overflow-y-scroll h-svh bg-bg'>
      <Navbar />
      <Blog/>
      <Footer/>
      </div>},
      { path: '/event', element:<div className='overflow-y-scroll h-svh bg-bg'>
      <Navbar />
      <Event/>
      <Footer/>
      </div>},
      ])
  

  return (
    <>
    <MyContext.Provider value={colours}>
    <RouterProvider router={router}/>
    </MyContext.Provider>
    
    </>
  )
}


export default App
