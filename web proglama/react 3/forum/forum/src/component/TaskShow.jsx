import React, { useState } from 'react'
import TaskCreate from './TaskCreate'

const TaskShow = ({taslak,onDelete}) => {
const [showEdit, setshowEdit] = useState(false)
    const sil = ()=> {

        onDelete(taslak.id)

        
    }
  const edit = () => {

    setshowEdit(!showEdit)


  }
  return (
    <div>
        {showEdit ? <TaskCreate taslak={taslak} taskform={true}/>:        <div>
<h3>göreviniz</h3>
<p>{taslak.title}</p>
<h3>yapıalcak</h3>
<p>{taslak.desc}</p>
</div> }


<div>

    <button onClick={sil}>sil</button>
    <button onClick={edit}>değiştir</button>
</div>

    </div>
  )
}

export default TaskShow