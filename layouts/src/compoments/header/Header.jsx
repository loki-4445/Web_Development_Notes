import './Header.css'
import {Link} from 'react-router-dom'
//import { FaHome } from "react-icons/fa";
function Header(){  
    return(
        
        <div>
            <ul className="navs  bg-secondary text-white">
                <li className="nav-item">
                    <Link to="" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="users" className="nav-link">Users</Link>
                </li>
                <li className="nav-item">
                    <Link to="parent" className="nav-link">Parent</Link>
                </li>
                <li className="nav-item">
                    <Link to="tasks" className="nav-link">Manage Tasks</Link>
                </li>
                <li className="nav-item">
                    <Link to="technologies" className="nav-link">Techonologies</Link>
                </li>
            </ul>
        </div>
    )
   
}
export default Header