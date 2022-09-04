import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <h1>e-commerce</h1>
      </NavLink>
      <nav className='header-nav'>
        <ul className='header-list'>

          <li className='header-item'>
            <NavLink 
            className={({isActive}) => isActive ? 'active-link' : ''}
            to='/login'>
              Login 
            </NavLink>
          </li>

          <li className='header-item'>
            <NavLink 
            className={({isActive}) => isActive ? 'active-link' : ''}
            to='/purchases'>
              purchases 
            </ NavLink>
          </li>
          <li className='header-item'>cart</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header