import React from 'react'

function Taskscount(props) {
  return (
   <div>
     <h2 className='text-info'>No of Tasks</h2>
     <h2>{props.tasks.length}</h2>
   </div>
  )
}

export default Taskscount