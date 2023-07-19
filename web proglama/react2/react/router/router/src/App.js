
import './App.css';
import {Routes,Route} from 'react-router-dom'
import AboutUs from './components/AboutUs';
import Home from './components/home';
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import Wrong from './components/Wrong';
import History from './components/History';
import Company from './components/Company';
import Team from './components/Team';
import Members from './components/Members';
import MemberDetail from './components/MemberDetail';
import React from 'react';

const LazyAboutUs  = React.lazy(()=> import('./components/AboutUs.js'))
function App() {
  
  return (
    <div className="App">
      <Navbar/>
<Routes >
<Route path='/' element={<Home/>} ></Route>
{/* <Route path='/aboutUs' element={<AboutUs/> } ></Route> */}
<Route path='/aboutUs' 
element={
<React.Suspense>
<LazyAboutUs/> 
</React.Suspense>
} />

<Route path='/mission' element={<Mission/> } ></Route>
<Route path='/history' element={<History/> } >
<Route path='company' element={<Company/>}/>
<Route path='team' element={<Team/>}/>
</Route>
<Route path='/members' element={<Members/> } ></Route>
<Route path='/members/:memberId' element={<MemberDetail/> } ></Route>
<Route path='*' element={<Wrong/> } ></Route>
</Routes>

  

    </div>
  );
}

export default App;
