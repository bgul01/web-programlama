import React from 'react'
import { useState } from 'react'
 import {useInput} from './useInput'


 function Personalinfo() {
 
//   const [firstName, setFirstName] = useState('');
//    const [lastname, setLastname] = useState('');

    const[firstName,bindFirstname,resetFirstname] = useInput('');
    const[lastName,bindLastname,resetLastname] = useInput('');





const submitForm  = (e) => {

    e.preventDefault();
    alert(`merhaba ${firstName} ${lastname}`);
}
  return (

    <form>
        <div>
            <label>ad</label>
            <input
             type="text"
            //   value={firstName}
            // onChange={(e)=> setFirstName(e.target.value)}
            {...bindFirstname}/>
        </div>
        <div>
            <label>soyad</label>
            <input
             type="text"
            //   
            {...bindLastname}/>
        </div>
        <button onClick={submitForm}>KAYDET</button>
    </form>
    
  )
}

export default Personalinfo