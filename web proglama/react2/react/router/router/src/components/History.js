import React from 'react'
import {  Link, Outlet } from 'react-router-dom'; // iç içe linkte outlet i  kullan
function History() { // iç içe root da / olmaz!
  return (
<>
    <div>History</div>
 
    <nav>
 <Link  to="company">Our Companies</Link> 
 <Link className='ms-2' to="team">Management</Link>
    </nav>
<Outlet/>
    </>
  )
}

export default History