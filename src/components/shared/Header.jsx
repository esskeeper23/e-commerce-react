import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import './styles/header.css'
import CartModal from "./CartModal";

const Header = () => {

  const [isCartOpen, setIsCartOpen] = useState(false)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  return (
    <header className='header'>
      <NavLink to='/'>
        <h1 className='header-title'>e-commerce</h1>
      </NavLink>
      <nav className='header-nav'>
        <ul className='header-list'>

          <li className='header-item'>
            <NavLink 
            className={({isActive}) => isActive ? 'active-link' : ''}
            to='/login'>
              <i className="fa-regular fa-user header-icon"></i>
            </NavLink>
          </li>

          <li className='header-item'>
            <NavLink 
            className={({isActive}) => isActive ? 'active-link' : ''}
            to='/purchases'>
              <i className="fa-solid fa-box-archive header-icon"></i>
            </ NavLink>
          </li>
          <li onClick={isCartOpen ? closeCart : openCart} className='header-item'>
            <i  className="fa-solid fa-cart-shopping header-icon"></i>
          </li>
        </ul>
      </nav>
      <CartModal 
      isCartOpen={isCartOpen}
      closeCart={closeCart}
      />
    </header>
  )
}

export default Header