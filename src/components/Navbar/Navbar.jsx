//import React from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className='navbar-menu'>
      <li>home</li>
      <li>menu</li>
      <li>mobile-app</li>
      <li>contact us</li>
      </ul>
        <div className="navbar-right">
        <img src={assets.search_icon} alt='' />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt='' />
          <div className='dot'></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
    
  )
}

export default Navbar
