import React from 'react'
import useCounter from './useCounter'
// import { useState } from 'react'



function Sayac() {
    // const [num, setNum] = useState(0);
    // const increment   = () => {
    //     setNum((prevNum)=> prevNum + 1 );
    // }
    // const decrement   = () => {
    //     setNum((prevNum)=> prevNum - 1 );
    // }
    // const reset   = () => {
    //     setNum((0) );
    // };

   const[num,increment,decrement,reset]= useCounter();
  return (
    <div> <h2>sayi  = {num}</h2>
        <button onClick={increment}>artırma</button>
        <button onClick={decrement}>azaltma</button>
        <button onClick={reset}>sıfırlama</button>
    </div>
  )
}

export default Sayac