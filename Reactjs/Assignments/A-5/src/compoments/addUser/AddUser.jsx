import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UserList from "../userslist/UserList";

function AddUser() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [users, setUsers] = useState([]);

    const handleRegister = (data) => {
        setUsers((prevUsers) => [...prevUsers, data]);
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className="card w-50 mx-auto mt-5">
                    <div className="card-body mx-auto text-center">
                        <div className="mt-5">
                            <label htmlFor="username">Username</label>
                            <input type="text" {...register('username', { required: true, minLength: 4, maxLength: 8 })} id="username" />
                            {errors.username && <p className="text-danger">{errors.username.type === 'required' ? "Username is required" : errors.username.type === 'minLength' ? "Min length is 4" : "Max length is 8"}</p>}
                        </div>
                        <div className="mt-5">
                            <label htmlFor="date" className="">Date of Birth</label>
                            <input type="date" {...register('date', { required: true })} id="date" />
                            {errors.date && <p className="text-danger">Date of birth is required</p>}
                        </div>
                        <div className="mt-5">
                            <label htmlFor="city">City</label>
                            <input type="text" {...register('city', { required: true })} id="city" />
                            {errors.city && <p className="text-danger">City is required</p>}
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="bg-success">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
           <div className="mt-5 mx-auto w-50">
           <UserList users={users} />
           </div>
        </div>
    );
}

export default AddUser;
