import { useLocation } from 'react-router-dom'
function Userdashboard() {
    let {state}=useLocation()
  return (
    <div>
        <h2>Userdashboard</h2>
        <p className="fs-2">{state.username}</p>
        <p className="fs-2">{state.email}</p>


    </div>
    
  )
}

export default Userdashboard