import './Test3.css'
import { useEffect,useState } from 'react'
function Test3(){
    let [counter,Setcouter]=useState(0)
    useEffect(()=>{
        console.log("hi everyone")
    },[])
    //if the dependicancies array is not present then the content will be loaded at every time
    //whenever the evvent has been ocured
    function handlecounter(){
        Setcouter(counter+1)
    }
    return(
        <div>
            <h2>Test-3</h2>
            <h2>counter is {counter}</h2>
            <button onClick={handlecounter}>Increament</button>
        </div>
    )
    
}
export default Test3