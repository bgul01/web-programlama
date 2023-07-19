import React from 'react'
import {useNavigate} from 'react-router-dom';
function Mission() {
    const navigate  = useNavigate();
  return (
    <>
    <div>misson</div>
    <button onClick={()=>navigate('/')}>home a git</button>
    </>
  )
}

export default Mission