import React from 'react'
import {Link} from 'react-router-dom'

 // NavLink olarak yazarsanız link yerine active ğasif özelliğinide kullanbilirsin
function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg  bg-primary'>
            <Link className='text-white ' to="/">Home</Link>
          <Link className='text-white ms-2' to="/aboutUs">About</Link>
          <Link className='text-white ms-2' to="/history">history</Link>
    </nav>
    
  )
}

export default Navbar