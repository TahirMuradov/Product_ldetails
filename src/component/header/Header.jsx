import React, { useContext } from 'react'
import '../../../src/index.css'
import'../../styles.css';
import'../header/header.scss'
import logo from '../header/img/compar logo1@2x.png'
import { Link } from 'react-router-dom'
import ThemeSwitcher from '../header/ThemeSwitcher'
import ThemeContext from '../context/ThemeContext'
const Header = () => {
  const {theme}=useContext(ThemeContext)
  return (
<>


<header id='header' className={`w-full m-0 bg-gray-800 h-auto ${theme === 'dark' ? 'dark-theme' : ''}`} >
<div className="container md:h-4/5 m-auto flex justify-between items-center">
<div className="logo py-5 w-40">
 <Link to={'/'}>
  <img src={logo} alt="" className='w-100' />
  </Link> 
</div>
<div className="icons-bar block md:hidden">
<i className="fa-solid fa-bars text-white text-4xl"></i>
</div>
<div className="nav-bar hidden md:block ">
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
   <ThemeSwitcher/>
    </ul>
</div>
</div>
    </header>

</>
  )
}

export default Header