import './Header.css'
import {Link} from 'react-router-dom'
function Header(){
    return(
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="login" className="nav-link">Login</Link>
                </li>
            </ul>
        </div>
    )
}
export default Header