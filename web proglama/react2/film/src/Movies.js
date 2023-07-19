import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import resim1 from './img/17.jpg'
import './App.css';


const Movies = () => {
  return (

<Card className='mt-5 ms-5' style={{ width: '21rem',border:'none' }}>
      <Card.Img variant="top" src={resim1} />
      
     
    </Card>


//     
  )
}

export default Movies