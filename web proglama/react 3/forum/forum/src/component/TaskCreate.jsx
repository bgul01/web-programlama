import React, { useState } from 'react'

const TaskCreate = ({onCreate,taslak,taskform}) => {
    const [baslik, setBaslik] = useState('')
    const [acik, setAcik] = useState('')
    
    const handleChange = (e)=>{

        setBaslik(e.target.value)
    }


    const handleChange2 = (e)=>{

        setAcik(e.target.value)
    }

    const handleSubmit = (e)=>{

       e.preventDefault();
       onCreate(baslik,acik)
       setBaslik('');
       setAcik('');

    }







  return (
<div>
    {taskform ?   <div className='task-form'>
       
    <form className='task' >
        <label >başlık</label>
        <input value={baslik} onChange={handleChange} type="text" />
        <label >task grin</label>
        <textarea value={acik} onChange={handleChange2}></textarea>
        <button onClick={handleSubmit}>oluştur</button>
    </form>
    
    
    
    
    
    </div> : <div className='task-form'>
        <h3>task ekle</h3>
    <form className='task' >
        <label >başlık</label>
        <input value={baslik} onChange={handleChange} type="text" />
        <label >task grin</label>
        <textarea value={acik} onChange={handleChange2}></textarea>
        <button onClick={handleSubmit}>oluştur</button>
    </form>
    
    
    
    
    
    </div> }
   
    </div>
  )
}

export default TaskCreate