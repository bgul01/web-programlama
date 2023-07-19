import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const Home = () => {

 const { user} = useSelector (state  => state.auth)

 if (user) {
  return (
    <div>
    <h1>hoşgeldin</h1>
    </div>
  )

 }


  return (
    <div>

        <Link to="/Login" > GİRİŞ YAP</Link>
        <Link  to="/register">Kayıt ol</Link>
    </div>
  )
}

export default Home