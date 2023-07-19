import React, { useContext } from 'react'
import degisken from './context/auth-context'
const auth = () => {

   const{status,login,logout}= useContext(degisken)
   console.log(status)
  return (
    <div>
        {status ? <h3>çoktan </h3>:<h3>giriş yapılmadı </h3> }
        <button onClick={login}>giriş yap</button>
        <button onClick={logout}>çıkış yap</button>
    </div>
  )
}

export default auth