import {useForm} from 'react-hook-form'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register(){
    let [registers, setRegister] = useState([]);
  let navigate = useNavigate();
    let {register,handleSubmit}=useForm()
    function handleFormSubmit(userObj) {
        setRegister([...registers,userObj]) // Update state correctly
         navigate('/Listregisters',{state:registers})
         console.log(userObj)
       }
    return <div>
        <h2 className="bg-warning text-center" onSubmit={handleSubmit(handleFormSubmit)}>User Registeration</h2>
        <form >
        <div className="mt-5">
            <div className="p-5"><label htmlFor="usr">Username</label>
            <input type="text" name="usr" {...register('usr')} id="usr" />
            </div>
            <div className="p-5"><label htmlFor="dob">DOB</label>
           <input type="date" name="dob" id="dob" />
            </div>
            <div className="p-5"><label htmlFor="city">City</label>
            <input type="text" name="city" id="city" />
            </div>
        </div>
        <button type="submit" className='bg-success text-white'>Register</button>
             </form>
    </div>
}
export default Register