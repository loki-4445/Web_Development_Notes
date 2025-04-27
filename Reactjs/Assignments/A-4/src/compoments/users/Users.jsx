import './Users.css'
import { useState, useEffect } from 'react'
import UsersCount from '../usersCount/usersCount'

function Users() {
    let [users, setUsers] = useState([])
    let [count, setCount] = useState(0)

    async function getData() {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await res.json()
        setUsers(data)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        console.log(users)
    }, [])

    function incrementCounter() {
        setCount(count + 1)
    }

    return (
        <div>
            <UsersCount count={count} />
            
                <div>
                    {users.length > 0 ? (
                        <ul className='row'>
                           <div className="card w-50 mx-auto col-sm-11 col-md-8"> {users.map(user => (
                                <li className="card-body m-5 bg-warning text-center text-wrap" key={user.id}>
                                    <h2 className='bg-light'>{user.name}</h2>
                                    <p>{user.id}</p>
                                    <p>{user.username}</p>
                                    <p>{user.phone}</p>
                                    <p>{user.email}</p>
                                    <button onClick={incrementCounter}>Submit</button>
                                </li>
                            ))}</div>
                        </ul>
                    ) : (
                        'Loading...'
                    )}
                </div>
            </div>
      
    )
}

export default Users
