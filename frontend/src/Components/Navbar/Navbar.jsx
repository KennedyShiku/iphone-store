import React from 'react'
import logo from '../Assets/iphone_store.png';
import { FiShoppingCart } from "react-icons/fi";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>Shop<hr/></li>
        <li>iPhones</li>
        <li>Laptops</li>
        <li>Audio</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <FiShoppingCart />
      </div>
    </div>
  )
}

export default Navbar
