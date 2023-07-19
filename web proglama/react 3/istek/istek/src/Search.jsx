import React, { useState } from 'react'

const Search = (onSubmit) => {

    const [value, setValue] = useState('')

    const tiklandi = (e)=>{
        e.prevent.default()
        onSubmit(value)


    }

    const degis = (e)=>{
 setValue(e.target.value)
    }
  return (
    <div>
        <form onSubmit={tiklandi}>
            <label>ne arıyorusn</label>
    <input value={value} type="text"  onChange={degis}/>
        </form>
    </div>
  )
}

export default Search