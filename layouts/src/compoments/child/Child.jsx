import { useState } from "react"

function Child(props){
    //{counter:0,handlecounter}
    let [value,setvalue]=useState(100)

    return (
        <div className="bg-warning p-5">
            <h1>Child-{props.time.counter}</h1>
            <button className="bg-danger" onClick={props.time.handlecounter}>Change</button>
               <button className="bg-light m-2" onClick={()=>props.time.getvalue(value)} > Get</button>
        </div>
    )
}
export default Child
