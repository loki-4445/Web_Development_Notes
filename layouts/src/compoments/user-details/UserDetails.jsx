import React from 'react';
import { useLocation } from 'react-router-dom';

function UserDetails() {
    let { state } = useLocation();
    
    if (!state || !state.user) {
        return (
            <div className="card">
                <div className="card-body">
                    <h2>User not found</h2>
                    <p className="lead">No user details available.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="card">
            <div className="card-body">
                <h2>{state.user.name}</h2>
                <p className="lead">{state.user.email}</p>
            </div>
        </div>
    );
}

export default UserDetails;
