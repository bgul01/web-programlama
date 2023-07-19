import { useEffect, useState } from 'react'

import './App.css'

function App() {


useEffect(()=>{

  
})






  const [can, setcan] = useState(0)
  const [tuba, settuba] = useState(0)

  return (
    <div className="App">
     <div>
      <button onClick={()=>setcan(can +1)}>Can ++</button>
      <div>Can:{can}</div>

      <button onClick={()=>settuba(tuba +1)}>tugba ++</button>
      <div>tugba:{tuba}</div>
     </div>
    </div>
  )
}

export default App
