import { InfoOutlined, TimeToLeave, Title } from '@mui/icons-material'
import React, { useState } from 'react'



function CreateTask(props) {
 
    const [task, setTask] = useState({

       title:'',
       content:''

    })

    function detectChange(event){
        const {name,value}=event.target;
        setTask((prevTask)=>{
            return{

                ...prevTask,
                [name]:value,
            }
        })
    }

    function submit (event){

        props.onAdd(task);

        setTask({
            title:'',
            content:'' // gönderdikten sonra sıfırlar
        })

        event.preventDefault();


    }
   
  return (
    <div className='todoDivArea'>
        <form className='tododİV' >

            <input onChange={detectChange}  value={task.title} type="text" className='form-control todoText mb-3' name='title'placeholder='Başlık'/>

            <textarea onChange={detectChange} value={task.content} className='form-control todoText mb-3'  name="content" id="" cols="30" rows={3} placeholder='işini yaz'></textarea>

           <button onClick={submit} className='btn btn-primary todoButton'>ekle</button>
        </form>

    </div>
  )
}

export default CreateTask