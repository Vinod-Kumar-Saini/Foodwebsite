import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo_01} alt="" />
      <img className='profile' src={assets.profile_01} alt="" />
    </div>
  )
}

export default Navbar
