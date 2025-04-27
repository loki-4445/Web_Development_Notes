import Child from "../child/Child"
import { useState } from "react"
function Parent(){
    //for checking the performance of rendering 
     console.log("Parent compement rendering")
     
    let[counter,setcounter]=useState(0)
    let[getdata,setgetdata]=useState(0)
    function handlecounter(){
        setcounter(counter+1)
    }
 
    function getvalue(value){
        console.log(value)
        setgetdata(value)
        
    }
    return(
        <div className="mx-auto bg-primary text-center mt-5">
            <button type="button" onClick={handlecounter}>Increament</button>
            <h1>Parent-{counter}</h1>
            <h1>{getdata}</h1>
           <Child time={{counter,handlecounter,getvalue}}/>
        </div>
    )
}
export default Parent