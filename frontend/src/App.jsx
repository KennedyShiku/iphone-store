import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Shop/>}/>
        <Route path='/iphones'  element={<ShopCategory category="iphones"/>}/>
        <Route path='/laptops'  element={<ShopCategory category="laptops"/>}/>
        <Route path='/audio'  element={<ShopCategory category="audio"/>}/>
        <Route path='product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart'  element={<Cart/>}/>
        <Route path='/login'  element={<LoginSignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
