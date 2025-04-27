import Addtasks from './Addtasks'
import TasksList from './TasksList'
import Taskscount from './Taskscount'
import { useState } from 'react'
function Managetasks() {
  let[tasks,settasks]=useState([])
  return (
   <div>
    <h2 className='text-center'>Task Managger</h2>
    <div className="row mx-auto mt-5 text-center">
      <div className="col-sm-4"><Addtasks tasks={{tasks,settasks}} /></div>
      <div className="col-sm-4"><TasksList tasks={tasks}/></div>
      <div className="col-sm-4"><Taskscount tasks={tasks}/></div> 
    </div>
   </div>
  )
}

export default Managetasks