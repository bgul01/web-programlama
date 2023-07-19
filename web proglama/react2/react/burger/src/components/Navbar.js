import React from 'react';
import Burgerlogo from '../assets/burgerlogo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'><div className='main'>
        <img  src={Burgerlogo} />
            
            <div className='mainLink'>
<Link to='/'>Anasayfa</Link>
<Link to='/menu'>MENÜ</Link>
<Link to='/about'>HAKKIMIZDA</Link>
<Link to='/contact'>İLETİŞİM</Link>
            </div>
            
            </div>
            </div>
  )
}

export default Navbar