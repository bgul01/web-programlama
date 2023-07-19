
import './App.css';
 import {useState , useEffect} from 'react' ;

 function App() {


  const [can, setCan] = useState(0);
  const [tugba, setTugba] = useState(0);

 useEffect(() => {
console.log('ilk kez render edildiğinde çalışır')
 },[])
 useEffect(() => {
  console.log('her zaman çalışır')
   },)


   useEffect(() => {
    console.log('can render edilidğinde')
     },[can])


     useEffect(() => {
      console.log('tugba render edilidğinde')
       },[tugba])
  

       useEffect(() => {
        console.log('can ve tugba render edilidğinde')
         },[can,tugba])
   






  return (
    <div className="App">
      <div>
<button className='btn btn-success ' onClick={()  => setCan(can+1)}> Can ++ </button>
 <div>Can: {can} </div>
      </div>
      <div>
<button className='btn btn-success ms-2' onClick={()  => setTugba(tugba+1)}> tuğba ++ </button>
 <div>tuğba: {tugba} </div>
      </div>
     
    </div>
  );
}

export default App;
