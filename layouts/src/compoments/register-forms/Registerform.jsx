import {useLocation} from 'react-router-dom'
function Registerform() {


  return (
    <div>
      <h2 className="bg-light bg-primary mx-auto">List of users</h2>
      {/* <table className='mx-auto mt-5 pt-5 table-bordered'>
        <thead>
          <tr>
            <th className='p-5'>Username</th>
            <th className='p-5'>Password</th>
            <th className='p-5'>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((obj, index) => (
            <tr key={index}>
              <td>{obj.username}</td>
              <td>{obj.password}</td>
              <td>{obj.email}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default Registerform;
