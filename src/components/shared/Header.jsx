import React from 'react'
import { NavLink } from "react-router-dom";
import './styles/header.css'

const Header = () => {
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
              <i class="fa-solid fa-box-archive header-icon"></i>
            </ NavLink>
          </li>
          <li className='header-item'>
            <i className="fa-solid fa-cart-shopping header-icon">
          </i></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header