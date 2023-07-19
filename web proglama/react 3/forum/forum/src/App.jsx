import { useState } from 'react'

import './App.css'
import TaskCreate from './component/TaskCreate'
import TaskList from './component/TaskList'

function App() {

  const [Task, setTask] = useState([])
  const createTask = (baslik,acik)=>{

    const createdTask = [ ...Task,{
      id:Math.round(Math.random()*999999),
      title:baslik,
      desc:acik,

    }

    ]

    setTask(createdTask);

   

 }

 const onDelete = (id)=> {

  const afetdlete = Task.filter((Task)=>{

    return Task.id !==id;
  })
  setTask(afetdlete)

 }

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}></TaskCreate>
      <TaskList tasks={Task} onDelete={onDelete}></TaskList>
    </div>
  )
}

export default App
