import { useState } from 'react'

import './App.css'
import Search from './Search'
import axios from 'axios'

function App() {

  const [images, setİmages] = useState('')
  const serachImages = async (term)=>{


   await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID v5fjdju8SMrxh7Li18gNvLhZ9k3q7sVo3YDmpJDD42Q'
      },
      params:{
        query:term
      }
    })
    
    }

const tikla = async (term)=>{


const result =await serachImages(term);
setİmages(result)

}

  return (
    <div className="App">
      <Search onSubmit = {tikla}/>
    </div>
  )
}

export default App
