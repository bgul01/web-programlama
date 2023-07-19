import React from 'react'
import {useSearchParams} from 'react-router-dom'



function Members() {

const[searchParams,setSearchParams]=useSearchParams() // AKTFİ ÜYLERİ BULMAK İÇİN
const isActive = searchParams.get('filter') === 'active';
  return( 

    <>
  <div>Members</div>
  
  <button onClick={()=> setSearchParams({filter:'active'})}>AKtİF ÜYELER</button>
  <button onClick={()=> setSearchParams()}>tüm üyeler</button>
  {isActive  ? <h2>aktif üyeler</h2> :<h2>tüm üyelerr</h2>  }
  </>
  )

  
}

export default Members