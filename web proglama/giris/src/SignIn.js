import { React,  useState } from 'react'
import 'bulma/css/bulma.min.css'
import { register } from './firebase';
import { async } from '@firebase/util';



const SignIn = () => {
  
  

  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
  
  const handleSubmit = async e => {
  e.preventDefault()

try {
 const user  = await register(email,password)
 

 return user
} catch(error){

    console.log(error.message)
}


  }

  if (user===user){

alert('oluştuurldu');

  }
 


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  





    return (

    <> 
    <div classNameNameName='container'>
    <div classNameName='row '>
       
       <form></form>
        <div className="field">
  <p className="control has-icons-left has-icons-right">
    <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </p>
</div>
<div className="field">
  <p className="control has-icons-left">
    <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
    <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
  </p>
</div>
<div className="field">
  <p className="control">
    <button disabled={!email|!password} onClick={handleSubmit} className="button is-success">
      Kayıt ol
    </button>
  </p>
</div>
    </div>
    </div>
    
    </>
  )
}



export default SignIn