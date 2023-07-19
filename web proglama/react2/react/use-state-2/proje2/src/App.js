import logo from './logo.svg';
import './App.css';
import Course from './course.';
import {useState} from 'react';




function getRandomCourse (){

  const courseArray  = ['Angular', 'Bootstrap', 'Ccsharp','KompleWeb'];
  return courseArray[Math.floor(Math.random()*courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([])
  const handleClick=() => {
    setCourses([...courses, getRandomCourse()])
  }
  return (
    <div className="App">
      <button onClick={handleClick}>EKLE buton</button>
      {
        courses.map((course,index)=>{
         return <Course key={index} courseName={course} />

  })
        }
      <Course/>
    </div>
  );
}

export default App;
