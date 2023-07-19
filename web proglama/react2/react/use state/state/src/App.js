import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [value, setValue] = useState(0)
  const handleClick  = () => {

    setValue(value + 1);
  }
  return (
    <div className="App">
      <button onClick={handleClick}>kurs ekle</button>
      <div>kurs sayısı : {value}</div>
    </div>
  );
}

export default App;
