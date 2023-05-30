import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Contac from '../pages/contact/Contac'
import About from '../pages/about/About'
import Product_details from '../pages/products_details/Product_details'
import Eror_pages from '../pages/eror404/Eror_pages'


const Myrouters = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contac/>}/>
        <Route path='about/:id' element={<Product_details/>}/>
        <Route path='*' element={<Eror_pages/>}/>
       
       
    </Routes>
    </>
  )
}

export default Myrouters