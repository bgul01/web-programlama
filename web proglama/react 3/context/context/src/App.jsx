import { useState } from 'react'

import './App.css'
import degisken from './context/auth-context'
import Auth from './auth'
function App() {

  const [Loginn, setLoginn] = useState(false)

  const loginA = () =>{

  setLoginn(true)
  alert('giriş yapıldı')

   

}
const logouta = () =>{

  setLoginn(false)
  alert('çıkış yapıldı')

   

}

  return (
    <degisken.Provider value={{status:Loginn,login:loginA,logout:logouta}}>
      <Auth/>
    </degisken.Provider>
   
  )
}

export default App
