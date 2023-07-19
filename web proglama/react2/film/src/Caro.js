import { width } from '@mui/system';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import resim3 from './img/resim3.JPG'
import resim6 from './img/images.jpg'
import resim5 from './img/resim5.JPG'
const Caro = () => {
  return (
    <Carousel className=''  >
   
   
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={resim6}
        alt="Third slide"
        
      />

        

      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Caro