import React from 'react'

const User = (user) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Name:{user.user.name}</h5>
                <p className="card-text">Email:{user.user.email}.</p>
                <p className="card-text">Age:{user.user.age}.</p>
                <p className="card-text">Gender:{user.user.gender}.</p>
                <p className="card-text">PhoneNo:{user.user.phoneNo}.</p>
            </div>
        </div>
    );
}
export default User;