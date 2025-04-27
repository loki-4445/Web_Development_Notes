import {Link,Outlet} from 'react-router-dom'
function Tech() {
  return (
    <div>
      {/* navs  */}
      <ul className="nav">
        <li className="nav-list">
          <Link to="java" className='nav-link'>Java</Link>
        </li>
        <li className="nav-list">
          <Link to="node" className='nav-link'>Node</Link>
        </li>
        <li className="nav-list">
          <Link to="vue" className='nav-link'>Vue</Link>
        </li>
        <Outlet />
      </ul>
    </div>
  )
}

export default Tech