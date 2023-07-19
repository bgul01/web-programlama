import React from 'react'
import {Link} from 'react-router-dom' 
const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to="/">home</Link> <br />
            <Link to="/abut">abaout us</Link>
        </nav>
    </div>
  )
}

export default Navbar