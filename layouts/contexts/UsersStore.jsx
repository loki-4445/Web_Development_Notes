import React, { useState, useEffect } from 'react';
import { Userscontext } from './Userscontext';

function UsersStore({ children }) {
    const [users, setUsers] = useState([]);

    async function getdata() {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await res.json();
        setUsers(data);
    }

    useEffect(() => {
        getdata();
    }, []);

    return (
        <Userscontext.Provider value={{ users, setUsers }}>
            {children}
        </Userscontext.Provider>
    );
}

export default UsersStore;
