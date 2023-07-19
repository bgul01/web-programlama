import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Logo from './logo.png';
import Card from 'react-bootstrap/Card';
import   './App.css';
import { useState } from 'react';


const Ins = () => {
  const [formData, setFormData] = useState({
    email: '', // required
    password: '', // required
    username: '' // optional
})


// function handleSubmit(e) {
//   e.preventDefault()
//   fetch('http://localhost:3001/Users', {
//       method: 'POST',
//       headers: {'Content-Type' : 'application/json'},
//       body: JSON.stringify(setDataa)
//   })
//   .then(res => res.json())
//   .then(data => console.log(data))
// }

// function handleChange(e) {
//   setDataa({...setDataa, [e.target.name] : e.target.value})
// }




//   return (
    





//     <div style={{width:'500px'}} className="container d-flex justify-content-center mt-5  ">

// <Card style={{border:'none',alignItems:'center'}}   className='mt-5'  >
//       <Image  className='resim mt-5  ' style={{}}  variant="top"  src={Logo} />
//       <Card.Body>
    
//         <Form>
//     <Form.Group className="mb-3" controlId="formBasicEmail">
     
//       <Form.Control name='email' value={dataa.email} onChange={e=>handleChange(e)}  type="email" placeholder="Telefon Numarası ,E-posta, Kullanıcı adı" />
//       <Form.Text className="text-muted">
      
//       </Form.Text>
//     </Form.Group>

//     <Form.Group className="mb-3" controlId="formBasicPassword">
 
//       <Form.Control name='password' value={dataa.password} onChange={e=>handleChange(e)} style={{width:'350px'}} type="password" placeholder="Password" />
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="formBasicCheckbox">
//       <Form.Check type="checkbox" label="Check me out" />
//     </Form.Group>
//     <Button onSubmit={e => handleSubmit(e)} style={{background:'#27c4f5',}}   type="submit">
//       Giriş Yap
//     </Button>
//   </Form>
        
        
//       </Card.Body>

      
//     </Card>

function handleSubmit(e) {
  e.preventDefault()
  fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => console.log(data))
}

function handleChange(e) {
  setFormData({...formData, [e.target.name] : e.target.value})
}


return (
  <div>
      <h1>Signup Form</h1>
      <form className='login-form'>
          <input type='text' placeholder='Username' value={formData.username} name='username' onChange={e => handleChange(e)} ></input>
          <input type='text' placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} ></input>
          <input type='text' placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
          <button className='login-btn' type='submit' onSubmit={e => handleSubmit(e)}>Sign Up</button>
      </form>
  </div>
)
}















         
        
        
    

    

export default Ins;