import React from 'react'
import logo from '../Assets/iphone_store.png';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>Shop</li>
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
