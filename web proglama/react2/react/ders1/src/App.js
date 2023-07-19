
import './App.css';

function App() {
const name  = 'hey gidi koca dünya';
const sayi  = 3500;
const url  = 'www.youtube.com';


  return (
   <div>

     <h1>merhabalar</h1>
     <p>merhaba dünyalı</p>
      <p>{name}</p>
      <p>{sayi}</p>
      <a href={url}>tıklayınız</a>
       </div>
  );
}

export default App;
