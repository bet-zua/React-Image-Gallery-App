//Stateless component -> class component
import React from 'react';

const NotFound = () => {
    return (
        <li className="not-found">
            <h2>No Results Found</h2>
            <p>You search did not return any results. Please try again.</p>
        </li>
    );
};

export default NotFound;