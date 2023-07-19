import React from 'react'
import { useContext } from 'react'
import {NumberContext} from './App'
 
const Calculate = () => {

    const number = useContext(NumberContext)
  return (
    <>
    <div>
        <div>{number.count}</div>

    <button onClick={()=>number.dispatch('increment')}>artır</button>
    
    <button onClick={()=>number.dispatch('decrement')}>azalt</button>
    <button onClick={()=>number.dispatch('reset')}>sıfırla</button>
    </div>
    </>
  )
}

export default Calculate