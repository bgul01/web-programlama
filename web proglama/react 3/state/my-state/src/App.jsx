import { useState } from 'react'

import './App.css'
import Course from './Course'


function App() {

  function randomCourse(){
    const course = ['angular','bootsrap',"ccsharp"];
   return course[Math.floor(Math.random()*course.length)]
  }


const [courses, setCourses] = useState([''])

const ekle = () => {

  setCourses([...courses,randomCourse()])


}

  return (
    
    <div className="App">
      <button onClick={ekle}>kurs ekle</button>
      {
        courses.map((courser,index)=>{
         return <Course key={index} kurslar= {courser} />

        })
      }
    
    
    </div>
  )
}

export default App
