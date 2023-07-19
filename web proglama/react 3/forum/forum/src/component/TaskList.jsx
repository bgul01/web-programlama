import React from 'react'
import TaskShow from './TaskShow'

const TaskList = ({tasks,onDelete}) => {
  return (
    <div>
{tasks.map((tasklarim,index)=>{

  return (

    <TaskShow key={index} taslak={tasklarim} onDelete={onDelete}></TaskShow>
  )
})}



    </div>
  )
}

export default TaskList