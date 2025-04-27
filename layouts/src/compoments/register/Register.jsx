import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  // Initializing the useState
  let [registers, setRegister] = useState([]);
  // useNavigate hook
  let navigate = useNavigate();
  // It takes two arguments
  let { register, handleSubmit, formState: { errors } } = useForm();

  async function handleFormSubmit(userObj) {
    console.log(userObj);
    setRegister([...registers, userObj]); // Update state correctly
    try {
      let res = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userObj)
      });
      console.log(res);
      if (res.ok) {
        navigate('/login', { state: registers });
      } else {
        console.error("Server error:", res.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  return (
    // Creating the form for the user data entry
    <div className="form text-center">
      <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          {/* Using form validations...like min, max, minLength, maxLength, required, pattern */}
          <input type="text" name="username" {...register('username', { required: true, maxLength: 5, minLength: 2 })} id="username" />
          {/* displaying error messages */}
          {errors.username?.type === 'minLength' && <p className='text-danger'>Min length should be 2</p>}
          {errors.username?.type === 'maxLength' && <p className='bg-warning text-danger'>Max length should be 5</p>}
          {errors.username?.type === 'required' && <p className='text-danger'>Username is required</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input type="password" {...register('password', { required: true })} name="password" id="password" />
          {errors.password?.type === 'required' && <p className='text-danger'>Password is required</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="email">E-mail</label>
          <input type="email" {...register('email', { required: true })} name="email" id="email" />
          {errors.email?.type === 'required' && <p className='text-danger'>Email is required</p>}
        </div>
        <button type="submit" className="bg-success text-white">Submit</button>
      </form>
    </div>
  );
}

export default Register;
