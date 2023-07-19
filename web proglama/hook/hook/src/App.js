import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

function App() {

  const baslangicDegeri=0;
 const reducer = (state ,action)=> {

  switch(action){
 
      case 'increment':
      return state +1;
      case 'decrement':
        return state -1;
        case 'reset':
       
          return baslangicDegeri;        
      default:
        return state;

  }

 }
 const [count,dispatch]= useReducer(reducer,baslangicDegeri) // reducer bir fonksiyon
  
 
 
 
 
 return (
    <div className="App">
      <div>sayi = {count}</div>
      <button onClick={()=> dispatch('increment')}>+</button>
      <button onClick={()=> dispatch('decrement')}>-</button>
      <button onClick={()=> dispatch('reset')} >del</button>
    
    </div>
  );
}

export default App;
