import React from 'react'
import './Hero.css'
import iphone_16 from '../Assets/iphone_16_1.png'
import { CiLocationArrow1 } from "react-icons/ci";
import { FaHandHolding } from "react-icons/fa";
import Waving from '../Assets/waving-hand.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS</h2>
        <div>
            <div className="hero-hand-icon">
                <p>Your</p>
                <img src={Waving} alt="" />
            </div>
            <p>Next</p>
            <p>iPhone awaits</p>
        </div>
        <div className="hero-latest-button">
            <div>Latest Collection</div>
            <CiLocationArrow1 />
        </div>
      </div>
      <div className="hero-right"> 
        <img src={iphone_16} alt="" />
      </div>
    </div>
  )
}

export default Hero
