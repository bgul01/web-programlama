
import './App.css';
import MovNav from './MovNav';
import Caro from './Caro';
import Movies from './Movies';
import Carousel from 'react-bootstrap/Carousel';
function App() {
 
  return (
    <div className="App">
      <div className='container-fluid'>
      <MovNav/>
      <Carousel className=''  >
   
   
    <Carousel.Item>
      
    <Caro/>

      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
        
        <div>
        <Carousel className=''  >
   
   
   <Carousel.Item>
     
        <Movies  />

     <Carousel.Caption>
       
     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>


        
        </div>
      </div>
    </div>
  );
}

export default App;
