import React from 'react';
function Course({ id, content, title, price, removeOneCourse }) {
  return (
    <>
  <div className='cardTitlePrice'>
    <h2 className='cardTitle'>{title}</h2>
    <h4 className='cardPrice'>{price}Tl</h4>
  </div>
  <div>
  <button onClick={()=>removeOneCourse(id)}>Sil</button>
  </div>
  </>
  );
}

export default Course;
