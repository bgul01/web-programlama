import Course from './Course';
import React from 'react';

function Courses({ courses, removeCourse }) {
    console.log(courses);
  return (
  <div>
    <h2>KUrslarım</h2>
    <div className=''>
      {
        courses.map((cours)=>{

          return(
          
            
            <Course key={cours.id} {...cours} removeOneCourse={removeCourse} />
            // course={cours}
          )
        })
      }
    </div>

    </div>
  );
}

export default Courses;
