import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Contac from '../pages/contact/Contac'
import About from '../pages/about/About'

const Myrouters = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contac/>}/>
       
    </Routes>
    </>
  )
}

export default Myrouters