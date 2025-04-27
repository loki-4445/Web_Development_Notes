import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
    let [userrr,setuserrr]=useState()
  async function handlingform(obj) {        
    try {
      let res = await fetch(`http://localhost:4000/users?username=${obj.username}&password=${obj.password}`);
      let data = await res.json();
      if (data.length === 0) {
       // Consider showing an error message on the UI
       setuserrr('Invaild')
      } else {
        navigate("/user-dash");
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Consider showing an error message on the UI
    }
  }

  return (
    <div>
      <form
        className="mx-auto text-center mt-5 bg-light w-50 p-5 border-shadow rounded-4"
        onSubmit={handleSubmit(handlingform)}
      >
        <div>
            {userrr==='Invaild'&& <p className="bg-danger">Username/Password error</p> }
          <label htmlFor="username" className="mt-5">
            Username
          </label>
          <input type="text" {...register("username")} name="username" id="username" />
        </div>
        <div className="mt-4">
          <label htmlFor="password">Password</label>
          <input type="password" {...register("password")} name="password" id="password" />
        </div>
        <div>
          <button type="submit" className="bg-success text-white mt-4">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
