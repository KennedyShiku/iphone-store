import React, { useState } from 'react'
import logo from '../Assets/iphone_store.png';
import { FiShoppingCart } from "react-icons/fi";
import './Navbar.css'

const Navbar = () => {
    
    const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>iPhone Store Kenya</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu("shop")}}><Link to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("iphones")}}><Link to='/iphones'>iPhones </Link>{menu === "iphones" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("laptops")}}><Link to='/laptops'>Laptops</Link> {menu === "laptops" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("audio")}}><Link to='/audio'>Audio</Link>{menu === "audio" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <FiShoppingCart size={25}/>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
