import React from 'react'
import '../../../src/index.css'
import'../header/header.scss'
import logo from '../header/img/compar logo1@2x.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
<>
<header id='header' className='w-full bg-gray-800 h-auto'>
<div className="container md:h-4/5 m-auto flex justify-between items-center">
<div className="logo py-5 w-40">
  <img src={logo} alt="" className='w-100' />
</div>
<div className="nav-bar ">
  <ul className='flex '>
    <li className='px-7'>
      <Link  to={"/"}>
     Home
      </Link>
      </li>
    <li className='px-7'> 
    <Link  to={"/about"}>
     About
      </Link></li>
    <li className='px-7'>
    <Link  to={"/contact"}>
    Contact
      </Link>
    </li>
 
  </ul>
</div>
</div>
    </header>
</>
  )
}

export default Header