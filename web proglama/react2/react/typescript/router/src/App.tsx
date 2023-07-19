import React from 'react';
import './App.css';

 import Home from './components/Home';
 import Instructor from './components/Instructor';
 import InstructorList from './components/InstructorList';
 import Request from './components/Request';
 import EventActions from './components/EventActions';
import LoginCheck from './components/LoginCheck';
import { ThemeContextProvider } from './components/ThemeContext';


function App() {
  const instructor ={

    firstname:'can',
    lastname: 'boz',
  };

  const instructorList = [
    {
      firstName: 'Can',
      lastName: 'Boz',
    },
    {
      firstName: 'Canan',
      lastName: 'Boz',
    },
    {
      firstName: 'Osman',
      lastName: 'Boz',
    },
  ];
  return (
    <div className="App">
     {/* <Home isBest={false} courseNumber={35} name="can boz"/>
     <Instructor instructorNameLastName={instructor}/>
     <InstructorList instructorNameLastNameList={instructorList} />
     <Request status="loading"/>
     <EventActions/> */}
     {/* <LoginCheck/> */}


     

    </div>
  );
}

export default App;
