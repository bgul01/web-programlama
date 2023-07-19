import React from 'react'
import Angular from './resim/abc.jpg'


const Course = ({kurslar}) => {
    
    const resimler = {

        Angular : Angular,
        bootsrap :Angular
    }
    
    console.log(kurslar)
  return (
    <div> <img src={resimler[kurslar]} alt="" />
    </div>
  )
}

export default Course