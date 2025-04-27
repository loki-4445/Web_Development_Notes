import React from "react";

function UserList({ users = [] }) {
    return (
        <div>
            <table className="text-center">
                <thead className="bg-light text-center mx-auto">
                    <tr>
                        <th className="px-5">Username</th>
                        <th className="px-5">Date of Birth</th>
                        <th className="px-5">City</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((person, index) => (
                        <tr key={index}>
                            <td>{person.username}</td>
                            <td>{person.date}</td>
                            <td>{person.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
