import "./Register.css"
import { useForm } from "react-hook-form"
function Register() {
    let {register,handleSubmit,formState:{errors}}=useForm()
    
    function handleRegister(data) {
        console.log(data)
    }
  return (
   <div className="card" style={{width:700}}>
   <div className="card-body">
   <form onSubmit={handleSubmit(handleRegister)}>
    <div className="mt-4" style={{display:"flex"}}>
        <div className="m-2">
            <label htmlFor="fname">Frist Name</label>
            <input type="text" {...register('fname',{required:true,maxLength:8,minLength:6})} name="fname" id="fname" />
            {errors.fname?.type==='required'&&<p className="text-danger">Required</p>}
            {errors.fname?.type==='maxLength'&&<p className="text-danger">Max length should be 8</p>}
            {errors.fname?.type==='minLength'&&<p className="text-danger">Min length should be 6</p>}


        </div>
        <div className="m-2">
            <label htmlFor="lname">Last Name</label>
            <input type="text" {...register('lname',{required:true,maxLength:8,minLength:6})} name="lname" id="lname" />
            {errors.lname?.type==='required'&&<p className="text-danger">Required</p>}
            {errors.lname?.type==='maxLength'&&<p className="text-danger">Max length should be 8</p>}
            {errors.lname?.type==='minLength'&&<p className="text-danger">Min length should be 6</p>}
        </div>
    </div>
    <div className="mt-4" style={{display:"flex"}}>
        <div className="m-2">
            <label htmlFor="bday">Birth day</label>
            <input type="date" {...register('bday',{required:true})} name="bday" id="bday" />
            {errors.bday?.type==='required'&&<p className="text-danger">Required</p>}

        </div>
        <div className="m-2">
            <label className="gen mx-3"  htmlFor="gender">Gender</label>
            <input  type="radio" {...register('gender',{required:true})} className="op" name="gender" id="male" />
            <label htmlFor="male"  className="mx-2">male</label>
            <input type="radio" {...register('gender',{required:true})}  name="gender" id="female" />
            <label htmlFor="female" className="mx-2">Female</label>
            {errors.gender?.type==='required'&&<p className="text-danger">Required</p>}
        </div>
    </div>
    <div className="mt-4" style={{display:"flex"}}>
        <div className="m-2">
            <label htmlFor="mail">Email</label>
            <input type="email" {...register('mail',{required:true})} name="mail" id="mail" />
            {errors.mail?.type==='required'&&<p className="text-danger">Required</p>}
        </div>
        <div className="m-2">
            <label htmlFor="num">Phone number</label>
            <input type="tel" {...register('num',{required:true,maxLength:10,minLength:10})} name="num" id="num" />
            {errors.num?.type==='required'&&<p className="text-danger">Required</p>}
            {errors.num?.type==='maxLength'&&<p className="text-danger">Should be 10 digits</p>}
            {errors.num?.type==='minLength'&&<p className="text-danger">Should be 10 digits</p>}
        </div>
    </div>
    <div className="mt-4">
        <label htmlFor="sub">Subject</label>
        <br />
        <select {...register('sub',{required:true})} name="sub" id="sub">
            <option value="">Select a Subject</option>
            <option value="math">Maths</option>
            <option value="java">java</option>
            <option value="react">react</option>
            <option value="vue">Vue</option>

        </select>
        {errors.sub?.type==='required'&&<p className="text-danger">Required</p>}
    </div>
    <button className="bg-success mt-5 text-white text-center" type="submit">Submit</button>
</form>
   </div>
   </div>
  )
}

export default Register