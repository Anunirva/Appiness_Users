import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <p>Sorry the page is closed..!!</p>
            <Link to="/">SignIn</Link>
        </div>
    )
}

export default NotFound;
