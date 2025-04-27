import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Users() {
    let [users, setUsers] = useState([]);

    async function getdata() {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await res.json();
        setUsers(data);
    }

    useEffect(() => {
        getdata();
    }, []);

    return (
        <div>
            <h2 className="text-info text-center">User Details</h2>
            {users.length === 0 ? (
                <p>Loading...</p>
            ) : (
                users.map((userobj) => (
                    <p key={userobj.id}>
                        <Link 
                            to={`/users/${userobj.id}`}
                            state={{ user: userobj }}
                        >
                            {userobj.username}
                        </Link>
                    </p>
                ))
            )}
        </div>
    );
}

export default Users;
