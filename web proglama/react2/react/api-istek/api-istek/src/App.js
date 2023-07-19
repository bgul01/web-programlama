
import './App.css';
import SearchHeader from './Search';

function App() {
  const searchImages = (term)=> {
    axios.get('https://api.unsplash.com/search/photos',{
      Headers:{
Authorization : 'Client-ID v5fjdju8SMrxh7Li18gNvLhZ9k3q7sVo3YDmpJDD42Q'
      },
      params:{
        query:term
      }
    })


  };

  const handleSubmit = ()=> {
    searchImages(term);
  }
  return (
    <div className="App">
      <SearchHeader search = {handleSubmit}/>
    </div>
  );
}

export default App;
