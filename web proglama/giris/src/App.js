
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import SignIn from './SignIn';

function App() {

  
  return (
    <>  <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<SignIn/>} />
      <Route path='/Login' element={<Login/>} />

      </Routes>
      </>  
  
  );
}

export default App;
