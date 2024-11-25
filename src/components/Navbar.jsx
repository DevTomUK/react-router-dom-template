import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
    </div>
  )
}
