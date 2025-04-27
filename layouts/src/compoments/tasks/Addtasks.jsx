import React from 'react';
import { useForm } from 'react-hook-form';

function Addtasks(props) {
  const { tasks, settasks } = props; // Destructure tasks and settasks from props
  const { register, handleSubmit } = useForm(); // Destructure register and handleSubmit from useForm

  const handletasks = (data) => {
    console.log(data);
    settasks([...tasks, data.newtask]); // Add new task to the tasks array
  };

  return (
    <div>
      <h2 className="text-info">Add new Task</h2>
      <form onSubmit={handleSubmit(handletasks)}>
        <input
          type="text"
          name="newtask"
          id="newtask"
          placeholder="New Task"
          {...register('newtask', { required: true })} // Register the input field
        />
        <button type="submit" className="bg-success text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Addtasks;
