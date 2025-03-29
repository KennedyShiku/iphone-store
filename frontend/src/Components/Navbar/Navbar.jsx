import React, { useState } from 'react'
import logo from '../Assets/iphone_store.png';
import { FiShoppingCart } from "react-icons/fi";
import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    
    const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>iPhone Store Kenya</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("iphones")}}><Link style={{textDecoration: 'none'}} to='/iphones'>iPhones </Link>{menu === "iphones" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("laptops")}}><Link style={{textDecoration: 'none'}} to='laptops'>Laptops</Link> {menu === "laptops" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("audio")}}><Link style={{textDecoration: 'none'}} to='/audio'>Audio</Link>{menu === "audio" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
        <Link style={{textDecoration: 'none'}} to='/cart'><FiShoppingCart size={25}/></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
