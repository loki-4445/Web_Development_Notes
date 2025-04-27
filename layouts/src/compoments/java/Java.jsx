import { sampleContext } from "../../../contexts/Testcontexts"
import { useContext } from "react"
function Java() {
  let{a,setA}=useContext(sampleContext)
  return (
    //making the contest example
    <div>
      <div className="card mx-auto mt-5 border-shadow w-50">
        <div className="card-body">
          <div className="lead">
            <h1>Java</h1>
            <h1>{a}</h1>
            {/* changing the value oof the context */}
            <button onClick={()=>setA(a+1)}>change</button>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum doloribus placeat natus ipsam soluta dolorem incidunt vitae maxime, quaerat suscipit.</p>
          </div>
          <div className="lead">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, minima. Iure, laborum quaerat. Aliquam distinctio amet beatae labore quaerat nihil praesentium eligendi modi, numquam suscipit dignissimos. Necessitatibus repellendus eveniet ipsum?</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Java