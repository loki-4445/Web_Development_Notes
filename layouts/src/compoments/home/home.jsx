import React, { useContext } from 'react';
import { sampleContext } from '../../../contexts/Testcontexts';
import { Userscontext } from '../../../contexts/Userscontext';

function Home() {
    const { a, setA } = useContext(sampleContext);
    const { users } = useContext(Userscontext);

    return (
        <div className="text-center">
            <h1>{a}</h1>
            <h1>{users[0]?.username}</h1>
            <button onClick={() => setA(a + 10)} className="bg-success text-white text-center">
                Change
            </button>
            <h1>Home</h1>
        </div>
    );
}

export default Home;
