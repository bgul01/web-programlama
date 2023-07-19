
import 'bulma/css/bulma.css';
import './App.css';
import { Course } from './Course';
import Angular from './images/angular.jpg'
import Bootstrap5 from './images/bootstrap5.png'
import Ccsharp from './images/ccsharp.png'
import Kompleweb from './images/kompleweb.jpg'

function App() {
  return (
  
    <div className="App">
      <section className="hero is-link">
  <div className="hero-body">
    <p className="title">
     KURSLARIM
    </p>
    
  </div>
</section>
      <div className='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
          <Course
       image={Angular}
       title="Angular"
        description="lorem lorem lorem lorem lorem loremlorem lorem loremlorem
      lorem lorem loremlorem lorem loremlorem lorem lorem  " />
          </div>

          <div className='column'>
          <Course
       image={Angular}
       title="Angular"
        description="lorem lorem lorem lorem lorem loremlorem lorem loremlorem
      lorem lorem loremlorem lorem loremlorem lorem lorem  " />
          </div>

          <div className='column'>
          <Course image={Bootstrap5} title="bootsratp" description="lorem lorem lorem lorem lorem loremlorem lorem loremlorem
      lorem lorem loremlorem lorem loremlorem lorem lorem  " />
          </div>
          <div className='column'>
          <Course image={Ccsharp} title="REACT" description="lorem lorem lorem lorem lorem loremlorem lorem loremlorem
      lorem lorem loremlorem lorem loremlorem lorem lorem  " />
          </div>
          <div className='column'>
          <Course image={Kompleweb}  title="VUE.JS" description="lorem lorem lorem lorem lorem loremlorem lorem loremlorem
      lorem lorem loremlorem lorem loremlorem lorem lorem  " />
          
       
          </div>
          


        </div>
        </section>
      </div>
      
         
           
          
      
      
    </div>
  );
}

export default App;
